import React from 'react';
import { Button } from '../ui/Button';
import { SpotlightGrid } from '../ui/SpotlightGrid';

export function CtaBand() {
  return (
    <section id="docs" className="text-center py-[110px] px-8 border-t border-[var(--line-soft)] bg-[var(--bg-alt)] ambient-glow-tc animate-[pulse-slow_4s_ease-in-out_infinite] z-10 relative overflow-hidden">
      <SpotlightGrid />
      <div className="relative z-10">
        <div className="font-mono text-[11.5px] tracking-[2px] text-[var(--verify)] uppercase flex items-center gap-[9px] mb-[16px] justify-center before:content-[''] before:w-4 before:h-[1px] before:bg-[var(--verify)]">
          Ready when you are
        </div>
        <h2 className="font-serif font-medium text-[clamp(30px,4vw,44px)] text-[var(--paper)] mb-[18px] tracking-[-0.4px]">
          Give your model access<br />to the truth on your ledger.
        </h2>
        <p className="text-[var(--paper-dim)] mb-[34px] text-[15.5px]">
          Free to connect for a single site. No credit card for the first ledger.
        </p>
        <div className="flex gap-[14px] flex-wrap justify-center mb-10">
          <Button href="#" variant="solid" className="px-[22px] py-[13px] text-[13px]">Get your API key</Button>
          <Button href="#" variant="ghost" className="px-[22px] py-[13px] text-[13px]">View full documentation →</Button>
        </div>
      </div>
    </section>
  );
}
