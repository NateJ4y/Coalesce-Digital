import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device supports touch
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target?.closest('button') ||
        target?.closest('a') ||
        target?.closest('[role="button"]') ||
        target?.closest('input') ||
        target?.closest('textarea') ||
        target?.closest('.cursor-pointer') ||
        target?.tagName === 'BUTTON' ||
        target?.tagName === 'A'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Smooth lerp for trailing cursor
  useEffect(() => {
    if (isTouchDevice || !isVisible) return;
    let animationFrameId: number;

    const animate = () => {
      setTrailingPos((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18,
        };
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isTouchDevice, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer Circle Ring */}
      <div
        id="dsn_cursor"
        className="pointer-events-none fixed z-[9999] rounded-full border-2 border-[#b3de4f] transition-transform duration-150 ease-out"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          width: isHovered ? '54px' : '32px',
          height: isHovered ? '54px' : '32px',
          transform: 'translate(-50%, -50%)',
          backgroundColor: isHovered ? 'rgba(179, 222, 79, 0.15)' : 'transparent',
        }}
      />

      {/* Inner Dot */}
      <div
        id="dsn_cursor_inner"
        className="pointer-events-none fixed z-[10000] rounded-full bg-[#b3de4f] transition-transform duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovered ? '8px' : '6px',
          height: isHovered ? '8px' : '6px',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
}
