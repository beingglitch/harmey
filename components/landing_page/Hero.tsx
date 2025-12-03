'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import Link from 'next/link';
import Image from 'next/image';

import { HEROIMAGE } from '@/app/assets';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        y: 80,
        opacity: 0,
        duration: 0.9,
        ease: 'power4.out',
        stagger: 0.08,
      });

      gsap.from('.hero-subtitle', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        delay: 0.2,
        ease: 'power3.out',
      });

      gsap.from('.hero-cta', {
        y: 24,
        opacity: 0,
        duration: 0.7,
        delay: 0.4,
        stagger: 0.08,
        ease: 'power2.out',
      });

      gsap.from('.hero-badge', {
        x: -20,
        opacity: 0,
        duration: 0.6,
        delay: 0.6,
        ease: 'back.out(1.7)',
      });

      gsap.from('.hero-stats', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        delay: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.hero-image', {
        x: 80,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
      });

      gsap.to('.orb-1', {
        x: '10%',
        y: '-10%',
        duration: 24,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.orb-2', {
        x: '-10%',
        y: '10%',
        duration: 28,
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
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="orb-1 absolute -top-1/3 -right-1/4 w-[520px] h-[520px] bg-primary/10 rounded-full blur-3xl" />
        <div className="orb-2 absolute -bottom-1/4 -left-1/4 w-[520px] h-[520px] bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] bg-size-[28px_28px] opacity-60" />
      </div>

      <motion.div style={{ y, opacity }} className="relative w-full">
        <div className="max-w- mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-12 items-center relative">
            {/* Left Content */}
            <div className="space-y-8 lg:pr-20 2xl:pr-48">
              {/* Badge */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 bg-black/80 backdrop-blur-sm rounded-full border border-slate-800 shadow-sm"
              >
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                <span className="text-xs lg:text-sm font-medium text-slate-700">
                  Powering construction businesses with instant credit
                </span>
              </motion.div>

              {/* Title */}
              <div className="overflow-hidden">
                <h1 className="text-4xl xl:text-5xl 2xl:text-[3.8rem] font-bold text-slate-100 leading-tight">
                  <div className="hero-title">Smart Lending &</div>
                  <div className="hero-title">Inventory Platform for</div>
                  <div className="hero-title">
                    Construction Commerce
                  </div>
                </h1>
              </div>

              {/* Subtitle */}
              <p className="hero-subtitle text-base sm:text-lg lg:text-xl text-slate-100 leading-relaxed max-w-xl">
                Customers get instant credit to buy materials. Shops get working capital to stock
                inventory. One platform to manage, scale, and grow your construction business.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 hero-cta">
                <Link href="/signup">
                  <motion.button
                    className="w-full sm:w-auto bg-primary text-white px-7 py-3 rounded-sm text-sm sm:text-base font-semibold shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    Get started
                  </motion.button>
                </Link>

                <motion.button
                  className="w-full sm:w-auto text-slate-800 px-7 py-3 rounded-sm text-sm sm:text-base font-semibold border border-slate-200 bg-white backdrop-blur-sm hover:border-primary hover:text-primary"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Watch demo
                </motion.button>
              </div>

              {/* Stats strip */}
              <div className="hero-stats grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200 mt-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center text-xs">
                    ⚡
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-100">60 sec</div>
                    <div className="text-xs text-slate-500">Credit approval</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center text-xs">
                    🏗️
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-100">500+</div>
                    <div className="text-xs text-slate-500">Supplier network</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center text-xs">
                    📊
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-100">120 days</div>
                    <div className="text-xs text-slate-500">Flexible terms</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image (absolute on large screens, normal on mobile) */}
?              <motion.div
                className="hero-image max-w-2xl mx-auto lg:max-w-none lg:absolute -right-12 -bottom-12 lg:w-[620px] 2xl:w-[880px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="">
                  <Image
                    src={HEROIMAGE}
                    alt="Harmey Platform Dashboard"
                    className="w-full h-auto"
                    priority
                  />
                </div>

                {/* subtle glow behind the card */}
                <div className="absolute -z-10 inset-4 rounded-3xl bg-primary/10 blur-3xl" />
              </motion.div>
            </div>
          </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border border-slate-300 rounded-full flex justify-center pt-2 bg-white backdrop-blur-sm"
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-black rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
