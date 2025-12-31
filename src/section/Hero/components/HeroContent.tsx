export const HeroContent = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-8 max-w-full mb-4 md:max-w-[80%] md:mb-0">
      <h1 className="text-[clamp(48px,10vw,128px)] font-semibold tracking-[-0.05em] leading-[0.92]">
        <span className="whitespace-nowrap">Scale Fast. Work</span>
        <br />
        <span className="whitespace-nowrap">Smart. Grow More.</span>
      </h1>
      <div className="w-full max-w-[450px]">
        <p className="text-[clamp(18px,2.5vw,24px)] font-semibold tracking-[-0.02em] leading-[1.3]">
          Top Filipino talent ready to{" "}
          <br />
          supercharge your business.
        </p>
      </div>
    </div>
  );
};
