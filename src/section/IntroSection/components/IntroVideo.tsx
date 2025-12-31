export const IntroVideo = () => {
  return (
    <div className="relative aspect-[3_/_4] box-border caret-transparent col-end-13 col-start-1 row-end-3 row-start-2 translate-x-5 rotate-[3deg] w-[320px] overflow-hidden rounded-[20px] md:col-end-4 md:transform-none md:w-auto md:rounded-[24px] lg:rounded-[32px]">
      <div className="box-border caret-transparent block md:hidden">
        <video
          muted
          loop
          playsInline
          src="https://gethyped.b-cdn.net/New Reach/new-reach-loop.mp4"
          autoPlay
          className="absolute box-border caret-transparent h-full object-cover w-full inset-[0%]"
        ></video>
      </div>
      <div className="box-border caret-transparent hidden md:block">
        <div className="absolute box-border caret-transparent h-full w-full inset-[0%] bg-gradient-to-br from-orange-200 to-orange-400" />
      </div>
    </div>
  );
};
