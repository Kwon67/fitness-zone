'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ContactModal from './ContactModal';

export default function EquipmentShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative h-[70vh] lg:h-[90vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=90"
            alt="State-of-the-art gym equipment"
            fill
            className="object-cover"
            loading="lazy"
            quality={90}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-20 sm:pt-0 sm:pb-0"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-6 sm:mb-8 leading-tight tracking-tighter">
              Premium Equipment.<br />Zero Compromise.
            </h2>
            <p className="text-xl sm:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto">
              Industry-leading brands and cutting-edge technology for optimal performance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 sm:px-10 py-4 sm:py-5 bg-white text-gray-900 text-base sm:text-base font-bold hover:bg-gray-100 transition-colors duration-200"
              >
                Tour Our Facility
              </motion.button>
              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 sm:px-10 py-4 sm:py-5 bg-transparent border-2 border-white text-white text-base sm:text-base font-bold hover:bg-white/10 transition-colors duration-200"
              >
                View Equipment List
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Tour Our Facility"
      />
    </>
  );
}
