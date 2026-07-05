'use client';

import { FormEvent, useState } from 'react';

const aboutLinks = [
  { label: 'À propos', href: '/about' },
  { label: 'Parcours', href: '/parcours' },
  { label: 'Presse & médias', href: '/presse' },
  { label: 'Contact', href: '/contact' },
];

const resourcesLinks = [
  { label: 'Formations', href: '/formations' },
  { label: 'Livre', href: '/livre' },
  { label: 'Articles', href: '/articles' },
  { label: 'Newsletter', href: '/newsletter' },
  { label: 'Substack', href: '/substack' },
];

const legalLinks = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Politique de confidentialité', href: '/privacy' },
  { label: 'Contact', href: '/contact' },
];

export function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newErrors = { name: '', email: '' };

    if (!formData.email.trim()) {
      newErrors.email = 'Email est requis';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Veuillez entrer une adresse email valide';
    }

    setErrors(newErrors);

    if (newErrors.email) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/footer-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="w-full bg-[#D4C5B0]">
      {/* Top Section: Email Signup + Link Columns */}
      <div className="px-4 md:px-8 py-12 md:py-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column: Email Signup Form */}
          <div className="md:col-span-1">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1A1A] mb-6">
              Restez dans la boucle
            </h3>

            {submitted && (
              <div className="mb-4 p-3 bg-green-100 border border-green-400 rounded-lg">
                <p className="text-green-800 font-medium text-sm">
                  Merci ! Vérifiez votre email.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input (Optional) */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom (optionnel)"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 text-base border-2 border-[#1A1A1A] focus:border-[#1A1A1A] bg-white rounded-lg focus:outline-none transition-colors disabled:opacity-60"
                  aria-label="Name"
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 text-base border-2 rounded-lg focus:outline-none transition-colors ${
                    errors.email
                      ? 'border-red-500 focus:border-red-600 bg-red-50'
                      : 'border-[#1A1A1A] focus:border-[#1A1A1A] bg-white'
                  } disabled:opacity-60`}
                  aria-label="Email Address"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-600 text-xs mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1A1A1A] hover:bg-[#2A2A2A] active:bg-black disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm uppercase py-3 px-4 rounded-lg transition-colors duration-200"
              >
                {isSubmitting ? 'Inscription...' : 'S\'INSCRIRE'}
              </button>

              {/* Disclaimer */}
              <p className="text-xs text-[#1A1A1A] text-center">
                Pas de spam, désabonnement en un clic.
              </p>
            </form>
          </div>

          {/* Right Column: Link Columns */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            {/* About Column */}
            <div>
              <h4 className="text-lg font-serif font-bold text-[#1A1A1A] mb-4 uppercase">
                À PROPOS
              </h4>
              <ul className="space-y-3">
                {aboutLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#1A1A1A] hover:underline transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="text-lg font-serif font-bold text-[#1A1A1A] mb-4 uppercase">
                RESSOURCES
              </h4>
              <ul className="space-y-3">
                {resourcesLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#1A1A1A] hover:underline transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="text-lg font-serif font-bold text-[#1A1A1A] mb-4 uppercase">
                LÉGAL
              </h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#1A1A1A] hover:underline transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Social Links & Copyright */}
      <div className="border-t border-[#C0B5A0] px-4 md:px-8 py-8 md:py-10">
        <div className="max-w-6xl mx-auto">
          {/* Social Media Links */}
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A1A1A] hover:text-[#555] transition-colors duration-200"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2m4.5 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-9 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4m5.5-1h2v5.5a3.5 3.5 0 0 1-3.5 3.5h-5a3.5 3.5 0 0 1-3.5-3.5v-8a3.5 3.5 0 0 1 3.5-3.5h8a.5.5 0 0 0 0-1h-8a4.5 4.5 0 0 0-4.5 4.5v8a4.5 4.5 0 0 0 4.5 4.5h5a4.5 4.5 0 0 0 4.5-4.5V6.5z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A1A1A] hover:text-[#555] transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.492-1.1-1.1s.493-1.1 1.1-1.1c.606 0 1.1.492 1.1 1.1s-.493 1.1-1.1 1.1zM16 16h-1.993v-2.881c0-.881-.312-1.48-1.102-1.48-.601 0-.974.404-1.132.794-.058.143-.072.343-.072.543V16h-2v-6h1.993v.819c.257-.397.757-1.039 1.837-1.039 1.343 0 2.35.877 2.35 2.766V16z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-center text-sm md:text-base text-[#1A1A1A]">
            © 2025 Lena Ben Ahmed. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
