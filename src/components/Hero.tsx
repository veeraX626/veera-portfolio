"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaAws, FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { Shield, Code, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { Float, Sphere, Wireframe } from "@react-three/drei";
import MagneticButton from "@/components/MagneticButton";

const floatingBadges = [
  { text: "AWS", icon: FaAws, color: "text-orange-500", top: "15%", left: "10%", delay: 0 },
  { text: "DevOps", icon: FaDocker, color: "text-blue-500", top: "20%", left: "80%", delay: 0.2 },
  { text: "Cloud Security", icon: Shield, color: "text-purple-500", top: "70%", left: "15%", delay: 0.4 },
  { text: "Kubernetes", icon: SiKubernetes, color: "text-blue-400", top: "75%", left: "85%", delay: 0.6 },
  { text: "Full Stack", icon: Code, color: "text-emerald-500", top: "45%", left: "90%", delay: 0.8 },
];

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#e0e7ff" />
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <Sphere args={[1, 32, 32]} scale={1.5} position={[0, 0, -2]}>
          <meshStandardMaterial color="#f8fafc" transparent opacity={0.6} />
          <Wireframe thickness={0.03} stroke={"#c7d2fe"} />
        </Sphere>
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1} position={[-3, 2, -5]}>
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#ddd6fe" transparent opacity={0.4} />
          <Wireframe thickness={0.02} stroke={"#a78bfa"} />
        </mesh>
      </Float>
      
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2} position={[3, -2, -3]}>
        <mesh>
          <tetrahedronGeometry args={[1]} />
          <meshStandardMaterial color="#bfdbfe" transparent opacity={0.5} />
          <Wireframe thickness={0.02} stroke={"#60a5fa"} />
        </mesh>
      </Float>
    </>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F8F9FB]">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Scene />
        </Canvas>
      </div>

      {/* Floating Badges */}
      {floatingBadges.map((badge, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm whitespace-nowrap z-10"
          style={{ top: badge.top, left: badge.left }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { delay: 1 + badge.delay, duration: 0.8 },
            scale: { delay: 1 + badge.delay, duration: 0.8 },
            y: { repeat: Infinity, duration: 4, delay: badge.delay, ease: "easeInOut" }
          }}
        >
          <badge.icon className={badge.color} size={16} />
          <span className="text-sm font-medium text-gray-700">{badge.text}</span>
        </motion.div>
      ))}

      <motion.div style={{ y: y1, opacity }} className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-blue-600 font-semibold mb-6 tracking-[0.2em] uppercase text-xs sm:text-sm"
          >
            Veera Bhanushali
          </motion.h2>
          
          <motion.div className="mb-6 overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Cloud Engineer &<br />
              <span className="text-gradient">DevOps Developer</span>
            </motion.h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-600 font-normal mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about building scalable cloud systems, secure infrastructure, and modern web experiences focused on performance, reliability, and elegant design.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <MagneticButton strength={15}>
              <Link 
                href="#projects"
                className="px-8 py-4 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 hover:shadow-lg transition-all flex items-center justify-center w-[200px]"
              >
                View Projects
              </Link>
            </MagneticButton>
            <MagneticButton strength={15}>
              <Link 
                href="/resume.pdf"
                target="_blank"
                className="px-8 py-4 rounded-full bg-white border border-gray-200 text-gray-900 font-medium hover:bg-gray-50 hover:shadow-md transition-all flex items-center justify-center w-[200px] gap-2"
              >
                Download Resume
              </Link>
            </MagneticButton>
            <MagneticButton strength={15}>
              <Link 
                href="#contact"
                className="px-8 py-4 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-medium hover:bg-blue-100 hover:shadow-md transition-all flex items-center justify-center w-[200px] gap-2"
              >
                Contact Me
              </Link>
            </MagneticButton>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex items-center justify-center gap-6"
          >
            {[
              { icon: FaGithub, href: "https://github.com/veeraX626", label: "GitHub" },
              { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: FaEnvelope, href: "mailto:bhanushaliveera@gmail.com", label: "Email" },
            ].map((social, index) => (
              <MagneticButton key={index} strength={30}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:text-blue-600 hover:shadow-md transition-all duration-300 pointer-events-auto"
                >
                  <social.icon size={20} />
                </a>
              </MagneticButton>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2"
        >
          <Link href="#about" className="text-gray-400 hover:text-blue-500 transition-colors" aria-label="Scroll down">
            <span className="text-xs font-medium tracking-widest uppercase mb-2 block text-center">Scroll</span>
            <ChevronDown size={24} className="mx-auto" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
