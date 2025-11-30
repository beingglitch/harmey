'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate headline words
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.1,
      });

      // Animate subtitle
      gsap.from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });

      // Animate CTAs
      gsap.from('.hero-cta', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
      });

      // Animate badges
      gsap.from('.hero-badge', {
        x: -20,
        opacity: 0,
        duration: 0.6,
        delay: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      });

      // Animate stats card
      gsap.from('.hero-stats', {
        y: 80,
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: 'power3.out',
      });

      // Animate background orbs
      gsap.to('.orb-1', {
        x: '20%',
        y: '-20%',
        rotation: 360,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.orb-2', {
        x: '-20%',
        y: '20%',
        rotation: -360,
        duration: 25,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
    >
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="orb-1 absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-indigo-400/30 to-purple-400/30 rounded-full blur-3xl"></div>
        <div className="orb-2 absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center"
      >
        <div className="mb-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-indigo-200 shadow-sm"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-slate-700">Now serving 500+ construction businesses</span>
          </motion.div>
        </div>

        <div className="overflow-hidden">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            <div className="hero-title inline-block">Help your construction</div>
            <br />
            <div className="hero-title inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              business make more money
            </div>
          </h1>
        </div>

        <p className="hero-subtitle text-xl sm:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Harmay provides instant lending support for construction materials when your customers purchase from local providers. Say goodbye to cash flow constraints.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <motion.button
            className="hero-cta group relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Start growing today
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>

          <motion.button
            className="hero-cta text-slate-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-slate-300 bg-white/50 backdrop-blur-sm"
            whileHover={{
              scale: 1.05,
              borderColor: '#6366f1',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact sales
          </motion.button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 mb-16">
          {[
            { icon: '⚡', text: 'Instant approval' },
            { icon: '💳', text: 'Flexible terms' },
            { icon: '🔒', text: 'No hidden fees' },
          ].map((badge, index) => (
            <motion.div
              key={index}
              className="hero-badge flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200"
              whileHover={{ y: -2, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
            >
              <span className="text-xl">{badge.icon}</span>
              <span className="text-sm font-medium text-slate-700">{badge.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Floating stats card */}
        <motion.div
          className="hero-stats relative mx-auto max-w-4xl"
          whileHover={{ y: -10 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-slate-200/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { value: '$10M+', label: 'Funded to date', color: 'text-indigo-600', delay: 0 },
                { value: '500+', label: 'Construction businesses', color: 'text-purple-600', delay: 0.1 },
                { value: '24hrs', label: 'Average approval time', color: 'text-blue-600', delay: 0.2 },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: stat.delay, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                  {index < 2 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Floating elements around the card */}
          <motion.div
            className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl opacity-80 blur-xl"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl opacity-80 blur-xl"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-slate-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
