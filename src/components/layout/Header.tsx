import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[rgba(12,18,16,0.86)] backdrop-blur-[10px] border-b border-[var(--line-soft)]">
      <nav className="flex items-center justify-between py-[18px] px-8 max-w-[1180px] mx-auto">
        <div className="flex items-center gap-[9px] font-serif text-[19px] font-semibold tracking-[0.2px]">
          <span className="w-[9px] h-[9px] rounded-full bg-[var(--verify)] shadow-[0_0_0_3px_rgba(143,201,154,0.15)]"></span>
          ZeroCarbon
          <small className="font-mono text-[10px] text-[var(--paper-faint)] tracking-[1.5px] ml-1.5 font-normal">MCP</small>
        </div>
        <div className="flex gap-[34px] text-[14px] text-[var(--paper-dim)] max-[820px]:hidden">
          <Link href="#protocol" className="transition-colors hover:text-[var(--paper)]">Protocol</Link>
          <Link href="#architecture" className="transition-colors hover:text-[var(--paper)]">Architecture</Link>
          <Link href="#integrations" className="transition-colors hover:text-[var(--paper)]">Integrations</Link>
          <Link href="#docs" className="transition-colors hover:text-[var(--paper)]">Docs</Link>
        </div>
        <div className="flex gap-3 items-center">
          <Button href="#integrations" variant="ghost">Log in</Button>
          <Button href="#integrations" variant="solid">Get API key</Button>
        </div>
      </nav>
    </header>
  );
}
