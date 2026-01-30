"use client";

import { Github, Linkedin, Mail, ArrowRight, Shield, Sparkles, BookOpen, Cpu, Globe2, Star, ExternalLink, FolderPlus, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { TAG } from "@/components/ui/Tag";
import { useEffect } from "react";

const skills = [
  "Python",
  "FastAPI",
  "JWT Auth",
  "Role-Based Access Control (RBAC)",
  "Audit Logging",
  "SQL / SQLAlchemy",
  "Secure API Design",
  "Threat Modeling",
  "Web App Security",
  "Git/GitHub"
];

export default function Page() {
  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (saved === "dark") document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/60 dark:bg-neutral-950/40 border-b border-black/10 dark:border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-fuchsia-600" />
            <span className="font-semibold">Jasmine • Cybersecurity</span>
          </div>
          <nav className="hidden sm:flex items-center gap-5 text-sm">
            <a href="#about" className="hover:text-fuchsia-600">About</a>
            <a href="#projects" className="hover:text-fuchsia-600">Projects</a>
            <a href="#case-studies" className="hover:text-fuchsia-600">Case Studies</a>
            <a href="#writing" className="hover:text-fuchsia-600">Writing</a>
            <a href="#contact" className="hover:text-fuchsia-600">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const root = document.documentElement;
                const isDark = root.classList.toggle("dark");
                localStorage.setItem("theme", isDark ? "dark" : "light");
              }}
              className="inline-flex items-center gap-2 text-sm rounded-full border border-black/10 dark:border-white/10 px-3 py-1.5 hover:bg-fuchsia-50/80 dark:hover:bg-white/5"
              aria-label="Toggle theme"
            >
              <Sun className="h-4 w-4 hidden dark:block" />
              <Moon className="h-4 w-4 dark:hidden" />
            </button>
            <Link
              href="https://github.com/Jasmineamuchienwa"
              target="_blank"
              className="inline-flex items-center gap-2 text-sm rounded-full border border-black/10 dark:border-white/10 px-3 py-1.5 hover:bg-fuchsia-50/80 dark:hover:bg-white/5"
            >
              <Github className="h-4 w-4" /> GitHub
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 text-xs font-medium rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-1">
              <Sparkles className="h-4 w-4 text-fuchsia-600" />
              <span>Student • Cyber Defense • Manchester</span>
            </div>

            <h1 className="mt-5 text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              Hi, I’m Jasmine,{" "}
              <span className="text-fuchsia-600">Welcome</span>.{" "}
              <span className="text-indigo-600"></span>
            </h1>

            <p className="mt-4 max-w-2xl text-base sm:text-lg text-neutral-700 dark:text-neutral-300">
              Cybersecurity student trying to build practical projects around areas of cybersecurity such as authentication, RBAC,
              audit trails, and secure transaction flows. Everything here is easy to review quickly.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-fuchsia-600 text-white px-4 py-2 shadow hover:shadow-md">
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="https://github.com/Jasmineamuchienwa" target="_blank" className="inline-flex items-center gap-2 rounded-full border px-4 py-2 hover:bg-white/60 dark:hover:bg-white/10">
                View GitHub <ExternalLink className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {skills.slice(0, 8).map((s) => (<TAG key={s} text={s} />))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" title="About me" eyebrow="profile">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <p className="text-sm leading-7">
              I am a cybersecurity student learning through hands-on projects and experiments.
                Outside of tech, I write personal pieces on Substack.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((s) => (<TAG key={s} text={s} />))}
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-3">
              <Cpu className="h-5 w-5 text-indigo-600" />
              <div>
                <p className="font-medium">Focus areas</p>
                <ul className="mt-2 space-y-1 text-sm list-disc list-inside opacity-90">
                  <li>Defensive security (student level)</li>
                  <li>Secure API design and access control</li>
                  <li>Risk thinking: threats, controls, and auditability</li>
                </ul>
              </div>
            </div>
            <div className="mt-5 flex items-start gap-3">
              <Globe2 className="h-5 w-5 text-fuchsia-600" />
              <div>
                <p className="font-medium">Identity</p>
                <p className="text-sm opacity-90 mt-1">
                  Student. Interested in practical defensive security and clean systems design.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects" eyebrow="work">
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Card key={p.title}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm opacity-90">{p.description}</p>
                </div>
                <Star className="h-5 w-5 text-yellow-500" />
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => <TAG key={t} text={t} />)}
              </div>
              <div className="mt-4">
                <Link href={p.link} target="_blank" className="inline-flex items-center gap-2 text-sm text-fuchsia-700 dark:text-fuchsia-300 hover:underline">
                  View on GitHub <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          ))}

          {/* Placeholder for future mini projects */}
          <Card>
            <div className="flex items-start gap-3">
              <FolderPlus className="h-5 w-5 text-indigo-600" />
              <div>
                <h3 className="text-lg font-semibold">Pending new mini-project</h3>
                <p className="mt-1 text-sm opacity-90">Space reserved for future tools, write-ups, or experiments. </p>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <TAG text="Python" />
              <TAG text="Security" />
              <TAG text="UI" />
            </div>
          </Card>
        </div>
      </Section>

      {/* CASE STUDIES */}
      <Section id="case-studies" title="Case Studies" eyebrow="deep dives">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="text-lg font-semibold">Northbridge Secure Banking MVP — Risk-backed build</h3>
            <p className="mt-2 text-sm opacity-90">
              A fintech-style API designed around enterprise risk thinking: authentication, RBAC, audit logs, and transaction integrity.
              Built to align with an Enterprise Technology Risk Assessment.
            </p>
            <a href="#projects" className="mt-3 inline-flex items-center gap-2 text-sm text-fuchsia-700 dark:text-fuchsia-300 hover:underline">
              See project details <ArrowRight className="h-4 w-4" />
            </a>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">Notes (coming soon)</h3>
            <p className="mt-2 text-sm opacity-90">
              Short write-ups on what I’m learning as I build and test projects.
            </p>
            <a href="#writing" className="mt-3 inline-flex items-center gap-2 text-sm text-fuchsia-700 dark:text-fuchsia-300 hover:underline">
              See writing <ArrowRight className="h-4 w-4" />
            </a>
          </Card>
        </div>
      </Section>

      {/* WRITING */}
      <Section id="writing" title="Writing" eyebrow="substack">
        <Card>
          <div className="flex items-start gap-3">
            <BookOpen className="h-5 w-5 text-indigo-600" />
            <div>
              <p className="font-medium">Substack</p>
              <p className="text-sm opacity-90 mt-1">
                Personal writing - essays, reflections, and observations.
              </p>
            </div>
          </div>

          <div className="mt-3">
            <a
              href="https://substack.com/@fareedahphillips/posts"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-fuchsia-700 dark:text-fuchsia-300 hover:underline"
            >
              Read on Substack <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </Card>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Let’s connect" eyebrow="contact">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <p className="text-sm">Open to internships. Reach out via links below.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="mailto:phillipsfareedah@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2">
                <Mail className="h-4 w-4" /> Email me
              </a>
              <Link href="https://github.com/Jasmineamuchienwa" target="_blank" className="inline-flex items-center gap-2 rounded-full border px-4 py-2">
                <Github className="h-4 w-4" /> GitHub
              </Link>
              <Link href="https://www.linkedin.com/in/fareedah-phillips-0b54a22a3/" target="_blank" className="inline-flex items-center gap-2 rounded-full border px-4 py-2">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </Link>
            </div>
          </Card>
          <Card className="md:col-span-2">
            <p className="text-sm font-medium mb-2">What is it for?</p>
            <p className="text-sm opacity-90">
              A simple place to track my projects, case studies, and progress over time.
            </p>
          </Card>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 dark:border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Jasmine Amuchienwa. All rights reserved.</p>
          <div className="flex items-center gap-4 opacity-80">
            <a href="#about" className="hover:text-fuchsia-600">About</a>
            <a href="#projects" className="hover:text-fuchsia-600">Projects</a>
            <a href="#writing" className="hover:text-fuchsia-600">Writing</a>
            <a href="#contact" className="hover:text-fuchsia-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
