"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SocialLinks from "../SocialLinks";
import { TOP_IMAGE_COUNT } from "@/lib/constants";

const images = Array.from({ length: TOP_IMAGE_COUNT }, (_, i) => `/images/top${i + 1}.jpg`);
const sections = ["ABOUT", "SKILLS", "WORK"];

interface NavBarProps {
  onNavigate: (section: string) => void;
}

export function NavBar({ onNavigate }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = useCallback(
    (section: string) => {
      setMenuOpen(false);
      onNavigate(section);
    },
    [onNavigate]
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Desktop toolbar */}
        <div className="hidden md:flex items-center justify-end pt-5 px-4">
          {sections.map((s) => (
            <span
              key={s}
              onClick={() => handleNav(s.toLowerCase())}
              className="group relative mx-3 mt-5 text-xs font-light tracking-wider text-text-primary cursor-pointer select-none transition-all duration-500 hover:text-accent-pink hover:scale-110 text-shadow-dark"
            >
              {s}
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-accent-pink transition-all duration-500 group-hover:w-full" />
            </span>
          ))}
          <div className="ml-6 mt-7 scale-[0.8]">
            <SocialLinks variant="nav" />
          </div>
        </div>

        {/* Mobile toolbar */}
        <div className="flex md:hidden items-center justify-between px-4 py-2">
          <span className="text-base font-light text-text-primary tracking-wider">
            JAMIN YIP
          </span>
          <button
            onClick={() => setMenuOpen(true)}
            className="text-text-primary p-1 text-shadow-dark"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-text-muted flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-text-primary text-shadow-dark"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-10">
              {sections.map((s) => (
                <span
                  key={s}
                  onClick={() => handleNav(s.toLowerCase())}
                  className="text-[22px] font-light tracking-widest text-text-primary cursor-pointer select-none"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mb-4 scale-[0.8]">
              <SocialLinks variant="nav" />
            </div>
            <p className="text-center text-text-primary text-xs font-light mb-4">
              &copy; {new Date().getFullYear()} Jamin Yip.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

interface TopProps {
  onNavigate: (section: string) => void;
}

export default function Top({ onNavigate }: TopProps) {
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
      if (count > 4) {
        setFade(false);
        isFade = false;
        count = 0;
      }
    }, 1500);
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
            className="text-[30px] font-light text-text-primary tracking-wider whitespace-nowrap"
            style={{
              fontFamily: "'Shadows Into Light', cursive",
              textShadow: "0 0 20px rgba(178, 223, 219, 0.3), 0 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            JAMIN YIP
          </span>
        </motion.div>

        {/* Image carousel */}
        <div className="flex-1 flex justify-end md:mt-[15px] relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={imageIndex}
              className="w-full relative"
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
                className="w-full h-full object-cover relative top-0"
                sizes="(max-width: 768px) 100vw, (max-width: 1920px) 100vw, 1920px"
                priority={imageIndex === 0}
              />
              {/* Bottom fade overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.8) 100%)",
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile scroll-to-top button */}
      <div className="fixed bottom-4 right-2 z-40 md:hidden">
        <button
          onClick={() => onNavigate("top")}
          className="text-text-primary text-shadow-dark"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
          </svg>
        </button>
      </div>
    </>
  );
}
