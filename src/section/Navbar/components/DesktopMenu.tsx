import { NavMenuItem } from "@/section/Navbar/components/NavMenuItem";
import { GetResultsButton } from "@/section/Navbar/components/GetResultsButton";

export const DesktopMenu = () => {
  return (
    <div className="fixed text-[12.5261px] items-center bg-transparent box-border caret-transparent gap-x-[6.26305px] hidden flex-col h-[1000px] justify-center leading-[18.7891px] gap-y-[6.26305px] transform-none w-full overflow-hidden p-[6.26305px] rounded-none inset-[0%] md:absolute md:text-[10.6667px] md:[align-items:normal] md:bg-white md:gap-x-[6px] md:flex md:flex-row md:h-auto md:justify-normal md:leading-4 md:gap-y-[6px] md:translate-x-[-50.0%] md:w-auto md:p-[6px] md:rounded-[16px] md:left-2/4 md:right-auto md:inset-y-auto">
      <NavMenuItem label="Services" href="/services" />
      <NavMenuItem label="Talent" href="/talent" />
      <NavMenuItem label="About" href="/about" />
      <NavMenuItem label="Contact" href="/contact" />
      <div className="absolute text-[12.5261px] items-center box-border caret-transparent flex justify-center leading-[18.7891px] min-h-0 min-w-0 pb-[37.5783px] bottom-[0%] inset-x-[0%] md:static md:text-[10.6667px] md:[align-items:normal] md:block md:justify-normal md:leading-4 md:min-h-[auto] md:min-w-[auto] md:pb-0 md:bottom-auto md:inset-x-auto">
        <GetResultsButton />
      </div>
      <div className="absolute text-[12.5261px] bg-fuchsia-300 box-border caret-transparent block h-[calc(100%_-_25.0522px)] leading-[18.7891px] w-[125%] z-[-1] overflow-hidden rounded-[12.5261px] md:static md:text-[10.6667px] md:bg-transparent md:hidden md:h-auto md:leading-4 md:w-auto md:z-auto md:overflow-visible md:rounded-none"></div>
      <div className="absolute text-[12.5261px] bg-orange-50 box-border caret-transparent block h-[1000px] leading-[18.7891px] w-full z-[-2] inset-[0%] md:static md:text-[10.6667px] md:bg-transparent md:hidden md:h-auto md:leading-4 md:w-auto md:z-auto md:inset-auto"></div>
    </div>
  );
};
