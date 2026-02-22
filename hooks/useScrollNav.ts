"use client";

import { useRef, useCallback, RefObject } from "react";

/**
 * Custom hook for smooth scroll navigation with cancellation support.
 * Uses a custom easing animation instead of native smooth scroll for
 * consistent cross-browser behavior and user-interrupt handling.
 */
export function useScrollNav(
  refs: Record<string, RefObject<HTMLDivElement | null>>
): (section: string) => void {
  const scrollCancelRef = useRef<(() => void) | null>(null);

  return useCallback(
    (section: string) => {
      const ref = refs[section];
      if (!ref?.current) return;

      // Cancel any running animation
      if (scrollCancelRef.current) scrollCancelRef.current();

      // Stop inertia scrolling by briefly locking scroll position
      const scrollPos = window.scrollY;
      document.body.style.overflow = "hidden";
      window.scrollTo(0, scrollPos);

      // Start new animation after inertia is killed
      requestAnimationFrame(() => {
        document.body.style.overflow = "";

        const targetY =
          ref.current!.getBoundingClientRect().top + window.scrollY;
        const startY = window.scrollY;
        const distance = targetY - startY;
        const duration = Math.min(
          3000,
          Math.max(1500, Math.abs(distance) * 1.2)
        );
        let startTime: number | null = null;
        let animId: number | null = null;
        let cancelled = false;

        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 7);

        const cancel = () => {
          cancelled = true;
          if (animId) cancelAnimationFrame(animId);
          window.removeEventListener("wheel", cancel);
          window.removeEventListener("touchmove", cancel);
          scrollCancelRef.current = null;
        };

        scrollCancelRef.current = cancel;
        window.addEventListener("wheel", cancel, { once: true });
        window.addEventListener("touchmove", cancel, { once: true });

        const step = (timestamp: number) => {
          if (cancelled) return;
          if (!startTime) startTime = timestamp;
          const elapsed = timestamp - startTime;
          const progress = Math.min(elapsed / duration, 1);
          window.scrollTo(0, startY + distance * easeOutCubic(progress));
          if (progress < 1) {
            animId = requestAnimationFrame(step);
          } else {
            cancel();
          }
        };

        animId = requestAnimationFrame(step);
      });
    },
    [refs]
  );
}
