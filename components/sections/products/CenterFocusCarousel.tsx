'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CenterFocusCarouselProps {
  images: string[];
  alt: string;
  autoPlayInterval?: number;
}

export default function CenterFocusCarousel({ 
  images, 
  alt,
  autoPlayInterval = 4000 
}: CenterFocusCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return (prevIndex + 1) % images.length;
      } else {
        return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      }
    });
  };

  // Auto-play functionality
  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      paginate(1);
    }, autoPlayInterval);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, autoPlayInterval, images.length]);

  // Get previous and next indices for preview
  const getPrevIndex = (index: number) => {
    return index === 0 ? images.length - 1 : index - 1;
  };

  const getNextIndex = (index: number) => {
    return (index + 1) % images.length;
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.9,
      zIndex: 0
    })
  };

  if (images.length === 0) {
    return null;
  }

  if (images.length === 1) {
    return (
      <div className="relative w-full h-[500px] bg-gray-100 rounded-2xl overflow-hidden">
        <Image
          src={images[0]}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-center gap-4">
        
        {/* Left Preview Image */}
        <motion.div
          className="hidden lg:block relative w-48 h-64 rounded-xl overflow-hidden cursor-pointer opacity-60 hover:opacity-80 transition-opacity"
          onClick={() => paginate(-1)}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={images[getPrevIndex(currentIndex)]}
            alt={`${alt} - Preview`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        {/* Center Main Image with Controls */}
        <div className="relative w-full lg:w-[600px] xl:w-[700px] h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          {/* Image Carousel */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween", ease: "easeInOut", duration: 0.6 },
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 }
              }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex]}
                alt={`${alt} - Image ${currentIndex + 1}`}
                fill
                className="object-cover"
                priority={currentIndex === 0}
              />
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/95 hover:bg-white active:bg-gray-100 rounded-full shadow-xl transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-primary-900" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/95 hover:bg-white active:bg-gray-100 rounded-full shadow-xl transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-primary-900" />
          </button>

          {/* Bottom Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-black/30 backdrop-blur-sm px-4 py-2.5 rounded-full">
            {images.map((_, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'bg-white w-8 h-2.5' 
                    : 'bg-white/50 hover:bg-white/75 w-2.5 h-2.5'
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>

          {/* Image Counter */}
          <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Right Preview Image */}
        <motion.div
          className="hidden lg:block relative w-48 h-64 rounded-xl overflow-hidden cursor-pointer opacity-60 hover:opacity-80 transition-opacity"
          onClick={() => paginate(1)}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={images[getNextIndex(currentIndex)]}
            alt={`${alt} - Preview`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </div>

      {/* Thumbnails Below (Mobile) */}
      <div className="lg:hidden mt-4 flex gap-2 overflow-x-auto pb-2">
        {images.map((img, idx) => (
          <motion.button
            key={idx}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all ${
              idx === currentIndex 
                ? 'ring-2 ring-primary-600 opacity-100' 
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              fill
              className="object-cover"
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
