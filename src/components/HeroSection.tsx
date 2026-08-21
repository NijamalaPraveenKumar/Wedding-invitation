import React from 'react';
import { ChevronDown, Calendar, Sparkles } from 'lucide-react';
import { GoldDivider, CornerFlourish, ToranArchCrest } from './OrnamentalDecorations';

interface HeroSectionProps {
  onScrollDown?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollDown }) => {
  return (
    <section
      id="home"
      className="relative min-h-[94vh] flex items-center justify-start overflow-hidden px-6 sm:px-12 lg:px-20 py-20 bg-[#070b19]"
    >
      {/* Background Image with Fallback and Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="hero.png" />
          <source srcSet="/hero.png" />
          <source srcSet="assets/hero.png" />
          <img
            src="hero.png"
            alt=""
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-[75%_top] sm:object-[80%_center] lg:object-[85%_center] transition-transform duration-1000"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src.indexOf('hero.png') === -1) {
                target.src = '/hero.png';
              }
            }}
          />
        </picture>

        {/* Multi-layered Dark Midnight Navy Gradient Overlays tailored for the uploaded image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070b19]/95 via-[#070b19]/75 via-40% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b19] via-transparent to-[#070b19]/50" />
      </div>

      {/* Decorative Corner Filigree Ornaments */}
      <CornerFlourish position="top-left" size={60} />
      <CornerFlourish position="top-right" size={60} />
      <CornerFlourish position="bottom-left" size={60} />
      <CornerFlourish position="bottom-right" size={60} />

      {/* Content Container - Left Aligned */}
      <div className="relative z-10 max-w-3xl lg:max-w-4xl text-left mt-6">
        {/* Sacred Telugu Invocation */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af6a]/50 bg-[#0d1630]/80 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(212,175,106,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-[#fcebc2]" />
          <span className="font-telugu-serif text-xs sm:text-sm text-[#fcebc2] tracking-wider font-semibold">
            ॥ శ్రీరస్తు శుభమస్తు అవిఘ్నమస్తు ॥
          </span>
        </div>

        {/* Eyebrow */}
        <p className="font-cinzel text-base sm:text-xl tracking-[0.3em] uppercase text-[#f2cf87] mb-2 font-medium">
          A Beautiful
        </p>

        {/* Large Heading: BEGINNING (Both G's completely visible) */}
        <h1
          id="hero-heading-beginning"
          className="font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-[0.06em] sm:tracking-[0.08em] uppercase text-gold-gradient select-none leading-none block w-full overflow-visible py-1"
          style={{
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.6), 0 0 24px rgba(212, 175, 106, 0.35)',
            wordBreak: 'keep-all',
          }}
        >
          BEGINNING
        </h1>

        {/* Gold Divider with ornamental flourish */}
        <div className="my-5">
          <GoldDivider className="justify-start" width="w-36 sm:w-56" />
        </div>

        {/* Script Font Couple Names */}
        <div className="w-full overflow-visible py-2">
          <h2
            id="hero-couple-names"
            className="font-script text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl text-gold-gradient drop-shadow-[0_4px_16px_rgba(212,175,106,0.5)] my-2 tracking-normal sm:tracking-wide inline-block px-4 sm:px-6 py-1 overflow-visible max-w-full leading-normal"
          >
            Suresh &amp; Nandini
          </h2>
        </div>

        {/* Telugu Names */}
        <p className="font-telugu-serif text-lg sm:text-xl text-[#f2cf87] font-semibold tracking-wide mb-4">
          సురేష్ <span className="text-[#fcebc2] mx-1.5 font-sans">♥</span> నందిని
        </p>

        {/* Letter-spaced Date */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 my-2 rounded-xl border border-[#d4af6a]/60 bg-[#070b1a]/90 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,106,0.2)]">
          <Calendar className="w-4 h-4 text-[#d4af6a]" />
          <span className="font-cinzel text-base sm:text-lg tracking-[0.3em] text-[#fcebc2] font-bold">
            30 · 08 · 2026
          </span>
        </div>

        {/* Subtext */}
        <p className="font-garamond text-xl sm:text-2xl text-[#f2cf87] italic max-w-lg mt-5 leading-relaxed font-normal">
          Two families. One beautiful beginning. A lifetime together.
        </p>

        {/* Invitation CTA */}
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <a
            id="hero-view-invitation-btn"
            href="#wedding"
            className="px-8 py-3.5 rounded-full bg-gold-gradient text-[#070b19] font-cinzel text-xs font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(212,175,106,0.5)] hover:shadow-[0_0_30px_rgba(212,175,106,0.85)] hover:scale-105 transition-all duration-300"
          >
            Wedding Details
          </a>
        </div>
      </div>

      {/* Animated Bouncing Scroll-Down Arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <a
          id="scroll-down-arrow-btn"
          href="#video"
          aria-label="Scroll down to wedding video"
          className="group flex flex-col items-center focus:outline-none"
        >
          <span className="font-cinzel text-[10px] uppercase tracking-[0.25em] text-[#d4af6a]/80 group-hover:text-[#f2cf87] mb-1.5 transition-colors">
            Scroll
          </span>
          <div className="p-2 rounded-full border border-[#d4af6a]/50 bg-[#0d1630]/80 group-hover:border-[#d4af6a] group-hover:bg-[#101c3d] transition-all shadow-[0_0_10px_rgba(212,175,106,0.2)]">
            <ChevronDown className="w-5 h-5 text-[#d4af6a] animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};
