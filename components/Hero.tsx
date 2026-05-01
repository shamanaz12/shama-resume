"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Download, Github, Linkedin, Mail, ChevronRight, Sparkles } from "lucide-react";
import { Magnetic } from "./Magnetic";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8 relative group"
          >
            <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-[2.5rem] p-1 bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 animate-pulse-slow">
              <div className="w-full h-full rounded-[2.3rem] overflow-hidden bg-[#020617] relative z-10">
                <img 
                  src="/shama-image.jpg" 
                  alt="Shama Naz" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  onError={(e) => {
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=Shama+Naz&background=a855f7&color=fff";
                  }}
                />
              </div>
              <div className="absolute -inset-4 border border-purple-500/20 rounded-[3rem] animate-[spin_20s_linear_infinite] group-hover:border-purple-500/40 transition-colors" />
              <div className="absolute -inset-8 border border-blue-500/10 rounded-[4rem] animate-[spin_30s_linear_reverse_infinite] group-hover:border-blue-500/20 transition-colors" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass border-purple-500/30 text-xs font-black uppercase tracking-[0.2em] text-purple-400">
              <Sparkles size={14} className="animate-spin-slow" />
              Available for Internships
            </span>
          </motion.div>

          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-9xl font-black tracking-tighter leading-none"
            >
              Shama <span className="gradient-text">Naz</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-2xl md:text-4xl font-light text-gray-400 mb-12 tracking-tight"
          >
            Web Developer <span className="text-purple-500">&</span> AI Enthusiast
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap justify-center gap-8 no-print"
          >
            <Magnetic>
              <button 
                onClick={() => window.print()}
                className="btn-primary flex items-center gap-3 group relative overflow-hidden"
              >
                <Download size={20} /> Download CV
              </button>
            </Magnetic>
            <Magnetic>
              <a href="#projects" className="btn-outline flex items-center gap-3 group">
                View Projects <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
