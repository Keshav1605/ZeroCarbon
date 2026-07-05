"use client";

import React, { useRef } from 'react';
import { Reveal } from '../ui/Reveal';
import { RevealGroup } from '../ui/RevealGroup';
import { SpotlightGrid } from '../ui/SpotlightGrid';
import { capabilities } from '@/lib/content';
import { useTilt } from '@/lib/useTilt';

function CapabilityCard({ cap }: { cap: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const tilt = useTilt(ref);
  return (
    <div 
      ref={ref} 
      className="bg-[var(--surface)] px-7 py-[34px] border-gradient rounded-[8px] depth-shadow hover-lift will-change-transform"
      style={tilt ? { transform: tilt } : { transition: 'transform 300ms ease' }}
    >
      <span className="font-mono text-[11px] text-[var(--verify)] tracking-[1.5px] mb-[18px] block">{cap.tag}</span>
      <h3 className="font-serif text-[20px] font-medium text-[var(--paper)] mb-3 tracking-[-0.2px]">{cap.title}</h3>
      <p className="text-[var(--paper-dim)] text-[14px]">{cap.body}</p>
      <div className="mt-8 font-mono text-[11.5px] text-[var(--paper-faint)] bg-[var(--surface-2)] p-4 rounded-[4px] border-gradient">
        {cap.example}
      </div>
    </div>
  );
}

export function Capabilities() {
  return (
    <section id="capabilities" className="py-[100px] relative z-10 ambient-glow-br">
      <SpotlightGrid />
      <div className="max-w-[1180px] mx-auto px-8 relative z-10">
        <Reveal className="max-w-[640px] mb-14">
          <div className="font-mono text-[11.5px] tracking-[2px] text-[var(--verify)] uppercase flex items-center gap-[9px] mb-2 before:content-[''] before:w-4 before:h-[1px] before:bg-[var(--verify)]">
            03 · Capabilities
          </div>
          <h2 className="font-serif font-medium text-[clamp(28px,3.4vw,38px)] leading-[1.15] tracking-[-0.3px] text-[var(--paper)]">
            Carbon logic, exposed as tools
          </h2>
          <p className="text-[var(--paper-dim)] mt-[14px] text-[15.5px] max-w-[560px]">
            The server translates complex GHG Protocol calculations into simple, atomic tools that AI models can use autonomously.
          </p>
        </Reveal>
        
        <RevealGroup className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {capabilities.map((cap, i) => (
            <CapabilityCard key={i} cap={cap} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
