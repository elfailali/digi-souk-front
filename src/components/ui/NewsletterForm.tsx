import React, { useState } from 'react';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validation simple de l'email
    if (email && email.includes('@') && email.includes('.')) {
      console.log('Email soumis:', email);
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div>
      {submitted ? (
        <div className="bg-accent/20 text-white p-3 rounded-lg text-center">
          Merci pour votre inscription!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              className="px-4 py-2 rounded-lg flex-grow text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <button
              type="submit"
              className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg transition-colors"
            >
              S'inscrire
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default NewsletterForm;