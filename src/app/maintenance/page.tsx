import React from 'react';

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* --- FULL SCREEN MOVING FLARE BALL --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="absolute w-[500px] h-[500px] rounded-full animate-ball-screen-move opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(37,99,235,0.4) 45%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        
        {/* Optional: Subtle ambient static glow so the center is never pitch black */}
        <div className="absolute inset-0 bg-blue-900/5" />
      </div>

      {/* --- CONTENT CARD --- */}
      <div className="relative z-10 max-w-md w-full text-center bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] p-8 md:p-12">
        
        {/* Animated Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20">
              <svg 
                className="w-10 h-10 text-blue-400 animate-spin-slow" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-3xl font-bold text-white mb-4 tracking-tight">
          System Update
        </h1>
        <p className="text-slate-400 mb-8 leading-relaxed">
          <span className="font-semibold text-blue-400">Akein Dilkith</span> is currently undergoing maintenance. We’ll be back online shortly.
        </p>

        {/* Progress Indicator */}
        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden mb-8">
          <div className="bg-blue-500 h-full w-[70%] rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)] animate-pulse"></div>
        </div>

        <div className="text-sm font-medium text-blue-300 bg-blue-500/10 py-2 px-6 rounded-full inline-block border border-blue-500/20">
          Estimated completion: 2 hours
        </div>

        <footer className="mt-12 text-[10px] text-slate-500 uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} Akein Dilkith
        </footer>
      </div>
    </div>
  );
}
