/* Xera Bank — Contact Page Analytics */
(function () {
  'use strict';

  var A = window.XeraAnalytics;
  if (!A) return;

  var CONTACT_FORM_NAME = 'Contact Us Form';

  A.onReady(function () {
    /* 46 — Contact form load */
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
      A.trackForm('formLoad', CONTACT_FORM_NAME, 'Load', { applicationStatus: 'Pending' });

      var formStarted = false;
      contactForm.querySelectorAll('input, select, textarea').forEach(function (field) {
        field.addEventListener('focus', function () {
          if (!formStarted) {
            formStarted = true;
            A.trackForm('formStart', CONTACT_FORM_NAME, 'Start', { applicationStatus: 'Completed' });
          }
        });
      });

      /* 47 — Contact form validation (success handled in main.js) */
    }

    /* 48 — Branch locator search */
    var branchForm = document.getElementById('branchSearchForm');
    if (branchForm) {
      branchForm.addEventListener('submit', function (e) {
        var input = branchForm.querySelector('input');
        var term = input ? input.value.trim() : '';
        if (term) {
          A.trackCTA('Branch Search', 'Branch Locator', 'button', 'Branch Locator');
          A.pushEvent('branchSearch', {
            eventInfo: {
              eventName: 'Branch Search',
              eventCategory: 'engagement',
              eventAction: 'search',
              eventLabel: term,
              component: 'form',
              placement: 'Branch Locator',
              regionPath: A.getRegionPath()
            },
            search: { term: term }
          });
        }
      });

      /* 49 — Branch search results displayed */
      var results = document.getElementById('branchResults');
      if (results) {
        var resultObserver = new MutationObserver(function () {
          if (results.classList.contains('visible') && results.children.length > 0) {
            A.pushEvent('branchSearchResult', {
              eventInfo: {
                eventName: 'Branch Search Results',
                eventCategory: 'engagement',
                eventAction: 'display',
                eventLabel: String(results.children.length) + ' results',
                component: 'results',
                placement: 'Branch Locator',
                regionPath: A.getRegionPath()
              },
              search: { resultCount: results.children.length }
            });
          }
        });
        resultObserver.observe(results, { childList: true, attributes: true, attributeFilter: ['class'] });
      }
    }

    /* 50 — Map embed interaction */
    var mapEmbed = document.querySelector('.map-embed iframe');
    if (mapEmbed) {
      mapEmbed.addEventListener('load', function () {
        A.trackEngagement('Branch Map', 'Map Loaded', 'Branch Locator');
      });
    }

    /* 51 — FAQ section view */
    var faqs = document.getElementById('faqs');
    if (faqs && 'IntersectionObserver' in window) {
      var faqsObserved = false;
      new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !faqsObserved) {
            faqsObserved = true;
            A.trackEngagement('FAQs', 'Section Viewed', 'FAQs');
          }
        });
      }, { threshold: 0.3 }).observe(faqs);
    }

    /* 52 — FAQ inline links */
    document.querySelectorAll('#faqs a').forEach(function (el) {
      el.addEventListener('click', function () {
        A.trackCTA(el.textContent.trim(), 'FAQs', 'link', 'Navigation Clicks');
      });
    });

    /* 53 — Grievance section view */
    var grievance = document.getElementById('grievance');
    if (grievance && 'IntersectionObserver' in window) {
      var grievanceObserved = false;
      new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !grievanceObserved) {
            grievanceObserved = true;
            A.trackEngagement('Grievance Redressal', 'Section Viewed', 'Grievance');
          }
        });
      }, { threshold: 0.3 }).observe(grievance);
    }

    /* 54 — Hero call CTA */
    document.querySelectorAll('.page-hero a[href^="tel:"]').forEach(function (el) {
      el.addEventListener('click', function () {
        A.trackCTA('Hero Call CTA', 'Hero', 'link', 'Contact Clicks');
      });
    });
  });

  /* Expose for main.js form complete callback */
  window.XeraContactAnalytics = {
    trackFormComplete: function () {
      A.trackForm('formComplete', CONTACT_FORM_NAME, 'Completion', { applicationStatus: 'Completed' });
    }
  };
})();
