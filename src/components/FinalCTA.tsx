'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ContactModal from './ContactModal';

export default function FinalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=1920&q=90"
            alt="Fitness transformation journey"
            fill
            className="object-cover"
            loading="lazy"
            quality={90}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20"
        >
          {/* Main Headline */}
          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-8 leading-tight tracking-tighter">
            Start Your<br />Transformation Today
          </h2>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join 5,000+ members achieving their fitness goals. Try us risk-free for 7 days.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={scrollToPricing}
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,255,255,0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-gray-900 text-base font-bold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started Now
            </motion.button>

            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-transparent border-2 border-white text-white text-base font-bold hover:bg-white/10 transition-colors duration-200"
            >
              Schedule a Tour
            </motion.button>
          </div>
        </motion.div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Schedule a Tour"
      />
    </>
  );
}
