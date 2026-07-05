"use client";

import React, { useEffect, useRef, useState } from 'react';

type AnimatedCounterProps = {
  to: number;
  durationMs?: number;
  label: string;
  padZero?: boolean;
};

export function AnimatedCounter({ to, label, padZero = false }: AnimatedCounterProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [isReduced, setIsReduced] = useState(false);

  useEffect(() => {
    setIsReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const displayString = padZero ? String(to).padStart(2, '0') : String(to);
  const digits = displayString.split('');

  return (
    <div ref={ref} className="font-mono text-[11.5px] text-[var(--paper-faint)] flex items-center gap-[6px] mb-4">
      <div className="flex tabular-nums font-medium text-[var(--paper-dim)] h-[16px] overflow-hidden leading-[16px]">
        {digits.map((digit, i) => {
          const num = parseInt(digit, 10);
          const isNum = !isNaN(num);
          if (!isNum) return <span key={i} className="h-[16px] flex items-center">{digit}</span>;
          
          return (
            <div 
              key={i} 
              className="flex flex-col relative will-change-transform" 
              style={{ 
                transition: !isReduced && inView ? `transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 40}ms` : 'none', 
                transform: inView || isReduced ? `translateY(-${num * 16}px)` : 'translateY(0px)' 
              }}
            >
              {[0,1,2,3,4,5,6,7,8,9].map(d => (
                <span key={d} className="h-[16px] flex items-center justify-center shrink-0">{d}</span>
              ))}
            </div>
          );
        })}
      </div>
      <span className="tracking-[0.5px]">{label}</span>
    </div>
  );
}
