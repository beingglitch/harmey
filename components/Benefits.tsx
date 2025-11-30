'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const benefits = [
  {
    title: 'Accept More Projects',
    description: "Don't let cash flow limitations stop you from growing. With instant access to materials financing, you can take on more projects simultaneously.",
    stats: [
      { label: 'Average project increase', value: '3x' },
      { label: 'Revenue growth', value: '150%' },
    ],
    image: 'gradient-1',
  },
  {
    title: 'Get Paid Faster',
    description: 'We pay your material suppliers directly, so you can focus on completing projects. Your customers pay us, and you get your money on time.',
    stats: [
      { label: 'Average payment time', value: '24hrs' },
      { label: 'Customer satisfaction', value: '98%' },
    ],
    image: 'gradient-2',
  },
  {
    title: 'Build Better Relationships',
    description: 'Strengthen partnerships with material suppliers by always paying on time. Get better prices and priority service.',
    stats: [
      { label: 'Supplier partnerships', value: '500+' },
      { label: 'On-time payments', value: '99.8%' },
    ],
    image: 'gradient-3',
  },
];

function BenefitCard({ benefit, index }: { benefit: typeof benefits[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isEven = index % 2 === 0;

  const gradients = {
    'gradient-1': 'from-blue-400 via-purple-400 to-pink-400',
    'gradient-2': 'from-green-400 via-cyan-400 to-blue-400',
    'gradient-3': 'from-orange-400 via-rose-400 to-purple-400',
  };

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-20 md:mb-32 ${
        !isEven ? 'lg:grid-flow-col-dense' : ''
      }`}
    >
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={isEven ? '' : 'lg:col-start-2'}
      >
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
          <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Benefit {index + 1}
          </span>
        </div>

        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {benefit.title}
        </h3>

        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
          {benefit.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {benefit.stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <button className="group inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-200">
          <span>Learn more</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>

      {/* Visual */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}
      >
        <div className="relative">
          <div className={`aspect-square rounded-2xl bg-gradient-to-br ${gradients[benefit.image as keyof typeof gradients]} p-1`}>
            <div className="w-full h-full rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center p-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <div className="text-gray-600 font-medium">
                  Visual representation
                </div>
              </div>
            </div>
          </div>

          {/* Floating element */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-xl shadow-xl p-4 hidden md:block"
          >
            <div className="text-xs text-gray-500 mb-1">Success Rate</div>
            <div className="text-2xl font-bold text-gray-900">99%</div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="benefits" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={ref} className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Why construction businesses{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              choose Harmay
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We understand the unique challenges of running a construction business.
            Here's how we help you overcome them.
          </motion.p>
        </div>

        {/* Benefits */}
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} benefit={benefit} index={index} />
        ))}
      </div>
    </section>
  );
}
