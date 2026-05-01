"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { FloatingAction } from "@/components/FloatingAction";
import { PrintCV } from "@/components/PrintCV";
import { CustomCursor } from "@/components/CustomCursor";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <AnimatedBackground />

      {/* Website UI */}
      <div className="no-print">
        <Navbar />
        
        <main className="min-h-screen relative">
          <Hero />

          {/* Staggered Content Reveal */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <section id="about" className="section-padding relative overflow-hidden">
              <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center">
                  <motion.span 
                    initial={{ letterSpacing: "0.5em", opacity: 0 }}
                    whileInView={{ letterSpacing: "0.2em", opacity: 1 }}
                    className="text-purple-500 font-bold text-sm mb-6 block uppercase"
                  >
                    The Story
                  </motion.span>
                  <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter leading-tight">
                    Code <span className="text-purple-500">+</span> Intelligence
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light italic">
                    "Enthusiastic and motivated graduate seeking a software development internship or junior developer role. 
                    Skilled in HTML, CSS, JavaScript, Python, and full-stack web development. Currently learning Agentic AI 
                    in Python to build intelligent autonomous agents."
                  </p>
                </div>
              </div>
            </section>

            <Skills />
            <Projects />
            <Education />
            <Contact />
          </motion.div>
          
          <FloatingAction />
        </main>

        <footer className="py-20 bg-black/40 backdrop-blur-xl border-t border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto px-6 text-center">
             <div className="text-4xl font-black mb-8 gradient-text">SN.</div>
             <div className="flex justify-center gap-12 mb-12">
                {["GitHub", "LinkedIn", "Twitter"].map((s) => (
                  <a key={s} href="#" className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-purple-500 transition-colors">{s}</a>
                ))}
             </div>
             <p className="text-xs text-gray-600 tracking-widest">© 2026 SHAMA NAZ • ARCHITECTING THE FUTURE</p>
          </div>
        </footer>
      </div>

      <PrintCV />
    </>
  );
}
