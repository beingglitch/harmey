'use client';

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
    answer: 'We have partnerships with hundreds of material suppliers nationwide. If your preferred supplier isn\'t in our network yet, we can typically onboard them within a few days at no cost to you or them.',
  },
  {
    question: 'What happens if a project gets delayed?',
    answer: 'We understand that construction projects often face delays. You can request payment extensions through your dashboard, and we\'ll work with you to adjust terms based on your specific situation.',
  },
  {
    question: 'How is this different from a traditional business loan?',
    answer: 'Unlike traditional loans, Harmay provides flexible, transaction-based financing specifically for material purchases. There\'s no large lump sum or long-term debt. You only pay for what you use, when you use it.',
  },
  {
    question: 'Can I manage multiple projects at once?',
    answer: 'Absolutely! Our platform is designed to handle multiple concurrent projects. You can track spending, credit limits, and payment schedules for each project separately in your dashboard.',
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-indigo-600 transition-colors"
      >
        <span className="text-lg font-semibold text-slate-900 pr-8">{faq.question}</span>
        <svg
          className={`w-6 h-6 text-indigo-600 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-slate-600">
            Everything you need to know about Harmay. Can&apos;t find what you&apos;re looking for? Chat with our team.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Still have questions?</p>
          <button className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
            Contact our support team →
          </button>
        </div>
      </div>
    </section>
  );
}
