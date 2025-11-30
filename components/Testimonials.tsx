'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Chen',
    role: 'Owner',
    company: 'Chen Construction Co.',
    content: "Harmay has been a game-changer for our business. We've been able to take on 4x more projects without worrying about upfront material costs. The approval process is incredibly fast.",
    avatar: 'MC',
    rating: 5,
  },
  {
    name: 'Sarah Williams',
    role: 'Project Manager',
    company: 'Williams & Associates',
    content: "The peace of mind knowing we can get materials when we need them is invaluable. Our suppliers love getting paid on time, and we've negotiated better rates as a result.",
    avatar: 'SW',
    rating: 5,
  },
  {
    name: 'James Rodriguez',
    role: 'CEO',
    company: 'Rodriguez Builders',
    content: "We grew our revenue by 180% in the first year using Harmay. The platform is intuitive, and their support team is always there when we need them.",
    avatar: 'JR',
    rating: 5,
  },
  {
    name: 'Emily Thompson',
    role: 'Operations Director',
    company: 'Thompson Contracting',
    content: "The analytics dashboard gives us incredible insights into our spending and cash flow. We can make better business decisions with real-time data.",
    avatar: 'ET',
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'Founder',
    company: 'Park Development Group',
    content: "Integration with our suppliers was seamless. Within a week, we were up and running. It's like having a financial partner who understands construction.",
    avatar: 'DP',
    rating: 5,
  },
  {
    name: 'Lisa Anderson',
    role: 'CFO',
    company: 'Anderson Construction',
    content: "The flexible payment terms have improved our cash flow management significantly. We can align payments with our project timelines.",
    avatar: 'LA',
    rating: 5,
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="h-full p-8 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
        {/* Quote Icon */}
        <div className="mb-4">
          <Quote className="w-8 h-8 text-blue-600 opacity-50" />
        </div>

        {/* Stars */}
        <div className="flex space-x-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Content */}
        <p className="text-gray-700 leading-relaxed mb-6">
          "{testimonial.content}"
        </p>

        {/* Author */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-semibold">
            {testimonial.avatar}
          </div>
          <div>
            <div className="font-semibold text-gray-900">{testimonial.name}</div>
            <div className="text-sm text-gray-600">
              {testimonial.role}, {testimonial.company}
            </div>
          </div>
        </div>

        {/* Hover gradient */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={ref} className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-6"
          >
            <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
            <span className="text-sm font-medium text-yellow-700">Testimonials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Trusted by{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              industry leaders
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            See what construction businesses are saying about their experience
            with Harmay.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-white rounded-2xl shadow-lg border border-gray-200"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              5,000+
            </div>
            <div className="text-sm text-gray-600">Active Businesses</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              $2.5B+
            </div>
            <div className="text-sm text-gray-600">Funded Materials</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              99.2%
            </div>
            <div className="text-sm text-gray-600">Approval Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              4.9/5
            </div>
            <div className="text-sm text-gray-600">Customer Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
