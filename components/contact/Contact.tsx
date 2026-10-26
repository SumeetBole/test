
"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const EMAIL = "YOUR_EMAIL@example.com";

const socials = [
  {
    name: "GitHub",
    description: "Explore my code",
    href: "https://github.com/",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    description: "Let's connect",
    href: "https://www.linkedin.com/",
    icon: FaLinkedin,
  },
];



export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const mailSubject = encodeURIComponent(
      subject.trim() || `Portfolio inquiry from ${name.trim()}`
    );

    const mailBody = encodeURIComponent(
      `Hi Sumeet,\n\n${message.trim()}\n\nRegards,\n${name.trim()}\n${email.trim()}`
    );

    window.location.href = `mailto:${EMAIL}?subject=${mailSubject}&body=${mailBody}`;
  }

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#050505] py-24 sm:py-32"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-0 h-80 w-[min(90%,700px)] -translate-x-1/2 rounded-full bg-cyan-300/[0.035] blur-[110px]" />

        <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-blue-500/[0.035] blur-[100px]" />

        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-400/[0.025] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mb-16 flex flex-col items-center text-center sm:mb-20"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.05] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.25em] text-cyan-200 sm:text-xs">
            <Sparkles size={14} />
            Let's Connect
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Get in{" "}
            <span className="bg-gradient-to-r from-cyan-100 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              Touch.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
            Have an idea, an opportunity, or an interesting project?
            I&apos;d love to hear from you. Let&apos;s create something
            meaningful together.
          </p>

          {/* Soft lamp underline */}
          <div className="relative mt-8 h-px w-32 bg-gradient-to-r from-transparent via-cyan-100 to-transparent shadow-[0_0_12px_rgba(165,243,252,0.5)]">
            <motion.div
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scaleX: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-0 h-7 w-24 -translate-x-1/2 bg-cyan-300/[0.12] blur-xl"
            />
          </div>
        </motion.div>

        {/* Main contact layout */}
        <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Intro card */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-colors duration-300 hover:border-cyan-300/20 sm:p-8">
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan-300/[0.07] blur-3xl transition-opacity duration-500 group-hover:bg-cyan-300/[0.12]" />

              <div className="relative">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.08] text-cyan-200">
                  <MessageCircle size={23} />
                </div>

                <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200/80">
                  Open to opportunities
                </p>

                <h3 className="text-2xl font-semibold leading-snug text-white sm:text-3xl">
                  Let&apos;s talk about your next big idea.
                </h3>

                <p className="mt-4 text-sm leading-7 text-neutral-400">
                  I enjoy building modern web experiences, crafting responsive
                  interfaces, and turning ideas into functional products.
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs text-neutral-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300/50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
                  </span>
                  Available to discuss new projects
                </div>
              </div>
            </div>

            {/* Email card */}
            <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-all duration-300 hover:border-cyan-300/25 hover:bg-cyan-300/[0.025] sm:p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-cyan-200 transition-colors group-hover:border-cyan-300/20 group-hover:bg-cyan-300/10">
                  <Mail size={21} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs text-neutral-500">Email me</p>
                  <p className="mt-1 break-all text-sm font-medium text-white">
                    {EMAIL}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-neutral-400 transition-all hover:border-cyan-300/30 hover:text-cyan-200"
                >
                  {copied ? <Check size={16} /> : <ArrowUpRight size={16} />}
                </button>
              </div>

              {copied && (
                <p className="mt-3 text-xs text-cyan-200">
                  Email address copied!
                </p>
              )}
            </div>

            {/* Location card */}
            <div className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 sm:p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-cyan-200">
                <MapPin size={21} />
              </div>

              <div>
                <p className="text-xs text-neutral-500">Location</p>
                <p className="mt-1 text-sm font-medium text-white">
                  Mumbai, Maharashtra, India
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Open to connecting remotely
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-2">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                Find me online
              </p>

              <div className="grid grid-cols-2 gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-cyan-300/[0.04]"
                    >
                      <Icon
                        size={20}
                        className="text-neutral-400 transition-colors group-hover:text-cyan-200"
                      />

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-white">
                          {social.name}
                        </p>
                        <p className="mt-1 text-[10px] text-neutral-500">
                          {social.description}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={14}
                        className="text-neutral-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-200"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right column: contact form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-cyan-300/15 via-transparent to-blue-400/10 opacity-60 blur-sm" />

            <div className="relative rounded-2xl border border-white/[0.09] bg-[#090b10]/90 p-6 backdrop-blur-xl sm:p-8 md:p-10">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
                    Send a message
                  </p>

                  <h3 className="text-2xl font-semibold text-white">
                    Let&apos;s start a conversation.
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-neutral-400">
                    Fill in the details below and your email app will open
                    with the message prepared.
                  </p>
                </div>

                <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.06] text-cyan-200 sm:flex">
                  <Send size={20} />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs font-medium text-neutral-300"
                  >
                    Your name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    minLength={2}
                    maxLength={100}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-white/[0.09] bg-white/[0.025] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-neutral-600 hover:border-white/15 focus:border-cyan-300/40 focus:bg-cyan-300/[0.025] focus:ring-2 focus:ring-cyan-300/[0.06]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xs font-medium text-neutral-300"
                  >
                    Your email
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-white/[0.09] bg-white/[0.025] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-neutral-600 hover:border-white/15 focus:border-cyan-300/40 focus:bg-cyan-300/[0.025] focus:ring-2 focus:ring-cyan-300/[0.06]"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-xs font-medium text-neutral-300"
                  >
                    Subject
                    <span className="ml-2 font-normal text-neutral-600">
                      (optional)
                    </span>
                  </label>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    maxLength={150}
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    placeholder="Project inquiry / Job opportunity"
                    className="w-full rounded-xl border border-white/[0.09] bg-white/[0.025] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-neutral-600 hover:border-white/15 focus:border-cyan-300/40 focus:bg-cyan-300/[0.025] focus:ring-2 focus:ring-cyan-300/[0.06]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-xs font-medium text-neutral-300"
                  >
                    Your message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    minLength={10}
                    maxLength={5000}
                    rows={5}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Tell me a little about your idea..."
                    className="w-full resize-y rounded-xl border border-white/[0.09] bg-white/[0.025] px-4 py-3.5 text-sm leading-6 text-white outline-none transition-all placeholder:text-neutral-600 hover:border-white/15 focus:border-cyan-300/40 focus:bg-cyan-300/[0.025] focus:ring-2 focus:ring-cyan-300/[0.06]"
                  />

                  <p className="mt-2 text-right text-[10px] text-neutral-600">
                    {message.length}/5000
                  </p>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-300 to-sky-400 px-5 py-4 text-sm font-semibold text-[#050505] shadow-[0_0_25px_rgba(34,211,238,0.08)] transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                >
                  Prepare Message
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.button>

                <p className="text-center text-[11px] leading-5 text-neutral-500">
                  Your default email application will open. The message is
                  sent only when you choose to send it.
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer accent */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 border-t border-white/[0.07] pt-8 text-center"
        >
          <p className="text-xs text-neutral-500">
            Designed & built with{" "}
            <span className="text-cyan-200">creativity</span> and attention to
            detail.
          </p>

          <a
            href="#home"
            className="mt-4 inline-flex items-center gap-2 text-xs text-neutral-400 transition-colors hover:text-cyan-200"
          >
            Back to top
            <ArrowUpRight size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
