import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, FolderGit2, FileDown, ShieldCheck, Sparkles, Terminal, Shield, CheckCircle2, Code2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      
      {/* Background Watermark Heading (Exact reference match) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none pointer-events-none opacity-[0.03] text-center w-full">
        <span className="font-heading font-black text-[18vw] sm:text-[16vw] tracking-tighter leading-none text-white block">
          PORTFOLIO
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Greeting, Name, Description, CTAs */}
          <div className="lg:col-span-5 flex flex-col items-start z-10">
            
            {/* Top Greeting Badge */}
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider border border-white/10 bg-[#111318]/90 text-zinc-300 shadow-lg backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-ping" />
                <span>CYBER • DESIGN • MOTION</span>
              </span>
            </div>

            <div className="mb-4">
              <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white/80">
                Hi, <span className="text-white">I'm</span>
              </h1>
              <h2 className="font-heading text-5xl sm:text-7xl font-black tracking-tight text-white mt-1 leading-[1.05]">
                RISHVAN <span className="text-[var(--accent)] inline-block">A P</span>
              </h2>
            </div>

            {/* Role Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-xs sm:text-sm font-mono text-[var(--accent)] font-medium">Ethical Hacker</span>
              <span className="text-zinc-600">•</span>
              <span className="text-xs sm:text-sm font-mono text-zinc-300 font-medium">Graphic Designer</span>
              <span className="text-zinc-600">•</span>
              <span className="text-xs sm:text-sm font-mono text-zinc-300 font-medium">Video Editor</span>
            </div>

            {/* Description */}
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              I combine <span className="text-white font-medium">cybersecurity knowledge</span>, <span className="text-white font-medium">creative design</span>, and digital technology to build secure, engaging, and meaningful digital experiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider bg-[var(--accent)] text-black hover:shadow-[0_0_25px_var(--accent-glow)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <FolderGit2 className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>View My Projects</span>
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-heading font-semibold text-xs uppercase tracking-wider border border-white/15 bg-white/5 text-white hover:border-[var(--accent)] hover:text-black hover:bg-[var(--accent)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <FileDown className="w-4 h-4 text-[var(--accent)] group-hover:text-black transition-colors" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Quick Micro-Badges */}
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-6 text-xs text-zinc-500 font-mono">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[var(--accent)]" />
                <span>Secured Thinking</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[var(--accent)]" />
                <span>Creative Vision</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-[var(--accent)]" />
                <span>Linux & Code</span>
              </div>
            </div>
          </div>

          {/* Center Column: Ultra-Attractive Cyber Portrait Composition */}
          <div className="lg:col-span-4 flex items-center justify-center relative">
            <div className="relative w-80 sm:w-96 aspect-[3/4] max-w-full group">
              
              {/* Layer 1: Ambient Glowing Radial Halos */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--accent)]/20 via-blue-500/15 to-[var(--accent)]/15 rounded-[2.5rem] blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Layer 2: Rotating Cyber Ticks & Orbit Ring */}
              <div className="absolute -inset-6 rounded-full border border-[var(--accent)]/25 border-dashed animate-spin-slow pointer-events-none" />
              <div className="absolute -inset-10 rounded-full border border-white/5 pointer-events-none" />

              {/* Layer 3: Tech HUD Corner Brackets */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[var(--accent)] z-20 pointer-events-none" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[var(--accent)] z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[var(--accent)] z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[var(--accent)] z-20 pointer-events-none" />

              {/* Layer 4: Main Portrait Card */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/15 bg-gradient-to-b from-[#111318] via-[#0B0D12] to-[#08090D] shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                
                {/* Background Tech Grid Lines */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                {/* Backlight Cyber Glow behind Rishvan */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-[var(--accent)]/15 filter blur-3xl pointer-events-none" />

                {/* Profile Photo with Smooth Feathered Blend */}
                <div className="relative w-full h-full flex items-end justify-center pt-4 overflow-hidden">
                  <img
                    src="/profile.png"
                    alt="Rishvan A P Portrait"
                    className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/profile-full.jpg";
                    }}
                  />
                  {/* Bottom blend shadow */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#08090D] via-[#08090D]/70 to-transparent pointer-events-none" />
                </div>

                {/* Top-Right Floating Tech Tag */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#08090D]/85 backdrop-blur-md border border-[var(--accent)]/40 shadow-lg flex items-center gap-1.5 z-20">
                  <Shield className="w-3 h-3 text-[var(--accent)]" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white font-semibold">SEC // 0x28</span>
                </div>

                {/* Top-Left Discipline Tag */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#08090D]/85 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300 flex items-center gap-1.5 z-20">
                  <Code2 className="w-3 h-3 text-cyan-400" />
                  <span>KERALA // IN</span>
                </div>

                {/* Bottom Floating Interactive Identity HUD */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-[#08090D]/90 backdrop-blur-xl border border-white/10 shadow-2xl z-20 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)] animate-pulse" />
                    <div>
                      <div className="text-xs font-heading font-bold text-white flex items-center gap-1">
                        <span>Rishvan A P</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)]" />
                      </div>
                      <div className="text-[10px] font-mono text-zinc-400">
                        Ethical Hacker & Designer
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30">
                    2026 ACTIVE
                  </span>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Stylized Role Typographic Stack (Exact reference element) */}
          <div className="hidden lg:flex lg:col-span-3 flex-col justify-end items-end text-right select-none">
            <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-2">
              // CORE DISCIPLINES
            </span>
            <div className="flex flex-col space-y-1">
              <span className="font-heading font-black text-2xl text-[var(--accent)] tracking-wider">
                ETHICAL HACKER
              </span>
              <span className="font-heading font-black text-3xl text-white/90 tracking-wide">
                GRAPHIC
              </span>
              <span className="font-heading font-black text-4xl text-white tracking-tight">
                DESIGNER
              </span>
              <span className="font-heading font-extrabold text-2xl text-zinc-400 tracking-wider">
                VIDEO EDITOR
              </span>
            </div>
            <div className="w-16 h-1 bg-[var(--accent)] mt-4 shadow-[0_0_10px_var(--accent-glow)]" />
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <a
          href="#about"
          className="flex flex-col items-center text-[10px] font-mono tracking-widest uppercase text-zinc-500 hover:text-[var(--accent)] transition-colors group cursor-pointer"
        >
          <div className="w-5 h-9 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-[var(--accent)] transition-colors">
            <div className="w-1 h-2 rounded-full bg-[var(--accent)] animate-bounce" />
          </div>
          <span className="mt-2 flex items-center gap-1">
            <span>SCROLL DOWN</span>
            <ArrowDown className="w-3 h-3 text-[var(--accent)]" />
          </span>
        </a>
      </div>

    </section>
  );
};
