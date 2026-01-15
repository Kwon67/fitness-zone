'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import ContactModal from './ContactModal';

const faqs = [
  {
    question: "Can I cancel my membership anytime?",
    answer: "Yes, absolutely! We don't believe in long-term contracts. You can cancel your membership at any time with no cancellation fees. We'll process your cancellation immediately and you'll have access until the end of your billing period."
  },
  {
    question: "Do you offer personal training?",
    answer: "All of our Pro and Premium plans include personal training sessions. Pro members get 5 sessions per month, while Premium members enjoy unlimited sessions with our certified trainers. Basic members can also book sessions at an additional cost."
  },
  {
    question: "What are your operating hours?",
    answer: "We're open 24/7, 365 days a year! Our facility is accessible around the clock with your membership card, so you can work out whenever fits your schedule best. Staff support is available from 6 AM to 10 PM daily."
  },
  {
    question: "Is there parking available?",
    answer: "Yes, we offer free parking for all members. We have a large parking lot with over 100 spaces, including dedicated spots for disabled members. The parking area is well-lit and monitored by security cameras 24/7."
  },
  {
    question: "Do you have group classes?",
    answer: "Yes! Pro and Premium members have access to unlimited group classes including yoga, spin, HIIT, pilates, boxing, and more. We offer over 50 classes per week at various times to fit any schedule. Check our mobile app for the full schedule and to reserve your spot."
  },
  {
    question: "What equipment do you have?",
    answer: "We feature state-of-the-art equipment from top brands including Life Fitness, Technogym, and Hammer Strength. Our facility includes cardio machines, free weights, resistance machines, functional training zones, a dedicated stretching area, and specialized equipment for Olympic lifts."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our gym and services
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-2 border-gray-200 overflow-hidden hover:border-gray-900 transition-colors duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-bold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <span className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-gray-900" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-900" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors duration-200"
          >
            Contact Us
          </button>
        </motion.div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Contact Us"
      />
    </section>
  );
}
