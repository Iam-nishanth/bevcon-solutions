'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductImageCarouselProps {
  images: string[];
  alt: string;
  autoPlayInterval?: number;
}

export default function ProductImageCarousel({ 
  images, 
  alt,
  autoPlayInterval = 5000 
}: ProductImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Paginate function
  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
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
  }, [currentIndex, autoPlayInterval]);

  // Animation variants with proper slide direction
  const slideVariants = {
    enter: (dir: number) => {
      return {
        x: dir > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.98
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (dir: number) => {
      return {
        zIndex: 0,
        x: dir < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.98
      };
    }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  // Carousel component with enhanced animations
  const Carousel = () => {
    const canGoPrev = images.length > 1;
    const canGoNext = images.length > 1;

    return (
      <div className="relative h-80 bg-gray-100 rounded-lg overflow-hidden border border-gray-200 group">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", ease: "easeInOut", duration: 0.5 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 }
            }}
            drag={images.length > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
            style={{ position: 'absolute' }}
          >
            <Image
              src={images[currentIndex]}
              alt={`${alt} - Image ${currentIndex + 1}`}
              fill
              className="object-cover select-none pointer-events-none"
              priority
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>

        {/* Left Arrow - Only show if more than 1 image */}
        {images.length > 1 && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            disabled={!canGoPrev}
            className={`absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 p-1.5 sm:p-2 rounded-full shadow-lg transition-all duration-300 ${
              canGoPrev
                ? 'bg-white/95 hover:bg-white text-primary-900 opacity-0 group-hover:opacity-100 cursor-pointer'
                : 'bg-gray-300/50 text-gray-400 cursor-not-allowed opacity-50'
            }`}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        )}

        {/* Right Arrow - Only show if more than 1 image */}
        {images.length > 1 && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            disabled={!canGoNext}
            className={`absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 p-1.5 sm:p-2 rounded-full shadow-lg transition-all duration-300 ${
              canGoNext
                ? 'bg-white/95 hover:bg-white text-primary-900 opacity-0 group-hover:opacity-100 cursor-pointer'
                : 'bg-gray-300/50 text-gray-400 cursor-not-allowed opacity-50'
            }`}
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        )}

        {/* Dots Indicator - Only show if more than 1 image */}
        {images.length > 1 && (
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 sm:gap-2 bg-black/20 backdrop-blur-sm px-3 py-2 rounded-full">
            {images.map((_, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'bg-white w-5 sm:w-6 h-2' 
                    : 'bg-white/60 hover:bg-white/80 w-2 h-2'
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute top-3 right-3 z-20 bg-black/40 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    );
  };

  // If no images, return null
  if (images.length === 0) {
    return null;
  }

  // If only 1 image, show static image
  if (images.length === 1) {
    return (
      <div className="relative h-80 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
        <Image
          src={images[0]}
          alt={alt}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    );
  }

  // If exactly 2 images, show carousel on mobile/tablet, grid on desktop
  if (images.length === 2) {
    // On mobile and tablet, use carousel behavior
    // On desktop (lg and above), show side-by-side grid
    return (
      <>
        {/* Desktop: Side-by-side grid */}
        <div className="hidden lg:grid grid-cols-2 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="relative h-80 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
              <Image
                src={img}
                alt={`${alt} - Image ${idx + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        
        {/* Mobile/Tablet: Carousel */}
        <div className="lg:hidden">
          <Carousel />
        </div>
      </>
    );
  }

  // For 3+ images, show carousel with auto-play
  return <Carousel />;
}
