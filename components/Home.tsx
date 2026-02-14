"use client";

import { useRef, useEffect, useCallback } from "react";
import Top, { NavBar } from "./sections/Top";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Work from "./sections/Work";
import SocialLinks from "./SocialLinks";
import { colors } from "@/lib/constants";

export default function Home() {
  const topRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);

  const refs: Record<string, React.RefObject<HTMLDivElement | null>> = {
    top: topRef,
    about: aboutRef,
    skills: skillsRef,
    work: workRef,
  };

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

  const handleNavigate = useCallback((section: string) => {
    const ref = refs[section];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Sticky NavBar - at top level so sticky context covers full page */}
      <nav className="sticky top-0 z-40 w-full max-w-[1920px] px-[3vmin]">
        <NavBar onNavigate={handleNavigate} />
      </nav>

      {/* Top hero: full width up to 1920px (matching old MUI xl container) */}
      <div className="w-full max-w-[1920px] px-[3vmin]">
        <div ref={topRef} />
        <Top onNavigate={handleNavigate} />
      </div>

      {/* Section divider */}
      <div className="w-full max-w-[960px] px-4 py-10 sm:py-[70px]">
        <div className="section-divider" />
      </div>

      {/* About: 960px centered */}
      <div className="w-full max-w-[960px] px-4">
        <div ref={aboutRef} />
        <About />
      </div>

      <div className="w-full max-w-[960px] px-4 py-10 sm:py-[70px]">
        <div className="section-divider" />
      </div>

      {/* Skills: 960px centered */}
      <div className="w-full max-w-[960px] px-4">
        <div ref={skillsRef} />
        <Skills />
      </div>

      <div className="w-full max-w-[960px] px-4 py-10 sm:py-[70px]">
        <div className="section-divider" />
      </div>

      {/* Work: 960px centered */}
      <div className="w-full max-w-[960px] px-4">
        <div ref={workRef} />
        <Work />
      </div>

      {/* Footer */}
      <div className="w-full max-w-[960px] px-4">
        <div className="h-24 xl:h-48" />
        <div className="hidden sm:block text-center pb-8">
          <div className="mb-3">
            <SocialLinks variant="footer" />
          </div>
          <p className="text-text-muted text-[11px] font-light">
            &copy; {new Date().getFullYear()} Jamin Yip.
          </p>
        </div>
      </div>
    </div>
  );
}
