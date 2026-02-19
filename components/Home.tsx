"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Work from "./sections/Work";
import { colors } from "@/lib/constants";
import { useScrollNav } from "@/hooks/useScrollNav";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);

  const refs = useMemo<Record<string, React.RefObject<HTMLDivElement | null>>>(() => ({
    top: topRef,
    about: aboutRef,
    skills: skillsRef,
    work: workRef,
  }), []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: workRef, color: colors.base },
        { ref: skillsRef, color: colors.sectionSkills },
        { ref: aboutRef, color: colors.sectionAbout },
      ];

      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= 1) {
            document.body.style.backgroundColor = section.color;
            return;
          }
        }
      }
      document.body.style.backgroundColor = colors.base;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = useScrollNav(refs);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Sticky NavBar - at top level so sticky context covers full page */}
      <nav className="sticky top-0 z-40 w-full max-w-[1920px] px-[3vmin]">
        <NavBar onNavigate={handleNavigate} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </nav>

      {/* Top hero: full width up to 1920px (matching old MUI xl container) */}
      <div className="w-full max-w-[1920px] px-[3vmin]">
        <div ref={topRef} />
        <Hero onNavigate={handleNavigate} menuOpen={menuOpen} />
      </div>

      {/* Spacer between Top and About */}
      <div className="w-full max-w-[960px] px-4 py-16 sm:py-[100px]">
        <div ref={aboutRef} />
      </div>

      {/* About: 960px centered */}
      <div className="w-full max-w-[960px] px-4">
        <About />
      </div>

      <div className="w-full max-w-[960px] px-4 py-16 sm:py-[100px]">
        <div ref={skillsRef} />
        <div className="section-divider" />
      </div>

      {/* Skills: 960px centered */}
      <div className="w-full max-w-[960px] px-4">
        <Skills />
      </div>

      <div className="w-full max-w-[960px] px-4 py-16 sm:py-[100px]">
        <div ref={workRef} />
        <div className="section-divider" />
      </div>

      {/* Work: 960px centered */}
      <div className="w-full max-w-[960px] px-4">
        <Work />
      </div>

      {/* Footer */}
      <div className="w-full max-w-[960px] px-4">
        <div className="h-[35vh] sm:h-[30vh]" />
        <div className="text-center pb-8">
          <p className="text-text-muted text-[11px] font-light">
            &copy; {new Date().getFullYear()} Jamin Yip.
          </p>
        </div>
      </div>
    </div>
  );
}
