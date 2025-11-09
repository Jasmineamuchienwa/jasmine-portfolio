import React from "react";
export function Section({ id, title, children, eyebrow }: { id?: string; title: string; children: React.ReactNode; eyebrow?: string }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      {eyebrow && <p className="text-xs uppercase tracking-widest text-fuchsia-600/80 dark:text-fuchsia-400/80 mb-2">{eyebrow}</p>}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-white mb-6">{title}</h2>
      {children}
    </section>
  );
}
