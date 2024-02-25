"use client";
import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { AiOutlineEye } from "react-icons/ai";
import { PiEyeClosed } from "react-icons/pi";

interface PasswordInputProps {
  placeHolder: string;
  label: string;
  labelStyle?: React.CSSProperties;
  hookFormProps?: UseFormRegisterReturn<string>;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  placeHolder,
  label,
  labelStyle,
  hookFormProps,
}) => {
  const [passwordHide, setPasswordHide] = useState(true);

  return (
    <div className="w-full">
      <span className="pl-2 text-text text-sm font-bold " style={labelStyle}>
        {label}
      </span>
      <div className="bg-grayLight rounded-xl h-9 flex items-center justify-between relative">
        <input
          type={passwordHide ? "password" : "text"}
          className="bg-grayLight text-xs w-full bg-transparent h-9 focus:outline-none focus:border-none rounded-xl pl-3"
          placeholder={placeHolder}
          {...hookFormProps}
          autoComplete="current-password"
        />
        <div
          className="pr-3 cursor-pointer absolute right-3"
          onClick={() => setPasswordHide(!passwordHide)}
        >
          {passwordHide ? <PiEyeClosed /> : <AiOutlineEye />}
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;
