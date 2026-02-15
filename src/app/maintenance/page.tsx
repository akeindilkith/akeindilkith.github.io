"use client";

import React, { useState, useEffect } from 'react';
import { Hammer, Wrench } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function MaintenancePage() {
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
          className="absolute w-[800px] h-[800px] rounded-full animate-ball-screen-move opacity-50 mix-blend-screen"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.9) 0%, rgba(37,99,235,0.5) 40%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        {/* Subtle Static Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/95" />
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 w-full max-w-[340px]">
        <Card className="bg-white/5 border-white/10 backdrop-blur-2xl shadow-2xl rounded-[2.5rem] overflow-hidden">
          <CardContent className="flex flex-col items-center pt-10 pb-8 px-8 text-center">
            
            {/* Animated Floating Icon Container */}
            <div className="mb-8 relative animate-float">
              {/* Blue Glow Behind Icon */}
              <div className="absolute inset-0 bg-blue-500/30 blur-3xl rounded-full scale-150" />
              
              <div className="relative flex items-center justify-center">
                <div className="relative h-12 w-12">
                  <Hammer 
                    className="absolute top-0 right-0 w-7 h-7 text-slate-300 -rotate-12 transform-gpu drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" 
                    strokeWidth={1.5}
                  />
                  <Wrench 
                    className="absolute bottom-0 left-0 w-7 h-7 text-blue-400 rotate-45 transform-gpu drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-3 mb-8">
              <h1 className="text-lg font-bold text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                System Update
              </h1>
              <div className="space-y-1.5">
                <p className="text-slate-200 text-xs font-medium">
                  We're polishing things up.
                </p>
                <p className="text-slate-500 text-[10px] max-w-[180px] mx-auto leading-relaxed">
                  The terminal is undergoing scheduled optimization for a better experience.
                </p>
              </div>
            </div>

            {/* Working Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse" />
              <span className="text-[8px] font-black tracking-[0.2em] text-blue-400 uppercase">
                Optimizing
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        {year && (
          <footer className="mt-8 text-center text-[9px] text-slate-600 uppercase tracking-[0.3em] opacity-60">
            &copy; {year} Akein Dilkith
          </footer>
        )}
      </div>
    </div>
  );
}
