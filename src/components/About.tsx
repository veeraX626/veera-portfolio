"use client";

import { motion } from "framer-motion";
import { Code2, Cloud, Shield, Database, Layout, Sparkles } from "lucide-react";

const exploring = [
  { text: "Cloud Infrastructure", icon: Cloud },
  { text: "Infrastructure Automation", icon: Database },
  { text: "Cybersecurity Concepts", icon: Shield },
  { text: "Full-Stack Development", icon: Code2 },
  { text: "Scalable System Design", icon: Layout },
  { text: "Modern Web Technologies", icon: Sparkles },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-[#F8F9FB]">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Introduction Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 glass-card p-10 md:p-14 relative overflow-hidden group border border-gray-100 shadow-sm hover:shadow-md"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-[80px] -z-10 transition-opacity duration-500 opacity-50" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full blur-[80px] -z-10 transition-opacity duration-500 opacity-50" />
            
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 flex items-center gap-4 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="w-8 h-[3px] bg-gradient-premium rounded-full block"></span>
              About Me
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 font-normal leading-relaxed">
              <p>
                I am an Information Technology undergraduate passionate about <span className="text-gray-900 font-medium">cloud engineering, DevOps, cybersecurity,</span> and scalable architecture design.
              </p>
              <p>
                I enjoy solving real-world problems using modern cloud technologies and building impactful applications that combine performance, scalability, security, and elegant user experiences.
              </p>
              <p>
                I continuously explore innovative technologies and enjoy creating products that are efficient, reliable, and thoughtfully designed.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Actively Exploring */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <div className="glass-card p-10 flex-1 relative overflow-hidden group shadow-sm border border-gray-100 hover:shadow-md">
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-50 rounded-full blur-[80px] -z-10 opacity-60" />
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Core Focus
              </h3>
              
              <p className="text-gray-600 mb-6 font-normal">
                Through hackathons and independent projects, I have developed practical experience in:
              </p>
              
              <div className="flex flex-col gap-3">
                {exploring.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 px-4 py-3 rounded-xl bg-gray-50 text-sm text-gray-700 hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 transition-all font-medium border border-gray-100"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                      <item.icon size={16} />
                    </div>
                    {item.text}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
