import React from "react";
import { BsFillBookmarkFill } from "react-icons/bs";

const Item = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-card_shade px-[30px] py-[20px] rounded-[5%] text-[12px] lg:text-[14px]">
      <div className="rounded-full bg-icon w-[60px] h-[60px] text-white text-[30px] flex items-center justify-center shadow-sm shadow-icon">
        <BsFillBookmarkFill />
      </div>
      <h4 className="text-[18px] font-[700] mt-[25px] max-lg:text-[14px]">White Label</h4>
      <div className="flex flex-col items-start justify-start mt-[7px]">
        <span>A perfect design for your business</span>
        <div className="flex items-center justify-center">
          <div className="w-[8px] h-[8px] rounded-full bg-primary"></div>
          <span className="ml-[13px]">No “Powered by” sign</span>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[8px] h-[8px] rounded-full bg-primary"></div>
          <span className="ml-[13px]">No redirects to Plisio</span>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[8px] h-[8px] rounded-full bg-primary"></div>
          <span className="ml-[13px]">Your own design</span>
        </div>
      </div>
    </div>
  );
};

export default Item;
