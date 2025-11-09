import React from "react";
export function TAG({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium backdrop-blur bg-white/60 dark:bg-white/10 border-black/10 dark:border-white/10">{text}</span>
  );
}
