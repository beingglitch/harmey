'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How quickly can I get approved?',
    answer: 'Most applications are approved within minutes. Our AI-powered system evaluates your business instantly. Once approved, you can start purchasing materials from our partner suppliers immediately.',
  },
  {
    question: 'What are the eligibility requirements?',
    answer: 'We work with construction businesses of all sizes. You need to have been in business for at least 6 months, have a valid business license, and work with material suppliers in our network. No minimum revenue requirements.',
  },
  {
    question: 'How does the payment process work?',
    answer: 'When you purchase materials, we pay the supplier directly. Your customer pays us according to the agreed terms (30-90 days). You receive your payment within 24 hours of customer payment clearing.',
  },
  {
    question: 'What types of materials are covered?',
    answer: 'We cover all construction materials including lumber, concrete, steel, roofing materials, electrical supplies, plumbing fixtures, and more. If your supplier is in our network, their materials are covered.',
  },
  {
    question: 'Are there any setup fees or monthly charges?',
    answer: 'No setup fees, no monthly charges, and no hidden costs. You only pay a small transaction fee when you use our service. The first 3 transactions are completely free.',
  },
  {
    question: 'How do I add my material suppliers?',
    answer: 'We have over 500 material suppliers already in our network. If your supplier isn\'t listed, you can request to add them. We\'ll reach out and typically have them onboarded within 48 hours.',
  },
  {
    question: 'What if my customer doesn\'t pay?',
    answer: 'We have comprehensive credit protection. Our system vets all customers before approval. In the rare case of non-payment, we work directly with the customer to resolve the issue without impacting your business.',
  },
  {
    question: 'Can I manage multiple projects at once?',
    answer: 'Absolutely! You can manage unlimited projects simultaneously. Each project gets its own dashboard where you can track materials, spending, and payment status in real-time.',
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="border-b border-gray-200 last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors duration-200 px-2 rounded-lg"
      >
        <span className="text-lg font-semibold text-gray-900 pr-8">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-6 h-6 text-gray-600" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 px-2 text-gray-600 leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="faq" className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-100 to-cyan-100 rounded-full mb-6"
          >
            <HelpCircle className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">FAQ</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Frequently asked{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              questions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600"
          >
            Everything you need to know about Harmay. Can't find the answer you're
            looking for? Please chat with our friendly team.
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help. Get in touch and we'll respond within 24
            hours.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
}
