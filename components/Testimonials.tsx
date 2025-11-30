'use client';

import { motion } from 'framer-motion';

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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4"
          >
            Testimonials
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Trusted by builders{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              nationwide
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See what construction professionals are saying about Harmay and how it&apos;s helping them grow their businesses.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-white rounded-3xl p-8 border border-slate-200 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 opacity-0 hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>

                <p className="text-slate-700 mb-6 leading-relaxed italic text-lg">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold mr-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.author}</div>
                    <div className="text-sm text-slate-600">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative quote mark */}
              <div className="absolute top-6 right-6 text-6xl text-indigo-100 opacity-50">
                &ldquo;
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="mt-20 pt-16 border-t border-slate-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-center text-sm text-slate-500 mb-8 tracking-wider">TRUSTED BY INDUSTRY LEADERS</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {['BuildCorp', 'ConstructCo', 'ProBuild', 'MasterBuild'].map((brand, index) => (
              <motion.div
                key={brand}
                className="text-center text-2xl font-bold text-slate-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.5, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ opacity: 0.8, scale: 1.05 }}
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
