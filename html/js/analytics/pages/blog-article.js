/* Xera Bank — Blog Article Analytics */
(function () {
  'use strict';

  var A = window.XeraAnalytics;
  if (!A) return;

  A.onReady(function () {
    var articleTitle = document.querySelector('h1');
    var title = articleTitle ? articleTitle.textContent.trim() : document.title;

    /* 58 — Article page view */
    A.pushEvent('blogArticleView', {
      eventInfo: {
        eventName: 'Blog Article View',
        eventCategory: 'engagement',
        eventAction: 'view',
        eventLabel: title,
        component: 'article',
        placement: 'Blog',
        regionPath: A.getRegionPath()
      },
      article: { title: title, url: location.href }
    });

    /* 59 — Article body link clicks */
    document.querySelectorAll('.article-body a, article a').forEach(function (el) {
      el.addEventListener('click', function () {
        A.trackCTA(el.textContent.trim(), 'Blog', 'link', 'Blog Clicks');
      });
    });

    /* 60 — Article read depth (25%, 50%, 75%, 100%) */
    var articleBody = document.querySelector('.article-body') || document.querySelector('article');
    if (articleBody) {
      var depths = [25, 50, 75, 100];
      var fired = {};
      window.addEventListener('scroll', function () {
        var rect = articleBody.getBoundingClientRect();
        var articleTop = rect.top + window.scrollY;
        var articleHeight = articleBody.offsetHeight;
        var scrolled = window.scrollY + window.innerHeight - articleTop;
        var pct = Math.min(100, Math.round((scrolled / articleHeight) * 100));
        depths.forEach(function (d) {
          if (pct >= d && !fired[d]) {
            fired[d] = true;
            A.pushEvent('blogReadDepth', {
              eventInfo: {
                eventName: 'Blog Read Depth',
                eventCategory: 'engagement',
                eventAction: 'scroll',
                eventLabel: d + '%',
                component: 'article',
                placement: 'Blog',
                regionPath: A.getRegionPath()
              },
              article: { title: title, readDepth: d }
            });
          }
        });
      }, { passive: true });
    }

    /* 61 — Back to blog link */
    document.querySelectorAll('a[href*="blog.html"]').forEach(function (el) {
      if (el.closest('.main-nav')) return;
      el.addEventListener('click', function () {
        A.trackCTA('Back to Blog', 'Blog', 'link', 'Navigation Clicks');
      });
    });
  });
})();
