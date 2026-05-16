"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Star } from "lucide-react";
import TiltCard from "@/components/TiltCard";

export default function Achievements() {
  const achievements = [
    {
      title: "10 SGPA & 1st Rank",
      description: "Ranked 1st in Department & College with a perfect 10 SGPA.",
      icon: Star,
      bg: "bg-blue-50",
      iconColor: "text-blue-500"
    },
    {
      title: "Special Mention",
      description: "Received Special Mention at HackX, Nirma University.",
      icon: Award,
      bg: "bg-indigo-50",
      iconColor: "text-indigo-500"
    },
    {
      title: "Hackathon Competitor",
      description: "Actively participated in multiple national-level hackathons.",
      icon: Trophy,
      bg: "bg-purple-50",
      iconColor: "text-purple-500"
    },
    {
      title: "Impactful Solutions",
      description: "Built AI healthcare, civic automation, and fintech solutions.",
      icon: Star,
      bg: "bg-emerald-50",
      iconColor: "text-emerald-500"
    },
    {
      title: "Innovative Engineering",
      description: "Strong focus on innovation and scalable engineering practices.",
      icon: Trophy,
      bg: "bg-cyan-50",
      iconColor: "text-cyan-500"
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#F8F9FB]">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>Achievements</h2>
          <div className="w-24 h-1 bg-gradient-premium rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative h-full"
            >
              <TiltCard className="glass-card bg-white p-8 flex flex-col group transition-all duration-300 border border-gray-100 shadow-sm hover:shadow-md relative overflow-hidden h-full w-full rounded-2xl cursor-auto pointer-events-auto">
                <div className="relative z-10 flex flex-col h-full items-start">
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon size={26} className={item.iconColor} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>{item.title}</h3>
                  <p className="text-gray-600 font-normal leading-relaxed">{item.description}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
