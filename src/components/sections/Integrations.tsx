import React from 'react';
import { Reveal } from '../ui/Reveal';
import { Tabs } from '../ui/Tabs';
import { integrationTabs } from '@/lib/content';

export function Integrations() {
  const tabs = integrationTabs.map((tab) => ({
    id: tab.id,
    label: tab.label,
    content: (
      <div>
        <ol className="text-[var(--paper-dim)] text-[14.5px] pl-5 mb-[22px] list-decimal">
          {tab.steps.map((step, i) => (
            <li key={i} className="mb-2.5 leading-[1.6]" dangerouslySetInnerHTML={{ __html: step }} />
          ))}
        </ol>
        <div className="font-mono text-[12.5px] text-[var(--verify)] bg-[#0a0f0d] border border-[var(--line)] rounded-[6px] p-5 leading-[1.75] whitespace-pre overflow-x-auto">
          {tab.code}
        </div>
      </div>
    )
  }));

  return (
    <section id="integrations" className="py-[100px] relative z-10 bg-[var(--bg-alt)] border-t border-[var(--line-soft)]">
      <div className="max-w-[1180px] mx-auto px-8">
        <Reveal className="max-w-[640px] mb-14">
          <div className="font-mono text-[11.5px] tracking-[2px] text-[var(--verify)] uppercase flex items-center gap-[9px] mb-4 before:content-[''] before:w-4 before:h-[1px] before:bg-[var(--verify)]">
            05 · Connect
          </div>
          <h2 className="font-serif font-medium text-[clamp(28px,3.4vw,38px)] leading-[1.15] tracking-[-0.3px] text-[var(--paper)]">
            Connect in minutes, not sprints
          </h2>
          <p className="text-[var(--paper-dim)] mt-[14px] text-[15.5px] max-w-[560px]">
            Three ways in, depending on who's connecting and where they're working.
          </p>
        </Reveal>
        
        <Reveal>
          <Tabs tabs={tabs} />
        </Reveal>
      </div>
    </section>
  );
}
