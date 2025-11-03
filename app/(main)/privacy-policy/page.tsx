import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Bevcon Solutions',
  description: 'Privacy Policy for Bevcon Solutions - Learn how we collect, use, and protect your personal information in accordance with Australian Privacy Principles.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4 py-28">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: November 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Company Info */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <p className="text-gray-700 mb-2">
                <strong>Bevcon Solutions Pty Ltd</strong> (ABN 35 691 530 533)
              </p>
              <p className="text-gray-700">
                Website:{' '}
                <a 
                  href="https://bevconsolutions.au" 
                  className="text-primary-600 hover:text-primary-700 transition-colors"
                >
                  https://bevconsolutions.au
                </a>
              </p>
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Bevcon Solutions ("we", "our", "us") respects your privacy and is committed to protecting your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website or contact us.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Information We Collect
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect the following personal information when you submit an enquiry or contact form on our website:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Your name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We do not collect sensitive information or payment details through our website.
              </p>
            </section>

            {/* How We Collect Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. How We Collect Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect personal information directly from you when you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Submit an enquiry or contact form</li>
                <li>Communicate with us by email or phone</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Our website may use basic server caching to improve load performance, but we do not use cookies, analytics tools, or tracking technologies to collect user data.
              </p>
            </section>

            {/* Purpose of Collection */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Purpose of Collection
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect personal information solely for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>To respond to your enquiries and provide information about our products and services</li>
                <li>To manage business relationships and communication with clients and industry partners</li>
                <li>To improve customer service and communication efficiency</li>
              </ul>
            </section>

            {/* Storage and Security */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Storage and Security
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We take reasonable steps to ensure your personal information is stored securely and protected from unauthorised access, misuse, or disclosure.
                Information is stored on secure systems accessible only by authorised personnel.
              </p>
            </section>

            {/* Disclosure of Personal Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Disclosure of Personal Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We do not share, sell, or rent your personal information to any third party.
                Your information may only be disclosed if required by law or if necessary to prevent a serious threat to health or safety.
              </p>
            </section>

            {/* Overseas Disclosure */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Overseas Disclosure
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Bevcon Solutions does not currently store or transfer any personal information outside Australia.
              </p>
            </section>

            {/* Access and Correction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Access and Correction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                You have the right to access the personal information we hold about you and to request corrections if it is inaccurate or out of date.
                To make such a request, please contact us using the details below.
              </p>
            </section>

            {/* Data Retention */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Data Retention
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your information only as long as necessary to fulfil the purposes outlined in this policy or as required by law.
              </p>
            </section>

            {/* Contact Us */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions, concerns, or complaints about this Privacy Policy or how we handle your personal information, please contact us at:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-900 font-semibold mb-2">Bevcon Solutions Pty Ltd</p>
                <p className="text-gray-700 mb-1">
                  Email:{' '}
                  <a 
                    href="mailto:info@bevconsolutions.au" 
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    info@bevconsolutions.au
                  </a>
                </p>
                <p className="text-gray-700">
                  Website:{' '}
                  <a 
                    href="https://bevconsolutions.au" 
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    https://bevconsolutions.au
                  </a>
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                We will respond to your enquiry as soon as reasonably practicable.
              </p>
            </section>

            {/* Updates to This Policy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. Updates to This Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.
                Any updates will be published on this page with a revised "Last updated" date.
              </p>
            </section>

            {/* Back to Home */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link 
                href="/" 
                className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors font-medium"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                  />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
