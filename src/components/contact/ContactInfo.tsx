import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-primary text-white rounded-xl overflow-hidden">
      <div className="p-6 md:p-8">
        <h3 className="text-2xl font-bold mb-6">Nos Coordonnées</h3>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <Mail className="w-6 h-6 mr-4 shrink-0 mt-1" />
            <div>
              <p className="font-medium">Email</p>
              <a href="mailto:contact@digisouk.com" className="text-white/80 hover:text-white transition-colors">
                contact@digisouk.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <Phone className="w-6 h-6 mr-4 shrink-0 mt-1" />
            <div>
              <p className="font-medium">Téléphone</p>
              <a href="tel:+21200000000" className="text-white/80 hover:text-white transition-colors">
                +212 6 00 00 00 00
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <MessageCircle className="w-6 h-6 mr-4 shrink-0 mt-1" />
            <div>
              <p className="font-medium">WhatsApp</p>
              <a 
                href="https://wa.me/33123456789" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                +212 6 00 00 00 00
              </a>
              <p className="text-sm text-white/60 mt-1">
                Nous sommes disponibles 7j/7 sur WhatsApp
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <MapPin className="w-6 h-6 mr-4 shrink-0 mt-1" />
            <div>
              <p className="font-medium">Adresse</p>
              <p className="text-white/80">Derb Ghallef, Casablanca, Maroc</p>
            </div>
          </div>
          
          {/* <div className="flex items-start">
            <Clock className="w-6 h-6 mr-4 shrink-0 mt-1" />
            <div>
              <p className="font-medium">Heures d'ouverture</p>
              <p className="text-white/80">Lun - Ven: 9h00 - 18h00</p>
              <p className="text-white/80">Sam: 10h00 - 15h00</p>
              <p className="text-white/80">Dim: Fermé</p>
            </div>
          </div> */}
        </div>
      </div>
      
      <div className="h-80">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13297.714751704185!2d-7.6230526!3d33.56821715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2ae179126b7%3A0xed0f844b803032db!2sDerb%20Ghallef%2C%20Casablanca!5e0!3m2!1sen!2sma!4v1745327790405!5m2!1sen!2sma" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy">
        </iframe>
      </div>
    </div>
  );
};

export default ContactInfo;