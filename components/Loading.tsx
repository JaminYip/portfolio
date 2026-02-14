"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LOADING_EXIT_MS } from "@/lib/constants";

export default function Loading() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), LOADING_EXIT_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background: "radial-gradient(ellipse at center, #0a0a0a 0%, #000000 70%)",
      }}
    >
      <AnimatePresence>
        {visible && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <p
              className="text-text-primary text-lg font-light tracking-wide"
              style={{ fontFamily: "'Shadows Into Light', cursive" }}
            >
              Now Loading
            </p>
            <motion.div
              className="mt-2 mx-auto h-[1px] bg-text-primary"
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <div className="flex justify-center gap-2 mt-4">
              <span className="loading-dot w-1.5 h-1.5 rounded-full bg-accent-teal" />
              <span className="loading-dot w-1.5 h-1.5 rounded-full bg-accent-teal" />
              <span className="loading-dot w-1.5 h-1.5 rounded-full bg-accent-teal" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
