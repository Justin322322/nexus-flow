import { AnimatedArrow } from "@/components/AnimatedArrow";

export const GetResultsButton = () => {
  return (
    <div className="text-[12.5261px] box-border caret-transparent block leading-[18.7891px] md:text-[10.6667px] md:hidden md:leading-4">
      <a
        href="#"
        className="group relative text-stone-50 text-2xl font-semibold content-center items-center box-border caret-transparent flex justify-center tracking-[-0.48px] leading-6 max-w-full origin-[50%_100%] z-1 md:origin-[50%_50%]"
      >
        <div className="relative items-center box-border caret-transparent flex h-[40px] justify-center pl-[16px] py-4">
          <span 
            className="absolute self-center bg-neutral-900 box-border caret-transparent block h-full justify-self-center w-[calc(100%-10px)] z-[-1] rounded-[10px] md:bg-fuchsia-300"
          />
          <span className="block overflow-hidden h-[32px] ml-[4px] mr-[10px]">
            <span className="block transition-transform duration-900 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-[32px]">
              <span className="flex items-center justify-center h-[32px]">
                Hire Now
              </span>
              <span className="flex items-center justify-center h-[32px]">
                Hire Now
              </span>
            </span>
          </span>
          <div 
            className="relative text-orange-600 items-center bg-stone-50 box-border caret-transparent flex shrink-0 h-[32px] justify-center w-[32px] rounded-[8px]"
          >
            <AnimatedArrow direction="up-right" size="sm" />
          </div>
        </div>
      </a>
    </div>
  );
};
