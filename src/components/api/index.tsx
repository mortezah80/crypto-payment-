"use client";
import React from "react";
import {
  AiFillExclamationCircle,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import { FiPlusCircle } from "react-icons/fi";
import { IoCodeSlash } from "react-icons/io5";
import ApiItem from "./ApiItem";
import Test from "@/assets/Test/avatar/Vector.png";
const Api = () => {
  return (
    <div className="w-full flex flex-col gap-3 pt-7">
      <div className="w-full from-[#1093FF] to-[#005296] bg-gradient-to-t max-lg:flex-col max-lg:items-center max-lg:text-center max-lg:justify-center max-lg:space-y-3 rounded-[12px] py-[46px] pr-[99px] pl-[57px] flex items-center justify-between">
        <div>
          <h2 className="text-white text-[32px] font-bold">
            API Token Setting
          </h2>
          <span className="text-icon font-bold text-[18px]">0 API List</span>
        </div>
        <button className="px-[25px] text-white py-[10px] flex justify-center items-center rounded-[12px] bg-primary text-[12px] font-bold">
          <AiOutlineExclamationCircle />
          <span className="pl-1">Guide API</span>
        </button>
      </div>
      <div className="w-full flex flex-col justify-start gap-2 bg-card relative rounded-xl shadow-lg px-12 py-8">
        <h4 className="text-primary font-bold text-lg">API List & Add API</h4>
        <ul className="w-full flex items-center justify-start gap-3 flex-wrap">
          <li className="w-full max-w-[330px] cursor-pointer border-2 text-primary flex justify-center items-center border-primary border-dashed rounded-2xl min-h-[260px] max-md:min-h-[90px] max-md:max-w-full">
            <div className="flex flex-col justify-center max-lg:flex-row items-center">
              <FiPlusCircle className="text-[70px] max-lg:text-[30px]" />
              <span className="font-bold text-[28px]">New API</span>
            </div>
          </li>
          {[1, 2, 3, 4, 5].map((i, index) => (
            <li className="w-full max-w-[330px] max-md:max-w-full" key={index}>
              <ApiItem
                key={index}
                user="PluginCart"
                avatar={Test}
                date={new Date()}
                name="Prestashop"
                id="zxcvbnmasdfghjklqwertyuiopasdfgh"
                type="Plugin"
                url="http://Myshop.com/emanuelcoin"
              />
            </li>
          ))}
        </ul>

        {/* empty list  */}
        {false && (
          <div className="absolute top-0 bottom-0  right-[330px] text-[#D8D8D8] text-[28px] flex flex-col items-center justify-center space-y-2">
            <div className="border-4 rounded-full p-2 text-[50px] border-[#D8D8D8]">
              <IoCodeSlash />
            </div>
            <span className="font-bold">There is No API, Create a New API</span>
            <div className="px-[19px] py-[10px] bg-[#F5F5F5] text-[#FF9C27] space-x-1 font-bold flex items-center rounded-[18px]">
              <AiFillExclamationCircle className="text-[20px]" />
              <span className="text-[14px]">
                You must have a merchant to add an New API
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Api;
