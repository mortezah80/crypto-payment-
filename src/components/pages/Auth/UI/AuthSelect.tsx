"use client";
import { useState } from "react";
import { IconType } from "react-icons";
import { FiChevronDown } from "react-icons/fi";
interface AuthInputProps {
  Icon?: React.FC<React.SVGProps<SVGSVGElement>> | IconType;
  defaultValue: number;
  label: string;
  error?: string;
  options: string[];
  gray?: boolean;
  disable?: boolean;
  labelStyle?: React.CSSProperties;
  row?: boolean;
}
const AuthSelect: React.FC<AuthInputProps> = ({
  Icon,
  label,
  labelStyle,
  options,
  defaultValue,
  disable,
  error,
  row,
}) => {
  const [select, setSelect] = useState(defaultValue);
  return (
    <div
      className={`w-full cursor-pointer ${
        row ? "flex items-center space-x-[7px]" : ""
      } ${disable ? "text-[#C2C2C2]" : "text-text"}
      `}
    >
      <span
        className="pl-2 text-grayText text-[14px] font-bold"
        style={labelStyle}
      >
        {label}
      </span>
      <div
        className={`${
          disable ? "bg-[#E9E9E9]" : "bg-grayLight"
        } bg-grayLight rounded-[12px] px-[12px] h-[36px] flex items-center justify-between`}
      >
        <span className="w-full text-[14px] font-bold bg-transparent focus:outline-none focus:border-none">
          {options[select]}
        </span>
        <div>
          <FiChevronDown />
        </div>
      </div>
      {error && (
        <div className="text-[#F33131] text-[12px] font-bold pl-3">
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default AuthSelect;
