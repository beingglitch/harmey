'use client';

import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Security', href: '#security' },
      { name: 'Integrations', href: '#integrations' },
    ],
    Company: [
      { name: 'About', href: '#about' },
      { name: 'Customers', href: '#customers' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' },
    ],
    Resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'Help Center', href: '#help' },
      { name: 'Blog', href: '#blog' },
      { name: 'Community', href: '#community' },
    ],
    Legal: [
      { name: 'Privacy', href: '#privacy' },
      { name: 'Terms', href: '#terms' },
      { name: 'Security', href: '#security' },
      { name: 'Compliance', href: '#compliance' },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="/" className="inline-block mb-4">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Harmay
              </span>
            </a>
            <p className="text-gray-600 mb-6 max-w-xs">
              Financial infrastructure for construction businesses. Accept more
              projects and grow faster.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#twitter"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition-colors duration-200 group"
              >
                <Twitter className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
              </a>
              <a
                href="#linkedin"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition-colors duration-200 group"
              >
                <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
              </a>
              <a
                href="#github"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200 group"
              >
                <Github className="w-5 h-5 text-gray-600 group-hover:text-gray-900" />
              </a>
              <a
                href="#email"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-purple-100 flex items-center justify-center transition-colors duration-200 group"
              >
                <Mail className="w-5 h-5 text-gray-600 group-hover:text-purple-600" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-900 mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-200 pt-12 mb-12">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Stay up to date
            </h3>
            <p className="text-gray-600 mb-4">
              Get the latest updates on features and industry insights.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Harmay. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <a href="#privacy" className="hover:text-blue-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-blue-600 transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="hover:text-blue-600 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
