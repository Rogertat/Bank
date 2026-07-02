/* Xera Bank — Products Page Analytics */
(function () {
  'use strict';

  var A = window.XeraAnalytics;
  if (!A) return;

  var APPLY_FORM_NAME = 'Express Interest Form';

  A.onReady(function () {
    /* 35-40 — Product section views via hash anchors */
    var productIds = ['savings', 'current', 'personal-loan', 'home-loan', 'credit-card', 'fixed-deposit'];
    productIds.forEach(function (id) {
      var card = document.getElementById(id);
      if (!card || !('IntersectionObserver' in window)) return;
      var observed = false;
      new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !observed) {
            observed = true;
            A.pushEvent('productView', {
              eventInfo: {
                eventName: 'Product View',
                eventCategory: 'engagement',
                eventAction: 'view',
                eventLabel: id,
                component: 'product-card',
                placement: 'Products',
                regionPath: A.getRegionPath()
              },
              product: { id: id, name: card.querySelector('h3') ? card.querySelector('h3').textContent.trim() : id }
            });
          }
        });
      }, { threshold: 0.5 }).observe(card);
    });

    /* 41 — Apply Now button opens modal */
    document.querySelectorAll('[data-apply-modal]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var product = btn.getAttribute('data-product') || 'unknown';
        A.trackCTA('Apply Now: ' + product, 'Products', 'button', 'Product Application');
        A.pushEvent('modalOpen', {
          eventInfo: {
            eventName: 'Apply Modal Open',
            eventCategory: 'engagement',
            eventAction: 'open',
            eventLabel: product,
            component: 'modal',
            placement: 'Products',
            regionPath: A.getRegionPath()
          },
          product: { id: product }
        });
      });
    });

    /* 42 — Apply modal close */
    document.querySelectorAll('#applyModal [data-modal-close]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        A.pushEvent('modalClose', {
          eventInfo: {
            eventName: 'Apply Modal Close',
            eventCategory: 'engagement',
            eventAction: 'close',
            eventLabel: 'Express Interest',
            component: 'modal',
            placement: 'Modal',
            regionPath: A.getRegionPath()
          }
        });
      });
    });

    /* 43 — Apply form load */
    var applyForm = document.getElementById('applyForm');
    if (applyForm) {
      A.trackForm('formLoad', APPLY_FORM_NAME, 'Load', { applicationStatus: 'Pending' });

      var applyStarted = false;
      applyForm.querySelectorAll('input, select, textarea').forEach(function (field) {
        field.addEventListener('focus', function () {
          if (!applyStarted) {
            applyStarted = true;
            A.trackForm('formStart', APPLY_FORM_NAME, 'Start', { applicationStatus: 'Completed' });
          }
        });
      });

      /* 44 — Apply form submit */
      applyForm.addEventListener('submit', function (e) {
        var valid = true;
        applyForm.querySelectorAll('[required]').forEach(function (field) {
          if (!field.value.trim()) valid = false;
        });
        var email = applyForm.querySelector('#applyEmail');
        if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
          valid = false;
        }

        if (valid) {
          var product = applyForm.querySelector('#applyProduct');
          A.trackForm('formComplete', APPLY_FORM_NAME, 'Completion', { applicationStatus: 'Completed' });
          A.pushEvent('productApplication', {
            eventInfo: {
              eventName: 'Product Application Submit',
              eventCategory: 'conversion',
              eventAction: 'submit',
              eventLabel: product ? product.value : 'unknown',
              component: 'form',
              placement: 'Modal',
              regionPath: A.getRegionPath()
            },
            product: { id: product ? product.value : '' }
          });
        } else {
          A.trackForm('formValidationError', APPLY_FORM_NAME, 'Form Validation', {
            applicationStatus: 'Pending',
            validationError: 'Required fields missing or invalid'
          });
        }
      });
    }

    /* 45 — Learn More per product */
    document.querySelectorAll('.product-card .btn-outline').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var card = btn.closest('.product-card');
        var productName = card && card.querySelector('h3') ? card.querySelector('h3').textContent.trim() : 'Product';
        A.trackCTA('Learn More: ' + productName, 'Products', 'link', 'Product Clicks');
      });
    });
  });
})();
