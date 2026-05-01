"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ArrowRight } from "lucide-react";
import React from "react";

const projects = [
  {
    title: "Cake Ordering System",
    description: "Responsive e-commerce platform with shopping cart, user authentication, and smooth animations.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/shamanaz12/sweet_assignment_02",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Student Management System",
    description: "Complete CRUD application for managing student records with responsive data tables and advanced filtering.",
    tech: ["Next.js", "TypeScript", "Python", "PostgreSQL"],
    github: "https://github.com/shamanaz12/student_managment",
    image: "https://images.unsplash.com/photo-1523050338692-7b835a07973f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Restaurant Visiting Guide",
    description: "Restaurant discovery platform with location-based features and intelligent AI-driven recommendations.",
    tech: ["Next.js", "TypeScript", "Agentic AI SDK", "Tailwind"],
    github: "https://github.com/shamanaz12/visitResturent",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Web Development Hub",
    description: "Collection of modern full-stack projects showcasing responsive design and autonomous AI integrations.",
    tech: ["Next.js", "TypeScript", "Python", "Agentic AI"],
    github: "https://github.com/shamanaz12/project-4-assignments",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="group relative rounded-[2.5rem] overflow-hidden glass border-white/5 hover:border-purple-500/20 transition-all duration-500 shadow-2xl"
    >
      <div className="h-72 relative overflow-hidden" style={{ transform: "translateZ(50px)" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
        />
        <div className="absolute top-6 right-6 z-20">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white text-white hover:text-black transition-all">
            <Github size={20} />
          </a>
        </div>
      </div>

      <div className="p-10 pt-4 relative z-20" style={{ transform: "translateZ(30px)" }}>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span key={i} className="text-[10px] uppercase tracking-widest font-bold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-md border border-purple-500/20">
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-3xl font-bold mb-4 group-hover:text-purple-400 transition-colors">{project.title}</h3>
        <p className="text-gray-400 leading-relaxed mb-8">{project.description}</p>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-sm text-white group/link">
          EXPLORE REPOSITORY <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="gradient-text">Works</span></h2>
          <div className="h-1 w-20 bg-purple-500 rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
