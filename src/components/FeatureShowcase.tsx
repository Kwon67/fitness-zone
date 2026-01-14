'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FeatureShowcase() {
  const scrollToTestimonials = () => {
    const testimonialsSection = document.getElementById('testimonials');
    if (testimonialsSection) {
      testimonialsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative h-[80vh] lg:h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=90"
          alt="Personal training session in modern gym"
          fill
          className="object-cover"
          loading="lazy"
          quality={90}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
              Train With<br />The Best
            </h2>
            <p className="text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed">
              Our certified trainers bring over 10 years of experience to help you reach your peak performance.
            </p>
            <motion.button
              onClick={scrollToTestimonials}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-gray-900 text-base font-bold hover:bg-gray-100 transition-colors duration-200"
            >
              Meet Our Members
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
