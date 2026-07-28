"use client";

import { useEffect, useRef } from "react";

type Dir = "up" | "left" | "right" | "zoom";

const DIR_CLASS: Record<Dir, string> = {
  up: "",
  left: "reveal-left",
  right: "reveal-right",
  zoom: "reveal-zoom",
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  dir = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  dir?: Dir;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${DIR_CLASS[dir]} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
