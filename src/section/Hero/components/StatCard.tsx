"use client";

import { useState } from "react";

export type StatCardProps = {
  variant: string;
  statNumber: string;
  title: string;
  description: string;
};

export const StatCard = (props: StatCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative aspect-[4.8/6.2] overflow-hidden rounded-[24px] md:rounded-[32px] ${props.variant}`}
      style={{
        transition: isHovered 
          ? 'transform 0.3s ease-out' 
          : 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.5)',
        transform: isHovered ? 'rotate(0deg)' : undefined,
      }}
    >
      <div className="flex flex-col h-full justify-between w-full p-5 md:p-8">
        <div className="text-[clamp(40px,6vw,72px)] font-semibold tracking-[-0.04em] leading-[0.9]">
          {props.statNumber}
        </div>
        <div className="flex flex-col gap-2 md:gap-3 w-full">
          <h2 className="text-[clamp(14px,2vw,24px)] font-semibold tracking-[-0.02em] leading-tight">
            {props.title}
          </h2>
          <div className="bg-neutral-900 h-px w-full"></div>
          <p className="text-[clamp(12px,1.5vw,16px)] font-medium tracking-[-0.01em] leading-snug max-w-[95%]">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};
