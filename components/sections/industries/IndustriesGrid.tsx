'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { industryExamples } from '@/content/industries-examples';
import { getIndustryImage } from '@/content/images';
import { cn } from '@/lib/utils';

export default function IndustriesGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industryExamples.map((industry, index) => {
            return (
              <div key={industry.id}>
                {/* <Link
                  href={`/industries/${industry.slug}`}
                  className="group  bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-primary-200 h-full flex flex-col"
                > */}
                <div
                  className="group  bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-primary-200 h-full flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={getIndustryImage(industry.slug)}
                      alt={industry.name}
                      fill
                      className={
                        cn(
                          "object-cover group-hover:scale-105 transition-transform duration-500",
                          industry.name === "Heavy Industry (Steel & Metal)" ? "object-center" : ""
                        )
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3  transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4 flex-1">
                      {industry.seoDescription}
                    </p>

                    {/* CTA */}
                    {/* <span className="inline-flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
                      Learn More
                      <svg
                        className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span> */}
                  </div>
                </div>
                {/* </Link> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
