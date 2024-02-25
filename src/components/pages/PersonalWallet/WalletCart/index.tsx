"use clinet";
import Image, { StaticImageData } from "next/image";

import { IoCopyOutline } from "react-icons/io5";

interface WalletCartProps {
  icon: any;
  amount: string;
  network: string;
  walletAddress: string;
  usd: number;
  type: number;
  coin: string;
  subColor?: boolean;
  short: string;
  valueColor?: string;
  background: StaticImageData;
  isActive?: boolean;
}
const WalletCart: React.FC<WalletCartProps> = ({
  walletAddress,
  amount,
  background,
  coin,
  icon,
  network,
  short,
  type,
  usd,
  isActive,
  subColor,
  valueColor,
}) => {
  return (
    <div
      className={`
       ${isActive ? "scale-y-110 " : "scale-90"}
        relative text-white font-bold rounded-2xl p-7 text-xs w-full overflow-hidden duration-200 origin-center my-3
      `}
    >
      <Image
        alt="wallet background"
        className="w-full h-full absolute top-0 bottom-0 right-0 left-0 rounded-[15px]"
        src={background}
      />
      <div className="flex justify-between items-center relative">
        {type === 1 && (
          <div className="bg-white opacity-10 absolute -top-1 rounded-[10px] -bottom-1 -right-3 -left-3 "></div>
        )}
        <div className="flex items-center space-x-2">
          {/* <Image src={icon} alt="" width={28} height={28} /> */}
          {icon}
          <div className="flex -space-y-1 flex-col gap-1">
            <span className="text-xs">{short}</span>
            <span
              className="text-grayText"
              style={{ color: valueColor ? valueColor : "" }}
            >
              {coin}
            </span>
          </div>
        </div>
        <div className="text-xs">
          <h4>{amount}</h4>
          <h4 className="text-[#FFC300]">
            USD:
            <span
              className="text-grayText"
              style={{ color: valueColor ? valueColor : "" }}
            >
              ${usd}
            </span>
          </h4>
        </div>
      </div>
      <div className="mt-[20px] space-y-2 flex flex-col relative z-20">
        <span
          className="text-[#FFC300]"
          style={{ color: subColor ? "white" : "" }}
        >
          Network:
          <span
            className="text-white"
            style={{ color: subColor ? "black" : "" }}
          >
            {network}
          </span>
        </span>
        <span
          className="text-[#FFC300]"
          style={{ color: subColor ? "white" : "" }}
        >
          Wallet Address:
        </span>
        <div className="flex justify-between space-x-3 items-center">
          <div className="relative">
            <span
              className="truncate"
              style={{ color: subColor ? "black" : "" }}
            >
              {walletAddress}
            </span>
          </div>
          <button type="button" className="text-lg">
            <IoCopyOutline style={{ color: subColor ? "black" : "" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletCart;
