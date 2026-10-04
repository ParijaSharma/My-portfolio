import React from "react";
import React, { useState } from "react";
import {
  FolderGit2,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

function Projects() {
  const screenshots = [img1, img2, img3, img4, img5, img6];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? screenshots.length - 1 : prev - 1
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-12 px-6">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-6">
        <FolderGit2 className="w-8 h-8 text-white" />
        <h2 className="text-4xl font-bold text-white">
         Personal Projects
        </h2>
      </div>

      {/* Project Card */}
      <div className="flex bg-black/60 backdrop-blur-md border border-yellow-500/40 rounded-3xl p-8 gap-8 shadow-[0_0_25px_rgba(255,215,0,0.25)] min-h-[500px]">

        <div className="w-3/5 flex items-center">
          <div className="w-full bg-zinc-900 rounded-2xl p-3 shadow-lg">

            <div className="flex gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            {/* Image Container */}
            <div className="relative aspect-video overflow-hidden rounded-xl bg-black">

              <img
                src={screenshots[current]}
                alt={`Screenshot ${current + 1}`}
                className="w-full h-full object-contain transition-all duration-500"
              />

              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black p-3 rounded-full text-white transition"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black p-3 rounded-full text-white transition"
              >
                <ChevronRight size={24} />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      current === index
                        ? "w-6 bg-yellow-400"
                        : "w-2 bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div className="w-2/5 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center justify-center text-white rounded-xl h-[60px] w-[60px] bg-yellow-500">
              <GraduationCap size={28} />
            </span>

            <h1 className="text-white font-bold text-4xl">
              Vidyarthi Saarthi
            </h1>
          </div>

          <p className="text-gray-300 text-md leading-relaxed mb-6">
            NLP-powered platform that helps students discover
            scholarships and internship opportunities in one place.
            Uses intelligent filtering and personalized matching
            to reduce the effort of searching across multiple portals.
          </p>

          {/* Features */}
          <div className="space-y-3 mb-8">
            <div className="text-purple-300">
              ✓ NLP-powered recommendations
            </div>

            <div className="text-purple-300">
              ✓ Scholarship aggregation
            </div>

            <div className="text-purple-300">
              ✓ Internship discovery
            </div>

            <div className="text-purple-300">
              ✓ Personalized matching
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">
              React
            </span>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">
              Flask
            </span>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">
              MongoDB
            </span>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">
              NLP
            </span>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">
              Chat gpt AI
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition">
              GitHub
            </button>

            <button className="px-6 py-3 border border-gray-600 hover:border-purple-500 text-white rounded-xl transition">
              Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;