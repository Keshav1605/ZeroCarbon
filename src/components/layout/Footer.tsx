import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-[var(--line-soft)] py-10 px-8 relative z-10">
      <div className="flex justify-between items-center flex-wrap gap-4 max-w-[1180px] mx-auto">
        <div className="flex items-center gap-[9px] font-serif text-[15px] font-semibold tracking-[0.2px]">
          <span className="w-[9px] h-[9px] rounded-full bg-[var(--verify)] shadow-[0_0_0_3px_rgba(143,201,154,0.15)]"></span>
          ZeroCarbon
          <small className="font-mono text-[10px] text-[var(--paper-faint)] tracking-[1.5px] ml-1.5 font-normal">MCP</small>
        </div>
        <div className="flex gap-[26px] text-[13px] text-[var(--paper-faint)]">
          <Link href="#protocol" className="hover:text-[var(--paper-dim)]">Protocol</Link>
          <Link href="#architecture" className="hover:text-[var(--paper-dim)]">Architecture</Link>
          <Link href="#integrations" className="hover:text-[var(--paper-dim)]">Integrations</Link>
          <Link href="#docs" className="hover:text-[var(--paper-dim)]">Docs</Link>
        </div>
        <div className="flex gap-[26px] text-[13px] text-[var(--paper-faint)]">
          <span>© 2026 ZeroCarbon</span>
        </div>
      </div>
    </footer>
  );
}
