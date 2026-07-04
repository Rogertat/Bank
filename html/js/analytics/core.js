/* Xera Bank — Analytics Core (Adobe Launch + GTM) */
(function () {
  'use strict';

  window.adobeDataLayer = window.adobeDataLayer || [];
  window.dataLayer = window.dataLayer || [];

  function pushEvent(eventName, data) {
    window.adobeDataLayer = window.adobeDataLayer || [];
    window.dataLayer = window.dataLayer || [];
    var payload = Object.assign({ event: eventName }, data || {});
    window.adobeDataLayer.push(payload);
    window.dataLayer.push(payload);
  }

  function getRegionPath() {
    return window.location.pathname;
  }

  function getPlacement(el) {
    if (!el || !el.closest) return 'Body';
    if (el.closest('.site-header')) return 'Header';
    if (el.closest('.slide-content') || el.closest('.hero-carousel')) return 'Hero Banner';
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

  function trackCTA(ctatext, category) {
    pushEvent('internalcampaignClick', {
      internalCampaign: {
        ctatext: ctatext,
        category: category || 'Body'
      }
    });
  }

  function trackForm(event, formName, category, extra) {
    var formData = {
      name: formName,
      category: category
    };
    if (extra && extra.applicationStatus) {
      formData.applicationStatus = extra.applicationStatus;
    }
    if (extra && extra.validationError) {
      formData.validationError = extra.validationError;
    }
    pushEvent(event, { form: formData });
  }

  function trackSearch(keyword) {
    pushEvent('search', {
      search: { keyword: keyword }
    });
  }

  function trackHover(element) {
    pushEvent('hoverInteraction', {
      hover: { element: element }
    });
  }

  function trackScrollDepth(percent) {
    pushEvent('scrollDepth', {
      scroll: { percent: percent }
    });
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

  function initScrollDepth(thresholds) {
    var depths = thresholds || [25, 50, 75, 100];
    var fired = {};
    window.addEventListener('scroll', function () {
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      var pct = Math.min(100, Math.round((window.scrollY / docHeight) * 100));
      depths.forEach(function (d) {
        if (pct >= d && !fired[d]) {
          fired[d] = true;
          trackScrollDepth(d);
        }
      });
    }, { passive: true });
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

  function bindHover(selector, getElementName) {
    onReady(function () {
      var hovered = new WeakSet();
      document.querySelectorAll(selector).forEach(function (el) {
        el.addEventListener('mouseenter', function () {
          if (hovered.has(el)) return;
          hovered.add(el);
          var name = typeof getElementName === 'function'
            ? getElementName(el)
            : (getElementName || el.textContent.trim());
          trackHover(name);
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

  window.pushEvent = pushEvent;

  window.XeraAnalytics = {
    pushEvent: pushEvent,
    getRegionPath: getRegionPath,
    getPlacement: getPlacement,
    trackCTA: trackCTA,
    trackForm: trackForm,
    trackSearch: trackSearch,
    trackHover: trackHover,
    trackScrollDepth: trackScrollDepth,
    trackEngagement: trackEngagement,
    initScrollDepth: initScrollDepth,
    onReady: onReady,
    bindClick: bindClick,
    bindHover: bindHover,
    bindClickDelegate: bindClickDelegate
  };
})();
