import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, AlertCircle } from 'lucide-react';

interface PricingOption {
  duration: string;
  price: string;
}

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  channels: number;
  videoQuality: string;
  devices: number;
  support: string;
  options: PricingOption[];
  features: Array<{ text: string; included: boolean }>;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'start',
    name: 'Pack Start',
    description: 'Idéal pour les débutants en IPTV',
    channels: 5000,
    videoQuality: 'HD',
    devices: 1,
    support: 'Email',
    options: [
      { duration: '6 mois', price: '390,99Dhs' },
      { duration: '12 mois', price: '690,99Dhs' },
    ],
    features: [
      { text: 'Chaînes francophones', included: true },
      { text: 'Chaînes internationales', included: true },
      { text: 'Films et séries à la demande', included: true },
      { text: 'Guide des programmes électronique', included: true },
      { text: 'Qualité 4K', included: false },
      { text: 'Support technique prioritaire', included: false },
      { text: 'Applications dédiées multi-appareils', included: false },
    ],
  },
  {
    id: 'intense',
    name: 'Pack Intense',
    description: 'Notre offre la plus populaire',
    channels: 8000,
    videoQuality: 'HD/4K',
    devices: 2,
    support: 'Email & Chat',
    options: [
      { duration: '6 mois', price: '590,99Dhs' },
      { duration: '12 mois', price: '990,99Dhs' },
    ],
    features: [
      { text: 'Chaînes francophones', included: true },
      { text: 'Chaînes internationales', included: true },
      { text: 'Films et séries à la demande', included: true },
      { text: 'Guide des programmes électronique', included: true },
      { text: 'Qualité 4K', included: true },
      { text: 'Support technique prioritaire', included: true },
      { text: 'Applications dédiées multi-appareils', included: false },
    ],
  },
  {
    id: 'infinity',
    name: 'Pack Infinity',
    description: 'Expérience IPTV ultime sans compromis',
    channels: 12000,
    videoQuality: 'HD/4K/8K',
    devices: 4,
    support: 'Email, Chat & Téléphone',
    options: [
      { duration: '6 mois', price: '799,99Dhs' },
      { duration: '12 mois', price: '1399,99Dhs' },
    ],
    features: [
      { text: 'Chaînes francophones', included: true },
      { text: 'Chaînes internationales', included: true },
      { text: 'Films et séries à la demande', included: true },
      { text: 'Guide des programmes électronique', included: true },
      { text: 'Qualité 4K', included: true },
      { text: 'Support technique prioritaire', included: true },
      { text: 'Applications dédiées multi-appareils', included: true },
    ],
  },
];

const PricingTable: React.FC = () => {
  const [selectedDuration, setSelectedDuration] = useState<string>('12 mois');

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-max">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            {['6 mois', '12 mois'].map((duration) => (
              <button
                key={duration}
                onClick={() => setSelectedDuration(duration)}
                className={`px-6 py-2 rounded-md transition-all ${
                  selectedDuration === duration
                    ? 'bg-white shadow-sm text-primary font-medium'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {duration}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => {
            const selectedOption = plan.options.find(
              (option) => option.duration === selectedDuration
            );

            return (
              <div
                key={plan.id}
                className={`card border-2 transition-all ${
                  plan.id === 'intense'
                    ? 'border-secondary relative md:scale-105 shadow-xl'
                    : 'border-transparent hover:border-primary/20'
                }`}
              >
                {plan.id === 'intense' && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-secondary text-white text-sm font-medium px-4 py-1 rounded-full">
                      Plus populaire
                    </span>
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    {plan.description}
                  </p>

                  <p className="mb-6">
                    <span className="text-3xl font-bold">
                      {selectedOption?.price}
                    </span>
                    <span className="text-muted-foreground">
                      {' '}
                      / {selectedOption?.duration}
                    </span>
                  </p>

                  <Link
                    to={`/contact?service=iptv&plan=${plan.id}&duration=${selectedDuration}`}
                    className={`w-full text-center py-3 px-4 rounded-lg font-medium mb-6 block transition-colors ${
                      plan.id === 'intense'
                        ? 'bg-secondary hover:bg-secondary/90 text-white'
                        : 'btn-primary'
                    }`}
                  >
                    Sélectionner ce forfait
                  </Link>

                  <div className="space-y-5">
                    <div className="flex items-center">
                      <span className="w-1/2 text-muted-foreground">
                        Chaînes
                      </span>
                      <span className="w-1/2 font-medium">
                        {plan.channels.toLocaleString()}+
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-1/2 text-muted-foreground">
                        Qualité vidéo
                      </span>
                      <span className="w-1/2 font-medium">
                        {plan.videoQuality}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-1/2 text-muted-foreground">
                        Appareils
                      </span>
                      <span className="w-1/2 font-medium">
                        {plan.devices} simultané{plan.devices > 1 ? 's' : ''}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-1/2 text-muted-foreground">
                        Support
                      </span>
                      <span className="w-1/2 font-medium">{plan.support}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 mt-6 pt-6">
                    <p className="font-medium mb-4">Fonctionnalités incluses</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
                          ) : (
                            <X className="w-5 h-5 text-red-500 mr-2 shrink-0" />
                          )}
                          <span
                            className={
                              feature.included
                                ? ''
                                : 'text-muted-foreground line-through'
                            }
                          >
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10 bg-muted p-4 rounded-lg flex items-start max-w-3xl mx-auto">
        <AlertCircle className="w-6 h-6 text-primary mr-3 shrink-0 mt-1" />
        <div>
          <p className="font-medium">Information importante</p>
          <p className="text-muted-foreground text-sm mt-1">
            Nos abonnements IPTV sont fournis à des fins de divertissement
            personnel uniquement. DigiSouk n'est pas responsable de l'utilisation
            inappropriée des services. Veuillez consulter la législation locale
            concernant l'utilisation des services IPTV.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;