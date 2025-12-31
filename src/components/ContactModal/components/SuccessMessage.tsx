export const SuccessMessage = () => {
  return (
    <div
      role="region"
      aria-label="Default Form success"
      className="absolute text-[12.5261px] bg-orange-50 box-border caret-transparent hidden leading-[18.7891px] outline-transparent text-center w-full p-[14.0919px] inset-[0%] md:text-[10.6667px] md:leading-4 md:p-3"
    >
      <div className="text-neutral-800 text-[12.5261px] items-center box-border caret-transparent gap-x-[18.7891px] flex flex-col h-full justify-center leading-[18.7891px] gap-y-[18.7891px] w-full py-[125.261px] md:text-[10.6667px] md:gap-x-4 md:leading-4 md:gap-y-4 md:py-[106.667px]">
        <div className="text-[12.5261px] box-border caret-transparent leading-[18.7891px] max-w-none w-full md:text-[10.6667px] md:leading-4 md:max-w-[298.667px]">
          <h1 className="text-[37.5783px] font-semibold box-border caret-transparent tracking-[-0.751566px] leading-[33.8205px] md:text-[42.6667px] md:tracking-[-0.853333px] md:leading-[38.4px]">
            Thanks for your message!
          </h1>
        </div>
        <div className="text-[12.5261px] box-border caret-transparent leading-[18.7891px] max-w-none w-full md:text-[10.6667px] md:leading-4 md:max-w-[302.517px]">
          <div className="text-[14.0919px] box-border caret-transparent leading-[21.1378px] md:text-xs md:leading-[18px]">
            We received your message and will get back to you soon. Let's build something great together! 🚀
            <br className="text-[14.0919px] box-border caret-transparent leading-[21.1378px] md:text-xs md:leading-[18px]" />
          </div>
        </div>
        <div className="relative text-[12.5261px] items-center box-border caret-transparent flex justify-center leading-[18.7891px] pointer-events-none w-[43.8413px] px-[12.5261px] md:text-[10.6667px] md:leading-4 md:w-[37.3333px] md:px-[10.6667px]">
          <svg className="w-full h-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
      </div>
    </div>
  );
};
