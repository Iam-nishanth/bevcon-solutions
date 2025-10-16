'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo, companyInfo } from '@/content/company';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-heading font-bold text-white mb-4">
              BEVCON <span className="text-secondary-500">SOLUTIONS</span>
            </div>
            <p className="text-sm mb-4">{companyInfo.tagline}</p>
            <p className="text-sm text-gray-400 mb-6">
              {companyInfo.description}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-800 hover:bg-secondary-500 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-800 hover:bg-secondary-500 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-800 hover:bg-secondary-500 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/about/partners" className="hover:text-white transition-colors">Our Partners</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/quote" className="hover:text-white transition-colors">Request Quote</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products?category=automatic-doors" className="hover:text-white transition-colors">Automatic Doors</Link></li>
              <li><Link href="/products?category=industrial-doors" className="hover:text-white transition-colors">Industrial Doors</Link></li>
              <li><Link href="/products?category=loading-bay" className="hover:text-white transition-colors">Loading Bay</Link></li>
              <li><Link href="/products?category=material-handling" className="hover:text-white transition-colors">Material Handling</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">View All</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="mt-12 pt-8 border-t border-primary-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary-600/10 flex items-center justify-center flex-shrink-0">
                <Phone size={18} className="text-primary-500" />
              </div>
              <div>
                <div className="text-gray-400 text-xs">Call Us</div>
                <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-primary-500 transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary-600/10 flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-primary-500" />
              </div>
              <div>
                <div className="text-gray-400 text-xs">Email Us</div>
                <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-primary-500 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary-600/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-primary-500" />
              </div>
              <div>
                <div className="text-gray-400 text-xs">Location</div>
                <div className="text-white">{contactInfo.address}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div>
              © {currentYear} {companyInfo.name}. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/terms-conditions" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
