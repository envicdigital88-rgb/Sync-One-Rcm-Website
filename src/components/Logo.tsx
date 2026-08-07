import React from 'react';
import { cn } from '../utils/cn';

type LogoProps = {
  variant?: 'dark' | 'light';
  className?: string;
  showTagline?: boolean;
};

export function Logo({ variant = 'dark', className, showTagline = true }: LogoProps) {
  const maroonColor = variant === 'dark' ? '#5B0626' : '#FFFFFF';
  const goldColor = '#C88A24';
  const textSubColor = variant === 'dark' ? '#3B1722' : 'rgba(255,255,255,0.85)';

  return (
    <span className={cn('inline-flex flex-col', className)}>
      <div className="flex items-center gap-3.5">
        <svg
          viewBox="0 0 72 60"
          aria-hidden="true"
          className="h-10 w-auto shrink-0"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          
          {/* Top Arc / S-loop — Honey Gold */}
          <path
            d="M32 14 C20 14 10 22 10 32 C10 37 12 41 15 44"
            stroke={goldColor}
            strokeWidth="5"
            strokeLinecap="round" />
          
          {/* Bottom Arc / S-loop — Deep Maroon */}
          <path
            d="M24 46 C36 46 46 38 46 28 C46 23 44 19 41 16"
            stroke={maroonColor}
            strokeWidth="5"
            strokeLinecap="round" />

          {/* S-Connectors / Inner Curve Details */}
          <path
            d="M15 44 C18 47 23 49 28 49 C39 49 48 40 48 29"
            stroke={maroonColor}
            strokeWidth="5"
            strokeLinecap="round" />
          <path
            d="M41 16 C38 13 33 11 28 11 C17 11 8 20 8 31"
            stroke={goldColor}
            strokeWidth="5"
            strokeLinecap="round" />

          {/* 3 Horizontal Motion Lines — Honey Gold */}
          <path
            d="M48 22 H64 M50 30 H64 M48 38 H64"
            stroke={goldColor}
            strokeWidth="3"
            strokeLinecap="round" />
        </svg>

        <span className="flex flex-col leading-none">
          <span className="font-display text-[1.55rem] font-extrabold tracking-tight">
            <span style={{ color: maroonColor }}>Sync</span>
            <span style={{ color: goldColor }}>One</span>
          </span>
          
          {/* RCM with flanking lines */}
          <span className="mt-1 flex items-center justify-between gap-1.5">
            <span className="h-[1.5px] flex-1" style={{ backgroundColor: goldColor }} />
            <span
              className="text-[0.68rem] font-black uppercase tracking-[0.38em] px-0.5"
              style={{ color: maroonColor }}>
              RCM
            </span>
            <span className="h-[1.5px] flex-1" style={{ backgroundColor: goldColor }} />
          </span>
        </span>
      </div>

      {showTagline && (
        <span
          className="mt-1.5 text-[0.62rem] font-medium leading-snug tracking-normal opacity-90 max-w-[15rem]"
          style={{ color: textSubColor }}>
          One synchronized partner for revenue cycle excellence
        </span>
      )}
    </span>
  );
}