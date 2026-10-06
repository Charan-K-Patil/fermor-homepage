"use client";
import type { ReactNode } from "react";
import { useInView } from "./hooks";

export default function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const [ref, seen] = useInView<HTMLDivElement>(0.12);
  return (
    <div ref={ref} className={`reveal ${seen ? "in" : ""} ${className}`.trim()} style={{ transitionDelay: seen ? `${delay}ms` : "0ms" }}>
      {children}
    </div>
  );
}
