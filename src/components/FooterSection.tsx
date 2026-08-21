import React from 'react';
import { Heart, ChevronUp, Share2, Sparkles } from 'lucide-react';
import { GoldDivider, MandalaMedallion, CornerFlourish } from './OrnamentalDecorations';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Suresh & Nandini Wedding Invitation',
          text: 'Join us in celebrating the wedding of Suresh & Nandini on 30 August 2026 at Rajavarichinthalapalem, Nellore District!',
          url: window.location.href,
        });
      } catch {
        // User cancelled or error
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Invitation link copied to clipboard!');
    }
  };

  return (
    <footer className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-20 px-6 sm:px-12 lg:px-20 bg-[#050814] text-center border-t border-[#d4af6a]/40">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#d4af6a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Decorative Corner Ornaments */}
      <CornerFlourish position="top-left" size={54} />
      <CornerFlourish position="top-right" size={54} />
      <CornerFlourish position="bottom-left" size={54} />
      <CornerFlourish position="bottom-right" size={54} />

      {/* Footer Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Main 2-Column Luxury Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12">
          {/* LEFT SIDE: Couple Image framed with gold border & soft vignette blend */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl border-2 border-[#d4af6a]/80 p-2.5 sm:p-3 bg-gradient-to-b from-[#131f42] via-[#0d1630] to-[#070b1a] shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
              <CornerFlourish position="top-left" size={40} />
              <CornerFlourish position="top-right" size={40} />
              <CornerFlourish position="bottom-left" size={40} />
              <CornerFlourish position="bottom-right" size={40} />

              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden border border-[#d4af6a]/40">
                <picture>
                  <source srcSet="footer.png" />
                  <source srcSet="/footer.png" />
                  <source srcSet="assets/footer.png" />
                  <img
                    src="footer.png"
                    alt="Suresh & Nandini Together"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src.indexOf('footer.png') === -1) {
                        target.src = '/footer.png';
                      }
                    }}
                  />
                </picture>
                {/* Soft Vignette Overlay to blend seamlessly */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050814]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#070b19]/90 border border-[#d4af6a]/40 text-[11px] font-cinzel text-[#fcebc2] tracking-widest uppercase">
                  Suresh &amp; Nandini
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT / CENTER AREA: Typography & Details */}
          <div className="lg:col-span-7 flex flex-col items-center text-center">
            {/* Sacred Top Mandala */}
            <MandalaMedallion className="mb-3" size={60} />

            {/* SAVE THE DATE Label */}
            <div className="inline-flex items-center gap-2 px-6 py-1.5 rounded-full border border-[#d4af6a]/60 bg-[#0d1630]/90 mb-4 shadow-[0_0_20px_rgba(212,175,106,0.25)]">
              <Sparkles className="w-3.5 h-3.5 text-[#fcebc2]" />
              <span className="font-cinzel text-xs uppercase tracking-[0.35em] text-[#fcebc2] font-bold">
                SAVE THE DATE
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#fcebc2]" />
            </div>

            {/* Script Font Couple Names (with full horizontal breathing room) */}
            <div className="w-full overflow-visible py-2">
              <h2
                id="footer-couple-names"
                className="font-script text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl text-gold-gradient drop-shadow-[0_4px_20px_rgba(212,175,106,0.45)] my-2 tracking-normal sm:tracking-wide inline-block px-4 sm:px-6 py-1 overflow-visible max-w-full leading-normal"
              >
                Suresh &amp; Nandini
              </h2>
            </div>

            {/* Telugu Names */}
            <p className="font-telugu-serif text-xl sm:text-2xl text-[#fcebc2] font-bold mb-2">
              సురేష్ &amp; నందిని
            </p>

            {/* Gold Divider with Flourish */}
            <GoldDivider className="my-3" width="w-40 sm:w-60" />

            {/* Date: 30 • 08 • 2026 */}
            <p className="font-cinzel text-2xl sm:text-3xl font-extrabold tracking-[0.35em] text-gold-gradient my-2 drop-shadow">
              30 • 08 • 2026
            </p>

            {/* Required Exact Tagline */}
            <p className="font-garamond text-2xl sm:text-3xl text-[#fcebc2] italic mt-2 mb-3 font-normal">
              &ldquo;A new beginning. A lifetime together.&rdquo;
            </p>

            {/* Telugu Blessing */}
            <p className="font-telugu-serif text-sm sm:text-base text-[#d4af6a] tracking-wide mb-6 font-medium">
              సదా మీ ఆశీస్సులు, శుభాకాంక్షలు కోరుకుంటూ...
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                id="share-invitation-btn"
                onClick={handleShare}
                className="flex items-center gap-2 px-7 py-3 rounded-full border border-[#d4af6a]/70 bg-[#0d1630]/90 text-[#fcebc2] hover:border-[#fcebc2] hover:bg-[#d4af6a] hover:text-[#070b19] font-cinzel text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_18px_rgba(212,175,106,0.25)] font-semibold"
              >
                <Share2 className="w-4 h-4" />
                Share Invitation
              </button>

              <button
                id="scroll-to-top-btn"
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="p-3 rounded-full border border-[#d4af6a]/70 bg-[#0d1630]/90 text-[#fcebc2] hover:border-[#fcebc2] hover:bg-[#d4af6a] hover:text-[#070b19] transition-all duration-300 shadow-[0_0_18px_rgba(212,175,106,0.25)]"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright / Courtesy & Creator Credit */}
        <div className="pt-6 border-t border-[#d4af6a]/20 w-full flex flex-col items-center text-xs text-[#d4af6a]/70 font-cinzel tracking-widest gap-2.5">
          <p className="flex items-center gap-1.5">
            <span>Crafted with love for</span>
            <Heart className="w-3.5 h-3.5 fill-current text-[#d4af6a]" />
            <span>Suresh &amp; Nandini</span>
          </p>
          <p className="font-garamond text-xs sm:text-sm text-[#d4af6a]/70 tracking-normal normal-case font-normal mt-1">
            Designed &amp; Created by{' '}
            <a
              id="footer-creator-email"
              href="mailto:praveenkumarnijamala@gmail.com"
              className="text-[#fcebc2] hover:text-white underline underline-offset-4 decoration-[#d4af6a]/50 hover:decoration-[#fcebc2] transition-colors font-medium"
            >
              praveenkumarnijamala@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
