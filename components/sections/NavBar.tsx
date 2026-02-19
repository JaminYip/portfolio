"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SocialLinks from "../SocialLinks";
import { SECTION_NAMES } from "@/lib/constants";

interface NavBarProps {
  onNavigate: (section: string) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function NavBar({ onNavigate, menuOpen, setMenuOpen }: NavBarProps) {
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch("ontouchstart" in window);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNav = useCallback(
    (section: string) => {
      setActiveNav(section);
      setMenuOpen(false);
      onNavigate(section);
    },
    [onNavigate, setMenuOpen]
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Desktop toolbar */}
        <div className="hidden md:flex items-center justify-end pt-5 pb-2 pr-[5%]">
          {SECTION_NAMES.map((s) => (
            <button
              key={s}
              onClick={() => handleNav(s.toLowerCase())}
              className={`group relative mx-3 mt-9 text-xs font-light tracking-[0.2em] cursor-pointer select-none transition-all duration-500 hover:text-accent-pink hover:scale-110 text-shadow-dark bg-transparent border-none ${isTouch && activeNav === s.toLowerCase() ? "text-accent-pink" : "text-text-primary"}`}
            >
              {s}
              {!isTouch && (
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-accent-pink transition-all duration-500 group-hover:w-full" />
              )}
            </button>
          ))}
          <div className="ml-8 mt-9 scale-[0.7]">
            <SocialLinks />
          </div>
        </div>

        {/* Mobile toolbar */}
        <div className="flex md:hidden items-center justify-end pr-0 pl-1 py-2">
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="メニューを開く"
            aria-expanded={menuOpen}
            className="text-text-primary p-2 text-shadow-dark"
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
            <div className="flex justify-end px-4 py-2">
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="メニューを閉じる"
                className="text-text-primary p-2 text-shadow-dark"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-10">
              {SECTION_NAMES.map((s) => (
                <button
                  key={s}
                  onClick={() => handleNav(s.toLowerCase())}
                  className="text-[22px] font-light tracking-widest text-text-primary cursor-pointer select-none bg-transparent border-none"
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="mb-4 flex justify-center scale-[0.8]">
              <SocialLinks />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
