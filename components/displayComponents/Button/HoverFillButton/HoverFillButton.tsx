interface HoverButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const HoverFillButton: React.FC<HoverButtonProps> = ({ onClick, children }) => {
  return (
    <button
      type="button"
      className='relative z-0 flex items-center justify-center gap-2 overflow-hidden rounded-full border-[1px] w-56 
        bg-[#191e1f] border-2 border-[#292d2e] px-4 py-3.5 font-semibold
        capitalize text-white-a12 transition-all duration-500
                
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-white-a12
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:scale-105 hover:text-black-a12
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95'
    >
      {children}
    </button>
  );
};

export default HoverFillButton;
