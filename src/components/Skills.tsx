"use client";

import { motion } from "framer-motion";
import { Cloud, Server, Shield, Terminal } from "lucide-react";
import { FaAws, FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import { SiKubernetes, SiNextdotjs, SiFirebase } from "react-icons/si";
import TiltCard from "@/components/TiltCard";

const allSkills = [
  { name: "AWS", icon: FaAws, color: "text-orange-500" },
  { name: "Firebase", icon: SiFirebase, color: "text-blue-400" },
  { name: "Docker", icon: FaDocker, color: "text-blue-500" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
  { name: "Linux", icon: Terminal, color: "text-gray-700" },
  { name: "CI/CD", icon: Server, color: "text-indigo-500" },
  { name: "Cybersecurity", icon: Shield, color: "text-purple-600" },
  { name: "Cloud Infra", icon: Cloud, color: "text-blue-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
  { name: "React", icon: FaReact, color: "text-cyan-500" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative bg-[#F8F9FB] overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-100 rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-gray-600 max-w-2xl text-lg font-normal">Specializing in cloud infrastructure, robust security protocols, and scalable deployment pipelines.</p>
        </div>
      </div>
      
      {/* Infinite scrolling marquee wrapper */}
      <div className="relative w-full overflow-hidden flex py-10 pointer-events-auto">
        {/* Shadow overlays */}
        <div className="absolute top-0 left-0 bottom-0 w-[10%] md:w-[20%] lg:w-[25%] bg-gradient-to-r from-[#F8F9FB] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-[10%] md:w-[20%] lg:w-[25%] bg-gradient-to-l from-[#F8F9FB] to-transparent z-10 pointer-events-none" />

        <motion.div
           animate={{ x: ["0%", "-50%"] }}
           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
           className="flex gap-6 whitespace-nowrap px-3"
           style={{ width: "max-content" }}
        >
           {[...allSkills, ...allSkills].map((skill, idx) => (
             <TiltCard key={`${skill.name}-${idx}`} className="w-56 glass-card bg-white border border-gray-100 p-6 rounded-2xl flex items-center justify-center gap-4 shadow-sm transition-all flex-shrink-0 group pointer-events-auto cursor-auto hover:shadow-md">
               <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 border border-gray-100 group-hover:scale-110 transition-transform duration-300 pointer-events-none">
                 <skill.icon size={26} className={skill.color} />
               </div>
               <span className="text-lg font-semibold text-gray-800 pointer-events-none tracking-tight" style={{ fontFamily: 'var(--font-sans)' }}>{skill.name}</span>
             </TiltCard>
           ))}
        </motion.div>
      </div>

       <div className="relative w-full overflow-hidden flex mt-6 pointer-events-auto">
        <motion.div
           animate={{ x: ["-50%", "0%"] }}
           transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
           className="flex gap-6 whitespace-nowrap px-3"
           style={{ width: "max-content" }}
        >
           {[...allSkills].reverse().concat([...allSkills].reverse()).map((skill, idx) => (
             <TiltCard key={`${skill.name}-rev-${idx}`} className="w-56 glass-card bg-white border border-gray-100 p-6 rounded-2xl flex items-center justify-center gap-4 shadow-sm transition-all flex-shrink-0 group pointer-events-auto cursor-auto hover:shadow-md">
               <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 border border-gray-100 group-hover:scale-110 transition-transform duration-300 pointer-events-none">
                 <skill.icon size={26} className={skill.color} />
               </div>
               <span className="text-lg font-semibold text-gray-800 pointer-events-none tracking-tight" style={{ fontFamily: 'var(--font-sans)' }}>{skill.name}</span>
             </TiltCard>
           ))}
        </motion.div>
      </div>
    </section>
  );
}
