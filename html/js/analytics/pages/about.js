/* Xera Bank — About Page Analytics */
(function () {
  'use strict';

  var A = window.XeraAnalytics;
  if (!A) return;

  A.onReady(function () {
    /* 31 — Leadership team card click */
    document.querySelectorAll('.team-card[data-leader-id]').forEach(function (card) {
      card.addEventListener('click', function () {
        var name = card.querySelector('h3');
        var leaderName = name ? name.textContent.trim() : 'Unknown Leader';
        A.trackCTA('View Profile: ' + leaderName, 'Leadership');
        A.pushEvent('leaderProfileView', {
          eventInfo: {
            eventName: 'Leader Profile View',
            eventCategory: 'engagement',
            eventAction: 'open',
            eventLabel: leaderName,
            component: 'modal',
            placement: 'Leadership',
            regionPath: A.getRegionPath()
          },
          leader: { name: leaderName, id: card.getAttribute('data-leader-id') }
        });
      });
    });

    /* 32 — Leader modal close */
    document.addEventListener('click', function (e) {
      if (e.target.closest('.leader-modal-close') || e.target.classList.contains('leader-modal-overlay')) {
        var overlay = document.getElementById('leaderModal');
        if (overlay && overlay.classList.contains('open')) {
          A.pushEvent('leaderProfileClose', {
            eventInfo: {
              eventName: 'Leader Profile Close',
              eventCategory: 'engagement',
              eventAction: 'close',
              eventLabel: 'Leader Modal',
              component: 'modal',
              placement: 'Leadership',
              regionPath: A.getRegionPath()
            }
          });
        }
      }
    });

    /* 33 — Mission & values section view */
    var valuesGrid = document.querySelector('.values-grid');
    if (valuesGrid && 'IntersectionObserver' in window) {
      var valuesObserved = false;
      new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !valuesObserved) {
            valuesObserved = true;
            A.trackEngagement('Mission & Values', 'Section Viewed', 'Body');
          }
        });
      }, { threshold: 0.3 }).observe(valuesGrid);
    }

    /* 34 — Awards section view */
    var awardsGrid = document.querySelector('.awards-grid');
    if (awardsGrid && 'IntersectionObserver' in window) {
      var awardsObserved = false;
      new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !awardsObserved) {
            awardsObserved = true;
            A.trackEngagement('Awards & Recognition', 'Section Viewed', 'Body');
          }
        });
      }, { threshold: 0.3 }).observe(awardsGrid);
    }
  });
})();
