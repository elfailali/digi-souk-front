import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { User, Mail, Phone, MessageSquare } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  plan: string;
  duration: string;
  preferredContact: string;
  message: string;
}

interface ContactFormProps {
  prefilledService?: string;
}

/// Define the API URL based on the environment variable
const API_URL = import.meta.env.VITE_API_URL;

const ContactForm: React.FC<ContactFormProps> = ({ prefilledService }) => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    service: prefilledService || searchParams.get("service") || "",
    plan: searchParams.get("plan") || "",
    duration: searchParams.get("duration") || "",
    preferredContact: "email",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Update form data when URL parameters change
    setFormData((prev) => ({
      ...prev,
      service: prefilledService || searchParams.get("service") || prev.service,
      plan: searchParams.get("plan") || prev.plan,
      duration: searchParams.get("duration") || prev.duration,
    }));
  }, [prefilledService, searchParams]);

  const services = [
    { value: "", label: "Sélectionnez un service" },
    { value: "iptv", label: "IPTV" },
    { value: "netflix", label: "Netflix" },
    { value: "disney", label: "Disney+" },
    { value: "spotify", label: "Spotify" },
    { value: "prime", label: "Prime Video" },
    { value: "shahid", label: "Shahid VIP" },
    { value: "logiciels", label: "Logiciels" },
  ];

  const plans = {
    iptv: [
      { value: "", label: "Sélectionnez un forfait" },
      { value: "start", label: "Pack Start" },
      { value: "intense", label: "Pack Intense" },
      { value: "infinity", label: "Pack Infinity" },
    ],
    netflix: [
      { value: "", label: "Sélectionnez un forfait" },
      { value: "basic", label: "Basic" },
      { value: "standard", label: "Standard" },
      { value: "premium", label: "Premium" },
    ],
    disney: [
      { value: "", label: "Sélectionnez un forfait" },
      { value: "standard", label: "Standard" },
      { value: "premium", label: "Premium" },
    ],
    spotify: [
      { value: "", label: "Sélectionnez un forfait" },
      { value: "individual", label: "Individuel" },
      { value: "duo", label: "Duo" },
      { value: "family", label: "Famille" },
    ],
    prime: [
      { value: "", label: "Sélectionnez un forfait" },
      { value: "monthly", label: "Mensuel" },
      { value: "annual", label: "Annuel" },
    ],
    shahid: [
      { value: "", label: "Sélectionnez un forfait" },
      { value: "vip", label: "VIP" },
      { value: "vip-sport", label: "VIP Sport" },
    ],
    logiciels: [
      { value: "", label: "Sélectionnez un logiciel" },
      { value: "office", label: "Microsoft Office" },
      { value: "windows", label: "Windows" },
      { value: "adobe", label: "Adobe Creative Cloud" },
      { value: "antivirus", label: "Antivirus" },
    ],
  };

  const durations = [
    { value: "", label: "Sélectionnez une durée" },
    { value: "1_month", label: "1 mois" },
    { value: "3_months", label: "3 mois" },
    { value: "6_months", label: "6 mois" },
    { value: "12_months", label: "12 mois" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Reset plan if service changes
    if (name === "service") {
      setFormData((prev) => ({
        ...prev,
        plan: "",
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone) {
      setError("Veuillez remplir tous les champs obligatoires.");
      setIsSubmitting(false);
      return;
    }

    // submit the data to the server  https/localhost:5000/api/orders
    fetch(`${API_URL}/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        setIsSubmitting(false);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("Une erreur est survenue lors de l'envoi du formulaire.");
        setIsSubmitting(false);
      });

    // Reset form after 5 seconds
    setTimeout(() => {
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          service: "",
          plan: "",
          duration: "",
          preferredContact: "email",
          message: "",
        });
      }, 5000);
    }, 1500);
  };

  const getAvailablePlans = () => {
    const service = formData.service;
    if (!service || !plans[service as keyof typeof plans]) {
      return [{ value: "", label: "Sélectionnez d'abord un service" }];
    }
    return plans[service as keyof typeof plans];
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      {submitted ? (
        <div className="text-center py-10">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2">Merci pour votre message!</h3>
          <p className="text-muted-foreground mb-6">
            Nous avons bien reçu votre demande et nous vous contacterons très
            prochainement.
          </p>
          <p className="text-sm text-muted-foreground">
            Un email de confirmation a été envoyé à {formData.email}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 className="text-2xl font-bold mb-6">Contactez-nous</h3>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg p-4 mb-6">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nom complet <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="pl-10 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary p-3"
                    placeholder="Votre nom complet"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary p-3"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Téléphone <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="pl-10 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary p-3"
                  placeholder="+33 6 12 34 56 78"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary p-3"
                >
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="plan"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Forfait
                </label>
                <select
                  id="plan"
                  name="plan"
                  value={formData.plan}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary p-3"
                  disabled={!formData.service}
                >
                  {getAvailablePlans().map((plan) => (
                    <option key={plan.value} value={plan.value}>
                      {plan.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="duration"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Durée
                </label>
                <select
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary p-3"
                >
                  {durations.map((duration) => (
                    <option key={duration.value} value={duration.value}>
                      {duration.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Méthode de contact préférée
              </label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="email"
                    checked={formData.preferredContact === "email"}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Email
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="phone"
                    checked={formData.preferredContact === "phone"}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Téléphone
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="whatsapp"
                    checked={formData.preferredContact === "whatsapp"}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  WhatsApp
                </label>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3">
                  <MessageSquare className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="pl-10 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary p-3"
                  placeholder="Comment pouvons-nous vous aider?"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary inline-flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  "Envoyer le message"
                )}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
