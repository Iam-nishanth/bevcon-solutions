'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo, companyInfo } from '@/content/company';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/images/bevcon-solutions-logo.svg"
                alt="Bevcon Solutions"
                width={200}
                height={50}
              />
            </div>
            <p className="text-sm mb-4">{companyInfo.tagline}</p>
            <p className="text-base text-gray-400 mb-6">
              {companyInfo.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-slate-600 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li><Link href="/" className="hover:text-black transition-colors">Home</Link></li>
              <li><Link href="/solutions" className="hover:text-black transition-colors">Solutions</Link></li>
              <li><Link href="/products" className="hover:text-black transition-colors">Products</Link></li>
              <li><Link href="/industries" className="hover:text-black transition-colors">Industries</Link></li>
              <li><Link href="/contact" className="hover:text-black transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-semibold text-slate-600 mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li><Link href="/products/high-speed-doors" className="hover:text-black transition-colors">High-Speed Doors</Link></li>
              <li><Link href="/products/fire-rated-shutters" className="hover:text-black transition-colors">Fire Rated Shutters</Link></li>
              <li><Link href="/products/dock-levelers" className="hover:text-black transition-colors">Dock Levelers</Link></li>
              <li><Link href="/products/material-handling" className="hover:text-black transition-colors">Material Handling</Link></li>
              <li><Link href="/products" className="hover:text-black transition-colors">View All</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-heading font-semibold text-slate-600 mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li><Link href="/solutions" className="hover:text-black transition-colors">Solutions</Link></li>
              <li><Link href="/industries" className="hover:text-black transition-colors">Industries</Link></li>
              <li><Link href="/products" className="hover:text-black transition-colors">Products</Link></li>
              <li><Link href="/contact" className="hover:text-black transition-colors">Contact</Link></li>
            </ul>
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
              <Link href="/contact" className="hover:text-black transition-colors">
                Contact Us
              </Link>
              <Link href="/products" className="hover:text-black transition-colors">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
