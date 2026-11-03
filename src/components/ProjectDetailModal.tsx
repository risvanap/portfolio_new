import React from 'react';
import { Project } from '../types';
import { X, CheckCircle2, Clock, Sparkles } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const isCompleted = project.status === 'Completed';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-xl animate-fade-in overflow-y-auto">
      
      <div className="relative w-full max-w-3xl rounded-3xl border border-white/15 bg-[#0E1015] shadow-2xl overflow-hidden my-auto">
        
        {/* Banner Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1015] via-[#0E1015]/40 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close Project Modal"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Status Badge */}
          <div className="absolute bottom-4 left-6">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-semibold border backdrop-blur-md ${
                isCompleted
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                  : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
              }`}
            >
              {isCompleted ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
              <span>{project.status}</span>
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
              {project.subtitle}
            </span>
            <h2 className="font-heading text-3xl font-black text-white mt-1">
              {project.title}
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Project Overview & Architecture
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Core Functionalities & Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl border border-white/5 bg-white/[0.02] flex items-start gap-2.5"
                  >
                    <Sparkles className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Footer note on developmental integrity */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-xs font-mono text-zinc-500">
              {isCompleted
                ? `Verified Project Completion • ${project.completionDate || '2024'}`
                : 'Project in active ongoing development • Verified work in progress'}
            </span>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider bg-[var(--accent)] text-black hover:shadow-[0_0_15px_var(--accent-glow)] transition-all cursor-pointer"
              >
                Inquire About Project
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
