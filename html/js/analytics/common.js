/* Xera Bank — Common Analytics (all pages) */
(function () {
  'use strict';

  var A = window.XeraAnalytics;
  if (!A) return;

  /* 01 — Page load */
  A.pushEvent('pageLoad', {
    pageInfo: {
      name: document.title,
      url: location.href,
      applicationStatus: 'Test'
    }
  });

  /* Global scroll depth — scrollDepth event at 25/50/75/100% */
  A.initScrollDepth([25, 50, 75, 100]);

  /* 02 — Search result from URL param */
  var urlParams = new URLSearchParams(window.location.search);
  var searchTerm = urlParams.get('search');
  if (searchTerm) {
    A.trackSearch(searchTerm);
  }

  A.onReady(function () {
    /* Hover — nav items and primary buttons */
    A.bindHover('.main-nav a', function (el) { return 'Nav Item: ' + el.textContent.trim(); });
    A.bindHover('.nav-dropdown-toggle', function (el) { return 'Nav Dropdown: ' + el.textContent.trim(); });
    A.bindHover('.dropdown-menu a', function (el) { return 'Nav Sub Item: ' + el.textContent.trim(); });
    A.bindHover('.header-phone', 'Header Phone');
    A.bindHover('.search-toggle', 'Search Toggle');
    A.bindHover('.btn-primary', function (el) { return el.textContent.trim(); });

    /* 03 — Logo click */
    A.bindClick('.logo-link', function () {
      A.trackCTA('Logo', 'Header');
    });

    /* 04 — Main navigation links */
    A.bindClick('.main-nav a', function (el) {
      A.trackCTA(el.textContent.trim(), 'Header');
    });

    /* 05 — Nav dropdown toggle */
    A.bindClick('.nav-dropdown-toggle', function (el) {
      A.trackCTA(el.textContent.trim(), 'Header');
    });

    /* 06 — Mobile menu toggle */
    A.bindClick('.mobile-toggle', function (el) {
      var expanded = el.getAttribute('aria-expanded') === 'true';
      A.trackCTA(expanded ? 'Close Menu' : 'Open Menu', 'Header');
    });

    /* 07 — Header phone click */
    A.bindClick('.header-phone', function () {
      A.trackCTA('Header Phone', 'Header');
    });

    /* 08 — Search toggle */
    A.bindClick('.search-toggle', function () {
      A.trackCTA('Search', 'Header');
    });

    /* 09 — Footer navigation links */
    A.bindClick('.footer-col a', function (el) {
      A.trackCTA(el.textContent.trim(), 'Footer');
    });

    /* 10 — Footer brand link */
    A.bindClick('.footer-brand a', function () {
      A.trackCTA('Footer Logo', 'Footer');
    });

    /* 11 — WhatsApp float */
    A.bindClick('.whatsapp-float', function () {
      A.trackCTA('WhatsApp Chat', 'Floating');
    });

    /* 12 — Back to top */
    A.bindClick('.back-to-top', function () {
      A.trackCTA('Back to Top', 'Floating');
    });

    /* 13 — Generic CTA buttons and read-more links */
    document.querySelectorAll('.btn, .read-more').forEach(function (el) {
      if (el.closest('.newsletter-form')) return;
      if (el.hasAttribute('data-apply-modal')) return;
      if (el.closest('.search-wrapper')) return;
      if (el.closest('.carousel-arrows') || el.closest('.carousel-dots')) return;
      if (el.id === 'idleViewProducts' || el.id === 'idleToastClose') return;
      if (el.closest('.team-card')) return;
      if (el.closest('.modal-overlay')) return;

      el.addEventListener('click', function () {
        A.trackCTA(el.textContent.trim(), A.getPlacement(el));
      });
    });

    /* 14 — Tel links (body) */
    document.querySelectorAll('a[href^="tel:"]').forEach(function (el) {
      if (el.closest('.header-phone')) return;
      el.addEventListener('click', function () {
        A.trackCTA(el.textContent.trim() || 'Phone Call', A.getPlacement(el));
      });
    });

    /* 15 — Mailto links */
    document.querySelectorAll('a[href^="mailto:"]').forEach(function (el) {
      el.addEventListener('click', function () {
        A.trackCTA(el.textContent.trim() || 'Email', A.getPlacement(el));
      });
    });

    /* 16 — Newsletter form load */
    var newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
      A.trackForm('formLoad', 'Newsletter Form', 'Newsletter', { applicationStatus: 'Pending' });

      var newsletterStarted = false;
      newsletterForm.addEventListener('focusin', function () {
        if (!newsletterStarted) {
          newsletterStarted = true;
          A.trackForm('formStart', 'Newsletter Form', 'Newsletter', { applicationStatus: 'Pending' });
        }
      }, true);

      /* 17 — Newsletter submit */
      newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var email = newsletterForm.querySelector('input[type="email"]');
        var valid = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
        if (valid) {
          A.trackForm('formComplete', 'Newsletter Form', 'Newsletter', { applicationStatus: 'Completed' });
          A.trackCTA('Subscribe', 'Footer');
        } else {
          A.trackForm('formValidationError', 'Newsletter Form', 'Newsletter', {
            applicationStatus: 'Pending',
            validationError: 'Invalid email address'
          });
        }
      });
    }
  });
})();
