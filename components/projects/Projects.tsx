"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
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

function ProjectPreview({
    type,
    reduceMotion,
}: {
    type: Project["preview"];
    reduceMotion: boolean;
}) {
    return (
        <div className="relative h-[clamp(13.5rem,34vw,19rem)] overflow-hidden bg-[#080b11]">
            {/* Browser header */}
            <div className="absolute inset-x-0 top-0 z-20 flex h-9 items-center gap-1.5 border-b border-white/[0.07] bg-[#0c1018] px-3 sm:px-4">
                <span className="h-2 w-2 shrink-0 rounded-full bg-red-400/70" />
                <span className="h-2 w-2 shrink-0 rounded-full bg-yellow-300/70" />
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400/70" />
                <div className="mx-auto h-4 w-[45%] rounded-md border border-white/[0.05] bg-white/[0.03]" />
            </div>

            {/* Atomic AI preview */}
            {type === "ai" && (
                <div className="absolute inset-0 overflow-hidden px-3 pb-4 pt-12 sm:px-6 sm:pt-14">
                    <div className="absolute -right-8 top-12 h-36 w-36 rounded-full bg-cyan-400/15 blur-[65px] sm:h-44 sm:w-44" />

                    <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                        <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-200 sm:mb-3 sm:h-10 sm:w-10">
                            <Sparkles size={18} />
                        </div>

                        <p className="max-w-full text-[8px] font-medium uppercase tracking-[0.16em] text-cyan-300 sm:text-[10px] sm:tracking-[0.25em]">
                            Intelligence meets innovation
                        </p>

                        <h3 className="mt-2 text-[clamp(1.75rem,5vw,2.5rem)] font-bold tracking-tight text-white">
                            Atomic<span className="text-cyan-300"> AI.</span>
                        </h3>

                        <p className="mt-1 max-w-[230px] text-[11px] leading-5 text-neutral-400 sm:mt-2 sm:text-xs">
                            Explore a smarter digital experience.
                        </p>

                        <div className="mt-3 flex flex-wrap justify-center gap-2 sm:mt-5">
                            <span className="rounded-lg bg-cyan-300 px-3 py-2 text-[9px] font-semibold text-black sm:px-4 sm:text-[10px]">
                                Explore AI
                            </span>
                            <span className="rounded-lg border border-white/10 px-3 py-2 text-[9px] text-neutral-300 sm:px-4 sm:text-[10px]">
                                Discover more
                            </span>
                        </div>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent sm:bottom-4 sm:left-6 sm:right-6" />
                </div>
            )}

            {/* Passages to India preview */}
            {type === "travel" && (
                <div className="absolute inset-0 overflow-hidden bg-[#17130f] px-4 pb-4 pt-12 sm:px-7 sm:pt-14">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(210,143,75,0.25),transparent_50%)]" />

                    <div className="relative z-10 flex h-full flex-col justify-center">
                        <span className="hidden text-[8px] uppercase tracking-[0.18em] text-amber-200/80 sm:inline sm:text-[10px] sm:tracking-[0.3em]">
                            Discover the extraordinary
                        </span>

                        <h3 className="mt-2 max-w-[290px] font-serif text-[clamp(1.75rem,5vw,2.5rem)] leading-tight text-[#fff1dc]">
                            Passages
                            <br />
                            to India.
                        </h3>

                        <p className="mt-2 max-w-[230px] text-[10px] leading-5 text-[#d0bca5] sm:mt-3 sm:text-xs">
                            Stories, traditions and the spirit of India.
                        </p>

                        <div className="mt-3 flex items-center gap-2 text-[9px] uppercase tracking-[0.12em] text-amber-200 sm:mt-5 sm:text-[10px] sm:tracking-[0.18em]">
                            Explore the journey <ArrowUpRight size={13} />
                        </div>
                    </div>

                    <div className="absolute -bottom-12 -right-4 h-36 w-36 rounded-full border border-amber-200/15 sm:h-44 sm:w-44" />
                    <div className="absolute -bottom-7 -right-1 h-28 w-28 rounded-full border border-amber-200/20 sm:h-32 sm:w-32" />
                    <div className="absolute bottom-5 right-7 h-14 w-14 rounded-full border border-amber-200/25 sm:bottom-6 sm:right-8 sm:h-16 sm:w-16" />
                </div>
            )}

            {/* LYS Saloon preview */}
            {type === "salon" && (
                <div className="absolute inset-0 overflow-hidden bg-[#171018] px-4 pb-4 pt-12 sm:px-7 sm:pt-14">
                    <div className="absolute -right-8 top-12 h-36 w-36 rounded-full bg-fuchsia-400/10 blur-[60px] sm:top-16 sm:h-40 sm:w-40" />

                    <div className="relative z-10 flex h-full flex-col justify-center">
                        <p className="hidden text-[8px] uppercase tracking-[0.2em] text-fuchsia-200/80 sm:inline sm:text-[10px] sm:tracking-[0.3em]">
                            Beauty • Style • Care
                        </p>

                        <h3 className="mt-3 flex flex-wrap items-baseline gap-x-2 font-serif text-[clamp(1.7rem,5vw,3rem)] tracking-[0.06em] text-white">
                            <span>LYS</span>
                            <span className="text-fuchsia-200">SALOON</span>
                        </h3>

                        <div className="mt-3 h-px w-20 bg-gradient-to-r from-fuchsia-200 to-transparent sm:mt-4 sm:w-24" />

                        <p className="mt-3 max-w-[230px] text-[11px] leading-5 text-neutral-300 sm:mt-4 sm:text-xs">
                            A salon-inspired website showcase.
                        </p>

                        <span className="mt-4 w-fit border border-fuchsia-200/30 px-3 py-2 text-[8px] uppercase tracking-[0.14em] text-fuchsia-100 sm:px-4 sm:text-[9px] sm:tracking-[0.2em]">
                            Explore the design
                        </span>
                    </div>
                </div>
            )}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-[#080b11]/60 to-transparent sm:h-16" />

            {/* Prevent unused-prop warnings and respect reduced motion in the preview */}
            {reduceMotion && (
                <span className="sr-only">Static project preview</span>
            )}
        </div>
    );
}

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");
    const reduceMotion = useReducedMotion() ?? false;

    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter((project) => project.category === activeFilter);

    return (
        <section
            id="projects"
            className="relative isolate overflow-hidden bg-[#050505] py-24 sm:py-24 md:py-24 xl:py-28"
        >
            {/* Ambient background */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-20 h-56 w-[90%] max-w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/[0.035] blur-[90px] sm:top-32 sm:h-72 sm:blur-[110px]" />
                <div className="absolute left-0 top-1/2 h-52 w-52 rounded-full bg-blue-500/[0.025] blur-[80px] sm:h-72 sm:w-72 sm:blur-[100px]" />
                <div className="absolute right-0 top-2/3 h-52 w-52 rounded-full bg-cyan-300/[0.025] blur-[80px] sm:h-72 sm:w-72 sm:blur-[100px]" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
                {/* Section heading */}
                <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: reduceMotion ? 0 : 0.6 }}
                    className="mb-10 text-center sm:mb-14 md:mb-16"
                >
                    <div className="mb-5 flex justify-center sm:mb-6">
                        <span className="inline-flex min-h-9 items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.05] px-3 py-2 text-[9px] font-medium uppercase tracking-[0.18em] text-cyan-200 sm:px-4 sm:text-xs sm:tracking-[0.25em]">
                            <Layers3 size={14} />
                            Selected Work
                        </span>
                    </div>

                    <h2 className="text-[clamp(2rem,6vw,3.75rem)] font-bold leading-tight tracking-tight text-white">
                        Projects<span className="text-cyan-300">.</span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-neutral-400 sm:mt-5 sm:text-base sm:leading-7">
                        A collection of digital experiences, frontend experiments, and
                        projects built with a focus on design, usability, and detail.
                    </p>

                    {/* Decorative lamp underline */}
                    <div className="relative mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-cyan-200 to-transparent shadow-[0_0_14px_rgba(103,232,249,0.4)] sm:mt-8 sm:w-28">
                        <div className="absolute left-1/2 top-0 h-6 w-20 -translate-x-1/2 bg-cyan-300/10 blur-xl" />
                    </div>
                </motion.div>

                {/* Responsive filter buttons */}
                <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: reduceMotion ? 0 : 0.4 }}
                    className="mb-8 flex flex-wrap items-center justify-center gap-2 sm:mb-10 md:mb-12"
                    role="group"
                    aria-label="Filter projects by category"
                >
                    {filters.map((filter) => {
                        const isActive = activeFilter === filter;

                        return (
                            <button
                                key={filter}
                                type="button"
                                onClick={() => setActiveFilter(filter)}
                                aria-pressed={isActive}
                                className={`relative inline-flex min-h-10 items-center justify-center overflow-hidden rounded-full border px-4 py-2.5 text-xs font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] sm:min-h-11 sm:px-5 sm:text-sm ${isActive
                                        ? "border-cyan-300/40 text-white"
                                        : "border-white/[0.08] text-neutral-400 hover:border-cyan-300/25 hover:text-cyan-100"
                                    }`}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="project-filter"
                                        className="absolute inset-0 rounded-full bg-cyan-300/[0.10]"
                                        transition={
                                            reduceMotion
                                                ? { duration: 0 }
                                                : { type: "spring", stiffness: 350, damping: 30 }
                                        }
                                    />
                                )}
                                <span className="relative z-10">{filter}</span>
                            </button>
                        );
                    })}
                </motion.div>

                {/* Responsive project grid:
            1 column on mobile, 2 on tablet/desktop, 3 on wide screens */}
                <motion.div
                    layout
                    className="grid grid-cols-1 items-stretch gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-6"
                >
                    <AnimatePresence mode="popLayout" initial={false}>
                        {filteredProjects.map((project, index) => (
                            <motion.article
                                key={project.id}
                                layout={!reduceMotion}
                                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={reduceMotion ? undefined : { opacity: 0, y: 10 }}
                                transition={{
                                    duration: reduceMotion ? 0 : 0.3,
                                    delay: reduceMotion ? 0 : index * 0.04,
                                    layout: { duration: reduceMotion ? 0 : 0.25 },
                                }}
                                whileHover={reduceMotion ? undefined : { y: -4 }}
                                className="group relative min-w-0"
                            >
                                {/* Card glow */}
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -inset-px rounded-[18px] opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-30"
                                    style={{
                                        background: `linear-gradient(135deg, ${project.accent}, transparent 60%)`,
                                    }}
                                />

                                <div className="relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#090b10] transition-colors duration-300 group-hover:border-white/[0.16]">
                                    {/* Project preview */}
                                    <div className="relative min-w-0 overflow-hidden">
                                        <div
                                            className={
                                                reduceMotion
                                                    ? ""
                                                    : "transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                                            }
                                        >
                                            <ProjectPreview
                                                type={project.preview}
                                                reduceMotion={reduceMotion}
                                            />
                                        </div>

                                        <span className="absolute left-3 top-11 z-30 max-w-[calc(100%-5rem)] truncate rounded-md border border-white/10 bg-black/60 px-2 py-1 text-[8px] uppercase tracking-[0.12em] text-neutral-300 backdrop-blur-md sm:left-4 sm:px-2.5 sm:text-[9px] sm:tracking-[0.18em]">
                                            {project.category}
                                        </span>

                                        <span
                                            aria-hidden="true"
                                            className="absolute bottom-3 right-3 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/50 text-neutral-300 backdrop-blur-md transition-colors duration-300 group-hover:border-cyan-300/40 group-hover:text-cyan-200 sm:bottom-4 sm:right-4 sm:h-9 sm:w-9"
                                        >
                                            <ArrowUpRight size={16} />
                                        </span>
                                    </div>

                                    {/* Project information */}
                                    <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
                                        <div className="mb-3 flex items-start justify-between gap-3">
                                            <div className="min-w-0">
                                                <p className="mb-1.5 text-[9px] font-medium uppercase tracking-[0.18em] text-neutral-500 sm:mb-2 sm:text-[10px] sm:tracking-[0.2em]">
                                                    Project {project.number}
                                                </p>

                                                <h3 className="break-words text-lg font-semibold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-100 sm:text-xl lg:text-2xl">
                                                    {project.title}
                                                </h3>

                                                <p className="mt-1 break-words text-xs leading-5 text-neutral-500 sm:text-sm">
                                                    {project.subtitle}
                                                </p>
                                            </div>

                                            <span
                                                aria-hidden="true"
                                                className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                                                style={{
                                                    backgroundColor: project.accent,
                                                    boxShadow: `0 0 12px ${project.accent}65`,
                                                }}
                                            />
                                        </div>

                                        <p className="mb-5 text-[13px] leading-6 text-neutral-400 sm:mb-6 sm:text-sm">
                                            {project.description}
                                        </p>

                                        {/* Technology chips */}
                                        <div className="mb-5 flex flex-wrap gap-1.5 sm:mb-6 sm:gap-2">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="max-w-full break-words rounded-md border border-white/[0.07] bg-white/[0.025] px-2 py-1.5 text-[10px] leading-4 text-neutral-300 transition-colors duration-300 group-hover:border-cyan-300/15 sm:px-2.5 sm:text-xs"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Keep actions aligned at the bottom of each card */}
                                        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] pt-4">
                                            {project.liveUrl ? (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex min-h-10 items-center gap-2 text-xs font-medium text-cyan-200 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#090b10] sm:text-sm"
                                                >
                                                    Live Preview
                                                    <ExternalLink size={14} />
                                                </a>
                                            ) : (
                                                <span className="text-xs text-neutral-500">
                                                    Portfolio showcase
                                                </span>
                                            )}

                                            <span className="text-[10px] tabular-nums text-neutral-600 sm:text-xs">
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
                    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: reduceMotion ? 0 : 0.5 }}
                    className="mt-12 flex flex-col items-center justify-center gap-3 px-2 text-center sm:mt-16 md:mt-20"
                >
                    <p className="max-w-xl text-xs leading-6 text-neutral-400 sm:text-sm">
                        Every project is another opportunity to learn and build better.
                    </p>

                    <a
                        href="#contact"
                        className="group inline-flex min-h-10 items-center justify-center gap-2 text-xs font-medium text-cyan-200 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:text-sm"
                    >
                        Have a project in mind?
                        <ArrowDownRight
                            size={16}
                            className={
                                reduceMotion
                                    ? ""
                                    : "transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                            }
                        />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
