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
        <div 
          className="absolute w-[600px] h-[600px] rounded-full animate-ball-screen-move opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.6) 0%, rgba(37,99,235,0.2) 45%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 w-full max-w-md">
        <Card className="bg-white/5 border-white/10 backdrop-blur-xl shadow-2xl rounded-[2.5rem] overflow-hidden">
          <CardContent className="flex flex-col items-center pt-16 pb-12 px-10 text-center">
            
            {/* Animated Floating Icon Container */}
            <div className="mb-12 relative animate-float">
              {/* Blue Glow Behind Icon */}
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-150" />
              
              <div className="relative flex items-center justify-center">
                <div className="relative h-24 w-24">
                  <Hammer 
                    className="absolute top-0 right-0 w-14 h-14 text-slate-300 -rotate-12 transform-gpu drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" 
                    strokeWidth={1.5}
                  />
                  <Wrench 
                    className="absolute bottom-0 left-0 w-14 h-14 text-blue-400 rotate-45 transform-gpu drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]" 
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-4 mb-12">
              <h1 className="text-4xl font-extrabold text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                System Update
              </h1>
              <div className="space-y-2">
                <p className="text-slate-200 text-lg font-medium">
                  We're polishing things up for you.
                </p>
                <p className="text-slate-500 text-sm max-w-[240px] mx-auto leading-relaxed">
                  The terminal is currently undergoing scheduled optimization to improve your experience.
                </p>
              </div>
            </div>

            {/* Working Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/20 group hover:border-blue-500/40 transition-colors">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.25em] text-blue-400 uppercase">
                Maintenance in Progress
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Optional small copyright if year exists */}
        {year && (
          <footer className="mt-10 text-center text-[10px] text-slate-600 uppercase tracking-[0.3em] opacity-60">
            &copy; {year} Akein Dilkith
          </footer>
        )}
      </div>
    </div>
  );
}
