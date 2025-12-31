export const NavbarLogo = () => {
  return (
    <a
      aria-label="Home link"
      role="Link"
      href="/"
      className="relative text-[12.5261px] box-border caret-transparent flex items-center h-[46.9729px] leading-[18.7891px] max-w-full z-[1000] md:static md:text-[10.6667px] md:h-[50.6667px] md:leading-4 md:z-auto"
    >
      <div className="relative items-center bg-white box-border caret-transparent flex h-[40px] justify-center px-4 rounded-[10px] md:h-[44px] md:px-5 md:rounded-[12px]">
        <span className="font-inter font-bold text-xl md:text-2xl tracking-tight text-neutral-900">
          NexusFlow
        </span>
      </div>
    </a>
  );
};
