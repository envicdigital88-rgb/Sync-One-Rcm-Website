import React from 'react';
import { cn } from '../utils/cn';

type LogoProps = {
  variant?: 'dark' | 'light';
  className?: string;
  showTagline?: boolean;
};

export function Logo({ variant = 'dark', className }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center', className)}>
      <img
        src="/logo.png"
        alt="SyncOne RCM - One synchronized partner for revenue cycle excellence"
        className={cn(
          'h-10 w-auto object-contain transition-all duration-300 sm:h-12',
          variant === 'light' && 'brightness-0 invert opacity-95 drop-shadow-sm'
        )}
      />
    </span>
  );
}