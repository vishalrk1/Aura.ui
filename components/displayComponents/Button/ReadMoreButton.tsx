import type React from "react";

import { ChevronRight } from "lucide-react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const ReadMoreButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="group flex items-center gap-1 text-xl">
      <span>{text}</span>
      <ChevronRight className="transition-all duration-10 ease-in group-hover:translate-x-2" />
    </button>
  );
};

export default ReadMoreButton;
