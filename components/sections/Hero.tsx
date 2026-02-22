"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TOP_IMAGE_COUNT, CAROUSEL_INTERVAL_MS, CAROUSEL_FADE_CYCLES } from "@/lib/constants";

const images = Array.from({ length: TOP_IMAGE_COUNT }, (_, i) => `/images/top${i + 1}.jpg`);

interface HeroProps {
  onNavigate: (section: string) => void;
  menuOpen: boolean;
}

export default function Hero({ onNavigate, menuOpen }: HeroProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    let count = 0;
    let isFade = true;
    const interval = setInterval(() => {
      count++;
      if (count === 1 && !isFade) {
        setImageIndex((prev) => (prev + 1) % images.length);
        setFade(true);
        isFade = true;
        count = 0;
      }
      if (count > CAROUSEL_FADE_CYCLES) {
        setFade(false);
        isFade = false;
        count = 0;
      }
    }, CAROUSEL_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero image carousel + author name */}
      <div className="flex items-center">
        {/* Author name rotated (desktop) */}
        <motion.div
          className="hidden md:flex items-center h-[50px] shrink-0"
          style={{ transform: "rotate(90deg)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: fade ? 1 : 0 }}
          transition={{ duration: fade ? 2 : 1.5 }}
        >
          <span
            className="text-[30px] font-light text-text-primary tracking-wider whitespace-nowrap font-shadows"
            style={{
              textShadow: "0 0 20px rgba(178, 223, 219, 0.3), 0 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            JAMIN YIP
          </span>
        </motion.div>

        {/* Image carousel */}
        <div className="flex-1 flex justify-end md:mt-[20px] relative overflow-hidden aspect-[1920/1080]">
          <AnimatePresence>
            <motion.div
              key={imageIndex}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: fade ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: fade ? 2 : 1.5 }}
            >
              <Image
                src={images[imageIndex]}
                alt="トップ画像"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1920px) 100vw, 1920px"
                priority={imageIndex === 0}
              />
              {/* Bottom fade overlay */}
              <div className="overlay-fade-bottom" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile scroll-to-top button (hidden when menu is open) */}
      {!menuOpen && (
        <button
          className="fixed bottom-4 right-2 z-40 md:hidden text-text-primary text-shadow-dark p-2"
          aria-label="ページトップへ戻る"
          onTouchStart={(e) => {
            e.preventDefault();
            onNavigate("top");
          }}
          onClick={() => onNavigate("top")}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
          </svg>
        </button>
      )}
    </>
  );
}
