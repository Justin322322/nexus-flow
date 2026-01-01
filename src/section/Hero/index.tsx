import { HeroContent } from "@/section/Hero/components/HeroContent";
import { StatsCards } from "@/section/Hero/components/StatsCards";

export const Hero = () => {
  return (
    <header className="relative w-full">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="w-full">
          <div className="pt-28 pb-8 md:pt-36 md:pb-12 lg:pt-40 lg:pb-16">
            <HeroContent />
            <div className="flex items-center justify-center w-full">
              <div className="w-full">
                <StatsCards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
