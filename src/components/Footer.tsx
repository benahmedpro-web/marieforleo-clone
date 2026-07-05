'use client';

import { FormEvent, useState } from 'react';

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'MarieTV', href: '/marietv' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'Success Stories', href: '/success-stories' },
  { label: 'New Here?', href: '/new-here' },
  { label: 'Free Tools', href: '/free-tools' },
  { label: 'Press & Media', href: '/press' },
  { label: 'Giving Back', href: '/giving-back' },
  { label: 'Jobs', href: '/jobs' },
  { label: 'How We Roll', href: '/how-we-roll' },
];

const shopLinks = [
  { label: 'B-School', href: '/shop/b-school' },
  { label: 'The Copy Cure', href: '/shop/copy-cure' },
  { label: 'Time Genius', href: '/shop/time-genius' },
  { label: 'More', href: '/shop' },
];

const legalLinks = [
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
];

export function Footer() {
  const [formData, setFormData] = useState({ firstName: '', email: '' });
  const [errors, setErrors] = useState({ firstName: '', email: '' });
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

    const newErrors = { firstName: '', email: '' };

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);

    if (newErrors.firstName || newErrors.email) {
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
        setFormData({ firstName: '', email: '' });
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
              Become an MF Insider
            </h3>

            {submitted && (
              <div className="mb-4 p-3 bg-green-100 border border-green-400 rounded-lg">
                <p className="text-green-800 font-medium text-sm">
                  Thank you! Check your email.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Name Input */}
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 text-base border-2 rounded-lg focus:outline-none transition-colors ${
                    errors.firstName
                      ? 'border-red-500 focus:border-red-600 bg-red-50'
                      : 'border-[#1A1A1A] focus:border-[#1A1A1A] bg-white'
                  } disabled:opacity-60`}
                  aria-label="First Name"
                  aria-invalid={!!errors.firstName}
                  aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                />
                {errors.firstName && (
                  <p id="firstName-error" className="text-red-600 text-xs mt-1">
                    {errors.firstName}
                  </p>
                )}
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
                {isSubmitting ? 'Sending...' : "Let's Do It"}
              </button>
            </form>
          </div>

          {/* Right Column: Link Columns */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            {/* Company Column */}
            <div>
              <h4 className="text-lg font-serif font-bold text-[#1A1A1A] mb-4">
                Company
              </h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
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

            {/* Shop Column */}
            <div>
              <h4 className="text-lg font-serif font-bold text-[#1A1A1A] mb-4">
                Shop
              </h4>
              <ul className="space-y-3">
                {shopLinks.map((link) => (
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
              <h4 className="text-lg font-serif font-bold text-[#1A1A1A] mb-4">
                Legal
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

      {/* Bottom Section: Copyright */}
      <div className="border-t border-[#C0B5A0] px-4 md:px-8 py-6 md:py-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm md:text-base text-[#1A1A1A]">
            © 2026 Marie Forleo International
          </p>
        </div>
      </div>
    </footer>
  );
}
