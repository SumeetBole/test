
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  ExternalLink,
  Layers3,
  Sparkles,
} from "lucide-react";

type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
  number: string;
  accent: string;
  preview: "ai" | "travel" | "salon";
};

const projects: Project[] = [
  {
    id: 1,
    title: "Atomic AI",
    subtitle: "AI-Powered Digital Experience",
    description:
      "An AI-driven platform built with modern frontend technologies, focused on creating a clean and engaging digital experience.",
    category: "Web Apps",
    technologies: ["Next.js", "Tailwind CSS", "Appwrite"],
    liveUrl: "https://ai.atomicasher.com",
    number: "01",
    accent: "#22d3ee",
    preview: "ai",
  },
  {
    id: 2,
    title: "Passages to India",
    subtitle: "Culture • Stories • Discovery",
    description:
      "A cultural storytelling website designed to bring the richness and diversity of India to life through an engaging web experience.",
    category: "Websites",
    technologies: ["Astro", "Tailwind CSS"],
    liveUrl: "https://passagestoindia.netlify.app",
    number: "02",
    accent: "#fbbf77",
    preview: "travel",
  },
  {
    id: 3,
    title: "LYS Saloon",
    subtitle: "Salon Website Concept",
    description:
      "A salon-related website project showcased as part of my frontend portfolio, demonstrating visual presentation and interface development.",
    category: "Websites",
    technologies: ["Frontend", "Responsive UI"],
    number: "03",
    accent: "#f0abfc",
    preview: "salon",
  },
];

const filters = ["All", "Web Apps", "Websites"];

