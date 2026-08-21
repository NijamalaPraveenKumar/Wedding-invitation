import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VideoSection } from './components/VideoSection';
import { WeddingDetailsSection } from './components/WeddingDetailsSection';
import { FamiliesSection } from './components/FamiliesSection';
import { CountdownVenueSection } from './components/CountdownVenueSection';
import { FooterSection } from './components/FooterSection';
import { FloatingGoldDust } from './components/OrnamentalDecorations';
import { initBackgroundMusic } from './utils/audioPlayer';

export default function App() {
  useEffect(() => {
    initBackgroundMusic();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a1128] text-[#f2cf87] font-garamond relative selection:bg-[#d4af6a]/30 selection:text-[#fcebc2] flex flex-col">
      {/* Outer Royal Gold Perimeter Accents (Responsive) */}
      <div className="fixed inset-0 pointer-events-none z-40 border-[4px] sm:border-[6px] lg:border-[8px] border-[#d4af6a]/70" />
      
      {/* Corner Floral Structural Guides */}
      <div className="fixed top-3 left-3 w-16 h-16 sm:w-24 sm:h-24 border-l border-t border-[#d4af6a]/40 pointer-events-none z-40" />
      <div className="fixed top-3 right-3 w-16 h-16 sm:w-24 sm:h-24 border-r border-t border-[#d4af6a]/40 pointer-events-none z-40" />
      <div className="fixed bottom-3 left-3 w-16 h-16 sm:w-24 sm:h-24 border-l border-b border-[#d4af6a]/40 pointer-events-none z-40" />
      <div className="fixed bottom-3 right-3 w-16 h-16 sm:w-24 sm:h-24 border-r border-b border-[#d4af6a]/40 pointer-events-none z-40" />

      {/* Subtle Floating Gold Particle Background */}
      <FloatingGoldDust />

      {/* 1. Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Sections in Exact Required Order */}
      <main className="relative z-10 flex-1">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Video Section */}
        <VideoSection />

        {/* 4. Wedding Details Section */}
        <WeddingDetailsSection />

        {/* 5. Families Section */}
        <FamiliesSection />

        {/* 6. Countdown + Venue Section */}
        <CountdownVenueSection />
      </main>

      {/* 7. Footer Section */}
      <FooterSection />
    </div>
  );
}
