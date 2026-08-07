import React from 'react';
import { cn } from '../../utils/cn';

type ProgressiveBlurProps = {
  direction?: 'left' | 'right';
  blurIntensity?: number;
  blurLayers?: number;
  className?: string;
};

export function ProgressiveBlur({
  direction = 'left',
  blurIntensity = 1,
  blurLayers = 6,
  className
}: ProgressiveBlurProps) {
  const layers = Math.max(blurLayers, 2);

  return (
    <div className={cn('relative', className)} aria-hidden="true">
      {Array.from({ length: layers }).map((_, index) => {
        const start = index / layers * 100;
        const mid = (index + 1) / layers * 100;
        const end = (index + 2) / layers * 100;
        const stops = [
        `rgba(0,0,0,0) ${start}%`,
        `rgba(0,0,0,1) ${mid}%`,
        `rgba(0,0,0,1) ${end}%`,
        `rgba(0,0,0,0) ${Math.min(end + 100 / layers, 100)}%`].
        join(', ');
        const gradient = `linear-gradient(to ${
        direction === 'left' ? 'left' : 'right'}, ${
        stops})`;

        return (
          <div
            key={index}
            className="pointer-events-none absolute inset-0"
            style={{
              maskImage: gradient,
              WebkitMaskImage: gradient,
              backdropFilter: `blur(${index * blurIntensity * 0.6}px)`
            }} />);


      })}
    </div>);

}