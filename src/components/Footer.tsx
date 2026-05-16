"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLenis } from "lenis/react";

export default function Footer() {
  const lenis = useLenis();

  return (
    <footer className="w-full py-12 border-t border-gray-200 relative bg-[#F8F9FB]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex gap-4"
        >
          <a href="https://github.com/veeraX626" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-50 hover:-translate-y-1 transition-all z-10 relative">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:text-blue-600 hover:bg-gray-50 hover:-translate-y-1 transition-all z-10 relative">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:bhanushaliveera@gmail.com" className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:text-purple-600 hover:bg-gray-50 hover:-translate-y-1 transition-all z-10 relative">
            <Mail size={20} />
          </a>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="text-center md:text-left"
        >
          <p className="text-gray-500 text-sm font-semibold tracking-widest uppercase">
            © 2026 Veera Bhanushali
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onClick={() => lenis?.scrollTo(0)}
          className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-gray-800 shadow-md transition-all group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
        </motion.button>
      </div>
    </footer>
  );
}
