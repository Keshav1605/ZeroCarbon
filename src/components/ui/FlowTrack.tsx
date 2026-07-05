import React from 'react';

type FlowTrackProps = {
  direction?: "vertical" | "horizontal" | "layers";
  delayMs?: number;
  durationMs?: number;
  className?: string;
  style?: React.CSSProperties;
};

export function FlowTrack({ direction = "vertical", delayMs = 0, durationMs = 1700, className = '', style = {} }: FlowTrackProps) {
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

  if (direction === "vertical") {
    defaultContainerStyle = { width: '2px', height: '34px', background: 'repeating-linear-gradient(to bottom, var(--line) 0 5px, transparent 5px 10px)' };
    dotStyle = { ...dotStyle, left: '50%', top: '-4px', transform: 'translateX(-50%)', animationName: 'flowDown' };
    containerClasses += " mx-auto my-1";
    dotClasses += " w-[7px] h-[7px]";
  } else if (direction === "horizontal") {
    defaultContainerStyle = { width: '100%', height: '2px', background: 'repeating-linear-gradient(to right, var(--line) 0 5px, transparent 5px 10px)' };
    dotStyle = { ...dotStyle, top: '50%', left: '-4px', transform: 'translateY(-50%)', animationName: 'flowRight' };
    dotClasses += " w-[7px] h-[7px]";
  } else if (direction === "layers") {
    defaultContainerStyle = { width: '1px', background: 'transparent' };
    dotStyle = { ...dotStyle, left: '50%', top: '0', transform: 'translateX(-50%)', animationName: 'flowLayers', boxShadow: '0 0 10px 3px rgba(143,201,154,0.6)' };
    dotClasses += " w-[8px] h-[8px]";
  }

  return (
    <div className={containerClasses} style={{ ...defaultContainerStyle, ...style }}>
      <div className={dotClasses} style={dotStyle} />
    </div>
  );
}
