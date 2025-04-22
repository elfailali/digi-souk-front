import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Thomas Dubois',
    role: 'Client IPTV',
    content: 'Je suis client DigiSouk depuis plus d\'un an et je suis très satisfait de leur service IPTV. La qualité est excellente et le support client est réactif.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120',
    rating: 5
  },
  {
    id: 2,
    name: 'Sophie Martin',
    role: 'Utilisatrice Netflix',
    content: 'Grâce à DigiSouk, j\'ai pu accéder à Netflix à un prix imbattable. Le processus d\'inscription était simple et rapide. Je recommande vivement leurs services!',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120',
    rating: 5
  },
  {
    id: 3,
    name: 'Jean Leclerc',
    role: 'Client Spotify',
    content: 'L\'abonnement Spotify que j\'ai souscrit via DigiSouk fonctionne parfaitement depuis 6 mois. Le rapport qualité-prix est excellent et le service client est à l\'écoute.',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=120',
    rating: 4
  },
  {
    id: 4,
    name: 'Marie Dupont',
    role: 'Cliente Disney+',
    content: 'Je cherchais un moyen d\'accéder à Disney+ à un prix abordable et DigiSouk a répondu à mes attentes. La configuration a été très facile et tout fonctionne sans problème.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=120',
    rating: 5
  },
  {
    id: 5,
    name: 'Pierre Lambert',
    role: 'Client Logiciels',
    content: 'J\'ai acheté plusieurs logiciels via DigiSouk et je suis impressionné par la rapidité de livraison et l\'authenticité des produits. Service 5 étoiles!',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=120',
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        className={`w-5 h-5 ${index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diffX = e.clientX - startX;
    
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        handlePrev();
      } else {
        handleNext();
      }
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diffX = e.touches[0].clientX - startX;
    
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        handlePrev();
      } else {
        handleNext();
      }
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section bg-gradient-to-r from-primary to-primary-light text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4">Ce que disent nos clients</h2>
          <p className="max-w-2xl mx-auto opacity-80">
            Découvrez les expériences de nos clients satisfaits qui profitent chaque jour de nos services numériques.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div 
            ref={carouselRef}
            className="overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full px-4"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-2 border-white/20">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex justify-center mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-white/90 mb-6 text-lg italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-white/70">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-primary p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10 hidden md:block"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white text-primary p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10 hidden md:block"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex
                ? 'bg-white w-8'
                : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Voir témoignage ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;