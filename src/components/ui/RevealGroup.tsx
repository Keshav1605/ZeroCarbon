"use client";

import React, { useEffect, useRef, useState, isValidElement, cloneElement } from 'react';

type RevealGroupProps = {
  children: React.ReactNode[];
  staggerMs?: number;
  className?: string;
  alternateSlide?: boolean;
};

export function RevealGroup({ children, staggerMs = 80, className = '', alternateSlide = false }: RevealGroupProps) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [isReduced, setIsReduced] = useState(false);

  useEffect(() => {
    setIsReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;
        
        const element = child as React.ReactElement<any>;
        const existingClass = element.props.className || '';
        
        let transformClass = 'translate-y-[22px]';
        if (alternateSlide) {
          transformClass = index % 2 === 0 ? '-translate-x-[22px]' : 'translate-x-[22px]';
        }
        
        const revealClass = `transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${transformClass}`}`;
        const existingStyle = element.props.style || {};
        
        return cloneElement(element, {
          className: `${existingClass} ${revealClass}`.trim(),
          style: {
            ...existingStyle,
            transitionDelay: isReduced ? '0ms' : `${index * staggerMs}ms`
          }
        });
      })}
    </div>
  );
}
