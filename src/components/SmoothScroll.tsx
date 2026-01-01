"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, // Lower = smoother/slower (default is 0.1)
      duration: 1.5, // Longer duration for smoother feel
      smoothWheel: true,
      wheelMultiplier: 0.8, // Reduce scroll speed slightly
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
