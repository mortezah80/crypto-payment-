"use client";
import { useZustandStore } from "@/store";
import { BiSolidChevronDown } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";

const UserInfo: React.FC = () => {
  const user = useZustandStore((state) => state.user);

  return (
    <div className="flex items-center justify-between">
      <div className="w-[40px] h-[40px] bg-card_light flex items-center justify-center  rounded-[12px] mr-[6px] text-primary text-[23px]">
        <IoPersonOutline />
      </div>
      <div className="flex flex-col items-start justify-between">
        <span className="font-[700] text-[14px]">{user.username}</span>
        <span className="text-[12px]">{user.email}</span>
      </div>
      <div className="ml-[30px]">
        <BiSolidChevronDown />
      </div>
    </div>
  );
};

export default UserInfo;
