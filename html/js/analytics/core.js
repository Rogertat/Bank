/* Xera Bank — Analytics Core (Adobe Launch + GTM) */
(function () {
  'use strict';

  window.adobeDataLayer = window.adobeDataLayer || [];
  window.dataLayer = window.dataLayer || [];

  function pushEvent(event, data) {
    var payload = Object.assign({ event: event }, data || {});
    window.adobeDataLayer.push(payload);
    window.dataLayer.push(payload);
  }

  function getRegionPath() {
    return window.location.pathname;
  }

  function getPlacement(el) {
    if (!el || !el.closest) return 'Body';
    if (el.closest('.site-header')) return 'Header';
    if (el.closest('.slide-content') || el.closest('.hero-carousel')) return 'Banner';
    if (el.closest('.page-hero')) return 'Hero';
    if (el.closest('.product-card')) return 'Products';
    if (el.closest('.blog-card') || el.closest('.article-body')) return 'Blog';
    if (el.closest('.site-footer')) return 'Footer';
    if (el.closest('.idle-toast')) return 'Idle Toast';
    if (el.closest('.modal') || el.closest('.leader-modal')) return 'Modal';
    if (el.closest('#branch-locator')) return 'Branch Locator';
    if (el.closest('#faqs')) return 'FAQs';
    if (el.closest('#grievance')) return 'Grievance';
    if (el.closest('.contact-card')) return 'Contact';
    if (el.closest('.team-grid')) return 'Leadership';
    return 'Body';
  }

  function trackCTA(label, placement, component, eventName) {
    pushEvent('internalcampaignClick', {
      eventInfo: {
        eventName: eventName || 'CTA Clicks',
        eventCategory: 'engagement',
        eventAction: 'click',
        eventLabel: label,
        component: component || 'button',
        placement: placement || 'Body',
        regionPath: getRegionPath()
      }
    });
  }

  function trackForm(event, formName, category, extra) {
    var formData = {
      name: formName,
      category: category,
      applicationStatus: (extra && extra.applicationStatus) || 'Pending'
    };
    if (extra && extra.validationError) {
      formData.validationError = extra.validationError;
    }
    pushEvent(event, { form: formData });
  }

  function trackSearch(event, term) {
    var key = event === 'searcheswithResult' ? 'withResult' : 'withoutResult';
    var searches = {};
    searches[key] = term;
    pushEvent(event, { searches: searches });
  }

  function trackEngagement(eventName, label, placement) {
    pushEvent('engagementEvent', {
      eventInfo: {
        eventName: eventName,
        eventCategory: 'engagement',
        eventAction: 'interaction',
        eventLabel: label,
        component: 'ui',
        placement: placement || 'Body',
        regionPath: getRegionPath()
      }
    });
  }

  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  function bindClick(selector, handler) {
    onReady(function () {
      document.querySelectorAll(selector).forEach(function (el) {
        el.addEventListener('click', function (e) {
          handler(el, e);
        });
      });
    });
  }

  function bindClickDelegate(containerSelector, childSelector, handler) {
    onReady(function () {
      var container = document.querySelector(containerSelector);
      if (!container) return;
      container.addEventListener('click', function (e) {
        var target = e.target.closest(childSelector);
        if (target && container.contains(target)) {
          handler(target, e);
        }
      });
    });
  }

  window.XeraAnalytics = {
    pushEvent: pushEvent,
    getRegionPath: getRegionPath,
    getPlacement: getPlacement,
    trackCTA: trackCTA,
    trackForm: trackForm,
    trackSearch: trackSearch,
    trackEngagement: trackEngagement,
    onReady: onReady,
    bindClick: bindClick,
    bindClickDelegate: bindClickDelegate
  };
})();
