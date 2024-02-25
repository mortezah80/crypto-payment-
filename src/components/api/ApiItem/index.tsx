import Image, { StaticImageData } from "next/image";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { TbCopy } from "react-icons/tb";
interface ApiItemProps {
  name: string;
  type: "Plugin" | "RestFull";
  user: string;
  url: string;
  id: string;
  date: Date;
  avatar: StaticImageData;
}

const ApiItem: React.FC<ApiItemProps> = (props) => {
  return (
    <div className="w-full hover:shadow-4xl hover:border-transparent transition text-xs font-bold text-grayText py-[30px] px-[32px] h-[260px] border-[1.5px] border-[#E1E1E1] rounded-[18px]">
      <div className="flex items-center justify-between">
        <h3 className="text-primary text-[16px]">{props.name}</h3>
        <span
          className={`px-[9px] py-[4px] rounded-full ${
            props.type === "RestFull"
              ? "bg-grayLight text-text"
              : "bg-card_light text-primary"
          }`}
        >
          {props.type}
        </span>
      </div>
      <div className="border-b border-b-[#E1E1E1] my-[9px]"></div>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-[36px] h-[36px] rounded-full p-[5px] flex justify-center items-center bg-grayLight">
            <Image
              alt={props.user}
              className="overflow-hidden rounded-full"
              src={props.avatar}
            />
          </div>
          <h4 className="text-text text-[16px]">{props.user}</h4>
        </div>
        <h5>{props.url}</h5>
        <div className="flex items-center space-x-1">
          <span className="bg-grayLight text-text px-[11px] py-[5px] flex items-center justify-center rounded-full">
            {props.id}
          </span>
          <button className=" w-[28px] h-[28px] rounded-[12px] bg-card_light text-primary flex items-center justify-center text-[18px]">
            <TbCopy />
          </button>
        </div>
      </div>
      <div className="border-b border-b-[#E1E1E1] my-[9px]"></div>
      <div className="mt-[7px] flex justify-between items-center">
        <div className="flex font-normal justify-start text-left items-start text-[10px] flex-col">
          <span>
            {props.date.getHours()}:{props.date.getMinutes()}
          </span>
          <span>
            {props.date.getDay()}/{props.date.getMonth()}/
            {props.date.getFullYear()}
          </span>
        </div>
        <div className="flex items-stretch space-x-2">
          <button className="rounded-[12px] flex items-center justify-between text-[18px] px-[11px] bg-[#F9DADA] text-[#F33131]">
            <HiOutlineTrash />
          </button>
          <button className="hover:shadow-[0px_10px_20px_0px_#1093ff4d] transition bg-primary text-white text-[14px] text-center px-[33px] py-[10px] rounded-[12px]">
            API Setting
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApiItem;
