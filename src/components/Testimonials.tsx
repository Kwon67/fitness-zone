'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    review: "Lost 30lbs in 3 months. The trainers are incredibly knowledgeable and the community is supportive.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    rating: 5
  },
  {
    name: "Mike Chen",
    role: "Software Engineer",
    review: "Best investment I've made. The equipment is top-notch and the 24/7 access fits my busy schedule perfectly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    rating: 5
  },
  {
    name: "Emma Davis",
    role: "Entrepreneur",
    review: "Transformed my life completely. The nutrition plan and personal training delivered results I never thought possible.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
            Member Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from real people
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white border border-gray-200 p-10 hover:border-gray-900 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-24 h-24 mb-6 mx-auto rounded-full overflow-hidden border-4 border-gray-900 shadow-lg">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name} - ${testimonial.role}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="96px"
                />
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <blockquote className="text-gray-900 leading-relaxed mb-6 text-lg text-center">
                "{testimonial.review}"
              </blockquote>

              {/* Author Info */}
              <div className="pt-6 border-t border-gray-200 text-center">
                <div className="font-bold text-gray-900 mb-1">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  {testimonial.role}
                </div>

                {/* Verified Badge */}
                <div className="inline-flex items-center gap-1.5 text-emerald-600 text-xs font-semibold bg-emerald-50 px-3 py-1.5 rounded-full">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Member</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto pt-12 border-t border-gray-200"
        >
          {[
            { value: "4.9/5", label: "Average Rating" },
            { value: "2,500+", label: "Happy Members" },
            { value: "98%", label: "Would Recommend" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl font-black text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
