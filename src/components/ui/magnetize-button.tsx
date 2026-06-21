import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

interface MagnetizeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  particleCount?: number;
  attractRadius?: number;
  children?: React.ReactNode;
}

interface Particle {
  id: number;
  x: number;
  y: number;
}

export function MagnetizeButton({
  className,
  particleCount = 12,
  children,
  ...props
}: MagnetizeButtonProps) {
  const [isAttracting, setIsAttracting] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particlesControl = useAnimation();

  useEffect(() => {
    setParticles(
      Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: Math.random() * 360 - 180,
        y: Math.random() * 360 - 180,
      }))
    );
  }, [particleCount]);

  const handleStart = useCallback(async () => {
    setIsAttracting(true);
    await particlesControl.start({ x: 0, y: 0, transition: { type: "spring", stiffness: 50, damping: 10 } });
  }, [particlesControl]);

  const handleEnd = useCallback(async () => {
    setIsAttracting(false);
    await particlesControl.start((i) => ({
      x: particles[i].x,
      y: particles[i].y,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    }));
  }, [particlesControl, particles]);

  return (
    <button
      className={cn(
        "relative min-w-40 touch-none px-8 py-3 font-heading font-semibold text-sm tracking-widest transition-all duration-300",
        className
      )}
      onMouseEnter={handleStart}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
      {...props}
    >
      {particles.map((_, index) => (
        <motion.div
          key={index}
          custom={index}
          initial={{ x: particles[index]?.x ?? 0, y: particles[index]?.y ?? 0 }}
          animate={particlesControl}
          className={cn(
            "absolute w-1.5 h-1.5 rounded-full bg-violet-400 transition-opacity duration-300",
            isAttracting ? "opacity-100" : "opacity-30"
          )}
        />
      ))}
      <span className="relative">{children}</span>
    </button>
  );
}
