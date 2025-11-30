'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const platforms = [
  {
    title: 'Shop Owner Dashboard',
    subtitle: 'Manage Inventory & Customer Financing',
    icon: '🏪',
    color: 'from-blue-500 to-cyan-500',
    features: [
      'Real-time inventory tracking',
      'Customer credit management',
      'Invoice generation',
      'Sales analytics',
    ],
    mockup: {
      type: 'dashboard',
      stats: [
        { label: 'Total Sales', value: '₹12.5L', change: '+23%' },
        { label: 'Active Credits', value: '45', change: '+12%' },
        { label: 'Inventory Value', value: '₹8.2L', change: '-5%' },
      ],
    },
  },
  {
    title: 'Customer App',
    subtitle: 'Instant Credit for Construction Materials',
    icon: '👤',
    color: 'from-indigo-500 to-purple-500',
    features: [
      'Instant credit approval',
      'Browse materials',
      'Track purchases',
      'Flexible repayment',
    ],
    mockup: {
      type: 'mobile',
      creditLimit: '₹2,50,000',
      available: '₹1,85,000',
    },
  },
  {
    title: 'NBFC Portal',
    subtitle: 'Lend to Verified Customers',
    icon: '🏦',
    color: 'from-purple-500 to-pink-500',
    features: [
      'Customer verification',
      'Risk assessment',
      'Automated disbursement',
      'Portfolio management',
    ],
    mockup: {
      type: 'analytics',
      disbursed: '₹15.2Cr',
      recovery: '98.5%',
    },
  },
];

function MockupDashboard({ stats = [] }: { stats?: any[] }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-lg border border-slate-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-slate-400">Dashboard</div>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {stats.map((stat, i) => (
          <div key={i} className="bg-gradient-to-br from-slate-50 to-slate-100 rounded p-2">
            <div className="text-xs text-slate-600 mb-1">{stat.label}</div>
            <div className="font-bold text-sm text-slate-900">{stat.value}</div>
            <div className={`text-xs ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
              {stat.change}
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-1">
        {[60, 80, 45, 90, 70].map((width, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-12 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" style={{ width: `${width}%` }}></div>
            </div>
            <div className="h-1 flex-1 bg-slate-100 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockupMobile({ creditLimit = '₹0', available = '₹0' }: { creditLimit?: string; available?: string }) {
  return (
    <div className="w-48 mx-auto bg-slate-900 rounded-3xl p-2 shadow-2xl">
      <div className="bg-white rounded-2xl p-3 h-80 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <div className="text-xs font-semibold">Harmay</div>
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600"></div>
        </div>
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-3 text-white mb-3">
          <div className="text-xs opacity-80 mb-1">Credit Limit</div>
          <div className="text-xl font-bold mb-2">{creditLimit}</div>
          <div className="text-xs opacity-80">Available: {available}</div>
          <div className="mt-2 bg-white/20 rounded-full h-1 overflow-hidden">
            <div className="bg-white h-full rounded-full" style={{ width: '74%' }}></div>
          </div>
        </div>
        <div className="flex-1 space-y-2">
          {['Cement - 50kg', 'Steel TMT Bars', 'Sand - 1 Ton'].map((item, i) => (
            <div key={i} className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg">
              <div className="w-8 h-8 bg-gradient-to-br from-slate-200 to-slate-300 rounded"></div>
              <div className="flex-1">
                <div className="text-xs font-medium">{item}</div>
                <div className="text-xs text-slate-500">In stock</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MockupAnalytics({ disbursed = '₹0', recovery = '0%' }: { disbursed?: string; recovery?: string }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-lg border border-slate-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-slate-400">NBFC Analytics</div>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3">
          <div className="text-xs text-slate-600 mb-1">Total Disbursed</div>
          <div className="text-lg font-bold text-slate-900">{disbursed}</div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-3">
          <div className="text-xs text-slate-600 mb-1">Recovery Rate</div>
          <div className="text-lg font-bold text-slate-900">{recovery}</div>
        </div>
      </div>
      <div className="relative h-20">
        <svg className="w-full h-full" viewBox="0 0 200 80">
          <path
            d="M0 60 Q 50 40, 100 45 T 200 30"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="3"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          <path
            d="M0 60 Q 50 40, 100 45 T 200 30 L 200 80 L 0 80 Z"
            fill="url(#gradientFill)"
            opacity="0.2"
          />
          <defs>
            <linearGradient id="gradientFill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default function PlatformShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.platform-header', {
        scrollTrigger: {
          trigger: '.platform-header',
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      document.querySelectorAll('.platform-card').forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          y: 100,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="platforms" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="platform-header text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4"
          >
            Three Powerful Platforms
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            One ecosystem,{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              three solutions
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Seamlessly connecting shops, customers, and NBFCs for frictionless construction material financing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              className="platform-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center text-2xl`}>
                    {platform.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">{platform.title}</h3>
                    <p className="text-xs text-slate-500">{platform.subtitle}</p>
                  </div>
                </div>

                <div className="mb-6">
                  {platform.mockup.type === 'dashboard' && <MockupDashboard stats={platform.mockup.stats} />}
                  {platform.mockup.type === 'mobile' && <MockupMobile creditLimit={platform.mockup.creditLimit} available={platform.mockup.available} />}
                  {platform.mockup.type === 'analytics' && <MockupAnalytics disbursed={platform.mockup.disbursed} recovery={platform.mockup.recovery} />}
                </div>

                <div className="space-y-2 mb-6 flex-1">
                  {platform.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                <motion.button
                  className={`w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${platform.color}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
