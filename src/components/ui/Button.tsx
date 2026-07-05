"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { subscribeToMouse } from '@/lib/cursorTracker';

interface ButtonProps {
  href?: string;
  variant?: 'ghost' | 'solid';
  children: React.ReactNode;
  className?: string;
}

export function Button({ href, variant = 'solid', children, className = '' }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-mono text-[12.5px] tracking-[0.3px] px-4 py-[9px] rounded-[3px] border transition-colors whitespace-nowrap will-change-transform";
  const ghostClasses = "text-[var(--paper-dim)] border-[var(--line)] hover:text-[var(--paper)] hover:border-[var(--paper-faint)]";
  const solidClasses = "bg-[var(--verify)] text-[#0c1210] border-[var(--verify)] font-semibold hover:bg-[#a3d8ac]";
  
  const [transform, setTransform] = useState('');
  const ref = useRef<any>(null);

  useEffect(() => {
    if (variant === 'ghost') return;
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isReduced || isTouch) return;

    return subscribeToMouse((clientX, clientY) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;
      
      const buffer = 20;
      if (
        clientX > rect.left - buffer && clientX < rect.right + buffer &&
        clientY > rect.top - buffer && clientY < rect.bottom + buffer
      ) {
        const pullX = (distanceX / (rect.width / 2 + buffer)) * 8;
        const pullY = (distanceY / (rect.height / 2 + buffer)) * 8;
        setTransform(`translate(${pullX}px, ${pullY}px)`);
      } else {
        setTransform('');
      }
    });
  }, [variant]);

  const style: React.CSSProperties = transform 
    ? { transform } 
    : { transition: 'transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1), background-color 200ms ease, border-color 200ms ease, color 200ms ease' };
  
  const classes = `${baseClasses} ${variant === 'ghost' ? ghostClasses : solidClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} ref={ref} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} ref={ref} style={style}>
      {children}
    </button>
  );
}
