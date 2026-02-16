"use client";

import React, { useState, useEffect } from 'react';
import { Hammer, Wrench } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Intensified Animated Moving Light Ball */}
        <div 
          className="absolute w-[900px] h-[900px] rounded-full animate-ball-screen-move opacity-60 mix-blend-screen"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,1) 0%, rgba(37,99,235,0.6) 40%, transparent 70%)',
            filter: 'blur(110px)',
          }}
        />
        {/* Subtle Static Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/95" />
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 w-full max-w-[380px]">
        <Card className="bg-white/5 border-white/10 backdrop-blur-2xl shadow-2xl rounded-[3rem] overflow-hidden">
          <CardContent className="flex flex-col items-center pt-12 pb-10 px-10 text-center">
            
            {/* Animated Floating Icon Container */}
            <div className="mb-10 relative animate-float">
              {/* Blue Glow Behind Icon */}
              <div className="absolute inset-0 bg-blue-500/40 blur-3xl rounded-full scale-150" />
              
              <div className="relative flex items-center justify-center">
                <div className="relative h-14 w-14">
                  <Hammer 
                    className="absolute top-0 right-0 w-8 h-8 text-slate-300 -rotate-12 transform-gpu drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]" 
                    strokeWidth={1.5}
                  />
                  <Wrench 
                    className="absolute bottom-0 left-0 w-8 h-8 text-blue-400 rotate-45 transform-gpu drop-shadow-[0_0_18px_rgba(59,130,246,0.6)]" 
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-4 mb-10">
              <h1 className="text-xl font-bold text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                System Update
              </h1>
              <div className="space-y-2">
                <p className="text-slate-200 text-sm font-medium">
                  We're polishing things up.
                </p>
                <p className="text-slate-500 text-[11px] max-w-[220px] mx-auto leading-relaxed">
                  The terminal is undergoing scheduled optimization for a better experience.
                </p>
              </div>
            </div>

            {/* Working Badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
              <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-pulse" />
              <span className="text-[9px] font-black tracking-[0.2em] text-blue-400 uppercase">
                Optimizing
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        {year && (
          <footer className="mt-10 text-center text-[10px] text-slate-600 uppercase tracking-[0.3em] opacity-60">
            &copy; {year} Akein Dilkith
          </footer>
        )}
      </div>
    </div>
  );
}
