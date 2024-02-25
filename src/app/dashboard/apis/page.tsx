"use client";
import { useState } from "react";
import {
  AiFillExclamationCircle,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import { FiPlusCircle } from "react-icons/fi";
import { IoCodeSlash } from "react-icons/io5";
import Api from "@/components/api";
import Header from "@/components/layout/header";

const Apis = () => {
  const [list, setList] = useState(0);
  return (
    <>
      <Api />
    </>
    //   <div className="w-full m-auto space-y-3 flex flex-col px-6">
    //   <Header title="API" />
    //     <div
    //       style={{
    //         background: " linear-gradient(3deg, #1093FF 0%, #005296 100%)",
    //       }}
    //       className="w-full rounded-[12px] py-[46px] pr-[99px] pl-[57px] flex items-center justify-between"
    //     >
    //       <div>
    //         <h2 className="text-white text-[32px] font-bold">
    //           API Token Setting
    //         </h2>
    //         <span className="text-icon font-bold text-[18px]">0 API List</span>
    //       </div>
    //       <button className="px-[25px] text-white py-[10px] flex justify-center items-center rounded-[12px] bg-primary text-[12px] font-bold">
    //         <AiOutlineExclamationCircle />
    //         <span className="pl-1">Guide API</span>
    //       </button>
    //     </div>
    //     <div className="bg-card relative gap-y-[10px] gap-x-[13px] grid grid-cols-4 rounded-[12px] shadow-[0px_15px_20px_0px_#0000000d] px-[52px] pt-[57px] pb-[25px]">
    //       <div className="w-[330px] cursor-pointer h-[260px] border-[2px] text-primary flex justify-center items-center border-primary border-dashed rounded-[18px] after:text-primary relative after:absolute after:-top-[28px] after:left-2 after:font-bold after:text-[18px] after:content-['API_List_&_Add_API']">
    //         <div className="flex flex-col justify-center items-center">
    //           <FiPlusCircle className="text-[70px]" />
    //           <span className="font-bold text-[28px]">New API</span>
    //         </div>
    //       </div>
    //       {!list && (
    //         <div className="absolute top-0 bottom-0  right-[330px] text-[#D8D8D8] text-[28px] flex flex-col items-center justify-center space-y-2">
    //           <div className="border-4 rounded-full p-2 text-[50px] border-[#D8D8D8]">
    //             <IoCodeSlash />
    //           </div>
    //           <span className="font-bold">
    //             There is No API, Create a New API
    //           </span>
    //           <div className="px-[19px] py-[10px] bg-[#F5F5F5] text-[#FF9C27] space-x-1 font-bold flex items-center rounded-[18px]">
    //             <AiFillExclamationCircle className="text-[20px]" />
    //             <span className="text-[14px]">
    //               You must have a merchant to add an New API
    //             </span>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   </div>
  );
};

export default Apis;
