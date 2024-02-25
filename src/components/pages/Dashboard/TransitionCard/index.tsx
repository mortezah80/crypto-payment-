"use client";
import React from "react";
import Paste from "@/assets/paste.svg";
import Sheet from "@/assets/Sheet.svg";
import Up from "@/assets/up-arrow-transfer.svg";
import Down from "@/assets/arrow-down-from-line.svg";
import Danger from "@/assets/danger-transfer.svg";
import Tick from "@/assets/tick-transfer.svg";
import Success from "@/assets/success-transform.svg";
import Unsuccess from "@/assets/unseccess-transform.svg";
import { FiChevronDown, FiLink } from "react-icons/fi";
import Refine from "@/assets/Refine-transition.svg";
import Accept from "@/assets/Accept-transition.svg";
import { IoCopyOutline } from "react-icons/io5";
import { TransitionProps } from "@/configs/cryptocurrencies";

const Transitioncard: React.FC<TransitionProps> = (props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div
      className="px-[17px] rounded-[12px]  py-[16px] space-y-[20px]"
      style={{ background: props?.background }}
    >
      <div className="flex justify-between max-xl:flex-col max-xl:space-y-3 max-sm:space-y-5 max-xl:items-start w-full items-center text-[12px]">
        <div className="flex items-center w-[41%] max-xl:w-full justify-between">
          <div className="flex justify-center items-center space-x-2">
            <div
              className="w-[40px] flex justify-center items-center h-[40px] rounded-[12px]"
              style={{
                background: props?.payment_status === "Invoice" ? "#FCF2DF" : "#E0F1FF",
              }}
            >
              {props?.payment_status === "Invoice" ? <Sheet /> : <Paste />}
            </div>
            <div className="flex flex-col justify-between">
              <h3 className="text-[16px] text-text font-bold">{props?.payment_status}#</h3>
              <span className="text-grayText font-bold">{props?.id}</span>
            </div>
          </div>

          <div className="flex flex-col justify-between max-sm:self-start items-center">
            <span className="text-grayText max-sm:hidden">
              Merchant:
              <strong className="text-text font-bold">{props?.merchant_id}</strong>
            </span>
            <span className="text-[10px] text-grayText font-bold">
              {props?.date?.toDateString()}
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center max-xl:w-full w-[52%]">
          <div className="flex items-center space-x-2">
            <div
              className="w-[35px] max-xl:w-[40px] max-xl:h-[40px] h-[35px] flex justify-center items-center rounded-[12px]"
              style={{
                background:
                  props?.payment === "Paid"
                    ? "#D2F3DD"
                    : props?.payment === "Unpaind"
                    ? "#F9DADA"
                    : props?.payment === "Less Than"
                    ? "#FFEFDC"
                    : "#DCECFF",
              }}
            >
              {props?.payment === "Paid" ? (
                <Tick />
              ) : props?.payment === "Unpaind" ? (
                <Danger />
              ) : props?.payment === "Less Than" ? (
                <Down />
              ) : (
                <Up />
              )}
            </div>
            <div className="flex flex-col justify-center space-y-[2px]">
              <h4 className="text-text font-bold">{props?.payment}</h4>
              {props?.payment === "More Than" ||
              props?.payment === "Less Than" ? (
                <span className="text-grayText font-bold">Payment Amount</span>
              ) : (
                ""
              )}
            </div>
          </div>

          {props?.payment === "More Than" || props?.payment === "Less Than" ? (
            <div className="flex text-[14px] max-sm:flex-1 max-sm:justify-between max-sm:ml-4 font-bold space-x-3 items-center">
              <div className="flex flex-col items-center justify-center -space-y-1">
                <span
                  style={{
                    color:
                      props?.payment === "More Than" ? "#2388FF" : "#FF9C27",
                  }}
                >
                  {props?.payment === "More Than" ? props?.extra : props?.less}
                </span>
                <span>{props?.coin}</span>
              </div>
              <div
                className="w-[35px] h-[35px] justify-center rounded-[12px] items-center flex"
                style={{
                  background: props?.ajustmentStatus ? "#D2F3DD" : "#F9DADA",
                }}
              >
                {props?.ajustmentStatus ? <Success /> : <Unsuccess />}
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="flex max-sm:hidden items-center space-x-3">
            <div className="items-end flex flex-col">
              <h3 className="text-[16px] text-text font-bold">
                {props?.amount}
                <span className="text-grayText">&nbsp;&nbsp;{props?.coin}</span>
              </h3>
              <span className="text-grayText font-bold self-end">
                ${props?.dollar}
              </span>
            </div>
            <button
              onClick={() => setOpen(!open)}
              className="text-text text-[20px]"
            >
              <FiChevronDown />
            </button>
          </div>
        </div>

        <div className="hidden  max-sm:flex justify-between w-full">
          <div className="flex flex-col justify-between max-sm:self-start items-start">
            <span className="text-grayText">Merchant:</span>
            <span className="text-text font-bold">{props?.merchant}</span>
          </div>

          <div className=" max-sm:flex hidden items-center space-x-3">
            <div className="items-end flex flex-col">
              <h3 className="text-[16px] text-text font-bold">
                {props?.amount}
                <span className="text-grayText">&nbsp;&nbsp;{props?.coin}</span>
              </h3>
              <span className="text-grayText font-bold self-end">
                ${props?.dollar}
              </span>
            </div>
            <button
              onClick={() => setOpen(!open)}
              className="text-text text-[20px]"
            >
              <FiChevronDown />
            </button>
          </div>
        </div>
      </div>
      {open ? (
        <div className="flex pl-[48px] max-sm:pl-0 space-y-[25px] [&>div]:flex font-semibold flex-col justify-between items-start text-[14px] max-lg:text-[12px] text-grayText">
          <div className="max-xl:flex-col">
            <div>
              <span>Status: </span>
              <span
                className={props?.status ? "text-[#17AD4A]" : "text-[#F33131]"}
              >
                {props?.status ? "Active" : "Not Active"}
              </span>
            </div>
            <div className="flex items-center max-xl:ml-0 break-all ml-[158px]">
              <span>Payment ID:&nbsp;</span>
              <span className="text-text text-clip break-all">
                {props?.paymentId}&nbsp;
              </span>
              <span className="text-text text-[17px]">
                <IoCopyOutline />
              </span>
            </div>
          </div>
          <div className="w-full justify-normal max-xl:flex-col">
            <div>
              <span>Order ID:&nbsp;</span>
              <span className="text-text">{props?.orderId}</span>
            </div>
            <div className="flex items-center ml-[175px] max-xl:ml-0">
              <span>Type:&nbsp;&nbsp;</span>
              <span className="text-text flex items-center">
                <FiLink />
                &nbsp; Link {props?.payment_status}
              </span>
            </div>
            {(props?.payment === "Less Than" ||
              props?.payment === "More Than") && (
              <div className="flex justify-self-end ml-auto space-x-2">
                <div className="w-[120px] max-lg:w-[90px]">
                  <button className="bg-[#F9DADA] flex items-center justify-center space-x-1 rounded-[12px] h-[34px] w-full text-[#F33131] font-bold max-lg:text-[12px] text-[14px]">
                    <Refine />
                    <span>Refund</span>
                  </button>
                </div>
                <div className="w-[120px] max-lg:w-[90px]">
                  <button className="bg-[#D2F3DD] flex items-center space-x-1 justify-center rounded-[12px] h-[34px] w-full text-[#17AD4A] font-bold max-lg:text-[12px] text-[14px]">
                    <Accept />
                    <span>Accept</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Transitioncard;
