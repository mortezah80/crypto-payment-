import Up from "@/assets/up-arrow-transfer.svg";
import Down from "@/assets/arrow-down-from-line.svg";
import Danger from "@/assets/danger-transfer.svg";
import Tick from "@/assets/tick-transfer.svg";
import Success from "@/assets/success-transform.svg";
import Unsuccess from "@/assets/unseccess-transform.svg";
import Rotate from "@/assets/rotate.svg";
import Upload from "@/assets/upload.svg";
import { RxCopy } from "react-icons/rx";
import { TransitionProps } from "@/configs/cryptocurrencies";

const TransactionItem: React.FC<TransitionProps> = (props) => {
  return (
    <div
      className="px-[17px] rounded-[12px]  py-[16px] space-y-[20px]"
      style={{ background: props.background }}
    >
      <div className="flex justify-between max-xl:flex-col max-xl:space-y-3 max-sm:space-y-5 max-xl:items-start w-full items-center text-[12px]">
        <div className="flex items-center w-[58%] max-xl:w-full justify-between">
          <div className="flex justify-center items-center space-x-2">
            <div className="w-[40px] flex justify-center items-center h-[40px] rounded-[12px] bg-[#F2F2F2]">
              {props.type === "Invoice" ? <Rotate /> : <Upload />}
            </div>
            <div className="flex flex-col justify-between">
              <h3 className="text-[16px] text-text font-bold">{props.type}#</h3>
              <span className="text-grayText font-bold">{props.id}</span>
            </div>
          </div>
          <div className="font-bold max-md:hidden text-grayText">
            <span>Wallet Address:</span>
            <div className="flex items-center">
              <span className="text-text">{props.networkAddress}</span>
              <span className="text-[16px] pl-1 text-text">
                <RxCopy />
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-between max-sm:self-start items-center">
            <span className="text-[10px] max-md:hidden text-grayText font-bold">
              {props.date.toUTCString()}
            </span>
            <div className="items-end hidden  max-md:flex flex-col">
              <h3 className="text-[16px] text-text font-bold">
                {props.amount}
                <span className="text-grayText">&nbsp;&nbsp;{props.coin}</span>
              </h3>
              <span className="text-grayText font-bold self-end">
                ${props.dollar}
              </span>
            </div>
          </div>
        </div>
        <div className="font-bold w-full hidden max-sm text-grayText">
          <span>Wallet Address:</span>
          <div className="flex justify-between items-center">
            <span className="text-text">{props.networkAddress}</span>
            <span className="text-[16px] pl-1 text-text">
              <RxCopy />
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center max-xl:w-full w-[40%]">
          <div className="flex items-center space-x-2">
            <div
              className="w-[35px] max-xl:w-[40px] max-xl:h-[40px] h-[35px] flex justify-center items-center rounded-[12px]"
              style={{
                background:
                  props.payment === "Paid"
                    ? "#D2F3DD"
                    : props.payment === "Unpaind"
                    ? "#F9DADA"
                    : props.payment === "Less Than"
                    ? "#FFEFDC"
                    : "#DCECFF",
              }}
            >
              {props.payment === "Paid" ? (
                <Tick />
              ) : props.payment === "Unpaind" ? (
                <Danger />
              ) : props.payment === "Less Than" ? (
                <Down />
              ) : (
                <Up />
              )}
            </div>
            <div className="flex flex-col justify-center space-y-[2px]">
              <h4 className="text-text font-bold">{props.payment}</h4>
              {props.payment === "More Than" ||
              props.payment === "Less Than" ? (
                <span className="text-grayText font-bold">Payment Amount</span>
              ) : (
                ""
              )}
            </div>
          </div>

          {props.payment === "More Than" || props.payment === "Less Than" ? (
            <div className="flex text-[14px] max-sm:flex-1 max-sm:justify-between max-sm:ml-4 font-bold space-x-3 items-center">
              <div className="flex flex-col items-center justify-center -space-y-1">
                <span
                  style={{
                    color:
                      props.payment === "More Than" ? "#2388FF" : "#FF9C27",
                  }}
                >
                  {props.payment === "More Than" ? props.extra : props.less}
                </span>
                <span>{props.coin}</span>
              </div>
              <div
                className="w-[35px] h-[35px] justify-center rounded-[12px] items-center flex"
                style={{
                  background: props.ajustmentStatus ? "#D2F3DD" : "#F9DADA",
                }}
              >
                {props.ajustmentStatus ? <Success /> : <Unsuccess />}
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="flex max-md:hidden items-center space-x-3">
            <div className="items-end flex flex-col">
              <h3 className="text-[16px] text-text font-bold">
                {props.amount}
                <span className="text-grayText">&nbsp;&nbsp;{props.coin}</span>
              </h3>
              <span className="text-grayText font-bold self-end">
                ${props.dollar}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;
