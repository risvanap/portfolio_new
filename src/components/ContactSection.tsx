import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Form submission action: prepares mailto and triggers confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#B8FF65', '#FFFFFF', '#0056FF']
      });

      // Construct formatted mailto fallback for direct client opening
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formData.subject || `Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.open(mailtoUrl, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden border-t border-white/5">
      
      {/* Background Watermark Parallax Text */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 -z-10 select-none pointer-events-none opacity-[0.03] text-center w-full">
        <span className="font-heading font-black text-[18vw] sm:text-[14vw] tracking-tighter leading-none text-white block">
          CONNECT
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare className="w-4 h-4 text-[var(--accent)]" />
            <span className="text-xs font-mono tracking-widest text-[var(--accent)] uppercase">
              // LET'S COLLABORATE
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-white tracking-tight">
            LET'S CREATE SOMETHING GREAT<span className="text-[var(--accent)]">.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
            Have a project in mind, need creative design work, or want to collaborate? Feel free to get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            <div>
              <h3 className="font-heading text-2xl font-bold text-white mb-4">
                Let's start a conversation
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                I am actively open to cybersecurity consultations, graphic design commissions, video editing projects, and creative digital roles. Let's build something remarkable together.
              </p>

              {/* Contact Method Cards */}
              <div className="space-y-4">
                
                {/* Email Card */}
                <div className="p-4 rounded-2xl border border-white/10 bg-[#111318]/70 hover:border-[var(--accent-border)] transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--accent)]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                        EMAIL ME
                      </span>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-sm font-mono text-white hover:text-[var(--accent)] transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    title="Copy Email Address"
                    className="p-2 rounded-lg bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[var(--accent)]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="p-4 rounded-2xl border border-white/10 bg-[#111318]/70 hover:border-[var(--accent-border)] transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--accent)]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                        PHONE / WHATSAPP
                      </span>
                      <a
                        href={`tel:${PERSONAL_INFO.phone}`}
                        className="text-sm font-mono text-white hover:text-[var(--accent)] transition-colors"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <a
                      href={`https://wa.me/918086380373`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Chat on WhatsApp"
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
                    >
                      WhatsApp
                    </a>
                    <button
                      onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                      title="Copy Phone Number"
                      className="p-2 rounded-lg bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      {copiedPhone ? <Check className="w-4 h-4 text-[var(--accent)]" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Location Card */}
                <div className="p-4 rounded-2xl border border-white/10 bg-[#111318]/70 flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--accent)]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                      LOCATION
                    </span>
                    <span className="text-sm font-mono text-white">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Network Channels */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-3">
                CONNECT ACROSS PLATFORMS
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-[#111318] text-xs font-mono text-zinc-300 hover:text-white hover:border-[var(--accent)] hover:bg-[var(--accent-muted)] transition-all"
                >
                  <i className="fa-brands fa-instagram text-pink-400 text-sm"></i>
                  <span>@risvan_ap</span>
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-[#111318] text-xs font-mono text-zinc-300 hover:text-white hover:border-[var(--accent)] transition-all"
                >
                  <i className="fa-brands fa-github text-white text-sm"></i>
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-[#111318] text-xs font-mono text-zinc-300 hover:text-white hover:border-[var(--accent)] transition-all"
                >
                  <i className="fa-brands fa-linkedin text-blue-400 text-sm"></i>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-[#111318]/90 backdrop-blur-2xl shadow-2xl relative">
              
              {submitSuccess ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)] flex items-center justify-center text-[var(--accent)] shadow-[0_0_20px_var(--accent-glow)]">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-zinc-400 text-sm max-w-md">
                    Thank you, <span className="text-white font-medium">{formData.name}</span>. Your message has been prepared for <span className="text-[var(--accent)] font-mono">{PERSONAL_INFO.email}</span>. I'll get back to you promptly!
                  </p>
                  <button
                    onClick={() => {
                      setSubmitSuccess(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center justify-between">
                        <span>Full Name *</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-[#08090D]/80 text-white placeholder-zinc-600 focus:outline-none focus:border-[var(--accent)] transition-all font-body text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center justify-between">
                        <span>Email Address *</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. alex@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-[#08090D]/80 text-white placeholder-zinc-600 focus:outline-none focus:border-[var(--accent)] transition-all font-body text-sm"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center justify-between">
                      <span>Subject / Project Type</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Cybersecurity Audit / Graphic Design Commission / Project Collab"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-[#08090D]/80 text-white placeholder-zinc-600 focus:outline-none focus:border-[var(--accent)] transition-all font-body text-sm"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center justify-between">
                      <span>Your Message *</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your inquiry, project scope, or ideas here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-[#08090D]/80 text-white placeholder-zinc-600 focus:outline-none focus:border-[var(--accent)] transition-all font-body text-sm resize-none"
                    />
                  </div>

                  {/* Error Notification */}
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-heading font-bold text-xs uppercase tracking-wider bg-[var(--accent)] text-black hover:shadow-[0_0_25px_var(--accent-glow)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Dispatching Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-2">
                    <span>Direct recipient: {PERSONAL_INFO.email}</span>
                    <span>Guaranteed Response within 24h</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
