(() => {
  "use strict";

  const translations = {
    "Packages": {
      fr: "Forfaits", es: "Paquetes", ar: "الباقات", it: "Pacchetti"
    },
    "Activities": {
      fr: "Activités", es: "Actividades", ar: "الأنشطة", it: "Attività"
    },
    "Book now": {
      fr: "Réserver", es: "Reservar", ar: "احجز الآن", it: "Prenota ora"
    },
    "BOOK NOW ↗": {
      fr: "RÉSERVER ↗", es: "RESERVAR ↗", ar: "احجز الآن ↗", it: "PRENOTA ORA ↗"
    },
    "Language": {
      fr: "Langue", es: "Idioma", ar: "اللغة", it: "Lingua"
    },
    "MARRAKECH · AGAFAY DESERT · MOROCCO": {
      fr: "MARRAKECH · DÉSERT D'AGAFAY · MOROCCO",
      es: "MARRAKECH · DESIERTO DE AGAFAY · MOROCCO",
      ar: "MARRAKECH · صحراء AGAFAY · MOROCCO",
      it: "MARRAKECH · DESERTO DI AGAFAY · MOROCCO"
    },
    "Your Desert Adventure Starts Here.": {
      fr: "Votre aventure dans le désert commence ici.",
      es: "Tu aventura en el desierto comienza aquí.",
      ar: "مغامرتك في الصحراء تبدأ من هنا.",
      it: "La tua avventura nel deserto inizia qui."
    },
    "Discover quad biking, buggy adventures, camel rides and authentic Moroccan hospitality in the Agafay Desert.": {
      fr: "Découvrez le quad, le buggy, les balades à dos de chameau et l'hospitalité marocaine authentique dans le désert d'Agafay.",
      es: "Descubre rutas en quad, aventuras en buggy, paseos en camello y la auténtica hospitalidad marroquí en el desierto de Agafay.",
      ar: "اكتشف قيادة الدراجات الرباعية والبوغي وركوب الجمال وكرم الضيافة المغربية في صحراء Agafay.",
      it: "Scopri quad, buggy, passeggiate in cammello e l'autentica ospitalità marocchina nel deserto di Agafay."
    },
    "EXPLORE EXPERIENCES ↗": {
      fr: "DÉCOUVRIR LES EXPÉRIENCES ↗", es: "DESCUBRIR EXPERIENCIAS ↗",
      ar: "اكتشف التجارب ↗", it: "SCOPRI LE ESPERIENZE ↗"
    },
    "BOOK YOUR ADVENTURE": {
      fr: "RÉSERVEZ VOTRE AVENTURE", es: "RESERVA TU AVENTURA",
      ar: "احجز مغامرتك", it: "PRENOTA LA TUA AVVENTURA"
    },
    "✓ Guided desert adventures": {
      fr: "✓ Aventures guidées dans le désert",
      es: "✓ Aventuras guiadas por el desierto",
      ar: "✓ مغامرات صحراوية مع مرشد",
      it: "✓ Avventure guidate nel deserto"
    },
    "✓ Moroccan experiences": {
      fr: "✓ Expériences marocaines", es: "✓ Experiencias marroquíes",
      ar: "✓ تجارب مغربية أصيلة", it: "✓ Esperienze marocchine"
    },
    "✓ Easy booking requests": {
      fr: "✓ Demandes de réservation faciles",
      es: "✓ Solicitudes de reserva sencillas",
      ar: "✓ طلبات حجز سهلة", it: "✓ Richieste di prenotazione semplici"
    },
    "YOUR MOROCCAN ADVENTURE": {
      fr: "VOTRE AVENTURE MAROCAINE", es: "TU AVENTURA MARROQUÍ",
      ar: "مغامرتك المغربية", it: "LA TUA AVVENTURA MAROCCHINA"
    },
    "Discover the desert.": {
      fr: "Découvrez le désert.", es: "Descubre el desierto.",
      ar: "اكتشف الصحراء.", it: "Scopri il deserto."
    },
    "Make memories that last.": {
      fr: "Créez des souvenirs inoubliables.",
      es: "Crea recuerdos inolvidables.",
      ar: "اصنع ذكريات لا تُنسى.", it: "Crea ricordi indimenticabili."
    },
    "Explore Agafay through outdoor adventures, traditional Moroccan food and unforgettable moments with a local guide.": {
      fr: "Explorez Agafay à travers des aventures en plein air, la cuisine marocaine traditionnelle et des moments inoubliables avec un guide local.",
      es: "Explora Agafay con aventuras al aire libre, comida tradicional marroquí y momentos inolvidables junto a un guía local.",
      ar: "اكتشف Agafay من خلال مغامرات في الهواء الطلق وأطباق مغربية تقليدية ولحظات لا تُنسى مع مرشد محلي.",
      it: "Esplora Agafay con avventure all'aperto, cucina tradizionale marocchina e momenti indimenticabili con una guida locale."
    },
    "SPECIAL DESERT EXPERIENCES": {
      fr: "EXPÉRIENCES SPÉCIALES DANS LE DÉSERT",
      es: "EXPERIENCIAS ESPECIALES EN EL DESIERTO",
      ar: "تجارب مميزة في الصحراء", it: "ESPERIENZE SPECIALI NEL DESERTO"
    },
    "Our Adventure Packages": {
      fr: "Nos forfaits aventure", es: "Nuestros paquetes de aventura",
      ar: "باقات المغامرات", it: "I nostri pacchetti avventura"
    },
    "✦ Ask us to confirm Marrakech pickup": {
      fr: "✦ Contactez-nous pour confirmer la prise en charge à Marrakech",
      es: "✦ Consúltanos para confirmar la recogida en Marrakech",
      ar: "✦ تواصل معنا لتأكيد خدمة النقل في Marrakech",
      it: "✦ Contattaci per confermare il prelievo a Marrakech"
    },
    "QUICK ADVENTURE": {
      fr: "AVENTURE RAPIDE", es: "AVENTURA RÁPIDA",
      ar: "مغامرة سريعة", it: "AVVENTURA BREVE"
    },
    "POPULAR CHOICE": {
      fr: "CHOIX POPULAIRE", es: "OPCIÓN POPULAR",
      ar: "الخيار المفضل", it: "SCELTA POPOLARE"
    },
    "ADVENTURE + LUNCH": {
      fr: "AVENTURE + DÉJEUNER", es: "AVENTURA + ALMUERZO",
      ar: "مغامرة + غداء", it: "AVVENTURA + PRANZO"
    },
    "EVENING EXPERIENCE": {
      fr: "EXPÉRIENCE EN SOIRÉE", es: "EXPERIENCIA NOCTURNA",
      ar: "تجربة مسائية", it: "ESPERIENZA SERALE"
    },
    "COMPLETE ADVENTURE": {
      fr: "AVENTURE COMPLÈTE", es: "AVENTURA COMPLETA",
      ar: "مغامرة متكاملة", it: "AVVENTURA COMPLETA"
    },
    "
