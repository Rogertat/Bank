/* Xera Bank — Main JavaScript */
(function () {
  'use strict';

  // Analytics helpers
  window.adobeDataLayer = window.adobeDataLayer || [];
  window.dataLayer = window.dataLayer || [];

  function pushEvent(event, data) {
    var payload = Object.assign({ event: event }, data || {});
    window.adobeDataLayer.push(payload);
    window.dataLayer.push(payload);
  }

  // Page load
  pushEvent('pageLoad', {
    pageInfo: {
      name: document.title,
      url: location.href,
      applicationStatus: 'Test'
    }
  });


  // Search result tracking from URL
  var urlParams = new URLSearchParams(window.location.search);
  var searchTerm = urlParams.get('search');
  if (searchTerm) {
    var found = document.body.innerText.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    if (found) {
      pushEvent('searcheswithResult', { searches: { withResult: searchTerm } });
    }
  }

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initScrollProgress();
    initStickyHeader();
    initBackToTop();
    initScrollAnimations();
    initNavDropdowns();
    initMobileMenu();
    initSearch();
    initCarousel();
    initModals();
    initForms();
    initBranchLocator();
    initHighlightFromHash();
    initIdleToast();
    initLeaderProfiles();
  }

  /* Scroll progress bar */
  function initScrollProgress() {
    var bar = document.querySelector('.scroll-progress');
    if (!bar) return;
    window.addEventListener('scroll', function () {
      var scrollTop = window.scrollY;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = progress + '%';
    }, { passive: true });
  }

  /* Sticky header */
  function initStickyHeader() {
    var header = document.querySelector('.site-header');
    if (!header) return;
    var hero = document.querySelector('.hero-carousel, .page-hero');
    var threshold = hero ? hero.offsetHeight * 0.3 : 100;

    window.addEventListener('scroll', function () {
      if (window.scrollY > threshold) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* Back to top */
  function initBackToTop() {
    var btn = document.querySelector('.back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* Scroll animations */
  function initScrollAnimations() {
    var elements = document.querySelectorAll('.animate-on-scroll');
    if (!elements.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(function (el) { observer.observe(el); });
  }

  /* Nav dropdowns */
  function initNavDropdowns() {
    var dropdowns = document.querySelectorAll('.nav-dropdown');

    dropdowns.forEach(function (dd) {
      var toggle = dd.querySelector('.nav-dropdown-toggle');
      if (!toggle) return;

      toggle.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          dd.classList.toggle('open');
          dropdowns.forEach(function (other) {
            if (other !== dd) other.classList.remove('open');
          });
        }
      });
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.nav-dropdown')) {
        dropdowns.forEach(function (dd) { dd.classList.remove('open'); });
      }
    });
  }

  /* Mobile menu */
  function initMobileMenu() {
    var toggle = document.querySelector('.mobile-toggle');
    var nav = document.querySelector('.main-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
  }

  /* Search */
  var searchSuggestions = [
    { label: 'Home Loan', target: 'products.html#home-loan', keywords: ['home', 'loan', 'mortgage'] },
    { label: 'Credit Card', target: 'products.html#credit-card', keywords: ['credit', 'card'] },
    { label: 'Savings Account', target: 'products.html#savings', keywords: ['savings', 'save'] },
    { label: 'Branch Locator', target: 'contact.html#branch-locator', keywords: ['branch', 'locator', 'atm'] },
    { label: 'Personal Loan', target: 'products.html#personal-loan', keywords: ['personal', 'loan'] },
    { label: 'Contact Us', target: 'contact.html', keywords: ['contact', 'help'] }
  ];

  function initSearch() {
    var toggle = document.querySelector('.search-toggle');
    var panel = document.querySelector('.search-panel');
    var input = document.querySelector('#siteSearch');
    var suggestions = document.querySelector('.search-suggestions');
    if (!toggle || !panel || !input) return;

    toggle.addEventListener('click', function () {
      panel.classList.toggle('open');
      if (panel.classList.contains('open')) {
        input.focus();
      }
      pushEvent('internalcampaignClick', {
        eventInfo: {
          eventName: 'CTA Clicks',
          eventCategory: 'engagement',
          eventAction: 'click',
          eventLabel: 'Search',
          component: 'button',
          placement: 'Header',
          regionPath: window.location.pathname
        }
      });
    });

    input.addEventListener('input', function () {
      var term = input.value.trim().toLowerCase();
      if (!term || !suggestions) {
        if (suggestions) suggestions.classList.remove('visible');
        return;
      }

      var matches = searchSuggestions.filter(function (s) {
        return s.label.toLowerCase().indexOf(term) !== -1 ||
          s.keywords.some(function (k) { return k.indexOf(term) !== -1 || term.indexOf(k) !== -1; });
      });

      suggestions.innerHTML = '';
      if (matches.length) {
        matches.forEach(function (match) {
          var li = document.createElement('li');
          li.textContent = match.label;
          li.setAttribute('role', 'option');
          li.addEventListener('click', function () {
            navigateToSuggestion(match);
          });
          suggestions.appendChild(li);
        });
        suggestions.classList.add('visible');
      } else {
        suggestions.classList.remove('visible');
      }
    });

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        var term = input.value.trim().toLowerCase();
        var match = searchSuggestions.find(function (s) {
          return s.label.toLowerCase().indexOf(term) !== -1;
        });
        if (match) {
          navigateToSuggestion(match);
        } else if (term) {
          pushEvent('searcheswithoutResult', { searches: { withoutResult: term } });
        }
      }
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.search-wrapper')) {
        panel.classList.remove('open');
        if (suggestions) suggestions.classList.remove('visible');
      }
    });
  }

  function navigateToSuggestion(match) {
    pushEvent('searcheswithResult', { searches: { withResult: match.label } });
    var parts = match.target.split('#');
    var page = parts[0];
    var hash = parts[1];

    if (page === location.pathname.split('/').pop() || (page === 'index.html' && location.pathname.endsWith('/'))) {
      if (hash) scrollToSection(hash);
    } else {
      window.location.href = match.target;
    }
  }

  function scrollToSection(id) {
    var el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('highlight-section');
      setTimeout(function () { el.classList.remove('highlight-section'); }, 2000);
    }
  }

  function initHighlightFromHash() {
    if (location.hash) {
      setTimeout(function () {
        scrollToSection(location.hash.slice(1));
      }, 500);
    }
  }

  /* Carousel */
  function initCarousel() {
    var track = document.querySelector('.carousel-track');
    if (!track) return;

    var slides = track.querySelectorAll('.carousel-slide');
    var dots = document.querySelectorAll('.carousel-dot');
    var prevBtn = document.querySelector('.carousel-prev');
    var nextBtn = document.querySelector('.carousel-next');
    var wrapper = document.querySelector('.hero-carousel');
    var current = 0;
    var total = slides.length;
    var interval;
    var paused = false;

    function goTo(index) {
      current = (index + total) % total;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      dots.forEach(function (d, i) {
        d.classList.toggle('active', i === current);
      });
    }

    function startAuto() {
      clearInterval(interval);
      interval = setInterval(function () {
        if (!paused) goTo(current + 1);
      }, 5000);
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); startAuto(); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); startAuto(); });

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { goTo(i); startAuto(); });
    });

    if (wrapper) {
      wrapper.addEventListener('mouseenter', function () { paused = true; });
      wrapper.addEventListener('mouseleave', function () { paused = false; });
    }

    goTo(0);
    startAuto();
  }

  /* Modals */
  function initModals() {
    // Close buttons
    document.querySelectorAll('[data-modal-close]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var modal = btn.closest('.modal-overlay');
        if (modal) closeModal(modal);
      });
    });

    // Close on overlay click
    document.querySelectorAll('.modal-overlay').forEach(function (overlay) {
      overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeModal(overlay);
      });
    });

    // Apply Now buttons
    document.querySelectorAll('[data-apply-modal]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var product = btn.getAttribute('data-product') || '';
        var select = document.getElementById('applyProduct');
        if (select && product) select.value = product;
        openModal(document.getElementById('applyModal'));
      });
    });
  }

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  window.XeraBank = { openModal: openModal, closeModal: closeModal };

  /* Forms */
  function initForms() {
    // Contact form
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
      var formName = 'Contact Us Form';
      pushEvent('formLoad', { form: { name: formName, category: 'Load', applicationStatus: 'Pending' } });

      var formStarted = false;
      contactForm.querySelectorAll('input, select, textarea').forEach(function (field) {
        field.addEventListener('focus', function () {
          if (!formStarted) {
            formStarted = true;
            pushEvent('formStart', { form: { name: formName, category: 'Start', applicationStatus: 'Completed' } });
          }
        });

        field.addEventListener('blur', function () {
          validateField(field);
        });
      });

      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var valid = true;
        contactForm.querySelectorAll('[required]').forEach(function (field) {
          if (!validateField(field)) valid = false;
        });

        var phone = contactForm.querySelector('#phone');
        if (phone && phone.value && !/^[0-9]{10}$/.test(phone.value)) {
          showFieldError(phone, 'Enter a valid 10-digit phone number');
          valid = false;
        }

        if (valid) {
          var success = contactForm.querySelector('.form-success') ||
            document.getElementById('contactSuccess');
          if (success) success.classList.add('visible');
          pushEvent('formComplete', { form: { name: formName, category: 'Completion', applicationStatus: 'Completed' } });
          contactForm.reset();
          contactForm.querySelectorAll('.valid, .invalid').forEach(function (f) {
            f.classList.remove('valid', 'invalid');
          });
          setTimeout(function () {
            if (success) success.classList.remove('visible');
          }, 5000);
        } else {
          pushEvent('formValidationError', {
            form: { name: formName, category: 'Form Validation', applicationStatus: 'Pending', validationError: 'Required fields missing' }
          });
        }
      });
    }

    // Newsletter form
    var newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var email = newsletterForm.querySelector('input[type="email"]');
        if (email && validateEmail(email.value)) {
          email.classList.add('valid');
          email.classList.remove('invalid');
          var msg = newsletterForm.querySelector('.form-success');
          if (msg) {
            msg.textContent = "Thank you! We'll get back to you within 24 hours.";
            msg.classList.add('visible');
          }
          newsletterForm.reset();
          setTimeout(function () { if (msg) msg.classList.remove('visible'); }, 5000);
        } else if (email) {
          email.classList.add('invalid');
          email.classList.remove('valid');
        }
      });
    }

    // Apply modal form
    var applyForm = document.getElementById('applyForm');
    if (applyForm) {
      applyForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var valid = true;
        applyForm.querySelectorAll('[required]').forEach(function (field) {
          if (!validateField(field)) valid = false;
        });
        if (valid) {
          closeModal(document.getElementById('applyModal'));
          applyForm.reset();
          alert("Thank you! We'll get back to you within 24 hours.");
        }
      });
    }
  }

  function validateField(field) {
    var value = field.value.trim();
    var isValid = true;

    if (field.hasAttribute('required') && !value) {
      showFieldError(field, 'This field is required');
      isValid = false;
    } else if (field.type === 'email' && value && !validateEmail(value)) {
      showFieldError(field, 'Enter a valid email address');
      isValid = false;
    } else if (value) {
      field.classList.add('valid');
      field.classList.remove('invalid');
      hideFieldError(field);
    } else {
      field.classList.remove('valid', 'invalid');
      hideFieldError(field);
    }

    return isValid;
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showFieldError(field, msg) {
    field.classList.add('invalid');
    field.classList.remove('valid');
    var err = field.parentElement.querySelector('.form-error');
    if (err) {
      err.textContent = msg;
      err.classList.add('visible');
    }
  }

  function hideFieldError(field) {
    var err = field.parentElement.querySelector('.form-error');
    if (err) err.classList.remove('visible');
  }

  /* Branch locator */
  var branchData = [
    { name: 'Xera Bank — Connaught Place', address: '12 Parliament Street, Connaught Place, New Delhi 110001', hours: 'Mon–Sat: 9:30 AM – 5:00 PM', phone: '+91 1800 123 4567' },
    { name: 'Xera Bank — Bandra West', address: '45 Hill Road, Bandra West, Mumbai 400050', hours: 'Mon–Sat: 9:30 AM – 5:00 PM', phone: '+91 1800 123 4567' },
    { name: 'Xera Bank — Koramangala', address: '88 5th Block, Koramangala, Bengaluru 560095', hours: 'Mon–Sat: 9:30 AM – 5:00 PM', phone: '+91 1800 123 4567' }
  ];

  function initBranchLocator() {
    var form = document.getElementById('branchSearchForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input');
      var results = document.getElementById('branchResults');
      if (!input || !results) return;

      if (!input.value.trim()) {
        input.classList.add('invalid');
        return;
      }
      input.classList.add('valid');
      input.classList.remove('invalid');

      results.innerHTML = '';
      branchData.forEach(function (branch) {
        var div = document.createElement('div');
        div.className = 'branch-result';
        div.innerHTML = '<h4>' + branch.name + '</h4>' +
          '<p>' + branch.address + '</p>' +
          '<p><strong>Hours:</strong> ' + branch.hours + '</p>' +
          '<p><strong>Phone:</strong> <a href="tel:+9118001234567">' + branch.phone + '</a></p>';
        results.appendChild(div);
      });
      results.classList.add('visible');
    });
  }

  /* Leader profile popups — About page */
  var leaders = [
    {
      id: 1,
      name: 'Arun Mehta',
      title: 'Managing Director & CEO',
      photo: 'assets/images/team/1.jpg',
      bio: 'Over 28 years in retail and corporate banking across India and Southeast Asia. Previously held senior roles at two of India\'s largest public sector banks before joining Xera Bank to lead its digital transformation journey. Passionate about financial inclusion and technology-led banking.',
      stats: ['28+ Yrs Experience', 'Ex-SBI & PNB', 'MBA, IIM Calcutta'],
      quote: 'Banking is not just about money — it is about trust, built one customer at a time.'
    },
    {
      id: 2,
      name: 'Priya Nair',
      title: 'Chief Financial Officer',
      photo: 'assets/images/team/2.jpg',
      bio: 'A seasoned finance leader with expertise in risk management, regulatory compliance, and capital markets. Priya has overseen balance sheet growth exceeding ₹40,000 Cr and has led Xera Bank through two successful credit rating upgrades. She is a certified Chartered Accountant and holds a postgraduate degree from LSE.',
      stats: ['22+ Yrs Experience', 'Chartered Accountant', 'PG, LSE London'],
      quote: 'Sound financial governance is the foundation every great bank is built on.'
    },
    {
      id: 3,
      name: 'Rajiv Sharma',
      title: 'Chief Technology Officer',
      photo: 'assets/images/team/3.jpg',
      bio: 'Rajiv leads Xera Bank\'s technology and digital banking strategy, driving the shift to cloud-native infrastructure and AI-powered customer experiences. He brings over 20 years of experience in fintech and enterprise technology, having previously built digital platforms for banks in India, UAE, and Singapore.',
      stats: ['20+ Yrs Experience', 'Fintech & Cloud Expert', 'B.Tech, IIT Bombay'],
      quote: 'The best bank branch is the one that fits in your pocket.'
    },
    {
      id: 4,
      name: 'Sunita Rao',
      title: 'Chief Risk Officer',
      photo: 'assets/images/team/4.jpg',
      bio: 'Sunita oversees enterprise risk, credit risk, and compliance across all of Xera Bank\'s retail and MSME portfolios. With a background spanning regulatory bodies and private sector banking, she ensures the bank maintains the highest standards of prudential risk management.',
      stats: ['18+ Yrs Experience', 'Ex-RBI', 'FRM Certified'],
      quote: 'Managing risk well means our customers can bank with confidence, always.'
    }
  ];

  function initLeaderProfiles() {
    var cards = document.querySelectorAll('.team-card[data-leader-id]');
    if (!cards.length) return;

    var overlay = document.getElementById('leaderModal');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'leaderModal';
      overlay.className = 'leader-modal-overlay';
      overlay.setAttribute('role', 'dialog');
      overlay.setAttribute('aria-modal', 'true');
      overlay.setAttribute('aria-hidden', 'true');
      overlay.innerHTML =
        '<div class="leader-modal">' +
          '<button type="button" class="leader-modal-close" aria-label="Close profile">&times;</button>' +
          '<div class="leader-modal-content"></div>' +
        '</div>';
      document.body.appendChild(overlay);
    }

    var modal = overlay.querySelector('.leader-modal');
    var content = overlay.querySelector('.leader-modal-content');
    var closeBtn = overlay.querySelector('.leader-modal-close');
    var triggerCard = null;
    var focusableSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    function getLeader(id) {
      return leaders.find(function (l) { return String(l.id) === String(id); });
    }

    function renderLeader(leader) {
      var statsHtml = leader.stats.join('<span class="leader-stat-sep">|</span>');

      content.innerHTML =
        '<img class="leader-modal-photo" src="' + leader.photo + '" alt="">' +
        '<h2 class="leader-modal-name" id="leaderModalName">' + leader.name + '</h2>' +
        '<p class="leader-modal-title">' + leader.title + '</p>' +
        '<p class="leader-modal-bio">' + leader.bio + '</p>' +
        '<div class="leader-modal-stats">' + statsHtml + '</div>' +
        '<hr class="leader-modal-divider">' +
        '<blockquote class="leader-modal-quote">' + leader.quote + '</blockquote>';

      content.querySelector('.leader-modal-photo').setAttribute('alt', leader.name);
    }

    function getFocusableElements() {
      return Array.prototype.slice.call(modal.querySelectorAll(focusableSelector))
        .filter(function (el) { return !el.disabled && el.offsetParent !== null; });
    }

    function trapFocus(e) {
      if (e.key !== 'Tab' || !overlay.classList.contains('open')) return;
      var focusable = getFocusableElements();
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    function openLeaderModal(card) {
      var leader = getLeader(card.getAttribute('data-leader-id'));
      if (!leader) return;

      triggerCard = card;
      renderLeader(leader);
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
      document.addEventListener('keydown', onKeydown);
      document.addEventListener('keydown', trapFocus);
    }

    function closeLeaderModal() {
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeydown);
      document.removeEventListener('keydown', trapFocus);
      if (triggerCard) {
        triggerCard.focus();
        triggerCard = null;
      }
    }

    function onKeydown(e) {
      if (e.key === 'Escape') closeLeaderModal();
    }

    closeBtn.addEventListener('click', closeLeaderModal);

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeLeaderModal();
    });

    cards.forEach(function (card) {
      card.addEventListener('click', function () { openLeaderModal(card); });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLeaderModal(card);
        }
      });
    });
  }

  /* Idle engagement toast — homepage only */
  function initIdleToast() {
    var toast = document.getElementById('idleToast');
    if (!toast) return;
    if (sessionStorage.getItem('idleToastDismissed')) return;

    var idleMs = 20000;
    var idleTimer = null;

    function dismissToast() {
      toast.classList.remove('visible');
      toast.setAttribute('aria-hidden', 'true');
      sessionStorage.setItem('idleToastDismissed', '1');
      clearTimeout(idleTimer);
      document.removeEventListener('mousemove', resetIdle);
      document.removeEventListener('mousedown', resetIdle);
      document.removeEventListener('keydown', resetIdle);
      document.removeEventListener('scroll', resetIdle);
      document.removeEventListener('touchstart', resetIdle);
    }

    function showToast() {
      if (sessionStorage.getItem('idleToastDismissed')) return;
      toast.classList.add('visible');
      toast.setAttribute('aria-hidden', 'false');
    }

    function resetIdle() {
      clearTimeout(idleTimer);
      if (sessionStorage.getItem('idleToastDismissed')) return;
      idleTimer = setTimeout(showToast, idleMs);
    }

    var closeBtn = document.getElementById('idleToastClose');
    if (closeBtn) closeBtn.addEventListener('click', dismissToast);

    var viewProductsBtn = document.getElementById('idleViewProducts');
    if (viewProductsBtn) {
      viewProductsBtn.addEventListener('click', function () {
        dismissToast();
        var section = document.getElementById('offerings');
        if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }

    toast.querySelectorAll('a[href*="wa.me"]').forEach(function (link) {
      link.addEventListener('click', dismissToast);
    });

    document.addEventListener('mousemove', resetIdle, { passive: true });
    document.addEventListener('mousedown', resetIdle);
    document.addEventListener('keydown', resetIdle);
    document.addEventListener('scroll', resetIdle, { passive: true });
    document.addEventListener('touchstart', resetIdle, { passive: true });

    idleTimer = setTimeout(showToast, idleMs);
  }
})();
