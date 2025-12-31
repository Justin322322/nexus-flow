export const GetResultsButton = () => {
  return (
    <div className="text-[12.5261px] box-border caret-transparent block leading-[18.7891px] md:text-[10.6667px] md:hidden md:leading-4">
      <a
        href="#"
        className="group relative text-stone-50 text-2xl font-semibold content-center items-center box-border caret-transparent flex justify-center tracking-[-0.48px] leading-6 max-w-full origin-[50%_100%] z-[1] md:origin-[50%_50%]"
      >
        <div className="relative items-center box-border caret-transparent flex h-[40px] justify-center pl-[16px] py-4">
          <span 
            className="absolute self-center bg-neutral-900 box-border caret-transparent block h-full justify-self-center w-[calc(100%_-_10px)] z-[-1] rounded-[10px] md:bg-fuchsia-300"
          />
          <span className="block overflow-hidden h-[32px] ml-[4px] mr-[10px]">
            <span className="block transition-transform duration-[900ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-[32px]">
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
            <svg className="h-[16px] text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
};
