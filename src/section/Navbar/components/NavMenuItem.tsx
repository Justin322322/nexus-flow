export type NavMenuItemProps = {
  label: string;
  href: string;
};

export const NavMenuItem = (props: NavMenuItemProps) => {
  return (
    <a
      aria-label={`${props.label} link`}
      role="Link"
      href={props.href}
      className="font-semibold caret-transparent max-w-full opacity-0 md:text-2xl md:opacity-100 group relative overflow-hidden rounded-[10px]"
    >
      {/* Background layers */}
      <span className="absolute inset-0 bg-white rounded-[10px] overflow-hidden">
        {/* Orange layer - comes in first, leaves last */}
        <span className="absolute inset-0 bg-orange-600 origin-bottom-left transition-all duration-500 ease-out translate-y-full rotate-6 group-hover:translate-y-0 group-hover:rotate-0 group-hover:delay-0 delay-100"></span>
        {/* Black layer - comes in second, leaves first */}
        <span className="absolute inset-0 bg-neutral-900 origin-bottom-right transition-all duration-500 ease-out translate-y-full -rotate-4 group-hover:translate-y-0 group-hover:rotate-0 group-hover:delay-100 delay-0"></span>
      </span>

      {/* Text wrapper - fixed height with overflow hidden */}
      <span className="relative z-10 block px-[12px] h-[40px] overflow-hidden">
        {/* Text stack - both texts stacked vertically, moves up on hover */}
        <span className="block transition-transform duration-[900ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-[40px] group-hover:delay-0 delay-0">
          {/* First text - black */}
          <span className="flex items-center justify-center h-[40px] text-neutral-900">
            {props.label}
          </span>
          {/* Second text - white */}
          <span className="flex items-center justify-center h-[40px] text-white">
            {props.label}
          </span>
        </span>
      </span>
    </a>
  );
};
