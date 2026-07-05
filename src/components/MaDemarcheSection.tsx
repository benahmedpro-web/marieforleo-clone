'use client';

import { FormEvent, useState } from 'react';

export function MaDemarcheSection() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError('Email requis');
      return;
    }
    if (!validateEmail(email)) {
      setError('Veuillez entrer une adresse email valide');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/optin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (err) {
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    {
      number: '01',
      text: "Éveiller les consciences : accompagner entreprises, écoles et institutions à comprendre les enjeux liés aux systèmes de discrimination.",
    },
    {
      number: '02',
      text: "Proposer des outils concrets : former adultes, adolescent·es et enfants à reconnaître et combattre les structures oppressives.",
    },
    {
      number: '03',
      text: "Favoriser le changement : créer des espaces de dialogue pour encourager l'action collective et individuelle.",
    },
  ];

  return (
    <section className="bg-[#1a1a1a] py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Column: Ma Démarche */}
          <div>
            <p
              className="text-xs md:text-sm font-medium text-gray-500 mb-6"
              style={{ letterSpacing: '2px', textTransform: 'uppercase' }}
            >
              Ma démarche
            </p>

            <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed">
              En tant que formatrice spécialisée dans la lutte contre les violences et les inégalités sociales, j'interviens avec une ferme conviction : l'éducation est l'outil le plus puissant pour éradiquer les violences à leur source.
            </p>

            <p className="text-base md:text-lg text-gray-200 mb-10 leading-relaxed">
              Experte des rapports sociaux de domination, diplômée en sciences humaines et sociales, mention égalité, j'ai conçu des formations adaptées à divers publics (entreprises, établissements scolaires, institutions) qui visent à déconstruire les mécanismes des discriminations systémiques et à fournir des outils concrets pour agir.
            </p>

            <ul className="space-y-6">
              {steps.map((step) => (
                <li key={step.number} className="flex gap-4">
                  <span className="font-serif italic text-gray-500 text-lg flex-shrink-0">
                    {step.number}
                  </span>
                  <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                    {step.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Newsletter */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-8 leading-tight">
              Être tenu·e informé·e du prochain projet
            </h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-900/30 border border-green-700 rounded">
                <p className="text-green-300 font-medium">
                  Merci ! Consultez votre email pour confirmer votre inscription.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Votre adresse email"
                value={email}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full px-5 py-4 text-base bg-transparent border rounded-none text-white placeholder-gray-500 focus:outline-none transition-colors disabled:opacity-60 ${
                  error ? 'border-red-500' : 'border-gray-600 focus:border-gray-400'
                }`}
                aria-label="Votre adresse email"
                aria-invalid={!!error}
                aria-describedby={error ? 'demarche-email-error' : undefined}
              />
              {error && (
                <p id="demarche-email-error" className="text-red-400 text-sm mt-2">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 py-4 px-6 bg-[#FBDFDB] hover:bg-[#F5CFC9] disabled:opacity-60 disabled:cursor-not-allowed text-[#1a1a1a] font-bold text-sm uppercase tracking-wide transition-colors duration-200"
              >
                {isSubmitting ? 'Inscription en cours...' : 'Inscrivez-vous ici'}
              </button>

              <p className="text-xs md:text-sm text-gray-500 mt-4 leading-relaxed">
                En vous inscrivant, vous serez tenu·e informé·e en avant-première. Pas de spam. Désabonnement en un clic.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
