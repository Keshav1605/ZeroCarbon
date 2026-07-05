"use client";

import React, { useEffect, useRef, useState } from 'react';
import { subscribeToMouse } from '@/lib/cursorTracker';

export function SpotlightGrid() {
  const [isReduced, setIsReduced] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    setIsTouch(window.matchMedia('(hover: none) and (pointer: coarse)').matches);
  }, []);

  useEffect(() => {
    if (isReduced || isTouch) return;

    return subscribeToMouse((clientX, clientY) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const localX = clientX - rect.left;
      const localY = clientY - rect.top;
      
      ref.current.style.setProperty('--x', `${localX}px`);
      ref.current.style.setProperty('--y', `${localY}px`);
    });
  }, [isReduced, isTouch]);

  if (isReduced || isTouch) return null;

  return (
    <div 
      ref={ref}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        background: 'repeating-linear-gradient(to bottom, transparent 0, transparent 27px, rgba(143,201,154,0.15) 28px)',
        maskImage: 'radial-gradient(circle 350px at var(--x, -1000px) var(--y, -1000px), black, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(circle 350px at var(--x, -1000px) var(--y, -1000px), black, transparent 80%)',
      }}
    />
  );
}
