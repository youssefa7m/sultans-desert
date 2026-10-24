
(() => {
  "use strict";

  const LANGUAGES = ["en", "fr", "es", "ar", "it"];
  const STORAGE_KEY = "sultans-desert-language";

  let currentLanguage = "en";
  let googleReady = false;

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGUAGES.includes(saved)) currentLanguage = saved;
  } catch (_) {}

  function setDocumentLanguage(language) {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    if (document.body) {
      document.body.classList.toggle(
        "language-arabic",
        language === "ar"
      );
    }
  }

  function addStyles() {
    if (document.getElementById("sultans-translation-styles")) return;

    const style = document.createElement("style");
    style.id = "sultans-translation-styles";
    style.textContent = `
      #google_translate_element {
        position: fixed !important;
        left: -10000px !important;
        top: 0 !important;
        width: 1px !important;
        height: 1px !important;
        overflow: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }

      .goog-te-banner-frame,
      .goog-te-banner-frame.skiptranslate,
      iframe.goog-te-banner-frame,
      .goog-te-balloon-frame,
      .goog-te-menu-frame,
      #goog-gt-tt,
      .goog-te-spinner-pos,
      .goog-te-gadget,
      .goog-logo-link,
      body > .skiptranslate {
        display: none !important;
        visibility: hidden !important;
        height: 0 !important;
        max-height: 0 !important;
      }

      html, body {
        margin-top: 0 !important;
        top: 0 !important;
      }

      html[lang="ar"] body {
        direction: rtl !important;
        text-align: right;
      }

      html[lang="ar"] input,
      html[lang="ar"] textarea,
      html[lang="ar"] select {
        direction: rtl;
        text-align: right;
      }

      #site-language {
        display: inline-block !important;
        visibility: visible !important;
        opacity: 1 !important;
        pointer-events: auto !important;
      }
    `;

    document.head.appendChild(style);
  }

  function setLanguage(language) {
    if (!LANGUAGES.includes(language)) return;

    currentLanguage = language;

    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch (_) {}

    setDocumentLanguage(language);

    document.querySelectorAll("#site-language").forEach((picker) => {
      picker.value = language;
    });

    const googleSelect = document.querySelector(".goog-te-combo");

    if (googleReady && googleSelect) {
      googleSelect.value = language;
      googleSelect.dispatchEvent(new Event("change"));
    }
  }

  function googleTranslateElementInit() {
    if (!window.google || !window.google.translate) return;

    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,fr,es,ar,it",
        autoDisplay: false
      },
      "google_translate_element"
    );

    let attempts = 0;

    const timer = setInterval(() => {
      const googleSelect = document.querySelector(".goog-te-combo");
      attempts++;

      if (googleSelect) {
        clearInterval(timer);
        googleReady = true;

        googleSelect.value = currentLanguage;

        if (currentLanguage !== "en") {
          googleSelect.dispatchEvent(new Event("change"));
        }

        setDocumentLanguage(currentLanguage);
      }

      if (attempts >= 50) clearInterval(timer);
    }, 300);
  }

  function startTranslation() {
    addStyles();

    let container = document.getElementById("google_translate_element");

    if (!container) {
      container = document.createElement("div");
      container.id = "google_translate_element";
      document.body.appendChild(container);
    }

    document.querySelectorAll("#site-language").forEach((picker) => {
      picker.value = currentLanguage;

      picker.addEventListener("change", (event) => {
        setLanguage(event.target.value);
      });
    });

    setDocumentLanguage(currentLanguage);
    window.googleTranslateElementInit = googleTranslateElementInit;

    if (!document.querySelector('script[data-google-translate="true"]')) {
      const script = document.createElement("script");

      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

      script.async = true;
      script.dataset.googleTranslate = "true";

      document.head.appendChild(script);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startTranslation);
  } else {
    startTranslation();
  }
})();
