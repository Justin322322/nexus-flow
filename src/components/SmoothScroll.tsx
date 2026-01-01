"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "lenis";

export const LenisContext = createContext<Lenis | null>(null);

export const useLenis = () => {
  return useContext(LenisContext);
};

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      lerp: 0.08, // Lower = smoother/slower (default is 0.1)
      duration: 1.5, // Longer duration for smoother feel
      smoothWheel: true,
      wheelMultiplier: 0.8, // Reduce scroll speed slightly
    });

    setLenis(lenisInstance);

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
      setLenis(null);
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
};
