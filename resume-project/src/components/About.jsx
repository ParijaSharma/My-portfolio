import React from "react";
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
        {/* Handwritten "about me!" on the left */}
        <div className="md:absolute md:left-6 md:top-0 -rotate-6 mb-3 md:mb-0">
          <span className="font-hand text-2xl md:text-3xl text-neutral-600 tracking-wider font-semibold">
            about me!
          </span>
        </div>

        {/* Center outlined pill: [ what's up ] */}
        <div className="border border-neutral-900 rounded-md px-5 py-1.5 bg-white/90 shadow-[1px_1px_0px_#000] hover:scale-105 transition-transform">
          <span className="font-code text-sm md:text-base font-bold text-neutral-900 tracking-wider">
            what's up
          </span>
        </div>
      </div>

      {/* Main Container with 2 Polaroids and Bio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-items-center">
        
        {/* LEFT POLAROID: Portrait Photo */}
        <div className="lg:col-span-3 flex justify-center order-2 lg:order-1">
          <div className="relative bg-white p-3 pb-8 rounded-xs shadow-[0_14px_30px_rgba(0,0,0,0.12)] border border-neutral-200/90 w-56 sm:w-60 transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300">
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
          </div>
        </div>

        {/* CENTER: Bio Paragraph and Skill Sticker Tags */}
        <div className="lg:col-span-6 flex flex-col items-center text-center px-2 order-1 lg:order-2">
          
          {/* Handwritten Bio text */}
          <p className="font-hand text-2xl sm:text-3xl text-neutral-800 leading-relaxed max-w-xl mx-auto mb-8 font-medium">
           I'm an aspiring software engineer exploring the 
           intersection of Full-Stack development, Cloud,
            and AI/ML**. From React and AWS to SIH projects
             and my personal projects, I enjoy experimenting
              with technology by building things that solve 
              real problems. Always learning, always building,
              and also creating. 🎨
          </p>

          {/* Sticker Pill Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-lg">
            
            {/* Interaction Design / Yellow Tag */}
            <div className="flex items-center gap-1.5 transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all cursor-default">
              <span className="bg-[#fde047] border border-neutral-900 text-neutral-950 font-bold px-3.5 py-1.5 rounded-md text-xs font-sans-main shadow-[1px_1px_0px_#000]">
                System Design
              </span>
              <span className="w-6 h-6 rounded-md bg-[#facc15] border border-neutral-900 flex items-center justify-center text-xs shadow-[1px_1px_0px_#000]">
                ✦
              </span>
            </div>

            {/* Prototyping / Green Tag */}
            <div className="flex items-center gap-1.5 transform rotate-1 hover:rotate-0 hover:scale-105 transition-all cursor-default">
              <span className="bg-[#22c55e] border border-neutral-900 text-white font-bold px-3.5 py-1.5 rounded-full text-xs font-sans-main shadow-[1px_1px_0px_#000]">
                Prototyping
              </span>
              <span className="w-6 h-6 rounded-full bg-[#16a34a] border border-neutral-900 flex items-center justify-center text-xs shadow-[1px_1px_0px_#000]">
                🐢
              </span>
            </div>

            {/* User Research / Pink Tag */}
            <div className="flex items-center gap-1.5 transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all cursor-default">
              <span className="bg-[#f472b6] border border-neutral-900 text-white font-bold px-3.5 py-1.5 rounded-md text-xs font-sans-main shadow-[1px_1px_0px_#000]">
                Research
              </span>
              <span className="w-6 h-6 rounded-md bg-[#ec4899] border border-neutral-900 flex items-center justify-center text-xs shadow-[1px_1px_0px_#000]">
                🧩
              </span>
            </div>

            {/* Motion Design / Blue Tag */}
            <div className="flex items-center gap-1.5 transform rotate-2 hover:rotate-0 hover:scale-105 transition-all cursor-default">
              <span className="bg-[#3b82f6] border border-neutral-900 text-white font-bold px-3.5 py-1.5 rounded-full text-xs font-sans-main shadow-[1px_1px_0px_#000]">
                Building
              </span>
              <span className="w-6 h-6 rounded-full bg-[#2563eb] border border-neutral-900 flex items-center justify-center text-xs shadow-[1px_1px_0px_#000]">
                ⚡
              </span>
            </div>

            {/* Visual Design / Purple Tag */}
            <div className="flex items-center gap-1.5 transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all cursor-default">
              <span className="bg-[#a78bfa] border border-neutral-900 text-white font-bold px-3.5 py-1.5 rounded-md text-xs font-sans-main shadow-[1px_1px_0px_#000]">
                Visual Design
              </span>
              <span className="w-6 h-6 rounded-md bg-[#8b5cf6] border border-neutral-900 flex items-center justify-center text-xs shadow-[1px_1px_0px_#000]">
                🎨
              </span>
            </div>

            {/* UX Design / Teal Tag */}
            <div className="flex items-center gap-1.5 transform rotate-1 hover:rotate-0 hover:scale-105 transition-all cursor-default">
              <span className="bg-[#14b8a6] border border-neutral-900 text-white font-bold px-3.5 py-1.5 rounded-full text-xs font-sans-main shadow-[1px_1px_0px_#000]">
                Algorithms
              </span>
              <span className="w-6 h-6 rounded-full bg-[#2563eb] border border-neutral-900 flex items-center justify-center text-xs shadow-[1px_1px_0px_#000]">
                👀
              </span>
            </div>

          </div>

        </div>

        {/* RIGHT POLAROID: Desk / Workspace Photo */}
        <div className="lg:col-span-3 flex justify-center order-3">
          <div className="relative bg-white p-3 pb-8 rounded-xs shadow-[0_14px_30px_rgba(0,0,0,0.12)] border border-neutral-200/90 w-56 sm:w-60 transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300">
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
          </div>
        </div>

      </div>

    </section>
  );
}

export default About;
