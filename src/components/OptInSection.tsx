'use client';
import { FormEvent, useState } from 'react';
import Image from 'next/image';

export function OptInSection() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({ email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (name === 'email') {
      setErrors(prev => ({ ...prev, email: '' }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validation - only email is required
    const newErrors = { email: '' };

    if (!formData.email.trim()) {
      newErrors.email = 'Email requis';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Veuillez entrer une adresse email valide';
    }

    setErrors(newErrors);

    if (newErrors.email) {
      return;
    }

    setIsSubmitting(true);
    try {
      // Submit form data to API
      const response = await fetch('/api/optin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '' });
        // Reset submitted state after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-[#E8DDD0] py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left column: Form */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4 leading-tight">
              Restez dans la boucle
            </h2>

            <p className="text-lg md:text-xl text-gray-700 mb-8">
              En vous inscrivant, vous recevez <span className="font-semibold">mes réflexions sur le genre</span>, mes prochaines formations et mes publications, en français.
            </p>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">
                  Merci ! Consultez votre email pour confirmer votre inscription.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input (Optional) */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Votre prénom (optionnel)"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-5 py-3 md:py-4 text-base md:text-lg border-2 border-gray-300 focus:border-gray-500 bg-white rounded-lg focus:outline-none transition-colors disabled:opacity-60"
                  aria-label="Votre prénom"
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Votre adresse email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full px-5 py-3 md:py-4 text-base md:text-lg border-2 rounded-lg focus:outline-none transition-colors ${
                    errors.email
                      ? 'border-red-500 focus:border-red-600 bg-red-50'
                      : 'border-gray-300 focus:border-gray-500 bg-white'
                  } disabled:opacity-60`}
                  aria-label="Votre adresse email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-600 text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#D4E157] hover:bg-[#C0CA33] active:bg-[#AFB32E] disabled:opacity-60 disabled:cursor-not-allowed text-gray-900 font-bold text-base uppercase py-4 px-6 rounded-full transition-colors duration-200 mt-2"
              >
                {isSubmitting ? 'Inscription en cours...' : 'S\'INSCRIRE'}
              </button>

              {/* Disclaimer */}
              <p className="text-xs md:text-sm text-gray-600 mt-6 leading-relaxed">
                Pas de spam, désabonnement en un clic.
              </p>
            </form>
          </div>

          {/* Right column: Image - Lena's photo */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Placeholder for Lena's photo */}
              <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/lena-profile.jpg"
                  alt="Lena Ben Ahmed"
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    // Fallback in case image doesn't exist
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Newsletter Badge */}
              <div className="absolute bottom-4 right-4 bg-white shadow-lg rounded-full px-4 md:px-5 py-3 md:py-4">
                <div className="text-center">
                  <p className="text-xs md:text-sm font-bold text-gray-900 uppercase tracking-wide">
                    Lettres
                  </p>
                  <p className="text-xs md:text-sm font-bold text-[#D4E157] uppercase tracking-wide">
                    Hebdomadaires
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
