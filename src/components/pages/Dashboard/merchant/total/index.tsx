"use client";
import { useState } from "react";
import {
  PiNotePencilLight,
  PiNotebookBold,
  PiFolderSimpleStarLight,
} from "react-icons/pi";
import { useRouter } from "next/navigation";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbTablePlus } from "react-icons/tb";
import { AiFillDollarCircle, AiOutlineFall } from "react-icons/ai";
import { FiLink } from "react-icons/fi";
import { TbCodeCircle2 } from "react-icons/tb";
import { HiViewGridAdd } from "react-icons/hi";
import { AiOutlineRise } from "react-icons/ai";
import { GiTrade } from "react-icons/gi";
import { RxExit } from "react-icons/rx";
import { PiUpload } from "react-icons/pi";
import ModalView from "@/components/pages/modals/view";
import Link from "@/components/pages/modals/link";
import { authServiceHandler } from "@/api/auth.service";
import eventEmitter from "@/tools/event";

const Total = ({
  merchant,
  refreshList,
}: {
  merchant?: any;
  refreshList?: any;
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleDeleteMerchant = async (merchantId: string) => {
    const res = await authServiceHandler.deleteMerchant(merchantId);
    router.push("/dashboard");
    eventEmitter.emit("successResponseMerchant");
  };
  return (
    <div className="mt-[15px] flex items-center space-y-4 xl:space-y-0 justify-between w-full bg-white shadow-3xl rounded-lg  px-[10px] xl:px-[20px] py-[15px] xl:py-[20px] flex-col xl:flex-row">
      {modalOpen ? (
        <div className="absolute w-full min-h-full bg-text bg-opacity-[10%] z-50 top-0 right-0 flex items-center justify-center">
          <div>
            <ModalView label="Welcome Back!" setModalOpen={setModalOpen}>
              <Link
                refreshList={() => {
                  refreshList();
                  setModalOpen(false);
                }}
              />
            </ModalView>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="flex flex-col items-center w-full xl:w-auto first:w-[45%] space-y-2 xl:space-y-0">
        <div className="flex items-center justify-between w-[100%] bg-card_shade px-[15px] py-[7px] rounded-[15px] ">
          <div className="flex items-center justify-start text-primary">
            <div className="flex items-center justify-between text-primary text-[18px]">
              <TbTablePlus />
            </div>
            <span className="text-[16px] font-[700] pl-[3px]">
              {merchant?.name}
            </span>
          </div>
          <div className="items-center justify-end text-[#9F9F9F] hidden xl:flex">
            <div className="flex items-center justify-between ">
              <PiNotePencilLight />
            </div>
            <div className="border-r-2 p-r-4 border-[#E1E1E1] border-solid h-[14px] mx-[10px]"></div>
            <button
              onClick={() => handleDeleteMerchant(merchant.id)}
              className="flex items-center justify-between hover:text-red-400 transition-colors "
            >
              <RiDeleteBin6Line />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center first:items-end justify-between w-[100%] first:flex-row ">
          <div className="flex items-start max-first:items-center max-first:justify-between flex-row-reverse first:flex-col h-[100%] w-full ">
            <div className="flex items-center justify-between">
              <div className="text-[#9F9F9F] text-[26px]  flex items-center mt-2">
                {merchant?.currency_type}
              </div>
              <span className="text-[32px] first:text-5xl font-[700] flex items-center pt-2">
                {merchant?.available_balance}
              </span>
            </div>
            <div className="flex items-center justify-between text-[#9F9F9F] text-[12px] first:text-[14px] pl-[5px] h-[100%] first:h-auto">
              <div className="flex items-end justify-between">
                {" "}
                <PiNotebookBold />{" "}
              </div>
              <span className="ml-[9px] font-[700]">Total Revenue</span>
            </div>
          </div>
          <div className="flex items-center justify-start flex-col h-[80%] w-full xl:w-auto mt-[10px] xl:mt-[0px]">
            <div className="flex items-center justify-between font-[12px] w-full xl:w-auto mb-[12px]">
              <div className="text-black text-[14px] flex items-center justify-center w-[28px] h-[28px] rounded-[12px] bg-[#FFFFFF] border-solid border-[#E1E1E1] border-[1px]">
                <PiUpload />
              </div>
              <div className=" text-black text-[14px] flex items-center justify-center ml-[3px] w-[28px] h-[28px] rounded-[12px] bg-[#FFFFFF] border-solid border-[#E1E1E1] border-[1px]">
                <RxExit />
              </div>
              <div className="border-r-2 p-r-4 border-[#E1E1E1] border-solid h-[14px] mx-[10px]"></div>
              <div
                onClick={() => setModalOpen(!modalOpen)}
                className="flex item-center justify-center w-[75px] h-[28px] rounded-[12px] bg-[#FFFFFF] border-solid border-[#E1E1E1] border-[1px] cursor-pointer hover:shadow-md hover:shadow-primary-1600 hover:bg-primary hover:text-white hover:border-none"
              >
                <div className="flex items-center justify-center text-[15px]">
                  <FiLink />
                </div>
                <span className="text-[12px] font-[700] text-center flex items-center ml-[2px]">
                  Link
                </span>
              </div>
              <div className="mx-[3px] flex item-center justify-center w-[75px] h-[28px] rounded-[12px] bg-[#FFFFFF] border-solid border-[#E1E1E1] border-[1px] cursor-pointer hover:shadow-md hover:shadow-primary-1600 hover:bg-primary hover:text-white hover:border-none">
                <div className="flex items-center justify-center text-[15px]">
                  <TbCodeCircle2 />
                </div>
                <span className="text-[12px] font-[700] flex items-center ml-[2px]">
                  API
                </span>
              </div>
              <div className="flex item-center justify-center w-[75px] h-[28px] rounded-[12px] bg-[#FFFFFF] border-solid border-[#E1E1E1] border-[1px] cursor-pointer hover:shadow-md hover:shadow-primary-1600 hover:bg-primary hover:text-white hover:border-none">
                <div className="flex items-center justify-center text-[15px]">
                  <HiViewGridAdd />
                </div>
                <span className="text-[12px] font-[700] flex items-center ml-[2px]">
                  Plugin
                </span>
              </div>
            </div>
            <span className="text-[14px] text-[#9F9F9F] font-[700] hidden first:inline ">
              Create Invoice
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 w-full xl:flex-grow-0 xl:ml-[16px] first:ml-[0px] first:w-[50%] gap-x-4 gap-y-2 xl:gap-y-0">
        <div className="hidden xl:flex flex-col items-center justify-between bg-card_shade rounded-[12px] py-4 px-[15px]">
          <div className="flex items-end justify-between w-full">
            <div className="flex items-end justify-between ">
              <div className="text-[#9F9F9F] text-[20px] mb-[15px]">
                <AiFillDollarCircle />
              </div>
              <span className="text-[38px] font-[700] flex items-center">
                12m
              </span>
            </div>
            <span className="flex items-center text-[#9F9F9F] text-[12px] font-[700]">
              24h
            </span>
          </div>

          <div className="border-t-[1px] border-[#E1E1E1] border-solid w-[100%] my-[6px]"></div>
          <div className="flex items-center justify-between w-[100%]">
            <div className="flex items-center justify-between text-[12px] font-[700] text-[#9F9F9F]">
              <div className="text-[18px]">
                <PiFolderSimpleStarLight />
              </div>
              <span className="ml-[3px]">Daily Income</span>
            </div>
            <div className="flex items-center justify-between text-[#F33131] text-[12px] font-[700]">
              <div className="text-[18px]">
                <AiOutlineFall />
              </div>
              <span>15%</span>
            </div>
          </div>
        </div>
        <div className="hidden xl:flex flex-col items-center justify-between bg-card_shade rounded-[12px] py-4 px-[15px]">
          <div className="flex items-end justify-between w-full">
            <div className="flex items-end justify-between ">
              <div className="text-[#9F9F9F] text-[20px] mb-[15px]">
                <AiFillDollarCircle />
              </div>
              <span className="text-[38px] font-[700] flex items-center">
                12m
              </span>
            </div>
            <span className="flex items-center text-[#9F9F9F] text-[12px] font-[700]">
              24h
            </span>
          </div>

          <div className="border-t-[1px] border-[#E1E1E1] border-solid w-[100%] my-[6px]"></div>
          <div className="flex items-center justify-between w-[100%]">
            <div className="flex items-center justify-between text-[12px] font-[700] text-[#9F9F9F]">
              <div className="text-[18px]">
                <PiFolderSimpleStarLight />
              </div>
              <span className="ml-[3px]">Daily Income</span>
            </div>
            <div className="flex items-center justify-between text-[#17AD4A] text-[12px] font-[700]">
              <div className="text-[18px]">
                <AiOutlineRise />
              </div>
              <span>15%</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between xl:hidden bg-card_shade rounded-[12px] py-[5px] px-[14px]">
          <div className="flex items-center justify-between text-[12px] font-[700] text-[#9F9F9F]">
            <div className="text-[18px]">
              <PiFolderSimpleStarLight />
            </div>
            <span className="ml-[3px]">Daily Income</span>
          </div>
          <div className="flex items-end justify-between ">
            <div className="text-[#9F9F9F] text-[20px] mb-[7px] mr-[3px]">
              <AiFillDollarCircle />
            </div>
            <span className="text-[24px] font-[700] flex items-center">
              12m
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between xl:hidden bg-card_shade rounded-[12px] py-[5px] px-[14px]">
          <div className="flex items-center justify-between text-[12px] font-[700] text-[#9F9F9F]">
            <div className="text-[15px]">
              <GiTrade />
            </div>
            <span className="ml-[3px]">Daily Transaction</span>
          </div>
          <div className="flex items-end justify-between ">
            <div className="text-[#9F9F9F] text-[20px] mb-[7px] mr-[3px]">
              <AiFillDollarCircle />
            </div>
            <span className="text-[24px] font-[700] flex items-center">
              1624
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Total;
