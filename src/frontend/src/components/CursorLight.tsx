import { useEffect, useRef } from 'react';

export default function CursorLight() {
  const lightRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };

      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        if (lightRef.current) {
          lightRef.current.style.background = `radial-gradient(600px circle at ${posRef.current.x}px ${posRef.current.y}px, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 30%, transparent 70%)`;
        }
        rafRef.current = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={lightRef}
      className="pointer-events-none fixed inset-0 z-50"
      style={{
        background: 'radial-gradient(600px circle at -9999px -9999px, rgba(255,255,255,0.06) 0%, transparent 70%)',
      }}
    />
  );
}
