import { useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const GITHUB = "https://github.com/TinaGrim";

const skills = {
  languages: ["C++", "C", "Python", "TypeScript", "JavaScript", "HTML", "CSS"],
  frameworks: ["Vue 3", "React", "Astro", "Flask", "FastAPI"],
  automation: ["Selenium", "Tkinter GUI", "Emulator Automation", "Telegram Bots"],
  security: ["Networking", "Encryption", "Capture The Flag (CTF)"],
  tools: ["Git / GitHub", "Figma", "MS Office", "Vercel"],
};

const experience = [
  {
    role: "Python Programming Instructor",
    company: "",
    period: "Jan 2026 – Jul 2026",
    location: "Cambodia",
    points: [
      "Taught Python programming fundamentals to junior learners in small interactive class sessions.",
      "Guided beginners step by step through hands-on practice and live coding.",
    ],
  },
  {
    role: "Cybersecurity CTF Competitor",
    company: "TFCTF",
    period: "Nov 2025",
    location: "",
    points: [
      "Participated in the TFCTF (Capture The Flag) cybersecurity challenge competition.",
      "Practiced problem solving under time pressure across security challenges.",
    ],
  },
];

const education = [
  {
    school: "Institute of Technology of Cambodia",
    degree: "Student, Information and Communication Technology Department",
    period: "Nov 2024 – Present",
    location: "Phnom Penh, Cambodia",
  },
  {
    school: "Anlong Veng High School",
    degree: "High School Diploma",
    period: "Jan 2019 – Dec 2024",
    location: "Oddar Meanchey, Cambodia",
  },
];

const projects = [
  {
    title: "POS Accessories CLI System",
    subtitle: "Point-of-sale command-line system · Team project",
    summary:
      "Team-built point-of-sale application running in the terminal, backed by a Flask service and CSV-based storage for products and day-to-day shop operations.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=480&fit=crop&auto=format",
    features: [
      "Product management directly from the command line",
      "Flask backend serving POS operations",
      "CSV-based lightweight data storage",
      "Collaborative team development with version control",
    ],
    architecture: "C++ · Flask · CSV Storage · Git",
    tags: ["C++", "Flask", "CLI"],
    github: `${GITHUB}/POS_accessories_CLI`,
    demo: null,
  },
  {
    title: "Elevator Visual & Analyze",
    subtitle: "Real-time elevator algorithm simulator",
    summary:
      "Desktop simulation and visualization tool that models elevator algorithms in real time, built with Rust and a clean GUI framework for education.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=480&fit=crop&auto=format",
    features: [
      "Real-time visualization of elevator movement",
      "Models elevator scheduling algorithms",
      "Clean desktop GUI built in Rust",
      "Designed as an educational analysis tool",
    ],
    architecture: "Rust · Desktop GUI · Simulation",
    tags: ["Rust", "GUI", "Algorithms"],
    github: `${GITHUB}/Elevator-Visual-And-Analyze`,
    demo: null,
  },
  {
    title: "LDPlayer Automation Tool",
    subtitle: "Android-emulator fleet automation",
    summary:
      "Automation and management tool for the LDPlayer Android emulator that drives multiple emulator instances simultaneously via configuration-driven control.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=480&fit=crop&auto=format",
    features: [
      "Controls multiple LDPlayer instances at once",
      "Configuration-driven emulator control",
      "Python GUI with built-in server features",
      "PHP chatbot integration",
    ],
    architecture: "Python · Tkinter · Requests · Pillow · PHP",
    tags: ["Python", "Automation", "GUI"],
    github: `${GITHUB}/laughing-octo-funicular`,
    demo: null,
  },
  {
    title: "ArtiFlow Article Management",
    subtitle: "Full-stack article management system",
    summary:
      "Full-stack platform for writing and managing articles, combining a FastAPI + MongoDB backend with modern Astro and React frontends.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=480&fit=crop&auto=format",
    features: [
      "Article CRUD over FastAPI REST endpoints",
      "MongoDB persistence layer",
      "Astro frontend with React components",
      "Clear separation between API and UI layers",
    ],
    architecture: "FastAPI · MongoDB · Astro · React",
    tags: ["FastAPI", "MongoDB", "Astro", "React"],
    github: `${GITHUB}/artiflow-article-management`,
    demo: null,
  },
  {
    title: "Joy Journal Daily",
    subtitle: "Daily journaling web app",
    summary:
      "A lightweight daily journal web app for recording thoughts and moments, written in TypeScript and deployed live on Vercel.",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&h=480&fit=crop&auto=format",
    features: [
      "Quick daily entry flow",
      "TypeScript end to end",
      "Deployed and publicly accessible on Vercel",
    ],
    architecture: "TypeScript · Vercel",
    tags: ["TypeScript", "Web App"],
    github: `${GITHUB}/joy-jornal-daily`,
    demo: "https://joy-journey-daily.vercel.app",
  },
  {
    title: "GrimHill",
    subtitle: "Message encryption toolkit",
    summary:
      "Python utility for encrypting and decrypting messages so conversations stay secure from eavesdroppers.",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=480&fit=crop&auto=format",
    features: [
      "Encrypt and decrypt messages",
      "Lightweight, scriptable tool",
      "Focused on practical everyday security",
    ],
    architecture: "Python · Cryptography",
    tags: ["Python", "Security"],
    github: `${GITHUB}/GrimHill`,
    demo: null,
  },
];

// ─── Components ───────────────────────────────────────────────────────────────

function Nav() {
  const links = ["About", "Stack", "Skills", "Experience", "Education", "Projects", "Contact"];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-purple-100">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <span className="font-bold text-sm tracking-tight text-indigo-950">
          NT<span className="text-purple-600">.</span>
        </span>
        <nav className="hidden md:flex gap-6">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-xs font-medium text-slate-500 hover:text-purple-600 transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="text-xs font-semibold px-4 py-1.5 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-colors"
        >
          Hire me
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="about"
      className="pt-28 pb-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
    >
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 mb-5">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[11px] font-medium text-purple-700">Available for IT internship</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-indigo-950 mb-4">
          Hi, I'm{" "}
          <span className="text-purple-600">Nheb</span>
          <br />
          Tinarith.
        </h1>
        <p className="text-sm font-medium text-slate-500 mb-2 uppercase tracking-widest">
          Software Engineering Student · IT Internship Candidate
        </p>
        <p className="text-xs text-slate-400 mb-6">
          Phnom Penh Thmei, SenSok, Phnom Penh, Cambodia
        </p>
        <p className="text-sm text-slate-600 leading-relaxed mb-8 max-w-md">
          Second-year Software Engineering student at the Institute of Technology of Cambodia.
          I build practical tools across Python, C++, Rust and Go — from emulator automation
          and security utilities to real-time visualizations — and I'm looking for an IT
          internship to apply and grow these skills.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-md bg-purple-600 text-white text-xs font-semibold hover:bg-purple-700 transition-colors"
          >
            View Projects
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-md border border-indigo-950 text-indigo-950 text-xs font-semibold hover:bg-purple-50 transition-colors flex items-center gap-2"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
          <a
            href="/NHEB_Tinarith_CV.docx"
            download
            className="px-5 py-2.5 rounded-md border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-purple-50 hover:border-purple-300 transition-colors"
          >
            Resume ↓
          </a>
        </div>
      </div>

      {/* Stats column */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: "Software Engineering Student", value: "2nd", sub: "Institute of Technology of Cambodia" },
          { label: "Public Repositories", value: "22", sub: "on GitHub" },
          { label: "Languages Used", value: "10", sub: "across my projects" },
          { label: "Languages Spoken", value: "3", sub: "Khmer · English · French" },
        ].map((s) => (
          <div key={s.label} className="p-5 rounded-xl bg-[#F0EDFF] border border-purple-100">
            <div className="text-3xl font-bold text-purple-600 mb-1">{s.value}</div>
            <div className="text-xs font-medium text-indigo-950">{s.label}</div>
            {s.sub && <div className="text-[11px] text-slate-400 mt-0.5">{s.sub}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

function ArchDiagram() {
  const layers = [
    {
      label: "Languages",
      color: "bg-purple-50 border-purple-200 text-purple-800",
      dot: "bg-purple-400",
      items: ["C++", "C", "Python", "TypeScript / JavaScript"],
    },
    {
      label: "Web & UI",
      color: "bg-indigo-50 border-indigo-200 text-indigo-800",
      dot: "bg-indigo-400",
      items: ["Vue 3", "HTML & CSS", "Flask / FastAPI", "Astro + React"],
    },
    {
      label: "Systems & Security",
      color: "bg-violet-50 border-violet-200 text-violet-800",
      dot: "bg-violet-400",
      items: ["Networking & Security", "Encryption Tools", "CLI Development", "CTF Practice"],
    },
    {
      label: "Practices & Tools",
      color: "bg-fuchsia-50 border-fuchsia-200 text-fuchsia-800",
      dot: "bg-fuchsia-400",
      items: ["Git / GitHub", "Figma", "Data Structures & Algorithms", "Team Collaboration"],
    },
  ];

  return (
    <section id="stack" className="py-20 bg-[#F0EDFF]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading tag="Architecture" title="How I build systems" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {layers.map((layer, i) => (
            <div key={layer.label} className="relative">
              {i < layers.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-purple-300 z-10" />
              )}
              <div className={`rounded-xl border p-5 ${layer.color} h-full`}>
                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-2 h-2 rounded-full ${layer.dot}`} />
                  <span className="text-xs font-bold uppercase tracking-wider">{layer.label}</span>
                </div>
                <ul className="space-y-2">
                  {layer.items.map((item) => (
                    <li key={item} className="text-[11px] font-medium text-slate-700 flex items-center gap-1.5">
                      <span className="text-slate-400">→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const [active, setActive] = useState<keyof typeof skills>("languages");
  const tabs = Object.keys(skills) as (keyof typeof skills)[];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading tag="Toolkit" title="Skills & Technologies" />
        <div className="flex flex-wrap gap-2 mt-8 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-4 py-1.5 rounded-md text-xs font-semibold capitalize transition-colors ${
                active === tab
                  ? "bg-purple-600 text-white"
                  : "bg-purple-50 text-purple-700 hover:bg-purple-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2.5">
          {skills[active].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-md border border-purple-200 bg-white text-xs font-medium text-indigo-900 hover:border-purple-400 hover:bg-purple-50 transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#F0EDFF]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading tag="Career" title="Professional Experience" />
        <div className="mt-10 space-y-0">
          {experience.map((job, i) => (
            <div key={job.role} className="relative pl-8">
              {/* Timeline line */}
              <div
                className={`absolute left-0 top-0 w-px bg-purple-200 ${
                  i === experience.length - 1 ? "h-6" : "h-full"
                }`}
              />
              {/* Dot */}
              <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-purple-600 -translate-x-[3px]" />

              <div className="pb-10">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                  <h3 className="text-sm font-bold text-indigo-950">{job.role}</h3>
                  {job.company && (
                    <span className="text-xs font-semibold text-purple-600">{job.company}</span>
                  )}
                  <span className="text-[11px] text-slate-400 ml-auto">
                    {[job.location, job.period].filter(Boolean).join(" · ")}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {job.points.map((pt) => (
                    <li key={pt} className="text-xs text-slate-600 leading-relaxed flex gap-2">
                      <span className="text-purple-400 mt-0.5 flex-shrink-0">▸</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading tag="Study" title="Education" />
        <div className="mt-10 grid md:grid-cols-2 gap-4">
          {education.map((e) => (
            <div
              key={e.school}
              className="rounded-xl border border-purple-100 bg-white p-6 hover:border-purple-300 transition-colors"
            >
              <div className="flex items-baseline justify-between gap-3 mb-1 flex-wrap">
                <h3 className="text-sm font-bold text-indigo-950">{e.school}</h3>
                <span className="text-[11px] text-slate-400">{e.period}</span>
              </div>
              <p className="text-xs font-medium text-purple-600 mb-1">{e.degree}</p>
              <p className="text-[11px] text-slate-400">{e.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-[#F0EDFF]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading tag="Work" title="Featured Projects" />
        <div className="mt-10 space-y-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="rounded-xl border border-purple-100 bg-white overflow-hidden hover:border-purple-300 transition-colors"
            >
              {/* Card header */}
              <div className="grid md:grid-cols-[320px_1fr] gap-0">
                <div className="relative bg-slate-100 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-indigo-950/10" />
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.tags.map((t) => (
                        <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-base font-bold text-indigo-950 mb-0.5">{p.title}</h3>
                    <p className="text-[11px] font-medium text-purple-600 mb-3">{p.subtitle}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{p.summary}</p>
                  </div>
                  <div className="flex items-center gap-3 mt-5">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-indigo-950 border border-indigo-950 px-4 py-1.5 rounded-md hover:bg-purple-50 hover:border-purple-500 hover:text-purple-700 transition-colors"
                    >
                      GitHub ↗
                    </a>
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-semibold text-white bg-purple-600 px-4 py-1.5 rounded-md hover:bg-purple-700 transition-colors"
                      >
                        Live Demo ↗
                      </a>
                    )}
                    <button
                      onClick={() => setExpanded(expanded === i ? null : i)}
                      className="text-xs font-medium text-slate-400 hover:text-purple-600 transition-colors ml-auto"
                    >
                      {expanded === i ? "Less ↑" : "Case Study ↓"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Expanded case study */}
              {expanded === i && (
                <div className="border-t border-purple-100 grid md:grid-cols-2 gap-6 p-6 bg-[#F0EDFF]">
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-purple-600 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {p.features.map((f) => (
                        <li key={f} className="text-xs text-slate-700 flex gap-2 items-start">
                          <span className="text-purple-400 mt-0.5">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-purple-600 mb-3">Architecture</h4>
                    <p className="text-xs font-mono text-slate-700 bg-white border border-purple-100 rounded-lg p-3 leading-relaxed">
                      {p.architecture}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href={`${GITHUB}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold text-purple-600 hover:text-purple-700 underline underline-offset-4"
          >
            See all 22 repositories on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-indigo-950">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">Get in Touch</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Let's build something<br />
          <span className="text-purple-400">great together.</span>
        </h2>
        <p className="text-sm text-slate-400 mb-4 max-w-md mx-auto">
          Seeking an IT internship in Phnom Penh or remote. I usually respond within 24 hours.
        </p>
        <p className="text-xs text-slate-500 mb-8">
          Phnom Penh Thmei, SenSok, Phnom Penh, Cambodia · (+855) 10 273 611
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="mailto:tinasora5553@gmail.com"
            className="px-6 py-3 rounded-md bg-purple-600 text-white text-xs font-semibold hover:bg-purple-500 transition-colors"
          >
            tinasora5553@gmail.com
          </a>
          <a
            href="https://t.me/PanMengLy"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-md border border-slate-600 text-slate-300 text-xs font-semibold hover:border-purple-400 hover:text-purple-400 transition-colors"
          >
            Telegram ↗
          </a>
          <a
            href="https://www.facebook.com/Tinahappy32"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-md border border-slate-600 text-slate-300 text-xs font-semibold hover:border-purple-400 hover:text-purple-400 transition-colors"
          >
            Facebook ↗
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-md border border-slate-600 text-slate-300 text-xs font-semibold hover:border-purple-400 hover:text-purple-400 transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-indigo-950 border-t border-indigo-900 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2">
        <span className="text-xs text-slate-500">© 2026 Nheb Tinarith. All rights reserved.</span>
        <span className="text-xs text-slate-500">
          Built with <span className="text-purple-400">React + Vite + Tailwind CSS</span>
        </span>
      </div>
    </footer>
  );
}

function SectionHeading({ tag, title }: { tag: string; title: string }) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-purple-600 mb-2">{tag}</p>
      <h2 className="text-2xl md:text-3xl font-bold text-indigo-950">{title}</h2>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <ArchDiagram />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
