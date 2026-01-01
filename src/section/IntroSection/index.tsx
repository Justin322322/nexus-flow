"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IntroVideo } from "@/section/IntroSection/components/IntroVideo";
import { AnimatedArrow } from "@/components/AnimatedArrow";

gsap.registerPlugin(ScrollTrigger);

// Role highlights configuration with plugin classes
const roleHighlights = [
  { text: "admin tasks", color: "highlight-orange-400", variant: "highlight-variant-1" },
  { text: "video editing", color: "highlight-purple-500", variant: "highlight-variant-1" },
  { text: "development", color: "highlight-green-500", variant: "highlight-variant-1" },
  { text: "customer support", color: "highlight-sky-500", variant: "highlight-variant-1" },
];

export const IntroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const highlights = highlightsRef.current.filter(Boolean) as HTMLElement[];
    if (!section || highlights.length === 0) return;

    const mm = gsap.matchMedia();

    mm.add({
      isMobile: "(max-width: 767px)",
      isDesktop: "(min-width: 768px)",
    }, (context) => {
      const { isMobile } = context.conditions as { isMobile: boolean };

      // Set initial state - hide all highlights
      highlights.forEach((highlight) => {
        gsap.set(highlight, { "--tw-highlight-progress": 0 });
      });

      // Create a timeline for the highlight animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: isMobile ? "top 60%" : "top 80%", // Delayed on mobile
          end: "top 20%",
          scrub: 1, // Smooth scrubbing tied to scroll
        },
      });

      // Animate each highlight sequentially across the scroll range
      highlights.forEach((highlight, index) => {
        tl.to(
          highlight,
          {
            "--tw-highlight-progress": 100,
            duration: 1,
            ease: "none",
          },
          index * 0.8 // Stagger offset in timeline
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={sectionRef} className="box-border caret-transparent py-16 md:py-24 lg:py-32">
      <div className="box-border caret-transparent w-full px-6 md:px-10 lg:px-16">
        <div className="box-border caret-transparent max-w-full w-full mx-auto md:max-w-[1920px]">
          <div className="box-border caret-transparent flex basis-[0%] flex-col grow auto-cols-[1fr] grid-cols-[1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] gap-y-0 w-full md:grid md:flex-row md:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] md:gap-y-[normal]">
            <div className="box-border caret-transparent col-end-13 col-start-1 row-end-2 row-start-1 mb-12 md:col-end-12 md:col-start-1 md:mb-20">
              <h2 className="text-[28px] font-semibold box-border caret-transparent tracking-[-1.5px] leading-[1.1] md:text-[64px] lg:text-[80px] md:tracking-[-3px] lg:tracking-[-4px] text-balance">
                We connect you with elite Filipino virtual assistants. From{" "}
                <span
                  ref={(el) => { highlightsRef.current[0] = el; }}
                  className="highlight highlight-orange-400 highlight-variant-1 highlight-spread-sm text-nowrap"
                >
                  admin tasks
                </span>{" "}
                to{" "}
                <span
                  ref={(el) => { highlightsRef.current[1] = el; }}
                  className="highlight highlight-purple-500 highlight-variant-1 highlight-spread-sm text-nowrap"
                >
                  video editing
                </span>
                ,{" "}
                <span
                  ref={(el) => { highlightsRef.current[2] = el; }}
                  className="highlight highlight-green-500 highlight-variant-1 highlight-spread-sm text-nowrap"
                >
                  development
                </span>{" "}
                to{" "}
                <span
                  ref={(el) => { highlightsRef.current[3] = el; }}
                  className="highlight highlight-sky-500 highlight-variant-1 highlight-spread-sm text-nowrap"
                >
                  customer support
                </span>
                . Your dedicated team, ready to deliver.
              </h2>
            </div>
            <IntroVideo />
            <div className="box-border caret-transparent block min-h-auto min-w-auto md:hidden md:min-h-0 md:min-w-0">
              <div className="box-border caret-transparent pb-12 md:pb-20"></div>
            </div>
            <div className="items-start self-center box-border caret-transparent gap-x-6 flex flex-col col-end-13 col-start-1 row-end-4 row-start-3 justify-start gap-y-6 md:self-end md:gap-x-6 md:col-end-10 md:col-start-5 md:row-end-2 md:row-start-2 md:gap-y-6">
              <p className="text-[22px] font-semibold box-border caret-transparent tracking-[-0.7px] leading-[1.4] md:text-[28px] lg:text-[32px] md:tracking-[-1px] lg:tracking-[-1.2px]">
                We don't just fill positions. We match you with pre-vetted professionals who understand your business. Save up to 70% on labor costs while getting world-class talent.
              </p>
              <div className="box-border caret-transparent flex ml-0 md:ml-[-10.6667px]">
                <a
                  href="/about"
                  className="relative group text-lg font-semibold content-center items-center box-border caret-transparent flex justify-center tracking-[-0.4px] max-w-full translate-x-[-16px] z-1 md:text-xl md:tracking-[-0.5px] md:transform-none"
                >
                  <div className="relative items-center box-border caret-transparent flex h-14 justify-center pl-5 py-4 md:h-16 md:pl-6">
                    <span className="absolute self-center bg-orange-50 box-border caret-transparent block h-full justify-self-center w-[calc(100%-10px)] z-[-1] border border-neutral-900 rounded-xl border-solid md:w-[calc(100%-12px)] md:rounded-2xl"></span>
                    <span className="box-border caret-transparent block text-nowrap ml-2 mr-4 md:ml-3 md:mr-5">
                      Learn more
                    </span>
                    <div className="relative text-orange-50 items-center bg-neutral-900 box-border caret-transparent flex shrink-0 h-11 justify-center w-11 rounded-xl md:h-14 md:w-14 md:rounded-2xl">
                      <AnimatedArrow direction="up-right" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="self-end box-border caret-transparent hidden col-end-13 col-start-12 row-end-2 row-start-1 justify-self-end min-h-0 min-w-0 md:block md:col-end-12 md:col-start-11 md:row-start-2 md:min-h-auto md:min-w-auto">
              <a
                href="#expertises"
                className="relative group text-lg font-semibold content-center items-center box-border caret-transparent flex justify-center tracking-[-0.4px] max-w-full z-1 md:text-xl md:tracking-[-0.5px]"
              >
                <div className="relative items-center box-border caret-transparent flex flex-col shrink-0 h-14 justify-end min-h-0 min-w-0 w-14 md:h-16 md:min-h-auto md:min-w-auto md:w-16">
                  <span className="absolute self-center box-border caret-transparent block h-full justify-self-center w-full z-[-1] border border-neutral-900 rounded-xl border-solid md:rounded-2xl"></span>
                  <div className="relative items-center box-border caret-transparent flex flex-col h-full justify-center min-h-0 min-w-0 w-full md:min-h-auto md:min-w-auto text-orange-600">
                    <AnimatedArrow direction="down" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
