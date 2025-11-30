'use client';

import { useEffect, useRef, useState } from 'react';

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
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index]);
            }, index * 200);
          }
        },
        { threshold: 0.2 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Built for construction professionals
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We understand the unique challenges of the construction industry. Harmay is designed to help you overcome them.
          </p>
        </div>

        <div className="space-y-24">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={(el) => {
                refs.current[index] = el;
              }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div
                className={`transition-all duration-700 ${
                  visibleCards.includes(index) ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}`
                } ${index % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-12 flex items-center justify-center text-8xl h-80">
                  {benefit.image}
                </div>
              </div>

              <div
                className={`transition-all duration-700 delay-200 ${
                  visibleCards.includes(index) ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? 'translate-x-10' : '-translate-x-10'}`
                } ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
                  Benefit {index + 1}
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="bg-white rounded-xl p-6 border border-slate-200 inline-block">
                  <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {benefit.stat}
                  </div>
                  <div className="text-sm text-slate-600 mt-1">{benefit.statLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-12 sm:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to transform your business?
              </h3>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Join hundreds of construction businesses already using Harmay to grow faster and manage cash flow better.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200">
                  Get started now
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-200">
                  Schedule a demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
