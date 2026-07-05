"use client";

import React, { useState } from 'react';

export type Tab = { id: string; label: string; content: React.ReactNode };
export type TabsProps = { tabs: Tab[]; defaultTabId?: string };

export function Tabs({ tabs, defaultTabId }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTabId || tabs[0]?.id);

  return (
    <div>
      <div className="flex gap-[2px] mb-0 border-b border-[var(--line)] overflow-x-auto" role="tablist">
        {tabs.map(tab => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`font-mono text-[12.5px] px-5 py-[13px] bg-transparent cursor-pointer border-b-2 transition-all tracking-[0.3px] whitespace-nowrap
              ${activeTab === tab.id 
                ? 'text-[var(--verify)] border-[var(--verify)]' 
                : 'text-[var(--paper-faint)] border-transparent hover:text-[var(--paper-dim)]'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="pt-8">
        {tabs.map(tab => (
          <div 
            key={tab.id} 
            role="tabpanel"
            className={activeTab === tab.id ? 'block animate-[fadeUp_0.4s_ease]' : 'hidden'}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
