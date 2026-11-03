import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Shield, PenTool, Video, Code, Wrench, Network } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Shield className="w-5 h-5 text-[var(--accent)]" />;
      case 1:
        return <PenTool className="w-5 h-5 text-[var(--accent)]" />;
      case 2:
        return <Video className="w-5 h-5 text-[var(--accent)]" />;
      case 3:
        return <Code className="w-5 h-5 text-[var(--accent)]" />;
      case 4:
        return <Wrench className="w-5 h-5 text-[var(--accent)]" />;
      default:
        return <Network className="w-5 h-5 text-[var(--accent)]" />;
    }
  };

  return (
    <section id="skills" className="relative py-28 overflow-hidden border-t border-white/5">
      
      {/* Background Watermark Parallax Heading */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 -z-10 select-none pointer-events-none opacity-[0.03] text-center w-full">
        <span className="font-heading font-black text-[18vw] sm:text-[14vw] tracking-tighter leading-none text-white block">
          SKILLS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-mono tracking-widest text-[var(--accent)] uppercase mb-2">
            // TECHNICAL & CREATIVE STACK
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-white tracking-tight">
            Skills & Technologies<span className="text-[var(--accent)]">.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
            A comprehensive, verified toolkit bridging security testing, digital design, motion video editing, and modern web software.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={category.title}
              className="p-6 rounded-3xl border border-white/10 bg-[#111318]/70 hover:border-[var(--accent-border)] hover:bg-[#111318]/90 transition-all duration-300 group shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[var(--accent)] group-hover:bg-[var(--accent-muted)] transition-colors">
                    {getCategoryIcon(idx)}
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-white uppercase tracking-wider group-hover:text-[var(--accent)] transition-colors">
                      {category.title}
                    </h3>
                    <span className="text-[10px] font-mono text-zinc-500">
                      0{idx + 1} // DOMAIN
                    </span>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-5">
                  {category.description}
                </p>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

