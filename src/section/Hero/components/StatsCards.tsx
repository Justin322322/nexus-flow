"use client";

import { useState } from "react";

export const StatsCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getTransform = (index: number, defaultRotate: string, defaultTranslateY: string) => {
    if (hoveredIndex === null) {
      return `rotate(${defaultRotate}) translateY(${defaultTranslateY})`;
    }
    if (hoveredIndex === index) {
      return `rotate(0deg) translateY(${defaultTranslateY}) scale(1.02)`;
    }
    // Push cards away from hovered card
    const direction = index < hoveredIndex ? -1 : 1;
    const offset = direction * 200;
    return `rotate(${defaultRotate}) translateY(${defaultTranslateY}) translateX(${offset}px)`;
  };

  const getZIndex = (index: number, defaultZ: number) => {
    if (hoveredIndex === index) return 10;
    return defaultZ;
  };

  const cardBase = "relative aspect-[4.8/6.2] overflow-hidden rounded-[48px] md:rounded-[64px] flex-1 max-w-[570px] transition-transform duration-500 ease-[cubic-bezier(0.34,1.2,0.64,1)] cursor-pointer will-change-transform";

  return (
    <div className="flex justify-center w-full pt-8 md:pt-12 lg:pt-16 gap-0 max-w-[2400px] mx-auto">
      {/* Card 1 - Blue stat */}
      <div
        className={`${cardBase} bg-sky-500`}
        style={{ transform: getTransform(0, "9deg", "3%"), zIndex: getZIndex(0, 0) }}
        onMouseEnter={() => setHoveredIndex(0)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <div className="flex flex-col h-full justify-between w-full p-6 md:p-10">
          <div className="text-[clamp(56px,8vw,96px)] font-semibold tracking-[-0.04em] leading-[0.9]">500+</div>
          <div className="flex flex-col gap-3 md:gap-4 w-full">
            <h2 className="text-[clamp(18px,2.5vw,32px)] font-semibold tracking-[-0.02em] leading-tight">Skilled VAs</h2>
            <div className="bg-neutral-900 h-px w-full"></div>
            <p className="text-[clamp(14px,2vw,20px)] font-medium tracking-[-0.01em] leading-snug max-w-[95%]">Pre-vetted Filipino professionals</p>
          </div>
        </div>
      </div>

      {/* Card 2 - Video */}
      <div
        className={`${cardBase} bg-orange-50 -ml-6 md:-ml-20 lg:-ml-28`}
        style={{ transform: getTransform(1, "-8deg", "2%"), zIndex: getZIndex(1, 1) }}
        onMouseEnter={() => setHoveredIndex(1)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <video
          muted
          loop
          playsInline
          autoPlay
          src="https://gethyped.b-cdn.net/Salontopper/Loop Salontopper.mp4"
          className="absolute h-full object-cover w-full inset-0 pointer-events-none"
        />
      </div>

      {/* Card 3 - Green stat */}
      <div
        className={`${cardBase} bg-emerald-400 hidden md:block -ml-6 md:-ml-20 lg:-ml-28`}
        style={{ transform: getTransform(2, "3deg", "-0.5%"), zIndex: getZIndex(2, 2) }}
        onMouseEnter={() => setHoveredIndex(2)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <div className="flex flex-col h-full justify-between w-full p-6 md:p-10">
          <div className="text-[clamp(56px,8vw,96px)] font-semibold tracking-[-0.04em] leading-[0.9]">150+</div>
          <div className="flex flex-col gap-3 md:gap-4 w-full">
            <h2 className="text-[clamp(18px,2.5vw,32px)] font-semibold tracking-[-0.02em] leading-tight">Happy Clients</h2>
            <div className="bg-neutral-900 h-px w-full"></div>
            <p className="text-[clamp(14px,2vw,20px)] font-medium tracking-[-0.01em] leading-snug max-w-[95%]">From startups to enterprises</p>
          </div>
        </div>
      </div>

      {/* Card 4 - Video */}
      <div
        className={`${cardBase} bg-orange-50 hidden md:block -ml-6 md:-ml-20 lg:-ml-28`}
        style={{ transform: getTransform(3, "-2.5deg", "-2%"), zIndex: getZIndex(3, 3) }}
        onMouseEnter={() => setHoveredIndex(3)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <video
          muted
          loop
          playsInline
          autoPlay
          src="https://gethyped.b-cdn.net/Petrol Head/petrolhead-loop.mp4"
          className="absolute h-full object-cover w-full inset-0 pointer-events-none"
        />
      </div>
    </div>
  );
};
