'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Logo } from '@/components/landing_page/Logo';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Instant Credit Approval',
    description:
      'Get credit decisions in under 60 seconds. AI-powered risk assessment enables customers to purchase materials immediately without waiting.',
    metric: '60 sec',
    metricLabel: 'approval time',
    category: 'Credit & Cash Flow',
    href: '#features',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Flexible Repayment Plans',
    description:
      'Offer 30, 60, 90, or 120-day cycles with EMIs aligned to project timelines and cash flow.',
    metric: '120 days',
    metricLabel: 'max tenure',
    category: 'Credit & Cash Flow',
    href: '#features',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2z" />
      </svg>
    ),
    title: 'Real-Time Inventory Tracking',
    description:
      'Monitor stock, set low-stock alerts, and get AI-powered reorder suggestions so you never run out mid-project.',
    metric: 'Live',
    metricLabel: 'updates',
    category: 'Operations & Inventory',
    href: '#features',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Bank-Grade Security',
    description:
      '256-bit encryption, PCI DSS compliance, and MFA to keep financial and business data fully secure.',
    metric: '256-bit',
    metricLabel: 'encryption',
    category: 'Risk & Security',
    href: '#features',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    title: 'Smart Analytics Dashboard',
    description:
      'Track sales, credit utilization, customer behavior, and inventory performance with 20+ actionable reports.',
    metric: '20+',
    metricLabel: 'reports',
    category: 'Analytics & Insights',
    href: '#features',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mobile-First Experience',
    description:
      'Manage credit, orders, deliveries, and payments from iOS and Android apps, built for on-site workflows.',
    metric: 'iOS + Android',
    metricLabel: 'available',
    category: 'Experience',
    href: '#features',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Multi-Vendor Network',
    description:
      'Access 500+ verified suppliers across India with a single credit line for cement, steel, sand, and more.',
    metric: '500+',
    metricLabel: 'suppliers',
    category: 'Network & Supply',
    href: '#features',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Automated Invoicing',
    description:
      'Generate GST-compliant invoices instantly with reminders, digital receipts, and full history for accounting.',
    metric: 'GST Ready',
    metricLabel: 'invoices',
    category: 'Operations & Inventory',
    href: '#features',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Dedicated Support Team',
    description:
      '24/7 expert support on phone, chat, and WhatsApp for applications, payments, and technical issues.',
    metric: '24/7',
    metricLabel: 'support',
    category: 'Experience',
    href: '#features',
  },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1],
    ['rgba(0,0,0,0)', 'rgba(255,255,255,0.9)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);
  const onDark = !scrolled && !mobileOpen; // at top over dark hero

  const navText =
    'transition-colors ' +
    (onDark ? 'text-slate-100 hover:text-white' : 'text-slate-700 hover:text-slate-900');

  const subtleText = onDark ? 'text-slate-300' : 'text-slate-500';

  return (
    <>
      <motion.nav
        style={{ backgroundColor }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen ? 'backdrop-blur-md shadow-sm' : ''
        }`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center">
                <Logo onDark={onDark} />
              </Link>
            </motion.div>

            {/* Desktop nav */}
            <motion.div
              className="hidden md:flex items-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <NavigationMenu>
                <NavigationMenuList className="space-x-4">
                  {/* Product */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={`${navText} bg-transparent data-[state=open]:bg-transparent`}
                    >
                      Product
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 md:w-[520px] lg:w-[640px] md:grid-cols-[1.2fr_1fr] p-4">
                        <NavigationMenuLink asChild>
                          <Link
                            href="#platforms"
                            className="from-muted/50 to-muted flex h-full flex-col justify-between rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 hover:shadow-md"
                          >
                            <div>
                              <div className="mb-1 text-xs font-semibold uppercase text-primary">
                                Harmey Platform
                              </div>
                              <div className="mb-2 text-lg font-semibold text-slate-900">
                                Build • Lend • Grow
                              </div>
                              <p className="text-muted-foreground text-sm leading-snug">
                                Smart lending and inventory platform connecting shops, customers,
                                and AI-powered risk intelligence in one ecosystem.
                              </p>
                            </div>
                            <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                              <div>
                                <div className="font-semibold text-slate-900">3</div>
                                Platforms
                              </div>
                              <div>
                                <div className="font-semibold text-slate-900">500+</div>
                                Suppliers
                              </div>
                              <div>
                                <div className="font-semibold text-slate-900">60 sec</div>
                                Credit approval
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>

                        <div className="grid gap-2">
                          <NavigationMenuLink asChild>
                            <Link
                              href="#platforms"
                              className="block rounded-md border bg-white p-3 hover:shadow-sm"
                            >
                              <div className="text-sm font-medium text-slate-900">Harmey Vault</div>
                              <p className="text-muted-foreground text-xs leading-snug">
                                Complete business management suite for construction shops.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="#platforms"
                              className="block rounded-md border bg-white p-3 hover:shadow-sm"
                            >
                              <div className="text-sm font-medium text-slate-900">Harmey Catalyst</div>
                              <p className="text-muted-foreground text-xs leading-snug">
                                Buy Now, Pay Later for construction material buyers.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="#platforms"
                              className="block rounded-md border bg-white p-3 hover:shadow-sm"
                            >
                              <div className="text-sm font-medium text-slate-900">Harmey Sentinel</div>
                              <p className="text-muted-foreground text-xs leading-snug">
                                AI-powered risk and intelligence engine for credit and demand.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Solutions */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={`${navText} bg-transparent data-[state=open]:bg-transparent`}
                    >
                      Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 sm:w-[420px] md:w-[540px] lg:w-[680px] md:grid-cols-2 p-4">
                        {features.slice(0, 6).map((feature) => (
                          <li key={feature.title} className="h-full">
                            <NavigationMenuLink asChild>
                              <Link
                                href={feature.href}
                                className="flex h-full min-h-[180px] flex-col rounded-md border bg-white p-4 no-underline outline-hidden transition-all hover:shadow-sm"
                              >
                                <div className="flex items-center justify-between">
                                  <div className="rounded-md bg-primary/5 p-2 text-primary">
                                    {feature.icon}
                                  </div>
                                  <div className="text-right text-xs text-muted-foreground">
                                    <div className="font-semibold text-slate-900">
                                      {feature.metric}
                                    </div>
                                    <div>{feature.metricLabel}</div>
                                  </div>
                                </div>
                                <div className="mt-3">
                                  <div className="text-sm font-medium text-slate-900">
                                    {feature.title}
                                  </div>
                                  <p className="mt-1 text-xs text-muted-foreground leading-snug line-clamp-3">
                                    {feature.description}
                                  </p>
                                </div>
                                {feature.category && (
                                  <div className="mt-auto pt-2 text-[11px] font-medium text-primary/70">
                                    {feature.category}
                                  </div>
                                )}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Impact */}
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle() + ' bg-transparent'}
                    >
                      <Link href="#benefits" className={`${navText} relative`}>
                        Impact
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* Pricing */}
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle() + ' bg-transparent'}
                    >
                      <Link href="#faq" className={`${navText} relative`}>
                        Pricing
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </motion.div>

            {/* Right-side auth buttons (desktop) */}
            <motion.div
              className="items-center space-x-4 hidden md:flex"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/login">
                <motion.button
                  className={`${subtleText} hover:${
                    onDark ? 'text-white' : 'text-slate-900'
                  } transition-colors font-medium`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign in
                </motion.button>
              </Link>
              <Link href="/signup">
                <motion.button
                  className={
                    onDark
                      ? 'border border-primary text-slate-100 px-5 py-2 rounded-sm text-sm font-semibold bg-primary'
                      : 'bg-primary text-white px-6 py-2 rounded-sm font-semibold'
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  Get started
                </motion.button>
              </Link>
            </motion.div>

            {/* Mobile toggle */}
            <motion.button
              className={`md:hidden w-10 h-10 rounded-full shadow-md flex items-center justify-center z-[70] ${
                onDark ? 'bg-black/50 border border-white/20' : 'bg-white'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              <svg
                className={`w-6 h-6 ${onDark ? 'text-slate-100' : 'text-slate-900'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Scroll progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-primary to-secondary origin-left"
          style={{ scaleX: scrollYProgress }}
        />
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <button
              aria-label="Close navigation"
              className="absolute inset-0 bg-black/40"
              onClick={closeMobile}
            />

            {/* Sliding panel */}
            <motion.div
              className="absolute top-0 right-0 h-full w-full max-w-xs bg-white/95 backdrop-blur-md border-l border-slate-200 shadow-xl flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            >
              <div className="px-4 pt-4 pb-3 flex items-center justify-between border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-900 text-sm">Harmey</span>
                </div>
                <button
                  className="p-1 rounded-full hover:bg-slate-100"
                  onClick={closeMobile}
                  aria-label="Close navigation"
                >
                  <svg
                    className="w-5 h-5 text-slate-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <motion.div
                className="flex-1 overflow-y-auto px-4 py-4 space-y-6"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { staggerChildren: 0.04 },
                  },
                }}
              >
                {/* Product */}
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                  className="space-y-2"
                >
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                    Product
                  </div>
                  <Link
                    href="#platforms"
                    onClick={closeMobile}
                    className="block rounded-md border border-slate-200 bg-white px-3 py-2.5"
                  >
                    <div className="text-sm font-medium text-slate-900">
                      Harmey Platform Overview
                    </div>
                    <p className="mt-1 text-xs text-slate-500">
                      Build, lend, and manage construction commerce on one unified stack.
                    </p>
                  </Link>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <Link
                      href="#platforms"
                      onClick={closeMobile}
                      className="rounded-md bg-slate-50 px-3 py-2"
                    >
                      <div className="font-medium text-slate-900">Harmey Vault</div>
                      <p className="text-xs text-slate-500">
                        Business OS for construction shops.
                      </p>
                    </Link>
                    <Link
                      href="#platforms"
                      onClick={closeMobile}
                      className="rounded-md bg-slate-50 px-3 py-2"
                    >
                      <div className="font-medium text-slate-900">Harmey Catalyst</div>
                      <p className="text-xs text-slate-500">
                        BNPL for construction buyers.
                      </p>
                    </Link>
                    <Link
                      href="#platforms"
                      onClick={closeMobile}
                      className="rounded-md bg-slate-50 px-3 py-2"
                    >
                      <div className="font-medium text-slate-900">Harmey Sentinel</div>
                      <p className="text-xs text-slate-500">
                        AI risk and intelligence engine.
                      </p>
                    </Link>
                  </div>
                </motion.div>

                {/* Solutions */}
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                  className="space-y-2"
                >
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                    Solutions
                  </div>
                  <div className="space-y-2">
                    {features.slice(0, 5).map((feature) => (
                      <Link
                        key={feature.title}
                        href={feature.href}
                        onClick={closeMobile}
                        className="block rounded-md border border-slate-200 bg-white px-3 py-2"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <div className="rounded-md bg-primary/5 p-1.5 text-primary">
                              {feature.icon}
                            </div>
                            <div className="text-sm font-medium text-slate-900">
                              {feature.title}
                            </div>
                          </div>
                          <div className="text-right text-[11px] text-slate-500">
                            <div className="font-semibold text-slate-900">
                              {feature.metric}
                            </div>
                            <div>{feature.metricLabel}</div>
                          </div>
                        </div>
                        <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                          {feature.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {/* Impact & Pricing */}
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                  className="space-y-2 border-t border-slate-200 pt-4"
                >
                  <Link
                    href="#benefits"
                    onClick={closeMobile}
                    className="block text-sm font-medium text-slate-800"
                  >
                    Impact
                  </Link>
                  <Link
                    href="#faq"
                    onClick={closeMobile}
                    className="block text-sm font-medium text-slate-800"
                  >
                    Pricing
                  </Link>
                </motion.div>
              </motion.div>

              {/* Auth buttons bottom */}
              <div className="border-t border-slate-200 px-4 py-3 flex flex-col gap-2">
                <Link href="/login" onClick={closeMobile}>
                  <span className="block text-center text-slate-700 font-medium text-sm">
                    Sign in
                  </span>
                </Link>
                <Link href="/signup" onClick={closeMobile}>
                  <span className="block text-center bg-primary text-white py-2 rounded-sm font-semibold text-sm">
                    Get started
                  </span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
