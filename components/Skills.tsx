"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  Globe, 
  Zap,
  CheckCircle2,
  BrainCircuit,
  Terminal,
  Layers
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    color: "from-purple-500 to-indigo-500",
    skills: ["HTML5", "CSS3", "JavaScript", "Python"],
  },
  {
    title: "Web Development",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    skills: ["Next.js", "TypeScript", "React", "Responsive Design"],
  },
  {
    title: "AI & Automation",
    icon: BrainCircuit,
    color: "from-pink-500 to-rose-500",
    skills: ["Agentic AI (Python)", "Autonomous Agents", "Prompt Design"],
  },
  {
    title: "Tools & Soft Skills",
    icon: Zap,
    color: "from-orange-500 to-amber-500",
    skills: ["Git/GitHub", "Problem-Solving", "Teamwork", "Fast Learner"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="gradient-text">Mastery</span></h2>
            <p className="text-gray-400 max-w-xl">A specialized toolkit focused on modern web architectures and intelligent systems.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-3xl glass border-white/5 hover:border-purple-500/30 transition-all relative overflow-hidden"
            >
              {/* Decorative background gradient */}
              <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity blur-2xl`} />

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} p-[1px] mb-8 group-hover:scale-110 transition-transform`}>
                <div className="w-full h-full rounded-2xl bg-[#020617] flex items-center justify-center">
                  <category.icon className="text-white" size={26} />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 group-hover:border-purple-500/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
