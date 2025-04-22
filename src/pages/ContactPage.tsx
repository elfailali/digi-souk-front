import React, { useEffect } from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import FAQAccordion from '../components/faq/FAQAccordion';

const contactFaqs = [
  {
    question: "Comment puis-je payer mes achats?",
    answer: "Nous acceptons plusieurs méthodes de paiement : cartes bancaires (Visa, Mastercard), PayPal, virements bancaires et certaines crypto-monnaies. Toutes les transactions sont sécurisées et vos informations de paiement sont protégées."
  },
  {
    question: "Combien de temps faut-il pour activer mon service après paiement?",
    answer: "Pour les services de streaming et IPTV, l'activation est généralement effectuée dans les 30 minutes à 2 heures suivant la confirmation de votre paiement. Pour les logiciels, la livraison est immédiate par email après paiement."
  },
  {
    question: "Proposez-vous une garantie sur vos services?",
    answer: "Oui, tous nos services sont garantis. Pour l'IPTV, nous offrons une garantie de bon fonctionnement pendant toute la durée de l'abonnement. Pour les services de streaming, nous garantissons le remplacement en cas de problème. Pour les logiciels, nous garantissons l'activation de la licence."
  },
  {
    question: "Que faire si j'ai un problème technique?",
    answer: "Notre équipe de support technique est disponible 7j/7 par email, téléphone et WhatsApp. N'hésitez pas à nous contacter pour toute question ou problème technique, nous nous efforçons de répondre dans les 24 heures maximum."
  }
];

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'DigiSouk - Contact';
  }, []);

  return (
    <div className="pt-24">
      {/* En-tête */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="mb-4">Contactez-nous</h1>
            <p className="text-lg md:text-xl text-white/90">
              Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans le choix de votre service.
            </p>
          </div>
        </div>
      </div>

      {/* Formulaire et informations de contact */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Questions fréquentes sur nos services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trouvez rapidement des réponses aux questions les plus courantes concernant nos produits et services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={contactFaqs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;