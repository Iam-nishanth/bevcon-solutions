'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Building2, ClipboardList, Package, FileText } from 'lucide-react';

const INDUSTRIES = [
  'Pharmaceutical & Life Sciences',
  'Food Processing & Beverages',
  'Automotive & Mobility',
  'Heavy Industry (Steel & Metal)',
  'Manufacturing Plants',
  'Cold Storage & Warehousing',
  'Warehouse & Logistics',
  'E-commerce & Fulfillment',
  'Cargo & Freight Hubs',
  'Airport & Transportation',
  'Chemical & Process Industries',
  'Textile & Garment Manufacturing',
  'Agriculture & Dairy',
  'Retail & Shopping Centers',
  'Healthcare Facilities',
  'Other',
];

const TIMELINES = [
  'Immediate (< 1 month)',
  '1-3 months',
  '3-6 months',
  '6+ months',
  'Not sure yet',
];

const BUDGET_RANGES = [
  'Under $50,000',
  '$50,000 - $100,000',
  '$100,000 - $250,000',
  '$250,000 - $500,000',
  'Over $500,000',
  'Prefer not to disclose',
];

const PRODUCT_CATEGORIES = [
  'High-Speed Doors',
  'Fire Rated Shutters',
  'Docking Equipment / Dock Levellers',
  'Conveyor Components',
  'Crushing Equipment',
  'Material Handling Solutions',
];

const HEAR_ABOUT_US = [
  'Google Search',
  'Referral',
  'Social Media',
  'Industry Event',
  'Existing Customer',
  'Other',
];

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    industry: '',
    otherIndustry: '',
    
    // Project Details
    projectTitle: '',
    projectLocation: '',
    timeline: '',
    budget: '',
    
    // Product Interest
    productCategories: [] as string[],
    specificRequirements: '',
    
    // Additional Information
    hearAboutUs: '',
    additionalNotes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCheckboxChange = (category: string) => {
    setFormData(prev => ({
      ...prev,
      productCategories: prev.productCategories.includes(category)
        ? prev.productCategories.filter(c => c !== category)
        : [...prev.productCategories, category]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');

        // Reset form
        setFormData({
          companyName: '',
          contactPerson: '',
          email: '',
          phone: '',
          industry: '',
          otherIndustry: '',
          projectTitle: '',
          projectLocation: '',
          timeline: '',
          budget: '',
          productCategories: [],
          specificRequirements: '',
          hearAboutUs: '',
          additionalNotes: '',
        });

        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSubmitStatus('error');
        console.error('Quote submission error:', result.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Success Message */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-xl text-green-800"
            >
              <h3 className="text-lg md:text-xl font-bold mb-2">✓ Quote Request Submitted Successfully!</h3>
              <p>Thank you for your interest. Our team will review your requirements and get back to you within 24 hours with a detailed quote.</p>
            </motion.div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-6 bg-red-50 border-2 border-red-200 rounded-xl text-red-800"
            >
              <h3 className="text-lg md:text-xl font-bold mb-2">⚠️ Submission Error</h3>
              <p>Sorry, there was an error submitting your quote request. Please try again or contact us directly.</p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-4 md:p-8 "
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Section 1: Company Information */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-primary-900 rounded-lg flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-primary-900 flex items-center space-x-2">
                      <Building2 className="w-5 h-5 md:w-6 md:h-6" />
                      <span>Company Information</span>
                    </h2>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your Company Pty Ltd"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactPerson" className="block text-sm font-semibold text-gray-700 mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      id="contactPerson"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="john.smith@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="+61 4XX XXX XXX"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 mb-2">
                      Industry Type *
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 0.75rem center',
                        backgroundSize: '1.25rem'
                      }}
                    >
                      <option value="">Select your industry</option>
                      {INDUSTRIES.map(industry => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>

                  {/* Other Industry Input */}
                  {formData.industry === 'Other' && (
                    <div className="md:col-span-2">
                      <label htmlFor="otherIndustry" className="block text-sm font-semibold text-gray-700 mb-2">
                        Please specify your industry *
                      </label>
                      <input
                        type="text"
                        id="otherIndustry"
                        name="otherIndustry"
                        value={formData.otherIndustry}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your industry"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Section 2: Project Details */}
              <div className="border-t pt-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-primary-900 rounded-lg flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-primary-900 flex items-center space-x-2">
                      <ClipboardList className="w-5 h-5 md:w-6 md:h-6" />
                      <span>Project Details</span>
                    </h2>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectTitle" className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Title
                    </label>
                    <input
                      type="text"
                      id="projectTitle"
                      name="projectTitle"
                      value={formData.projectTitle}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Warehouse Automation Project"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectLocation" className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Location
                    </label>
                    <input
                      type="text"
                      id="projectLocation"
                      name="projectLocation"
                      value={formData.projectLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Sydney, NSW"
                    />
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Timeline *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 0.75rem center',
                        backgroundSize: '1.25rem'
                      }}
                    >
                      <option value="">Select timeline</option>
                      {TIMELINES.map(timeline => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                      Budget Range (Optional)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 0.75rem center',
                        backgroundSize: '1.25rem'
                      }}
                    >
                      <option value="">Select budget range</option>
                      {BUDGET_RANGES.map(range => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 3: Product/Solution Interest */}
              <div className="border-t pt-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-primary-900 rounded-lg flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-primary-900 flex items-center space-x-2">
                      <Package className="w-5 h-5 md:w-6 md:h-6" />
                      <span>Product/Solution Interest</span>
                    </h2>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Product Categories (Select all that apply)
                    </label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {PRODUCT_CATEGORIES.map(category => (
                        <label
                          key={category}
                          className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={formData.productCategories.includes(category)}
                            onChange={() => handleCheckboxChange(category)}
                            className="w-5 h-5 text-primary-600 rounded focus:ring-2 focus:ring-primary-500"
                          />
                          <span className="text-gray-700">{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="specificRequirements" className="block text-sm font-semibold text-gray-700 mb-2">
                      Specific Requirements *
                    </label>
                    <textarea
                      id="specificRequirements"
                      name="specificRequirements"
                      value={formData.specificRequirements}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Please describe your project requirements, specifications, quantity needed, special features, etc..."
                    />
                  </div>
                </div>
              </div>

              {/* Section 4: Additional Information */}
              <div className="border-t pt-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-primary-900 rounded-lg flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-primary-900 flex items-center space-x-2">
                      <FileText className="w-5 h-5 md:w-6 md:h-6" />
                      <span>Additional Information</span>
                    </h2>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="hearAboutUs" className="block text-sm font-semibold text-gray-700 mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      id="hearAboutUs"
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 0.75rem center',
                        backgroundSize: '1.25rem'
                      }}
                    >
                      <option value="">Select an option</option>
                      {HEAR_ABOUT_US.map(source => (
                        <option key={source} value={source}>{source}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="additionalNotes" className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Any other information you'd like to share..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="border-t pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-secondary-500 hover:bg-secondary-600 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-all disabled:hover:scale-100 shadow-md flex items-center justify-center space-x-2 text-base md:text-lg"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Submit Quote Request</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  By submitting this form, you agree to our terms and privacy policy
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
