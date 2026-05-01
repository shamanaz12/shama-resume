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

export default function Home() {
  return (
    <>
      <div className="no-print">
        <Navbar />
        
        <main className="min-h-screen relative">
          <Hero />

          {/* Professional Summary */}
          <section id="about" className="section-padding bg-[#020617] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            <div className="max-w-4xl mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <span className="text-purple-500 font-bold tracking-[0.2em] text-sm mb-6 block uppercase">About Me</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
                  A journey of <span className="text-purple-500 italic font-serif">innovation</span> and 
                  <span className="text-blue-500"> code</span>.
                </h2>
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light italic">
                  "Enthusiastic and motivated graduate seeking a software development internship or junior developer role. 
                  Skilled in HTML, CSS, JavaScript, Python, and full-stack web development. Currently learning Agentic AI 
                  in Python to build intelligent autonomous agents."
                </p>
              </motion.div>
            </div>
          </section>

          <Journey />
          <Skills />
          <Projects />
          <Education />
          <Contact />
          
          <FloatingAction />
        </main>

        <footer className="py-20 border-t border-white/5 bg-[#010413] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
            <div className="text-3xl font-black mb-8">
              SN<span className="text-purple-500">.</span>
            </div>
            <p className="text-gray-500 font-medium mb-10 text-center max-w-md">
              Built with passion using Next.js 15, Tailwind CSS v4 and Framer Motion.
            </p>
            <div className="flex gap-8 mb-12">
               {["GitHub", "LinkedIn", "Twitter", "Email"].map((social) => (
                 <a 
                  key={social} 
                  href={social === "Email" ? "mailto:shama20302022@gmail.com" : `https://${social.toLowerCase()}.com/shamanaz12`} 
                  className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                 >
                   {social}
                 </a>
               ))}
            </div>
            <div className="text-[10px] text-gray-700 tracking-[0.5em] uppercase">
              &copy; {new Date().getFullYear()} Shama Naz Portfolio
            </div>
          </div>
        </footer>
      </div>

      <PrintCV />
    </>
  );
}
tCV />
    </>
  );
}
