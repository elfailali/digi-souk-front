import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Check } from 'lucide-react';

const offers = [
  {
    id: 1,
    title: 'Pack IPTV + Netflix',
    description: 'Profitez de l\'IPTV et de Netflix à un prix exceptionnel',
    originalPrice: '35,99Dhs',
    discountedPrice: '24,99Dhs',
    savings: '30%',
    features: [
      'Accès à plus de 10,000 chaînes TV',
      'Abonnement Netflix Standard (2 écrans HD)',
      'Service client 24/7',
      'Garantie de remboursement de 30 jours'
    ],
    image: 'https://images.pexels.com/photos/5082580/pexels-photo-5082580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/contact?offer=iptv-netflix',
    endsIn: '3 jours'
  },
  {
    id: 2,
    title: 'Trio Streaming',
    description: 'Le meilleur de Disney+, Prime Video et Spotify à prix réduit',
    originalPrice: '29,99Dhd',
    discountedPrice: '19,99Dhs',
    savings: '33%',
    features: [
      'Abonnement Disney+ (tous les contenus)',
      'Prime Video (films et séries)',
      'Spotify Premium (sans publicité)',
      'Assistance technique prioritaire'
    ],
    image: 'https://images.pexels.com/photos/7991464/pexels-photo-7991464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/contact?offer=trio-streaming',
    endsIn: '5 jours'
  }
];

const SpecialOffers: React.FC = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4">Offres Spéciales</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos packs exclusifs à durée limitée et profitez de réductions exceptionnelles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer) => (
            <div key={offer.id} className="card overflow-hidden group">
              <div className="relative">
                <img 
                  src={offer.image} 
                  alt={offer.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Économisez {offer.savings}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                <p className="text-muted-foreground mb-4">{offer.description}</p>
                
                <div className="mb-4">
                  <span className="text-xl font-bold text-primary mr-2">{offer.discountedPrice}</span>
                  <span className="text-muted-foreground line-through">{offer.originalPrice}</span>
                  <span className="text-muted-foreground"> / mois</span>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center text-amber-600 mb-2">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">Offre expire dans {offer.endsIn}</span>
                  </div>
                  <ul className="space-y-2">
                    {offer.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-green-500 mt-1">
                          <Check className="w-4 h-4" />
                        </span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to={offer.link} 
                  className="btn-primary w-full text-center block"
                >
                  Profiter de l'offre
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;