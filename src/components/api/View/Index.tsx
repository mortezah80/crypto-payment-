import React from "react";
import { IoCloseOutline } from "react-icons/io5";
interface AuthProps {
  label?: string;
  children: React.ReactNode;
  tailwindStyle?: string;
}
const ModalView: React.FC<AuthProps> = ({ label, children, tailwindStyle }) => {
  return (
    <div
      className={`${tailwindStyle} rounded-[18px] z-30 bg-card shadow-[0px_30px_50px_0px_#0000001a]`}
    >
      <div
        className={`flex items-center ${
          label ? "justify-between" : "justify-center"
        }`}
      >
        {label && (
          <h2 className="text-primary text-[28px] font-bold">{label}</h2>
        )}
        <button className="bg-[#C2C2C2] rounded-full text-white w-[28px] h-[28px] flex items-center justify-center">
          <IoCloseOutline />
        </button>
      </div>
      <div className="w-full border-b border-[#E1E1E1] py-[0px]"></div>
      <div className="space-y-[17px]">{children}</div>
    </div>
  );
};

export default ModalView;
