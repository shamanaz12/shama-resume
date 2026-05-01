"use client";

import React from 'react';

export function PrintCV() {
  return (
    <div id="cv-print-template" className="p-8 text-black bg-white max-w-[800px] mx-auto text-sm">
      {/* Header */}
      <div className="text-center border-b-2 border-black pb-4 mb-6">
        <h1 className="text-3xl font-bold uppercase mb-2">SHAMA NAZ</h1>
        <p className="flex justify-center gap-4 flex-wrap">
          <span>📍 Karachi, Pakistan</span>
          <span>📞 +92-316-1129505</span>
          <span>📧 shama20302022@gmail.com</span>
        </p>
        <p className="mt-1 flex justify-center gap-4 flex-wrap">
          <span>LinkedIn: linkedin.com/in/shamanaz</span>
          <span>GitHub: github.com/shamanaz12</span>
        </p>
      </div>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-lg font-bold border-b border-gray-300 mb-2 uppercase tracking-wide">Professional Summary</h2>
        <p className="text-justify">
          Enthusiastic and motivated graduate seeking a software development internship or junior developer role. Skilled in
          HTML, CSS, JavaScript, Python, and full-stack web development. Currently learning Agentic AI in Python to build
          intelligent autonomous agents. Passionate about creating efficient web and AI-driven solutions and eager to
          contribute to real-world projects in a collaborative software house environment.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-lg font-bold border-b border-gray-300 mb-2 uppercase tracking-wide">Technical Skills</h2>
        <ul className="list-disc pl-5 grid grid-cols-1 md:grid-cols-2 gap-x-8">
          <li><strong>Programming Languages:</strong> HTML5, CSS3, JavaScript, Python</li>
          <li><strong>Web Development:</strong> Next.js, TypeScript, Responsive Web Design</li>
          <li><strong>AI & Automation:</strong> Agentic AI (Python), Agentic AI SDK, Autonomous Agents</li>
          <li><strong>Tools & Technologies:</strong> Git, GitHub, VS Code, Postman</li>
          <li><strong>Soft Skills:</strong> Problem-Solving, Team Collaboration, Quick Learner</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="text-lg font-bold border-b border-gray-300 mb-2 uppercase tracking-wide">Projects</h2>
        
        <div className="mb-4">
          <div className="flex justify-between font-bold">
            <span>Full-Stack Cake Ordering System</span>
            <span>Next.js, TypeScript, Tailwind</span>
          </div>
          <p className="italic text-xs mb-1">GitHub: github.com/shamanaz12/sweet_assignment_02</p>
          <ul className="list-disc pl-5">
            <li>Developed a responsive e-commerce platform for cake ordering with shopping cart functionality.</li>
            <li>Implemented user authentication and product management features using modern frameworks.</li>
            <li>Created an intuitive UI with smooth animations and form validations.</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between font-bold">
            <span>Student Management System</span>
            <span>Next.js, TypeScript, Python</span>
          </div>
          <p className="italic text-xs mb-1">GitHub: github.com/shamanaz12/student_managment</p>
          <ul className="list-disc pl-5">
            <li>Built a complete CRUD application for managing student records using Next.js and Python backend.</li>
            <li>Designed responsive data tables with add, edit, delete, and view functionalities.</li>
            <li>Implemented advanced form validations and secure data management protocols.</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between font-bold">
            <span>Restaurant Visiting Guide</span>
            <span>Next.js, TypeScript, Agentic AI SDK</span>
          </div>
          <p className="italic text-xs mb-1">GitHub: github.com/shamanaz12/visitResturent</p>
          <ul className="list-disc pl-5">
            <li>Developed a restaurant discovery platform with location-based features and AI-driven recommendations.</li>
            <li>Utilized Agentic AI SDK to build intelligent search and suggestion modules.</li>
            <li>Created responsive design compatible with all modern desktop and mobile devices.</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between font-bold">
            <span>Web Development Hub & AI Integrations</span>
            <span>Next.js, TypeScript, Python</span>
          </div>
          <p className="italic text-xs mb-1">GitHub: github.com/shamanaz12/project-4-assignments</p>
          <ul className="list-disc pl-5">
            <li>Collection of full-stack web projects demonstrating proficiency in modern tech stacks.</li>
            <li>Integrated Python-based autonomous agents into front-end interfaces for automation tasks.</li>
            <li>Showcased advanced skills in responsive design, type-safety, and API management.</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-lg font-bold border-b border-gray-300 mb-2 uppercase tracking-wide">Education</h2>
        <div className="mb-3">
          <div className="flex justify-between font-bold">
            <span>Bachelor of Arts (B.A.)</span>
            <span>2024</span>
          </div>
          <p>Karachi University</p>
        </div>
        <div className="mb-3">
          <div className="flex justify-between font-bold">
            <span>Governor Sindh IT Initiative – Advanced Web Development</span>
            <span>Ongoing</span>
          </div>
          <p>Governor House Karachi | 1.5 Years Completed</p>
          <p className="text-xs">Intensive program covering Next.js, TypeScript, Full-Stack Web Development.</p>
        </div>
        <div>
          <div className="flex justify-between font-bold">
            <span>Python Agentic AI Course</span>
            <span>Enrolled</span>
          </div>
          <p>Learning to build autonomous AI agents and intelligent automation solutions using Python.</p>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-lg font-bold border-b border-gray-300 mb-2 uppercase tracking-wide">Certifications</h2>
          <ul className="list-disc pl-5">
            <li>Web Development Fundamentals Certificate</li>
            <li>GitHub for Beginners – Online Course</li>
            <li>Agentic AI & Python Automation Specialist</li>
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-bold border-b border-gray-300 mb-2 uppercase tracking-wide">Achievements</h2>
          <ul className="list-disc pl-5">
            <li>Successfully built and deployed 4+ full-stack applications.</li>
            <li>Expertise in integrating AI agents into web-based platforms.</li>
            <li>Maintained active GitHub contributions with focus on type-safety.</li>
            <li>Specialized in Next.js 15 and Agentic AI technologies.</li>
          </ul>
        </section>
      </div>

      <p className="mt-8 text-center text-xs text-gray-500 italic">References Available Upon Request</p>
    </div>
  );
}
