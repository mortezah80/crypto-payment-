import { FaBitcoin } from "react-icons/fa";
import { HiLink } from "react-icons/hi";
import { PiUploadLight } from "react-icons/pi";
import { SlRefresh } from "react-icons/sl";

interface propsInt {
  coin: string;
  full_name: string;
  amount: number;
  usd: number;
  percentage: number;
  grey?: boolean;
}

const IncomeCard = (props: propsInt) => {
  return (
    <div
      className={[
        "flex items-center flex-col sm:flex-row justify-between w-full px-[16px] pb-[17px] py-[14px] sm:px-[10px] sm:py-[7px] rounded-[12px]",
        props.grey ? "bg-[#F5F5F5]" : "",
      ].join(" ")}
    >
      <div className="flex items-center justify-between w-[100%] sm:w-[35%]">
        <div className="flex items-center">
          <div className="text-[orange] text-[37px] flex items-center justify-center">
            <FaBitcoin />
          </div>
          <div className="flex flex-col items-start ml-[7px]">
            <span className="text-[16px] font-[700] text-[#242424]">
              {props.coin}
            </span>
            <span className="text-[12px] text-[#9F9F9F]">
              {props.full_name}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <span className="font-[700] text-[14px] text-primary">
            {props.amount.toFixed(8)}
          </span>
          <span className="font-[700] text-[14px] text-[#9F9F9F]">
            USD: <span className="text-[#242424]">${props.usd.toFixed(2)}</span>{" "}
          </span>
        </div>
      </div>
      <div className="flex sm:flex-col items-center w-[100%] sm:w-auto justify-between my-[15px] sm:my-[0px] sm:mx-[0px]">
        <span className="text-[14px] text-[#9F9F9F] font-[700] ">
          Usage percentage
        </span>
        <span className="text-[#242424] font-[700]">{props.percentage}%</span>
      </div>
      <div className="flex items-center justify-between text-[#242424] gap-x-4">
        <div className="bg-[#E0F1FF] text-[#1093FF] w-[30px] h-[30px] rounded-[12px] flex items-center justify-center">
          <HiLink />
        </div>
        <div className="bg-[#F2F2F2] w-[30px] h-[30px] rounded-[12px] flex items-center justify-center">
          <PiUploadLight />
        </div>
        <div className="bg-[#F2F2F2] w-[30px] h-[30px] rounded-[12px] flex items-center justify-center">
          <PiUploadLight />
        </div>
        <div className="bg-[#F2F2F2] w-[30px] h-[30px] rounded-[12px] flex items-center justify-center">
          <SlRefresh />
        </div>
      </div>
    </div>
  );
};

export default IncomeCard;
