import React from 'react';

// Decorative Gold Divider with Center Mandala Flourish
export const GoldDivider: React.FC<{ className?: string; width?: string }> = ({
  className = '',
  width = 'w-36 sm:w-56',
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className={`h-[1px] bg-gradient-to-r from-transparent via-[#d4af6a]/60 to-[#d4af6a] ${width}`} />
      <div className="text-[#d4af6a] flex items-center justify-center">
        <svg
          className="w-5 h-5 drop-shadow-[0_0_8px_rgba(212,175,106,0.5)]"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2L14.2 9.2L21.4 12L14.2 14.8L12 22L9.8 14.8L2.6 12L9.8 9.2L12 2Z"
            fill="url(#goldGradDivider)"
            stroke="#f2cf87"
            strokeWidth="0.8"
          />
          <circle cx="12" cy="12" r="1.5" fill="#070b19" />
          <defs>
            <linearGradient id="goldGradDivider" x1="2" y1="2" x2="22" y2="22">
              <stop stopColor="#fcebc2" />
              <stop offset="0.5" stopColor="#d4af6a" />
              <stop offset="1" stopColor="#9c7835" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={`h-[1px] bg-gradient-to-l from-transparent via-[#d4af6a]/60 to-[#d4af6a] ${width}`} />
    </div>
  );
};

// Intricate Traditional Corner Mandala Ornament (4 Corners)
export const CornerFlourish: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  size?: number;
}> = ({ position, className = '', size = 52 }) => {
  const getTransform = () => {
    switch (position) {
      case 'top-left':
        return 'top-2 left-2';
      case 'top-right':
        return 'top-2 right-2 scale-x-[-1]';
      case 'bottom-left':
        return 'bottom-2 left-2 scale-y-[-1]';
      case 'bottom-right':
        return 'bottom-2 right-2 scale-[-1]';
    }
  };

  return (
    <div className={`absolute ${getTransform()} pointer-events-none z-20 opacity-80 ${className}`}>
      <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer Corner Lines */}
        <path d="M2 2H36C36 2 18 6 18 24V58" stroke="#d4af6a" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M2 2V36C2 36 6 18 24 18H58" stroke="#d4af6a" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M6 6H24C24 6 12 10 12 22V40" stroke="#f2cf87" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
        <path d="M6 6V24C6 24 10 12 22 12H40" stroke="#f2cf87" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
        {/* Floral Petals & Dots */}
        <circle cx="2" cy="2" r="2.5" fill="#fcebc2" />
        <circle cx="8" cy="8" r="1.5" fill="#d4af6a" />
        <circle cx="18" cy="18" r="2" fill="#d4af6a" />
        <path d="M12 12 Q 18 8, 24 12 Q 20 18, 12 12 Z" fill="#d4af6a" opacity="0.6" />
        <path d="M12 12 Q 8 18, 12 24 Q 18 20, 12 12 Z" fill="#d4af6a" opacity="0.6" />
      </svg>
    </div>
  );
};

// Royal Traditional Mandala Medallion
export const MandalaMedallion: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 72,
}) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_12px_rgba(212,175,106,0.4)]"
      >
        {/* Outer Ring with Dots */}
        <circle cx="50" cy="50" r="46" stroke="#d4af6a" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.7" />
        <circle cx="50" cy="50" r="42" stroke="#f2cf87" strokeWidth="1" opacity="0.9" />
        <circle cx="50" cy="50" r="38" stroke="#d4af6a" strokeWidth="0.6" opacity="0.5" />
        
        {/* 8 Floral Petals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <g key={i} transform={`rotate(${angle} 50 50)`}>
            <path
              d="M50 8 C44 22, 44 32, 50 40 C56 32, 56 22, 50 8 Z"
              fill="url(#mandalaPetalGrad)"
              stroke="#fcebc2"
              strokeWidth="0.5"
            />
            <circle cx="50" cy="12" r="1.5" fill="#fcebc2" />
          </g>
        ))}

        {/* Inner Diamond Star */}
        <path
          d="M50 25 L55 45 L75 50 L55 55 L50 75 L45 55 L25 50 L45 45 Z"
          fill="#d4af6a"
          opacity="0.85"
        />
        <circle cx="50" cy="50" r="8" fill="#0a1128" stroke="#f2cf87" strokeWidth="1.2" />
        <circle cx="50" cy="50" r="3.5" fill="#fcebc2" />

        <defs>
          <linearGradient id="mandalaPetalGrad" x1="44" y1="8" x2="56" y2="40">
            <stop stopColor="#fcebc2" stopOpacity="0.8" />
            <stop offset="0.6" stopColor="#d4af6a" stopOpacity="0.6" />
            <stop offset="1" stopColor="#9c7835" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// Traditional Indian Arch / Toranam Crest Ornament
