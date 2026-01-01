"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExpertiseCard } from "@/section/ExpertiseCarousel/components/ExpertiseCard";

gsap.registerPlugin(ScrollTrigger);

const expertiseData = [
  {
    index: 1,
    title: "Virtual Assistants",
    subtitle: "Your right hand, remotely.",
    description:
      "Admin support, email management, scheduling, and more. Our VAs handle the tasks that slow you down.",
    videoSrc: "https://gethyped.b-cdn.net/Expertises/Strategy comp.mp4",
    linkHref: "/services/virtual-assistants",
    linkText: "Explore VA services",
    bgColor: "bg-orange-400",
    numberColor: "text-orange-300",
  },
  {
    index: 2,
    title: "Video Editing",
    subtitle: "Content that captivates.",
    description:
      "From YouTube videos to social reels. Professional editors who bring your vision to life.",
    videoSrc: "https://gethyped.b-cdn.net/Expertises/Creative comp.mp4",
    linkHref: "/services/video-editing",
    linkText: "See video services",
    bgColor: "bg-purple-500",
    numberColor: "text-purple-400",
  },
  {
    index: 3,
    title: "Development",
    subtitle: "Code that delivers.",
    description:
      "Web development, app building, and technical solutions. Skilled developers at a fraction of the cost.",
    videoSrc: "https://gethyped.b-cdn.net/Expertises/Media comp.mp4",
    linkHref: "/services/development",
    linkText: "View dev services",
    bgColor: "bg-green-500",
    numberColor: "text-green-400",
  },
  {
    index: 4,
    title: "Specialized Roles",
    subtitle: "Talent for every niche.",
    description:
      "Graphic design, bookkeeping, customer support, social media management, and more specialized skills.",
    videoSrc: "https://gethyped.b-cdn.net/Expertises/Data comp.mp4",
    linkHref: "/services/specialized",
    linkText: "Discover more roles",
    bgColor: "bg-sky-500",
    numberColor: "text-sky-400",
  },
];

// Random fall directions - alternating left/right with varied angles
const fallDirections = [
  { rotateZ: -6, x: -80 },
  { rotateZ: 8, x: 100 },
  { rotateZ: -10, x: -120 },
  { rotateZ: 5, x: 60 },
];

export const ExpertiseCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardWrappersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const cardWrappers = cardWrappersRef.current.filter(Boolean) as HTMLDivElement[];
    if (!container || cardWrappers.length === 0) return;

    const ctx = gsap.context(() => {
      cardWrappers.forEach((wrapper, i) => {
        if (i === cardWrappers.length - 1) return;

        const nextWrapper = cardWrappers[i + 1];
        if (!nextWrapper) return;

        const fallDir = fallDirections[i % fallDirections.length];

        ScrollTrigger.create({
          trigger: nextWrapper,
          start: "top 80%",
          end: "top -20%",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            // Cubic easing for slow start, gradual acceleration
            const eased = progress * progress * progress;
            
            gsap.set(wrapper, {
              rotateX: eased * 45,
              rotateZ: eased * fallDir.rotateZ,
              x: eased * fallDir.x,
              y: eased * -150,
              scale: 1 - eased * 0.1,
              opacity: 1 - eased * 1.2,
              visibility: progress >= 0.95 ? "hidden" : "visible",
            });
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full relative"
      style={{ 
        perspective: "1200px",
        perspectiveOrigin: "center 40%",
      }}
    >
      {expertiseData.map((data, i) => (
        <div
          key={data.index}
          className="h-screen w-full sticky top-0"
          style={{ zIndex: i + 1 }}
        >
          <div 
            className="h-full w-full flex items-center justify-center px-3 md:px-6 py-4"
            style={{
              perspective: "1200px",
              perspectiveOrigin: "center 40%",
            }}
          >
            <div
              ref={(el) => {
                cardWrappersRef.current[i] = el;
              }}
              className="relative w-full max-w-[1920px] mx-auto h-[85vh] max-h-[900px] will-change-transform"
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "center bottom",
              }}
            >
              <ExpertiseCard {...data} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
