
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

  function saveLanguage(language) {
    if (!LANGUAGES.includes(language)) return;

    currentLanguage = language;

    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch (_) {}

    setDocumentLanguage(language);

    document.querySelectorAll("#site-language").forEach((picker) => {
      picker.value = language;
    });

    if (googleReady) {
      const googleSelect = document.querySelector(".goog-te-combo");

      if (googleSelect) {
        googleSelect.value = language;
        googleSelect.dispatchEvent(new Event("change"));
      }
    }
  }

  function googleTranslateElementInit() {
    if (!window.google || !window.google.translate) return;

    new google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,fr,es,ar,it",
        autoDisplay: false
      },
      "google_translate_element"
    );

    googleReady = true;

    let attempts = 0;

    const waitForGoogle = setInterval(() => {
      const googleSelect = document.querySelector(".goog-te-combo");

      attempts++;

      if (googleSelect) {
        clearInterval(waitForGoogle);

        googleSelect.value = currentLanguage;

        if (currentLanguage !== "en") {
          googleSelect.dispatchEvent(new Event("change"));
        }

        setDocumentLanguage(currentLanguage);
        hideGoogleInterface();
      }

      if (attempts >= 50) {
        clearInterval(waitForGoogle);
      }
    }, 300);
  }

  function hideGoogleInterface() {
    const style = document.getElementById(
      "sultans-translation-styles"
    );

    if (style) return;

    const newStyle = document.createElement("style");
    newStyle.id = "sultans-translation-styles";

    
    newStyle.textContent = `
      #google_translate_element {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        overflow: hidden !important;
        left: -9999px !important;
        top: -9999px !important;
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
        overflow: hidden !important;
      }

      html {
        margin-top: 0 !important;
      }

      body {
        top: 0 !important;
        margin-top: 0 !important;
      }

      html[lang="ar"],
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
      }
    `;


      /* Hide Google's top translation toolbar */
      .goog-te-banner-frame,
      .goog-te-banner-frame.skiptranslate,
      iframe.goog-te-banner-frame,
      .goog-te-balloon-frame,
      .goog-te-menu-frame,
      #goog-gt-tt,
      .goog-te-spinner-pos,
      .goog-te-gadget,
      .goog-logo-link,
      .skiptranslate iframe {
        display: none !important;
        visibility: hidden !important;
        height: 0 !important;
        max-height: 0 !important;
      }

      /* Prevent Google from pushing the website down */
      html,
      body {
        top: 0 !important;
        margin-top: 0 !important;
      }

      body {
        position: static !important;
      }

      /* Arabic direction */
      html[lang="ar"],
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

      /* Keep the website's own language selector visible */
      #site-language {
        display: inline-block !important;
        visibility: visible !important;
        opacity: 1 !important;
        pointer-events: auto !important;
      }
    `;

    document.head.appendChild(newStyle);

    document.documentElement.style.setProperty("margin-top", "0", "important");

    if (document.body) {
      document.body.style.setProperty("top", "0", "important");
      document.body.style.setProperty("margin-top", "0", "important");
    }
  }

  function startTranslation() {
    hideGoogleInterface();

    let container = document.getElementById("google_translate_element");

    if (!container) {
      container = document.createElement("div");
      container.id = "google_translate_element";
      document.body.appendChild(container);
    }

    document.querySelectorAll("#site-language").forEach((picker) => {
      picker.value = currentLanguage;

      picker.addEventListener("change", (event) => {
        saveLanguage(event.target.value);
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

      script.onerror = () => {
        console.error(
          "Google Translate could not load. Check the internet connection or browser settings."
        );
      };

      document.head.appendChild(script);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startTranslation);
  } else {
    startTranslation();
  }
})();
