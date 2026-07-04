/* Xera Bank — Homepage Analytics */
(function () {
  'use strict';

  var A = window.XeraAnalytics;
  if (!A) return;

  A.onReady(function () {
    /* 18 — Carousel previous */
    A.bindClick('.carousel-prev', function () {
      A.trackCTA('Previous Slide', 'Hero Banner');
    });

    /* 19 — Carousel next */
    A.bindClick('.carousel-next', function () {
      A.trackCTA('Next Slide', 'Hero Banner');
    });

    /* 20-22 — Carousel dots */
    document.querySelectorAll('.carousel-dot').forEach(function (dot, index) {
      dot.addEventListener('click', function () {
        A.trackCTA('Slide ' + (index + 1), 'Hero Banner');
      });
    });

    /* 23 — Idle toast impression */
    var idleToast = document.getElementById('idleToast');
    if (idleToast) {
      var observer = new MutationObserver(function () {
        if (idleToast.classList.contains('visible')) {
          A.trackEngagement('Idle Toast', 'Toast Displayed', 'Idle Toast');
          observer.disconnect();
        }
      });
      observer.observe(idleToast, { attributes: true, attributeFilter: ['class'] });
    }

    /* 24 — Idle toast close */
    A.bindClick('#idleToastClose', function () {
      A.trackCTA('Close Idle Toast', 'Idle Toast');
    });

    /* 25 — Idle toast WhatsApp */
    document.querySelectorAll('#idleToast a[href*="wa.me"]').forEach(function (el) {
      el.addEventListener('click', function () {
        A.trackCTA('Idle Toast WhatsApp', 'Idle Toast');
      });
    });

    /* 26 — Idle toast view products */
    A.bindClick('#idleViewProducts', function () {
      A.trackCTA('View Products', 'Idle Toast');
    });

    /* 27 — Blog preview section view all */
    document.querySelectorAll('#blog-preview .btn-outline').forEach(function (el) {
      el.addEventListener('click', function () {
        A.trackCTA('View All Articles', 'Blog');
      });
    });

    /* 28 — Trust bar impression (scroll into view) */
    var trustBar = document.querySelector('.trust-bar');
    if (trustBar && 'IntersectionObserver' in window) {
      var trustObserved = false;
      new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !trustObserved) {
            trustObserved = true;
            A.trackEngagement('Trust Bar', 'Section Viewed', 'Body');
          }
        });
      }, { threshold: 0.5 }).observe(trustBar);
    }

    /* 29 — Offerings section impression */
    var offerings = document.getElementById('offerings');
    if (offerings && 'IntersectionObserver' in window) {
      var offeringsObserved = false;
      new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !offeringsObserved) {
            offeringsObserved = true;
            A.trackEngagement('Key Offerings', 'Section Viewed', 'Body');
          }
        });
      }, { threshold: 0.3 }).observe(offerings);
    }

    /* 30 — Testimonials section impression */
    var testimonials = document.querySelector('.testimonials-grid');
    if (testimonials && 'IntersectionObserver' in window) {
      var testimonialsObserved = false;
      new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !testimonialsObserved) {
            testimonialsObserved = true;
            A.trackEngagement('Testimonials', 'Section Viewed', 'Body');
          }
        });
      }, { threshold: 0.3 }).observe(testimonials);
    }
  });
})();
