import React from 'react';
import { Reveal } from '../ui/Reveal';
import { FlowTrack } from '../ui/FlowTrack';
import { SpotlightGrid } from '../ui/SpotlightGrid';

export function ProtocolExplainer() {
  return (
    <section id="protocol" className="py-[100px] relative bg-[var(--bg-alt)] border-y border-[var(--line-soft)] ambient-glow-tl overflow-hidden">
      <SpotlightGrid />
      <div className="max-w-[1180px] mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[60px] items-start">
          <Reveal>
            <div className="font-mono text-[11.5px] tracking-[2px] text-[var(--verify)] uppercase flex items-center gap-[9px] mb-4 before:content-[''] before:w-4 before:h-[1px] before:bg-[var(--verify)]">
              01 · The Standard
            </div>
            <h2 className="font-serif font-medium text-[clamp(26px,3vw,32px)] text-[var(--paper)] mb-5">
              A universal translator between models and your data
            </h2>
            <div className="text-[15px] text-[var(--paper-dim)] space-y-[18px]">
              <p>Model Context Protocol is an open standard, started by Anthropic, for connecting AI models to external data without writing a custom integration for every provider.</p>
              <p><b className="text-[var(--paper)] font-semibold">ZeroCarbon runs the server side of it.</b> Instead of hardcoding what an AI can do with your emissions data, the server publishes a list of tools it supports — query the ledger, calculate a footprint, verify an entry — and the model picks the right one for the question it's been asked.</p>
              <p>Every call travels over a JSON-RPC 2.0 bridge, either locally through stdio pipes or remotely over HTTP behind an API key.</p>
            </div>
          </Reveal>
          
          <Reveal className="border-gradient rounded-[6px] bg-[var(--surface)] p-7 font-mono text-[12.5px] depth-shadow">
            <div className="flex items-center gap-3 py-3.5">
              <div className="flex-1 border-gradient rounded-[4px] px-[14px] py-3 bg-[var(--surface-2)] text-[var(--paper-dim)]">
                <b className="text-[var(--paper)] block font-sans text-[13px] mb-[3px] font-semibold">MCP Client</b>
                Claude, Cursor, or any compatible model
              </div>
            </div>
            <FlowTrack direction="vertical" drawOn={true} />
            <div className="text-center font-mono text-[11px] text-[var(--paper-faint)] tracking-[0.3px]">JSON-RPC 2.0</div>
            <div className="flex items-center gap-3 py-3.5">
              <div className="flex-1 border-gradient rounded-[4px] px-[14px] py-3 bg-[var(--surface-2)] text-[var(--paper-dim)]">
                <b className="text-[var(--paper)] block font-sans text-[13px] mb-[3px] font-semibold">Gateway</b>
                Verifies your API token, routes the call
              </div>
            </div>
            <FlowTrack direction="vertical" drawOn={true} />
            <div className="text-center font-mono text-[11px] text-[var(--paper-faint)] tracking-[0.3px]">tool call resolved</div>
            <div className="flex items-center gap-3 py-3.5">
              <div className="flex-1 border-gradient rounded-[4px] px-[14px] py-3 bg-[var(--surface-2)] text-[var(--paper-dim)]">
                <b className="text-[var(--paper)] block font-sans text-[13px] mb-[3px] font-semibold">ZeroCarbon MCP Server</b>
                Publishes tools, hosts calculations, holds the ledger
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
