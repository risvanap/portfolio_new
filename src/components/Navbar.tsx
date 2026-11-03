import React, { useState, useEffect } from 'react';
import { THEME_ACCENTS } from '../data/portfolioData';
import { ThemeAccent } from '../types';
import { Palette, FileText, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<string>("Cyber Lime");

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Interests', href: '#interests', id: 'interests' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);
      setIsScrolled(currentScroll > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeAccent = (theme: ThemeAccent) => {
    const root = document.documentElement;
    root.style.setProperty('--accent', theme.accent);
    root.style.setProperty('--accent-rgb', theme.accentRgb);
    root.style.setProperty('--accent-glow', theme.glow);
    root.style.setProperty('--accent-muted', theme.muted);
    root.style.setProperty('--accent-border', theme.border);
    setCurrentTheme(theme.name);
    setThemeMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar at the absolute top */}
      <div
        className="fixed top-0 left-0 h-[3px] z-[100] transition-all duration-100 ease-out bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Main Header / Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 glass-nav shadow-2xl backdrop-blur-md border-b border-white/5'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-1 font-heading text-xl sm:text-2xl font-black tracking-wider text-white hover:opacity-90 transition-opacity"
          >
            <span>RISVAN</span>
            <span className="text-[var(--accent)] transition-transform duration-300 group-hover:scale-125 inline-block font-extrabold text-2xl">.</span>
          </a>

          {/* Centered Desktop Navigation Pills */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full border border-white/10 bg-[#111318]/70 backdrop-blur-xl shadow-lg relative">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-medium uppercase tracking-wider rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-black font-semibold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {/* Sliding active pill indicator */}
                  {isActive && (
                    <span
                      className="absolute inset-0 rounded-full bg-[var(--accent)] -z-10 shadow-[0_0_15px_var(--accent-glow)] transition-all duration-300"
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs (Theme Switcher + Resume Button) */}
          <div className="flex items-center gap-3">
            
            {/* Theme Accent Switcher */}
            <div className="relative">
              <button
                onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                aria-label="Change Accent Color Theme"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 bg-[#111318]/80 text-zinc-300 hover:text-white hover:border-[var(--accent)] transition-all duration-200"
              >
                <Palette className="w-4 h-4 text-[var(--accent)]" />
              </button>

              {themeMenuOpen && (
                <div className="absolute right-0 mt-3 p-3 w-48 rounded-2xl border border-white/10 bg-[#111318]/95 backdrop-blur-2xl shadow-2xl z-50 flex flex-col gap-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 px-1 border-b border-white/5 pb-1.5">
                    Accent Palette
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {THEME_ACCENTS.map((t) => (
                      <button
                        key={t.name}
                        onClick={() => changeAccent(t)}
                        className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-left transition-all ${
                          currentTheme === t.name
                            ? 'bg-white/10 text-white'
                            : 'text-zinc-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full shadow-sm flex-shrink-0"
                          style={{ backgroundColor: t.accent }}
                        />
                        <span>{t.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full border border-white/15 bg-white/5 text-white hover:border-[var(--accent)] hover:text-black hover:bg-[var(--accent)] transition-all duration-300 shadow-sm group"
            >
              <FileText className="w-3.5 h-3.5 text-[var(--accent)] group-hover:text-black transition-colors" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-400 group-hover:text-black transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 bg-[#111318] text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#08090D]/95 backdrop-blur-2xl md:hidden flex flex-col justify-between pt-24 pb-8 px-6">
          <nav className="flex flex-col gap-3">
            <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
              Navigation
            </div>
            {navLinks.map((link, idx) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between text-2xl font-heading font-bold py-2 border-b border-white/5 transition-colors ${
                  activeSection === link.id
                    ? 'text-[var(--accent)]'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-zinc-600">0{idx + 1}</span>
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3.5 rounded-xl font-heading font-bold text-sm uppercase tracking-wider bg-[var(--accent)] text-black flex items-center justify-center gap-2 shadow-[0_0_20px_var(--accent-glow)]"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume</span>
            </button>
            <div className="text-center text-xs text-zinc-500 font-mono">
              RISHVAN A P • Kerala, India
            </div>
          </div>
        </div>
      )}
    </>
  );
};

