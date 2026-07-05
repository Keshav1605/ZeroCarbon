import React from 'react';
import { Reveal } from '../ui/Reveal';
import { FlowTrack } from '../ui/FlowTrack';
import { architectureLayers } from '@/lib/content';

export function Architecture() {
  return (
    <section id="architecture" className="py-[100px] relative z-10">
      <div className="max-w-[1180px] mx-auto px-8">
        <Reveal className="max-w-[640px] mb-14">
          <div className="font-mono text-[11.5px] tracking-[2px] text-[var(--verify)] uppercase flex items-center gap-[9px] mb-4 before:content-[''] before:w-4 before:h-[1px] before:bg-[var(--verify)]">
            04 · Architecture
          </div>
          <h2 className="font-serif font-medium text-[clamp(28px,3.4vw,38px)] leading-[1.15] tracking-[-0.3px] text-[var(--paper)]">
            Five layers, one request
          </h2>
          <p className="text-[var(--paper-dim)] mt-[14px] text-[15.5px] max-w-[560px]">
            Every call — whether it's a chat question or a scheduled scan — passes through the same five layers in order.
          </p>
        </Reveal>
        
        <Reveal className="relative max-w-[760px] before:content-[''] before:absolute before:left-[23px] before:top-[14px] before:bottom-[14px] before:w-[1px] before:bg-[repeating-linear-gradient(to_bottom,var(--line)_0,var(--line)_4px,transparent_4px,transparent_9px)]">
          <div className="absolute left-[23px] top-[14px] w-[1px] h-[calc(100%-28px)] pointer-events-none">
            <FlowTrack direction="layers" durationMs={5000} className="w-full h-full m-0" />
          </div>
          
          {architectureLayers.map((layer, i) => (
            <div key={i} className="flex gap-6 py-[26px] relative">
              <div className="w-[47px] h-[47px] rounded-full shrink-0 border border-[var(--verify-dim)] bg-[var(--bg)] flex items-center justify-center font-mono text-[14px] text-[var(--verify)] relative z-10">
                {i + 1}
              </div>
              <div>
                <h4 className="font-sans font-semibold text-[15.5px] text-[var(--paper)] mb-1.5">
                  {layer.title}
                  <span className="text-[var(--paper-faint)] font-mono text-[11px] font-normal ml-2">{layer.subtitle}</span>
                </h4>
                <p className="text-[var(--paper-dim)] text-[14px] max-w-[520px]">{layer.body}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
