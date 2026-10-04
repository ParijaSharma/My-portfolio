import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Sparkles, Layers } from "lucide-react";
import { WashiTape } from "./Doodles";

import javaIcon from "../assets/java.svg";
import reactIcon from "../assets/react.svg";
import jsIcon from "../assets/javascript.svg";
import nodeIcon from "../assets/node-js.svg";
import mongoIcon from "../assets/leaf.svg";
import awsIcon from "../assets/awss.svg";
import terraformIcon from "../assets/terraform.svg";
import linuxIcon from "../assets/linux.svg";
import jenkinsIcon from "../assets/jenkins.svg";

function Carousel() {
  const scrollRef = useRef(null);

  const skills = [
    {
      name: "React",
      category: "Frontend",
      icon: reactIcon,
      tapeColor: "blue",
      badgeColor: "bg-sky-100 text-sky-800 border-sky-300",
      rotation: -2,
    },
    {
      name: "AWS Cloud",
      category: "Cloud",
      icon: awsIcon,
      tapeColor: "yellow",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      rotation: 1.5,
    },
    {
      name: "Terraform IaC",
      category: "DevOps",
      icon: terraformIcon,
      tapeColor: "pink",
      badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
      rotation: -1,
    },
    {
      name: "GitHub Actions CI/CD",
      category: "Automation",
      icon: jenkinsIcon,
      tapeColor: "mint",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
      rotation: 2,
    },
    {
      name: "Linux Systems",
      category: "OS & Kernel",
      icon: linuxIcon,
      tapeColor: "yellow",
      badgeColor: "bg-neutral-100 text-neutral-800 border-neutral-300",
      rotation: -2,
    },
    {
      name: "Node.js & Express",
      category: "Backend",
      icon: nodeIcon,
      tapeColor: "mint",
      badgeColor: "bg-green-100 text-green-800 border-green-300",
      rotation: 1,
    },
    {
      name: "MongoDB",
      category: "Database",
      icon: mongoIcon,
      tapeColor: "blue",
      badgeColor: "bg-teal-100 text-teal-800 border-teal-300",
      rotation: -1.5,
    },
    {
      name: "Java / DSA",
      category: "Algorithms",
      icon: javaIcon,
      tapeColor: "pink",
      badgeColor: "bg-orange-100 text-orange-900 border-orange-300",
      rotation: 2,
    },
    {
      name: "JavaScript ES6+",
      category: "Core Web",
      icon: jsIcon,
      tapeColor: "yellow",
      badgeColor: "bg-yellow-100 text-yellow-900 border-yellow-300",
      rotation: -1,
    },
  ];

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  return (
    <section id="skills" className="w-full max-w-6xl mx-auto py-12 px-4 relative">
      
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-pixel text-xs text-neutral-500 uppercase tracking-widest">
              PLAYGROUND & TOOLKIT
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight flex items-center gap-2">
            <span>Tech Stickers</span>
            <span className="text-lg font-hand text-neutral-500 font-normal">
              (collected along the way)
            </span>
          </h2>
        </div>

        {/* Scroll navigation buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={scrollLeft}
            aria-label="Scroll left"
            className="w-10 h-10 rounded-full bg-white border border-neutral-900 flex items-center justify-center text-neutral-900 shadow-[1px_1px_0px_#000] hover:bg-[#ffd84d] hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={scrollRight}
            aria-label="Scroll right"
            className="w-10 h-10 rounded-full bg-white border border-neutral-900 flex items-center justify-center text-neutral-900 shadow-[1px_1px_0px_#000] hover:bg-[#ffd84d] hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Sticker Track */}
      <div className="relative">
        
        {/* Soft edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#faf8f5] to-transparent z-10 pointer-events-none hidden sm:block" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#faf8f5] to-transparent z-10 pointer-events-none hidden sm:block" />

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar py-6 px-2 scroll-smooth"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{
                transform: `rotate(${skill.rotation}deg)`,
              }}
              className="flex-shrink-0 relative w-48 sm:w-52 bg-white rounded-xl p-5 pt-7 border border-neutral-800 shadow-[2px_3px_0px_#000] hover:shadow-[4px_6px_0px_#000] hover:rotate-0 hover:-translate-y-1.5 transition-all duration-300 group cursor-default"
            >
              {/* Taped Washi Tape strip at top */}
              <WashiTape
                color={skill.tapeColor}
                rotation={skill.rotation * -2}
                className="-top-2.5 left-1/2 -translate-x-1/2"
              />

              {/* Category pill */}
              <div className="flex justify-between items-center mb-4">
                <span className={`text-[10px] font-code font-bold uppercase px-2 py-0.5 rounded-full border ${skill.badgeColor}`}>
                  {skill.category}
                </span>
                <span className="font-pixel text-[9px] text-neutral-400">
                  #{String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Tech Icon */}
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center p-2 rounded-lg bg-neutral-50 border border-neutral-100 group-hover:scale-110 transition-transform">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain filter group-hover:drop-shadow-sm"
                />
              </div>

              {/* Title */}
              <h3 className="text-center font-sans-main font-bold text-neutral-900 text-sm tracking-tight">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default Carousel;