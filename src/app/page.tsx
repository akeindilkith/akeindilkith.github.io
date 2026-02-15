"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Cpu, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 flex flex-col items-center justify-center">
        {/* Animated Background Blur */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm mb-8"
        >
          <Sparkles size={14} />
          <span>New AI Insights Every Week</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold text-center tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-400"
        >
          Akein Dilkith
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-slate-400 text-lg md:text-xl text-center max-w-2xl mb-12"
        >
          Navigating the neural frontier. Deep dives into AI engineering, 
          prompt design, and the future of digital consciousness.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4"
        >
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-medium transition-all flex items-center gap-2 glow-blue">
            Start Reading <ArrowRight size={18} />
          </button>
        </motion.div>
      </section>

      {/* Featured Cards */}
      <section className="max-w-7xl mx-auto w-full px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: <Cpu />, title: "Neural Networks", desc: "Understanding the architecture of LLMs." },
          { icon: <Zap />, title: "Prompt Engineering", desc: "The art of speaking to the machine." },
          { icon: <Sparkles />, title: "Future Tech", desc: "Beyond 2026: What's next for humanity?" }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            className="p-8 rounded-2xl bg-[#151921]/50 border border-slate-800 hover:border-blue-500/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-slate-400 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </section>

    </div>
  );
}