import { FormField } from "@/components/ContactModal/components/FormField";
import { SubmitButton } from "@/components/ContactModal/components/SubmitButton";

export const ContactForm = () => {
  return (
    <form
      name="wf-form-Default-Form"
      aria-label="Default Form"
      className="text-[12.5261px] box-border caret-transparent gap-x-[15.6576px] flex flex-col h-full leading-[18.7891px] gap-y-[15.6576px] w-full md:text-[10.6667px] md:gap-x-4 md:leading-4 md:gap-y-4"
    >
      <div className="text-[12.5261px] items-center box-border caret-transparent gap-x-[15.6576px] flex justify-between leading-[18.7891px] gap-y-[15.6576px] w-full md:text-[10.6667px] md:gap-x-[13.3333px] md:leading-4 md:gap-y-[13.3333px]">
        <FormField
          label="Voor- en achternaam *"
          name="Naam"
          placeholder="Wie ben je?"
          type="text"
        />
      </div>
      <div className="text-[12.5261px] items-center box-border caret-transparent gap-x-[15.6576px] flex justify-between leading-[18.7891px] gap-y-[15.6576px] w-full md:text-[10.6667px] md:gap-x-[13.3333px] md:leading-4 md:gap-y-[13.3333px]">
        <FormField
          label="E-mail *"
          name="E-mail"
          placeholder="Hoe kunnen we je bereiken?"
          type="email"
        />
      </div>
      <div className="text-[12.5261px] items-center box-border caret-transparent gap-x-[15.6576px] flex justify-between leading-[18.7891px] gap-y-[15.6576px] w-full md:text-[10.6667px] md:gap-x-[13.3333px] md:leading-4 md:gap-y-[13.3333px]">
        <FormField
          label="Telefoonnummer"
          name="Telefoonnummer"
          placeholder="Je telefoonnummer (als je liever belt dan mailt)"
          type="tel"
          isOptional={true}
        />
      </div>
      <FormField
        label="Bericht *"
        name="Bericht"
        placeholder="Vertel ons wat je zoekt (of gewoon iets leuks)."
        type="text"
        isTextarea={true}
      />
      <div className="text-[12.5261px] items-start box-border caret-transparent gap-x-[9.39457px] flex flex-col leading-[18.7891px] gap-y-[9.39457px] w-full md:text-[10.6667px] md:gap-x-2 md:leading-4 md:gap-y-2">
        <div className="text-[12.5261px] bg-neutral-900 box-border caret-transparent h-px leading-[18.7891px] opacity-15 w-full md:text-[10.6667px] md:leading-4"></div>
      </div>
      <div className="text-[12.5261px] items-center box-border caret-transparent gap-x-[15.6576px] flex justify-between leading-[18.7891px] gap-y-[15.6576px] w-full md:text-[10.6667px] md:gap-x-[13.3333px] md:leading-4 md:gap-y-[13.3333px]">
        <FormField
          isCheckbox={true}
          name="Privacyvoorwaarden"
          checkboxContent={
            <>
              Ik accepteer de{" "}
              <span className="text-[12.5261px] box-border caret-transparent leading-[15.0313px] underline md:text-[10.6667px] md:leading-[12.8px] hover:text-neutral-800 hover:border-neutral-800">
                Privacyvoorwaarden
              </span>
              <span className="text-orange-600 text-[12.5261px] box-border caret-transparent leading-[15.0313px] md:text-[10.6667px] md:leading-[12.8px]">
                *
              </span>
            </>
          }
        />
      </div>
      <div className="text-[12.5261px] items-start box-border caret-transparent gap-x-[12.5261px] flex flex-col justify-start leading-[18.7891px] gap-y-[12.5261px] w-full md:text-[10.6667px] md:items-center md:gap-x-[13.3333px] md:flex-row md:leading-4 md:gap-y-[13.3333px]">
        <div className="text-[12.5261px] items-start box-border caret-transparent gap-x-[9.39457px] flex flex-col leading-[18.7891px] gap-y-[9.39457px] md:text-[10.6667px] md:gap-x-2 md:leading-4 md:gap-y-2">
          <div className="relative text-neutral-800 text-[12.5261px] box-border caret-transparent leading-[18.7891px] md:text-[10.6667px] md:leading-4">
            <div className="relative text-[12.5261px] items-center shadow-[rgba(0,0,0,0)_0px_0px_0px_0px_inset] box-border caret-transparent flex justify-end leading-[18.7891px] outline-transparent ml-0 pr-[25.0522px] md:text-[10.6667px] md:leading-4 md:-ml-4 md:pr-[21.3333px]">
              <SubmitButton />
            </div>
          </div>
        </div>
        <div className="text-[15.6576px] font-bold box-border caret-transparent tracking-[-0.469729px] leading-[21.9207px] md:text-[13.3333px] md:tracking-[-0.4px] md:leading-[18.6667px]">
          Of bel{" "}
          <a
            href="tel://+31615337496"
            className="text-orange-600 text-[15.6576px] box-border caret-transparent tracking-[-0.469729px] leading-[21.9207px] md:text-[13.3333px] md:tracking-[-0.4px] md:leading-[18.6667px] hover:underline"
          >
            +31 6 1533 7496
          </a>
        </div>
      </div>
    </form>
  );
};
