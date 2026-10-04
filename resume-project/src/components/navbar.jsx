import { Star, User, FolderKanban, Sparkles, Heart } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion";

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
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="bg-white/95 backdrop-blur-md border border-neutral-900 rounded-full px-3 py-2 md:px-4 md:py-2 shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex items-center justify-between gap-3 md:gap-8 max-w-4xl w-full transition-all"
      >
        
        {/* Left Navigation Pills */}
        <div className="flex items-center gap-1 md:gap-2">
          {/* HOME button (Yellow pill in reference) */}
          <motion.button
            onClick={() => scrollTo("home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-1.5 px-3 md:px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeTab === "home"
                ? "bg-[#ffd84d] text-neutral-950 border border-neutral-900 shadow-[1px_1px_0px_#000]"
                : "text-neutral-700 hover:text-black hover:bg-neutral-100"
            }`}
          >
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="tracking-wider uppercase">HOME</span>
          </motion.button>

          {/* ABOUT */}
          <motion.button
            onClick={() => scrollTo("about")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-1.5 px-2.5 md:px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeTab === "about"
                ? "bg-neutral-900 text-white"
                : "text-neutral-700 hover:text-black hover:bg-neutral-100"
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span className="tracking-wider uppercase hidden sm:inline">ABOUT</span>
          </motion.button>

          {/* CASE STUDY / PROJECTS */}
          <motion.button
            onClick={() => scrollTo("projects")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-1.5 px-2.5 md:px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeTab === "projects"
                ? "bg-neutral-900 text-white"
                : "text-neutral-700 hover:text-black hover:bg-neutral-100"
            }`}
          >
            <FolderKanban className="w-3.5 h-3.5" />
            <span className="tracking-wider uppercase hidden sm:inline">CASE STUDY</span>
          </motion.button>

          {/* PLAYGROUND / SKILLS */}
          <motion.button
            onClick={() => scrollTo("skills")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-1.5 px-2.5 md:px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeTab === "skills"
                ? "bg-neutral-900 text-white"
                : "text-neutral-700 hover:text-black hover:bg-neutral-100"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="tracking-wider uppercase hidden md:inline">PLAYGROUND</span>
          </motion.button>
        </div>

        {/* Right Section: Social Badges + Contact Button */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* LinkedIn Badge (Yellow) */}
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.2, rotate: 6 }}
            whileTap={{ scale: 0.9 }}
            className="w-7 h-7 rounded-full bg-[#fef08a] border border-neutral-900 flex items-center justify-center text-neutral-900 shadow-sm transition-all"
          >
            <FaLinkedinIn className="w-3.5 h-3.5" />
          </motion.a>

          {/* GitHub / Dribbble Badge (Pink) */}
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            whileHover={{ scale: 1.2, rotate: -6 }}
            whileTap={{ scale: 0.9 }}
            className="w-7 h-7 rounded-full bg-[#f472b6] border border-neutral-900 flex items-center justify-center text-neutral-900 shadow-sm transition-all"
          >
            <FaGithub className="w-3.5 h-3.5" />
          </motion.a>

          {/* Mail Badge (Green) */}
          <motion.a
            href="mailto:contact@parijasharma.dev"
            aria-label="Email"
            whileHover={{ scale: 1.2, rotate: 6 }}
            whileTap={{ scale: 0.9 }}
            className="w-7 h-7 rounded-full bg-[#86efac] border border-neutral-900 flex items-center justify-center text-neutral-900 shadow-sm transition-all"
          >
            <FaEnvelope className="w-3 h-3" />
          </motion.a>

          {/* Contact Button (Pill with Heart) */}
          <motion.button
            onClick={onContactClick || (() => scrollTo("contact"))}
            whileHover={{ scale: 1.06, y: -1 }}
            whileTap={{ scale: 0.94, y: 1 }}
            className="flex items-center gap-1.5 px-3 md:px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-neutral-900 bg-white hover:bg-neutral-950 hover:text-white transition-all shadow-[1px_1px_0px_#000] cursor-pointer"
          >
            <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
            <span className="hidden xs:inline">CONTACT</span>
          </motion.button>
        </div>

      </motion.nav>
    </header>
  );
}

export default Navbar;