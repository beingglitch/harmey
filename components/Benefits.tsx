'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    title: 'Increase your project capacity',
    description: 'Take on more projects simultaneously without worrying about cash flow. Harmay provides the working capital you need to purchase materials upfront.',
    stat: '3x',
    statLabel: 'More projects per year',
    image: '📈',
  },
  {
    title: 'Improve cash flow management',
    description: 'Keep your cash reserves intact for payroll, equipment, and emergencies. Pay for materials on flexible terms that align with your payment schedules.',
    stat: '45%',
    statLabel: 'Better cash position',
    image: '💰',
  },
  {
    title: 'Build stronger supplier relationships',
    description: 'Pay suppliers on time, every time. Strengthen your relationships and negotiate better rates with reliable payment through Harmay.',
    stat: '98%',
    statLabel: 'On-time payments',
    image: '🤝',
  },
];

export default function Benefits() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section header
      gsap.from('.benefits-header', {
        scrollTrigger: {
          trigger: '.benefits-header',
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Animate benefit items
      document.querySelectorAll('.benefit-item').forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
          },
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });
      });

      // Animate CTA card
      gsap.from('.benefits-cta', {
        scrollTrigger: {
          trigger: '.benefits-cta',
          start: 'top 85%',
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="benefits" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background parallax elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="benefits-header text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4"
          >
            Benefits
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Built for construction{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              professionals
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We understand the unique challenges of the construction industry. Harmay is designed to help you overcome them.
          </p>
        </div>

        <div className="space-y-32">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`benefit-item grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <motion.div
                className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <div className="relative group">
                  <motion.div
                    className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-12 flex items-center justify-center text-9xl h-96 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <motion.span
                      animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      {benefit.image}
                    </motion.span>
                  </motion.div>

                  {/* Floating decorative elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl opacity-60 blur-xl"
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl opacity-60 blur-xl"
                    animate={{
                      y: [0, 15, 0],
                      rotate: [0, -10, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </div>
              </motion.div>

              <motion.div
                className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
                  Benefit {index + 1}
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {benefit.description}
                </p>
                <motion.div
                  className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 border border-slate-200 inline-block shadow-lg"
                  whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
                >
                  <div className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1">
                    {benefit.stat}
                  </div>
                  <div className="text-sm text-slate-600">{benefit.statLabel}</div>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="benefits-cta mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 sm:p-16 text-white overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            {/* Floating gradient orbs */}
            <motion.div
              className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <div className="relative z-10 text-center">
              <motion.h3
                className="text-3xl sm:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Ready to transform your business?
              </motion.h3>
              <motion.p
                className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Join hundreds of construction businesses already using Harmay to grow faster and manage cash flow better.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <motion.button
                  className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 255, 255, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get started now
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 5 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </motion.button>
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule a demo
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
