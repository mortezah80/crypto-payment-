import React from "react";
import ModalView from "../View/Index";
import AuthSelect from "@/components/pages/Auth/UI/AuthSelect";
import AuthInput from "@/components/pages/Auth/UI/AuthInput";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoCopyOutline } from "react-icons/io5";
interface AddAPIProps {
  change ?:boolean
}
const AddApi:React.FC<AddAPIProps>= ({change}) => {
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center z-30 w-screen h-screen bg-[#00000066]">
      <ModalView
        label={change ? "API Setting" : "Add New API"}
        tailwindStyle="w-[450px] space-y-[8px] px-[41px] pt-[28px] pb-[16px]"
      >
        <AuthSelect
          disable
          error={
            change ? "You must have a merchant to add an New API" : undefined
          }
          label="Merchant"
          options={["select", "Plugin", "EmanuelCoin"]}
          defaultValue={change ? 2 : 0}
        />
        <AuthSelect label="API Type" options={["Plugin"]} defaultValue={0} />
        {change && (
          <AuthSelect
            disable
            label="Plugin Name"
            options={["select", "Plugin", "Prestashop"]}
            defaultValue={change ? 2 : 0}
          />
        )}
        <AuthInput
          label="Merchant Address URL"
          placeHolder="Enter a Merchant URL..."
          gray
        />

        <AuthInput
          label="Success URL"
          placeHolder="Enter a success URL..."
          gray
        />

        <AuthInput
          label="Failed URL"
          placeHolder="Enter a failed URL..."
          gray
        />
        <AuthSelect
          label="Who pays the commission"
          options={["Site", "Plugin"]}
          defaultValue={0}
        />
        <div className="flex px-3 items-center justify-between text-grayText text-[14px] font-bold">
          <span>Expiration period</span>
          <div className="w-[144px] h-[36px] bg-grayLight text-text rounded-[12px] flex items-center justify-center">
            <input
              type="text"
              className="bg-transparent focus:outline-none text-center"
              value={30}
            />
          </div>
          <span>min</span>
        </div>
        {change && (
          <div className="text-[14px] space-x-2 font-bold flex justify-between">
            <div className="text-text px-[14px] bg-grayText pt-[8px] rounded-[12px] flex-1">
              6Xo_0tEU6VPKRfJ11ydkEWR6tl2YKf3DG
            </div>
            <button className="bg-card_light w-[36px] text-[20px] text-primary flex items-center justify-center h-[36px] rounded-[12px]">
              <IoCopyOutline/>
            </button>
          </div>
        )}
        <div className="flex pt-[45px] pb-[30px] items-center justify-between">
          <div className=" text-[12px] font-semibold text-grayText flex items-center space-x-1">
            <AiOutlineExclamationCircle />
            <span>Guide API</span>
          </div>
          <button className="bg-primary px-[44px] py-[12px] font-bold text-white text-[14px] text-center rounded-[14px] shadow-[0px_10px_20px_0px_#1093ff4d] ">
            <span>Add API</span>
          </button>
        </div>
      </ModalView>
    </div>
  );
};

export default AddApi;
