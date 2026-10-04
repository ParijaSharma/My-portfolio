import React, { useState } from "react";
import profilePic from "../assets/pp-pic.jpg";
import LinuxAvatar from "../assets/linux.svg";
import reactLogo from "../assets/react.svg";
import { ArrowDown, ArrowUpRight, ArrowUpLeft } from "./Doodles";

function Herosection({ onContactClick }) {
  const [displayName, setDisplayName] = useState("PARIJA");
  const [roleTag, setRoleTag] = useState("Product Designer");
  const [locationTag, setLocationTag] = useState("Chicago, IL");

  return (
    <section id="home" className="w-full max-w-5xl mx-auto pt-10 md:pt-16 pb-12 px-4 relative flex flex-col items-center">
      
      {/* Top sticker row */}
      <div className="w-full max-w-xl flex items-end justify-between mb-2 px-2 relative">
        {/* Left Sticker: MADE THINGS */}
        <div className="transform -rotate-3 hover:rotate-0 transition-transform cursor-default">
          <span className="bg-[#bbf7d0] border border-neutral-900 text-neutral-900 px-3 py-1 rounded-full text-[11px] font-code font-bold uppercase tracking-wider shadow-[1px_1px_0px_#000]">
            MADE THINGS
          </span>
        </div>

        {/* Center: "my name is" + curved arrow pointing down */}
        <div className="flex flex-col items-center -mb-2">
          <span className="font-hand text-xl md:text-2xl text-neutral-700 tracking-wide">
            my name is
          </span>
          <ArrowDown className="w-5 h-8 text-neutral-700 -mt-1" />
        </div>

        {/* Right Sticker: SWEAT THE DETAILS */}
        <div className="transform rotate-3 hover:rotate-0 transition-transform cursor-default">
          <span className="bg-[#fef08a] border border-neutral-900 text-neutral-900 px-3 py-1 rounded-full text-[11px] font-code font-bold uppercase tracking-wider shadow-[1px_1px_0px_#000]">
            SWEAT THE DETAILS
          </span>
        </div>
      </div>

      {/* Main Pixel Name Box */}
      <div className="relative group my-1">
        {/* Sketchy orange rectangular border frame */}
        <div
          className="relative border-2 border-[#ff5520] bg-white/70 backdrop-blur-[2px] rounded-lg px-8 sm:px-14 md:px-20 py-4 md:py-6 shadow-[2px_2px_0px_rgba(255,85,32,0.3)] transition-all group-hover:shadow-[4px_4px_0px_rgba(255,85,32,0.4)] cursor-pointer select-none"
        >
          <h1 className="font-pixel text-4xl sm:text-5xl md:text-7xl font-bold tracking-[0.18em] text-neutral-950 text-center">
            Parija Sharma 
          </h1>
        </div>
      </div>

      {/* Bottom Row Around Name: Roles, Status Pill, Location */}
      <div className="w-full max-w-2xl flex flex-wrap items-center justify-between gap-3 mt-3 px-2 relative">
        
        {/* Left: Role sticker + arrow up-right */}
        <div className="flex items-center gap-1.5 transform -rotate-3 hover:rotate-0 transition-transform cursor-pointer">
          <span className="bg-[#fef08a] border border-neutral-900 text-neutral-950 px-3 py-0.5 rounded text-xs md:text-sm font-hand font-bold shadow-[1px_1px_0px_#000]">
            Devops
          </span>
          <ArrowUpRight className="w-6 h-6 text-neutral-600 hidden sm:block -mt-3" />
        </div>
        <div className="flex items-center gap-1.5 transform -rotate-3 hover:rotate-0 transition-transform cursor-pointer">
          <span className="bg-[#fef08a] border border-neutral-900 text-neutral-950 px-3 py-0.5 rounded text-xs md:text-sm font-hand font-bold shadow-[1px_1px_0px_#000]">
            Full Stack 
          </span>
          <ArrowUpRight className="w-6 h-6 text-neutral-600 hidden sm:block -mt-3" />
        </div>
        {/* Center: Open to work status pill */}
        <div className="bg-white/95 border border-neutral-800 rounded-full px-3.5 py-1 text-[11px] font-code tracking-wider text-neutral-800 flex items-center gap-2 shadow-[1px_1px_0px_rgba(0,0,0,0.1)]">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="font-semibold uppercase tracking-wider text-[10px] md:text-[11px]">
            OPEN TO NEW WORK AND GOOD PROBLEMS
          </span>
        </div>

        {/* Right: Location sticker + arrow up-left */}
        <div className="flex items-center gap-1.5 transform rotate-3 hover:rotate-0 transition-transform cursor-pointer">
          <ArrowUpLeft className="w-6 h-6 text-neutral-600 hidden sm:block -mt-3" />
          <span className="bg-[#bae6fd] border border-neutral-900 text-neutral-950 px-3 py-0.5 rounded text-xs md:text-sm font-hand font-bold shadow-[1px_1px_0px_#000]">
            Cloud
          </span>
        </div>
        <div className="flex items-center gap-1.5 transform rotate-3 hover:rotate-0 transition-transform cursor-pointer">
          <ArrowUpLeft className="w-6 h-6 text-neutral-600 hidden sm:block -mt-3" />
          <span className="bg-[#bae6fd] border border-neutral-900 text-neutral-950 px-3 py-0.5 rounded text-xs md:text-sm font-hand font-bold shadow-[1px_1px_0px_#000]">
            AI/ML
          </span>
        </div>

      </div>

      {/* Floating circular profile photo stickers (Left & Right) */}
      <div className="w-full max-w-4xl relative pointer-events-none mt-6">
        {/* Left floating sticker */}
        <div className="absolute -left-2 sm:left-4 -top-8 pointer-events-auto transform -rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-300">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#ff5520] p-0.5 bg-white shadow-md overflow-hidden">
            <img
              src={LinuxAvatar}
              alt="linux avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Right floating sticker */}
        <div className="absolute -right-2 sm:right-4 -top-8 pointer-events-auto transform rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-300">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#ff5520] p-0.5 bg-white shadow-md overflow-hidden">
            <img
              src={reactLogo}
              alt="react avatar badge"
              className="w-full h-full object-cover rounded-full filter contrast-105"
            />
          </div>
        </div>
      </div>

      {/* Main Bold Hero Statement */}
      <div className="mt-8 text-center max-w-2xl px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.25]">
          I build with logic, {" "}
          
          <br className="hidden sm:inline" />
          but think in colors.{" "}
          <span className="inline-flex items-center justify-center align-middle mx-1 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-pink-100 border border-pink-400 text-pink-500 text-lg sm:text-xl shadow-xs">
            🌸
          </span>
        </h2>
      </div>

      {/* Hero CTA Button */}
      <div className="mt-8">
        <button
          onClick={onContactClick || (() => {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          })}
          className="bg-[#111827] hover:bg-black text-white px-7 py-3 rounded-full text-xs font-code font-bold uppercase tracking-widest transition-all shadow-[2px_2px_0px_#475569] hover:shadow-[4px_4px_0px_#475569] hover:-translate-y-0.5 active:translate-y-0.5 flex items-center gap-2 group cursor-pointer"
        >
          <span className="text-blue-400 group-hover:rotate-45 transition-transform">✦</span>
          <span>CONTACT ME</span>
        </button>
      </div>

    </section>
  );
}

export default Herosection;