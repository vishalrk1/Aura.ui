import { twMerge } from "tailwind-merge";

interface NormalButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

const NormalButton: React.FC<NormalButtonProps> = ({
  onClick,
  children,
  className,
  disabled,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        `relative z-0 flex items-center justify-center gap-2 overflow-hidden rounded-full border-[1px] w-56 
        bg-[#191e1f] border-[#292d2e] px-4 py-3.5 font-semibold
        capitalize text-white-a12 transition-transform duration-300
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}
        active:scale-95`,
        className,
      )}
    >
      {children}
    </button>
  );
};

export default NormalButton;
