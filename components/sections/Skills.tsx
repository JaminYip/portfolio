"use client";

import { motion } from "framer-motion";
import { skillStacks, strengths } from "@/lib/skills-data";
import { categoryColors, type SkillCategory } from "@/lib/constants";
import { fadeIn } from "@/lib/animations";
import SkillCard from "./SkillCard";

const categoryIcons: Record<SkillCategory, React.ReactNode> = {
  "Back-end": (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" opacity={0.7}>
      <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H4V7h16v12zM6 10h2v2H6zm0 4h8v2H6zm10 0h2v2h-2zm-6-4h8v2h-8z" />
    </svg>
  ),
  "Front-end": (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" opacity={0.7}>
      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
    </svg>
  ),
  "Infrastructure / DevOps": (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" opacity={0.7}>
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.82-4 4.03-4h.36l.26-.72C7.68 7.32 9.68 6 12 6c2.93 0 5.36 2.16 5.77 5.03l.14.97h.96c1.64 0 3.13 1.28 3.13 3 0 1.66-1.34 3-3 3z" />
    </svg>
  ),
};

export default function Skills() {
  return (
    <motion.section {...fadeIn} className="text-text-secondary">
      <div className="text-center mb-8">
        <h2 className="section-heading text-lg font-light tracking-[4px]">
          SKILLS
        </h2>
        <p className="text-[10px] font-light tracking-wider mt-1">
          - 技術スタックと実績 -
        </p>
      </div>

      <div className="space-y-8">
        {skillStacks.map((stack) => {
          const color = categoryColors[stack.category] || "#b2dfdb";
          const icon = categoryIcons[stack.category];
          return (
            <div key={stack.category}>
              <h3 className="text-sm font-light tracking-[3px] mb-3 flex items-center gap-2" style={{ color }}>
                {icon}
                {stack.category}
              </h3>
              <div className="space-y-2">
                {stack.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    accentColor={color}
                  />
                ))}
              </div>
            </div>
          );
        })}

        {/* Strengths */}
        <div>
          <h3 className="text-sm font-light tracking-[3px] mb-3 flex items-center gap-2 text-accent-light-pink">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" />
            </svg>
            Strengths
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {strengths.map((s) => (
              <div
                key={s.label}
                className="bg-surface border border-surface-border rounded-lg p-4 hover-glow"
              >
                <p className="text-sm text-text-primary font-medium mb-1">
                  {s.label}
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
