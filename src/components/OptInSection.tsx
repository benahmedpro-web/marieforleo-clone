'use client';
import { FormEvent, useState } from 'react';
import Image from 'next/image';

export function OptInSection() {
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
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validation
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
      // Submit form data to API
      const response = await fetch('/api/optin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ firstName: '', email: '' });
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
              Learn How to Get Anything You Want
            </h2>

            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Get access to <span className="font-semibold">exclusive audio training</span> that will transform how you approach your goals and dreams.
            </p>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">
                  Thank you! Check your email for your free audio training.
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
                  className={`w-full px-5 py-3 md:py-4 text-base md:text-lg border-2 rounded-lg focus:outline-none transition-colors ${
                    errors.firstName
                      ? 'border-red-500 focus:border-red-600 bg-red-50'
                      : 'border-gray-300 focus:border-gray-500 bg-white'
                  } disabled:opacity-60`}
                  aria-label="First Name"
                  aria-invalid={!!errors.firstName}
                  aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                />
                {errors.firstName && (
                  <p id="firstName-error" className="text-red-600 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full px-5 py-3 md:py-4 text-base md:text-lg border-2 rounded-lg focus:outline-none transition-colors ${
                    errors.email
                      ? 'border-red-500 focus:border-red-600 bg-red-50'
                      : 'border-gray-300 focus:border-gray-500 bg-white'
                  } disabled:opacity-60`}
                  aria-label="Email Address"
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
                {isSubmitting ? 'Sending...' : 'Get Instant Access'}
              </button>

              {/* Disclaimer */}
              <p className="text-xs md:text-sm text-gray-600 mt-6 leading-relaxed">
                By entering your information, you agree to receive updates and promotional emails from us. You can unsubscribe at any time. Read our <a href="/terms" className="font-semibold text-gray-900 hover:underline">Terms of Service</a> and <a href="/privacy" className="font-semibold text-gray-900 hover:underline">Privacy Policy</a>.
              </p>
            </form>
          </div>

          {/* Right column: Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Placeholder for actual image - replace with real Marie image */}
              <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/marie-microphone.jpg"
                  alt="Marie with microphone and training materials"
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    // Fallback in case image doesn't exist
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Free Audio Training Badge */}
              <div className="absolute bottom-4 right-4 bg-white shadow-lg rounded-full px-4 md:px-5 py-3 md:py-4">
                <div className="text-center">
                  <p className="text-xs md:text-sm font-bold text-gray-900 uppercase tracking-wide">
                    Free
                  </p>
                  <p className="text-xs md:text-sm font-bold text-[#D4E157] uppercase tracking-wide">
                    Audio Training
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
