import { ChevronRight } from "lucide-react";
import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const ReadMoreButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="group flex items-center text-xl gap-1">
      <span>{text}</span>
      <ChevronRight className="transition-all duration-10 group-hover:translate-x-2 ease-in" />
    </button>
  );
};

export default ReadMoreButton;
