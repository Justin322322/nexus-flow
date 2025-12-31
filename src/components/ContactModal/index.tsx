import { ContactForm } from "@/components/ContactModal/components/ContactForm";
import { SuccessMessage } from "@/components/ContactModal/components/SuccessMessage";
import { ErrorMessage } from "@/components/ContactModal/components/ErrorMessage";
import { CloseButton } from "@/components/ContactModal/components/CloseButton";

export const ContactModal = () => {
  return (
    <div className="fixed text-[12.5261px] bg-transparent box-border caret-transparent hidden h-[1000px] leading-[18.7891px] w-screen z-[2147483647] right-[0%] inset-y-[0%] md:text-[10.6667px] md:leading-4 md:z-[2000]">
      <div className="absolute text-[12.5261px] bg-orange-50 box-border caret-transparent gap-x-[18.7891px] flex flex-col h-full leading-[18.7891px] gap-y-[18.7891px] w-full z-[1] pt-[62.6305px] pb-[37.5783px] px-[25.0522px] right-[0%] inset-y-[0%] md:text-[10.6667px] md:gap-x-[21.3333px] md:leading-4 md:gap-y-[21.3333px] md:w-6/12 md:pt-[85.3333px] md:pb-[42.6667px] md:px-[53.3333px]">
        <h2 className="text-[31.3152px] font-semibold box-border caret-transparent tracking-[-1.25261px] leading-[31.3152px] md:text-[53.3333px] md:tracking-[-2.13333px] md:leading-[53.3333px]">
          Leave us a message
        </h2>
        <div className="text-[12.5261px] box-border caret-transparent gap-x-[18.7891px] flex flex-col h-full leading-[18.7891px] gap-y-[18.7891px] w-full md:text-[10.6667px] md:gap-x-4 md:leading-4 md:gap-y-4">
          <ContactForm />
          <SuccessMessage />
          <ErrorMessage />
        </div>
        <div className="absolute text-[12.5261px] items-center box-border caret-transparent flex justify-center leading-[18.7891px] origin-[100%_0px] z-[99] right-[18.7891px] top-[25.0522px] md:text-[10.6667px] md:leading-4 md:right-[37.3333px] md:top-[21.3333px]">
          <CloseButton />
        </div>
      </div>
      <div className="absolute text-[12.5261px] box-border caret-transparent hidden h-full leading-[18.7891px] w-6/12 z-0 left-[0%] inset-y-[0%] md:text-[10.6667px] md:block md:leading-4 md:z-[1]"></div>
    </div>
  );
};
