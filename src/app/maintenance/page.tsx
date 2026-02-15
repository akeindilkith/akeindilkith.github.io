"use client";

import React, { useState, useEffect } from 'react';
import { Hammer, Wrench } from 'lucide-react';

export default function MaintenancePage() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full animate-ball-screen-move opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.6) 0%, rgba(37,99,235,0.2) 45%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center">
        
        {/* Animated Floating Icon Container */}
        <div className="mb-12 relative animate-float">
          {/* Blue Glow Behind Icon */}
          <div className="absolute inset-0 bg-blue-500/30 blur-2xl rounded-full scale-150" />
          
          <div className="relative flex items-center justify-center">
            {/* Tool Icons (Simplified Hammer & Wrench representation) */}
            <div className="relative h-20 w-20">
              <Hammer 
                className="absolute top-0 right-0 w-12 h-12 text-slate-400 -rotate-12 transform-gpu drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" 
                strokeWidth={1.5}
              />
              <Wrench 
                className="absolute bottom-0 left-0 w-12 h-12 text-blue-400 rotate-45 transform-gpu drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]" 
                strokeWidth={1.5}
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            System Update
          </h1>
          <div className="space-y-1">
            <p className="text-lg text-slate-400 font-medium">
              We're polishing things up for you.
            </p>
            <p className="text-lg text-slate-500">
              akeindilkith will return soon.
            </p>
          </div>
        </div>

        {/* Working Badge */}
        <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm group hover:border-blue-500/30 transition-colors">
          <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)] animate-pulse" />
          <span className="text-[11px] font-black tracking-[0.25em] text-blue-400 uppercase">
            Working on it
          </span>
        </div>

        {/* Optional small copyright if year exists */}
        {year && (
          <footer className="mt-20 text-[9px] text-slate-600 uppercase tracking-[0.3em] opacity-50">
            &copy; {year} Akein Dilkith
          </footer>
        )}
      </div>
    </div>
  );
}
