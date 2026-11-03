import React, { useEffect, useRef } from 'react';

export const AmbientBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particles setup
    const particleCount = Math.min(Math.floor(width / 35), 45);
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.6 + 0.8,
        alpha: Math.random() * 0.4 + 0.15,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Get current accent color from root or fallback
      const computedStyle = getComputedStyle(document.documentElement);
      const accent = computedStyle.getPropertyValue('--accent').trim() || '#B8FF65';

      // Draw and connect particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse gentle repel
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const angle = Math.atan2(dy, dx);
          p.x += Math.cos(angle) * 1.2;
          p.y += Math.sin(angle) * 1.2;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = accent;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist2 < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = accent;
            ctx.globalAlpha = (1 - dist2 / 110) * 0.12;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Noise grain overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Drafting dot grid */}
      <div className="pinterest-dot-grid" aria-hidden="true" />

      {/* Ambient gradient blurred blobs */}
      <div className="ambient-blobs" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* Canvas for floating interactive particles */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[2]"
        aria-hidden="true"
      />

      {/* Floating Mood / Tech Pins (exact reference feature) */}
      <div className="hidden lg:block fixed inset-0 pointer-events-none z-[3] overflow-hidden" aria-hidden="true">
        {/* Pin 1: Cyber Security */}
        <div className="pinterest-pin top-[16vh] left-[3.5%] p-3.5 rounded-xl border border-white/10 bg-[#111318]/70 backdrop-blur-md shadow-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-ping" />
            <span className="text-[10px] uppercase font-mono tracking-wider text-white/70">cyber.01 // defense</span>
          </div>
          <svg className="w-16 h-16 text-white/60" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <rect x="15" y="15" width="70" height="70" rx="8" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
            <path d="M 50 25 L 75 35 V 55 C 75 70 50 82 50 82 C 50 82 25 70 25 55 V 35 Z" strokeWidth="1.4" fill="none" stroke="currentColor" />
            <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.9" />
          </svg>
        </div>

        {/* Pin 2: Graphic Design */}
        <div className="pinterest-pin top-[88vh] right-[4%] p-3.5 rounded-xl border border-white/10 bg-[#111318]/70 backdrop-blur-md shadow-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            <span className="text-[10px] uppercase font-mono tracking-wider text-white/70">design.02 // grid</span>
          </div>
          <svg className="w-16 h-20 text-white/60" viewBox="0 0 100 130" fill="none" stroke="currentColor">
            <rect x="10" y="10" width="80" height="110" rx="6" strokeWidth="1.2" opacity="0.6" />
            <line x1="30" y1="10" x2="30" y2="120" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.4" />
            <line x1="70" y1="10" x2="70" y2="120" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.4" />
            <text x="35" y="55" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="32" fill="currentColor" opacity="0.9">R</text>
            <rect x="25" y="80" width="50" height="4" fill="currentColor" opacity="0.5" />
          </svg>
        </div>

        {/* Pin 3: Video Production */}
        <div className="pinterest-pin top-[175vh] left-[4%] p-3.5 rounded-xl border border-white/10 bg-[#111318]/70 backdrop-blur-md shadow-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            <span className="text-[10px] uppercase font-mono tracking-wider text-white/70">video.03 // timeline</span>
          </div>
          <svg className="w-16 h-14 text-white/60" viewBox="0 0 100 80" fill="none" stroke="currentColor">
            <rect x="10" y="10" width="80" height="60" rx="6" strokeWidth="1.2" opacity="0.6" />
            <circle cx="50" cy="40" r="14" strokeWidth="1.2" />
            <polygon points="46,33 58,40 46,47" fill="currentColor" opacity="0.8" />
            <line x1="10" y1="60" x2="90" y2="60" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        {/* Pin 4: Hardware & Network */}
        <div className="pinterest-pin top-[270vh] right-[5%] p-3.5 rounded-xl border border-white/10 bg-[#111318]/70 backdrop-blur-md shadow-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            <span className="text-[10px] uppercase font-mono tracking-wider text-white/70">net.04 // router</span>
          </div>
          <svg className="w-16 h-16 text-white/60" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <circle cx="50" cy="50" r="38" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
            <rect x="35" y="35" width="30" height="30" rx="4" strokeWidth="1.2" opacity="0.7" />
            <line x1="50" y1="15" x2="50" y2="35" strokeWidth="1.2" />
            <line x1="50" y1="65" x2="50" y2="85" strokeWidth="1.2" />
            <line x1="15" y1="50" x2="35" y2="50" strokeWidth="1.2" />
            <line x1="65" y1="50" x2="85" y2="50" strokeWidth="1.2" />
            <circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.9" />
          </svg>
        </div>
      </div>

      {/* Floating Geometric SVGs */}
      <div className="hidden lg:block fixed inset-0 pointer-events-none z-[2] overflow-hidden" aria-hidden="true">
        {/* Orbital Ring */}
        <svg className="absolute top-[12vh] right-[10%] w-32 h-32 text-white/10" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="8 6" />
        </svg>

        {/* Diamond */}
        <svg className="absolute top-[65vh] left-[7%] w-10 h-10 text-white/10" viewBox="0 0 40 40">
          <rect x="10" y="10" width="20" height="20" transform="rotate(45 20 20)" fill="none" stroke="currentColor" strokeWidth="0.8" />
        </svg>

        {/* Cross */}
        <svg className="absolute top-[140vh] right-[8%] w-8 h-8 text-white/15" viewBox="0 0 40 40">
          <line x1="20" y1="5" x2="20" y2="35" stroke="currentColor" strokeWidth="1" />
          <line x1="5" y1="20" x2="35" y2="20" stroke="currentColor" strokeWidth="1" />
        </svg>

        {/* Brackets */}
        <svg className="absolute top-[220vh] left-[6%] w-8 h-16 text-white/10" viewBox="0 0 30 60">
          <path d="M 22 5 L 8 30 L 22 55" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </div>
    </>
  );
};

