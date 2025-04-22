import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import FAQAccordion from '../components/faq/FAQAccordion';
import { CheckCircle, Monitor, Smartphone, Laptop, Tv } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';

interface ServicePageProps {
  serviceId?: string;
}

const ServicePage: React.FC<ServicePageProps> = ({ serviceId }) => {
  const params = useParams();
  const slug = params.slug || '';
  
  // Recherche du service par ID ou par slug
  const service = serviceId 
    ? servicesData.find(s => s.id === serviceId)
    : servicesData.find(s => s.slug === slug);

  useEffect(() => {
    if (service) {
      document.title = `DigiSouk - ${service.name}`;
    }
  }, [service]);

  if (!service) {
    return (
      <div className="pt-24 container-custom min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Service non trouvé</h2>
        <p className="text-muted-foreground mb-6">
          Désolé, le service que vous recherchez n'est pas disponible.
        </p>
        <Link to="/" className="btn-primary">
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* En-tête */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10" />
        <img 
          src={service.heroImage || service.image} 
          alt={service.name} 
          className="w-full h-[50vh] object-cover" 
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container-custom">
            <div className="max-w-2xl text-white">
              <span className="inline-block bg-secondary/90 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {service.category}
              </span>
              <h1 className="mb-4">{service.name}</h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                {service.shortDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to={`/contact?service=${service.slug}`} 
                  className="btn-primary"
                >
                  Commander maintenant
                </Link>
                <a 
                  href="#details" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description détaillée */}
      <div id="details" className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="mb-6">À propos de {service.name}</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p>{service.description}</p>
              </div>

              <h3 className="text-xl font-bold mb-4">Caractéristiques principales</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {service.contentLibrary && (
                <>
                  <h3 className="text-xl font-bold mb-4">Bibliothèque de contenu</h3>
                  <p className="text-muted-foreground mb-6">{service.contentLibrary.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {service.contentLibrary.examples.map((example, idx) => (
                      <div key={idx} className="bg-muted rounded-lg p-4 text-center">
                        <img 
                          src={example.image} 
                          alt={example.title} 
                          className="w-full h-32 object-cover rounded-md mb-2" 
                        />
                        <h4 className="font-medium text-sm">{example.title}</h4>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {service.compatibleDevices && (
                <>
                  <h3 className="text-xl font-bold mb-4">Appareils compatibles</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {service.compatibleDevices.includes('smart_tv') && (
                      <div className="bg-muted p-4 rounded-lg text-center">
                        <Tv className="w-8 h-8 mx-auto mb-2 text-primary" />
                        <h4 className="font-medium">Smart TV</h4>
                      </div>
                    )}
                    {service.compatibleDevices.includes('mobile') && (
                      <div className="bg-muted p-4 rounded-lg text-center">
                        <Smartphone className="w-8 h-8 mx-auto mb-2 text-primary" />
                        <h4 className="font-medium">Mobile</h4>
                      </div>
                    )}
                    {service.compatibleDevices.includes('tablet') && (
                      <div className="bg-muted p-4 rounded-lg text-center">
                        <Tablet className="w-8 h-8 mx-auto mb-2 text-primary" />
                        <h4 className="font-medium">Tablette</h4>
                      </div>
                    )}
                    {service.compatibleDevices.includes('computer') && (
                      <div className="bg-muted p-4 rounded-lg text-center">
                        <Laptop className="w-8 h-8 mx-auto mb-2 text-primary" />
                        <h4 className="font-medium">Ordinateur</h4>
                      </div>
                    )}
                    {service.compatibleDevices.includes('console') && (
                      <div className="bg-muted p-4 rounded-lg text-center">
                        <GameController className="w-8 h-8 mx-auto mb-2 text-primary" />
                        <h4 className="font-medium">Console</h4>
                      </div>
                    )}
                  </div>
                </>
              )}

              {service.systemRequirements && (
                <>
                  <h3 className="text-xl font-bold mb-4">Configuration requise</h3>
                  <div className="bg-muted p-4 rounded-lg mb-8">
                    <ul className="space-y-2">
                      {service.systemRequirements.map((req, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {service.faqs && service.faqs.length > 0 && (
                <>
                  <h3 className="text-xl font-bold mb-4">Questions fréquentes</h3>
                  <FAQAccordion faqs={service.faqs} />
                </>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-24">
                <div className="bg-primary text-white p-6">
                  <h3 className="text-xl font-bold mb-2">Options tarifaires</h3>
                  <p className="text-white/80">
                    Choisissez l'offre qui correspond le mieux à vos besoins
                  </p>
                </div>
                
                <div className="p-6">
                  {service.pricingOptions && service.pricingOptions.map((option, idx) => (
                    <div 
                      key={idx}
                      className={`mb-4 p-4 rounded-lg border-2 ${
                        option.popular 
                          ? 'border-secondary bg-secondary/5' 
                          : 'border-gray-200'
                      }`}
                    >
                      {option.popular && (
                        <div className="inline-block bg-secondary text-white text-xs px-2 py-1 rounded-full mb-2">
                          Plus populaire
                        </div>
                      )}
                      <h4 className="font-bold text-lg">{option.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{option.description}</p>
                      
                      <div className="flex items-baseline mb-4">
                        <span className="text-2xl font-bold">{option.price}Dhs</span>
                        <span className="text-muted-foreground ml-1">/ {option.billingPeriod}</span>
                      </div>
                      
                      <ul className="space-y-2 mb-4">
                        {option.features.map((feature, featureIdx) => (
                          <li key={featureIdx} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link 
                        to={`/contact?service=${service.slug}&plan=${option.id}`} 
                        className={`w-full text-center py-2 px-4 rounded-lg font-medium block ${
                          option.popular
                            ? 'bg-secondary hover:bg-secondary/90 text-white' 
                            : 'bg-primary hover:bg-primary-light text-white'
                        }`}
                      >
                        Sélectionner
                      </Link>
                    </div>
                  ))}
                  
                  <div className="mt-6 text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      Besoin d'une offre personnalisée?
                    </p>
                    <Link 
                      to="/contact" 
                      className="text-primary font-medium hover:underline"
                    >
                      Contactez-nous pour un devis
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Formulaire de contact spécifique */}
      <div className="bg-muted py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Intéressé par {service.name}?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Remplissez le formulaire ci-dessous pour commander ou nous poser une question sur ce service
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <ContactForm prefilledService={service.slug} />
          </div>
        </div>
      </div>

      {/* Services connexes */}
      <div className="py-16">
        <div className="container-custom">
          <h2 className="text-center mb-12">Services similaires</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicesData
              .filter(s => s.category === service.category && s.id !== service.id)
              .slice(0, 3)
              .map(relatedService => (
                <Link 
                  key={relatedService.id} 
                  to={`/services/${relatedService.slug}`}
                  className="card group"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={relatedService.image} 
                      alt={relatedService.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-lg font-bold">{relatedService.name}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-muted-foreground line-clamp-2 text-sm">{relatedService.shortDescription}</p>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-primary font-medium text-sm">Voir les détails</span>
                      <span className="text-sm">À partir de {relatedService.startingPrice}Dhs</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Components supplémentaires nécessaires pour cette page
const Tablet: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12" y2="18.01" />
  </svg>
);

const GameController: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="6" y1="12" x2="10" y2="12" />
    <line x1="8" y1="10" x2="8" y2="14" />
    <circle cx="15" cy="13" r="1" />
    <circle cx="18" cy="11" r="1" />
    <rect x="2" y="6" width="20" height="12" rx="2" />
  </svg>
);

export default ServicePage;