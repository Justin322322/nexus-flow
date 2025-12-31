export type FormFieldProps = {
  name: string;
  placeholder?: string;
  isRequired?: boolean;
  isOptional?: boolean;
  isTextarea?: boolean;
  containerClassName?: string;
  labelWrapperClassName?: string;
} & (
  | {
      isCheckbox: true;
      checkboxContent: React.ReactNode;
      label?: string;
      type?: string;
    }
  | {
      isCheckbox?: false;
      checkboxContent?: React.ReactNode;
      label: string;
      type: string;
    }
);

export const FormField = (props: FormFieldProps) => {
  const containerClass = `text-[12.5261px] items-start box-border caret-transparent gap-x-[9.39457px] flex flex-col leading-[18.7891px] gap-y-[9.39457px] w-full md:text-[10.6667px] md:gap-x-2 md:leading-4 md:gap-y-2${props.containerClassName ? ` ${props.containerClassName}` : ""}`;

  if (props.isCheckbox) {
    return (
      <div className={containerClass}>
        <div className="text-[12.5261px] box-border caret-transparent leading-[18.7891px] w-full md:text-[10.6667px] md:leading-4 relative gap-x-[9.39457px] flex flex-col gap-y-[9.39457px] md:gap-x-2 md:gap-y-2">
          <label className="box-border caret-transparent relative text-[12.5261px] font-bold items-start flex leading-[18.7891px] md:text-[10.6667px] md:leading-4 before:accent-auto before:caret-transparent before:text-neutral-900 before:table before:text-[12.5261px] before:not-italic before:normal-nums before:font-bold before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[18.7891px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter before:md:text-[10.6667px] before:md:leading-4 after:accent-auto after:caret-transparent after:clear-both after:text-neutral-900 after:table after:text-[12.5261px] after:not-italic after:normal-nums after:font-bold after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[18.7891px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:text-[10.6667px] after:md:leading-4">
            <input
              type="checkbox"
              name={props.name}
              className="absolute text-[12.5261px] bg-transparent box-border caret-transparent block h-0 leading-[normal] w-0 p-0 md:text-[10.6667px]"
            />
            <span className="text-stone-400 text-[12.5261px] font-normal box-border caret-transparent block grow leading-[15.0313px] mt-[1.56576px] pl-[25.0522px] md:text-[10.6667px] md:leading-[12.8px] md:mt-[1.33333px] md:pl-[21.3333px]">
              {props.checkboxContent}
            </span>
            <div className="absolute text-[12.5261px] items-center box-border caret-transparent flex h-[15.6576px] justify-center leading-[18.7891px] -order-1 pointer-events-none w-[15.6576px] border border-neutral-900 mr-[9.39457px] mt-[0.826722px] rounded-[3.13152px] border-solid md:text-[10.6667px] md:h-[13.3333px] md:leading-4 md:w-[13.3333px] md:mr-2 md:mt-[0.704px] md:rounded-[2.66667px]"></div>
          </label>
        </div>
      </div>
    );
  }

  const labelWrapperClass =
    props.labelWrapperClassName ||
    "text-[12.5261px] box-border caret-transparent leading-[18.7891px] w-full md:text-[10.6667px] md:leading-4 items-stretch flex justify-between";
  const hasLabelWrapper = props.isOptional;

  return (
    <div className={containerClass}>
      {hasLabelWrapper ? (
        <div className={labelWrapperClass}>
          <label className="box-border caret-transparent text-neutral-800 text-[10.9603px] font-medium block leading-[10.9603px] md:text-[9.33333px] md:leading-[9.33333px]">
            {props.label}
          </label>
          {props.isOptional && (
            <div className="text-neutral-800 text-[10.9603px] font-medium box-border caret-transparent leading-[10.9603px] opacity-40 md:text-[9.33333px] md:leading-[9.33333px]">
              Optioneel
            </div>
          )}
        </div>
      ) : (
        <label className="box-border caret-transparent text-neutral-800 text-[10.9603px] font-medium block leading-[10.9603px] md:text-[9.33333px] md:leading-[9.33333px]">
          {props.label}
        </label>
      )}

      <div
        className={
          props.isTextarea
            ? "text-[12.5261px] box-border caret-transparent leading-[18.7891px] w-full md:text-[10.6667px] md:leading-4 relative text-neutral-800 h-full"
            : "relative text-neutral-800 text-[12.5261px] box-border caret-transparent leading-[18.7891px] w-full md:text-[10.6667px] md:leading-4"
        }
      >
        {props.isTextarea ? (
          <textarea
            name={props.name}
            placeholder={props.placeholder}
            className="text-[12.5261px] font-medium bg-orange-50 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] box-border caret-transparent block h-full leading-[15.0313px] outline-transparent align-middle w-full border-stone-400 px-[12.5261px] py-[15.6576px] rounded-[4.11013px] md:text-[10.6667px] md:leading-[12.8px] md:pl-[10.6667px] md:pr-[37.3333px] md:py-[13.3333px] md:rounded-[3.5px]"
          />
        ) : (
          <input
            name={props.name}
            placeholder={props.placeholder}
            type={props.type}
            className="text-[12.5261px] font-medium bg-orange-50 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] box-border caret-transparent block leading-[15.0313px] outline-transparent align-middle w-full border border-stone-400 px-[12.5261px] py-[15.6576px] rounded-[4.11013px] border-solid md:text-[10.6667px] md:leading-[12.8px] md:pl-[10.6667px] md:pr-[37.3333px] md:py-[13.3333px] md:rounded-[3.5px]"
          />
        )}
      </div>
    </div>
  );
};
