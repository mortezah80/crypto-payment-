import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  tailwindStyle: string;
  label: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>> | IconType;
  onClick?: any;
}

const CustomButton: React.FC<ButtonProps> = (props) => {
  const Icon = props.Icon;
  return (
    <button
      onClick={props.onClick}
      className={`bg-primary flex item-center justify-center space-x-1 text-center hover:bg-card_light hover:text-primary transition text-white shadow-[0px_10px_20px_0px_#1093ff33] 
      ${props.tailwindStyle}`}
    >
      {Icon && <Icon className="text-[20px]" />}
      <span>{props.label}</span>
    </button>
  );
};

export default CustomButton;
