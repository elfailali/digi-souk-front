import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';

const FeaturedProducts: React.FC = () => {
  // Sélectionner les 6 premiers services pour la section "Featured"
  const featuredServices = servicesData.slice(0, 6);

  return (
    <section className="section bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4">Nos Services Populaires</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre sélection de services premium pour profiter du meilleur du divertissement numérique à des prix imbattables.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredServices.map((service) => (
            <Link 
              key={service.id} 
              to={`/services/${service.slug}`}
              className="card group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold">{service.name}</h3>
                    <p className="text-white/80 text-sm">À partir de {service.startingPrice}Dhs</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-muted-foreground line-clamp-2">{service.shortDescription}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-primary font-semibold">Voir les détails</span>
                  <span className="text-xs px-2 py-1 bg-secondary/10 text-secondary rounded-full">
                    {service.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/streaming" className="btn-outline">
            Voir tous nos services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;