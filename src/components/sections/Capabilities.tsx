import React from 'react';
import { Reveal } from '../ui/Reveal';
import { capabilities } from '@/lib/content';

export function Capabilities() {
  return (
    <section id="capabilities" className="py-[100px] relative z-10">
      <div className="max-w-[1180px] mx-auto px-8">
        <Reveal className="max-w-[640px] mb-14">
          <div className="font-mono text-[11.5px] tracking-[2px] text-[var(--verify)] uppercase flex items-center gap-[9px] mb-4 before:content-[''] before:w-4 before:h-[1px] before:bg-[var(--verify)]">
            02 · What It Does
          </div>
          <h2 className="font-serif font-medium text-[clamp(28px,3.4vw,38px)] leading-[1.15] tracking-[-0.3px] text-[var(--paper)]">
            Three things it hands the model
          </h2>
          <p className="text-[var(--paper-dim)] mt-[14px] text-[15.5px] max-w-[560px]">
            Once connected, a model doesn't just read your data — it can question it, calculate against it, and log new entries into it.
          </p>
        </Reveal>
        
        <Reveal className="grid md:grid-cols-3 grid-cols-1 gap-[1px] bg-[var(--line-soft)] border border-[var(--line-soft)] rounded-[8px] overflow-hidden">
          {capabilities.map((cap, i) => (
            <div key={i} className="bg-[var(--surface)] px-7 py-[34px]">
              <span className="font-mono text-[11px] text-[var(--verify)] tracking-[1.5px] mb-[18px] block">{cap.tag}</span>
              <h3 className="font-serif text-[20px] font-medium text-[var(--paper)] mb-3 tracking-[-0.2px]">{cap.title}</h3>
              <p className="text-[var(--paper-dim)] text-[14px]">{cap.body}</p>
              <div className="mt-4 font-mono text-[11.5px] text-[var(--paper-faint)] border-l-2 border-[var(--line)] pl-3 not-italic">
                {cap.example}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
