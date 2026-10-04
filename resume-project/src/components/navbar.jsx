import { Star, User, FolderKanban, Sparkles, Heart } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa6";
import { useState } from "react";
function Navbar({ onContactClick }) {
  const [activeTab, setActiveTab] = useState("home");

  const scrollTo = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-4 z-50 w-full flex justify-center px-4">
      <nav className="bg-white/95 backdrop-blur-md border border-neutral-900 rounded-full px-3 py-2 md:px-4 md:py-2 shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex items-center justify-between gap-3 md:gap-8 max-w-4xl w-full transition-all">
        
        {/* Left Navigation Pills */}
        <div className="flex items-center gap-1 md:gap-2">
          {/* HOME button (Yellow pill in reference) */}
          <button
            onClick={() => scrollTo("home")}
            className={`flex items-center gap-1.5 px-3 md:px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeTab === "home"
                ? "bg-[#ffd84d] text-neutral-950 border border-neutral-900 shadow-[1px_1px_0px_#000]"
                : "text-neutral-700 hover:text-black hover:bg-neutral-100"
            }`}
          >
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="tracking-wider uppercase">HOME</span>
          </button>

          {/* ABOUT */}
          <button
            onClick={() => scrollTo("about")}
            className={`flex items-center gap-1.5 px-2.5 md:px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeTab === "about"
                ? "bg-neutral-900 text-white"
                : "text-neutral-700 hover:text-black hover:bg-neutral-100"
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span className="tracking-wider uppercase hidden sm:inline">ABOUT</span>
          </button>

          {/* CASE STUDY / PROJECTS */}
          <button
            onClick={() => scrollTo("projects")}
            className={`flex items-center gap-1.5 px-2.5 md:px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeTab === "projects"
                ? "bg-neutral-900 text-white"
                : "text-neutral-700 hover:text-black hover:bg-neutral-100"
            }`}
          >
            <FolderKanban className="w-3.5 h-3.5" />
            <span className="tracking-wider uppercase hidden sm:inline">CASE STUDY</span>
          </button>

          {/* PLAYGROUND / SKILLS */}
          <button
            onClick={() => scrollTo("skills")}
            className={`flex items-center gap-1.5 px-2.5 md:px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeTab === "skills"
                ? "bg-neutral-900 text-white"
                : "text-neutral-700 hover:text-black hover:bg-neutral-100"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="tracking-wider uppercase hidden md:inline">PLAYGROUND</span>
          </button>
        </div>

        {/* Right Section: Social Badges + Contact Button */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* LinkedIn Badge (Yellow) */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-7 h-7 rounded-full bg-[#fef08a] border border-neutral-900 flex items-center justify-center text-neutral-900 hover:-translate-y-0.5 hover:shadow-sm transition-all"
          >
            <FaLinkedinIn className="w-3.5 h-3.5" />
          </a>

          {/* GitHub / Dribbble Badge (Pink) */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-7 h-7 rounded-full bg-[#f472b6] border border-neutral-900 flex items-center justify-center text-neutral-900 hover:-translate-y-0.5 hover:shadow-sm transition-all"
          >
            <FaGithub className="w-3.5 h-3.5" />
          </a>

          {/* Mail Badge (Green) */}
          <a
            href="mailto:contact@parijasharma.dev"
            aria-label="Email"
            className="w-7 h-7 rounded-full bg-[#86efac] border border-neutral-900 flex items-center justify-center text-neutral-900 hover:-translate-y-0.5 hover:shadow-sm transition-all"
          >
            <FaEnvelope className="w-3 h-3" />
          </a>

          {/* Contact Button (Pill with Heart) */}
          <button
            onClick={onContactClick || (() => scrollTo("contact"))}
            className="flex items-center gap-1.5 px-3 md:px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-neutral-900 bg-white hover:bg-neutral-950 hover:text-white transition-all shadow-[1px_1px_0px_#000] active:translate-y-0.5"
          >
            <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
            <span className="hidden xs:inline">CONTACT</span>
          </button>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;