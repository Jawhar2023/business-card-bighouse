import { useRef, useState, useEffect, useCallback } from "react";
import logo from "@/assets/big-house-emblem.png";

interface ParallaxLogoProps {
  /** Warm amber neutrals for Big House card. */
  variant?: "tech" | "brand";
}

const ParallaxLogo = ({ variant = "brand" }: ParallaxLogoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = useCallback((clientX: number, clientY: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const x = ((clientX - cx) / (rect.width / 2)) * 15;
    const y = ((clientY - cy) / (rect.height / 2)) * -15;
    setTilt({ x: Math.max(-15, Math.min(15, x)), y: Math.max(-15, Math.min(15, y)) });
  }, []);

  useEffect(() => {
    const onMouse = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => {
      if (e.touches[0]) handleMove(e.touches[0].clientX, e.touches[0].clientY);
    };
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("touchmove", onTouch, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchmove", onTouch);
    };
  }, [handleMove]);

  const isBrand = variant === "brand";

  return (
    <div ref={containerRef} className="relative flex items-center justify-center" style={{ perspective: "600px" }}>
      <div
        className={
          isBrand
            ? "absolute w-44 h-44 rounded-full border border-amber-300/40"
            : "absolute w-36 h-36 rounded-full border border-primary/20"
        }
        style={{ animation: "orbit-ring 8s linear infinite" }}
      >
        {[0, 90, 180, 270].map((deg) => (
          <div
            key={deg}
            className={isBrand ? "absolute h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_10px_hsl(38_92%_50%_/_0.8)]" : "absolute h-1.5 w-1.5 rounded-full bg-primary"}
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${deg}deg) translateX(88px) translateY(-50%)`,
              animation: "orbit-pulse 2s ease-in-out infinite",
              animationDelay: `${deg * 5}ms`,
            }}
          />
        ))}
      </div>

      <div
        className="relative z-[1] h-[96px] w-[min(100%,240px)] overflow-hidden rounded-2xl bg-[#3d2415] px-1.5 py-1 will-change-transform shadow-[0_18px_40px_-10px_rgba(61,36,21,0.45),0_0_0_1px_rgba(229,169,59,0.25),0_2px_4px_rgba(0,0,0,0.25)]"
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <img
          src={logo}
          alt="Big House"
          className="h-full w-full object-cover object-center rounded-xl"
        />
        {/* Subtle warm luxury sheen overlay */}
        <div
          className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-35 rounded-xl"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.45) 0%, transparent 45%, rgba(229,169,59,0.3) 100%)",
          }}
        />
      </div>
    </div>
  );
};

export default ParallaxLogo;
