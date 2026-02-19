"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { SkillEntry } from "@/lib/skills-data";

export default function SkillCard({
  skill,
  accentColor,
}: {
  skill: SkillEntry;
  accentColor: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-surface rounded-lg overflow-hidden border border-surface-border transition-all duration-300 hover:border-surface-border-hover"
      style={{ borderLeftWidth: 3, borderLeftColor: accentColor }}
    >
      <button
        className="w-full text-left p-4 flex items-start justify-between gap-3 transition-colors hover:bg-surface-hover cursor-pointer"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <h4 className="text-base font-medium text-text-primary">{skill.name}</h4>
            <span
              className="text-xs font-medium px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: `${accentColor}18`,
                color: accentColor,
                border: `1px solid ${accentColor}40`,
              }}
            >
              {skill.years}
            </span>
          </div>
          <p className="text-sm text-text-muted mt-1.5 leading-relaxed">
            {skill.summary}
          </p>
        </div>
        <svg
          className={`w-4 h-4 text-[#666] shrink-0 mt-1 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
        </svg>
      </button>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="px-4 pb-4"
        >
          <ul className="space-y-1">
            {skill.details.map((d, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                className="text-sm text-text-detail flex items-start gap-2 leading-relaxed"
              >
                <span className="mt-0.5 shrink-0" style={{ color: accentColor }}>
                  ▸
                </span>
                {d}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
}
