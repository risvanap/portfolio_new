import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ArrowUpRight, Clock, CheckCircle2, LayoutGrid, Columns, Sparkles, Eye } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'All' | 'Completed' | 'In Development'>('All');
  const [activeAccordionIdx, setActiveAccordionIdx] = useState<number>(0);
  const [layoutView, setLayoutView] = useState<'accordion' | 'grid'>('accordion');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'All') return true;
    return p.status === filter;
  });

  return (
    <section id="projects" className="relative py-28 overflow-hidden border-t border-white/5">
      
      {/* Background Watermark Parallax Text */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 -z-10 select-none pointer-events-none opacity-[0.03] text-center w-full">
        <span className="font-heading font-black text-[18vw] sm:text-[14vw] tracking-tighter leading-none text-white block">
          WORK
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono tracking-widest text-[var(--accent)] uppercase mb-2 block">
              // CREATIVE & TECHNICAL WORKS
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-black text-white tracking-tight">
              Featured Projects<span className="text-[var(--accent)]">.</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
              Explore ongoing software concepts and completed creative productions, clearly segmented by developmental status.
            </p>
          </div>

          {/* Filter Pills + Layout Toggle */}
          <div className="flex flex-wrap items-center gap-3">
            
            {/* Filter Tabs */}
            <div className="flex items-center p-1 rounded-full border border-white/10 bg-[#111318]/80 backdrop-blur-md">
              {(['All', 'Completed', 'In Development'] as const).map((tab) => {
                const isActive = filter === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => {
                      setFilter(tab);
                      setActiveAccordionIdx(0);
                    }}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[var(--accent)] text-black font-semibold shadow-[0_0_12px_var(--accent-glow)]'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* Layout Toggle (Accordion vs Grid) */}
            <div className="hidden lg:flex items-center p-1 rounded-full border border-white/10 bg-[#111318]/80">
              <button
                onClick={() => setLayoutView('accordion')}
                title="Accordion View (Reference Style)"
                className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                  layoutView === 'accordion' ? 'bg-white/15 text-white' : 'text-zinc-500 hover:text-white'
                }`}
              >
                <Columns className="w-4 h-4" />
              </button>
              <button
                onClick={() => setLayoutView('grid')}
                title="Grid View"
                className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                  layoutView === 'grid' ? 'bg-white/15 text-white' : 'text-zinc-500 hover:text-white'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Status Legend Notice */}
        <div className="flex items-center gap-6 mb-8 text-xs font-mono text-zinc-400 border-b border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
            <span>Completed Works & Portfolio</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
            <span>In Development (Work in Progress)</span>
          </div>
        </div>

        {/* ACCORDION VIEW (Exact Reference Website Interaction) */}
        {layoutView === 'accordion' ? (
          <div className="projects-accordion">
            {filteredProjects.map((project, idx) => {
              const isActive = activeAccordionIdx === idx;
              const isCompleted = project.status === 'Completed';

              return (
                <div
                  key={project.id}
                  onClick={() => setActiveAccordionIdx(idx)}
                  className={`accordion-item group relative overflow-hidden border border-white/10 bg-[#111318] ${
                    isActive ? 'active border-[var(--accent-border)] ring-1 ring-[var(--accent-glow)]' : 'hover:border-white/20'
                  }`}
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(8,9,13,0.95) 0%, rgba(8,9,13,0.6) 60%, rgba(8,9,13,0.3) 100%), url(${project.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Subtle Accent Glow Border */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-[#08090D]/50 to-transparent" />

                  {/* Content Container */}
                  <div className="relative h-full flex flex-col justify-between p-6 z-10">
                    
                    {/* Top Row: Status Badge & Category */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold border ${
                          isCompleted
                            ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                            : 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <Clock className="w-3 h-3 text-amber-400 animate-spin-slow" />
                        )}
                        <span>{project.status}</span>
                      </span>

                      <span className="text-xs font-mono text-zinc-400 bg-[#08090D]/70 px-2.5 py-1 rounded-md border border-white/5">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Bottom Details */}
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-1 block">
                        {project.subtitle}
                      </span>
                      
                      <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-tight">
                        {project.title}
                      </h3>

                      {/* Expanded description on active */}
                      <p
                        className={`text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4 transition-all duration-300 ${
                          isActive ? 'line-clamp-3 sm:line-clamp-none opacity-100' : 'line-clamp-1 opacity-70'
                        }`}
                      >
                        {project.description}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.technologies.slice(0, isActive ? 5 : 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#08090D]/80 border border-white/10 text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProject(project);
                        }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider bg-[var(--accent)] text-black hover:shadow-[0_0_15px_var(--accent-glow)] transition-all cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Project Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* GRID VIEW */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => {
              const isCompleted = project.status === 'Completed';

              return (
                <div
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className="rounded-3xl border border-white/10 bg-[#111318]/80 overflow-hidden hover:border-[var(--accent-border)] transition-all duration-300 group cursor-pointer flex flex-col justify-between shadow-xl"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-transparent to-transparent" />
                    
                    <div className="absolute top-3 left-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold border backdrop-blur-md ${
                          isCompleted
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                            : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                        }`}
                      >
                        {isCompleted ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                        <span>{project.status}</span>
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 text-xs font-mono text-zinc-400 bg-black/60 px-2 py-0.5 rounded border border-white/10">
                      0{idx + 1}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--accent)] mb-1 block">
                        {project.subtitle}
                      </span>
                      <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-[var(--accent)] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-zinc-400 line-clamp-3 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.slice(0, 3).map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-zinc-400">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-white/5">
                        <span className="text-xs font-mono text-zinc-500">Overview & Tech</span>
                        <span className="inline-flex items-center gap-1 text-xs font-heading font-bold text-[var(--accent)]">
                          <span>Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

    </section>
  );
};

