export const servicesData = [
  {
    id: "netflix",
    name: "Netflix",
    slug: "netflix",
    category: "Streaming",
    shortDescription: "Accédez à des milliers de films, séries et documentaires en streaming illimité.",
    description: "Netflix est l'un des services de streaming les plus populaires au monde, offrant un vaste catalogue de films, séries TV, documentaires, émissions et contenus originaux exclusifs. Avec notre abonnement, profitez de Netflix sur tous vos appareils à un prix avantageux.",
    features: [
      "Accès à tout le catalogue Netflix",
      "Visionnage en HD et Ultra HD 4K (selon abonnement)",
      "Téléchargement pour visionnage hors ligne",
      "Fonctionne sur tous vos appareils",
      "Contenu original Netflix exclusif",
      "Profils multiples configurables"
    ],
    startingPrice: "70,99",
    image: "https://images.pexels.com/photos/16450337/pexels-photo-16450337/free-photo-of-smartphone-montrant-le-logo-netflix.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    heroImage: "https://images.pexels.com/photos/9072216/pexels-photo-9072216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    contentLibrary: {
      description: "Netflix propose des milliers de titres incluant des films primés, des séries addictives, des documentaires, des émissions et du contenu pour enfants.",
      examples: [
        {
          title: "Stranger Things",
          image: "https://images.pexels.com/photos/2726370/pexels-photo-2726370.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
          title: "La Casa de Papel",
          image: "https://images.pexels.com/photos/2398354/pexels-photo-2398354.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
          title: "The Crown",
          image: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
          title: "Ozark",
          image: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
      ]
    },
    compatibleDevices: ["smart_tv", "mobile", "tablet", "computer", "console"],
    pricingOptions: [
      {
        id: "basic",
        name: "Standard avec pub",
        description: "Qualité HD, 2 écrans simultanés",
        price: "7,99",
        billingPeriod: "mois",
        features: [
          "Résolution HD (720p)",
          "Utilisation sur 2 appareils simultanément",
          "Publicités limitées",
          "Catalogue complet (hors quelques titres)"
        ],
        popular: false
      },
      {
        id: "standard",
        name: "Standard",
        description: "Qualité Full HD, 2 écrans simultanés",
        price: "10,99",
        billingPeriod: "mois",
        features: [
          "Résolution Full HD (1080p)",
          "Utilisation sur 2 appareils simultanément",
          "Sans publicité",
          "Téléchargements sur 2 appareils",
          "Catalogue complet"
        ],
        popular: true
      },
      {
        id: "premium",
        name: "Premium",
        description: "Qualité Ultra HD 4K, 4 écrans simultanés",
        price: "15,99",
        billingPeriod: "mois",
        features: [
          "Résolution Ultra HD 4K",
          "Utilisation sur 4 appareils simultanément",
          "Sans publicité",
          "Téléchargements sur 6 appareils",
          "Catalogue complet",
          "Audio spatial"
        ],
        popular: false
      }
    ],
    faqs: [
      {
        question: "Comment fonctionne l'abonnement Netflix via DigiSouk?",
        answer: "Nous vous fournissons un accès à un compte Netflix existant sur lequel vous aurez votre propre profil personnalisé. Après votre commande, vous recevrez vos identifiants de connexion et pourrez profiter immédiatement du service."
      },
      {
        question: "Puis-je changer les informations du compte (email, mot de passe)?",
        answer: "Non, vous ne devez pas modifier les informations du compte. Vous aurez uniquement accès à votre profil personnel au sein du compte partagé."
      },
      {
        question: "Est-ce que je peux utiliser ce compte sur plusieurs appareils?",
        answer: "Oui, vous pouvez utiliser votre profil sur tous vos appareils. Cependant, le nombre de diffusions simultanées dépend de l'abonnement choisi (2 pour Standard, 4 pour Premium)."
      },
      {
        question: "Quelle est la durée de l'abonnement?",
        answer: "Nous proposons des abonnements de 1, 3, 6 ou 12 mois. Plus la durée choisie est longue, plus le tarif mensuel est avantageux."
      }
    ]
  },
  {
    id: "disney",
    name: "Disney+",
    slug: "disney-plus",
    category: "Streaming",
    shortDescription: "L'univers Disney, Marvel, Star Wars, Pixar et National Geographic à portée de main.",
    description: "Disney+ réunit les mondes Disney, Pixar, Marvel, Star Wars et National Geographic dans un seul service de streaming. Plongez dans un univers de contes intemporels, d'aventures épiques et de documentaires captivants, le tout à un tarif préférentiel grâce à DigiSouk.",
    features: [
      "Catalogue complet Disney, Pixar, Marvel, Star Wars et National Geographic",
      "Contenus exclusifs Disney+",
      "Diffusion en 4K UHD et HDR sur appareils compatibles",
      "Téléchargement illimité sur 10 appareils",
      "Visionnage sur 4 écrans simultanément",
      "Contrôle parental avancé"
    ],
    startingPrice: "5,99",
    image: "https://images.pexels.com/photos/11866021/pexels-photo-11866021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    heroImage: "https://images.pexels.com/photos/3944425/pexels-photo-3944425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    contentLibrary: {
      description: "Disney+ propose un vaste catalogue rassemblant les franchises légendaires et les créations exclusives des univers Disney, Marvel, Star Wars et plus encore.",
      examples: [
        {
          title: "The Mandalorian",
          image: "https://images.pexels.com/photos/10795873/pexels-photo-10795873.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
          title: "WandaVision",
          image: "https://images.pexels.com/photos/3971985/pexels-photo-3971985.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
          title: "Loki",
          image: "https://images.pexels.com/photos/2078071/pexels-photo-2078071.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
          title: "Encanto",
          image: "https://images.pexels.com/photos/1616084/pexels-photo-1616084.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
      ]
    },
    compatibleDevices: ["smart_tv", "mobile", "tablet", "computer", "console"],
    pricingOptions: [
      {
        id: "standard",
        name: "Standard avec pub",
        description: "Qualité HD, 2 écrans simultanés",
        price: "5,99",
        billingPeriod: "mois",
        features: [
          "Résolution HD jusqu'à 1080p",
          "Utilisation sur 2 appareils simultanément",
          "Publicités limitées",
          "Téléchargements non disponibles"
        ],
        popular: false
      },
      {
        id: "premium",
        name: "Premium",
        description: "Qualité 4K UHD, 4 écrans simultanés",
        price: "8,99",
        billingPeriod: "mois",
        features: [
          "Résolution 4K UHD et HDR",
          "Utilisation sur 4 appareils simultanément",
          "Sans publicité",
          "Téléchargements sur 10 appareils",
          "Audio Dolby Atmos sur appareils compatibles"
        ],
        popular: true
      }
    ],
    faqs: [
      {
        question: "Comment fonctionne l'abonnement Disney+ via DigiSouk?",
        answer: "Nous vous fournissons un accès à un compte Disney+ existant sur lequel vous aurez votre propre profil personnalisé. Après votre commande, vous recevrez vos identifiants de connexion et pourrez profiter immédiatement du service."
      },
      {
        question: "Puis-je regarder Disney+ sur ma Smart TV?",
        answer: "Oui, Disney+ est compatible avec la plupart des Smart TV (Samsung, LG, Sony, etc.), ainsi qu'avec les appareils de streaming comme Apple TV, Fire TV, Chromecast et plus encore."
      },
      {
        question: "Est-ce que je peux télécharger du contenu pour le regarder hors ligne?",
        answer: "Oui, avec l'abonnement Premium, vous pouvez télécharger du contenu sur jusqu'à 10 appareils mobiles pour un visionnage hors ligne."
      }
    ]
  },
  {
    id: "spotify",
    name: "Spotify Premium",
    slug: "spotify-premium",
    category: "Streaming",
    shortDescription: "Musique et podcasts illimités sans publicité, avec qualité audio supérieure.",
    description: "Spotify Premium vous offre une expérience d'écoute musicale sans limites. Profitez de millions de chansons et podcasts sans publicité, avec possibilité de téléchargement pour écoute hors ligne et une qualité audio exceptionnelle. Notre offre vous permet d'accéder à Spotify Premium à un tarif avantageux.",
    features: [
      "Écoute sans publicité",
      "Plus de 82 millions de titres disponibles",
      "Téléchargement pour écoute hors ligne",
      "Qualité audio supérieure (jusqu'à 320 kbps)",
      "Mode radio et découvertes personnalisées",
      "Options de lecture avancées (répétition, aléatoire)",
      "Podcasts exclusifs"
    ],
    startingPrice: "4,99",
    image: "https://images.pexels.com/photos/9866946/pexels-photo-9866946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    heroImage: "https://images.pexels.com/photos/6320/smartphone-vintage-technology-music.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    compatibleDevices: ["smart_tv", "mobile", "tablet", "computer"],
    pricingOptions: [
      {
        id: "individual",
        name: "Individuel",
        description: "Pour une personne",
        price: "4,99",
        billingPeriod: "mois",
        features: [
          "Musique sans publicité",
          "Écoute hors ligne",
          "Lecture à la demande",
          "Qualité audio améliorée"
        ],
        popular: true
      },
      {
        id: "duo",
        name: "Duo",
        description: "2 comptes Premium",
        price: "7,99",
        billingPeriod: "mois",
        features: [
          "2 comptes Premium indépendants",
          "Musique sans publicité",
          "Écoute hors ligne",
          "Playlist Duo Mix partagée"
        ],
        popular: false
      },
      {
        id: "family",
        name: "Famille",
        description: "6 comptes Premium",
        price: "9,99",
        billingPeriod: "mois",
        features: [
          "6 comptes Premium indépendants",
          "Contrôle parental",
          "Spotify Kids inclus",
          "Family Mix partagé"
        ],
        popular: false
      }
    ],
    faqs: [
      {
        question: "Comment fonctionne l'abonnement Spotify Premium via DigiSouk?",
        answer: "Nous vous fournissons un accès à un compte Spotify Premium. Après validation de votre commande, vous recevrez les informations de connexion par email. Vous pourrez alors profiter pleinement de toutes les fonctionnalités Premium."
      },
      {
        question: "Est-ce que je peux utiliser mon compte existant?",
        answer: "Non, nous vous fournissons un nouveau compte. Si vous avez déjà un compte Spotify gratuit, vous devrez utiliser les identifiants que nous vous communiquerons."
      },
      {
        question: "Sur combien d'appareils puis-je utiliser mon compte Spotify Premium?",
        answer: "Vous pouvez installer l'application Spotify sur autant d'appareils que vous le souhaitez, mais l'écoute n'est possible que sur un seul appareil à la fois pour les formules Individuel. Pour les formules Duo et Famille, chaque membre peut écouter simultanément sur son propre appareil."
      }
    ]
  },
  {
    id: "prime",
    name: "Prime Video",
    slug: "prime-video",
    category: "Streaming",
    shortDescription: "Films, séries et productions originales Amazon en streaming illimité.",
    description: "Amazon Prime Video propose un vaste catalogue de films, séries TV et productions originales primées. Notre service vous permet d'accéder à Prime Video à un tarif préférentiel, pour profiter de milliers de titres en streaming et de fonctionnalités avancées.",
    features: [
      "Milliers de films et séries en streaming",
      "Productions Amazon Original exclusives",
      "Téléchargement pour visionnage hors ligne",
      "Streaming en 4K Ultra HD (sur contenus compatibles)",
      "Jusqu'à 3 flux simultanés",
      "Contrôle parental"
    ],
    startingPrice: "4,99",
    image: "https://images.pexels.com/photos/9818255/pexels-photo-9818255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    heroImage: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    contentLibrary: {
      description: "Prime Video propose un catalogue riche et varié de contenus, incluant des productions originales exclusives et des titres populaires.",
      examples: [
        {
          title: "The Boys",
          image: "https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
          title: "The Marvelous Mrs. Maisel",
          image: "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
          title: "Jack Ryan",
          image: "https://images.pexels.com/photos/2146756/pexels-photo-2146756.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
          title: "The Grand Tour",
          image: "https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
      ]
    },
    compatibleDevices: ["smart_tv", "mobile", "tablet", "computer", "console"],
    pricingOptions: [
      {
        id: "standard",
        name: "Standard",
        description: "Accès complet à Prime Video",
        price: "4,99",
        billingPeriod: "mois",
        features: [
          "Catalogue complet Prime Video",
          "Streaming HD",
          "3 écrans simultanés",
          "Téléchargements pour visionnage hors ligne"
        ],
        popular: true
      },
      {
        id: "annual",
        name: "Annuel",
        description: "Économisez avec l'abonnement annuel",
        price: "49,99",
        billingPeriod: "an",
        features: [
          "Catalogue complet Prime Video",
          "Streaming HD/4K Ultra HD",
          "3 écrans simultanés",
          "Téléchargements pour visionnage hors ligne",
          "Économisez plus de 15% par rapport au tarif mensuel"
        ],
        popular: false
      }
    ],
    faqs: [
      {
        question: "Comment fonctionne l'abonnement Prime Video via DigiSouk?",
        answer: "Nous vous fournissons un accès à un compte Prime Video. Après validation de votre commande, vous recevrez les informations de connexion par email, et vous pourrez alors profiter immédiatement du service."
      },
      {
        question: "Est-ce que Prime Video inclut tous les avantages Amazon Prime?",
        answer: "Non, l'abonnement que nous proposons est spécifique à Prime Video et n'inclut pas les autres avantages d'Amazon Prime comme la livraison gratuite ou Prime Music."
      },
      {
        question: "Puis-je regarder Prime Video sur ma Smart TV?",
        answer: "Oui, Prime Video est compatible avec la plupart des Smart TV (Samsung, LG, Sony, etc.), ainsi qu'avec de nombreux appareils comme Fire TV Stick, Apple TV, consoles de jeux et appareils mobiles."
      }
    ]
  },
  {
    id: "shahid",
    name: "Shahid VIP",
    slug: "shahid-vip",
    category: "Streaming",
    shortDescription: "La meilleure plateforme de streaming arabe avec des séries, films et émissions exclusifs.",
    description: "Shahid VIP est la principale plateforme de streaming du monde arabe, offrant un vaste catalogue de séries, films, émissions et productions originales en arabe. Notre service vous permet d'accéder à Shahid VIP à un prix avantageux pour profiter du meilleur contenu arabe où que vous soyez.",
    features: [
      "Le plus grand catalogue de contenu arabe en streaming",
      "Productions originales Shahid exclusives",
      "Séries turques doublées en arabe",
      "Émissions MBC populaires",
      "Contenu pour enfants",
      "Doublage et sous-titres en plusieurs langues",
      "Qualité HD et Full HD"
    ],
    startingPrice: "6,99",
    image: "https://images.pexels.com/photos/9072384/pexels-photo-9072384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    heroImage: "https://images.pexels.com/photos/6373305/pexels-photo-6373305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    contentLibrary: {
      description: "Shahid VIP offre le plus grand catalogue de contenu arabe en streaming, avec des milliers d'heures de divertissement incluant des séries populaires, des films, des émissions et du contenu exclusif.",
      examples: [
        {
          title: "Al Hayba",
          image: "https://images.pexels.com/photos/3880179/pexels-photo-3880179.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
          title: "Tash Ma Tash",
          image: "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
          title: "Arabs Got Talent",
          image: "https://images.pexels.com/photos/1864641/pexels-photo-1864641.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
          title: "Arous Beirut",
          image: "https://images.pexels.com/photos/161815/santorini-travel-holidays-vacation-161815.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
      ]
    },
    compatibleDevices: ["smart_tv", "mobile", "tablet", "computer"],
    pricingOptions: [
      {
        id: "vip",
        name: "VIP",
        description: "Accès complet au catalogue",
        price: "6,99",
        billingPeriod: "mois",
        features: [
          "Accès illimité au catalogue complet",
          "Qualité HD",
          "5 profils par compte",
          "Visionnage sur 2 appareils simultanément"
        ],
        popular: true
      },
      {
        id: "vip-sport",
        name: "VIP + Sport",
        description: "Contenu VIP + chaînes sportives",
        price: "10,99",
        billingPeriod: "mois",
        features: [
          "Tout le contenu VIP",
          "Chaînes MBC Sports",
          "Événements sportifs en direct",
          "Qualité Full HD",
          "5 profils par compte",
          "Visionnage sur 3 appareils simultanément"
        ],
        popular: false
      }
    ],
    faqs: [
      {
        question: "Comment fonctionne l'abonnement Shahid VIP via DigiSouk?",
        answer: "Nous vous fournissons un accès à un compte Shahid VIP. Après validation de votre commande, vous recevrez les informations de connexion par email, et vous pourrez alors profiter immédiatement du service."
      },
      {
        question: "Est-ce que Shahid VIP propose des sous-titres ou doublages en français?",
        answer: "Shahid VIP propose principalement du contenu en arabe. Certains contenus peuvent avoir des sous-titres en anglais ou en français, mais ce n'est pas systématique. Le service est principalement orienté vers un public arabophone."
      },
      {
        question: "Puis-je utiliser Shahid VIP à l'étranger, hors du Moyen-Orient?",
        answer: "Oui, Shahid VIP est accessible dans le monde entier. Certains contenus peuvent être soumis à des restrictions géographiques, mais la majorité du catalogue est disponible internationalement."
      }
    ]
  },
  {
    id: "office",
    name: "Microsoft Office",
    slug: "microsoft-office",
    category: "Logiciel",
    shortDescription: "Suite bureautique complète avec Word, Excel, PowerPoint et Outlook pour la productivité professionnelle.",
    description: "Microsoft Office est la suite bureautique de référence comprenant Word, Excel, PowerPoint, Outlook et d'autres applications essentielles pour le travail et les études. Nos licences authentiques vous permettent d'accéder à toutes les fonctionnalités d'Office à un prix avantageux.",
    features: [
      "Licence permanente (pas d'abonnement)",
      "Word pour le traitement de texte",
      "Excel pour les feuilles de calcul",
      "PowerPoint pour les présentations",
      "Outlook pour la gestion des emails",
      "OneNote pour la prise de notes",
      "Mises à jour de sécurité incluses"
    ],
    systemRequirements: [
      "Windows 10 ou Windows 11",
      "Processeur 1.6 GHz ou supérieur",
      "4 Go de RAM minimum",
      "4 Go d'espace disque disponible",
      "Résolution écran 1280 x 768"
    ],
    startingPrice: "49,99",
    image: "https://images.pexels.com/photos/6195663/pexels-photo-6195663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    heroImage: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    pricingOptions: [
      {
        id: "home",
        name: "Office Home & Student",
        description: "Pour un usage personnel",
        price: "49,99",
        billingPeriod: "unique",
        features: [
          "Word, Excel, PowerPoint",
          "Licence à vie pour 1 PC/Mac",
          "Pas d'abonnement",
          "Mises à jour de sécurité",
          "Support technique de base"
        ],
        popular: true
      },
      {
        id: "pro",
        name: "Office Professional",
        description: "Pour un usage professionnel",
        price: "79,99",
        billingPeriod: "unique",
        features: [
          "Word, Excel, PowerPoint, Outlook",
          "Access, Publisher (Windows uniquement)",
          "Licence à vie pour 1 PC/Mac",
          "Pas d'abonnement",
          "Mises à jour de sécurité",
          "Support technique avancé"
        ],
        popular: false
      },
      {
        id: "365",
        name: "Microsoft 365",
        description: "Abonnement annuel",
        price: "39,99",
        billingPeriod: "an",
        features: [
          "Word, Excel, PowerPoint, Outlook",
          "OneDrive 1TB de stockage cloud",
          "Applications mobiles premium",
          "Mises à jour constantes vers dernières versions",
          "Support technique prioritaire"
        ],
        popular: false
      }
    ],
    faqs: [
      {
        question: "Les licences Microsoft Office sont-elles authentiques?",
        answer: "Oui, toutes nos licences Microsoft Office sont 100% authentiques et activables directement auprès de Microsoft. Vous recevrez une clé d'activation officielle et les instructions pour l'installer."
      },
      {
        question: "Quelle est la différence entre Office et Microsoft 365?",
        answer: "Office (Home & Student, Professional) est une licence à vie que vous achetez une seule fois, tandis que Microsoft 365 est un abonnement annuel qui inclut des services cloud supplémentaires comme OneDrive et des mises à jour constantes vers les nouvelles versions."
      },
      {
        question: "Sur combien d'ordinateurs puis-je installer ma licence Office?",
        answer: "Les licences Office à vie (Home & Student, Professional) peuvent être installées sur un seul ordinateur. L'abonnement Microsoft 365 Personnel permet l'installation sur 1 PC/Mac et jusqu'à 5 appareils mobiles."
      }
    ]
  },
  {
    id: "windows",
    name: "Windows 11 Pro",
    slug: "windows-11-pro",
    category: "Logiciel",
    shortDescription: "Système d'exploitation Windows 11 avec fonctionnalités professionnelles avancées.",
    description: "Windows 11 Pro est la version la plus puissante du dernier système d'exploitation de Microsoft, offrant des fonctionnalités avancées pour les professionnels et les utilisateurs exigeants. Notre licence authentique vous permet d'activer Windows 11 Pro à un prix compétitif.",
    features: [
      "Licence permanente (pas d'abonnement)",
      "Interface utilisateur moderne et intuitive",
      "Fonctionnalités de sécurité avancées (BitLocker, Windows Hello)",
      "Hyper-V pour la virtualisation",
      "Connectivité à distance et gestion avancée",
      "Support technique et mises à jour de sécurité à vie",
      "Microsoft Store et compatibilité avec les applications Android"
    ],
    systemRequirements: [
      "Processeur 1 GHz ou plus rapide avec 2 cœurs ou plus",
      "4 Go de RAM minimum",
      "64 Go d'espace disque disponible",
      "Carte graphique compatible DirectX 12",
      "TPM version 2.0",
      "UEFI et démarrage sécurisé",
      "Écran haute définition (720p)"
    ],
    startingPrice: "79,99",
    image: "https://images.pexels.com/photos/10651886/pexels-photo-10651886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    heroImage: "https://images.pexels.com/photos/1308624/pexels-photo-1308624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    pricingOptions: [
      {
        id: "home",
        name: "Windows 11 Home",
        description: "Pour un usage personnel",
        price: "59,99",
        billingPeriod: "unique",
        features: [
          "Fonctionnalités Windows 11 de base",
          "Microsoft Store intégré",
          "Support des applications Android",
          "Mises à jour de sécurité à vie",
          "Licence pour 1 PC uniquement"
        ],
        popular: false
      },
      {
        id: "pro",
        name: "Windows 11 Pro",
        description: "Pour un usage professionnel",
        price: "79,99",
        billingPeriod: "unique",
        features: [
          "Toutes les fonctionnalités de Windows 11 Home",
          "BitLocker pour le chiffrement des données",
          "Hyper-V pour la virtualisation",
          "Bureau à distance",
          "Stratégies de groupe",
          "Licence pour 1 PC uniquement"
        ],
        popular: true
      }
    ],
    faqs: [
      {
        question: "Comment installer Windows 11 avec la clé d'activation?",
        answer: "Vous pouvez télécharger Windows 11 directement depuis le site officiel de Microsoft à l'aide de l'outil de création de média. Une fois installé, vous pourrez activer votre copie de Windows avec la clé d'activation que nous vous fournirons."
      },
      {
        question: "Puis-je mettre à niveau de Windows 10 vers Windows 11 avec cette clé?",
        answer: "Oui, si votre PC répond aux exigences système de Windows 11, vous pouvez utiliser notre clé d'activation pour effectuer une mise à niveau depuis Windows 10. Nous vous recommandons toutefois de sauvegarder vos données avant toute mise à niveau."
      },
      {
        question: "La licence est-elle transférable si je change d'ordinateur?",
        answer: "Les licences au détail de Windows sont liées à un seul ordinateur à la fois, mais peuvent être transférées vers un nouveau PC si vous désinstallez Windows de l'ancien ordinateur. Les licences OEM ne sont pas transférables."
      }
    ]
  },
  {
    id: "adobe",
    name: "Adobe Creative Cloud",
    slug: "adobe-creative-cloud",
    category: "Logiciel",
    shortDescription: "Suite complète d'applications créatives professionnelles dont Photoshop, Illustrator et Premiere Pro.",
    description: "Adobe Creative Cloud est la référence mondiale pour les professionnels de la création, incluant des applications comme Photoshop, Illustrator, InDesign, Premiere Pro et bien d'autres. Notre offre vous permet d'accéder à ces outils puissants à un tarif préférentiel.",
    features: [
      "Accès à 20+ applications créatives professionnelles",
      "Photoshop pour l'édition d'images",
      "Illustrator pour le dessin vectoriel",
      "Premiere Pro pour le montage vidéo",
      "After Effects pour les effets spéciaux",
      "InDesign pour la mise en page",
      "100 Go de stockage cloud",
      "Milliers de polices Adobe",
      "Mises à jour régulières"
    ],
    systemRequirements: [
      "Windows 10 (64 bits) ou macOS Catalina (10.15) et versions ultérieures",
      "Processeur multicœur avec prise en charge 64 bits",
      "8 Go de RAM minimum (16 Go recommandés)",
      "15 Go d'espace disque disponible minimum",
      "Résolution d'écran 1280 x 800 minimum",
      "Carte graphique compatible GPU avec 2 Go de VRAM",
      "Connexion Internet pour l'activation et les mises à jour"
    ],
    startingPrice: "29,99",
    image: "https://images.pexels.com/photos/5082580/pexels-photo-5082580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    heroImage: "https://images.pexels.com/photos/3473569/pexels-photo-3473569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    pricingOptions: [
      {
        id: "photography",
        name: "Pack Photographie",
        description: "Photoshop + Lightroom",
        price: "19,99",
        billingPeriod: "mois",
        features: [
          "Adobe Photoshop",
          "Adobe Lightroom",
          "Lightroom Classic",
          "20 Go de stockage cloud",
          "Photoshop sur iPad",
          "Adobe Portfolio inclus"
        ],
        popular: false
      },
      {
        id: "single-app",
        name: "Application unique",
        description: "Une application au choix",
        price: "24,99",
        billingPeriod: "mois",
        features: [
          "Une application CC au choix",
          "100 Go de stockage cloud",
          "Adobe Fonts",
          "Adobe Portfolio",
          "Mises à jour et nouvelles fonctionnalités"
        ],
        popular: false
      },
      {
        id: "all-apps",
        name: "Toutes les applications",
        description: "Suite complète Creative Cloud",
        price: "29,99",
        billingPeriod: "mois",
        features: [
          "Plus de 20 applications créatives",
          "100 Go de stockage cloud",
          "Adobe Fonts",
          "Adobe Portfolio",
          "Mises à jour et nouvelles fonctionnalités"
        ],
        popular: true
      }
    ],
    faqs: [
      {
        question: "Comment fonctionne l'abonnement Adobe Creative Cloud via DigiSouk?",
        answer: "Nous vous fournissons un accès à un compte Adobe Creative Cloud existant. Après votre commande, vous recevrez vos identifiants de connexion et pourrez télécharger et utiliser immédiatement les applications incluses dans votre forfait."
      },
      {
        question: "Puis-je utiliser ces logiciels hors ligne?",
        answer: "Oui, une fois les applications installées et activées, vous pouvez les utiliser hors ligne. Cependant, une connexion Internet est requise tous les 30 jours pour la vérification de l'abonnement."
      },
      {
        question: "Sur combien d'ordinateurs puis-je installer mon abonnement Adobe?",
        answer: "L'abonnement Adobe Creative Cloud peut être activé sur deux ordinateurs simultanément (Windows et/ou Mac). Cependant, vous ne pouvez utiliser les applications que sur un seul ordinateur à la fois avec le même identifiant."
      }
    ]
  },
  {
    id: "antivirus",
    name: "Kaspersky Total Security",
    slug: "kaspersky-total-security",
    category: "Logiciel",
    shortDescription: "Protection complète contre les virus, logiciels malveillants et cybermenaces pour tous vos appareils.",
    description: "Kaspersky Total Security offre une protection premium contre tous les types de menaces numériques : virus, ransomwares, phishing, et plus encore. Notre offre vous permet d'obtenir cette solution de sécurité complète à un prix avantageux pour protéger tous vos appareils.",
    features: [
      "Protection en temps réel contre les virus et malwares",
      "Sécurité des paiements en ligne",
      "Protection de la vie privée",
      "Contrôle parental avancé",
      "Gestionnaire de mots de passe",
      "VPN sécurisé (trafic limité)",
      "Protection contre le phishing",
      "Compatible Windows, Mac, Android et iOS"
    ],
    systemRequirements: [
      "Windows 7/8/10/11",
      "macOS 10.15 et versions ultérieures",
      "Android 5.0 et versions ultérieures",
      "iOS 14.0 et versions ultérieures",
      "1 GB de RAM (2 GB recommandé)",
      "1500 MB d'espace disque disponible",
      "Connexion Internet pour les mises à jour"
    ],
    startingPrice: "19,99",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    heroImage: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    pricingOptions: [
      {
        id: "anti-virus",
        name: "Anti-Virus",
        description: "Protection de base",
        price: "19,99",
        billingPeriod: "an",
        features: [
          "Protection contre les virus et logiciels malveillants",
          "Analyse de fichiers en temps réel",
          "Protection web de base",
          "Licence pour 1 appareil",
          "Support technique standard"
        ],
        popular: false
      },
      {
        id: "internet-security",
        name: "Internet Security",
        description: "Protection intermédiaire",
        price: "29,99",
        billingPeriod: "an",
        features: [
          "Toutes les fonctionnalités Anti-Virus",
          "Protection des paiements en ligne",
          "Protection contre le phishing",
          "Contrôle parental de base",
          "Licence pour 3 appareils",
          "Support technique prioritaire"
        ],
        popular: false
      },
      {
        id: "total-security",
        name: "Total Security",
        description: "Protection complète",
        price: "39,99",
        billingPeriod: "an",
        features: [
          "Toutes les fonctionnalités Internet Security",
          "Gestionnaire de mots de passe",
          "VPN sécurisé (200 MB/jour)",
          "Protection de la vie privée",
          "Contrôle parental avancé",
          "Optimisation des performances",
          "Licence pour 5 appareils",
          "Support technique premium"
        ],
        popular: true
      }
    ],
    faqs: [
      {
        question: "Comment installer Kaspersky sur mes appareils?",
        answer: "Après l'achat, vous recevrez par email une clé d'activation et un lien pour télécharger le logiciel. Installez Kaspersky sur votre appareil, puis activez-le avec la clé fournie. Pour les appareils mobiles, téléchargez l'application depuis l'App Store ou Google Play et utilisez la même clé."
      },
      {
        question: "Ma licence Kaspersky est-elle renouvelée automatiquement?",
        answer: "Non, les licences que nous vendons sont valables pour la durée indiquée (généralement 1 an) sans renouvellement automatique. Vous recevrez un rappel avant l'expiration pour vous permettre de renouveler si vous le souhaitez."
      },
      {
        question: "Puis-je transférer ma licence vers un nouvel appareil?",
        answer: "Oui, vous pouvez désinstaller Kaspersky d'un appareil et l'installer sur un autre tant que vous ne dépassez pas le nombre d'appareils inclus dans votre licence. Votre compte My Kaspersky vous permet de gérer vos appareils protégés."
      }
    ]
  },
  {
    id: "iptv",
    name: "IPTV Premium",
    slug: "iptv-premium",
    category: "IPTV",
    shortDescription: "Accès à des milliers de chaînes TV du monde entier en qualité HD et 4K.",
    description: "Notre service IPTV Premium vous donne accès à plus de 10 000 chaînes TV du monde entier, incluant des chaînes françaises, internationales, sportives, cinéma, et bien plus encore. Profitez également de milliers de films et séries à la demande, le tout en qualité HD et 4K.",
    features: [
      "Plus de 10 000 chaînes TV en direct",
      "Chaînes françaises et internationales",
      "Bouquets sportifs complets (beIN Sports, Canal+, RMC Sport, etc.)",
      "Bibliothèque VOD avec des milliers de films et séries",
      "Qualité HD et 4K Ultra HD",
      "Guide des programmes électronique (EPG)",
      "Compatible avec tous les appareils",
      "Service client 24/7"
    ],
    startingPrice: "39,99",
    image: "https://images.pexels.com/photos/6782661/pexels-photo-6782661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    heroImage: "https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    compatibleDevices: ["smart_tv", "mobile", "tablet", "computer"],
    pricingOptions: [
      {
        id: "start",
        name: "Pack Start",
        description: "Idéal pour les débutants",
        price: "39,99",
        billingPeriod: "6 mois",
        features: [
          "5 000+ chaînes TV",
          "VOD basique",
          "Qualité HD",
          "1 connexion simultanée",
          "Support par email"
        ],
        popular: false
      },
      {
        id: "intense",
        name: "Pack Intense",
        description: "Notre offre la plus populaire",
        price: "59,99",
        billingPeriod: "6 mois",
        features: [
          "8 000+ chaînes TV",
          "VOD étendue",
          "Qualité HD et 4K",
          "2 connexions simultanées",
          "Support par email et chat"
        ],
        popular: true
      },
      {
        id: "infinity",
        name: "Pack Infinity",
        description: "L'expérience IPTV ultime",
        price: "79,99",
        billingPeriod: "6 mois",
        features: [
          "12 000+ chaînes TV",
          "VOD premium",
          "Qualité HD, 4K et 8K",
          "4 connexions simultanées",
          "Support prioritaire 24/7"
        ],
        popular: false
      }
    ],
    faqs: [
      {
        question: "Comment puis-je installer le service IPTV sur mes appareils?",
        answer: "Après votre achat, vous recevrez un email avec vos identifiants de connexion et des guides d'installation détaillés pour tous les appareils compatibles (Smart TV, Android Box, smartphone, tablette, etc.). Notre équipe est également disponible pour vous aider avec la configuration."
      },
      {
        question: "Quelles sont les chaînes françaises disponibles?",
        answer: "Notre service inclut toutes les principales chaînes françaises : TF1, France 2, France 3, Canal+, M6, Arte, C8, W9, TMC, et bien d'autres. Vous aurez également accès à des chaînes régionales et thématiques françaises."
      },
      {
        question: "Ai-je besoin d'un équipement spécial pour utiliser ce service?",
        answer: "Non, notre service IPTV fonctionne sur la plupart des appareils modernes. Pour les Smart TV, vous pouvez installer l'application directement. Pour les TV non connectées, un simple boîtier Android TV ou Fire TV Stick suffit. Vous pouvez également utiliser votre smartphone, tablette ou ordinateur."
      }
    ]
  },
  {
    id: "movieshow",
    name: "MovieShow",
    slug: "movieshow",
    category: "Streaming",
    shortDescription: "Plateforme de streaming dédiée aux amateurs de cinéma avec des milliers de films et séries.",
    description: "MovieShow est une plateforme de streaming spécialisée dans les films et séries, offrant une vaste collection de classiques et de nouveautés du monde entier. Notre service vous permet d'accéder à MovieShow à un prix avantageux pour profiter d'un divertissement illimité.",
    features: [
      "Catalogue de plus de 10 000 films et séries",
      "Nouveautés ajoutées chaque semaine",
      "Classiques du cinéma et films indépendants",
      "Séries TV complètes",
      "Catégories spécialisées (horror, sci-fi, documentaires...)",
      "Qualité HD et 4K",
      "Téléchargement pour visionnage hors ligne",
      "Pas de publicité"
    ],
    startingPrice: "7,99",
    image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    heroImage: "https://images.pexels.com/photos/7991464/pexels-photo-7991464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    contentLibrary: {
      description: "MovieShow propose une bibliothèque riche et diversifiée avec des milliers de titres dans tous les genres, des blockbusters aux films d'auteur.",
      examples: [
        {
          title: "Films d'action",
          image: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
          title: "Comédies",
          image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
          title: "Sci-Fi",
          image: "https://images.pexels.com/photos/3608311/pexels-photo-3608311.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
          title: "Documentaires",
          image: "https://images.pexels.com/photos/6157228/pexels-photo-6157228.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
      ]
    },
    compatibleDevices: ["smart_tv", "mobile", "tablet", "computer", "console"],
    pricingOptions: [
      {
        id: "basic",
        name: "Basic",
        description: "Pour un utilisateur",
        price: "7,99",
        billingPeriod: "mois",
        features: [
          "Accès au catalogue complet",
          "Qualité HD",
          "1 écran à la fois",
          "Téléchargement sur 1 appareil"
        ],
        popular: false
      },
      {
        id: "standard",
        name: "Standard",
        description: "Idéal pour un couple",
        price: "10,99",
        billingPeriod: "mois",
        features: [
          "Accès au catalogue complet",
          "Qualité Full HD",
          "2 écrans simultanés",
          "Téléchargement sur 2 appareils"
        ],
        popular: true
      },
      {
        id: "premium",
        name: "Premium",
        description: "Parfait pour la famille",
        price: "13,99",
        billingPeriod: "mois",
        features: [
          "Accès au catalogue complet",
          "Qualité 4K Ultra HD",
          "4 écrans simultanés",
          "Téléchargement sur 4 appareils",
          "Audio Dolby Atmos"
        ],
        popular: false
      }
    ],
    faqs: [
      {
        question: "Comment fonctionne l'abonnement MovieShow via DigiSouk?",
        answer: "Nous vous fournissons un accès à un compte MovieShow. Après validation de votre commande, vous recevrez les informations de connexion par email, et vous pourrez alors profiter immédiatement du service sur tous vos appareils compatibles."
      },
      {
        question: "Y a-t-il des contenus français sur MovieShow?",
        answer: "Oui, MovieShow propose une section dédiée au cinéma français avec des films classiques et contemporains, ainsi que des séries françaises populaires. Beaucoup de contenus internationaux sont également disponibles avec des sous-titres en français."
      },
      {
        question: "À quelle fréquence le catalogue est-il mis à jour?",
        answer: "Le catalogue MovieShow est enrichi chaque semaine avec de nouveaux films et séries. En général, plusieurs dizaines de nouveaux titres sont ajoutés chaque mois, couvrant tous les genres et des productions du monde entier."
      }
    ]
  }
];