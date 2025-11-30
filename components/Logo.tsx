'use client';

import { motion } from 'framer-motion';

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <motion.div
      className={`${className} relative`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#DB2777" />
          </linearGradient>
        </defs>

        {/* Construction brick/building pattern */}
        <g>
          {/* Base foundation */}
          <rect x="20" y="85" width="80" height="15" rx="2" fill="url(#logoGradient)" opacity="0.9"/>

          {/* Middle layer - brick pattern */}
          <rect x="20" y="65" width="35" height="18" rx="2" fill="url(#logoGradient)" opacity="0.8"/>
          <rect x="58" y="65" width="42" height="18" rx="2" fill="url(#logoGradient)" opacity="0.8"/>

          {/* Top layer */}
          <rect x="20" y="45" width="25" height="18" rx="2" fill="url(#logoGradient)" opacity="0.7"/>
          <rect x="48" y="45" width="25" height="18" rx="2" fill="url(#logoGradient)" opacity="0.7"/>
          <rect x="76" y="45" width="24" height="18" rx="2" fill="url(#logoGradient)" opacity="0.7"/>

          {/* H letter integrated */}
          <path
            d="M45 20 L45 40 M45 30 L65 30 M65 20 L65 40"
            stroke="url(#logoGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Money/coin symbol */}
          <circle cx="85" cy="28" r="12" fill="#FCD34D" opacity="0.9"/>
          <text x="85" y="34" fontSize="16" fontWeight="bold" fill="#78350F" textAnchor="middle">₹</text>
        </g>
      </svg>
    </motion.div>
  );
}

export function LogoWithText({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Logo className="w-10 h-10" />
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-none">
          Harmay
        </span>
        <span className="text-xs text-slate-500 leading-none mt-0.5">Build • Lend • Grow</span>
      </div>
    </div>
  );
}
