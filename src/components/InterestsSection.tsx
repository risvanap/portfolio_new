import React, { useState } from 'react';
import { INTERESTS } from '../data/portfolioData';
import { Sparkles, Compass } from 'lucide-react';

export const InterestsSection: React.FC = () => {
  const [activeInterestIdx, setActiveInterestIdx] = useState<number>(0);

  return (
    <section id="interests" className="relative py-28 overflow-hidden border-t border-white/5">
      
      {/* Background Watermark Parallax Text */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 -z-10 select-none pointer-events-none opacity-[0.03] text-center w-full">
        <span className="font-heading font-black text-[18vw] sm:text-[14vw] tracking-tighter leading-none text-white block">
          PASSIONS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="flex items-center gap-2 mb-2">
            <Compass className="w-4 h-4 text-[var(--accent)]" />
            <span className="text-xs font-mono tracking-widest text-[var(--accent)] uppercase">
              // CREATIVE PASSIONS
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-white tracking-tight">
            BEYOND TECHNOLOGY<span className="text-[var(--accent)]">.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
            Creative exploration outside traditional confines — visual storytelling, cinematic motion, security experimentation, and structural thinking.
          </p>
        </div>

        {/* Expanding Interests Accordion (Matching reference) */}
        <div className="projects-accordion">
          {INTERESTS.map((item, idx) => {
            const isActive = activeInterestIdx === idx;

            return (
              <div
                key={item.id}
                onClick={() => setActiveInterestIdx(idx)}
                className={`accordion-item group relative overflow-hidden border border-white/10 bg-[#111318] ${
                  isActive ? 'active border-[var(--accent-border)] ring-1 ring-[var(--accent-glow)]' : 'hover:border-white/20'
                }`}
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(8,9,13,0.95) 0%, rgba(8,9,13,0.6) 60%, rgba(8,9,13,0.3) 100%), url(${item.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Gradient shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-[#08090D]/50 to-transparent" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6 z-10">
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/10 text-white backdrop-blur-md border border-white/10">
                      <Sparkles className="w-3 h-3 text-[var(--accent)]" />
                      <span>{item.category}</span>
                    </span>
                    <span className="text-xs font-mono text-zinc-400 bg-[#08090D]/70 px-2 py-0.5 rounded border border-white/5">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Bottom Text */}
                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-tight group-hover:text-[var(--accent)] transition-colors">
                      {item.title}
                    </h3>

                    <p
                      className={`text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4 transition-all duration-300 ${
                        isActive ? 'line-clamp-3 sm:line-clamp-none opacity-100' : 'line-clamp-1 opacity-70'
                      }`}
                    >
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-[#08090D]/90 border border-white/10 text-zinc-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};

