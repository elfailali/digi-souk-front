import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Tv, Monitor, Smartphone, Globe, Headphones } from 'lucide-react';
import PricingTable from '../components/iptv/PricingTable';
import FAQAccordion from '../components/faq/FAQAccordion';

const iptvFaqs = [
  {
    question: "Qu'est-ce que l'IPTV?",
    answer: "L'IPTV (Internet Protocol Television) est une technologie qui permet de diffuser des chaînes de télévision et du contenu vidéo via Internet, plutôt que par les méthodes traditionnelles comme le satellite ou le câble."
  },
  {
    question: "Sur quels appareils puis-je utiliser votre service IPTV?",
    answer: "Notre service IPTV est compatible avec de nombreux appareils : Smart TV (Samsung, LG, etc.), Android TV, Box Android, Fire TV Stick, smartphones et tablettes (Android et iOS), ordinateurs (Windows, Mac), et bien d'autres. Nous vous fournirons les instructions détaillées pour configurer le service sur votre appareil."
  },
  {
    question: "Quelle est la qualité des chaînes?",
    answer: "Nous proposons des chaînes en qualité SD, HD et 4K (selon le forfait choisi). La qualité dépend également de votre connexion Internet - nous recommandons au moins 25 Mbps pour une expérience optimale en 4K."
  },
  {
    question: "Combien de connexions simultanées sont autorisées?",
    answer: "Le nombre de connexions simultanées dépend du forfait choisi. Le Pack Start permet 1 connexion, le Pack Intense 2 connexions, et le Pack Infinity jusqu'à 4 connexions simultanées. Chaque connexion supplémentaire non incluse dans votre forfait peut être achetée séparément."
  },
  {
    question: "Est-ce que vous proposez un essai gratuit?",
    answer: "Oui, nous proposons un essai gratuit de 24 heures pour vous permettre de tester notre service et de vérifier sa compatibilité avec vos appareils. Contactez-nous pour demander votre essai gratuit."
  },
  {
    question: "Quelles méthodes de paiement acceptez-vous?",
    answer: "Nous acceptons plusieurs méthodes de paiement, notamment les cartes bancaires (Visa, Mastercard), PayPal, les virements bancaires et certaines crypto-monnaies. Toutes les transactions sont sécurisées."
  }
];

const IPTVPage: React.FC = () => {
  useEffect(() => {
    document.title = 'DigiSouk - Abonnements IPTV';
  }, []);

  return (
    <div className="pt-24">
      {/* En-tête */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="mb-4">Abonnements IPTV Premium</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Accédez à des milliers de chaînes TV du monde entier, des films et séries à la demande avec notre service IPTV haute qualité. Une expérience de divertissement sans limites.
            </p>
            <Link to="/contact?service=iptv" className="bg-white text-primary hover:bg-white/90 px-6 py-3 rounded-lg font-medium inline-block transition-colors">
              Essai gratuit 24h
            </Link>
          </div>
        </div>
      </div>

      {/* Caractéristiques */}
      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Pourquoi choisir notre IPTV?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez les avantages qui font de notre service IPTV la référence pour le divertissement numérique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Tv className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">+10,000 Chaînes TV</h3>
              <p className="text-muted-foreground">
                Des milliers de chaînes du monde entier incluant sport, cinéma, séries, documentaires et chaînes internationales.
              </p>
            </div>

            <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Contenu International</h3>
              <p className="text-muted-foreground">
                Chaînes françaises, européennes, américaines, arabes, africaines et asiatiques pour satisfaire tous les goûts.
              </p>
            </div>

            <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Qualité HD/4K</h3>
              <p className="text-muted-foreground">
                Profitez de vos contenus préférés avec une qualité d'image exceptionnelle, jusqu'à la 4K Ultra HD selon votre forfait.
              </p>
            </div>

            <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Multi-appareils</h3>
              <p className="text-muted-foreground">
                Compatible avec Smart TV, smartphone, tablette, ordinateur, Android TV Box, et plus encore.
              </p>
            </div>

            <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">VOD & Replay</h3>
              <p className="text-muted-foreground">
                Accédez à une vaste bibliothèque de films et séries à la demande, ainsi qu'aux programmes en replay.
              </p>
            </div>

            <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Support 24/7</h3>
              <p className="text-muted-foreground">
                Notre équipe technique est disponible à tout moment pour vous assister et résoudre rapidement vos problèmes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section appareils compatibles */}
      <div className="py-16 bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Compatibilité étendue</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Notre service IPTV fonctionne sur presque tous vos appareils préférés
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white p-4 rounded-xl text-center">
              <img 
                src="https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Smart TV" 
                className="w-full h-32 object-cover rounded-lg mb-4" 
              />
              <h3 className="font-medium">Smart TV</h3>
              <p className="text-xs text-muted-foreground">Samsung, LG, Sony</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl text-center">
              <img 
                src="https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Smartphone" 
                className="w-full h-32 object-cover rounded-lg mb-4" 
              />
              <h3 className="font-medium">Smartphones</h3>
              <p className="text-xs text-muted-foreground">Android, iOS</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl text-center">
              <img 
                src="https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Tablette" 
                className="w-full h-32 object-cover rounded-lg mb-4" 
              />
              <h3 className="font-medium">Tablettes</h3>
              <p className="text-xs text-muted-foreground">iPad, Android</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl text-center">
              <img 
                src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Ordinateur" 
                className="w-full h-32 object-cover rounded-lg mb-4" 
              />
              <h3 className="font-medium">Ordinateurs</h3>
              <p className="text-xs text-muted-foreground">Windows, Mac</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              to="/contact?service=iptv" 
              className="text-primary font-medium hover:underline inline-flex items-center"
            >
              <span>Voir la liste complète des appareils compatibles</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Tableau de prix */}
      <div className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Nos forfaits IPTV</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choisissez le forfait qui correspond le mieux à vos besoins de divertissement
            </p>
          </div>

          <PricingTable />
        </div>
      </div>

      {/* Processus d'installation */}
      <div className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Installation simple en 3 étapes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Commencer avec notre service IPTV est rapide et facile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                <h3 className="text-lg font-bold mb-4">Commandez votre abonnement</h3>
                <p className="text-muted-foreground mb-4">
                  Choisissez le forfait qui vous convient et effectuez votre commande via notre formulaire sécurisé.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Sélection du forfait</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Choix de la durée</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Paiement sécurisé</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 -top-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                <h3 className="text-lg font-bold mb-4">Recevez vos identifiants</h3>
                <p className="text-muted-foreground mb-4">
                  Après confirmation de votre paiement, vous recevrez vos identifiants de connexion par email.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Email avec identifiants</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Instructions d'installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Guide d'utilisation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 -top-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                <h3 className="text-lg font-bold mb-4">Installez et profitez</h3>
                <p className="text-muted-foreground mb-4">
                  Suivez nos guides pour installer l'application sur vos appareils et commencez à regarder immédiatement.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Installation facile</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Accès immédiat</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Support technique disponible</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Questions fréquentes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trouvez des réponses aux questions les plus courantes sur notre service IPTV
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={iptvFaqs} />
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Vous ne trouvez pas la réponse à votre question?
            </p>
            <Link 
              to="/contact" 
              className="btn-primary"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-12 md:py-16">
        <div className="container-custom text-center">
          <h2 className="mb-4">Prêt à découvrir une nouvelle façon de regarder la TV?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Commencez dès aujourd'hui avec notre essai gratuit de 24 heures et explorez notre vaste bibliothèque de contenus.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact?service=iptv" 
              className="bg-white text-primary hover:bg-white/90 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Essai gratuit 24h
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPTVPage;