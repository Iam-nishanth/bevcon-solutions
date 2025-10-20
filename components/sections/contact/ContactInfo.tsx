'use client';

import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="space-y-8"
    >
      {/* Company Info Card */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-primary-900 mb-6">Get in Touch</h2>

        <div className="space-y-6">
          {/* Address */}
          {/* <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Our Office</h3>
              <p className="text-gray-600 leading-relaxed">
                49, Maxine Drive<br />
                St Helena VIC 3088<br />
                Australia
              </p>
            </div>
          </div> */}

          {/* Phone */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
              <a href="tel:+61420562184" className="text-primary-600 hover:text-primary-700 transition-colors">
                +61 420 562 184
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
              <a href="mailto:info@bevconsolution.au" className="text-primary-600 hover:text-primary-700 transition-colors">
                info@bevconsolution.au
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Quick Response Card */}
      <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-xl shadow-lg p-8 text-white">
        <h3 className="text-xl font-bold mb-4">Quick Response Guarantee</h3>
        <ul className="space-y-3">
          <li className="flex items-center space-x-3">
            <span className="text-secondary-500 text-xl">✓</span>
            <span>Response within 24 business hours</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-secondary-500 text-xl">✓</span>
            <span>Free initial consultation</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-secondary-500 text-xl">✓</span>
            <span>Expert technical support</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-secondary-500 text-xl">✓</span>
            <span>Australia-wide service</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
