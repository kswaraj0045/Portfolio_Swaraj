import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

interface RedScannerCardProps {
  children: React.ReactNode;
  className?: string;
  initial?: any;
  whileInView?: any;
  viewport?: any;
  transition?: any;
}

export const RedScannerCard: React.FC<RedScannerCardProps> = ({
  children,
  className = '',
  initial,
  whileInView,
  viewport,
  transition,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [scanKey, setScanKey] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
    }
  }, []);

  // Normalized cursor coordinates (-0.5 to 0.5) for subtle 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for controlled, natural return
  const springConfig = { stiffness: 280, damping: 26 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Controlled tilt: max 3.5 degrees (disabled on touch or reduced-motion)
  const rotateX = useTransform(
    smoothMouseY,
    [-0.5, 0.5],
    shouldReduceMotion || isTouchDevice ? [0, 0] : [3.5, -3.5]
  );
  const rotateY = useTransform(
    smoothMouseX,
    [-0.5, 0.5],
    shouldReduceMotion || isTouchDevice ? [0, 0] : [-3.5, 3.5]
  );

  // Dynamic coordinates (0-100%) for cursor-following red reflection
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || shouldReduceMotion) return;
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    mouseX.set(x - 0.5);
    mouseY.set(y - 0.5);
    setCursorPos({ x: Math.round(x * 100), y: Math.round(y * 100) });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setScanKey((prev) => prev + 1); // Triggers scan exactly once per hover
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleFocus = () => {
    setIsHovered(true);
    setScanKey((prev) => prev + 1);
  };

  const handleBlur = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div style={{ perspective: 1200 }} className="w-full">
      <motion.div
        ref={cardRef}
        tabIndex={0}
        initial={initial}
        whileInView={whileInView}
        viewport={viewport}
        transition={transition}
        whileHover={shouldReduceMotion ? {} : { y: -6 }}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between group border border-border-subtle bg-bg-card/80 hover:border-accent-primary/65 focus-within:border-accent-primary/65 hover:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.8),0_0_26px_-2px_rgba(179,38,53,0.22)] focus-within:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.8),0_0_26px_-2px_rgba(179,38,53,0.22)] transition-all duration-300 ease-out relative overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/50 ${className}`}
      >
        {/* Subtle technical grid pattern revealed on hover */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 group-focus-within:opacity-20 transition-opacity duration-500 rounded-3xl"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(179, 38, 53, 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(179, 38, 53, 0.25) 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />

        {/* Dynamic cursor-following soft radial reflection that fades naturally */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 240px at ${cursorPos.x}% ${cursorPos.y}%, rgba(179, 38, 53, 0.10) 0%, transparent 70%)`,
          }}
        />

        {/* Cinematic Red Scanner Line (Runs once smoothly from left to right per hover) */}
        {!shouldReduceMotion && !isTouchDevice && isHovered && (
          <motion.div
            key={scanKey}
            initial={{ left: '-12%' }}
            animate={{ left: '112%' }}
            transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="absolute top-0 bottom-0 pointer-events-none z-20 flex items-stretch"
          >
            {/* Trailing soft crimson gradient sheen */}
            <div className="w-14 sm:w-20 h-full bg-gradient-to-r from-transparent via-accent-primary/10 to-accent-primary/25 -mr-[1px]" />

            {/* Ultra-thin illuminated crimson laser line with soft glow */}
            <div className="w-[1.5px] h-full bg-gradient-to-b from-transparent via-accent-hover to-transparent shadow-[0_0_12px_1px_rgba(209,58,73,0.9),0_0_20px_2px_rgba(179,38,53,0.55)]" />
          </motion.div>
        )}

        {/* Card Content with subtle 3D lift and slide */}
        <div className="relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-focus-within:translate-x-0.5 motion-reduce:group-hover:translate-x-0">
          {children}
        </div>
      </motion.div>
    </div>
  );
};
