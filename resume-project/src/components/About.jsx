import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/pp-pic.jpg";
import workspacePic from "../assets/workspace.jpg";
import { HandDrawnDivider, WashiTape } from "./Doodles";
import Hack_jnu_pic from "../assets/hack_jnu_pic.jpeg";

function About() {
  return (
    <section id="about" className="w-full max-w-5xl mx-auto py-12 px-4 relative">
      
      {/* Hand-drawn divider curve */}
      <HandDrawnDivider className="-mt-4 mb-8" />

      {/* Top Section Header: "about me!" and "[ what's up ]" */}
      <div className="relative flex flex-col items-center mb-10">
        
        {/* Handwritten "about me!" on the left (Canva Gentle Wobble) */}
        <motion.div
          animate={{ rotate: [-8, -4, -8] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="md:absolute md:left-6 md:top-0 mb-3 md:mb-0 cursor-default select-none"
        >
          <span className="font-hand text-2xl md:text-3xl text-neutral-600 tracking-wider font-semibold">
            about me!
          </span>
        </motion.div>

        {/* Center outlined pill: [ what's up ] (Canva Pop) */}
        <motion.div
          whileInView={{ scale: [0.8, 1.08, 1], opacity: [0, 1] }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 15 }}
          whileHover={{ scale: 1.1, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          className="border border-neutral-900 rounded-md px-5 py-1.5 bg-white/90 shadow-[1px_1px_0px_#000] cursor-pointer select-none"
        >
          <span className="font-code text-sm md:text-base font-bold text-neutral-900 tracking-wider">
            what's up
          </span>
        </motion.div>
      </div>

      {/* Main Container with 2 Polaroids and Bio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-items-center">
        
        {/* LEFT POLAROID: Portrait Photo (Canva Scrapbook Drop & Lift) */}
        <div className="lg:col-span-3 flex justify-center order-2 lg:order-1">
          <motion.div
            initial={{ y: 40, opacity: 0, rotate: -8 }}
            whileInView={{ y: 0, opacity: 1, rotate: -3 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            whileHover={{
              scale: 1.08,
              rotate: 0,
              y: -8,
              boxShadow: "0 22px 35px rgba(0,0,0,0.18)",
              transition: { type: "spring", stiffness: 350, damping: 15 },
            }}
            className="relative bg-white p-3 pb-8 rounded-xs shadow-[0_14px_30px_rgba(0,0,0,0.12)] border border-neutral-200/90 w-56 sm:w-60 cursor-pointer select-none"
          >
            {/* Top-left blue washi tape */}
            <WashiTape color="blue" rotation={-35} className="-top-3 -left-3" />
            {/* Top-right yellow washi tape */}
            <WashiTape color="yellow" rotation={25} className="-top-2 -right-3" />

            {/* Photo */}
            <div className="aspect-[4/5] overflow-hidden bg-neutral-100 rounded-xs mb-3 border border-neutral-200">
              <img
                src={profilePic}
                alt="Parija"
                className="w-full h-full object-cover filter contrast-[1.03]"
              />
            </div>

            {/* Bottom handwritten caption */}
            <div className="text-center">
              <span className="font-hand text-lg text-neutral-500 font-semibold">
                'me ✨
              </span>
            </div>
          </motion.div>
        </div>

        {/* CENTER: Bio Paragraph and Skill Sticker Tags */}
        <div className="lg:col-span-6 flex flex-col items-center text-center px-2 order-1 lg:order-2">
          
          {/* Handwritten Bio text (Canva Soft Fade & Float) */}
          <motion.p
            initial={{ y: 25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
            className="font-hand text-2xl sm:text-3xl text-neutral-800 leading-relaxed max-w-xl mx-auto mb-8 font-medium"
          >
            I'm an aspiring software engineer exploring the 
            intersection of Full-Stack development, Cloud,
            and AI/ML**. From React and AWS to SIH projects
            and my personal projects, I enjoy experimenting
            with technology by building things that solve 
            real problems. Always learning, always building,
            and also creating. 🎨
          </motion.p>

          {/* Sticker Pill Badges with Stagger & Canva Hover Lift */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-lg">
            
            {/* System Design / Yellow Tag */}
            <motion.div
              whileHover={{ scale: 1.15, rotate: 0, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 transform -rotate-1 transition-transform cursor-pointer"
            >
              <span className="bg-[#fde047] border border-neutral-900 text-neutral-950 font-bold px-3.5 py-1.5 rounded-md text-xs font-sans-main shadow-[1px_1px_0px_#000]">
                System Design
              </span>
              <span className="w-6 h-6 rounded-md bg-[#facc15] border border-neutral-900 flex items-center justify-center text-xs shadow-[1px_1px_0px_#000]">
                ✦
              </span>
            </motion.div>

            {/* Prototyping / Green Tag */}
            <motion.div
              whileHover={{ scale: 1.15, rotate: 0, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 transform rotate-1 transition-transform cursor-pointer"
            >
              <span className="bg-[#22c55e] border border-neutral-900 text-white font-bold px-3.5 py-1.5 rounded-full text-xs font-sans-main shadow-[1px_1px_0px_#000]">
                Prototyping
              </span>
              <span className="w-6 h-6 rounded-full bg-[#16a34a] border border-neutral-900 flex items-center justify-center text-xs shadow-[1px_1px_0px_#000]">
                🐢
              </span>
            </motion.div>

            {/* Research / Pink Tag */}
            <motion.div
              whileHover={{ scale: 1.15, rotate: 0, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 transform -rotate-2 transition-transform cursor-pointer"
            >
              <span className="bg-[#f472b6] border border-neutral-900 text-white font-bold px-3.5 py-1.5 rounded-md text-xs font-sans-main shadow-[1px_1px_0px_#000]">
                Research
              </span>
              <span className="w-6 h-6 rounded-md bg-[#ec4899] border border-neutral-900 flex items-center justify-center text-xs shadow-[1px_1px_0px_#000]">
                🧩
              </span>
            </motion.div>

            {/* Building / Blue Tag */}
            <motion.div
              whileHover={{ scale: 1.15, rotate: 0, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 transform rotate-2 transition-transform cursor-pointer"
            >
              <span className="bg-[#3b82f6] border border-neutral-900 text-white font-bold px-3.5 py-1.5 rounded-full text-xs font-sans-main shadow-[1px_1px_0px_#000]">
                Building
              </span>
              <span className="w-6 h-6 rounded-full bg-[#2563eb] border border-neutral-900 flex items-center justify-center text-xs shadow-[1px_1px_0px_#000]">
                ⚡
              </span>
            </motion.div>

            {/* Visual Design / Purple Tag */}
            <motion.div
              whileHover={{ scale: 1.15, rotate: 0, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 transform -rotate-1 transition-transform cursor-pointer"
            >
              <span className="bg-[#a78bfa] border border-neutral-900 text-white font-bold px-3.5 py-1.5 rounded-md text-xs font-sans-main shadow-[1px_1px_0px_#000]">
                Visual Design
              </span>
              <span className="w-6 h-6 rounded-md bg-[#8b5cf6] border border-neutral-900 flex items-center justify-center text-xs shadow-[1px_1px_0px_#000]">
                🎨
              </span>
            </motion.div>

            {/* Algorithms / Teal Tag */}
            <motion.div
              whileHover={{ scale: 1.15, rotate: 0, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 transform rotate-1 transition-transform cursor-pointer"
            >
              <span className="bg-[#14b8a6] border border-neutral-900 text-white font-bold px-3.5 py-1.5 rounded-full text-xs font-sans-main shadow-[1px_1px_0px_#000]">
                Algorithms
              </span>
              <span className="w-6 h-6 rounded-full bg-[#2563eb] border border-neutral-900 flex items-center justify-center text-xs shadow-[1px_1px_0px_#000]">
                👀
              </span>
            </motion.div>

          </div>

        </div>

        {/* RIGHT POLAROID: Workspace / Hackathon Photo (Canva Scrapbook Drop & Lift) */}
        <div className="lg:col-span-3 flex justify-center order-3">
          <motion.div
            initial={{ y: 40, opacity: 0, rotate: 8 }}
            whileInView={{ y: 0, opacity: 1, rotate: 3 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.15 }}
            whileHover={{
              scale: 1.08,
              rotate: 0,
              y: -8,
              boxShadow: "0 22px 35px rgba(0,0,0,0.18)",
              transition: { type: "spring", stiffness: 350, damping: 15 },
            }}
            className="relative bg-white p-3 pb-8 rounded-xs shadow-[0_14px_30px_rgba(0,0,0,0.12)] border border-neutral-200/90 w-56 sm:w-60 cursor-pointer select-none"
          >
            {/* Top washi tape */}
            <WashiTape color="white" rotation={-15} className="-top-3 left-6" />
            <WashiTape color="pink" rotation={20} className="-top-2 right-4" />

            {/* Workspace Photo */}
            <div className="aspect-[4/5] overflow-hidden bg-neutral-100 rounded-xs mb-3 border border-neutral-200">
              <img
                src={Hack_jnu_pic}
                alt="Workspace setup"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom handwritten caption */}
            <div className="text-center">
              <span className="font-hand text-sm text-neutral-500 font-semibold">
                Hackathons ☕
              </span>
            </div>
          </motion.div>
        </div>

      </div>

    </section>
  );
}

export default About;
