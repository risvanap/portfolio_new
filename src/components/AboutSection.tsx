import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, ABOUT_CARDS, STATS, LANGUAGES } from '../data/portfolioData';
import { Quote, Languages, Shield, PenTool, Video, Cpu, CheckCircle2, Terminal } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const rotatingWords = [
    "Ethical Hacker.",
    "Graphic Designer.",
    "Video Editor.",
    "Digital Creator.",
    "Technology Enthusiast."
  ];

  const [currentWordIdx, setCurrentWordIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIdx((prev) => (prev + 1) % rotatingWords.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  const getCardIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Shield className="w-5 h-5 text-[var(--accent)]" />;
      case 1:
        return <PenTool className="w-5 h-5 text-[var(--accent)]" />;
      case 2:
        return <Video className="w-5 h-5 text-[var(--accent)]" />;
      default:
        return <Cpu className="w-5 h-5 text-[var(--accent)]" />;
    }
  };

  return (
    <section id="about" className="relative py-28 overflow-hidden border-t border-white/5">
      
      {/* Background Watermark Parallax Text */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 -z-10 select-none pointer-events-none opacity-[0.03] text-center w-full">
        <span className="font-heading font-black text-[18vw] sm:text-[14vw] tracking-tighter leading-none text-white block">
          ABOUT ME
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Attractive Cyber Headshot Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#111318] to-[#0A0B0E] p-5 shadow-2xl backdrop-blur-xl group">
              
              {/* Outer decorative ambient glow */}
              <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-[var(--accent)]/15 filter blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
              
              {/* Cyber Corner Accents */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[var(--accent)] pointer-events-none" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[var(--accent)] pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[var(--accent)] pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[var(--accent)] pointer-events-none" />

              {/* Headshot image container */}
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 mb-5 bg-[#08090D] shadow-inner">
                <img
                  src="./about-profile.png"
                  alt="Rishvan A P"
                  className="w-full h-full object-cover object-center group-hover:scale-105 filter contrast-[1.05] brightness-[1.02] transition-transform duration-700 ease-out"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "./profile.png";
                  }}
                />

                {/* Subtle dark vignette border inside photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090D]/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Visual cyber HUD tags */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#08090D]/85 backdrop-blur-md border border-[var(--accent)]/40 text-[10px] font-mono text-[var(--accent)] font-semibold shadow-md">
                  SEC // 0x28
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#08090D]/85 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300">
                  KL.IN // 11.25°N
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white bg-[#08090D]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                    <span>Verified Professional</span>
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)]" />
                </div>
              </div>

              {/* Quick Bio Info beneath photo */}
              <div className="space-y-3 px-2">
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-xs font-mono text-zinc-400">IDENTITY</span>
                  <span className="text-xs font-mono text-white font-medium">{PERSONAL_INFO.name}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-xs font-mono text-zinc-400">LOCATION</span>
                  <span className="text-xs font-mono text-zinc-300">{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-xs font-mono text-zinc-400">ROLE FOCUS</span>
                  <span className="text-xs font-mono text-[var(--accent)]">Cybersecurity & Design</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-mono text-zinc-400">AVAILABILITY</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--accent)]">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                    Open to Work
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative, 4 Information Cards, Quote, Stats, Languages */}
          <div className="lg:col-span-7 flex flex-col space-y-10">
            
            {/* Header & Animated Dynamic Tagline */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono tracking-widest text-[var(--accent)] uppercase">
                  // BIOGRAPHY & PHILOSOPHY
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-4">
                <h2 className="font-heading text-4xl sm:text-5xl font-black text-white tracking-tight">
                  ABOUT ME<span className="text-[var(--accent)]">.</span>
                </h2>
                <div className="h-8 flex items-center">
                  <span className="font-heading text-xl sm:text-2xl font-bold text-[var(--accent)] transition-all duration-300">
                    {rotatingWords[currentWordIdx]}
                  </span>
                </div>
              </div>

              <h3 className="font-heading text-lg sm:text-xl font-semibold text-zinc-200 mb-5">
                Technology Enthusiast. Ethical Hacker. Designer. Creator.
              </h3>

              <div className="space-y-4 text-zinc-400 text-base leading-relaxed">
                <p>
                  I am a technology enthusiast and creative digital professional with deep focus in <span className="text-white font-medium">cybersecurity, ethical hacking, graphic design, professional video editing</span>, and modern web technologies.
                </p>
                <p>
                  Rooted in Kerala, India, I enjoy bridging the analytical discipline of hardware, networking, and digital defense with the intuitive visual craft of poster design and motion cinematography. My objective is to create digital solutions and media that are inherently secure, visually memorable, and practically impactful.
                </p>
              </div>
            </div>

            {/* 4 Feature Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ABOUT_CARDS.map((card, idx) => (
                <div
                  key={card.number}
                  className="p-5 rounded-2xl border border-white/10 bg-[#111318]/70 hover:border-[var(--accent-border)] transition-all duration-300 group shadow-lg"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[var(--accent)] transition-colors">
                      {getCardIcon(idx)}
                    </div>
                    <span className="text-xs font-mono font-bold text-zinc-500 group-hover:text-[var(--accent)] transition-colors">
                      {card.number}
                    </span>
                  </div>
                  <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-1.5">
                    {card.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote Block */}
            <div className="relative p-6 rounded-2xl border border-white/10 bg-gradient-to-r from-[#111318] to-[#111318]/40 overflow-hidden">
              <Quote className="absolute right-4 top-4 w-12 h-12 text-white/5 pointer-events-none" />
              <p className="text-sm sm:text-base italic text-zinc-300 leading-relaxed">
                &ldquo;Whether I'm analyzing a network security framework, designing a promotional poster, or color-grading a cinematic sequence — I love the craft of thinking deeply and turning ideas into impactful realities.&rdquo;
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-5 h-0.5 bg-[var(--accent)]" />
                <span className="text-xs font-mono text-[var(--accent)] uppercase tracking-wider">
                  Rishvan A P • Core Philosophy
                </span>
              </div>
            </div>

            {/* Verified Statistics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-left">
                  <div className="font-heading text-3xl sm:text-4xl font-black text-white tracking-tight">
                    <span className="text-white">{stat.value.replace('+', '')}</span>
                    <span className="text-[var(--accent)]">+</span>
                  </div>
                  <div className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Languages I Speak */}
            <div className="p-5 rounded-2xl border border-white/10 bg-[#111318]/60">
              <div className="flex items-center gap-2 mb-4">
                <Languages className="w-4 h-4 text-[var(--accent)]" />
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                  Languages I Speak
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {LANGUAGES.map((lang) => (
                  <div key={lang.name} className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="font-medium text-white">{lang.name}</span>
                      <span className="font-mono text-zinc-400 text-[11px]">{lang.level}</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[var(--accent)] rounded-full transition-all duration-1000"
                        style={{ width: lang.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
