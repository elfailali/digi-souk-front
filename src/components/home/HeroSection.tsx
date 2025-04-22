import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const sliderContent = [
  {
    id: 1,
    title: "Accédez à tous vos services de streaming préférés",
    subtitle: "Profitez de Netflix, Disney+, Spotify et plus encore à prix réduit",
    image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cta: "/streaming"
  },
  {
    id: 2,
    title: "Découvrez la puissance de l'IPTV",
    subtitle: "Des milliers de chaînes et de films à portée de main",
    image: "https://images.pexels.com/photos/5082566/pexels-photo-5082566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cta: "/iptv"
  },
  {
    id: 3,
    title: "Les meilleurs logiciels à prix exceptionnel",
    subtitle: "Outils professionnels pour tous vos besoins numériques",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cta: "/logiciels"
  }
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === sliderContent.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slider */}
      {sliderContent.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="object-cover w-full h-full"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container-custom text-white">
          <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">
            {sliderContent.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-1000 ease-in-out ${
                  index === currentSlide
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-8 absolute'
                }`}
              >
                {index === currentSlide && (
                  <>
                    <h1 className="font-bold mb-4">{slide.title}</h1>
                    <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                    <Link
                      to={slide.cta}
                      className="btn-primary inline-flex items-center"
                    >
                      En savoir plus
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </Link>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center space-x-3">
        {sliderContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-10'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;