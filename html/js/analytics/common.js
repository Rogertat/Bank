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

  /* 02 — Search result from URL param */
  var urlParams = new URLSearchParams(window.location.search);
  var searchTerm = urlParams.get('search');
  if (searchTerm) {
    var found = document.body.innerText.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    if (found) {
      A.trackSearch('searcheswithResult', searchTerm);
    }
  }

  A.onReady(function () {
    /* 03 — Logo click */
    A.bindClick('.logo-link', function (el) {
      A.trackCTA('Logo', 'Header', 'link', 'Navigation Clicks');
    });

    /* 04 — Main navigation links */
    A.bindClick('.main-nav a', function (el) {
      A.trackCTA(el.textContent.trim(), 'Header', 'link', 'Navigation Clicks');
    });

    /* 05 — Nav dropdown toggle */
    A.bindClick('.nav-dropdown-toggle', function (el) {
      A.trackCTA(el.textContent.trim(), 'Header', 'button', 'Navigation Clicks');
    });

    /* 06 — Mobile menu toggle */
    A.bindClick('.mobile-toggle', function (el) {
      var expanded = el.getAttribute('aria-expanded') === 'true';
      A.trackEngagement('Mobile Menu', expanded ? 'Close Menu' : 'Open Menu', 'Header');
    });

    /* 07 — Header phone click */
    A.bindClick('.header-phone', function (el) {
      A.trackCTA('Header Phone', 'Header', 'link', 'Contact Clicks');
    });

    /* 08 — Search toggle */
    A.bindClick('.search-toggle', function () {
      A.trackCTA('Search', 'Header', 'button', 'CTA Clicks');
    });

    /* 09 — Footer navigation links */
    A.bindClick('.footer-col a', function (el) {
      A.trackCTA(el.textContent.trim(), 'Footer', 'link', 'Navigation Clicks');
    });

    /* 10 — Footer brand link */
    A.bindClick('.footer-brand a', function () {
      A.trackCTA('Footer Logo', 'Footer', 'link', 'Navigation Clicks');
    });

    /* 11 — WhatsApp float */
    A.bindClick('.whatsapp-float', function () {
      A.trackCTA('WhatsApp Chat', 'Floating', 'link', 'Contact Clicks');
    });

    /* 12 — Back to top */
    A.bindClick('.back-to-top', function () {
      A.trackCTA('Back to Top', 'Floating', 'button', 'Navigation Clicks');
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
        A.trackCTA(el.textContent.trim(), A.getPlacement(el), el.tagName === 'A' ? 'link' : 'button');
      });
    });

    /* 14 — Tel links (body) */
    document.querySelectorAll('a[href^="tel:"]').forEach(function (el) {
      if (el.closest('.header-phone')) return;
      el.addEventListener('click', function () {
        A.trackCTA(el.textContent.trim() || 'Phone Call', A.getPlacement(el), 'link', 'Contact Clicks');
      });
    });

    /* 15 — Mailto links */
    document.querySelectorAll('a[href^="mailto:"]').forEach(function (el) {
      el.addEventListener('click', function () {
        A.trackCTA(el.textContent.trim() || 'Email', A.getPlacement(el), 'link', 'Contact Clicks');
      });
    });

    /* 16 — Newsletter form load */
    var newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
      A.trackForm('formLoad', 'Newsletter Form', 'Load', { applicationStatus: 'Pending' });

      var newsletterStarted = false;
      newsletterForm.querySelectorAll('input').forEach(function (field) {
        field.addEventListener('focus', function () {
          if (!newsletterStarted) {
            newsletterStarted = true;
            A.trackForm('formStart', 'Newsletter Form', 'Start', { applicationStatus: 'Completed' });
          }
        });
      });

      /* 17 — Newsletter submit */
      newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var email = newsletterForm.querySelector('input[type="email"]');
        var valid = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
        if (valid) {
          A.trackForm('formComplete', 'Newsletter Form', 'Completion', { applicationStatus: 'Completed' });
          A.trackCTA('Subscribe', 'Footer', 'button', 'CTA Clicks');
        } else {
          A.trackForm('formValidationError', 'Newsletter Form', 'Form Validation', {
            applicationStatus: 'Pending',
            validationError: 'Invalid email address'
          });
        }
      });
    }
  });
})();
