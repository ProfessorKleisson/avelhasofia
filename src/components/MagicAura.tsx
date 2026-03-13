import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function MagicAura() {
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    setParticles(Array.from({ length: 20 }, (_, i) => i));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Large pulsing glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] magic-aura opacity-20" />
      
      {/* Floating particles */}
      {particles.map((i) => (
        <div
          key={i}
          className="emerald-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.5,
          }}
        />
      ))}

      {/* Magical Flow Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <motion.path
          d="M-100,200 Q400,100 800,400 T1800,200"
          fill="none"
          stroke="var(--color-emerald)"
          strokeWidth="1"
          strokeDasharray="1000"
          initial={{ strokeDashoffset: 1000 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M-100,600 Q600,800 1200,400 T2000,600"
          fill="none"
          stroke="var(--color-emerald)"
          strokeWidth="1"
          strokeDasharray="1000"
          initial={{ strokeDashoffset: 1000 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
        />
      </svg>
    </div>
  );
}
