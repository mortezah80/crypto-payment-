"use client";
import React from "react";
import { IoIosClose } from "react-icons/io";
interface AuthProps {
  label?: string;
  children: React.ReactNode;
  tailwindStyle?: string;
}
const ModalView: React.FC<AuthProps> = ({ label, children, tailwindStyle }) => {
  return (
    <div
      className={`${tailwindStyle}
        w-full bg-card shadow-[0px_30px_40px_0px_#0000001a]`}
    >
      <div className="flex items-center justify-between">
        {label && (
          <h2 className="text-primary text-[28px] font-bold">{label}</h2>
        )}
        <button className="bg-[#C2C2C2] flex items-center justify-center text-white rounded-full w-[20px] h-[20px] text-[30px]">
          <IoIosClose />
        </button>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ModalView;
