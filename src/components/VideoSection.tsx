import React, { useState, useRef, useEffect } from 'react';
import { Play, Film, Sparkles } from 'lucide-react';
import { CornerFlourish, GoldDivider, ToranArchCrest } from './OrnamentalDecorations';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleStartPlay = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Video element is available with standard controls for the user
      });
    }
  }, [isPlaying]);

  return (
    <section id="video" className="py-24 px-6 sm:px-12 lg:px-20 bg-[#0d1630] relative overflow-hidden border-t border-b border-[#d4af6a]/30">
      {/* Background Decorative Mandala Rings */}
      <div className="absolute top-1/2 -left-36 -translate-y-1/2 w-96 h-96 rounded-full border border-[#d4af6a]/15 pointer-events-none" />
      <div className="absolute top-1/2 -right-36 -translate-y-1/2 w-96 h-96 rounded-full border border-[#d4af6a]/15 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <ToranArchCrest className="mb-2 opacity-80" width={180} />
          <div className="inline-flex items-center gap-2 mb-2">
            <Film className="w-4 h-4 text-[#d4af6a]" />
            <span className="font-cinzel text-xs sm:text-sm uppercase tracking-[0.25em] text-[#d4af6a] font-semibold">
              A Moment to Remember
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient tracking-[0.12em] uppercase">
            OUR WEDDING
          </h2>
          <GoldDivider className="mt-4" width="w-48 sm:w-64" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 text-left">
            <p className="font-garamond text-2xl sm:text-3xl text-[#fcebc2] italic mb-4 leading-relaxed font-normal">
              Celebrating a beautiful new beginning.
            </p>

            <div className="p-5 rounded-2xl border border-[#d4af6a]/40 bg-[#070b1a]/70 backdrop-blur-md mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
              <p className="font-telugu-serif text-base text-[#f2cf87] leading-relaxed font-medium">
                మా వివాహ మహోత్సవ ఆహ్వాన పత్రికను వీక్షించి, మీ అమూల్యమైన ఆశీస్సులను అందజేయగలరని మనస్ఫూర్తిగా కోరుచున్నాము.
              </p>
              <div className="mt-3 pt-3 border-t border-[#d4af6a]/20 flex items-center gap-2 text-xs text-[#d4af6a] font-cinzel tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#fcebc2]" />
                <span>SUNDAY · 30 AUGUST 2026</span>
              </div>
            </div>

            {/* Gold-outlined pill button */}
            <button
              id="watch-our-video-pill-btn"
              onClick={handleStartPlay}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border-2 border-[#d4af6a] text-[#fcebc2] font-cinzel text-xs uppercase tracking-[0.2em] font-semibold bg-[#070b1a]/80 hover:bg-[#d4af6a] hover:text-[#070b19] hover:shadow-[0_0_25px_rgba(212,175,106,0.6)] transition-all duration-300 group"
            >
              <Play className="w-4 h-4 text-[#d4af6a] group-hover:text-[#070b19] fill-current" />
              <span>Watch Video Invitation</span>
            </button>
          </div>

          {/* Right Column (7 cols): Bordered 16:9 Video Frame */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border-2 border-[#d4af6a]/80 p-2 sm:p-3.5 bg-gradient-to-b from-[#131f42] via-[#0d1630] to-[#070b1a] shadow-[0_12px_40px_rgba(0,0,0,0.7)]">
              {/* Corner Filigree */}
              <CornerFlourish position="top-left" size={48} />
              <CornerFlourish position="top-right" size={48} />
              <CornerFlourish position="bottom-left" size={48} />
              <CornerFlourish position="bottom-right" size={48} />

              {/* Inner 16:9 Aspect Ratio Container */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#070c1e] border border-[#d4af6a]/30 flex items-center justify-center">
                {!isPlaying ? (
                  /* Card Design with Telugu Invitation & Play Button Overlay */
                  <div
                    onClick={handleStartPlay}
                    className="absolute inset-0 cursor-pointer group flex flex-col items-center justify-center p-6 text-center select-none bg-radial from-[#18264d] via-[#0b1329] to-[#050814]"
                  >
                    {/* Subtle Background Pattern */}
                    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#d4af6a_1px,transparent_1px)] [background-size:16px_16px]" />

                    {/* Sacred Header in Telugu */}
                    <div className="relative z-10 mb-2">
                      <p className="font-telugu-serif text-sm sm:text-base text-[#fcebc2] tracking-wider font-semibold">
                        ॥ శ్రీ గణేశాయ నమః ॥
                      </p>
                      <p className="font-telugu-serif text-xs text-[#d4af6a] tracking-wide mt-0.5">
                        శ్రీ శోభకృత్ నామ సంవత్సరం · శుభ ముహూర్తం
                      </p>
                    </div>

                    {/* Title in Telugu & English */}
                    <h3 className="relative z-10 font-telugu-serif text-2xl sm:text-3xl text-gold-gradient font-bold my-1 drop-shadow">
                      వివాహ మహోత్సవ ఆహ్వానము
                    </h3>
                    <div className="relative z-10 w-full overflow-visible">
                      <p className="font-script text-3xl sm:text-4xl text-[#fcebc2] mb-3 px-4 overflow-visible">
                        Suresh &amp; Nandini
                      </p>
                    </div>

                    {/* Play Button Icon */}
                    <div className="relative z-10 my-1">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#d4af6a] bg-[#070b1a]/95 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#d4af6a] group-hover:shadow-[0_0_30px_rgba(212,175,106,0.8)] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,106,0.4)]">
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 text-[#fcebc2] group-hover:text-[#070b19] fill-current ml-1" />
                      </div>
                    </div>

                    {/* Telugu Date & Muhurtham Details below Play button */}
                    <div className="relative z-10 mt-3 px-4 py-1.5 rounded-full border border-[#d4af6a]/40 bg-[#070b1a]/80 backdrop-blur-sm">
                      <p className="font-telugu-serif text-xs sm:text-sm text-[#f2cf87] font-medium">
                        ఆదివారం, 30 ఆగస్టు 2026 · ఉదయం 10:00 గంటలకు
                      </p>
                    </div>

                    <p className="relative z-10 font-cinzel text-[10px] tracking-[0.2em] text-[#d4af6a]/80 uppercase mt-2 group-hover:text-[#fcebc2] transition-colors">
                      Click to Play Invitation
                    </p>
                  </div>
                ) : (
                  /* Actual HTML5 Video Element */
                  <div className="w-full h-full relative">
                    <video
                      ref={videoRef}
                      controls
                      autoPlay
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    >
                      <source src="/video2.mp4" type="video/mp4" />
                      <source src="/video-1.mpeg" type="video/mpeg" />
                      <source src="video2.mp4" type="video/mp4" />
                      <source src="video-1.mpeg" type="video/mpeg" />
                      <source src="/Video2.mp4" type="video/mp4" />
                      <source src="Video2.mp4" type="video/mp4" />
                      <source src="assets/video2.mp4" type="video/mp4" />
                      <source src="/assets/video2.mp4" type="video/mp4" />
                      <source src="assets/Video2.mp4" type="video/mp4" />
                      <source src="/assets/Video2.mp4" type="video/mp4" />
                      Your browser does not support HTML5 video.
                    </video>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
