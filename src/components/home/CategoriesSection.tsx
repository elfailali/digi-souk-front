import React from 'react';
import { Link } from 'react-router-dom';
import { Tv, Play, Laptop } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'IPTV',
    description: 'Des milliers de chaînes TV en direct et à la demande avec des forfaits adaptés à vos besoins.',
    icon: <Tv className="w-10 h-10" />,
    path: '/iptv',
    color: 'from-blue-500 to-blue-700'
  },
  {
    id: 2,
    name: 'Services de Streaming',
    description: 'Accédez aux plateformes de streaming les plus populaires avec des abonnements à prix réduit.',
    icon: <Play className="w-10 h-10" />,
    path: '/streaming',
    color: 'from-purple-500 to-purple-700'
  },
  {
    id: 3,
    name: 'Logiciels',
    description: 'Obtenez les meilleurs logiciels professionnels avec des licences authentiques et garanties.',
    icon: <Laptop className="w-10 h-10" />,
    path: '/logiciels',
    color: 'from-teal-500 to-teal-700'
  }
];

const CategoriesSection: React.FC = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4">Nos Catégories de Produits</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explorez notre gamme complète de produits et services numériques pour trouver celui qui vous convient le mieux.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={category.path}
              className="group"
            >
              <div className="card h-full flex flex-col transform transition duration-300 hover:-translate-y-2">
                <div className={`p-6 bg-gradient-to-r ${category.color} rounded-t-xl`}>
                  <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center text-white mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <span className="text-primary font-medium inline-flex items-center group-hover:underline">
                    Explorer
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;