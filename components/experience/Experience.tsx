"use client";

import { motion } from "framer-motion";
import {
    ArrowUpRight,
    BriefcaseBusiness,
    CalendarDays,
    Check,
    MapPin,
} from "lucide-react";

import ExperienceBackground from "./ExperienceBackground";

const experiences = [
    {
        number: "01",
        year: "2025 — Present",
        period: "11/2025 — Present",
        role: "Associate",
        specialization: "Appeals & Grievances",
        company: "Wipro Limited",
        location: "Airoli — Mindspace",
        type: "Full-time",

        description:
            "Manage the end-to-end investigation and resolution of member and provider disputes while ensuring strict adherence to regulatory compliance standards such as HIPAA and CMS.",

        highlights: [
            "Analyze complex case data and maintain high documentation accuracy in case management systems.",
            "Draft professional determination letters communicating final resolutions.",
            "Strengthened expertise in dispute resolution, claims adjudication, and critical thinking.",
        ],

        skills: [
            "Claims Adjudication",
            "Case Management",
            "HIPAA",
            "CMS",
            "Dispute Resolution",
        ],
    },

    {
        number: "02",
        year: "2025",
        period: "06/2025 — 09/2025",
        role: "ReactJS",
        specialization: "Intern",
        company: "Linit Export Pvt LTD",
        location: "Mumbai, India",
        type: "Internship",

        description:
            "Developed and optimized modules for an internal ERP system using ReactJS for the frontend and Python for backend logic.",

        highlights: [
            "Managed relational data using phpMyAdmin and ensured seamless data flow between UI and database.",
            "Collaborated on responsive dashboards and streamlined business workflows.",
            "Contributed to improving operational efficiency through modern web development.",
        ],

        skills: [
            "ReactJS",
            "Python",
            "ERP",
            "phpMyAdmin",
            "Responsive UI",
        ],
    },

    {
        number: "03",
        year: "2024",
        period: "04/2024 — 10/2024",
        role: "Front-end Developer",
        specialization: "Intern",
        company: "Atomic Asher LLP",
        location: "Mumbai, India",
        type: "Internship",

        description:
            "Developed high-performance web applications using Next.js, React.js, and Tailwind CSS with a focus on scalability, responsiveness, and reusable UI architecture.",

        highlights: [
            "Built reusable UI components with cross-browser compatibility and mobile-first design principles.",
            "Created visually appealing static websites using Astro templates with a focus on performance.",
            "Contributed to Atomic AI, an AI-driven platform, and Passages to India, a cultural storytelling project.",
        ],

        skills: [
            "Next.js",
            "React.js",
            "Tailwind CSS",
            "Astro",
            "UI Development",
        ],
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="relative overflow-hidden bg-[#050505] py-28 sm:py-32"
        >
            <ExperienceBackground />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                {/* ------------------------------------------------ */}
                {/* HEADER */}
                {/* ------------------------------------------------ */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="mb-20 max-w-4xl"
                >
                    {/* Small label */}
                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-px w-10 bg-cyan-400" />

                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                            Career
                        </span>
                    </div>

                    {/* Main heading */}
                    <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                        Experience that
                        <br />
                        <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            shaped my journey.
                        </span>
                    </h2>

                    <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
                        A collection of experiences across corporate operations and
                        frontend development, where I have worked with modern
                        technologies and real-world business problems.
                    </p>
                </motion.div>

                {/* ------------------------------------------------ */}
                {/* EXPERIENCE LIST */}
                {/* ------------------------------------------------ */}

                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-[19px] top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/60 via-white/10 to-transparent md:block" />

                    <div className="space-y-10">
                        {experiences.map((experience, index) => (
                            <ExperienceCard
                                key={experience.number}
                                experience={experience}
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                {/* ------------------------------------------------ */}
                {/* BOTTOM STATEMENT */}
                {/* ------------------------------------------------ */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-20 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center"
                >
                    <div>
                        <p className="text-sm text-zinc-500">
                            Still learning. Still building.
                        </p>

                        <p className="mt-1 text-lg font-medium text-white">
                            Always looking for the next challenge.
                        </p>
                    </div>

                    <a
                        href="#contact"
                        className="group inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
                    >
                        Let&apos;s work together
                        <ArrowUpRight
                            size={17}
                            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

/* ====================================================== */
/* EXPERIENCE CARD */
/* ====================================================== */

function ExperienceCard({
    experience,
    index,
}: {
    experience: (typeof experiences)[number];
    index: number;
}) {
    return (
        <motion.article
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.15,
            }}
            transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative pl-0 md:pl-16"
        >
            {/* Timeline marker */}
            <div className="absolute left-0 top-8 z-20 hidden md:block">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#050505] shadow-[0_0_30px_rgba(34,211,238,0.08)] transition-all duration-500 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]">
                    <div className="h-2 w-2 rounded-full bg-zinc-600 transition-all duration-500 group-hover:scale-150 group-hover:bg-cyan-400" />
                </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition-all duration-500 group-hover:border-cyan-400/20 group-hover:bg-white/[0.04]">
                {/* Card glow */}
                <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-cyan-400/[0.07] blur-[100px] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                {/* Top gradient */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative p-6 sm:p-8 lg:p-10">
                    {/* Top row */}
                    <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
                        <div className="flex items-start gap-5">
                            {/* Number */}
                            <span className="hidden font-mono text-xs font-medium text-zinc-600 sm:block">
                                /{experience.number}
                            </span>

                            <div>
                                {/* Role */}
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                    <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                                        {experience.role}
                                    </h3>

                                    <span className="text-xl text-zinc-700">—</span>

                                    <span className="text-lg font-medium text-cyan-400">
                                        {experience.specialization}
                                    </span>
                                </div>

                                {/* Company */}
                                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                                    <div className="flex items-center gap-2 text-sm font-medium text-zinc-300">
                                        <BriefcaseBusiness
                                            size={15}
                                            className="text-cyan-400"
                                        />
                                        {experience.company}
                                    </div>

                                    <div className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" />

                                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                                        <MapPin size={15} />
                                        {experience.location}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Date */}
                        <div className="flex shrink-0 items-center gap-2 self-start rounded-full border border-white/10 bg-black/20 px-4 py-2">
                            <CalendarDays
                                size={14}
                                className="text-cyan-400"
                            />

                            <span className="text-xs font-medium tracking-wide text-zinc-400">
                                {experience.period}
                            </span>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="my-8 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

                    {/* Content */}
                    <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr]">
                        {/* Description */}
                        <div>
                            <p className="max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                                {experience.description}
                            </p>

                            {/* Highlights */}
                            <div className="mt-7 space-y-4">
                                {experience.highlights.map((highlight) => (
                                    <div
                                        key={highlight}
                                        className="flex gap-3"
                                    >
                                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10">
                                            <Check
                                                size={12}
                                                className="text-cyan-400"
                                            />
                                        </div>

                                        <p className="text-sm leading-6 text-zinc-400">
                                            {highlight}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="lg:border-l lg:border-white/10 lg:pl-10">
                            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
                                Focus & Expertise
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {experience.skills.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        whileHover={{
                                            y: -2,
                                        }}
                                        className="rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-zinc-400 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>

                            {/* Experience type */}
                            <div className="mt-8">
                                <span className="inline-flex items-center rounded-full border border-cyan-400/15 bg-cyan-400/5 px-3 py-1.5 text-xs font-medium text-cyan-300">
                                    {experience.type}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}