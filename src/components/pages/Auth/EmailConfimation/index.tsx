import React from 'react'
import {MdRefresh} from 'react-icons/md'
import {FiCheck} from 'react-icons/fi'
import CustomCheckBox from '@/components/common/checkbox';
const index = () => {
  return (
    <div className="flex flex-col pb-[16px] pt-[40px]">
      <span className="text-text text-[14px] font-bold pl-2 mb-2">
        Confirm email code
      </span>
      <div className="grid grid-cols-6 gap-x-2 text-[20px] text-center">
        <div className="bg-grayLight rounded-[12px] text-center overflow-hidden flex justify-center items-center h-[60px]">
          <input
            type="text"
            maxLength={1}
            className="focus:outline-none w-8 text-center  bg-transparent focus:border-none "
          />
        </div>
        <div className="bg-grayLight rounded-[12px] text-center overflow-hidden flex justify-center items-center h-[60px]">
          <input
            type="text"
            maxLength={1}
            className="focus:outline-none w-8 text-center  bg-transparent focus:border-none "
          />
        </div>
        <div className="bg-grayLight rounded-[12px] text-center overflow-hidden flex justify-center items-center h-[60px]">
          <input
            type="text"
            maxLength={1}
            className="focus:outline-none w-8 text-center  bg-transparent focus:border-none "
          />
        </div>
        <div className="bg-grayLight rounded-[12px] text-center overflow-hidden flex justify-center items-center h-[60px]">
          <input
            type="text"
            maxLength={1}
            className="focus:outline-none w-8 text-center  bg-transparent focus:border-none "
          />
        </div>
        <div className="bg-grayLight rounded-[12px] text-center overflow-hidden flex justify-center items-center h-[60px]">
          <input
            type="text"
            maxLength={1}
            className="focus:outline-none w-8 text-center  bg-transparent focus:border-none "
          />
        </div>
        <div className="bg-grayLight rounded-[12px] text-center overflow-hidden flex justify-center items-center h-[60px]">
          <input
            type="text"
            maxLength={1}
            className="focus:outline-none w-8 text-center  bg-transparent focus:border-none "
          />
        </div>
      </div>
      <div className="w-full mt-[17px] flex items-center justify-between">
        <div className="text-text text-xs font-normal">
          Request new code in 45 seconds
        </div>
        <button className="w-[162px] flex items-center justify-center space-x-1 text-primary text-[18px] font-bold h-9 bg-card_light rounded-xl">
          <MdRefresh />
          <span className="text-[12px]">Resend the Code</span>
        </button>
      </div>
      <div className="flex items-start mt-[50px] space-x-2">
        <CustomCheckBox defaultValue/>
        <span className="text-grayText text-[12px] leading-3">
          This device is trusted, you will not need a 2FA code when logging in
          from it for 30 days
        </span>
      </div>

      <button className="w-[150px] mt-[20px] justify-self-end ml-auto  bg-text text-white text-center h-[46px] rounded-[12px] font-bold">
        Confirm
      </button>
    </div>
  );
}

export default index