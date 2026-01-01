"use client";

import { useState, useEffect } from "react";
import { NavbarLogo } from "@/section/Navbar/components/NavbarLogo";
import { DesktopMenu } from "@/section/Navbar/components/DesktopMenu";
import { MobileMenuToggle } from "@/section/Navbar/components/MobileMenuToggle";
import { MobileMenu } from "@/section/Navbar/components/MobileMenu";
import { MobileGetResultsButton } from "@/section/Navbar/components/MobileGetResultsButton";

export const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100 && !isMobileMenuOpen) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  return (
    <>
      <nav 
        className={`fixed w-full z-999 top-0 left-0 right-0 px-4 md:px-10 lg:px-16 pt-4 md:pt-6 transition-transform duration-300 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="flex items-center justify-between h-20 md:h-20 w-full max-w-[1920px] mx-auto">
          <NavbarLogo />
          <DesktopMenu />
          <MobileMenuToggle 
            isOpen={isMobileMenuOpen} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          />
          <div className="hidden md:block">
            <MobileGetResultsButton />
          </div>
        </div>
      </nav>
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};
