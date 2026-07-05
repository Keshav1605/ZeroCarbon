import React from 'react';
import { Button } from '../ui/Button';
import { LedgerSequence } from '../ui/LedgerSequence';

export function Hero() {
  return (
    <section className="relative pt-[96px] px-8 pb-[80px] max-w-[1180px] mx-auto grid lg:grid-cols-[1.1fr_0.9fr] grid-cols-1 gap-16 items-center z-10 max-lg:pt-16">
      <div>
        <div className="font-mono text-[11.5px] tracking-[2px] text-[var(--verify)] uppercase flex items-center gap-[9px] mb-[22px] before:content-[''] before:w-4 before:h-[1px] before:bg-[var(--verify)]">
          Model Context Protocol · Carbon Ledger
        </div>
        <h1 className="font-serif font-medium text-[clamp(38px,5vw,58px)] leading-[1.06] tracking-[-0.5px] text-[var(--paper)] mb-[22px]">
          Your carbon ledger,<br />open to <em className="italic text-[var(--verify)] font-medium not-italic">any</em> AI model.
        </h1>
        <p className="text-[16.5px] text-[var(--paper-dim)] max-w-[480px] mb-[34px] leading-[1.65]">
          ZeroCarbon MCP connects Claude, Cursor, and every MCP-compatible model straight to your company's emissions data — so any of them can read, calculate, and verify it in plain language, live.
        </p>
        <div className="flex gap-[14px] flex-wrap mb-10">
          <Button href="#integrations" variant="solid" className="px-[22px] py-[13px] text-[13px]">Connect Claude Desktop</Button>
          <Button href="#docs" variant="ghost" className="px-[22px] py-[13px] text-[13px]">Read the docs →</Button>
        </div>
        <div className="font-mono text-[12px] text-[var(--paper-faint)] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--verify)] animate-pulse-slow"></span>
          JSON-RPC 2.0 · Stdio &amp; HTTP bridge · CEA-verified emission factors
        </div>
      </div>
      
      <LedgerSequence />
    </section>
  );
}
