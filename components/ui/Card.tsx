import React from "react";
export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 shadow-[0_6px_30px_-12px_rgba(0,0,0,0.25)] p-5 ${className}`}>
      {children}
    </div>
  );
}
