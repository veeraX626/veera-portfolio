"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import TiltCard from "@/components/TiltCard";

const projects = [
  {
    title: "DefenSys",
    description: "A cloud-powered web vulnerability scanning platform designed to identify common security threats and improve application security posture through automated scanning and reporting.",
    tech: ["AWS", "Cloud Security", "Scanning", "DevOps"],
    github: "https://github.com/veeraX626/DefenSys",
  },
  {
    title: "Redwish",
    description: "A real-time healthcare assistance platform connecting hospitals, blood donors, and emergency services using location-aware systems and live updates.",
    tech: ["Firebase", "Healthcare", "Realtime Systems", "Web Development"],
    github: "https://github.com/veeraX626/Vital-Link",
  },
  {
    title: "CivicTrack",
    description: "A governance and civic management dashboard built to streamline administration workflows, citizen issue tracking, and operational management.",
    tech: ["Dashboard", "Admin Panel", "Automation", "Full Stack"],
    github: "https://github.com/veeraX626/Civic_Track",
  }
];

function ProjectCard({ project, index }: { project: { title: string; description: string; tech: string[]; github: string; }, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="h-full relative"
    >
      <TiltCard className="glass-card bg-white p-8 relative h-full rounded-2xl border border-gray-200 shadow-sm transition-shadow duration-300 flex flex-col hover:shadow-xl hover:border-gray-300">
        <div className="flex justify-between items-start mb-6 w-full cursor-auto pointer-events-auto">
          <h3 className="text-2xl font-bold text-gray-900 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>{project.title}</h3>
          <div className="flex gap-4">
            <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="GitHub Repository">
              <FaGithub size={22} />
            </a>
            <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="Live Demo">
              <ExternalLink size={22} />
            </a>
          </div>
        </div>
        
        <p className="text-gray-600 mb-8 flex-grow leading-relaxed font-normal">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t: string) => (
            <span key={t} className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-gray-50 border border-gray-200 text-gray-600">
              {t}
            </span>
          ))}
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative bg-[#F8F9FB]">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl text-lg font-normal">Scalable systems and full-stack solutions built for real-world impact.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
             <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
