"use client";

import { motion } from "framer-motion";
import { Mail, Send, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const contactMethods = [
    {
      title: "Email",
      value: "bhanushaliveera@gmail.com",
      href: "mailto:bhanushaliveera@gmail.com",
      icon: <Mail size={20} />,
      colorClass: "text-blue-600",
      bgClass: "bg-blue-50/50",
      borderClass: "border-blue-100",
      hoverColorClass: "group-hover:text-blue-600",
      glowClass: "hover:shadow-[0_0_20px_rgba(37,99,235,0.15)]"
    },
    {
      title: "Phone",
      value: "+91 91194 98949",
      href: "tel:+919119498949",
      icon: <Phone size={20} />,
      colorClass: "text-green-600",
      bgClass: "bg-green-50/50",
      borderClass: "border-green-100",
      hoverColorClass: "group-hover:text-green-600",
      glowClass: "hover:shadow-[0_0_20px_rgba(22,163,74,0.15)]"
    },
    {
      title: "LinkedIn",
      value: "Veera Bhanushali",
      href: "https://linkedin.com/in/veera-bhanushali",
      icon: <FaLinkedin size={20} />,
      colorClass: "text-[#0A66C2]",
      bgClass: "bg-[#0A66C2]/10",
      borderClass: "border-[#0A66C2]/20",
      hoverColorClass: "group-hover:text-[#0A66C2]",
      glowClass: "hover:shadow-[0_0_20px_rgba(10,102,194,0.15)]"
    },
    {
      title: "GitHub",
      value: "veeraX626",
      href: "https://github.com/veeraX626",
      icon: <FaGithub size={20} />,
      colorClass: "text-gray-800",
      bgClass: "bg-gray-100/50",
      borderClass: "border-gray-200",
      hoverColorClass: "group-hover:text-gray-900",
      glowClass: "hover:shadow-[0_0_20px_rgba(31,41,55,0.15)]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

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
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {contactMethods.map((method) => (
                <motion.a
                  key={method.title}
                  variants={itemVariants}
                  href={method.href}
                  target={method.title !== 'Email' && method.title !== 'Phone' ? '_blank' : undefined}
                  rel={method.title !== 'Email' && method.title !== 'Phone' ? 'noreferrer' : undefined}
                  className={`flex items-center gap-4 group bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 ${method.glowClass}`}
                >
                  <div className={`w-12 h-12 rounded-full flex-shrink-0 ${method.bgClass} flex items-center justify-center ${method.colorClass} group-hover:scale-110 transition-transform duration-300 border ${method.borderClass}`}>
                    {method.icon}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm font-semibold text-gray-900 mb-0.5">{method.title}</p>
                    <p className={`text-sm text-gray-600 ${method.hoverColorClass} transition-colors font-medium truncate`}>
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="bg-white/80 backdrop-blur-md rounded-3xl p-8 flex flex-col gap-6 border border-gray-100 shadow-sm" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none font-medium"
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
