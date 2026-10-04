import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/pp-pic.jpg";
import LinuxAvatar from "../assets/linux.svg";
import reactLogo from "../assets/react.svg";
import { ArrowDown, ArrowUpRight, ArrowUpLeft } from "./Doodles";

function Herosection({ onContactClick }) {
  // Typewriter effect state
  const fullName = "Parija Sharma";
  const [typedName, setTypedName] = useState("");
  const [isDoneTyping, setIsDoneTyping] = useState(false);

  useEffect(() => {
    setTypedName("");
    setIsDoneTyping(false);
    let currentIndex = 0;

    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        if (currentIndex <= fullName.length) {
          setTypedName(fullName.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setIsDoneTyping(true);
        }
      }, 105);

      return () => clearInterval(intervalId);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="home" className="w-full max-w-5xl mx-auto pt-10 md:pt-16 pb-12 px-4 relative flex flex-col items-center">
      
      {/* Top sticker row */}
      <div className="w-full max-w-xl flex items-end justify-between mb-2 px-2 relative">
        
        {/* Left Sticker: MADE THINGS (Canva Pop & Gentle Float) */}
        <motion.div
          initial={{ scale: 0, rotate: -15, opacity: 0 }}
          animate={{
            scale: 1,
            rotate: -3,
            opacity: 1,
            y: [0, -5, 0],
          }}
          transition={{
            scale: { type: "spring", stiffness: 280, damping: 14, delay: 0.1 },
            opacity: { duration: 0.2 },
            y: { repeat: Infinity, duration: 3.6, ease: "easeInOut" },
          }}
          whileHover={{ scale: 1.15, rotate: 2, y: -6 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer select-none"
        >
          <span className="bg-[#bbf7d0] border border-neutral-900 text-neutral-900 px-3 py-1 rounded-full text-[11px] font-code font-bold uppercase tracking-wider shadow-[1px_1px_0px_#000] inline-block">
            MADE THINGS
          </span>
        </motion.div>

        {/* Center: "my name is" + curved arrow pointing down */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.2 }}
          className="flex flex-col items-center -mb-2"
        >
          <span className="font-hand text-xl md:text-2xl text-neutral-700 tracking-wide select-none">
            my name is
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-8 text-neutral-700 -mt-1" />
          </motion.div>
        </motion.div>

        {/* Right Sticker: SWEAT THE DETAILS (Canva Pop & Gentle Float) */}
        <motion.div
          initial={{ scale: 0, rotate: 15, opacity: 0 }}
          animate={{
            scale: 1,
            rotate: 3,
            opacity: 1,
            y: [0, -5, 0],
          }}
          transition={{
            scale: { type: "spring", stiffness: 280, damping: 14, delay: 0.2 },
            opacity: { duration: 0.2 },
            y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.3 },
          }}
          whileHover={{ scale: 1.15, rotate: -2, y: -6 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer select-none"
        >
          <span className="bg-[#fef08a] border border-neutral-900 text-neutral-900 px-3 py-1 rounded-full text-[11px] font-code font-bold uppercase tracking-wider shadow-[1px_1px_0px_#000] inline-block">
            SWEAT THE DETAILS
          </span>
        </motion.div>
      </div>

      {/* Main Pixel Name Box with Typewriter Effect */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.25 }}
        whileHover={{ scale: 1.02 }}
        className="relative group my-1"
      >
        {/* Sketchy orange rectangular border frame */}
        <div className="relative border-2 border-[#ff5520] bg-white/70 backdrop-blur-[2px] rounded-lg px-6 sm:px-12 md:px-16 py-4 md:py-6 shadow-[2px_2px_0px_rgba(255,85,32,0.3)] transition-all group-hover:shadow-[4px_4px_0px_rgba(255,85,32,0.4)] cursor-default select-none">
          <h1 className="font-pixel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.14em] text-neutral-950 text-center min-h-[1.25em] flex items-center justify-center">
            <span>{typedName}</span>
            {/* Blinking typewriter pixel cursor */}
            <span
              className={`inline-block w-2 sm:w-3.5 h-6 sm:h-10 bg-[#ff5520] ml-1 sm:ml-2 align-middle ${
                isDoneTyping ? "animate-pulse opacity-75" : "animate-bounce"
              }`}
            />
          </h1>
        </div>
      </motion.div>

      {/* Bottom Row Around Name: Roles, Status Pill, Location */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.4 }}
        className="w-full max-w-2xl flex flex-wrap items-center justify-between gap-3 mt-3 px-2 relative"
      >
        
        {/* Left: Devops sticker */}
        <motion.div
          whileHover={{ scale: 1.15, rotate: 0, y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1.5 transform -rotate-3 transition-transform cursor-pointer"
        >
          <span className="bg-[#fef08a] border border-neutral-900 text-neutral-950 px-3 py-0.5 rounded text-xs md:text-sm font-hand font-bold shadow-[1px_1px_0px_#000]">
            Devops
          </span>
          <ArrowUpRight className="w-6 h-6 text-neutral-600 hidden sm:block -mt-3" />
        </motion.div>

        {/* Full Stack sticker */}
        <motion.div
          whileHover={{ scale: 1.15, rotate: 0, y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1.5 transform -rotate-2 transition-transform cursor-pointer"
        >
          <span className="bg-[#fef08a] border border-neutral-900 text-neutral-950 px-3 py-0.5 rounded text-xs md:text-sm font-hand font-bold shadow-[1px_1px_0px_#000]">
            Full Stack
          </span>
          <ArrowUpRight className="w-6 h-6 text-neutral-600 hidden sm:block -mt-3" />
        </motion.div>

        {/* Center: Open to work status pill */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/95 border border-neutral-800 rounded-full px-3.5 py-1 text-[11px] font-code tracking-wider text-neutral-800 flex items-center gap-2 shadow-[1px_1px_0px_rgba(0,0,0,0.1)] cursor-default"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="font-semibold uppercase tracking-wider text-[10px] md:text-[11px]">
            OPEN TO NEW WORK AND GOOD PROBLEMS
          </span>
        </motion.div>

        {/* Right: Cloud sticker */}
        <motion.div
          whileHover={{ scale: 1.15, rotate: 0, y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1.5 transform rotate-3 transition-transform cursor-pointer"
        >
          <ArrowUpLeft className="w-6 h-6 text-neutral-600 hidden sm:block -mt-3" />
          <span className="bg-[#bae6fd] border border-neutral-900 text-neutral-950 px-3 py-0.5 rounded text-xs md:text-sm font-hand font-bold shadow-[1px_1px_0px_#000]">
            Cloud
          </span>
        </motion.div>

        {/* AI/ML sticker */}
        <motion.div
          whileHover={{ scale: 1.15, rotate: 0, y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1.5 transform rotate-2 transition-transform cursor-pointer"
        >
          <ArrowUpLeft className="w-6 h-6 text-neutral-600 hidden sm:block -mt-3" />
          <span className="bg-[#bae6fd] border border-neutral-900 text-neutral-950 px-3 py-0.5 rounded text-xs md:text-sm font-hand font-bold shadow-[1px_1px_0px_#000]">
            AI/ML
          </span>
        </motion.div>

      </motion.div>

      {/* Floating circular avatar stickers (Canva Signature Float & Bob) */}
      <div className="w-full max-w-4xl relative pointer-events-none mt-6">
        
        {/* Left floating sticker (LinuxAvatar) */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            y: [0, -9, 0],
            rotate: [-14, -8, -14],
          }}
          transition={{
            scale: { type: "spring", stiffness: 240, damping: 15, delay: 0.5 },
            y: { repeat: Infinity, duration: 4.4, ease: "easeInOut" },
            rotate: { repeat: Infinity, duration: 5.2, ease: "easeInOut" },
          }}
          whileHover={{ scale: 1.25, rotate: 0 }}
          className="absolute -left-2 sm:left-4 -top-8 pointer-events-auto cursor-pointer"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#ff5520] p-1 bg-white shadow-lg overflow-hidden">
            <img
              src={LinuxAvatar}
              alt="linux avatar"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* Right floating sticker (reactLogo) */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            y: [0, -9, 0],
            rotate: [14, 8, 14],
          }}
          transition={{
            scale: { type: "spring", stiffness: 240, damping: 15, delay: 0.6 },
            y: { repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 0.4 },
            rotate: { repeat: Infinity, duration: 5.6, ease: "easeInOut" },
          }}
          whileHover={{ scale: 1.25, rotate: 0 }}
          className="absolute -right-2 sm:right-4 -top-8 pointer-events-auto cursor-pointer"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#ff5520] p-1 bg-white shadow-lg overflow-hidden">
            <img
              src={reactLogo}
              alt="react avatar badge"
              className="w-full h-full object-contain filter contrast-105"
            />
          </div>
        </motion.div>
      </div>

      {/* Main Bold Hero Statement */}
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.7 }}
        className="mt-8 text-center max-w-2xl px-4"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.25]">
          I build with logic, {" "}
          <br className="hidden sm:inline" />
          but think in colors.{" "}
          <motion.span
            animate={{
              rotate: [0, 12, -12, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 3.5,
              ease: "easeInOut",
            }}
            className="inline-flex items-center justify-center align-middle mx-1 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-pink-100 border border-pink-400 text-pink-500 text-lg sm:text-xl shadow-xs cursor-pointer select-none"
          >
            🌸
          </motion.span>
        </h2>
      </motion.div>

      {/* Hero CTA Button (Canva Spring Press) */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 240, damping: 16, delay: 0.85 }}
        className="mt-8"
      >
        <motion.button
          onClick={onContactClick || (() => {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          })}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.94 }}
          className="bg-[#111827] hover:bg-black text-white px-7 py-3 rounded-full text-xs font-code font-bold uppercase tracking-widest transition-all shadow-[2px_2px_0px_#475569] hover:shadow-[4px_4px_0px_#475569] flex items-center gap-2 group cursor-pointer"
        >
          <motion.span
            animate={{ rotate: [0, 180, 360] }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            className="text-blue-400"
          >
            ✦
          </motion.span>
          <span>CONTACT ME</span>
        </motion.button>
      </motion.div>

    </section>
  );
}

export default Herosection;