export const ToranArchCrest: React.FC<{ className?: string; width?: number }> = ({
  className = '',
  width = 220,
}) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <svg
        width={width}
        height={width * 0.22}
        viewBox="0 0 220 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Royal Arch Curve */}
        <path
          d="M10 44 C50 44, 75 14, 110 14 C145 14, 170 44, 210 44"
          stroke="#d4af6a"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M20 46 C55 46, 78 20, 110 20 C142 20, 165 46, 200 46"
          stroke="#f2cf87"
          strokeWidth="0.8"
          opacity="0.6"
        />
        {/* Center Lotus Finial */}
        <g transform="translate(110, 14)">
          <path d="M0 -10 C-4 -4, -6 0, 0 6 C6 0, 4 -4, 0 -10 Z" fill="#fcebc2" />
          <path d="M0 0 C-8 -4, -10 2, 0 6 C10 2, 8 -4, 0 0 Z" fill="#d4af6a" opacity="0.8" />
          <circle cx="0" cy="-11" r="1.5" fill="#fcebc2" />
        </g>
        {/* Hanging Floral Drops */}
        {[-60, -30, 0, 30, 60].map((offset, i) => (
          <g key={i} transform={`translate(${110 + offset}, 34)`}>
            <circle cx="0" cy="0" r="1.5" fill="#d4af6a" />
            <path d="M0 0 V6" stroke="#d4af6a" strokeWidth="0.8" />
            <circle cx="0" cy="7" r="1.2" fill="#f2cf87" />
          </g>
        ))}
      </svg>
    </div>
  );
};

// Traditional Ganesha / Kalash Symbol with Auspicious Telugu Blessing
export const SacredMotif: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="w-12 h-12 relative flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-[#d4af6a]/30 animate-spin" style={{ animationDuration: '28s' }} />
        <svg viewBox="0 0 36 36" className="w-7 h-7 text-[#d4af6a]" fill="currentColor">
          <path d="M18 4C18.8 4 19.5 4.7 19.5 5.5C19.5 6.3 18.8 7 18 7C17.2 7 16.5 6.3 16.5 5.5C16.5 4.7 17.2 4 18 4ZM18 8C21.3 8 24 10.7 24 14C24 17.3 21.3 20 18 20C14.7 20 12 17.3 12 14C12 10.7 14.7 8 18 8ZM18 10C15.8 10 14 11.8 14 14C14 16.2 15.8 18 18 18C20.2 18 22 16.2 22 14C22 11.8 20.2 10 18 10ZM13 22C11.3 22 10 23.3 10 25C10 27.8 13.6 30 18 30C22.4 30 26 27.8 26 25C26 23.3 24.7 22 23 22H13Z" />
        </svg>
      </div>
      <span className="font-telugu-serif text-xs text-[#f2cf87] tracking-wider mt-1 opacity-95 font-medium">
        ॥ శ్రీరస్తు శుభమస్తు అవిఘ్నమస్తు ॥
      </span>
    </div>
  );
};

// Subtle Golden Dust & Sparkles Background Generator
export const FloatingGoldDust: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-[8%] left-[12%] w-1.5 h-1.5 rounded-full bg-[#fcebc2]/40 blur-[0.5px] animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute top-[28%] right-[18%] w-2 h-2 rounded-full bg-[#d4af6a]/30 blur-[1px] animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute top-[52%] left-[6%] w-1 h-1 rounded-full bg-[#fcebc2]/50 animate-pulse" style={{ animationDuration: '3.5s' }} />
      <div className="absolute top-[76%] right-[10%] w-1.5 h-1.5 rounded-full bg-[#d4af6a]/40 animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute top-[88%] left-[40%] w-2 h-2 rounded-full bg-[#f2cf87]/30 blur-[1px] animate-pulse" style={{ animationDuration: '7s' }} />
      <div className="absolute top-[42%] right-[42%] w-1 h-1 rounded-full bg-[#fcebc2]/30 animate-pulse" style={{ animationDuration: '4.5s' }} />
    </div>
  );
};
