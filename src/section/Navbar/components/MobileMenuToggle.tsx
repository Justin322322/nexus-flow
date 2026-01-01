interface MobileMenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MobileMenuToggle = ({ isOpen, onClick }: MobileMenuToggleProps) => {
  return (
    <button 
      onClick={onClick}
      className={`relative flex flex-col justify-center items-center bg-fuchsia-300 w-[44px] h-[44px] rounded-[10px] md:hidden z-1002 transition-colors duration-300 ${isOpen ? 'bg-neutral-900' : 'bg-fuchsia-300'}`}
    >
      <div className={`w-5 h-0.5 bg-neutral-900 rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-px bg-white' : '-translate-y-1'}`} />
      <div className={`w-5 h-0.5 bg-neutral-900 rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-px bg-white' : 'translate-y-1'}`} />
    </button>
  );
};
