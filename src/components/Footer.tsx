import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Mail } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#050608] pt-16 pb-12 overflow-hidden">
      
      {/* Decorative top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-[var(--accent)] shadow-[0_0_20px_var(--accent)] opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand info */}
          <div className="md:col-span-6 space-y-4">
            <a href="#hero" className="inline-flex items-center gap-1 font-heading text-2xl font-black text-white">
              <span>RISVAN</span>
              <span className="text-[var(--accent)]">.</span>
            </a>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              Designing secure paths through cybersecurity discipline, graphic aesthetics, cinematic motion, and creative storytelling.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-9 h-9 rounded-xl border border-white/10 bg-[#111318] flex items-center justify-center text-zinc-400 hover:text-white hover:border-[var(--accent)] transition-colors"
              >
                <i className="fa-brands fa-instagram text-sm"></i>
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-xl border border-white/10 bg-[#111318] flex items-center justify-center text-zinc-400 hover:text-white hover:border-[var(--accent)] transition-colors"
              >
                <i className="fa-brands fa-github text-sm"></i>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-xl border border-white/10 bg-[#111318] flex items-center justify-center text-zinc-400 hover:text-white hover:border-[var(--accent)] transition-colors"
              >
                <i className="fa-brands fa-linkedin text-sm"></i>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Send Email"
                className="w-9 h-9 rounded-xl border border-white/10 bg-[#111318] flex items-center justify-center text-zinc-400 hover:text-white hover:border-[var(--accent)] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs font-mono text-zinc-400">
              <li><a href="#hero" className="hover:text-white transition-colors">01 // Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">02 // About</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">03 // Skills</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">04 // Projects</a></li>
              <li><a href="#interests" className="hover:text-white transition-colors">05 // Interests</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">06 // Contact</a></li>
            </ul>
          </div>

          {/* Credentials & Direct actions */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold block">
              Credentials
            </span>
            <div className="space-y-2 text-xs text-zinc-400">
              <p>Ethical Hacking (Avodha 2023)</p>
              <p>Hardware & Networking (Bites 2018)</p>
              <div className="pt-2">
                <button
                  onClick={onOpenResume}
                  className="px-4 py-2 rounded-xl text-xs font-heading font-semibold uppercase tracking-wider bg-white/5 border border-white/15 text-white hover:bg-[var(--accent)] hover:text-black hover:border-[var(--accent)] transition-all cursor-pointer"
                >
                  View Digital Resume
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            &copy; 2026 {PERSONAL_INFO.name}. Built with precision in Kerala, India.
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-[var(--accent)] transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>

      </div>

    </footer>
  );
};
