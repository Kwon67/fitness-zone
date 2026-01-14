'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ContactModal from './ContactModal';

const plans = [
  {
    name: "Basic",
    price: "$29",
    period: "/month",
    features: [
      "Access to gym facilities",
      "Basic equipment usage",
      "Locker room access",
      "Mobile app access",
      "Monthly fitness assessment"
    ],
    popular: false
  },
  {
    name: "Pro",
    price: "$59",
    period: "/month",
    features: [
      "All Basic features",
      "5 personal trainer sessions",
      "Custom nutrition plan",
      "Unlimited group classes",
      "Priority support",
      "Free guest passes"
    ],
    popular: true
  },
  {
    name: "Premium",
    price: "$99",
    period: "/month",
    features: [
      "All Pro features",
      "Unlimited trainer sessions",
      "Premium spa access",
      "Priority booking",
      "24/7 concierge support",
      "Supplement discounts",
      "Private training area"
    ],
    popular: false
  }
];

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="pricing" className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6 tracking-tight">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your goals. All plans include our 7-day money-back guarantee.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`relative border-2 p-10 ${
                  plan.popular
                    ? 'border-gray-900 bg-gray-900 text-white'
                    : 'border-gray-200 bg-white hover:border-gray-900 transition-colors duration-200'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-8">
                    <div className="bg-emerald-600 text-white px-4 py-1 text-xs font-bold uppercase tracking-wider">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Name */}
                <div className="mb-8">
                  <h3 className={`text-2xl font-bold mb-4 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-1">
                    <span className={`text-6xl font-black ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg ${plan.popular ? 'text-gray-400' : 'text-gray-600'}`}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-emerald-400' : 'text-gray-900'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  onClick={() => handlePlanSelect(plan.name)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 font-semibold transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-white text-gray-900 hover:bg-gray-100'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>No contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Change plans easily</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Get Started with ${selectedPlan}`}
      />
    </>
  );
}
