'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResourceDownloadProps {
  title: string;
  description: string;
  fileUrl: string;
  fileName: string;
  fileSize?: string;
  variant?: 'default' | 'compact' | 'inline';
  className?: string;
}

export default function ResourceDownload({
  title,
  description,
  fileUrl,
  fileName,
  variant = 'default',
  className
}: ResourceDownloadProps) {
  const handleDownload = () => {
    // Check if it's an external URL (like Proton Drive)
    if (fileUrl.startsWith('http://') || fileUrl.startsWith('https://')) {
      // Open external links in new tab
      window.open(fileUrl, '_blank', 'noopener,noreferrer');
    } else {
      // Handle local files with download attribute
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (variant === 'inline') {
    return (
      <motion.button
        onClick={handleDownload}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-sm font-medium",
          className
        )}
      >
        <Download className="w-4 h-4" />
        <span>Download Brochure</span>
      </motion.button>
    );
  }

  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn(
          "bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200 rounded-lg p-4",
          className
        )}
      >
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-gray-900 text-sm mb-1">{title}</h4>
            <p className="text-gray-600 text-xs mb-3">{description}</p>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 text-xs font-medium transition-colors"
            >
              <Download className="w-3 h-3" />
              Download Brochure
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
          <FileText className="w-6 h-6 text-primary-600" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <div className="flex items-center gap-3">
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              Download Brochure
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
