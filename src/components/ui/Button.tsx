import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  variant?: 'ghost' | 'solid';
  children: React.ReactNode;
  className?: string;
}

export function Button({ href, variant = 'solid', children, className = '' }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-mono text-[12.5px] tracking-[0.3px] px-4 py-[9px] rounded-[3px] border transition-colors whitespace-nowrap";
  const ghostClasses = "text-[var(--paper-dim)] border-[var(--line)] hover:text-[var(--paper)] hover:border-[var(--paper-faint)]";
  const solidClasses = "bg-[var(--verify)] text-[#0c1210] border-[var(--verify)] font-semibold hover:bg-[#a3d8ac]";
  
  const classes = `${baseClasses} ${variant === 'ghost' ? ghostClasses : solidClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes}>
      {children}
    </button>
  );
}
