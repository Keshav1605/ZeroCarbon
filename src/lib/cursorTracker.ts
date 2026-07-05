"use client";

type Subscriber = (x: number, y: number) => void;

let x = -1000;
let y = -1000;
const subscribers = new Set<Subscriber>();
let listening = false;
let ticking = false;

function handleMouseMove(e: MouseEvent) {
  x = e.clientX;
  y = e.clientY;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      subscribers.forEach(sub => sub(x, y));
      ticking = false;
    });
    ticking = true;
  }
}

export function subscribeToMouse(callback: Subscriber) {
  if (typeof window === 'undefined') return () => {};
  
  if (!listening) {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    listening = true;
  }
  
  subscribers.add(callback);
  // Optional: immediately push the last known position
  if (x !== -1000) callback(x, y);
  
  return () => {
    subscribers.delete(callback);
    if (subscribers.size === 0) {
      window.removeEventListener('mousemove', handleMouseMove);
      listening = false;
    }
  };
}
