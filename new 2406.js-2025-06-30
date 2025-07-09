document.addEventListener("DOMContentLoaded", function () {
  // 1. Push saved CTA click if exists
  const storedCTA = localStorage.getItem('buttonclick');
  if (storedCTA) {
    console.log("Pushing CTA:", storedCTA); // optional debug log
    window.adobeDataLayer.push({
      event: "Internal Campaign Clicks",
      internalCampaign: {
        ctatext: storedCTA
      }
    });
    localStorage.removeItem('buttonclick');
  }

  // 2. Track actual <a> links inside .nav-links
  $('.nav-links a, .btn').on('click', function (e) {
    e.preventDefault();

    const linkText = $(this).text().trim();
    const href = $(this).attr('href');

    localStorage.setItem('buttonclick', linkText);

    setTimeout(function () {
      window.location.href = href;
    }, 100);
  });
});
  });