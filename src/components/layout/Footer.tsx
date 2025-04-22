import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../ui/Logo';
import NewsletterForm from '../ui/NewsletterForm';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <Logo color="white" />
            </div>
            <p className="mb-6 text-gray-300">
              Solutions de divertissement digital premium pour toute la famille.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Nos Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/streaming" className="text-gray-300 hover:text-white transition-colors">
                  Services de Streaming
                </Link>
              </li>
              <li>
                <Link to="/iptv" className="text-gray-300 hover:text-white transition-colors">
                  Abonnements IPTV
                </Link>
              </li>
              <li>
                <Link to="/logiciels" className="text-gray-300 hover:text-white transition-colors">
                  Logiciels
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Informations</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Conditions Générales
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Politique de Confidentialité
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Inscrivez-vous pour recevoir nos offres et promotions.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between pt-8 border-t border-gray-700 text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} DigiSouk. Tous droits réservés.</p>
          <p className="mt-2 md:mt-0">
            Conçu avec passion pour votre divertissement numérique.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;