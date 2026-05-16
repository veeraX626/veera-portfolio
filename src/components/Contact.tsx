"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-[#F8F9FB]">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-premium rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>Let&apos;s build something amazing together.</h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg font-normal">
              Whether you have a question, a project opportunity, or just want to say hi, feel free to reach out. I&apos;ll try my best to get back to you!
            </p>
            <div className="flex flex-col gap-6">
              <a href="mailto:bhanushaliveera@gmail.com" className="flex items-center gap-6 group bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300 border border-blue-100">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">Email</p>
                  <p className="text-base text-gray-600 group-hover:text-blue-600 transition-colors font-medium">bhanushaliveera@gmail.com</p>
                </div>
              </a>
              
              <a href="https://github.com/veeraX626" target="_blank" rel="noreferrer" className="flex items-center gap-6 group bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center text-gray-700 group-hover:scale-110 transition-transform duration-300 border border-gray-200">
                  <FaGithub size={22} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">GitHub</p>
                  <p className="text-base text-gray-600 group-hover:text-gray-900 transition-colors font-medium">veeraX626</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="bg-white rounded-3xl p-8 flex flex-col gap-6 border border-gray-100 shadow-sm" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none font-medium"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white hover:bg-gray-800 font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors mt-2 shadow-sm"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
