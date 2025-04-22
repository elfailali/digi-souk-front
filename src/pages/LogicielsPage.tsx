import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import FAQAccordion from '../components/faq/FAQAccordion';

// Filtrer uniquement les logiciels
const logiciels = servicesData.filter(
  service => service.category === 'Logiciel'
);

const logicielsFaqs = [
  {
    question: "Les licences sont-elles authentiques?",
    answer: "Oui, toutes nos licences sont 100% authentiques et activables directement auprès de l'éditeur. Vous recevrez une clé d'activation officielle et les instructions pour activer votre logiciel."
  },
  {
    question: "Quelle est la durée de validité des licences?",
    answer: "La durée dépend du produit. Certaines licences sont perpétuelles (à vie), d'autres sont des abonnements annuels. La durée est clairement indiquée dans la description de chaque produit."
  },
  {
    question: "Puis-je utiliser la licence sur plusieurs ordinateurs?",
    answer: "Cela dépend des conditions de licence spécifiques à chaque logiciel. Généralement, les licences personnelles sont limitées à un seul utilisateur, mais certains produits permettent l'installation sur plusieurs appareils. Les détails sont fournis dans la description de chaque produit."
  },
  {
    question: "Comment s'effectue la livraison des logiciels?",
    answer: "Après confirmation de votre paiement, vous recevrez un email contenant votre clé d'activation, un lien de téléchargement officiel et des instructions d'installation détaillées."
  },
  {
    question: "Proposez-vous un support technique pour l'installation?",
    answer: "Oui, notre équipe de support technique est disponible pour vous aider avec l'installation et l'activation de votre logiciel. Nous fournissons également des guides détaillés pour faciliter le processus."
  }
];

const LogicielsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'DigiSouk - Logiciels';
  }, []);

  return (
    <div className="pt-24">
      {/* En-tête */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="mb-4">Logiciels Premium</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Découvrez notre sélection de logiciels professionnels avec des licences authentiques à prix compétitif. Boostez votre productivité avec les meilleurs outils du marché.
            </p>
            <Link to="/contact?service=logiciels" className="bg-white text-teal-700 hover:bg-white/90 px-6 py-3 rounded-lg font-medium inline-block transition-colors">
              Voir les offres
            </Link>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {logiciels.map(logiciel => (
            <div 
              key={logiciel.id} 
              className="card overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56">
                <img 
                  src={logiciel.image} 
                  alt={logiciel.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-between items-end">
                      <h3 className="text-xl font-bold text-white">{logiciel.name}</h3>
                      <span className="bg-teal-500 text-white text-sm px-3 py-1 rounded-full">
                        À partir de {logiciel.startingPrice}Dhs
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-muted-foreground mb-4">{logiciel.shortDescription}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Configuration requise:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {logiciel.systemRequirements?.map((req, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-teal-500 mr-2">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Inclus:</h4>
                  <div className="flex flex-wrap gap-2">
                    {logiciel.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="text-xs bg-muted px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link 
                  to={`/contact?service=logiciels&software=${logiciel.slug}`}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg inline-block text-center transition-colors"
                >
                  Commander
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Avantages */}
      <div className="bg-muted py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Pourquoi acheter chez DigiSouk?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez les avantages qui font de nous le partenaire idéal pour l'achat de vos logiciels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 flex items-center justify-center rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Licences authentiques</h3>
              <p className="text-muted-foreground">
                Toutes nos licences sont 100% authentiques et activables directement auprès de l'éditeur officiel.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 flex items-center justify-center rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Économies importantes</h3>
              <p className="text-muted-foreground">
                Bénéficiez de réductions allant jusqu'à 70% par rapport aux prix officiels des éditeurs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 flex items-center justify-center rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Livraison instantanée</h3>
              <p className="text-muted-foreground">
                Recevez votre clé d'activation par email immédiatement après confirmation de votre paiement.
              </p>
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
              Trouvez des réponses aux questions les plus courantes sur nos licences de logiciels
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={logicielsFaqs} />
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
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-12 md:py-16">
        <div className="container-custom text-center">
          <h2 className="mb-4">Prêt à booster votre productivité?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Découvrez nos licences logicielles à prix réduits et profitez des meilleurs outils professionnels du marché.
          </p>
          <Link 
            to="/contact?service=logiciels" 
            className="bg-white text-teal-700 hover:bg-white/90 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Voir toutes nos offres
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogicielsPage;