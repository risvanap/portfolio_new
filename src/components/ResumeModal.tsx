import React from 'react';
import { PERSONAL_INFO, SKILL_CATEGORIES, EDUCATION_TIMELINE, PROJECTS } from '../data/portfolioData';
import { X, Download, Printer, Shield, CheckCircle2, Mail, Phone, MapPin, Globe, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 }
    });
    window.print();
  };

  const handleDownload = () => {
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 }
    });
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-fade-in overflow-y-auto">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl rounded-3xl border border-white/15 bg-[#0D0F14] shadow-2xl overflow-hidden my-auto">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#111318]/90">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            <span className="text-xs font-mono text-zinc-400 ml-2">
              RISHVAN_A_P_RESUME_2026.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-white/5 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 rounded-xl bg-[var(--accent)] text-black font-heading font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_15px_var(--accent-glow)] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors ml-2 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Area */}
        <div className="p-6 sm:p-10 max-h-[75vh] overflow-y-auto font-body text-zinc-300 space-y-8 bg-[#0D0F14]">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="font-heading text-3xl sm:text-4xl font-black text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-mono text-[var(--accent)] font-semibold mt-1">
                {PERSONAL_INFO.title}
              </p>
            </div>
            
            <div className="text-xs font-mono text-zinc-400 space-y-1 text-left sm:text-right">
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3 h-3 text-[var(--accent)]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3 h-3 text-[var(--accent)]" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-zinc-300 hover:text-[var(--accent)]">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3 h-3 text-[var(--accent)]" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-bold mb-2">
              01 // PROFESSIONAL PROFILE
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Education & Credentials */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-bold mb-3">
              02 // EDUCATION & CERTIFICATIONS
            </h2>
            <div className="space-y-3">
              {EDUCATION_TIMELINE.map((edu) => (
                <div key={edu.title} className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-sm font-bold text-white">{edu.title}</span>
                    <span className="text-xs font-mono text-zinc-500">{edu.year}</span>
                  </div>
                  <div className="text-xs font-mono text-[var(--accent)] mb-1.5">
                    Institution: {edu.institution} • {edu.credentialType}
                  </div>
                  <p className="text-xs text-zinc-400">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical & Creative Core Competencies */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-bold mb-3">
              03 // TECHNICAL & CREATIVE SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02]">
                  <h3 className="text-xs font-mono uppercase font-bold text-white mb-2">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-zinc-300 border border-white/5">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Portfolio Overview */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-bold mb-3">
              04 // FEATURED PROJECTS & WORKS
            </h2>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-sm font-bold text-white">{proj.title}</span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      proj.status === 'Completed'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    }`}>
                      {proj.status}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mb-2">{proj.description}</p>
                  <div className="text-[11px] font-mono text-zinc-500">
                    Tech Stack: {proj.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-bold mb-2">
              05 // LANGUAGES
            </h2>
            <p className="text-xs font-mono text-zinc-400">
              English (Fluent) • Malayalam (Native) • Hindi (Fluent)
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

