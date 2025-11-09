import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jasmine — Cybersecurity Portfolio",
  description: "Cute, simple, expandable portfolio for projects, case studies, and writing.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[radial-gradient(80rem_40rem_at_50%_-10%,#fde1ff_0%,transparent_60%),radial-gradient(60rem_30rem_at_20%_10%,#e1eaff_0%,transparent_50%)] dark:bg-[radial-gradient(80rem_40rem_at_50%_-10%,#2a0b3d_0%,transparent_60%),radial-gradient(60rem_30rem_at_20%_10%,#0e1630_0%,transparent_50%)] text-neutral-800 dark:text-neutral-100">
        {children}
      </body>
    </html>
  );
}

