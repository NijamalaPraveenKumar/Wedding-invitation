import React, { useState, useEffect } from 'react';
import { Music, Volume2, VolumeX, Menu, X } from 'lucide-react';
import { weddingAudio } from '../utils/audioPlayer';

export const Navbar: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = weddingAudio.subscribe((playing) => {
      setIsPlaying(playing);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const toggleMusic = () => {
    weddingAudio.toggle();
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Video', href: '#video' },
    { name: 'Wedding', href: '#wedding' },
    { name: 'Families', href: '#families' },
    { name: 'Venue', href: '#venue' },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#0a1128]/90 backdrop-blur-md border-b border-[#d4af6a]/25 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Circular Logo Initials */}
        <a
          id="nav-logo-link"
          href="#home"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-12 h-12 rounded-full border border-[#d4af6a] p-[2px] bg-gradient-to-br from-[#0d1630] to-[#0a1128] shadow-[0_0_12px_rgba(212,175,106,0.3)] group-hover:shadow-[0_0_18px_rgba(212,175,106,0.6)] transition-all">
            <div className="w-full h-full rounded-full border border-[#d4af6a]/40 flex items-center justify-center bg-[#070b1a]">
              <span className="font-cinzel text-sm font-bold text-gold-gradient tracking-wider">
                S&N
              </span>
            </div>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-script text-xl text-[#f2cf87] leading-none group-hover:text-white transition-colors">
              Suresh & Nandini
            </span>
            <span className="font-cinzel text-[10px] tracking-[0.25em] text-[#d4af6a]/80 mt-1 uppercase">
              30 · 08 · 2026
            </span>
          </div>
        </a>

        {/* Center: Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              id={`nav-link-${link.name.toLowerCase()}`}
              href={link.href}
              className="font-cinzel text-xs uppercase tracking-[0.2em] text-[#f2cf87]/85 hover:text-[#f8e5b9] hover:drop-shadow-[0_0_8px_rgba(212,175,106,0.8)] transition-all duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d4af6a] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Music Toggle & Mobile Menu */}
        <div className="flex items-center gap-3">
          <button
            id="music-toggle-btn"
            onClick={toggleMusic}
            aria-label={isPlaying ? 'Pause wedding music' : 'Play wedding music'}
            title={isPlaying ? 'Mute/Pause Music' : 'Play Wedding Music'}
            className="flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full border border-[#d4af6a]/60 bg-[#0d1630]/80 hover:bg-[#131f42] text-[#f2cf87] hover:border-[#f2cf87] hover:shadow-[0_0_15px_rgba(212,175,106,0.4)] transition-all duration-300 focus:outline-none cursor-pointer"
          >
            {isPlaying ? (
              <>
                <Volume2 className="w-4 h-4 text-[#d4af6a] animate-pulse" />
                <div className="flex items-end gap-[2px] h-3.5 px-0.5">
                  <span className="w-1 bg-[#d4af6a] animate-[bounce_0.6s_infinite] h-full" />
                  <span className="w-1 bg-[#f2cf87] animate-[bounce_0.8s_infinite] h-2/3" />
                  <span className="w-1 bg-[#d4af6a] animate-[bounce_0.5s_infinite] h-4/5" />
                </div>
                <span className="hidden sm:inline font-cinzel text-[11px] uppercase tracking-wider text-[#d4af6a]">
                  Playing
                </span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-[#d4af6a]/80" />
                <span className="hidden sm:inline font-cinzel text-[11px] uppercase tracking-wider text-[#d4af6a]">
                  Music
                </span>
                <Music className="w-3.5 h-3.5 text-[#d4af6a]/60 sm:hidden" />
              </>
            )}
          </button>

          {/* Mobile hamburger button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-lg text-[#f2cf87] border border-[#d4af6a]/40 hover:bg-[#0d1630] transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070b1a]/95 border-b border-[#d4af6a]/30 px-6 py-5 flex flex-col space-y-4 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              id={`mobile-nav-link-${link.name.toLowerCase()}`}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-cinzel text-sm uppercase tracking-[0.2em] text-[#f2cf87] hover:text-[#d4af6a] py-2 border-b border-[#d4af6a]/15 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

