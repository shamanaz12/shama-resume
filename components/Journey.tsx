"use client";

import { motion } from "framer-motion";
import { BookOpen, Code, BrainCircuit, Rocket, CheckCircle2 } from "lucide-react";

const journeySteps = [
  {
    title: "The Beginning",
    sub: "Karachi University (B.A.)",
    desc: "The foundation phase. Learning to learn and discovering a passion for the digital world while completing my degree in 2024.",
    icon: BookOpen,
    color: "from-blue-600 to-cyan-500",
    date: "Graduated 2024"
  },
  {
    title: "Professional Shift",
    sub: "Governor Sindh IT Initiative",
    desc: "The grind begins. 1.5 years of intensive training in Next.js, TypeScript, and Full-Stack development. From zero code to building complex apps.",
    icon: Code,
    color: "from-purple-600 to-indigo-500",
    date: "2024 - Present"
  },
  {
    title: "AI Integration",
    sub: "Agentic AI Mastery",
    desc: "Currently pushing boundaries by learning Python Agentic AI to build autonomous agents and intelligent automation.",
    icon: BrainCircuit,
    color: "from-pink-600 to-rose-500",
    date: "Enrolled 2025"
  },
  {
    title: "The Future",
    sub: "Software Engineer / AI Dev",
    desc: "Ready to contribute to real-world projects and solve complex problems in a collaborative environment.",
    icon: Rocket,
    color: "from-orange-600 to-amber-500",
    date: "The Goal"
  }
];

export function Journey() {
  return (
    <section id="journey" className="section-padding relative overflow-hidden bg-[#020617]/30">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <CheckCircle2 size={14} /> My Evolution
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            Zero to <span className="gradient-text">AI</span>.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A balanced roadmap of my professional struggle and technical growth.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block -translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {journeySteps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center justify-between w-full md:mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                
                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full md:w-[45%] p-8 rounded-[2rem] glass border-white/5 hover:border-purple-500/30 transition-all group relative"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                    <step.icon size={24} />
                  </div>
                  <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.2em] mb-2 block">{step.date}</span>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{step.title}</h3>
                  <p className="text-purple-400 font-bold mb-4 text-sm">{step.sub}</p>
                  <p className="text-gray-500 text-sm leading-relaxed italic">{step.desc}</p>
                </motion.div>

                {/* Center Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#020617] z-20 hidden md:block shadow-[0_0_20px_rgba(168,85,247,0.5)]" />

                {/* Spacer for the other side */}
                <div className="hidden md:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
