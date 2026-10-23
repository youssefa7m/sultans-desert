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
    document.body.classList.toggle("language-arabic", language === "ar");
  }

  function saveLanguage(language) {
    if (!LANGUAGES.includes(language)) return;

    currentLanguage = language;

    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch (_) {}

    setDocumentLanguage(language);

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

    const waitForGoogle = setInterval(() => {
      const googleSelect = document.querySelector(".goog-te-combo");

      if (!googleSelect) return;

      clearInterval(waitForGoogle);

      googleSelect.value = currentLanguage;
      if (currentLanguage !== "en") {
        googleSelect.dispatchEvent(new Event("change"));
      }

      setDocumentLanguage(currentLanguage);
    }, 300);

    setTimeout(() => clearInterval(waitForGoogle), 15000);
  }

  function addTranslationStyles() {
    const style = document.createElement("style");

    style.textContent = `
      #google_translate_element {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        overflow: hidden !important;
        left: -9999px !important;
        top: -9999px !important;
      }

      .goog-te-banner-frame,
      .goog-te-balloon-frame,
      #goog-gt-tt,
      .goog-te-spinner-pos {
        display: none !important;
      }

      body {
        top: 0 !important;
      }

      html.language-ar,
      html[lang="ar"] {
        direction: rtl;
      }

      html[lang="ar"] body {
        direction: rtl;
        text-align: right;
      }

      html[lang="ar"] input,
      html[lang="ar"] textarea,
      html[lang="ar"] select {
        direction: rtl;
        text-align: right;
      }
    `;

    document.head.appendChild(style);
  }

  function startTranslation() {
    addTranslationStyles();

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
