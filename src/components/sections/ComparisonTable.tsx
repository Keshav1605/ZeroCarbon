import React from 'react';
import { Reveal } from '../ui/Reveal';
import { RevealGroup } from '../ui/RevealGroup';
import { SpotlightGrid } from '../ui/SpotlightGrid';
import { comparisonRows } from '@/lib/content';

export function ComparisonTable() {
  return (
    <section id="comparison" className="py-[100px] relative z-10 bg-[var(--bg-alt)] border-y border-[var(--line-soft)] ambient-glow-tl">
      <SpotlightGrid />
      <div className="max-w-[1180px] mx-auto px-8 relative z-10">
        <Reveal className="max-w-[640px] mb-14">
          <div className="font-mono text-[11.5px] tracking-[2px] text-[var(--verify)] uppercase flex items-center gap-[9px] mb-4 before:content-[''] before:w-4 before:h-[1px] before:bg-[var(--verify)]">
            03 · Before &amp; After
          </div>
          <h2 className="font-serif font-medium text-[clamp(28px,3.4vw,38px)] leading-[1.15] tracking-[-0.3px] text-[var(--paper)]">
            What changes on the ledger
          </h2>
          <p className="text-[var(--paper-dim)] mt-[14px] text-[15.5px] max-w-[560px]">
            Carbon accounting has run on spreadsheets and manual review for years. Here's what a protocol connection replaces.
          </p>
        </Reveal>
        
        <Reveal className="border-gradient rounded-[6px] overflow-hidden bg-[var(--surface)] depth-shadow">
          <div className="grid md:grid-cols-[150px_1fr_1fr] grid-cols-1 border-b border-[var(--line-soft)] bg-[var(--surface-2)] text-left">
            <div className="font-mono text-[11px] tracking-[1px] text-[var(--paper-faint)] uppercase px-[22px] py-[20px] max-md:py-3 max-md:px-[18px]">Aspect</div>
            <div className="font-mono text-[11px] tracking-[1px] text-[var(--paper-faint)] uppercase px-[22px] py-[20px] max-md:py-3 max-md:px-[18px]">Before</div>
            <div className="font-mono text-[11px] tracking-[1px] text-[var(--paper-faint)] uppercase px-[22px] py-[20px] max-md:py-3 max-md:px-[18px]">With ZeroCarbon MCP</div>
          </div>
          
          <RevealGroup className="flex flex-col" alternateSlide={true}>
          {comparisonRows.map((row, i) => (
            <div key={i} className="grid md:grid-cols-[150px_1fr_1fr] grid-cols-1 border-b border-[var(--line-soft)] last:border-b-0 max-md:border-b-0">
              <div className="px-[22px] py-[20px] max-md:py-3 max-md:px-[18px] text-[14px] text-[var(--paper)] font-mono text-[12px] font-medium max-md:border-b max-md:border-dashed max-md:border-[var(--line-soft)]">{row.label}</div>
              <div className="px-[22px] py-[20px] max-md:py-3 max-md:px-[18px] text-[14px] text-[var(--paper-dim)] max-md:border-b max-md:border-dashed max-md:border-[var(--line-soft)]">{row.before}</div>
              <div className="px-[22px] py-[20px] max-md:py-3 max-md:px-[18px] text-[14px] text-[var(--paper)] relative before:content-['✓'] before:text-[var(--verify)] before:mr-2 before:font-mono">{row.after}</div>
            </div>
          ))}
          </RevealGroup>
        </Reveal>
      </div>
    </section>
  );
}
