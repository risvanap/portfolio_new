import React from 'react';
import { EDUCATION_TIMELINE } from '../data/portfolioData';
import { GraduationCap, Award, ShieldCheck, CheckCircle2, Hourglass } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden border-t border-white/5 bg-[#08090D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap className="w-4 h-4 text-[var(--accent)]" />
            <span className="text-xs font-mono tracking-widest text-[var(--accent)] uppercase">
              // ACADEMIC & TECHNICAL MILESTONES
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-white tracking-tight">
            Education & Certifications<span className="text-[var(--accent)]">.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
            Structured foundational training in systems hardware, network architecture, and modern offensive/defensive cybersecurity.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/10 space-y-10">
          {EDUCATION_TIMELINE.map((item, idx) => {
            const isCompleted = item.badge === 'Completed';

            return (
              <div key={item.title} className="relative group">
                
                {/* Timeline Node Icon */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-[#111318] border-2 border-[var(--accent)] flex items-center justify-center shadow-[0_0_12px_var(--accent-glow)] group-hover:scale-125 transition-transform duration-300">
                  <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                </div>

                {/* Card Container */}
                <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#111318]/70 hover:border-[var(--accent-border)] transition-all duration-300 shadow-xl group">
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
                        {item.institution}
                      </span>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mt-1 group-hover:text-[var(--accent)] transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider font-semibold border ${
                          isCompleted
                            ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                            : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Hourglass className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                        )}
                        <span>{item.badge}</span>
                      </span>

                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-3xl">
                    {item.description}
                  </p>

                </div>

              </div>
            );
          })}
        </div>

        {/* Future Certifications Notice */}
        <div className="mt-12 p-6 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5 text-[var(--accent)]" />
            </div>
            <div>
              <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
                Continuous Certification Pipeline
              </h4>
              <p className="text-xs text-zinc-400">
                Currently preparing for CEH (Certified Ethical Hacker), CompTIA Security+, and cloud-native defensive certifications.
              </p>
            </div>
          </div>
          <span className="text-[11px] font-mono text-[var(--accent)] border border-[var(--accent-border)] bg-[var(--accent-muted)] px-3 py-1 rounded-full whitespace-nowrap">
            Pipeline Active
          </span>
        </div>

      </div>
    </section>
  );
};

