import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

// Filtrer uniquement les services de streaming
const streamingServices = servicesData.filter(
  service => service.category === 'Streaming'
);

const StreamingPage: React.FC = () => {
  useEffect(() => {
    document.title = 'DigiSouk - Services de Streaming';
  }, []);

  return (
    <div className="pt-24">
      {/* En-tête */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="mb-4">Services de Streaming</h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Découvrez notre sélection de services de streaming premium à des prix compétitifs. Accédez à des milliers de films, séries, musiques et plus encore.
            </p>
            <Link to="/contact" className="bg-white text-primary hover:bg-white/90 px-6 py-3 rounded-lg font-medium inline-block transition-colors">
              Nous contacter
            </Link>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {streamingServices.map(service => (
            <Link 
              key={service.id} 
              to={`/services/${service.slug}`}
              className="card overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-between items-end">
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      <span className="bg-accent text-white text-sm px-3 py-1 rounded-full">
                        À partir de {service.startingPrice}Dhs
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-muted-foreground mb-4">{service.shortDescription}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="text-xs bg-muted px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                <span className="text-primary font-medium flex items-center">
                  Voir les détails
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Section avantages */}
      <div className="bg-muted py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Pourquoi choisir nos services de streaming?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              DigiSouk vous propose une expérience de divertissement numérique inégalée avec des avantages uniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Prix imbattables</h3>
              <p className="text-muted-foreground">
                Profitez de vos services préférés à des tarifs très compétitifs, avec des économies allant jusqu'à 70% par rapport aux prix officiels.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Activation rapide</h3>
              <p className="text-muted-foreground">
                Votre compte est activé en quelques minutes après confirmation de paiement, pour un accès immédiat à vos contenus.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Support premium</h3>
              <p className="text-muted-foreground">
                Notre équipe de support est disponible 7j/7 pour vous aider avec la configuration et répondre à toutes vos questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamingPage;