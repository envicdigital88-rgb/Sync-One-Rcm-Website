import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import { cn } from '../../utils/cn';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 96,
  speed = 40,
  speedOnHover,
  className
}: InfiniteSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [width, setWidth] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) setWidth(trackRef.current.scrollWidth / 2);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [children]);

  useAnimationFrame((_, delta) => {
    if (!width) return;
    const current = hovered && speedOnHover !== undefined ? speedOnHover : speed;
    let next = x.get() - current * delta / 1000;
    if (next <= -width) next += width;
    x.set(next);
  });

  const items = React.Children.toArray(children);

  return (
    <div
      className={cn('overflow-hidden', className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      
      <motion.div ref={trackRef} className="flex w-max items-center" style={{ x, gap }}>
        {[...items, ...items].map((child, index) =>
        <div key={index} className="flex shrink-0 items-center">
            {child}
          </div>
        )}
      </motion.div>
    </div>);

}