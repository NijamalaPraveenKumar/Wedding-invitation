import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Check, Copy, CalendarPlus } from 'lucide-react';
import { GoldDivider, CornerFlourish, ToranArchCrest } from './OrnamentalDecorations';

export const WeddingDetailsSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const venueName = 'రాజవారిచింతలపాలెం';
  const venueEnglish = 'Rajavarichinthalapalem';
  const venueLocation = 'రాజవారిచింతలపాలెం, నెల్లూరు జిల్లా, ఆంధ్రప్రదేశ్';
  const venueLocationEn = 'Rajavarichinthalapalem, Nellore District, Andhra Pradesh';

  const copyAddress = () => {
    navigator.clipboard.writeText(`${venueEnglish}, ${venueLocationEn}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const downloadIcsCalendar = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Suresh and Nandini Wedding//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'UID:wedding-suresh-nandini-20260830@wedding.com',
      'DTSTART:20260830T043000Z', // 10:00 AM IST = 04:30 UTC
      'DTEND:20260830T080000Z',
      'SUMMARY:Suresh & Nandini Wedding Muhurtham',
      'DESCRIPTION:Join us for the auspicious wedding ceremony of Suresh & Nandini at 10:00 AM at Rajavarichinthalapalem, Nellore District.',
      `LOCATION:${venueEnglish}, ${venueLocationEn}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Suresh_Nandini_Wedding_Invite.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="wedding" className="py-24 px-6 sm:px-12 lg:px-20 bg-[#070b19] relative">
      <div className="max-w-7xl mx-auto text-center">
        <ToranArchCrest className="mb-2 opacity-80" width={180} />
        
        {/* Centered Heading */}
        <p className="font-telugu-serif text-sm text-[#f2cf87] tracking-widest font-semibold uppercase mb-2">
          ॥ శుభ ముహూర్త పత్రిక ॥
        </p>

        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient tracking-[0.15em] uppercase mb-4">
          WEDDING DETAILS
        </h2>

        <GoldDivider className="mb-14" width="w-48 sm:w-64" />

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Date Card */}
          <div
            id="card-wedding-date"
            className="relative rounded-2xl border border-[#d4af6a]/50 bg-gradient-to-b from-[#101c3d] to-[#070b1a] p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:border-[#f2cf87] hover:shadow-[0_0_25px_rgba(212,175,106,0.3)] transition-all duration-300 group flex flex-col justify-between"
          >
            <CornerFlourish position="top-left" size={44} />
            <CornerFlourish position="bottom-right" size={44} />

            <div>
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-[#d4af6a]/70 bg-[#070b1a] flex items-center justify-center group-hover:scale-110 group-hover:border-[#f2cf87] group-hover:bg-[#d4af6a]/20 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,106,0.2)]">
                <Calendar className="w-8 h-8 text-[#d4af6a] group-hover:text-[#fcebc2]" />
              </div>

              <span className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#d4af6a] font-semibold">
                Auspicious Date
              </span>

              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#fcebc2] mt-2 mb-1">
                30 August 2026
              </h3>

              <p className="font-garamond text-xl text-[#f2cf87] italic">
                Sunday
              </p>

              <div className="mt-4 pt-4 border-t border-[#d4af6a]/20">
                <p className="font-telugu-serif text-base text-[#f2cf87] font-medium">
                  ఆగస్టు 30, 2026
                </p>
                <p className="font-telugu-serif text-sm text-[#d4af6a]/80 mt-0.5">
                  ఆదివారం · భాద్రపద బహుళ తదియ
                </p>
              </div>
            </div>

            <button
              id="add-to-calendar-btn"
              onClick={downloadIcsCalendar}
              className="mt-6 w-full py-2.5 px-4 rounded-xl border border-[#d4af6a]/60 text-[#fcebc2] font-cinzel text-xs uppercase tracking-wider hover:bg-[#d4af6a] hover:text-[#070b19] transition-all flex items-center justify-center gap-2 font-semibold shadow-[0_0_10px_rgba(212,175,106,0.15)]"
            >
              <CalendarPlus className="w-4 h-4" />
              Add to Calendar
            </button>
          </div>

          {/* Card 2: Muhurtham Card */}
          <div
            id="card-wedding-muhurtham"
            className="relative rounded-2xl border-2 border-[#d4af6a] bg-gradient-to-b from-[#18264d] via-[#0d1630] to-[#070b1a] p-8 text-center shadow-[0_12px_35px_rgba(212,175,106,0.25)] hover:shadow-[0_0_35px_rgba(212,175,106,0.45)] transition-all duration-300 group flex flex-col justify-between transform md:-translate-y-2"
          >
            <CornerFlourish position="top-left" size={44} />
            <CornerFlourish position="top-right" size={44} />
            <CornerFlourish position="bottom-left" size={44} />
            <CornerFlourish position="bottom-right" size={44} />

            <div>
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-[#f2cf87] bg-[#070b1a] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#d4af6a]/20 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,106,0.35)]">
                <Clock className="w-8 h-8 text-[#fcebc2]" />
              </div>

              <span className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#f2cf87] font-semibold">
                Sumuhurtham
              </span>

              <h3 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-gold-gradient mt-2 mb-1">
                10:00 AM
              </h3>

              <p className="font-garamond text-xl text-[#fcebc2] italic">
                Morning Auspicious Time
              </p>

              <div className="mt-4 pt-4 border-t border-[#d4af6a]/30">
                <p className="font-telugu-serif text-lg text-gold-gradient font-bold">
                  శుభ ముహూర్తం
                </p>
                <p className="font-telugu-serif text-sm text-[#f2cf87] mt-1 font-medium">
                  ఉదయం 10:00 గంటలకు
                </p>
                <p className="font-telugu-serif text-xs text-[#d4af6a]/80 mt-0.5">
                  శుభ తులా లగ్న పుష్కరాంశమునందు
                </p>
              </div>
            </div>

            <div className="mt-6 py-2 px-3 rounded-xl bg-[#d4af6a]/15 border border-[#d4af6a]/40 text-center">
              <span className="font-telugu-serif text-xs text-[#fcebc2] font-semibold">
                ॥ కల్యాణ సమయం ॥
              </span>
            </div>
          </div>

          {/* Card 3: Venue Card */}
          <div
            id="card-wedding-venue"
            className="relative rounded-2xl border border-[#d4af6a]/50 bg-gradient-to-b from-[#101c3d] to-[#070b1a] p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:border-[#f2cf87] hover:shadow-[0_0_25px_rgba(212,175,106,0.3)] transition-all duration-300 group flex flex-col justify-between"
          >
            <CornerFlourish position="top-right" size={44} />
            <CornerFlourish position="bottom-left" size={44} />

            <div>
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-[#d4af6a]/70 bg-[#070b1a] flex items-center justify-center group-hover:scale-110 group-hover:border-[#f2cf87] group-hover:bg-[#d4af6a]/20 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,106,0.2)]">
                <MapPin className="w-8 h-8 text-[#d4af6a] group-hover:text-[#fcebc2]" />
              </div>

              <span className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#d4af6a] font-semibold">
                Wedding Venue
              </span>

              <h3 className="font-telugu-serif text-xl sm:text-2xl font-bold text-[#fcebc2] mt-2 mb-1">
                {venueName}
              </h3>

              <p className="font-cinzel text-xs tracking-wider text-[#d4af6a]">
                {venueEnglish}
              </p>

              <div className="mt-4 pt-4 border-t border-[#d4af6a]/20">
                <p className="font-telugu-serif text-sm text-[#f2cf87] leading-snug">
                  {venueLocation}
                </p>
                <p className="font-garamond text-sm text-[#d4af6a]/80 mt-1 italic">
                  {venueLocationEn}
                </p>
              </div>
            </div>

            <button
              id="copy-venue-address-btn"
              onClick={copyAddress}
              className="mt-6 w-full py-2.5 px-4 rounded-xl border border-[#d4af6a]/60 text-[#fcebc2] font-cinzel text-xs uppercase tracking-wider hover:bg-[#d4af6a] hover:text-[#070b19] transition-all flex items-center justify-center gap-2 font-semibold shadow-[0_0_10px_rgba(212,175,106,0.15)]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  Address Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy Address
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
