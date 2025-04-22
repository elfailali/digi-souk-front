import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategoriesSection from '../components/home/CategoriesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import SpecialOffers from '../components/home/SpecialOffers';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'DigiSouk - Services numériques et abonnements streaming';
  }, []);

  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <CategoriesSection />
      <TestimonialsSection />
      <SpecialOffers />
    </>
  );
};

export default HomePage;