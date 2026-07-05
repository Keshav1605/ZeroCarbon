"use client";

import React, { useEffect, useRef, useState } from 'react';

type FlowTrackProps = {
  direction?: "vertical" | "horizontal" | "layers";
  delayMs?: number;
  durationMs?: number;
  className?: string;
  style?: React.CSSProperties;
  drawOn?: boolean;
};

export function FlowTrack({ direction = "vertical", delayMs = 0, durationMs = 1700, className = '', style = {}, drawOn = false }: FlowTrackProps) {
  const [isDrawn, setIsDrawn] = useState(!drawOn);
  const ref = useRef<HTMLDivElement>(null);
  const [isReduced, setIsReduced] = useState(false);

  useEffect(() => {
    setIsReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    if (!drawOn) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [drawOn]);

  let defaultContainerStyle: React.CSSProperties = {};
  let dotStyle: React.CSSProperties = {
    animationDuration: `${durationMs}ms`,
    animationDelay: `${delayMs}ms`,
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    boxShadow: '0 0 9px 2px rgba(143,201,154,0.65)',
  };
  let containerClasses = `relative ${className}`;
  let dotClasses = "absolute rounded-full bg-[var(--verify)]";

  if (drawOn && !isReduced) {
    if (direction === "vertical" || direction === "layers") {
      defaultContainerStyle.clipPath = isDrawn ? 'inset(0 -20px 0 -20px)' : 'inset(0 -20px 100% -20px)';
    } else {
      defaultContainerStyle.clipPath = isDrawn ? 'inset(-20px 0 -20px 0)' : 'inset(-20px 100% -20px 0)';
    }
    defaultContainerStyle.transition = 'clip-path 1.2s ease-out';
  } else {
    defaultContainerStyle.clipPath = (direction === "vertical" || direction === "layers") ? 'inset(0 -20px 0 -20px)' : 'inset(-20px 0 -20px 0)';
  }

  if (direction === "vertical") {
    defaultContainerStyle = { ...defaultContainerStyle, width: '2px', height: '34px', background: 'repeating-linear-gradient(to bottom, var(--line) 0 5px, transparent 5px 10px)' };
    dotStyle = { ...dotStyle, left: '50%', top: '-4px', transform: 'translateX(-50%)', animationName: 'flowDown' };
    containerClasses += " mx-auto my-1";
    dotClasses += " w-[7px] h-[7px]";
  } else if (direction === "horizontal") {
    defaultContainerStyle = { ...defaultContainerStyle, width: '100%', height: '2px', background: 'repeating-linear-gradient(to right, var(--line) 0 5px, transparent 5px 10px)' };
    dotStyle = { ...dotStyle, top: '50%', left: '-4px', transform: 'translateY(-50%)', animationName: 'flowRight' };
    dotClasses += " w-[7px] h-[7px]";
  } else if (direction === "layers") {
    defaultContainerStyle = { ...defaultContainerStyle, width: '1px', background: 'transparent' };
    dotStyle = { ...dotStyle, left: '50%', top: '0', transform: 'translateX(-50%)', animationName: 'flowLayers', boxShadow: '0 0 10px 3px rgba(143,201,154,0.6)' };
    dotClasses += " w-[8px] h-[8px]";
  }

  return (
    <div ref={ref} className={containerClasses} style={{ ...defaultContainerStyle, ...style }}>
      <div className={dotClasses} style={dotStyle} />
    </div>
  );
}
