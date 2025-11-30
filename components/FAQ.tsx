'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    question: 'How quickly can I get approved for financing?',
    answer: 'Most applications are approved within 24 hours. For existing customers with good payment history, approvals can happen in as little as 1 hour. Our automated system evaluates your application in real-time.',
  },
  {
    question: 'What are the credit requirements?',
    answer: 'We look at various factors beyond just credit scores, including your business history, project pipeline, and payment track record. Many construction businesses with less-than-perfect credit have been approved because we understand the industry.',
  },
  {
    question: 'What payment terms do you offer?',
    answer: 'We offer flexible payment terms from 30 to 120 days, with the option to extend based on your project timelines. You can choose the schedule that best aligns with your customer payment cycles.',
  },
  {
    question: 'Are there any hidden fees?',
    answer: 'No. We believe in complete transparency. All fees are clearly disclosed upfront before you accept any financing. There are no hidden charges, no prepayment penalties, and no surprises.',
  },
  {
    question: 'Which suppliers can I use with Harmay?',
    answer: "We have partnerships with hundreds of material suppliers nationwide. If your preferred supplier isn't in our network yet, we can typically onboard them within a few days at no cost to you or them.",
  },
  {
    question: 'What happens if a project gets delayed?',
    answer: "We understand that construction projects often face delays. You can request payment extensions through your dashboard, and we'll work with you to adjust terms based on your specific situation.",
  },
  {
    question: 'How is this different from a traditional business loan?',
    answer: "Unlike traditional loans, Harmay provides flexible, transaction-based financing specifically for material purchases. There's no large lump sum or long-term debt. You only pay for what you use, when you use it.",
  },
  {
    question: 'Can I manage multiple projects at once?',
    answer: 'Absolutely! Our platform is designed to handle multiple concurrent projects. You can track spending, credit limits, and payment schedules for each project separately in your dashboard.',
  },
];

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
        <span className="text-lg font-semibold text-slate-900 pr-8 group-hover:text-indigo-600 transition-colors">
          {faq.question}
        </span>
        <motion.svg
          className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1"
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
            <motion.p
              className="text-slate-600 leading-relaxed pb-6"
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
            >
              {faq.answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"
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
            className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-4"
          >
            FAQ
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Frequently asked{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              questions
            </span>
          </h2>
          <p className="text-xl text-slate-600">
            Everything you need to know about Harmay. Can&apos;t find what you&apos;re looking for? Chat with our team.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-3xl border border-slate-200 p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-slate-600 mb-4">Still have questions?</p>
          <motion.button
            className="text-indigo-600 font-semibold hover:text-indigo-700 inline-flex items-center gap-2"
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            Contact our support team
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
