"use client";

import React, { useState, useEffect } from 'react';
import { FlowTrack } from './FlowTrack';
import { ledgerSequenceData } from '@/lib/content';

export function LedgerSequence() {
  const [step, setStep] = useState(0);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 3300);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (step === 0) {
      setTypedText('');
      let i = 0;
      const typeTimer = setInterval(() => {
        setTypedText(ledgerSequenceData.question.slice(0, i));
        i++;
        if (i > ledgerSequenceData.question.length) {
          clearInterval(typeTimer);
        }
      }, 38);
      return () => clearInterval(typeTimer);
    }
  }, [step]);

  return (
    <div className="bg-[var(--surface)] border border-[var(--line)] rounded-[6px] overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--line)] bg-[var(--surface-2)]">
        <span className="font-mono text-[10.5px] text-[var(--paper-faint)] tracking-[1px]">
          LIVE QUERY → LEDGER ENTRY
        </span>
        <div className="flex gap-[5px]">
          <i className="w-[7px] h-[7px] rounded-full bg-[var(--line)] block" />
          <i className="w-[7px] h-[7px] rounded-full bg-[var(--line)] block" />
          <i className="w-[7px] h-[7px] rounded-full bg-[var(--line)] block" />
        </div>
      </div>

      <div className="px-5 py-[22px] min-h-[280px] relative">
        <div className={step === 0 ? "block animate-[fadeUp_0.5s_ease_forwards]" : "hidden"}>
          <div className="font-sans text-[13.5px] text-[var(--paper)] bg-[var(--surface-2)] border border-[var(--line)] rounded-[4px] px-[14px] py-[12px] mb-4 relative before:content-['ASKED'] before:font-mono before:text-[9.5px] before:tracking-[1.5px] before:text-[var(--paper-faint)] before:block before:mb-[6px]">
            <span className="border-r-2 border-[var(--verify)] whitespace-nowrap overflow-hidden inline-block">
              {typedText}
            </span>
          </div>
          <FlowTrack direction="vertical" delayMs={300} />
          <div className="text-center font-mono text-[11px] text-[var(--paper-faint)] tracking-[0.3px]">
            model calls a tool
          </div>
        </div>

        <div className={step === 1 ? "block animate-[fadeUp_0.5s_ease_forwards]" : "hidden"}>
          <div className="font-mono text-[12px] text-[var(--verify)] bg-[#0a0f0d] border border-[var(--line)] rounded-[4px] p-[14px] leading-[1.7] whitespace-pre overflow-x-auto">
            <span className="text-[var(--paper-dim)]">{"{\n  \"tool\": \"query_ledger\",\n  \"params\": {\n    \"site\": \"IN-MUM-04\",\n    \"month\": \"2026-04\"\n  }\n}"}</span>
          </div>
          <FlowTrack direction="vertical" delayMs={600} />
          <div className="text-center font-mono text-[11px] text-[var(--paper-faint)] tracking-[0.3px]">
            server resolves against ledger
          </div>
        </div>

        <div className={step === 2 ? "block animate-[fadeUp_0.5s_ease_forwards]" : "hidden"}>
          <div className="mt-4 border border-[var(--verify-dim)] rounded-[4px] px-[14px] py-[12px] bg-[rgba(143,201,154,0.06)] flex justify-between items-center font-mono text-[12px] animate-[stampIn_0.45s_cubic-bezier(0.2,1.4,0.4,1)_forwards]">
            <span className="text-[var(--paper)]">{ledgerSequenceData.ledgerRow1}</span>
            <span className="text-[var(--verify)] border border-[var(--verify-dim)] px-[7px] py-[2px] rounded-[2px] text-[10px] tracking-[1px]">VERIFIED</span>
          </div>
          <div className="mt-[10px] border border-[var(--verify-dim)] rounded-[4px] px-[14px] py-[12px] bg-[rgba(143,201,154,0.06)] flex justify-between items-center font-mono text-[12px] animate-[stampIn_0.45s_cubic-bezier(0.2,1.4,0.4,1)_forwards]" style={{ animationDelay: '150ms' }}>
            <span className="text-[var(--paper)]">{ledgerSequenceData.ledgerRow2}</span>
            <span className="text-[var(--verify)] border border-[var(--verify-dim)] px-[7px] py-[2px] rounded-[2px] text-[10px] tracking-[1px]">VERIFIED</span>
          </div>
        </div>
      </div>

      <div className="flex gap-[5px] px-[20px] pb-[18px]">
        {[0, 1, 2].map((i) => (
          <i key={i} className="h-[2px] flex-1 bg-[var(--line)] rounded-[2px] overflow-hidden relative">
            <span 
              className={`absolute inset-0 bg-[var(--verify)] origin-left ${
                i < step ? 'scale-x-100 transition-none' : i === step ? 'scale-x-0 animate-[fillbar_3.2s_linear_forwards]' : 'scale-x-0'
              }`}
            />
          </i>
        ))}
      </div>
    </div>
  );
}
