import React from "react";
import Navbar from "./components/navbar";
import Herosection from "./components/herosection";
import About from "./components/About";
import Projects from "./components/projects";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import "./index.css";

function App() {
  const handleContactClick = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="lined-paper-bg min-h-screen text-neutral-900 selection:bg-[#ffd84d] selection:text-neutral-950 relative overflow-x-hidden">
      {/* Decorative notebook left margin guide (optional subtle red/pink binder margin line like genuine ruled notebook paper) */}
      <div className="fixed left-6 md:left-16 top-0 bottom-0 w-[1px] bg-rose-300/30 pointer-events-none hidden lg:block" />

      {/* Main Page Layout */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Top Navbar */}
        <Navbar onContactClick={handleContactClick} />

        {/* Hero Section */}
        <Herosection onContactClick={handleContactClick} />

        {/* About Me Section with taped polaroids */}
        <About />

        {/* Projects Section with Sci-Fi Folder Tabs */}
        <Projects />

        {/* Skills / Tech Playground */}
        <Carousel />

        {/* Contact Slip Section */}
        <Contact />
      </div>
    </div>
  );
}

export default App;