'use client';

import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    quote: "Harmay transformed how we manage our construction projects. We can now take on 2-3 additional projects simultaneously without worrying about material costs eating into our cash reserves.",
    author: "Michael Chen",
    role: "Founder & CEO",
    company: "BuildRight Construction",
    avatar: "MC",
  },
  {
    quote: "The approval process is incredibly fast. We got approved in under an hour and were able to purchase materials the same day. This speed gave us a competitive edge in securing a major project.",
    author: "Sarah Williams",
    role: "Operations Director",
    company: "Summit Builders",
    avatar: "SW",
  },
  {
    quote: "Before Harmay, we were constantly juggling payment schedules and turning down work. Now we have the financial flexibility to grow our business the way we always wanted to.",
    author: "James Rodriguez",
    role: "Owner",
    company: "Rodriguez & Sons Contracting",
    avatar: "JR",
  },
  {
    quote: "The dashboard makes it so easy to track everything. We can see all our credit lines, payment schedules, and transaction history in one place. It's like having a CFO on our team.",
    author: "Emily Thompson",
    role: "Project Manager",
    company: "Horizon Construction Group",
    avatar: "ET",
  },
  {
    quote: "Working with Harmay has improved our supplier relationships dramatically. We always pay on time now, which has led to better pricing and priority service on rush orders.",
    author: "David Park",
    role: "General Contractor",
    company: "Park Construction Co.",
    avatar: "DP",
  },
  {
    quote: "As a growing company, access to flexible financing is crucial. Harmay understands construction business cycles and offers terms that actually work for us, not against us.",
    author: "Lisa Martinez",
    role: "CFO",
    company: "Citywide Contractors",
    avatar: "LM",
  },
];

export default function Testimonials() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index]);
            }, index * 100);
          }
        },
        { threshold: 0.1 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Trusted by builders nationwide
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See what construction professionals are saying about Harmay and how it's helping them grow their businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => {
                refs.current[index] = el;
              }}
              className={`bg-white rounded-2xl p-8 border border-slate-200 hover:border-indigo-200 hover:shadow-xl transition-all duration-500 ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-600">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 pt-16 border-t border-slate-200">
          <p className="text-center text-sm text-slate-500 mb-8">TRUSTED BY INDUSTRY LEADERS</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50">
            <div className="text-center text-2xl font-bold text-slate-400">BuildCorp</div>
            <div className="text-center text-2xl font-bold text-slate-400">ConstructCo</div>
            <div className="text-center text-2xl font-bold text-slate-400">ProBuild</div>
            <div className="text-center text-2xl font-bold text-slate-400">MasterBuild</div>
          </div>
        </div>
      </div>
    </section>
  );
}
