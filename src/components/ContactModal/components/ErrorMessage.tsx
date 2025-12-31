export const ErrorMessage = () => {
  return (
    <div
      role="region"
      aria-label="Default Form failure"
      className="absolute text-orange-600 text-[12.5261px] bg-orange-50 box-border caret-transparent hidden leading-[18.7891px] outline-transparent text-center w-full pl-[14.0919px] pr-[43.8413px] py-[14.0919px] inset-[0%] md:text-[10.6667px] md:leading-4 md:pl-3 md:pr-[37.3333px] md:py-3"
    >
      <div className="text-neutral-800 text-[12.5261px] items-center box-border caret-transparent gap-x-[18.7891px] flex flex-col h-full justify-center leading-[18.7891px] gap-y-[18.7891px] w-full py-[125.261px] md:text-[10.6667px] md:gap-x-4 md:leading-4 md:gap-y-4 md:py-[106.667px]">
        <div className="absolute text-[12.5261px] bg-neutral-800 box-border caret-transparent flex leading-[18.7891px] opacity-10 pointer-events-none rounded-bl rounded-br rounded-tl rounded-tr inset-0 md:text-[10.6667px] md:leading-4"></div>
        <div className="text-[14.0919px] box-border caret-transparent leading-[21.1378px] md:text-xs md:leading-[18px]">
          Something went wrong while submitting.
        </div>
      </div>
      <div className="absolute text-[12.5261px] items-center box-border caret-transparent flex justify-center leading-[18.7891px] pointer-events-none w-[43.8413px] px-[12.5261px] right-0 top-2/4 md:text-[10.6667px] md:leading-4 md:w-[37.3333px] md:px-[10.6667px]">
        <svg className="w-full h-4 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      </div>
    </div>
  );
};
