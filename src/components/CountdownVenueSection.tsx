import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Sparkles, Navigation, ExternalLink } from 'lucide-react';
import { GoldDivider, CornerFlourish, ToranArchCrest } from './OrnamentalDecorations';
import { TimeLeft } from '../types';

export const CountdownVenueSection: React.FC = () => {
  // Target: 2026-08-30T10:00:00+05:30 (Indian Standard Time)
  const targetDate = new Date('2026-08-30T10:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPast: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isPast: false,
      });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const countdownUnits = [
    { label: 'Days', telugu: 'రోజులు', value: timeLeft.days },
    { label: 'Hours', telugu: 'గంటలు', value: timeLeft.hours },
    { label: 'Minutes', telugu: 'నిమిషాలు', value: timeLeft.minutes },
    { label: 'Seconds', telugu: 'సెకన్లు', value: timeLeft.seconds },
  ];

  return (
    <section id="venue" className="py-24 px-6 sm:px-12 lg:px-20 bg-[#070b19] relative">
      <div className="max-w-7xl mx-auto">
        <ToranArchCrest className="mb-2 opacity-80" width={180} />

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-cinzel text-xs uppercase tracking-[0.3em] text-[#d4af6a] mb-2 font-semibold">
            Counting Down to the Sacred Moment
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient tracking-wide uppercase">
            COUNTDOWN &amp; VENUE
          </h2>
          <GoldDivider className="mt-4" width="w-48 sm:w-64" />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (6 cols): Live JavaScript Countdown Timer */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af6a]/50 bg-[#0d1630] text-[#fcebc2] text-xs font-cinzel tracking-widest uppercase mb-4 shadow-[0_0_10px_rgba(212,175,106,0.2)]">
              <Clock className="w-3.5 h-3.5 text-[#d4af6a]" />
              <span className="font-semibold">Auspicious Muhurtham Clock</span>
            </div>

            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#fcebc2] mb-2">
              The Celebration Begins In
            </h3>

            <p className="font-telugu-serif text-base text-[#f2cf87] font-medium mb-8">
              శుభ ముహూర్తమునకు ఇంకా మిగిలి ఉన్న సమయం
            </p>

            {/* Countdown Boxes Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-lg">
              {countdownUnits.map((unit) => (
                <div
                  key={unit.label}
                  className="relative p-5 rounded-2xl border-2 border-[#d4af6a]/80 bg-gradient-to-b from-[#131f42] via-[#0d1630] to-[#070b1a] shadow-[0_8px_25px_rgba(0,0,0,0.6)] flex flex-col items-center justify-center group hover:border-[#f2cf87] hover:shadow-[0_0_25px_rgba(212,175,106,0.35)] transition-all duration-300"
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-black text-gold-gradient tracking-tight drop-shadow-[0_2px_8px_rgba(212,175,106,0.4)]">
                    {String(unit.value).padStart(2, '0')}
                  </div>
                  <div className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#fcebc2] mt-2">
                    {unit.label}
                  </div>
                  <div className="font-telugu-serif text-[11px] text-[#d4af6a]/90 mt-0.5 font-medium">
                    {unit.telugu}
                  </div>
                </div>
              ))}
            </div>

            {/* Date Tag */}
            <div className="mt-8 flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#d4af6a]/40 bg-[#0d1630]/80 shadow-[0_0_15px_rgba(212,175,106,0.15)]">
              <Sparkles className="w-4 h-4 text-[#fcebc2]" />
              <span className="font-cinzel text-xs uppercase tracking-widest text-[#fcebc2] font-semibold">
                30 August 2026 · 10:00 AM IST
              </span>
            </div>
          </div>

          {/* Right Column (6 cols): Venue Photo & Telugu Details */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl border-2 border-[#d4af6a]/80 p-3 sm:p-4 bg-gradient-to-b from-[#131f42] via-[#0d1630] to-[#070b1a] shadow-[0_12px_40px_rgba(0,0,0,0.7)]">
              <CornerFlourish position="top-left" size={48} />
              <CornerFlourish position="top-right" size={48} />
              <CornerFlourish position="bottom-left" size={48} />
              <CornerFlourish position="bottom-right" size={48} />

              {/* Interactive Google Maps Map Container with Luxury Wedding Styling */}
              <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden border-2 border-[#d4af6a] bg-[#070b19] shadow-[0_0_30px_rgba(212,175,106,0.35)] group">
                {/* Embedded Interactive Google Maps styled to dark midnight navy with gold road accents */}
                <iframe
                  title="Venue Location - Rajachinthalapalem"
                  src="https://maps.google.com/maps?q=Rajavarichinthalapalem,+Nellore+District,+Andhra+Pradesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 transition-opacity duration-500"
                  style={{
                    filter: 'invert(92%) hue-rotate(180deg) brightness(82%) contrast(120%) saturate(125%)',
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Subtle Midnight Navy Edge Vignette (Non-blocking) */}
                <div className="absolute inset-0 pointer-events-none rounded-xl shadow-[inset_0_0_35px_rgba(7,11,25,0.85)] border border-[#d4af6a]/40" />

                {/* Corner Golden Antique Flourishes (Non-blocking) */}
                <CornerFlourish position="top-left" size={36} />
                <CornerFlourish position="top-right" size={36} />
                <CornerFlourish position="bottom-left" size={36} />
                <CornerFlourish position="bottom-right" size={36} />

                {/* Top Badge: Luxury Gold Location Pin & Title */}
                <div className="absolute top-3 left-3 sm:left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#070b19]/90 backdrop-blur-md border border-[#d4af6a]/80 text-[10px] sm:text-[11px] font-cinzel text-[#fcebc2] font-bold tracking-[0.2em] pointer-events-none shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af6a] opacity-80" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fcebc2]" />
                  </span>
                  <MapPin className="w-3.5 h-3.5 text-[#d4af6a] fill-[#d4af6a]/40" />
                  <span>LUXURY WEDDING VENUE</span>
                </div>

                {/* Prominent Center Venue Label & Gold Pin Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center z-10">
                  {/* Luxury Gold Location Pin with Pulsing Aura */}
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-10 h-10 rounded-full bg-[#d4af6a]/30 animate-ping" />
                    <div className="absolute w-6 h-6 rounded-full bg-[#d4af6a]/40 blur-[2px]" />
                    <div className="relative w-8 h-8 rounded-full bg-[#070b19] border-2 border-[#d4af6a] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,106,0.9)]">
                      <MapPin className="w-5 h-5 text-[#d4af6a] fill-[#d4af6a] drop-shadow-[0_0_6px_rgba(212,175,106,0.8)]" />
                    </div>
                  </div>

                  {/* Antique Gold Label Box for RAJACHINTHALAPALEM */}
                  <div className="mt-2 px-4 py-2 rounded-lg bg-[#070b19]/95 backdrop-blur-md border border-[#d4af6a] shadow-[0_6px_20px_rgba(0,0,0,0.9),0_0_15px_rgba(212,175,106,0.35)] text-center">
                    <p className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.22em] text-[#fcebc2] text-gold-gradient leading-none">
                      RAJACHINTHALAPALEM
                    </p>
                    <p className="font-telugu-serif text-[11px] text-[#d4af6a] mt-1 font-medium leading-none">
                      రాజవారిచింతలపాలెం
                    </p>
                  </div>
                </div>

                {/* Direct Tap/Click Link to Google Maps overlay button on bottom-right of map */}
                <a
                  id="map-open-google-maps-btn"
                  href="https://maps.app.goo.gl/gx9XQyV5Rj4SSeQe7"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open in Google Maps"
                  className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#070b19]/95 backdrop-blur-md border border-[#d4af6a]/80 hover:border-[#fcebc2] hover:bg-[#d4af6a] hover:text-[#070b19] text-[10px] font-cinzel text-[#fcebc2] font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.85)] z-20"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Venue Name and Address in Telugu below map */}
              <div className="mt-6 text-center px-4 pb-2">
                <h4 className="font-telugu-serif text-2xl sm:text-3xl font-bold text-gold-gradient mb-2">
                  రాజవారిచింతలపాలెం
                </h4>
                <p className="font-cinzel text-sm uppercase tracking-widest text-[#d4af6a] font-semibold mb-3">
                  Rajavarichinthalapalem
                </p>
                <div className="h-[1px] w-24 bg-[#d4af6a]/40 mx-auto my-3" />
                <p className="font-telugu-serif text-base text-[#fcebc2] leading-relaxed font-medium">
                  రాజవారిచింతలపాలెం, నెల్లూరు జిల్లా, ఆంధ్రప్రదేశ్
                </p>
                <p className="font-garamond text-base text-[#d4af6a]/90 mt-1 italic">
                  Rajavarichinthalapalem, Nellore District, Andhra Pradesh
                </p>

                {/* Prominent Gold VIEW LOCATION Button */}
                <div className="mt-5">
                  <a
                    id="venue-view-location-btn"
                    href="https://maps.app.goo.gl/gx9XQyV5Rj4SSeQe7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-3 rounded-full bg-gold-gradient text-[#070b19] font-cinzel text-xs font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(212,175,106,0.4)] hover:shadow-[0_0_30px_rgba(212,175,106,0.8)] hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                  >
                    <Navigation className="w-4 h-4 text-[#070b19] fill-current" />
                    <span>VIEW LOCATION</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#070b19]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
