"use client";

import { useEffect, useState, RefObject } from 'react';
import { subscribeToMouse } from './cursorTracker';

export function useTilt(ref: RefObject<HTMLElement | null>, maxTilt = 5) {
  const [transform, setTransform] = useState('');

  useEffect(() => {
    if (!ref.current) return;
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isReduced || isTouch) return;

    return subscribeToMouse((clientX, clientY) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      
      if (
        clientX >= rect.left && clientX <= rect.right &&
        clientY >= rect.top && clientY <= rect.bottom
      ) {
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -maxTilt;
        const rotateY = ((x - centerX) / centerX) * maxTilt;
        
        setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
      } else {
        setTransform('');
      }
    });
  }, [maxTilt, ref]);

  return transform;
}
