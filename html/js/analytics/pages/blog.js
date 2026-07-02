/* Xera Bank — Blog Listing Analytics */
(function () {
  'use strict';

  var A = window.XeraAnalytics;
  if (!A) return;

  A.onReady(function () {
    /* 55 — Blog card read more clicks */
    document.querySelectorAll('.blog-card .read-more').forEach(function (el) {
      el.addEventListener('click', function () {
        var card = el.closest('.blog-card');
        var title = card && card.querySelector('h3') ? card.querySelector('h3').textContent.trim() : 'Article';
        A.trackCTA('Read More: ' + title, 'Blog', 'link', 'Blog Clicks');
        A.pushEvent('blogArticleClick', {
          eventInfo: {
            eventName: 'Blog Article Click',
            eventCategory: 'engagement',
            eventAction: 'click',
            eventLabel: title,
            component: 'link',
            placement: 'Blog',
            regionPath: A.getRegionPath()
          },
          article: { title: title }
        });
      });
    });

    /* 56 — Blog card impression */
    document.querySelectorAll('.blog-card').forEach(function (card) {
      if (!('IntersectionObserver' in window)) return;
      var observed = false;
      var title = card.querySelector('h3') ? card.querySelector('h3').textContent.trim() : 'Article';
      new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !observed) {
            observed = true;
            A.pushEvent('blogCardView', {
              eventInfo: {
                eventName: 'Blog Card View',
                eventCategory: 'engagement',
                eventAction: 'view',
                eventLabel: title,
                component: 'card',
                placement: 'Blog',
                regionPath: A.getRegionPath()
              },
              article: { title: title }
            });
          }
        });
      }, { threshold: 0.5 }).observe(card);
    });

    /* 57 — Blog tag filter clicks (if present) */
    document.querySelectorAll('.blog-tag').forEach(function (tag) {
      tag.addEventListener('click', function () {
        A.trackCTA('Tag: ' + tag.textContent.trim(), 'Blog', 'link', 'Blog Clicks');
      });
    });
  });
})();
