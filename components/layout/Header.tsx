'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { mainNavigation } from '@/content/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Utility Bar */}
      <div className="bg-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-2 text-sm">
            {/* Left Section - empty for minimal design */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Minimal top bar - no links */}
            </div>

            {/* Right Section - empty */}
            <div className="flex items-center space-x-6">
              {/* Removed phone and location */}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <motion.div
        className={`bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-lg border-b border-gray-200' : 'shadow-sm'
        }`}
        initial={false}
        animate={{ y: 0 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 py-3">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/bevcon-solutions-logo.svg"
                alt="Bevcon Solutions"
                width={200}
                height={50}
                priority
                quality={100}
                className="w-36 sm:w-32 md:w-36 lg:w-48 h-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {mainNavigation.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.megaMenu && setActiveMenu(item.label)}
                  onMouseLeave={() => {
                    setActiveMenu(null);
                    setActiveCategory(null);
                  }}
                >
                  {item.megaMenu ? (
                    <button
                      type="button"
                      className="text-gray-800 hover:text-primary-600 font-medium transition-colors py-2 flex items-center space-x-1"
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          activeMenu === item.label ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-800 hover:text-primary-600 font-medium transition-colors py-2 flex items-center space-x-1"
                    >
                      <span>{item.label}</span>
                    </Link>
                  )}

                  {/* Two-Level Mega Menu Dropdown */}
                  {item.megaMenu && activeMenu === item.label && (
                    <div className="absolute top-full left-0 -translate-x-1/3 pt-4 z-50">
                      {item.twoLevelMenu ? (
                        <div className="relative">
                          {/* Level 1: Main Categories */}
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className={`bg-white shadow-2xl border border-gray-200 w-[380px] transition-all duration-200 ${
                              activeCategory 
                                ? 'rounded-l-lg border-r-0' 
                                : 'rounded-lg'
                            }`}
                          >
                            <div className="p-8 min-h-[420px] flex flex-col">
                              {item.megaMenu.map((section, idx) => (
                                <div key={idx}>
                                  {section.type === 'overview' ? (
                                    <div className="mb-6">
                                      <Link href={section.href || item.href} className="group block">
                                        <h3 className="font-heading font-bold text-gray-900 mb-2 text-lg flex items-center space-x-2 group-hover:text-primary-600 transition-colors">
                                          <span>{section.title}</span>
                                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                          </svg>
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                          {section.description}
                                        </p>
                                      </Link>
                                    </div>
                                  ) : section.expandable ? (
                                    <button
                                      key={idx}
                                      onMouseEnter={() => setActiveCategory(section.title)}
                                      className={`w-full text-left py-3 px-4 rounded-lg transition-all group ${
                                        activeCategory === section.title
                                          ? 'bg-primary-900 text-white'
                                          : 'hover:bg-gray-100 text-gray-700'
                                      }`}
                                    >
                                      <div className="flex items-center justify-between">
                                        <span className="font-medium">{section.title}</span>
                                        <svg
                                          className={`w-4 h-4 transition-transform ${
                                            activeCategory === section.title ? 'text-white' : 'text-gray-400'
                                          }`}
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                      </div>
                                    </button>
                                  ) : null}
                                </div>
                              ))}
                            </div>
                          </motion.div>

                          {/* Level 2: Category Details */}
                          <AnimatePresence mode="wait">
                            {activeCategory && (
                              <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-0 left-full bg-white rounded-r-lg shadow-2xl border border-gray-200 border-l-0 w-[420px] p-8 min-h-[420px] flex flex-col"
                              >
                                {item.megaMenu
                                  .filter((section) => section.title === activeCategory)
                                  .map((section, idx) => (
                                    <div key={idx}>
                                      <h3 className="font-heading font-bold text-primary-900 mb-6 text-lg">
                                        {section.title}
                                      </h3>
                                      {section.subItems && (
                                        <ul className="space-y-1">
                                          {section.subItems.map((subItem, subIdx) => (
                                            <li key={subIdx}>
                                              <Link
                                                href={subItem.href}
                                                className="text-gray-700 hover:text-primary-600 hover:bg-primary-50 text-sm transition-colors block py-2 px-3 rounded"
                                              >
                                                {subItem.label}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      )}
                                    </div>
                                  ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        // Original single-level mega menu for Products, Industries, etc.
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="bg-white rounded-lg shadow-2xl border border-gray-200 p-8 grid grid-cols-3 gap-8 w-[900px]"
                        >
                          {item.megaMenu.map((section, idx) => (
                            <div key={idx}>
                              <h3 className="font-heading font-semibold text-gray-900 mb-4">
                                {section.title}
                              </h3>
                              {section.description && (
                                <p className="text-sm text-gray-600 mb-4">
                                  {section.description}
                                </p>
                              )}
                              {section.items && (
                                <ul className="space-y-2">
                                  {section.items.map((menuItem, itemIdx) => (
                                    <li key={`${menuItem.href}-${itemIdx}`}>
                                      {menuItem.href ? (
                                        <Link
                                          href={menuItem.href}
                                          className="text-gray-700 hover:text-primary-600 hover:bg-primary-50 text-sm transition-colors block py-1.5 px-2 rounded"
                                        >
                                          {menuItem.label}
                                        </Link>
                                      ) : (
                                        <div className="text-gray-900 font-semibold text-sm py-1.5 px-2 border-t border-gray-200 mt-2 first:border-t-0 first:mt-0 first:pt-0">
                                          {menuItem.label}
                                        </div>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              <Link
                href="/quote"
                className="hidden md:inline-flex px-6 py-2.5 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-lg transition-colors shadow-sm"
              >
                Request Quote
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-4">
                {mainNavigation.map((item) => (
                  item.megaMenu ? (
                    <div key={item.href} className="space-y-2">
                      <div className="text-gray-800 font-semibold py-3 px-4">
                        {item.label}
                      </div>
                      {item.megaMenu.map((section, idx) => (
                        <div key={idx} className="pl-4">
                          {section.items && section.items.map((menuItem, itemIdx) => (
                            menuItem.href ? (
                              <Link
                                key={`${menuItem.href}-${itemIdx}`}
                                href={menuItem.href}
                                className="block text-gray-700 hover:text-primary-600 hover:bg-primary-50 text-sm py-2 px-4 rounded-lg transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {menuItem.label}
                              </Link>
                            ) : null
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-gray-800 hover:text-primary-600 hover:bg-primary-50 font-medium py-3 px-4 rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
