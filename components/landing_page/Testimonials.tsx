'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "Harmey ne hamara business transform kar diya. Ab hum 3-4 projects ek saath handle kar sakte hain bina cash flow ki tension ke. Material credit instantly mil jata hai.",
    author: "Rajesh Kumar",
    role: "Owner",
    company: "Kumar Construction & Suppliers",
    avatar: "RK",
    location: "Delhi NCR",
  },
  {
    quote: "60 seconds mein credit approval! Same day materials purchase kar liye. Bahut fast service hai. Suppliers ko bhi on-time payment hota hai, so better rates milte hain.",
    author: "Priya Sharma",
    role: "Managing Director",
    company: "Sharma Cement & Steel Trading",
    avatar: "PS",
    location: "Mumbai",
  },
  {
    quote: "Pehle cash flow manage karna bahut mushkil tha. Ab Harmey ke saath flexible payment terms milte hain. 120 din tak ka time milta hai, perfect for construction projects.",
    author: "Mohammed Ansari",
    role: "Proprietor",
    company: "Ansari Building Materials",
    avatar: "MA",
    location: "Lucknow",
  },
  {
    quote: "Dashboard bahut simple hai. Sab kuch ek jagah dikh jata hai - credit limit, payments, inventory tracking. Staff ko bhi samajh aa jata hai easily.",
    author: "Lakshmi Menon",
    role: "Business Head",
    company: "Menon Builders & Suppliers",
    avatar: "LM",
    location: "Bangalore",
  },
  {
    quote: "Supplier relations improve ho gaye Harmey ke baad. Always on-time payment se trust ban gaya. Ab priority delivery milta hai aur better pricing bhi.",
    author: "Vikram Singh",
    role: "Director",
    company: "Singh Hardware & Construction",
    avatar: "VS",
    location: "Jaipur",
  },
  {
    quote: "Growing business ke liye working capital bahut zaroori hai. Harmey samajhta hai construction business ko. Flexible terms aur instant approval se growth easy ho gayi.",
    author: "Deepika Patel",
    role: "CFO",
    company: "Patel Traders & Builders",
    avatar: "DP",
    location: "Ahmedabad",
  },
  {
    quote: "Inventory management automatic ho gaya. Low stock alerts aur AI recommendations se kabhi shortage nahi hota. Projects smoothly chalte hain ab.",
    author: "Arjun Reddy",
    role: "Operations Manager",
    company: "Reddy Building Materials",
    avatar: "AR",
    location: "Hyderabad",
  },
  {
    quote: "Customer ko instant credit offer kar sakte hain, so sales badh gaye 2x. Harmey ka credit system customer aur shop dono ke liye beneficial hai.",
    author: "Suresh Gupta",
    role: "Shop Owner",
    company: "Gupta Construction Stores",
    avatar: "SG",
    location: "Pune",
  },
];

const supplierBrands = [
  'Shree Cement',
  'Ambuja Cement',
  'Tata Steel',
  'JSW Steel',
  'Ultratech',
  'ACC Limited',
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection > 0) {
        return (prev + 1) % testimonials.length;
      } else {
        return prev === 0 ? testimonials.length - 1 : prev - 1;
      }
    });
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
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
            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4"
          >
            💬 Client Testimonials
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Trusted by Construction Shops{' '}
            <span className="text-primary">
              Across India
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real stories from real construction material suppliers who are growing their businesses with Harmey
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto mb-12">
          <div className="relative h-[500px] sm:h-[400px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full"
              >
                <div className="bg-white rounded-md p-8 sm:p-12 border border-slate-200 shadow-2xl">
                  {/* Stars */}
                  <div className="flex items-center justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-6 h-6 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-slate-700 text-xl sm:text-2xl mb-8 leading-relaxed text-center italic">
                    "{testimonials[currentIndex].quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl mr-4">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-slate-900 text-lg">
                        {testimonials[currentIndex].author}
                      </div>
                      <div className="text-sm text-slate-600">
                        {testimonials[currentIndex].role}
                      </div>
                      <div className="text-sm font-semibold text-primary">
                        {testimonials[currentIndex].company}
                      </div>
                      <div className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                        📍 {testimonials[currentIndex].location}
                      </div>
                    </div>
                  </div>

                  {/* Decorative quote mark */}
                  <div className="absolute top-8 right-8 text-8xl text-primary/10">
                    "
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 w-12 h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-colors shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 w-12 h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-colors shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <motion.div
          className="mt-20 pt-16 border-t border-slate-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-center text-sm text-slate-500 mb-8 tracking-wider uppercase">
            Integrated with Leading Suppliers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {supplierBrands.map((brand, index) => (
              <motion.div
                key={brand}
                className="text-center text-lg font-bold text-slate-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
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