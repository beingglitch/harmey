'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import Link from 'next/link';
import Image from 'next/image';

import { HEROIMAGE } from "@/app/assets";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.75]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.1,
      });

      gsap.from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });

      gsap.from('.hero-cta', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
      });

      gsap.from('.hero-badge', {
        x: -20,
        opacity: 0,
        duration: 0.6,
        delay: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      });

      gsap.from('.hero-stats', {
        y: 80,
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: 'power3.out',
      });

      gsap.from('.hero-image', {
        x: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.4,
        ease: 'power3.out',
      });

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
      className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="orb-1 absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-linear-to-br from-indigo-400/30 to-purple-400/30 rounded-full blur-3xl"></div>
        <div className="orb-2 absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-linear-to-tr from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative w-full"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-indigo-200 shadow-sm"
              >
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-slate-700">Powering construction business with instant credit</span>
              </motion.div>

              {/* Title */}
              <div className="overflow-hidden">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight">
                  <div className="hero-title">Smart Lending &</div>
                  <div className="hero-title">Inventory Platform for</div>
                  <div className="hero-title text-secondary">
                    Construction Commerce
                  </div>
                </h1>
              </div>

              {/* Subtitle */}
              <p className="hero-subtitle text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
                Customers get instant credit to buy materials. Shops get working capital to stock inventory. One platform to manage, scale, and grow your construction business.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <motion.button
                    className="hero-cta group relative bg-primary text-white px-8 py-4 rounded-sm text-lg font-semibold overflow-hidden shadow-lg w-full sm:w-auto"
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Contact Us
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
                  </motion.button>
                </Link>

                <motion.button
                  className="hero-cta text-slate-700 px-8 py-4 rounded-sm text-lg font-semibold border-2 border-slate-300 bg-white/50 backdrop-blur-sm w-full sm:w-auto"
                  whileHover={{
                    scale: 1.05,
                    borderColor: '#0360fc',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Watch Demo
                </motion.button>
              </div>

            </div>

            {/* Right Image */}
            <div className="hero-image lg:absolute -right-12 bottom-12">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src={HEROIMAGE} 
                  alt="Harmey Platform Dashboard" 
                  className="w-full h-auto max-w-4xl ml-auto"
                  priority
                />
              </motion.div>
            </div>
          </div>

        </div>
      </motion.div>

      {/* Scroll Indicator */}
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