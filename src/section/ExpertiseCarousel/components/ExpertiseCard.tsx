"use client";

import { forwardRef } from "react";

interface ExpertiseCardProps {
  index: number;
  title: string;
  subtitle: string;
  description: string;
  videoSrc: string;
  linkHref: string;
  linkText: string;
  bgColor: string;
  numberColor: string;
}

export const ExpertiseCard = forwardRef<HTMLDivElement, ExpertiseCardProps>(
  (
    {
      index,
      title,
      subtitle,
      description,
      videoSrc,
      linkHref,
      linkText,
      bgColor,
      numberColor,
    },
    ref
  ) => {
    const formattedIndex = String(index).padStart(2, "0");

    return (
      <div
        ref={ref}
        className={`absolute inset-0 ${bgColor} box-border caret-transparent gap-x-8 flex flex-col justify-between gap-y-8 overflow-hidden p-8 rounded-[25px] md:gap-x-[normal] md:gap-y-[normal] md:p-16 md:rounded-[32px]`}
      >
        <div className="relative items-start box-border caret-transparent gap-x-6 flex flex-col justify-start gap-y-6 md:gap-x-8 md:gap-y-8">
          <div className="text-base items-center bg-white box-border caret-transparent flex h-10 justify-center px-4 rounded-lg md:h-12 md:px-5 md:rounded-xl md:text-lg">
            <div className="text-xl font-medium box-border caret-transparent tracking-[-0.6px] md:text-2xl md:tracking-[-0.72px]">
              Services
            </div>
          </div>
          <h2 className="text-[80px] font-semibold box-border caret-transparent tracking-[-4px] leading-[0.95] md:text-[170px] md:tracking-[-8.5px]">
            {title}
          </h2>
          <div
            className={`absolute ${numberColor} box-border caret-transparent flex right-[0%] top-[0%]`}
          >
            <div className="text-[80px] font-semibold box-border caret-transparent tracking-[-4px] leading-[0.95] md:text-[170px] md:tracking-[-8.5px]">
              {formattedIndex[0]}
            </div>
            <div className="text-[80px] font-semibold box-border caret-transparent tracking-[-4px] leading-[0.95] md:text-[170px] md:tracking-[-8.5px]">
              {formattedIndex[1]}
            </div>
          </div>
        </div>
        <div className="static aspect-[3_/_4] bg-white box-border caret-transparent rotate-[-2deg] origin-[0px_0px] w-[180px] z-[-1] p-1.5 rounded-[20px] right-auto inset-y-0 md:absolute md:aspect-auto md:rotate-[2.5deg] md:origin-[50%_50%] md:w-auto md:z-auto md:p-3 md:rounded-[24px] md:right-16 md:top-auto md:bottom-16">
          <div className="relative aspect-[3_/_4] box-border caret-transparent h-full w-full overflow-hidden rounded-[16px] md:h-auto md:w-80 md:rounded-[18px]">
            <video
              muted
              loop
              playsInline
              src={videoSrc}
              autoPlay
              className="absolute box-border caret-transparent h-full object-cover w-full inset-[0%]"
            />
          </div>
        </div>
        <div className="relative items-start box-border caret-transparent gap-x-5 flex flex-col shrink-0 justify-start max-w-full gap-y-5 z-[2] md:gap-x-6 md:shrink md:max-w-[550px] md:gap-y-6">
          <h3 className="text-[32px] font-semibold box-border caret-transparent tracking-[-1px] leading-[1.1] md:text-[42px] md:tracking-[-1.3px]">
            {subtitle}
          </h3>
          <p className="text-[24px] font-medium box-border caret-transparent tracking-[-0.7px] leading-[1.3] md:text-[32px] md:tracking-[-1px]">
            {description}
          </p>
          <div className="box-border caret-transparent flex ml-0 md:ml-[-10.6667px]">
            <a
              href={linkHref}
              className="relative text-xl font-semibold content-center items-center box-border caret-transparent flex justify-center tracking-[-0.4px] max-w-full translate-x-[-16px] z-[1] md:text-2xl md:tracking-[-0.5px] md:transform-none"
            >
              <div className="relative items-center box-border caret-transparent flex h-14 justify-center pl-5 py-4 md:h-16 md:pl-6">
                <span className="absolute self-center bg-white box-border caret-transparent block h-full justify-self-center w-[calc(100%_-_10px)] z-[-1] rounded-xl md:w-[calc(100%_-_12px)] md:rounded-2xl" />
                <span className="box-border caret-transparent block text-nowrap ml-2 mr-4 md:ml-3 md:mr-5">
                  {linkText}
                </span>
                <div className="relative text-white items-center bg-neutral-900 box-border caret-transparent flex shrink-0 h-11 justify-center w-11 rounded-xl md:h-14 md:w-14 md:rounded-2xl">
                  <svg className="h-5 md:h-6 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
        <a
          aria-label="Expertise link"
          role="link"
          href={linkHref}
          className="absolute box-border caret-transparent block h-full max-w-full w-full z-[1] inset-[0%]"
        />
      </div>
    );
  }
);

ExpertiseCard.displayName = "ExpertiseCard";
