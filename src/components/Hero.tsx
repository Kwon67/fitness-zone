'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ContactModal from './ContactModal';
import AnimatedCounter from './AnimatedCounter';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0"
          style={{ y }}
        >
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=90"
            alt="Modern gym facility with professional equipment"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8"
          >
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">5,000+ members worldwide</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tighter"
          >
            Transform<br />Your Body
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Professional training, world-class facilities, and expert guidance to help you achieve your fitness goals.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          >
            <motion.button
              onClick={scrollToPricing}
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,255,255,0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-gray-900 text-base font-bold hover:bg-gray-100 transition-colors duration-200 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              Get Started
            </motion.button>

            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-transparent border-2 border-white text-white text-base font-bold hover:bg-white/10 transition-colors duration-200"
            >
              Book a Tour
            </motion.button>
          </motion.div>

          {/* Stats with Animated Counters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 sm:gap-12 max-w-3xl mx-auto"
          >
            <div>
              <div className="text-4xl sm:text-5xl font-black text-white mb-2">
                <AnimatedCounter end={5000} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm text-white/80 font-medium uppercase tracking-wider">Active Members</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-white mb-2">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm text-white/80 font-medium uppercase tracking-wider">Expert Trainers</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-white mb-2">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <div className="text-xs sm:text-sm text-white/80 font-medium uppercase tracking-wider">Success Rate</div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-white/50 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Book a Tour"
      />
    </>
  );
}
