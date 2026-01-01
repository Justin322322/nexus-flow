"use client";

interface AnimatedArrowProps {
  direction: "up-right" | "down";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const AnimatedArrow = ({ 
  direction, 
  size = "md",
  className = "" 
}: AnimatedArrowProps) => {
  // Container sizes (for the animation box)
  const containerSizeClasses = {
    sm: "h-8 w-8",
    md: "h-11 w-11 md:h-14 md:w-14",
    lg: "h-14 w-14 md:h-16 md:w-16",
  };

  // Icon sizes (for the SVG)
  const iconSizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5 md:h-6 md:w-6",
    lg: "h-6 w-6 md:h-8 md:w-8",
  };

  const containerSize = containerSizeClasses[size];
  const iconSize = iconSizeClasses[size];

  // Up-Right arrow (diagonal)
  const UpRightArrow = () => (
    <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );

  // Down arrow
  const DownArrow = () => (
    <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );

  const Arrow = direction === "up-right" ? UpRightArrow : DownArrow;

  // Animation classes based on direction
  const exitTransform = direction === "up-right" 
    ? "group-hover:translate-x-[200%] group-hover:-translate-y-[200%]"
    : "group-hover:translate-y-[200%]";

  const enterStartTransform = direction === "up-right"
    ? "-translate-x-[200%] translate-y-[200%]"
    : "-translate-y-[200%]";

  return (
    <div className={`relative ${containerSize} flex items-center justify-center overflow-hidden ${className}`}>
      {/* First arrow - starts visible, exits on hover */}
      <div className={`transition-transform duration-300 ${exitTransform}`}>
        <Arrow />
      </div>
      {/* Second arrow - starts hidden, enters on hover */}
      <div className={`absolute inset-0 flex items-center justify-center ${enterStartTransform} transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0`}>
        <Arrow />
      </div>
    </div>
  );
};
