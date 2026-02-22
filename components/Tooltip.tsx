"use client";

import { useState, useRef, useCallback, useId } from "react";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

export default function Tooltip({ text, children }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tooltipId = useId();

  const show = useCallback(() => {
    timeoutRef.current = setTimeout(() => setVisible(true), 100);
  }, []);

  const hide = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setVisible(false);
  }, []);

  return (
    <span className="relative inline-flex" onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide} aria-describedby={visible ? tooltipId : undefined}>
      {children}
      {visible && (
        <span
          id={tooltipId}
          role="tooltip"
          className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 whitespace-nowrap rounded px-2 py-[4px] text-[0.625rem] font-medium text-white pointer-events-none z-50"
          style={{ backgroundColor: "rgba(97, 97, 97, 0.92)" }}
        >
          {text}
          {/* Arrow */}
          <span
            className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0"
            style={{
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop: "6px solid rgba(97, 97, 97, 0.92)",
            }}
          />
        </span>
      )}
    </span>
  );
}