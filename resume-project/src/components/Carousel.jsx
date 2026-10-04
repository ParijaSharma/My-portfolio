import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { motion } from "framer-motion";
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
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const baseSkills = [
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

  // Duplicate skills list for infinite seamless loop
  const skills = [...baseSkills, ...baseSkills];

  // Auto-sliding loop using requestAnimationFrame
  useEffect(() => {
    let animationFrameId;
    let lastTime = performance.now();

    const step = (time) => {
      const delta = time - lastTime;
      lastTime = time;

      if (isPlaying && !isHovered && scrollRef.current) {
        // Smooth slide at ~45 pixels per second
        const pixelsToScroll = (45 * delta) / 1000;
        scrollRef.current.scrollLeft += pixelsToScroll;

        // When half of the duplicated list has scrolled, loop seamlessly back to start
        const halfWidth = scrollRef.current.scrollWidth / 2;
        if (scrollRef.current.scrollLeft >= halfWidth) {
          scrollRef.current.scrollLeft = 0;
        }
      }

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying, isHovered]);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
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

        {/* Scroll Controls: Stop / Slide Button + Arrows */}
        <div className="flex items-center gap-2.5">
          
          {/* STOP / PLAY SLIDING BUTTON */}
          <motion.button
            onClick={togglePlay}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isPlaying ? "Stop sliding" : "Start sliding"}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-full border border-neutral-900 font-code text-xs font-bold uppercase transition-all shadow-[1px_1px_0px_#000] cursor-pointer ${
              isPlaying
                ? "bg-[#ffd84d] text-neutral-950 hover:bg-[#ffe169]"
                : "bg-white text-neutral-800 hover:bg-neutral-100"
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span>Stop</span>
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse ml-0.5" />
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Slide</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 ml-0.5" />
              </>
            )}
          </motion.button>

          {/* Left Arrow */}
          <motion.button
            onClick={scrollLeft}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Scroll left"
            className="w-9 h-9 rounded-full bg-white border border-neutral-900 flex items-center justify-center text-neutral-900 shadow-[1px_1px_0px_#000] hover:bg-[#ffd84d] transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </motion.button>

          {/* Right Arrow */}
          <motion.button
            onClick={scrollRight}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Scroll right"
            className="w-9 h-9 rounded-full bg-white border border-neutral-900 flex items-center justify-center text-neutral-900 shadow-[1px_1px_0px_#000] hover:bg-[#ffd84d] transition-all cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Horizontal Sticker Track with Continuous Sliding */}
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* Soft edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-[#fbf9f5] to-transparent z-10 pointer-events-none hidden sm:block" />
        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[#fbf9f5] to-transparent z-10 pointer-events-none hidden sm:block" />

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden no-scrollbar py-6 px-2 select-none"
          style={{ scrollBehavior: isPlaying ? "auto" : "smooth" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              style={{
                transform: `rotate(${skill.rotation}deg)`,
              }}
              whileHover={{
                scale: 1.1,
                rotate: 0,
                y: -10,
                transition: { type: "spring", stiffness: 380, damping: 14 },
              }}
              className="flex-shrink-0 relative w-48 sm:w-52 bg-white rounded-xl p-5 pt-7 border border-neutral-800 shadow-[2px_3px_0px_#000] hover:shadow-[5px_7px_0px_#000] transition-shadow duration-300 group cursor-pointer"
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
                  #{String((index % baseSkills.length) + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Tech Icon with Canva Hover Pop */}
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center p-2 rounded-lg bg-neutral-50 border border-neutral-100 group-hover:bg-[#fef9c3] group-hover:scale-110 transition-all duration-300">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain filter group-hover:drop-shadow-md"
                />
              </div>

              {/* Title */}
              <h3 className="text-center font-sans-main font-bold text-neutral-900 text-sm tracking-tight group-hover:text-blue-600 transition-colors">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default Carousel;