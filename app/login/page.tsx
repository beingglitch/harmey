'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { LogoWithText } from '@/components/Logo';
import { useState } from 'react';

export default function LoginPage() {
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
        className="relative w-full max-w-md"
      >
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-slate-200">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Link href="/">
              <LogoWithText />
            </Link>
          </div>

          <h1 className="text-2xl font-bold text-slate-900 text-center mb-2">
            Welcome back
          </h1>
          <p className="text-slate-600 text-center mb-8">
            Sign in to your Harmay account
          </p>

          {/* User type selector */}
          <div className="grid grid-cols-3 gap-2 mb-6 p-1 bg-slate-100 rounded-xl">
            {[
              { type: 'shop' as const, label: 'Shop Owner', icon: '🏪' },
              { type: 'customer' as const, label: 'Customer', icon: '👤' },
              { type: 'nbfc' as const, label: 'NBFC', icon: '🏦' },
            ].map((option) => (
              <button
                key={option.type}
                onClick={() => setUserType(option.type)}
                className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                  userType === option.type
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <div className="text-lg mb-1">{option.icon}</div>
                <div className="text-xs">{option.label}</div>
              </button>
            ))}
          </div>

          {/* Login form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email or Phone
              </label>
              <input
                type="text"
                placeholder="Enter your email or phone number"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 rounded" />
                <span className="text-slate-600">Remember me</span>
              </label>
              <a href="#" className="text-indigo-600 hover:text-indigo-700">
                Forgot password?
              </a>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Sign in
            </motion.button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-600">
            Don't have an account?{' '}
            <Link href="/signup" className="text-indigo-600 hover:text-indigo-700 font-semibold">
              Sign up
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-xs text-center text-slate-500">
              By signing in, you agree to our Terms of Service and Privacy Policy
            </p>
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
