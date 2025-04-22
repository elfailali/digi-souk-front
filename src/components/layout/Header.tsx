import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Mail, PhoneCall } from 'lucide-react';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Streaming', path: '/streaming' },
    { name: 'IPTV', path: '/iptv' },
    { name: 'Logiciels', path: '/logiciels' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="z-10 transition-transform hover:scale-105">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium relative text-base transition-colors duration-300 hover:text-primary group ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                  location.pathname === item.path ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
          </nav>
          
          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Link 
              to="/contact" 
              className="btn-primary flex items-center px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Commander | Contact 
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-10 focus:outline-none p-2 rounded-full hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-primary" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white/95 backdrop-blur-sm z-5 transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xl font-medium transition-colors duration-300 hover:text-primary ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-3 mt-6 w-3/4 max-w-xs">
              <Link 
                to="/contact" 
                className="flex items-center justify-center px-4 py-3 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors shadow-md"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Commander | Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;