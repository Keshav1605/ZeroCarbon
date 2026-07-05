"use client";

import React, { useEffect, useState } from 'react';
import { marqueeRows } from '@/lib/content';

export function LedgerMarquee() {
  const [isReduced, setIsReduced] = useState(false);
  useEffect(() => {
    setIsReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  const displayRows = isReduced ? marqueeRows.slice(0, 3) : marqueeRows;

  return (
    <section className="py-6 border-y border-[var(--line-soft)] bg-[var(--bg-alt)] overflow-hidden flex relative z-10 w-full">
      <div className={`flex shrink-0 gap-6 pr-6 ${!isReduced ? 'animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]' : 'mx-auto'}`}>
        {displayRows.map((row, i) => (
          <div key={i} className="border border-[var(--verify-dim)] rounded-[4px] px-[14px] py-[12px] bg-[rgba(143,201,154,0.06)] flex justify-between items-center font-mono text-[12px] whitespace-nowrap min-w-max">
            <span className="text-[var(--paper)]">{row}</span>
            <span className="text-[var(--verify)] border border-[var(--verify-dim)] px-[7px] py-[2px] rounded-[2px] text-[10px] tracking-[1px] ml-6">VERIFIED</span>
          </div>
        ))}
      </div>
      {!isReduced && (
        <div className="flex shrink-0 gap-6 pr-6 animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]" aria-hidden="true">
          {displayRows.map((row, i) => (
            <div key={i} className="border border-[var(--verify-dim)] rounded-[4px] px-[14px] py-[12px] bg-[rgba(143,201,154,0.06)] flex justify-between items-center font-mono text-[12px] whitespace-nowrap min-w-max">
              <span className="text-[var(--paper)]">{row}</span>
              <span className="text-[var(--verify)] border border-[var(--verify-dim)] px-[7px] py-[2px] rounded-[2px] text-[10px] tracking-[1px] ml-6">VERIFIED</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
