"use client";

import React, { useEffect, useState } from 'react';

export function CodeReveal({ code }: { code: string }) {
  const lines = code.split('\n');
  const [isReduced, setIsReduced] = useState(false);

  useEffect(() => {
    setIsReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  return (
    <div className="font-mono text-[12.5px] text-[var(--verify)] bg-[#0a0f0d] border-gradient depth-shadow hover-lift rounded-[6px] p-5 leading-[1.75] whitespace-pre overflow-x-auto">
      {lines.map((line, i) => {
        const delay = Math.min(i * 30, 300);
        return (
          <div
            key={i}
            className={!isReduced ? 'animate-[revealLine_0.4s_ease_forwards] opacity-0' : ''}
            style={!isReduced ? { animationDelay: `${delay}ms` } : {}}
          >
            {line || ' '}
          </div>
        );
      })}
    </div>
  );
}
