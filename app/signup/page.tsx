'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { LogoWithText } from '@/components/Logo';
import { useState } from 'react';

export default function SignupPage() {
  const [userType, setUserType] = useState<'shop' | 'customer' | 'nbfc'>('shop');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-2xl"
      >
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-slate-200">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Link href="/">
              <LogoWithText />
            </Link>
          </div>

          <h1 className="text-2xl font-bold text-slate-900 text-center mb-2">
            Create your account
          </h1>
          <p className="text-slate-600 text-center mb-8">
            Choose your account type and get started
          </p>

          {/* User type selector */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              {
                type: 'shop' as const,
                label: 'Shop Owner',
                icon: '🏪',
                description: 'Manage inventory & customer lending',
              },
              {
                type: 'customer' as const,
                label: 'Customer',
                icon: '👤',
                description: 'Get instant credit for materials',
              },
              {
                type: 'nbfc' as const,
                label: 'NBFC Partner',
                icon: '🏦',
                description: 'Lend to verified customers',
              },
            ].map((option) => (
              <button
                key={option.type}
                onClick={() => setUserType(option.type)}
                className={`p-4 rounded-xl border-2 transition-all text-left ${
                  userType === option.type
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="text-2xl mb-2">{option.icon}</div>
                <div className="font-semibold text-sm text-slate-900 mb-1">{option.label}</div>
                <div className="text-xs text-slate-600">{option.description}</div>
              </button>
            ))}
          </div>

          {/* Signup form */}
          <form className="grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {userType === 'shop' ? 'Shop Name' : userType === 'nbfc' ? 'Company Name' : 'Full Name'}
              </label>
              <input
                type="text"
                placeholder={userType === 'shop' ? 'ABC Construction Mart' : 'Enter name'}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
              />
            </div>

            {userType === 'shop' && (
              <div className="col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  GST Number (Optional)
                </label>
                <input
                  type="text"
                  placeholder="22AAAAA0000A1Z5"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                />
              </div>
            )}

            <div className="col-span-2 sm:col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Min. 8 characters"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Re-enter password"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
              />
            </div>

            <div className="col-span-2">
              <label className="flex items-start text-sm">
                <input type="checkbox" className="mr-2 mt-1 rounded" required />
                <span className="text-slate-600">
                  I agree to the <a href="#" className="text-indigo-600 hover:underline">Terms of Service</a> and{' '}
                  <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>
                </span>
              </label>
            </div>

            <motion.button
              type="submit"
              className="col-span-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Create account
            </motion.button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-600">
            Already have an account?{' '}
            <Link href="/login" className="text-indigo-600 hover:text-indigo-700 font-semibold">
              Sign in
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-slate-600 hover:text-slate-900">
            ← Back to home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
