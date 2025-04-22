import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-30 flex flex-col space-y-4">
      <a
        href="https://wa.me/1234567890" 
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Contactez-nous sur WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href="tel:+1234567890"
        className="bg-primary hover:bg-primary-light text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Appelez-nous"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingActions;