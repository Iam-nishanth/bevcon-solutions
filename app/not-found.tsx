'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Package, Building2, Mail, ArrowLeft } from 'lucide-react';
import Header from '@/components/layout/Header';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center w-full">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-[120px] sm:text-[140px] md:text-[160px] font-bold leading-none">
            <span className="bg-gradient-to-r from-primary-600 via-primary-900 to-accent-500 bg-clip-text text-transparent">
              404
            </span>
          </h1>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto px-4">
            The page you&apos;re looking for seems to have moved or doesn&apos;t exist. Let us help you find what you need.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center space-x-2 px-8 py-3 bg-primary-900 hover:bg-primary-800 text-white font-semibold rounded-lg transition-colors shadow-md"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center space-x-2 px-8 py-3 bg-white border-2 border-gray-300 hover:border-primary-900 hover:bg-primary-50 text-gray-900 font-semibold rounded-lg transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Quick Links</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {/* Home */}
            <Link
              href="/"
              className="group bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-primary-200"
            >
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-primary-100 transition-colors">
                <Home className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Home</h4>
              <p className="text-sm text-gray-600">Return to homepage</p>
            </Link>

            {/* Products */}
            <Link
              href="/products"
              className="group bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-primary-200"
            >
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-primary-100 transition-colors">
                <Package className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Products</h4>
              <p className="text-sm text-gray-600">Browse our catalog</p>
            </Link>

            {/* Industries */}
            <Link
              href="/industries"
              className="group bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-primary-200"
            >
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-primary-100 transition-colors">
                <Building2 className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Industries</h4>
              <p className="text-sm text-gray-600">See who we serve</p>
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className="group bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-primary-200"
            >
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-primary-100 transition-colors">
                <Mail className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Contact</h4>
              <p className="text-sm text-gray-600">Get in touch</p>
            </Link>
          </div>
        </motion.div>
        </div>
      </div>
    </div>
  );
}
