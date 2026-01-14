'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: "Expert Trainers",
    desc: "Certified professionals with 10+ years experience guiding your transformation journey"
  },
  {
    title: "Modern Equipment",
    desc: "State-of-the-art fitness technology and premium facilities for optimal results"
  },
  {
    title: "Flexible Hours",
    desc: "Open 24/7 to fit your busy schedule - train on your time, your way"
  },
  {
    title: "Results Guaranteed",
    desc: "Proven programs backed by science and thousands of success stories"
  }
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&q=85",
    alt: "Modern gym with professional equipment"
  },
  {
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=85",
    alt: "Personal training session"
  },
  {
    src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1200&q=85",
    alt: "Cardio training area"
  },
  {
    src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1200&q=85",
    alt: "Weights and strength training"
  },
  {
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1200&q=85",
    alt: "Group fitness classes"
  },
  {
    src: "https://images.unsplash.com/photo-1571388208497-71bedc66e932?w=1200&q=85",
    alt: "Functional training zone"
  }
];

export default function Benefits() {
  return (
    <>
      {/* Benefits Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tight">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference that premium facilities and expert guidance make
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white border border-gray-200 p-8 hover:border-gray-900 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl font-black text-gray-900 mb-6">
                  {(i + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Width Gallery Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
              World-Class Facility
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              State-of-the-art equipment and premium amenities designed for your success
            </p>
          </motion.div>
        </div>

        {/* Large Gallery Grid - Full Width */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-2">
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative aspect-[4/3] overflow-hidden group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                loading="lazy"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
