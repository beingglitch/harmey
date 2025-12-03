'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    question: 'How quickly can I get credit approval?',
    answer: 'Credit approval happens in under 60 seconds! Our AI-powered system evaluates applications instantly. Customers can start purchasing materials immediately after approval. For shops, working capital approval takes 2-4 hours with minimal documentation.',
    category: 'Credit & Approval',
  },
  {
    question: 'What are the eligibility requirements?',
    answer: 'For customers: Valid ID, phone number, and basic KYC. For shops: GST registration, 6 months business history, and bank account. We focus on your business potential, not just credit scores. Many shops with limited credit history have been approved.',
    category: 'Eligibility',
  },
  {
    question: 'What payment terms are available?',
    answer: 'Flexible EMI options from 30 to 120 days. Choose weekly, bi-weekly, or monthly payments based on your cash flow. Zero prepayment charges - pay early and save on interest. Custom terms available for large projects.',
    category: 'Payment Terms',
  },
  {
    question: 'Are there any hidden charges or fees?',
    answer: 'Absolutely no hidden fees! Complete transparency with all charges shown upfront. No joining fees, no annual fees, no prepayment penalties. You only pay simple interest on credit used. Processing fees clearly mentioned before approval.',
    category: 'Fees & Charges',
  },
  {
    question: 'Which materials and suppliers are covered?',
    answer: 'All construction materials - cement, steel, sand, bricks, paint, hardware, plumbing, electrical, and more. Network of 500+ verified suppliers across India. If your preferred supplier is not listed, we can onboard them within 24 hours at zero cost.',
    category: 'Suppliers & Materials',
  },
  {
    question: 'What if my project gets delayed?',
    answer: 'We understand construction delays happen. Request payment extension directly from your dashboard. Our team reviews and approves extensions based on your situation. No penalty for genuine delays. We work with you, not against you.',
    category: 'Project Management',
  },
  {
    question: 'How is this different from a bank loan?',
    answer: 'No collateral required, unlike bank loans. Instant approval vs weeks of bank processing. Flexible, transaction-based credit - use only what you need. No large EMI burden. Better suited for construction business cycles. Digital-first with zero branch visits.',
    category: 'Comparison',
  },
  {
    question: 'Can I manage multiple projects and customers?',
    answer: 'Yes! Track unlimited projects and customers on one platform. Separate credit lines for each customer. Individual dashboards showing project-wise spending, payments, and inventory. Bulk operations supported for efficiency.',
    category: 'Platform Features',
  },
  {
    question: 'How does inventory tracking work?',
    answer: 'Real-time inventory updates as you make purchases. Low-stock alerts via SMS and app notifications. AI-powered reorder recommendations based on your usage patterns. Integration with billing software available. Works offline and syncs when online.',
    category: 'Inventory Management',
  },
  {
    question: 'Is my data secure and private?',
    answer: '256-bit bank-grade encryption for all data. PCI DSS Level 1 certified payment processing. Regular security audits and compliance checks. Your data is never shared without permission. 2-factor authentication for added security.',
    category: 'Security & Privacy',
  },
  {
    question: 'What support is available?',
    answer: '24/7 support via phone, WhatsApp, and in-app chat. Dedicated relationship manager for shops. Regional language support available. Video tutorials and training materials. Average response time under 5 minutes.',
    category: 'Support',
  },
  {
    question: 'How do I get started?',
    answer: 'For shops: Sign up online, submit basic documents (GST, bank statement, ID), get approved in 2-4 hours, start offering credit to customers. For customers: Download app, complete KYC in 2 minutes, get instant approval, start shopping. Zero setup fees.',
    category: 'Getting Started',
  },
];

const categories = ['All', 'Credit & Approval', 'Payment Terms', 'Platform Features', 'Support'];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-slate-200 last:border-b-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-start text-left group"
        whileHover={{ x: 4 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        <span className="text-lg font-semibold text-slate-900 pr-8 group-hover:text-primary transition-colors">
          {faq.question}
        </span>
        <motion.svg
          className="w-6 h-6 text-primary flex-shrink-0 mt-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <motion.div
              className="pb-6"
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
            >
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                {faq.category}
              </div>
              <p className="text-slate-600 leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFaqs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            ❓ FAQ
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked{' '}
            <span className="text-primary">
              Questions
            </span>
          </h2>
          <p className="text-xl text-slate-600">
            Everything you need to know about Harmey. Have more questions? Our support team is here 24/7.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="bg-white rounded-md border border-slate-200 p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          key={selectedCategory}
        >
          <AnimatePresence mode="wait">
            {filteredFaqs.map((faq, index) => (
              <FAQItem key={faq.question} faq={faq} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="mt-12 text-center bg-linear-to-br from-primary/5 to-secondary/5 rounded-md p-8 border border-slate-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-slate-900 font-semibold text-lg mb-4">Still have questions?</p>
          <p className="text-slate-600 mb-6">Our team is available 24/7 to help you get started</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-6 py-3 bg-primary text-white rounded-sm font-semibold inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </motion.button>
            <motion.button
              className="px-6 py-3 bg-white text-slate-700 border-2 border-slate-200 rounded-sm font-semibold inline-flex items-center justify-center gap-2 hover:border-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Support
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}