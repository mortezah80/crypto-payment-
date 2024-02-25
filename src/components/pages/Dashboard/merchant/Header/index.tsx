import React, { FC } from "react";
import { BiSolidChevronDown } from "react-icons/bi";
import { HiOutlineBell } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { LiaWalletSolid } from "react-icons/lia";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <div className="items-center justify-between pt-6 hidden xl:flex pl-5">
      <span className="text-[28px] font-[700]">{title}</span>
      <div className="flex items-center justify-between">
        <div className="bg-card flex items-center justify-center border-[1px] border-[#E1E1E1] border-solid rounded-[12px] w-[170px] h-[40px]">
          <div className="flex items-center justify-center">
            <LiaWalletSolid />
          </div>
          <span className="flex items-center justify-center text-[14px] font-[700] ml-[3px]">
            Personal wallet
          </span>
        </div>
        <div className="border-r-[1px] p-r-4 border-[#E1E1E1] border-solid h-[39px] mx-[10px]"></div>
        <div className="font-[700] px-[5px] w-[81px] h-[40px] bg-card_shade rounded-[12px] flex items-center justify-between">
          <div></div>
          <span>eng</span>
          <div>
            <BiSolidChevronDown />
          </div>
        </div>
        <div className="relative text-[23px] w-[40px] h-[40px] bg-card_shade rounded-[12px] ml-[6px] flex items-center justify-center">
          <HiOutlineBell />
          <div className="absolute left-[4px] top-[-5px] bg-[red] rounded-full w-[15px] h-[15px] flex items-center justify-center">
            <span className="font-[700] text-card text-[10px] flex items-center justify-center">
              5
            </span>
          </div>
        </div>
        <div className="border-r-[1px] p-r-4 border-[#E1E1E1] border-solid h-[39px] mx-[10px]"></div>
        <div className="flex items-center justify-between">
          <div className="w-[40px] h-[40px] bg-card_light flex items-center justify-center  rounded-[12px] mr-[6px] text-primary text-[23px]">
            <IoPersonOutline />
          </div>
          <div className="flex flex-col items-start justify-between">
            <span className="font-[700] text-[14px]">Emanuel Stallone</span>
            <span className="text-[12px]">Emanuel.St1370@gmail.com</span>
          </div>
          <div className="ml-[30px]">
            <BiSolidChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
