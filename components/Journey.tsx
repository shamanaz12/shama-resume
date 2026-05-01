"use client";

import { motion } from "framer-motion";
import { Milestone, BookOpen, Code, BrainCircuit, Rocket } from "lucide-react";

const journeySteps = [
  {
    title: "The Beginning",
    sub: "Karachi University (B.A.)",
    desc: "The foundation phase. Learning to learn and discovering a passion for the digital world while completing my degree in 2024.",
    icon: BookOpen,
    color: "bg-blue-500",
    date: "Graduated 2024"
  },
  {
    title: "Professional Shift",
    sub: "Governor Sindh IT Initiative",
    desc: "The grind begins. 1.5 years of intensive training in Next.js, TypeScript, and Full-Stack development. From zero code to building complex apps.",
    icon: Code,
    color: "bg-purple-500",
    date: "2024 - Present"
  },
  {
    title: "AI Integration",
    sub: "Agentic AI Mastery",
    desc: "Currently pushing boundaries by learning Python Agentic AI to build autonomous agents and intelligent automation.",
    icon: BrainCircuit,
    color: "bg-pink-500",
    date: "Enrolled 2025"
  },
  {
    title: "The Future",
    sub: "Software Engineer / AI Dev",
    desc: "Ready to contribute to real-world projects and solve complex problems in a collaborative environment.",
    icon: Rocket,
    color: "bg-orange-500",
    date: "The Goal"
  }
];

export function Journey() {
  return (
    <section id="journey" className="section-padding relative overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent hidden md:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-purple-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
          >
            My Struggle & Growth
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            Zero to <span className="gradient-text">AI</span>.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A visual roadmap of my evolution from a student to a modern web and AI-driven developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-8 rounded-[2.5rem] glass border-white/5 hover:border-purple-500/20 transition-all ${
                index % 2 === 0 ? "md:text-right" : "md:mt-24"
              }`}
            >
              {/* Connector Dot */}
              <div className={`absolute top-1/2 ${index % 2 === 0 ? "-right-3" : "-left-3"} w-6 h-6 rounded-full bg-[#020617] border-4 border-purple-500 z-20 hidden md:block`} />

              <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center text-white mb-6 ${index % 2 === 0 ? "md:ml-auto" : ""}`}>
                <step.icon size={28} />
              </div>
              
              <span className="text-xs font-black text-purple-500 uppercase tracking-widest mb-2 block">{step.date}</span>
              <h3 className="text-3xl font-bold mb-3">{step.title}</h3>
              <p className="text-purple-400 font-bold mb-4">{step.sub}</p>
              <p className="text-gray-500 leading-relaxed italic">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
