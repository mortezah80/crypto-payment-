import { BsArrowBarRight } from "react-icons/bs";
import TrashIcon from "@/assets/tools/trash.svg";
import { FiDownload, FiRefreshCcw, FiTag, FiUpload } from "react-icons/fi";
import { IoCopyOutline } from "react-icons/io5";
interface WalletItemProps {
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  short: string;
  coin: string;
  network: string;
  date: Date;
  walletAddress: string;
  amount: number;
  usd: number;
  coinPrice: number;
  bacgkround: string;
}
const WalletItem: React.FC<WalletItemProps> = (props) => {
  const Icon = props.Icon;
  return (
    <div
      style={{ background: props.bacgkround }}
      className="w-full text-[12px] pl-[15px] pr-[20px] py-[20px] text-grayText font-semibold max-2xl:flex-col max-2xl:space-y-1 rounded-[12px] flex items-center justify-between"
    >
      <div className="flex items-center justify-between max-2xl:w-full">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-400 rounded-[8px] w-[67px] h-[42px]"></div>
          <div className="flex-col justify-center space-y-1">
            <h3 className="text-text text-[16px] font-bold">{props.short}</h3>
            <span className="font-normal">{props.coin}</span>
          </div>
        </div>
        <div className="text-center hidden max-2xl:block">
          <h5>
            Network :{" "}
            <span className="text-text pl-2 font-bold">{props.network}</span>
          </h5>
          <span className="text-[10px]">{props.date.toUTCString()}</span>
        </div>
      </div>
      <div className="flex items-center max-lg:space-y-[18px] max-lg:flex-col  max-2xl:w-full max-2xl:justify-between max-2xl:space-x-0 max-2xl:pl-1 space-x-[80px]">
        <div className="text-center max-2xl:hidden">
          <h5>
            Network :{" "}
            <span className="text-text pl-2 font-bold">{props.network}</span>
          </h5>
          <span className="text-[10px]">{props.date.toUTCString()}</span>
        </div>
        <div className="flex flex-col max-lg:w-full ">
          <span>Wallet Address:</span>
          <span className="text-text max-lg:justify-between space-x-2 flex items-center">
            {props.walletAddress}
            <span className="text-[18px] pl-2 font-bold">
              <IoCopyOutline />
            </span>
          </span>
        </div>
        <div className="flex items-center max-lg:space-x-0 max-lg:justify-between max-lg:w-full space-x-[80px]">
          <div className="text-[14px] ">
            <h3 className="text-primary">{props.amount.toFixed(8)}</h3>
            <span>
              USD: <span className="text-text">${props.usd.toFixed(2)}</span>
            </span>
          </div>
          <div className="text-text text-[14px]">
            <span>
              1 {props.coin}: <span className="text-grayText">$</span>{" "}
              {props.coinPrice}
            </span>
          </div>
        </div>
        <div className="flex space-x-4 text-grayText justify-between items-center text-[15px]">
          <div className="w-[30px] h-[30px] rounded-xl bg-card_light text-primary flex justify-center items-center">
            <FiDownload />
          </div>
          <div className="w-[30px] h-[30px] text-black rounded-xl bg-card_shade  flex justify-center items-center">
            <FiTag />
          </div>
          <div className="w-[30px] h-[30px] text-black rounded-xl bg-card_shade flex justify-center items-center">
            <FiUpload />
          </div>
          <div className="w-[30px] h-[30px] text-black rounded-xl bg-card_shade flex justify-center items-center">
            <BsArrowBarRight />
          </div>
          <div className="w-[30px] h-[30px] text-black rounded-xl bg-card_shade flex justify-center items-center">
            <FiRefreshCcw />
          </div>
          <div className="w-[30px] bg-redAlterBack h-[30px] rounded-full flex justify-center items-center">
            <TrashIcon className="text-redText" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletItem;
