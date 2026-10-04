import React, { useState } from "react";
import { Mail, Send, Check, Heart, FileText } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { WashiTape } from "./Doodles";

function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const email = "parija.sharma@example.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="w-full max-w-4xl mx-auto py-16 px-4 relative">
      
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-block border border-neutral-900 rounded-md px-4 py-1 bg-white mb-2 shadow-[1px_1px_0px_#000]">
          <span className="font-code text-xs font-bold uppercase tracking-wider text-neutral-900">
            ♥ SAY HELLO
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-950 tracking-tight">
          Let's make something great.
        </h2>
        <p className="font-hand text-2xl text-neutral-600 mt-2">
          Drop a note or just say hi — I'd love to chat! ✨
        </p>
      </div>

      {/* Postcard / Note slip container */}
      <div className="relative max-w-2xl mx-auto bg-white rounded-2xl p-6 sm:p-10 border-2 border-neutral-900 shadow-[6px_6px_0px_#000]">
        
        {/* Top-left washi tape */}
        <WashiTape color="yellow" rotation={-20} className="-top-3 left-8" />
        {/* Top-right washi tape */}
        <WashiTape color="blue" rotation={15} className="-top-3 right-8" />

        {/* Vintage Postmark stamp */}
        <div className="absolute right-4 top-4 hidden sm:flex flex-col items-center justify-center w-16 h-16 rounded-full border-2 border-dashed border-red-400 text-red-500 transform rotate-12 select-none pointer-events-none opacity-80">
          <span className="font-pixel text-[8px]">AIR MAIL</span>
          <Heart className="w-3.5 h-3.5 fill-current my-0.5" />
          <span className="font-code text-[8px]">2026</span>
        </div>

        {formSubmitted ? (
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-500 text-emerald-600 flex items-center justify-center mb-3">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="font-sans-main font-bold text-xl text-neutral-900">
              Message Sent!
            </h3>
            <p className="font-hand text-2xl text-neutral-600 mt-1">
              Thanks for reaching out! I'll get back to you soon. 💌
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-code text-xs font-bold text-neutral-700 uppercase mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Robin Banks"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-800 bg-[#faf8f5] font-sans-main text-sm focus:outline-hidden focus:ring-2 focus:ring-neutral-950 transition"
                />
              </div>

              <div>
                <label className="block font-code text-xs font-bold text-neutral-700 uppercase mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="hello@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-800 bg-[#faf8f5] font-sans-main text-sm focus:outline-hidden focus:ring-2 focus:ring-neutral-950 transition"
                />
              </div>
            </div>

            <div>
              <label className="block font-code text-xs font-bold text-neutral-700 uppercase mb-1">
                Note / Message
              </label>
              <textarea
                required
                rows={4}
                placeholder="Let's build something awesome together..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-800 bg-[#faf8f5] font-sans-main text-sm focus:outline-hidden focus:ring-2 focus:ring-neutral-950 transition resize-none"
              />
            </div>

            {/* Submit button & Quick Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 bg-neutral-950 hover:bg-neutral-800 text-white rounded-full font-code text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[2px_2px_0px_#ffd84d] active:translate-y-0.5 transition cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Note</span>
              </button>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-3.5 py-2 rounded-full border border-neutral-800 bg-white hover:bg-neutral-100 font-code text-xs font-semibold text-neutral-800 flex items-center gap-1.5 transition cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Mail className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied!" : "Copy Email"}</span>
                </button>

                <a
                  href="#resume"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Resume download / PDF viewer ready!");
                  }}
                  className="px-3.5 py-2 rounded-full border border-neutral-800 bg-[#fde047] hover:bg-[#facc15] font-code text-xs font-bold text-neutral-950 flex items-center gap-1.5 shadow-[1px_1px_0px_#000] transition cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Resume (PDF)</span>
                </a>
              </div>

            </div>

          </form>
        )}

      </div>

      {/* Bottom Footer Note */}
      <div className="mt-16 text-center text-xs font-code text-neutral-500 space-y-1">
        <p>© 2026 Parija Sharma. Handcrafted with React & Tailwind.</p>
        <p className="font-hand text-lg text-neutral-600">
          Designed with paper, stickers & code. ✏️
        </p>
      </div>

    </section>
  );
}

export default Contact;
