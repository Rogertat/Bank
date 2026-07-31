/* XDM Bridge — xdm-accelerator R3 pilot demo aid (added 2026-07-17).
 *
 * Sends the site's data-layer events to the AEP Edge Network on the
 * datastream provisioned by the accelerator (composition banking.web →
 * sandbox xerago3 → dataset "banking.web.banking-event dataset").
 *
 * Demo-scale stopgap: the production integration is walkerOS driven by the
 * compiled flow.json from the accelerator's WS1 pipeline (a WS3 task).
 * To remove completely: delete this file and its <script> tag in each page.
 *
 * The identifiers below are PUBLIC (they ship to every visitor's browser,
 * exactly like the Web SDK's own config) — no secrets here.
 */
(function () {
  "use strict";

  var EDGE =
    "https://aeppsemea.data.adobedc.net/ee/v1/interact" +
    "?configId=c015ad57-f769-4bbc-9583-073cc37a05a4";

  function uuid() {
    return window.crypto && crypto.randomUUID
      ? crypto.randomUUID()
      : Date.now() + "-" + Math.random().toString(16).slice(2);
  }

  /* Map a site data-layer payload ({event, ...}) to XDM that validates
   * against banking.web.banking-event (ExperienceEvent + web details +
   * the _aeppsemea.application banking field group). */
  function toXdm(evt) {
    if (!evt || typeof evt.event !== "string") return null;
    var xdm = {
      timestamp: new Date().toISOString(),
      web: { webPageDetails: { name: document.title, URL: location.href } }
    };
    if (evt.event === "pageLoad") {
      xdm.eventType = "web.webpagedetails.pageViews";
      if (evt.pageInfo) {
        if (evt.pageInfo.name) xdm.web.webPageDetails.name = String(evt.pageInfo.name);
        if (evt.pageInfo.url) xdm.web.webPageDetails.URL = String(evt.pageInfo.url);
      }
      return xdm;
    }
    if (evt.event.indexOf("form") === 0 && evt.form) {
      // the banking.application funnel (crosswalk: formName/stage/status/validationError)
      xdm.eventType = "xerabank." + evt.event;
      var app = {};
      if (evt.form.name) app.formName = String(evt.form.name);
      if (evt.form.category) app.stage = String(evt.form.category);
      if (evt.form.applicationStatus) app.status = String(evt.form.applicationStatus);
      if (evt.form.validationError) app.validationError = String(evt.form.validationError);
      // The site's data layer does not carry the applicant's contact details —
      // peek at the contact form itself (demo-scale shortcut; the production
      // walkerOS integration maps real data-layer variables instead).
      // Email is a SECONDARY identity (accelerator D-069) — optional by
      // design; events must ingest fine without it. main.js pushes form
      // events synchronously before any reset, so the values are still set.
      var contactForm = document.getElementById("contactForm");
      if (contactForm) {
        var emailField = contactForm.querySelector("#email");
        if (emailField && emailField.value) app.email = String(emailField.value);
        var phoneField = contactForm.querySelector("#phone");
        if (phoneField && phoneField.value) app.phone = String(phoneField.value);
      }
      xdm._aeppsemea = { application: app };
      return xdm;
    }
    // searches, campaign clicks, …: page-context event with a provenance type
    xdm.eventType = "xerabank." + evt.event;
    return xdm;
  }

  function send(evt) {
    var xdm = toXdm(evt);
    if (xdm === null) return;
    try {
      fetch(EDGE + "&requestId=" + uuid(), {
        method: "POST",
        headers: { "Content-Type": "text/plain" }, // same trick as the Web SDK: no CORS preflight
        body: JSON.stringify({ events: [{ xdm: xdm }] }),
        keepalive: true
      })
        .then(function (r) { console.debug("[xdm-bridge] " + evt.event + " → edge " + r.status); })
        .catch(function (e) { console.debug("[xdm-bridge] " + evt.event + " send failed:", e); });
    } catch (e) {
      /* never break the site */
    }
  }

  // Hook the PLAIN dataLayer array (main.js mirrors every event into it).
  // Deliberately NOT adobeDataLayer: the Launch container's data-layer
  // extension replaces that one's push asynchronously and would race us.
  window.dataLayer = window.dataLayer || [];
  var layer = window.dataLayer;
  for (var i = 0; i < layer.length; i++) send(layer[i]); // replay anything queued before us
  var origPush = layer.push.bind(layer);
  layer.push = function () {
    for (var j = 0; j < arguments.length; j++) send(arguments[j]);
    return origPush.apply(null, arguments);
  };

  console.debug("[xdm-bridge] active — datastream c015ad57 (banking.web R3 pilot)");
})();
