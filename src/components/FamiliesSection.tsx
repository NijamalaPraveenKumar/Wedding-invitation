import React from 'react';
import { Heart, Users, Sparkles, Quote } from 'lucide-react';
import { GoldDivider, CornerFlourish, ToranArchCrest } from './OrnamentalDecorations';

export const FamiliesSection: React.FC = () => {
  return (
    <section id="families" className="py-24 px-6 sm:px-12 lg:px-20 bg-[#0d1630] relative overflow-hidden border-t border-b border-[#d4af6a]/30">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af6a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <ToranArchCrest className="mb-2 opacity-80" width={180} />

        {/* Section Heading */}
        <div className="inline-flex items-center gap-2 mb-2">
          <Users className="w-4 h-4 text-[#d4af6a]" />
          <span className="font-cinzel text-xs sm:text-sm uppercase tracking-[0.25em] text-[#d4af6a] font-semibold">
            Honored Families
          </span>
        </div>

        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient tracking-[0.12em] uppercase mb-3">
          FAMILIES &amp; BLESSINGS
        </h2>

        <p className="font-telugu-serif text-base sm:text-lg text-[#fcebc2] max-w-xl mx-auto mb-4 font-medium">
          బంధుమిత్రులందరికీ ఇదే మా హృదయపూర్వక ఆహ్వానము
        </p>

        <GoldDivider className="mb-14" width="w-48 sm:w-64" />

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Bride's Family */}
          <div
            id="card-bride-family"
            className="relative rounded-2xl border border-[#d4af6a]/50 bg-gradient-to-b from-[#101c3d] to-[#070b1a] p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:border-[#f2cf87] hover:shadow-[0_0_25px_rgba(212,175,106,0.3)] transition-all duration-300 flex flex-col justify-between"
          >
            <CornerFlourish position="top-left" size={44} />
            <CornerFlourish position="bottom-right" size={44} />

            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#d4af6a]/50 bg-[#070b1a] text-xs font-cinzel tracking-widest text-[#fcebc2] mb-6 shadow-[0_0_10px_rgba(212,175,106,0.2)]">
                <Sparkles className="w-3 h-3 text-[#f2cf87]" />
                <span className="font-semibold">BRIDE&apos;S FAMILY</span>
              </div>

              {/* Bride Name */}
              <div className="overflow-visible">
                <h3 className="font-script text-4xl sm:text-5xl text-[#fcebc2] mb-1 px-3 overflow-visible">
                  Nandini
                </h3>
              </div>
              <p className="font-telugu-serif text-lg text-gold-gradient font-bold mb-6">
                చి.సౌ. నందిని
              </p>

              {/* Telugu Parent Names */}
              <div className="space-y-3 py-5 border-t border-b border-[#d4af6a]/20">
                <p className="font-cinzel text-xs uppercase tracking-widest text-[#d4af6a] font-semibold">
                  Daughter of
                </p>
                <p className="font-telugu-serif text-lg text-[#f2cf87] font-semibold leading-relaxed">
                  శ్రీమతి రమణమ్మ
                  <br />
                  <span className="text-sm font-normal text-[#d4af6a]">&amp;</span>
                  <br />
                  శ్రీ కొండలరావు
                </p>
                <p className="font-garamond text-base text-[#d4af6a]/90 italic">
                  Smt. Ramanamma &amp; Sri Kondala Rao
                </p>
              </div>
            </div>

            <div className="mt-6">
              <p className="font-telugu-serif text-xs text-[#d4af6a]/90">
                మరియు బంధుమిత్రులు, సమస్త కుటుంబ సభ్యులు
              </p>
            </div>
          </div>

          {/* Card 2: Center Card - Blessings Quote */}
          <div
            id="card-families-quote"
            className="relative rounded-2xl border-2 border-[#d4af6a] bg-gradient-to-b from-[#18264d] via-[#0d1630] to-[#070b1a] p-8 text-center shadow-[0_12px_35px_rgba(212,175,106,0.25)] flex flex-col justify-between items-center transform lg:-translate-y-2"
          >
            <CornerFlourish position="top-left" size={44} />
            <CornerFlourish position="top-right" size={44} />
            <CornerFlourish position="bottom-left" size={44} />
            <CornerFlourish position="bottom-right" size={44} />

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border border-[#f2cf87] bg-[#070b1a] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(212,175,106,0.4)]">
                <Quote className="w-7 h-7 text-[#fcebc2]" />
              </div>

              {/* Required Exact Quote */}
              <blockquote className="font-garamond text-2xl sm:text-3xl text-gold-gradient italic font-normal leading-relaxed my-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                &ldquo;With the blessings of our families, we warmly invite you to celebrate this beautiful beginning with us.&rdquo;
              </blockquote>

              <GoldDivider className="my-5" width="w-32" />

              {/* Telugu Blessing Text */}
              <p className="font-telugu-serif text-base sm:text-lg text-[#f2cf87] leading-relaxed font-medium">
                &ldquo;మా ఇరు కుటుంబాల ఆశీస్సులతో, మా నూతన దాంపత్య జీవితారంభ మహోత్సవానికి మిమ్మల్ని సాదరంగా ఆహ్వానిస్తున్నాము.&rdquo;
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2 text-[#d4af6a]">
              <Heart className="w-4 h-4 fill-current text-[#f2cf87] animate-pulse" />
              <span className="font-cinzel text-xs uppercase tracking-[0.25em] font-semibold text-[#fcebc2]">
                United in Love
              </span>
              <Heart className="w-4 h-4 fill-current text-[#f2cf87] animate-pulse" />
            </div>
          </div>

          {/* Card 3: Groom's Family */}
          <div
            id="card-groom-family"
            className="relative rounded-2xl border border-[#d4af6a]/50 bg-gradient-to-b from-[#101c3d] to-[#070b1a] p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:border-[#f2cf87] hover:shadow-[0_0_25px_rgba(212,175,106,0.3)] transition-all duration-300 flex flex-col justify-between"
          >
            <CornerFlourish position="top-right" size={44} />
            <CornerFlourish position="bottom-left" size={44} />

            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#d4af6a]/50 bg-[#070b1a] text-xs font-cinzel tracking-widest text-[#fcebc2] mb-6 shadow-[0_0_10px_rgba(212,175,106,0.2)]">
                <Sparkles className="w-3 h-3 text-[#f2cf87]" />
                <span className="font-semibold">GROOM&apos;S FAMILY</span>
              </div>

              {/* Groom Name */}
              <div className="overflow-visible">
                <h3 className="font-script text-4xl sm:text-5xl text-[#fcebc2] mb-1 px-3 overflow-visible">
                  Suresh
                </h3>
              </div>
              <p className="font-telugu-serif text-lg text-gold-gradient font-bold mb-6">
                చి. సురేష్
              </p>

              {/* Telugu Parent Names */}
              <div className="space-y-3 py-5 border-t border-b border-[#d4af6a]/20">
                <p className="font-cinzel text-xs uppercase tracking-widest text-[#d4af6a] font-semibold">
                  Son of
                </p>
                <p className="font-telugu-serif text-lg text-[#f2cf87] font-semibold leading-relaxed">
                  శ్రీమతి కామేశ్వరమ్మ
                  <br />
                  <span className="text-sm font-normal text-[#d4af6a]">&amp;</span>
                  <br />
                  శ్రీ రాముల
                </p>
                <p className="font-garamond text-base text-[#d4af6a]/90 italic">
                  Smt. Kameswaramma &amp; Sri Raamula
                </p>
              </div>
            </div>

            <div className="mt-6">
              <p className="font-telugu-serif text-xs text-[#d4af6a]/90">
                మరియు బంధుమిత్రులు, సమస్త కుటుంబ సభ్యులు
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
