"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin, Star } from "lucide-react";

const educationData = [
  {
    title: "Bachelor of Arts (B.A.)",
    institution: "Karachi University",
    year: "2024",
    status: "Completed",
    icon: GraduationCap,
    styles: "bg-purple-500/10 text-purple-500 border-purple-500/20"
  },
  {
    title: "Advanced Web Development",
    institution: "Governor Sindh IT Initiative",
    year: "Ongoing",
    status: "1.5 Years Completed",
    description: "Intensive training in Next.js, TypeScript, and Full-Stack Development.",
    icon: Star,
    styles: "bg-blue-500/10 text-blue-500 border-blue-500/20"
  },
  {
    title: "Python Agentic AI",
    institution: "Currently Enrolled",
    year: "2025",
    status: "In Progress",
    description: "Focusing on building autonomous intelligent agents using Python.",
    icon: Calendar,
    styles: "bg-pink-500/10 text-pink-500 border-pink-500/20"
  }
];

export function Education() {
  return (
    <section id="education" className="section-padding bg-slate-50/50 dark:bg-[#020617]/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Learning <span className="text-purple-500 italic">Evolution</span></h2>
            <p className="text-gray-400 text-lg">My academic journey and continuous pursuit of technical excellence in modern technologies.</p>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-3xl glass border-orange-500/20">
             <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                <Award size={24} />
             </div>
             <div>
               <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Total Projects</p>
               <p className="text-xl font-black">4+ PROTOTYPES</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 rounded-[2.5rem] glass border-white/5 hover:border-purple-500/30 transition-all flex flex-col"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${item.styles.split(' ').slice(0, 2).join(' ')}`}>
                <item.icon size={32} />
              </div>
              
              <div className="mb-auto">
                <div className="flex items-center gap-2 mb-2">
                   <span className={`px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${item.styles}`}>
                    {item.status}
                   </span>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{item.title}</h3>
                <p className="text-gray-400 font-medium mb-4">{item.institution}</p>
                {item.description && (
                  <p className="text-sm text-gray-500 leading-relaxed italic border-l-2 border-white/5 pl-4">
                    {item.description}
                  </p>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                  <Calendar size={14} />
                  {item.year}
                </div>
                <MapPin size={14} className="text-gray-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
