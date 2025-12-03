'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    title: 'Scale Your Business 3x Faster',
    description: 'Take on multiple projects simultaneously without cash flow constraints. Instant credit for customers means more sales, while working capital for inventory keeps your shop fully stocked. Close deals faster and grow revenue exponentially.',
    stat: '3x',
    statLabel: 'Average revenue growth',
    secondaryStat: '₹50L+',
    secondaryLabel: 'Average credit limit',
    image: '📈',
    highlights: ['More concurrent projects', 'Higher customer conversion', 'Faster deal closures'],
  },
  {
    title: 'Eliminate Cash Flow Bottlenecks',
    description: 'Stop choosing between paying suppliers and meeting payroll. Our flexible 30-120 day payment terms align with your project cycles. Keep cash reserves for emergencies, equipment upgrades, and business expansion opportunities.',
    stat: '45%',
    statLabel: 'Improved cash position',
    secondaryStat: '120 days',
    secondaryLabel: 'Flexible payment terms',
    image: '💰',
    highlights: ['Preserve working capital', 'Predictable cash flow', 'No more payment delays'],
  },
  {
    title: 'Build Unbreakable Supplier Trust',
    description: 'Become a preferred customer with guaranteed on-time payments. Access better pricing, priority delivery, and exclusive deals. Our automated payment system ensures you never miss a deadline, strengthening your supply chain relationships.',
    stat: '98.5%',
    statLabel: 'On-time payment rate',
    secondaryStat: '500+',
    secondaryLabel: 'Verified suppliers',
    image: '🤝',
    highlights: ['Better pricing power', 'Priority fulfillment', 'Stronger partnerships'],
  },
  {
    title: 'Reduce Operational Complexity',
    description: 'Replace manual processes with intelligent automation. AI-powered inventory alerts prevent stockouts, automated invoicing saves hours weekly, and real-time dashboards give you complete business visibility. Focus on growth, not admin work.',
    stat: '10hrs',
    statLabel: 'Saved per week',
    secondaryStat: '99.2%',
    secondaryLabel: 'System accuracy',
    image: '⚡',
    highlights: ['Automated operations', 'Smart alerts & insights', 'Zero paperwork'],
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
        className="absolute top-40 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-40 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="benefits-header text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4"
          >
            🎯 Real Business Impact
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Built for Construction{' '}
            <span className="text-primary">
              Professionals
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real results from real construction businesses. See how Harmey transforms operations, accelerates growth, and maximizes profitability.
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
                    className="bg-linear-to-br from-primary/5 to-secondary/5 rounded-3xl p-12 flex items-center justify-center text-9xl h-96 overflow-hidden border border-slate-100"
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
                    className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-sm opacity-60 blur-xl"
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
                    className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary/20 rounded-2xl opacity-60 blur-xl"
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
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  Benefit {index + 1}
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Highlights */}
                <div className="mb-6 space-y-2">
                  {benefit.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700">
                      <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="bg-linear-to-br from-white to-slate-50 rounded-sm p-5 border border-slate-200 shadow-lg"
                    whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
                  >
                    <div className="text-4xl font-bold text-primary mb-1">
                      {benefit.stat}
                    </div>
                    <div className="text-xs text-slate-600 font-medium">{benefit.statLabel}</div>
                  </motion.div>
                  <motion.div
                    className="bg-linear-to-br from-white to-slate-50 rounded-sm p-5 border border-slate-200 shadow-lg"
                    whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
                  >
                    <div className="text-4xl font-bold text-secondary mb-1">
                      {benefit.secondaryStat}
                    </div>
                    <div className="text-xs text-slate-600 font-medium">{benefit.secondaryLabel}</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="bg-linear-to-br from-primary/5 to-secondary/5 rounded-md p-12 border border-slate-200">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Join 500+ construction shops already growing with Harmey. Get started in minutes with zero setup fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-primary text-white rounded-sm font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Free
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-white text-slate-700 rounded-sm font-semibold border-2 border-slate-200 hover:border-primary transition-colors inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}