function ProjectPreview({ type }: { type: Project["preview"] }) {
  return (
    <div className="relative h-full min-h-[230px] overflow-hidden rounded-t-2xl bg-[#080b11] sm:min-h-[280px]">
      {/* Browser chrome */}
      <div className="absolute inset-x-0 top-0 z-20 flex h-9 items-center gap-1.5 border-b border-white/[0.07] bg-[#0c1018] px-4">
        <span className="h-2 w-2 rounded-full bg-red-400/70" />
        <span className="h-2 w-2 rounded-full bg-yellow-300/70" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
        <div className="mx-auto h-4 w-[45%] rounded-md border border-white/[0.05] bg-white/[0.03]" />
      </div>

      {type === "ai" && (
        <div className="absolute inset-0 overflow-hidden px-5 pb-5 pt-16 sm:px-8">
          <div className="absolute -right-10 top-12 h-40 w-40 rounded-full bg-cyan-400/15 blur-[70px]" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-200">
              <Sparkles size={18} />
            </div>

            <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-cyan-300 sm:text-[10px]">
              Intelligence meets innovation
            </p>

            <h3 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Atomic<span className="text-cyan-300"> AI.</span>
            </h3>

            <p className="mt-2 max-w-[250px] text-xs leading-5 text-neutral-400">
              Explore a smarter digital experience.
            </p>

            <div className="mt-5 flex gap-2">
              <div className="rounded-lg bg-cyan-300 px-4 py-2 text-[10px] font-semibold text-black">
                Explore AI
              </div>
              <div className="rounded-lg border border-white/10 px-4 py-2 text-[10px] text-neutral-300">
                Discover more
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-5 right-5 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        </div>
      )}

      {type === "travel" && (
        <div className="absolute inset-0 overflow-hidden bg-[#17130f] px-5 pb-5 pt-14 sm:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(210,143,75,0.25),transparent_50%)]" />

          <div className="relative z-10 flex h-full flex-col justify-center">
            <span className="text-[9px] uppercase tracking-[0.3em] text-amber-200/80">
              Discover the extraordinary
            </span>

            <h3 className="mt-3 max-w-[290px] font-serif text-3xl leading-tight text-[#fff1dc] sm:text-4xl">
              Passages
              <br />
              to India.
            </h3>

            <p className="mt-3 max-w-[240px] text-[11px] leading-5 text-[#d0bca5]">
              Stories, traditions and the spirit of India.
            </p>

            <div className="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-amber-200">
              Explore the journey <ArrowUpRight size={13} />
            </div>
          </div>

          <div className="absolute -bottom-12 -right-4 h-44 w-44 rounded-full border border-amber-200/15" />
          <div className="absolute -bottom-7 -right-1 h-32 w-32 rounded-full border border-amber-200/20" />
          <div className="absolute bottom-6 right-8 h-16 w-16 rounded-full border border-amber-200/25" />
        </div>
      )}

      {type === "salon" && (
        <div className="absolute inset-0 overflow-hidden bg-[#171018] px-5 pb-5 pt-14 sm:px-8">
          <div className="absolute -right-8 top-16 h-40 w-40 rounded-full bg-fuchsia-400/10 blur-[60px]" />

          <div className="relative z-10 flex h-full flex-col justify-center">
            <p className="text-[9px] uppercase tracking-[0.35em] text-fuchsia-200/80">
              Beauty • Style • Care
            </p>

            <h3 className="mt-3 font-serif text-4xl tracking-wide text-white sm:text-5xl">
              LYS
              <span className="ml-2 text-fuchsia-200">SALOON</span>
            </h3>

            <div className="mt-4 h-px w-24 bg-gradient-to-r from-fuchsia-200 to-transparent" />

            <p className="mt-4 max-w-[240px] text-xs leading-5 text-neutral-300">
              A salon-inspired website showcase.
            </p>

            <div className="mt-5 w-fit border border-fuchsia-200/30 px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-fuchsia-100">
              Explore the design
            </div>
          </div>
        </div>
      )}

      {/* Bottom preview shading */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-[#080b11]/60 to-transparent" />
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-[#050505] py-24 sm:py-32"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-32 h-72 w-[min(90%,700px)] -translate-x-1/2 rounded-full bg-cyan-400/[0.035] blur-[110px]" />

        <div className="absolute left-0 top-1/2 h-72 w-72 rounded-full bg-blue-500/[0.025] blur-[100px]" />

        <div className="absolute right-0 top-2/3 h-72 w-72 rounded-full bg-cyan-300/[0.025] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center sm:mb-16"
        >
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.05] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.25em] text-cyan-200 sm:text-xs">
              <Layers3 size={14} />
              Selected Work
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Projects<span className="text-cyan-300">.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
            A collection of digital experiences, frontend experiments, and
            projects built with a focus on design, usability, and detail.
          </p>

          {/* Decorative lamp underline */}
          <div className="relative mx-auto mt-8 h-px w-28 bg-gradient-to-r from-transparent via-cyan-200 to-transparent shadow-[0_0_14px_rgba(103,232,249,0.4)]">
            <div className="absolute left-1/2 top-0 h-6 w-20 -translate-x-1/2 bg-cyan-300/10 blur-xl" />
          </div>
        </motion.div>

        {/* Interactive filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-wrap items-center justify-center gap-2 sm:mb-12"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`relative rounded-full border px-5 py-2.5 text-xs font-medium transition-colors duration-300 sm:text-sm ${
                  isActive
                    ? "border-cyan-300/40 text-white"
                    : "border-white/[0.08] text-neutral-400 hover:border-cyan-300/25 hover:text-cyan-100"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="project-filter"
                    className="absolute inset-0 -z-0 rounded-full bg-cyan-300/[0.10]"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">{filter}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Project grid */}
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:gap-7">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.06,
                  layout: { duration: 0.3 },
                }}
                whileHover={{ y: -6 }}
                className="group relative min-w-0"
              >
                {/* Card glow */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-[18px] opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-30"
                  style={{
                    background: `linear-gradient(135deg, ${project.accent}, transparent 60%)`,
                  }}
                />

                <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#090b10] transition-colors duration-300 group-hover:border-white/[0.16]">
                  {/* Project visual */}
                  <div className="relative overflow-hidden">
                    <div className="transition-transform duration-700 ease-out group-hover:scale-[1.025]">
                      <ProjectPreview type={project.preview} />
                    </div>

                    <div className="absolute left-4 top-12 z-30 rounded-md border border-white/10 bg-black/50 px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-neutral-300 backdrop-blur-md">
                      {project.category}
                    </div>

                    <span className="absolute bottom-4 right-4 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/40 text-neutral-300 backdrop-blur-md transition-all duration-300 group-hover:border-cyan-300/40 group-hover:text-cyan-200">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>

                  {/* Project information */}
                  <div className="p-5 sm:p-7">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div>
                        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">
                          Project {project.number}
                        </p>

                        <h3 className="text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-100 sm:text-2xl">
                          {project.title}
                        </h3>

                        <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
                          {project.subtitle}
                        </p>
                      </div>

                      <div
                        className="mt-1 h-2 w-2 shrink-0 rounded-full"
                        style={{
                          backgroundColor: project.accent,
                          boxShadow: `0 0 12px ${project.accent}65`,
                        }}
                      />
                    </div>

                    <p className="mb-6 text-sm leading-6 text-neutral-400">
                      {project.description}
                    </p>

                    {/* Technology chips */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 text-[10px] text-neutral-300 transition-colors duration-300 group-hover:border-cyan-300/15 sm:text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project action */}
                    <div className="flex items-center justify-between border-t border-white/[0.07] pt-4">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition-colors hover:text-white"
                        >
                          Live Preview
                          <ExternalLink size={14} />
                        </a>
                      ) : (
                        <span className="text-xs text-neutral-500">
                          Portfolio showcase
                        </span>
                      )}

                      <span className="text-xs tabular-nums text-neutral-600">
                        {project.number} / 03
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Closing note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex flex-col items-center justify-center gap-3 text-center sm:mt-20"
        >
          <p className="text-sm text-neutral-400">
            Every project is another opportunity to learn and build better.
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition-colors hover:text-white"
          >
            Have a project in mind?
            <ArrowDownRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
