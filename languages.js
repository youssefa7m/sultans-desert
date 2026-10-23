(() => {
  "use strict";

  const translations = {
    en: {
      "Packages": "Packages",
      "Activities": "Activities",
      "Book now": "Book now",
      "BOOK NOW ↗": "BOOK NOW ↗",
      "Language": "Language",
      "Your Desert Adventure Starts Here.": "Your Desert Adventure Starts Here.",
      "EXPLORE EXPERIENCES ↗": "EXPLORE EXPERIENCES ↗",
      "BOOK YOUR ADVENTURE": "BOOK YOUR ADVENTURE",
      "✓ Guided desert adventures": "✓ Guided desert adventures",
      "✓ Moroccan experiences": "✓ Moroccan experiences",
      "✓ Easy booking requests": "✓ Easy booking requests",
      "YOUR MOROCCAN ADVENTURE": "YOUR MOROCCAN ADVENTURE",
      "SPECIAL DESERT EXPERIENCES": "SPECIAL DESERT EXPERIENCES",
      "Our Adventure Packages": "Our Adventure Packages",
      "Individual Activities": "Individual Activities",
      "CHOOSE YOUR ADVENTURE": "CHOOSE YOUR ADVENTURE",
      "Quad Biking": "Quad Biking",
      "Buggy Ride": "Buggy Ride",
      "Camel Ride": "Camel Ride",
      "Traditional Lunch": "Traditional Lunch",
      "Dinner & Show": "Dinner & Show",
      "Pool Access": "Pool Access",
      "Your Desert Adventure Starts Here.": "Your Desert Adventure Starts Here.",
      "Full name": "Full name",
      "WhatsApp / phone number": "WhatsApp / phone number",
      "Choose an experience": "Choose an experience",
      "Select an activity or package": "Select an activity or package",
      "Preferred date": "Preferred date",
      "Number of people": "Number of people",
      "Duration / options": "Duration / options",
      "Pickup area or special requests": "Pickup area or special requests",
      "Hotel, pickup area or questions": "Hotel, pickup area or questions",
      "Payment method: Cash on Arrival": "Payment method: Cash on Arrival",
      "SEND BOOKING REQUEST ↗": "SEND BOOKING REQUEST ↗",
      "SEND BY WHATSAPP": "SEND BY WHATSAPP",
      "SEND BY EMAIL": "SEND BY EMAIL",
      "About Us": "About Us",
      "Home": "Home",
      "Welcome to Morocco": "Welcome to Morocco",
      "Discover the Soul of the Desert": "Discover the Soul of the Desert",
      "Our Story": "Our Story",
      "More Than a Trip, It's an Experience": "More Than a Trip, It's an Experience",
      "Why Sultans Desert": "Why Sultans Desert",
      "Experiences Made for You": "Experiences Made for You",
      "Authentic Morocco": "Authentic Morocco",
      "Adventure & Discovery": "Adventure & Discovery",
      "Personal Attention": "Personal Attention",
      "Explore With Us": "Explore With Us",
      "Find Your Desert Experience": "Find Your Desert Experience",
      "Buggy Adventures": "Buggy Adventures",
      "Camel Rides": "Camel Rides",
      "Moroccan Cuisine": "Moroccan Cuisine",
      "Desert Evenings": "Desert Evenings",
      "Relax & Unwind": "Relax & Unwind",
      "Your Adventure Starts Here": "Your Adventure Starts Here",
      "Ready to Explore Morocco?": "Ready to Explore Morocco?",
      "Explore Packages": "Explore Packages",
      "Follow Us on Instagram": "Follow Us on Instagram",
      "Contact Us": "Contact Us",
      "Email Us": "Email Us",
      "Back to Home": "Back to Home",
      "Marrakech & Agafay Desert, Morocco": "Marrakech & Agafay Desert, Morocco"
    },

    fr: {
      "Packages": "Forfaits",
      "Activities": "Activités",
      "Book now": "Réserver",
      "BOOK NOW ↗": "RÉSERVER ↗",
      "Language": "Langue",
      "Your Desert Adventure Starts Here.": "Votre aventure dans le désert commence ici.",
      "EXPLORE EXPERIENCES ↗": "DÉCOUVRIR LES EXPÉRIENCES ↗",
      "BOOK YOUR ADVENTURE": "RÉSERVEZ VOTRE AVENTURE",
      "✓ Guided desert adventures": "✓ Aventures guidées dans le désert",
      "✓ Moroccan experiences": "✓ Expériences marocaines",
      "✓ Easy booking requests": "✓ Demandes de réservation faciles",
      "YOUR MOROCCAN ADVENTURE": "VOTRE AVENTURE MAROCAINE",
      "SPECIAL DESERT EXPERIENCES": "EXPÉRIENCES SPÉCIALES DANS LE DÉSERT",
      "Our Adventure Packages": "Nos forfaits aventure",
      "Individual Activities": "Activités individuelles",
      "CHOOSE YOUR ADVENTURE": "CHOISISSEZ VOTRE AVENTURE",
      "Quad Biking": "Balade en quad",
      "Buggy Ride": "Balade en buggy",
      "Camel Ride": "Balade à dos de chameau",
      "Traditional Lunch": "Déjeuner traditionnel",
      "Dinner & Show": "Dîner et spectacle",
      "Pool Access": "Accès à la piscine",
      "Full name": "Nom complet",
      "WhatsApp / phone number": "Numéro WhatsApp / téléphone",
      "Choose an experience": "Choisissez une expérience",
      "Select an activity or package": "Sélectionnez une activité ou un forfait",
      "Preferred date": "Date souhaitée",
      "Number of people": "Nombre de personnes",
      "Duration / options": "Durée / options",
      "Pickup area or special requests": "Lieu de prise en charge ou demandes particulières",
      "Hotel, pickup area or questions": "Hôtel, lieu de prise en charge ou questions",
      "Payment method: Cash on Arrival": "Mode de paiement : espèces à l’arrivée",
      "SEND BOOKING REQUEST ↗": "ENVOYER LA DEMANDE DE RÉSERVATION ↗",
      "SEND BY WHATSAPP": "ENVOYER PAR WHATSAPP",
      "SEND BY EMAIL": "ENVOYER PAR E-MAIL",
      "About Us": "À propos",
      "Home": "Accueil",
      "Welcome to Morocco": "Bienvenue au Maroc",
      "Discover the Soul of the Desert": "Découvrez l’âme du désert",
      "Our Story": "Notre histoire",
      "More Than a Trip, It's an Experience": "Bien plus qu’un voyage, une expérience",
      "Why Sultans Desert": "Pourquoi Sultans Desert",
      "Experiences Made for You": "Des expériences faites pour vous",
      "Authentic Morocco": "Le Maroc authentique",
      "Adventure & Discovery": "Aventure et découverte",
      "Personal Attention": "Une attention personnalisée",
      "Explore With Us": "Explorez avec nous",
      "Find Your Desert Experience": "Trouvez votre expérience dans le désert",
      "Buggy Adventures": "Aventures en buggy",
      "Camel Rides": "Balades à dos de chameau",
      "Moroccan Cuisine": "Cuisine marocaine",
      "Desert Evenings": "Soirées dans le désert",
      "Relax & Unwind": "Détente et relaxation",
      "Your Adventure Starts Here": "Votre aventure commence ici",
      "Ready to Explore Morocco?": "Prêt à découvrir le Maroc ?",
      "Explore Packages": "Découvrir les forfaits",
      "Follow Us on Instagram": "Suivez-nous sur Instagram",
      "Contact Us": "Contactez-nous",
      "Email Us": "Envoyez-nous un e-mail",
      "Back to Home": "Retour à l’accueil",
      "Marrakech & Agafay Desert, Morocco": "Marrakech et le désert d’Agafay, Morocco"
    },

    es: {
      "Packages": "Paquetes",
      "Activities": "Actividades",
      "Book now": "Reservar",
      "BOOK NOW ↗": "RESERVAR ↗",
      "Language": "Idioma",
      "Your Desert Adventure Starts Here.": "Tu aventura en el desierto empieza aquí.",
      "EXPLORE EXPERIENCES ↗": "DESCUBRIR EXPERIENCIAS ↗",
      "BOOK YOUR ADVENTURE": "RESERVA TU AVENTURA",
      "✓ Guided desert adventures": "✓ Aventuras guiadas por el desierto",
      "✓ Moroccan experiences": "✓ Experiencias marroquíes",
      "✓ Easy booking requests": "✓ Solicitudes de reserva sencillas",
      "YOUR MOROCCAN ADVENTURE": "TU AVENTURA MARROQUÍ",
      "SPECIAL DESERT EXPERIENCES": "EXPERIENCIAS ESPECIALES EN EL DESIERTO",
      "Our Adventure Packages": "Nuestros paquetes de aventura",
      "Individual Activities": "Actividades individuales",
      "CHOOSE YOUR ADVENTURE": "ELIGE TU AVENTURA",
      "Quad Biking": "Ruta en quad",
      "Buggy Ride": "Ruta en buggy",
      "Camel Ride": "Paseo en camello",
      "Traditional Lunch": "Almuerzo tradicional",
      "Dinner & Show": "Cena y espectáculo",
      "Pool Access": "Acceso a la piscina",
      "Full name": "Nombre completo",
      "WhatsApp / phone number": "Número de WhatsApp / teléfono",
      "Choose an experience": "Elige una experiencia",
      "Select an activity or package": "Selecciona una actividad o paquete",
      "Preferred date": "Fecha preferida",
      "Number of people": "Número de personas",
      "Duration / options": "Duración / opciones",
      "Pickup area or special requests": "Zona de recogida o solicitudes especiales",
      "Hotel, pickup area or questions": "Hotel, zona de recogida o preguntas",
      "Payment method: Cash on Arrival": "Método de pago: efectivo a la llegada",
      "SEND BOOKING REQUEST ↗": "ENVIAR SOLICITUD DE RESERVA ↗",
      "SEND BY WHATSAPP": "ENVIAR POR WHATSAPP",
      "SEND BY EMAIL": "ENVIAR POR CORREO",
      "About Us": "Sobre nosotros",
      "Home": "Inicio",
      "Welcome to Morocco": "Bienvenido a Marruecos",
      "Discover the Soul of the Desert": "Descubre el alma del desierto",
      "Our Story": "Nuestra historia",
      "More Than a Trip, It's an Experience": "Más que un viaje, una experiencia",
      "Why Sultans Desert": "Por qué Sultans Desert",
      "Experiences Made for You": "Experiencias pensadas para ti",
      "Authentic Morocco": "Marruecos auténtico",
      "Adventure & Discovery": "Aventura y descubrimiento",
      "Personal Attention": "Atención personalizada",
      "Explore With Us": "Explora con nosotros",
      "Find Your Desert Experience": "Encuentra tu experiencia en el desierto",
      "Buggy Adventures": "Aventuras en buggy",
      "Camel Rides": "Paseos en camello",
      "Moroccan Cuisine": "Cocina marroquí",
      "Desert Evenings": "Noches en el desierto",
      "Relax & Unwind": "Relájate y descansa",
      "Your Adventure Starts Here": "Tu aventura empieza aquí",
      "Ready to Explore Morocco?": "¿Listo para descubrir Marruecos?",
      "Explore Packages": "Ver paquetes",
      "Follow Us on Instagram": "Síguenos en Instagram",
      "Contact Us": "Contáctanos",
      "Email Us": "Envíanos un correo",
      "Back to Home": "Volver al inicio",
      "Marrakech & Agafay Desert, Morocco": "Marrakech y el desierto de Agafay, Morocco"
    },

    ar: {
      "Packages": "الباقات",
      "Activities": "الأنشطة",
      "Book now": "احجز الآن",
      "BOOK NOW ↗": "احجز الآن ↗",
      "Language": "اللغة",
      "Your Desert Adventure Starts Here.": "مغامرتك في الصحراء تبدأ من هنا.",
      "EXPLORE EXPERIENCES ↗": "اكتشف التجارب ↗",
      "BOOK YOUR ADVENTURE": "احجز مغامرتك",
      "✓ Guided desert adventures": "✓ مغامرات صحراوية مع مرشد",
      "✓ Moroccan experiences": "✓ تجارب مغربية أصيلة",
      "✓ Easy booking requests": "✓ طلبات حجز سهلة",
      "YOUR MOROCCAN ADVENTURE": "مغامرتك المغربية",
      "SPECIAL DESERT EXPERIENCES": "تجارب مميزة في الصحراء",
      "Our Adventure Packages": "باقات المغامرات",
      "Individual Activities": "الأنشطة الفردية",
      "CHOOSE YOUR ADVENTURE": "اختر مغامرتك",
      "Quad Biking": "ركوب الدراجة الرباعية",
      "Buggy Ride": "جولة بالبوغي",
      "Camel Ride": "ركوب الجمال",
      "Traditional Lunch": "غداء تقليدي",
      "Dinner & Show": "عشاء وعرض فني",
      "Pool Access": "الدخول إلى المسبح",
      "Full name": "الاسم الكامل",
      "WhatsApp / phone number": "رقم واتساب أو الهاتف",
      "Choose an experience": "اختر تجربة",
      "Select an activity or package": "اختر نشاطاً أو باقة",
      "Preferred date": "التاريخ المفضل",
      "Number of people": "عدد الأشخاص",
      "Duration / options": "المدة والخيارات",
      "Pickup area or special requests": "مكان الاستقبال أو طلبات خاصة",
      "Hotel, pickup area or questions": "الفندق أو مكان الاستقبال أو أي أسئلة",
      "Payment method: Cash on Arrival": "طريقة الدفع: نقداً عند الوصول",
      "SEND BOOKING REQUEST ↗": "إرسال طلب الحجز ↗",
      "SEND BY WHATSAPP": "الإرسال عبر واتساب",
      "SEND BY EMAIL": "الإرسال عبر البريد الإلكتروني",
      "About Us": "من نحن",
      "Home": "الرئيسية",
      "Welcome to Morocco": "مرحباً بكم في Morocco",
      "Discover the Soul of the Desert": "اكتشف روح الصحراء",
      "Our Story": "قصتنا",
      "More Than a Trip, It's an Experience": "أكثر من مجرد رحلة، إنها تجربة",
      "Why Sultans Desert": "لماذا Sultans Desert",
      "Experiences Made for You": "تجارب مصممة من أجلك",
      "Authentic Morocco": "المغرب الأصيل",
      "Adventure & Discovery": "المغامرة والاستكشاف",
      "Personal Attention": "اهتمام شخصي",
      "Explore With Us": "اكتشف معنا",
      "Find Your Desert Experience": "اختر تجربتك الصحراوية",
      "Buggy Adventures": "مغامرات البوغي",
      "Camel Rides": "ركوب الجمال",
      "Moroccan Cuisine": "المطبخ المغربي",
      "Desert Evenings": "أمسيات الصحراء",
      "Relax & Unwind": "الاسترخاء والراحة",
      "Your Adventure Starts Here": "مغامرتك تبدأ هنا",
      "Ready to Explore Morocco?": "هل أنت مستعد لاكتشاف Morocco؟",
      "Explore Packages": "اكتشف الباقات",
      "Follow Us on Instagram": "تابعنا على Instagram",
      "Contact Us": "اتصل بنا",
      "Email Us": "راسلنا عبر البريد الإلكتروني",
      "Back to Home": "العودة إلى الرئيسية",
      "Marrakech & Agafay Desert, Morocco": "Marrakech وصحراء Agafay، Morocco"
    },

    it: {
      "Packages": "Pacchetti",
      "Activities": "Attività",
      "Book now": "Prenota ora",
      "BOOK NOW ↗": "PRENOTA ORA ↗",
      "Language": "Lingua",
      "Your Desert Adventure Starts Here.": "La tua avventura nel deserto inizia qui.",
      "EXPLORE EXPERIENCES ↗": "SCOPRI LE ESPERIENZE ↗",
      "BOOK YOUR ADVENTURE": "PRENOTA LA TUA AVVENTURA",
      "✓ Guided desert adventures": "✓ Avventure guidate nel deserto",
      "✓ Moroccan experiences": "✓ Esperienze marocchine",
      "✓ Easy booking requests": "✓ Richieste di prenotazione semplici",
      "YOUR MOROCCAN ADVENTURE": "LA TUA AVVENTURA MAROCCHINA",
      "SPECIAL DESERT EXPERIENCES": "ESPERIENZE SPECIALI NEL DESERTO",
      "Our Adventure Packages": "I nostri pacchetti avventura",
      "Individual Activities": "Attività individuali",
      "CHOOSE YOUR ADVENTURE": "SCEGLI LA TUA AVVENTURA",
      "Quad Biking": "Escursione in quad",
      "Buggy Ride": "Giro in buggy",
      "Camel Ride": "Passeggiata in cammello",
      "Traditional Lunch": "Pranzo tradizionale",
      "Dinner & Show": "Cena e spettacolo",
      "Pool Access": "Accesso alla piscina",
      "Full name": "Nome completo",
      "WhatsApp / phone number": "Numero WhatsApp / telefono",
      "Choose an experience": "Scegli un'esperienza",
      "Select an activity or package": "Seleziona un'attività o un pacchetto",
      "Preferred date": "Data preferita",
      "Number of people": "Numero di persone",
      "Duration / options": "Durata / opzioni",
      "Pickup area or special requests": "Zona di prelievo o richieste speciali",
      "Hotel, pickup area or questions": "Hotel, zona di prelievo o domande",
      "Payment method: Cash on Arrival": "Metodo di pagamento: contanti all'arrivo",
      "SEND BOOKING REQUEST ↗": "INVIA RICHIESTA DI PRENOTAZIONE ↗",
      "SEND BY WHATSAPP": "INVIA SU WHATSAPP",
      "SEND BY EMAIL": "INVIA VIA EMAIL",
      "About Us": "Chi siamo",
      "Home": "Home",
      "Welcome to Morocco": "Benvenuti in Morocco",
      "Discover the Soul of the Desert": "Scopri l'anima del deserto",
      "Our Story": "La nostra storia",
      "More Than a Trip, It's an Experience": "Più di un viaggio, un'esperienza",
      "Why Sultans Desert": "Perché Sultans Desert",
      "Experiences Made for You": "Esperienze pensate per te",
      "Authentic Morocco": "Marocco autentico",
      "Adventure & Discovery": "Avventura e scoperta",
      "Personal Attention": "Attenzione personale",
      "Explore With Us": "Esplora con noi",
      "Find Your Desert Experience": "Trova la tua esperienza nel deserto",
      "Buggy Adventures": "Avventure in buggy",
      "Camel Rides": "Passeggiate in cammello",
      "Moroccan Cuisine": "Cucina marocchina",
      "Desert Evenings": "Serate nel deserto",
      "Relax & Unwind": "Relax e riposo",
      "Your Adventure Starts Here": "La tua avventura inizia qui",
      "Ready to Explore Morocco?": "Pronto a scoprire il Marocco?",
      "Explore Packages": "Scopri i pacchetti",
      "Follow Us on Instagram": "Seguici su Instagram",
      "Contact Us": "Contattaci",
      "Email Us": "Scrivici via email",
      "Back to Home": "Torna alla home",
      "Marrakech & Agafay Desert, Morocco": "Marrakech e deserto di Agafay, Morocco"
    }
  };

  const supportedLanguages = ["en", "fr", "es", "ar", "it"];
  const storageKey = "sultans-desert-language";

  function translateText(text, language) {
    const cleanText = text.trim();
    if (!cleanText) return text;

    const dictionary = translations[language] || translations.en;

    if (dictionary[cleanText]) {
      return text.replace(cleanText, dictionary[cleanText]);
    }

    return text;
  }

  function translateElement(element, language) {
    if (element.closest("#site-language")) return;

    if (element.children.length === 0) {
      const original = element.dataset.originalText || element.textContent;
      if (!element.dataset.originalText) {
        element.dataset.originalText = original;
      }
      element.textContent = translateText(original, language);
    }

    ["placeholder", "title", "aria-label", "alt"].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;

      const originalKey = "original" + attribute
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join("");

      if (!element.dataset[originalKey]) {
        element.dataset[originalKey] = element.getAttribute(attribute);
      }

      element.setAttribute(
        attribute,
        translateText(element.dataset[originalKey], language)
      );
    });
  }

  function applyLanguage(language) {
    if (!supportedLanguages.includes(language)) language = "en";

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("body *").forEach((element) => {
      translateElement(element, language);
    });

    document.querySelectorAll("select option").forEach((option) => {
      const original = option.dataset.originalText || option.textContent;
      if (!option.dataset.originalText) {
        option.dataset.originalText = original;
      }
      option.textContent = translateText(original, language);
    });

    const picker = document.getElementById("site-language");
    if (picker) picker.value = language;

    document.body.classList.toggle("language-arabic", language === "ar");

    try {
      localStorage.setItem(storageKey, language);
    } catch (error) {
      // Keep the language working even if storage is unavailable.
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const picker = document.getElementById("site-language");

    if (picker) {
      picker.addEventListener("change", (event) => {
        applyLanguage(event.target.value);
      });
    }

    let savedLanguage = "en";
    try {
      savedLanguage = localStorage.getItem(storageKey) || "en";
    } catch (error) {
      savedLanguage = "en";
    }

    applyLanguage(savedLanguage);
  });
})();
