'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Zap,
  Shield,
  BarChart3,
  Clock,
  Users,
  CreditCard,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant Approvals',
    description: 'Get approved in minutes, not days. Our AI-powered system evaluates your application instantly.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Secure & Compliant',
    description: 'Bank-level security and full compliance with industry standards. Your data is always protected.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Track your spending, approvals, and business growth with powerful analytics dashboards.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Clock,
    title: 'Flexible Terms',
    description: 'Choose payment terms that work for your business. From 30 to 90 days, you decide.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Users,
    title: 'Team Management',
    description: 'Add your team members and control their spending limits with granular permissions.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: CreditCard,
    title: 'Easy Integration',
    description: 'Integrate with your favorite material suppliers in minutes. No complex setup required.',
    color: 'from-rose-500 to-red-500',
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full p-8 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
        {/* Icon */}
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <feature.icon className="w-6 h-6 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {feature.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {feature.description}
        </p>

        {/* Hover effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      </div>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={ref} className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full mb-6"
          >
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Features</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Everything you need to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              grow faster
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Powerful features designed specifically for construction businesses.
            Accept more projects and grow your revenue without worrying about
            cash flow.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl">
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Ready to transform your business?
              </h3>
              <p className="text-blue-100">
                Join thousands of construction businesses already using Harmay
              </p>
            </div>
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <span>Get Started Free</span>
              <TrendingUp className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
