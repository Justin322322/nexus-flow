"use client";

import { useEffect } from "react";
import Link from "next/link";
import { GetResultsButton } from "@/section/Navbar/components/GetResultsButton";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuItems = [
    { label: "Services", href: "/services" },
    { label: "Talent", href: "/talent" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div
      className={`fixed inset-0 z-1001 bg-orange-50 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Close Button positioned to match Navbar toggle */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 flex flex-col justify-center items-center bg-neutral-900 w-[44px] h-[44px] rounded-[10px] z-1002"
      >
        <div className="w-5 h-0.5 bg-white rounded-full rotate-45 translate-y-px" />
        <div className="w-5 h-0.5 bg-white rounded-full -rotate-45 -translate-y-px" />
      </button>

      <div className="flex flex-col h-full pt-28 px-6 pb-12 justify-between">
        <div className="flex flex-col gap-8">
          {menuItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="text-4xl font-semibold tracking-[-0.03em] text-neutral-900 active:text-orange-600 transition-colors"
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.4s cubic-bezier(0.32,0.72,0,1) ${0.4 + index * 0.1}s`, // Delayed start until menu is dropping
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        <div 
          className="w-full"
          style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.4s cubic-bezier(0.32,0.72,0,1) 0.8s", // Appears last
          }}
        >
          <GetResultsButton />
        </div>
      </div>
    </div>
  );
};
