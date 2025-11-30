'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <span className="text-xl font-semibold text-slate-900">Harmay</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">
              Features
            </Link>
            <Link href="#benefits" className="text-slate-600 hover:text-slate-900 transition-colors">
              Benefits
            </Link>
            <Link href="#testimonials" className="text-slate-600 hover:text-slate-900 transition-colors">
              Testimonials
            </Link>
            <Link href="#faq" className="text-slate-600 hover:text-slate-900 transition-colors">
              FAQ
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-slate-600 hover:text-slate-900 transition-colors hidden md:block">
              Sign in
            </button>
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200">
              Get started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
