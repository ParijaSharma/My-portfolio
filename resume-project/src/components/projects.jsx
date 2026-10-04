import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

function Projects() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedImage, setExpandedImage] = useState(null);

  const projectsData = [
    {
      id: "01",
      tabTitle: "✦ PROJECT 01",
      date: "MAR 2, 2026",
      title: "Tandem",
      subtitle: "From 'who owes who' to money that finally feels shared.",
      longDesc:
        "A collaborative financial balance and shared expense tracking platform designed for friends, roommates, and teams with instant settlement calculations, intuitive debt simplification, and real-time syncing.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
      features: [
        "Smart minimal-transactions settlement algorithm",
        "Real-time expense ledger & split bills",
        "Multi-currency support & exportable reports",
        "Receipt scan & automated category matching",
      ],
      activeTabBg: "bg-[#2563eb] text-white",
      githubUrl: "https://github.com",
      liveUrl: "https://tandem.example.com",
      screenshots: [img1, img2, img4],
    },
    {
      id: "02",
      tabTitle: "✦ PROJECT 02",
      date: "JAN 2, 2026",
      title: "Forge",
      subtitle:
        "Getting a new engineer from day one to shipping without the panic.",
      longDesc:
        "An automated cloud onboarding and CI/CD infrastructure suite. Provisions reproducible cloud staging environments with Terraform, streamlines test runners, and guarantees zero-downtime containerized production releases.",
      tags: ["AWS", "Terraform", "Docker", "Jenkins", "Kubernetes", "Linux"],
      features: [
        "One-click developer sandbox provisioning",
        "Automated multi-stage deployment gates",
        "Zero-downtime rolling container releases",
        "Telemetry & automated rollback triggers",
      ],
      activeTabBg: "bg-[#f59e0b] text-neutral-950",
      githubUrl: "https://github.com",
      liveUrl: "https://cloudops.example.com",
      screenshots: [img3, img5, img1],
    },
    {
      id: "03",
      tabTitle: "✦ PROJECT 03",
      date: "OCT 14, 2025",
      title: "Vidyarthi Saarthi",
      subtitle:
        "NLP-powered platform helping students discover scholarships & internships that match their profile.",
      longDesc:
        "Comprehensive scholarship and opportunity aggregation portal powered by Natural Language Processing. Intelligent semantic matching connects students with curated funding programs and career opportunities.",
      tags: ["React", "Flask", "MongoDB", "NLP", "OpenAI API"],
      features: [
        "NLP-powered semantic recommendations",
        "National & private scholarship aggregation",
        "Personalized profile matching",
        "Deadlines & application tracking",
      ],
      activeTabBg: "bg-[#7c3aed] text-white",
      githubUrl: "https://github.com",
      liveUrl: "https://demo.vidyarthi-saarthi.example.com",
      screenshots: [img1, img2, img3, img4, img5, img6],
    },
  ];

  const project = projectsData[activeTab];

  const nextScreenshot = () =>
    setCurrentSlide((p) =>
      p === project.screenshots.length - 1 ? 0 : p + 1
    );

  const prevScreenshot = () =>
    setCurrentSlide((p) =>
      p === 0 ? project.screenshots.length - 1 : p - 1
    );

  const changeProject = (i) => {
    setActiveTab(i);
    setCurrentSlide(0);
  };

  return (
    <section
      id="projects"
      className="w-full max-w-6xl mx-auto py-14 px-4"
    >
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <span className="font-pixel text-xs text-neutral-500 uppercase tracking-widest">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Personal & Hackathon projects
          </h2>
        </div>

        <div className="flex gap-1 bg-neutral-900/10 p-1.5 rounded-xl border border-neutral-300 w-fit">
          {projectsData.map((p, i) => (
            <button
              key={p.id}
              onClick={() => changeProject(i)}
              className={`px-3 md:px-4 py-1.5 rounded-lg font-code text-xs font-bold transition ${
                activeTab === i
                  ? "bg-neutral-900 text-white"
                  : "text-neutral-700 hover:bg-white"
              }`}
            >
              {p.tabTitle}
            </button>
          ))}
        </div>
      </div>

      {/* TWO SEPARATE FLOATING CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">

        {/* ================= TIMELINE CARD ================= */}
        <aside
          className="
            lg:col-span-4
            relative
            bg-[#f5c518]
            rounded-3xl
            border-2 border-neutral-950
            shadow-[8px_8px_0px_#111]
            p-6 md:p-8
            min-h-[650px]
            flex flex-col justify-between
            overflow-hidden
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-[11px_12px_0px_#111]
          "
        >
          {/* decorative circle */}
          <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full border-[10px] border-neutral-950/10" />

          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-950" />
              <span className="font-code text-xs font-bold tracking-widest">
                MY JOURNEY
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-extrabold leading-[.95] mt-5">
              Learning
              <br />
              in public.
            </h3>

            <p className="font-code text-xs leading-relaxed mt-5 max-w-xs text-neutral-800">
              A timeline of the technologies, projects and problems
              that shaped how I build.
            </p>
          </div>

          {/* TIMELINE */}
          <div className="relative my-10">
            <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-neutral-950/30" />

            <div className="space-y-8">
              {[
                ["2024", "STARTED BUILDING", "HTML · CSS · JavaScript"],
                ["2025", "AI / ML + SIH", "Python · NLP · Computer Vision"],
                ["2025", "FULL STACK", "React · Java · Spring Boot · MongoDB"],
                ["2026", "CLOUD + DEVOPS", "AWS · Docker · CI/CD · MLOps"],
              ].map(([year, title, tech], i) => (
                <div key={i} className="relative pl-7">
                  <span className="absolute left-0 top-1 w-4 h-4 rounded-full bg-neutral-950 border-4 border-[#f5c518] z-10" />

                  <p className="font-code text-xs font-bold opacity-60">
                    {year}
                  </p>

                  <h4 className="font-extrabold text-sm mt-1">
                    {title}
                  </h4>

                  <p className="font-code text-xs mt-1 text-neutral-800">
                    {tech}
                  </p>

                  {i === 1 && (
                    <span className="inline-block mt-2 bg-neutral-950 text-[#f5c518] px-2 py-1 rounded text-[9px] font-code font-bold">
                      NATIONAL LEVEL SIH
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-950/30">
            <p className="font-code text-[10px] font-bold tracking-widest">
              CURRENT STATUS
            </p>
            <p className="font-extrabold text-lg mt-1">
              Still building. →
            </p>
          </div>
        </aside>

        {/* ================= PROJECT CARD ================= */}
        <div
          className="
            lg:col-span-8
            relative
            rounded-3xl
            bg-[#0e121a]
            text-white
            border-2 border-neutral-900
            shadow-[8px_8px_0px_#f5c518]
            overflow-hidden
            min-h-[650px]
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-[11px_12px_0px_#f5c518]
          "
        >
          {/* TOP BAR */}
          <div className="flex items-stretch bg-[#080b11] border-b border-neutral-800 px-2 pt-2">
            <div
              className={`relative px-6 py-2.5 ${project.activeTabBg} font-code text-xs font-bold tracking-wider uppercase`}
              style={{
                clipPath:
                  "polygon(0 0,calc(100% - 14px) 0,100% 100%,0 100%)",
              }}
            >
              {project.tabTitle}
            </div>

            <button
              onClick={() =>
                changeProject((activeTab + 1) % projectsData.length)
              }
              className="
                relative px-5 py-2.5 bg-[#171e2c]
                text-neutral-400 hover:text-white
                font-code text-xs hidden sm:block
              "
              style={{
                clipPath:
                  "polygon(0 0,calc(100% - 14px) 0,100% 100%,0 100%)",
              }}
            >
              {projectsData[(activeTab + 1) % projectsData.length].tabTitle}
            </button>

            <div className="flex-1 flex items-center justify-end px-4 gap-2 text-neutral-500 font-code text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="hidden md:inline">SYSTEM ONLINE</span>
            </div>
          </div>

          {/* PROJECT CONTENT */}
          <div className="p-6 md:p-8 lg:p-9">
            <div className="flex items-center gap-2 text-neutral-400 font-code text-xs">
              <span className="w-2 h-2 rounded-full bg-neutral-400" />
              {project.date}
            </div>

            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-none mt-4">
              {project.title}
            </h3>

            <p className="text-neutral-300 font-medium text-base md:text-lg mt-4 leading-snug">
              "{project.subtitle}"
            </p>

            <p className="text-neutral-400 text-sm leading-relaxed mt-4">
              {project.longDesc}
            </p>

            {/* SCREENSHOT */}
            <div className="relative bg-neutral-900 rounded-xl p-3 mt-6 border border-neutral-700 shadow-2xl">
              <div className="absolute -top-3 -left-3 h-5 w-16 bg-white/85 border border-neutral-300 rotate-[-12deg] z-20" />
              <div className="absolute -top-3 -right-3 h-5 w-16 bg-white/85 border border-neutral-300 rotate-[12deg] z-20" />

              <div className="flex items-center justify-between px-1 pb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />

                  <span className="ml-2 font-code text-[10px] text-neutral-400 truncate">
                    {project.title.toLowerCase().replace(/\s+/g, "-")}.app
                  </span>
                </div>

                <button
                  onClick={() =>
                    setExpandedImage(project.screenshots[currentSlide])
                  }
                  className="text-neutral-400 hover:text-white"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="relative aspect-[16/9] bg-neutral-950 rounded-lg overflow-hidden border border-neutral-800">
                <img
                  src={project.screenshots[currentSlide]}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-contain cursor-pointer"
                  onClick={() =>
                    setExpandedImage(project.screenshots[currentSlide])
                  }
                />

                <button
                  onClick={prevScreenshot}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 text-white p-2 rounded-full"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={nextScreenshot}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 text-white p-2 rounded-full"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/60 px-2.5 py-1 rounded-full">
                  {project.screenshots.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        currentSlide === i
                          ? "w-4 bg-yellow-400"
                          : "w-1.5 bg-neutral-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* FEATURES + TECH */}
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <p className="font-code text-[10px] tracking-widest text-neutral-500 mb-3">
                  WHAT I BUILT
                </p>

                <div className="space-y-2">
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex gap-2 text-xs font-code text-blue-300"
                    >
                      <span className="text-blue-400">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-code text-[10px] tracking-widest text-neutral-500 mb-3">
                  TECH STACK
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-neutral-800 border border-neutral-700 text-neutral-300 font-code text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* LINKS */}
            <div className="flex gap-5 mt-6">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="font-code text-sm font-bold text-[#ffd84d] hover:text-white"
              >
                VIEW PROJECT ↗
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 font-code text-xs text-neutral-400 hover:text-white"
              >
                <FaGithub />
                SOURCE CODE
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* LIGHTBOX */}
      {expandedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setExpandedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-neutral-900 p-2 rounded-2xl border border-neutral-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setExpandedImage(null)}
              className="float-right m-2 text-neutral-400 hover:text-white font-code text-xs px-3 py-1 bg-neutral-800 rounded"
            >
              ✕ CLOSE
            </button>

            <img
              src={expandedImage}
              alt="Expanded preview"
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;