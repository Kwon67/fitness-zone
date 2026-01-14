'use client';

import { useState, useEffect } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function ContactModal({ isOpen, onClose, title = "Get Started" }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    console.log('Form submitted:', formData);

    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);

    // Show success (parent will handle this)
    onClose();

    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });

    // Trigger success toast
    window.dispatchEvent(new CustomEvent('showToast', {
      detail: { message: 'Thanks! We\'ll contact you within 24 hours.' }
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white w-full max-w-lg max-h-[90vh] my-auto overflow-y-auto animate-[slideUp_0.3s_ease-out]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors z-10 bg-white rounded-full p-1"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-6 sm:p-8 pt-12 sm:pt-8">
          <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">{title}</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Fill out the form and we'll get back to you within 24 hours.</p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block text-xs sm:text-sm font-bold text-gray-900 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 focus:border-gray-900 focus:outline-none transition-colors text-sm sm:text-base"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-gray-900 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 focus:border-gray-900 focus:outline-none transition-colors text-sm sm:text-base"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs sm:text-sm font-bold text-gray-900 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 focus:border-gray-900 focus:outline-none transition-colors text-sm sm:text-base"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-gray-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 focus:border-gray-900 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                placeholder="Tell us about your fitness goals..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 sm:py-4 bg-gray-900 text-white text-sm sm:text-base font-bold hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @supports (-webkit-overflow-scrolling: touch) {
          .overflow-y-auto {
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </div>
  );
}
