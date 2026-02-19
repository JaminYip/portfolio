"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background: "radial-gradient(ellipse at center, #0a0a0a 0%, #000000 70%)",
      }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <p className="text-text-primary text-lg font-light tracking-wide font-shadows">
          Now Loading
        </p>
        <motion.div
          className="mt-2 mx-auto h-[1px] bg-text-primary"
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <div className="flex justify-center gap-2 mt-4">
          <span className="loading-dot w-1.5 h-1.5 rounded-full bg-accent-pink" />
          <span className="loading-dot w-1.5 h-1.5 rounded-full bg-accent-pink" />
          <span className="loading-dot w-1.5 h-1.5 rounded-full bg-accent-pink" />
        </div>
      </motion.div>
    </motion.div>
  );
}
