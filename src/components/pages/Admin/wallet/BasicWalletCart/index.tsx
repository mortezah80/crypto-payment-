"use clinet";
import { WalletType } from "@/configs/cryptocurrencies";
import Image from "next/image";

import { IoCopyOutline } from "react-icons/io5";

const BasicWalletCart: React.FC<
  Partial<WalletType> & { isSingle?: boolean }
> = ({
  walletAddress,
  amount,
  background,
  coin,
  icon,
  network,
  short,
  usd,
  isSingle,
}) => {
  return (
    <div
      className={`${
        isSingle ? "text-sm p-8" : "text-[10px]"
      } flex flex-col items-start justify-between relative text-white font-bold rounded-2xl p-3 w-full h-full overflow-hidden `}
    >
      <Image
        src={background || ""}
        alt="wallet background"
        className="w-full h-full absolute top-0 bottom-0 right-0 left-0 rounded-[15px]"
      />
      <div className="w-full flex justify-between items-center z-30 ">
        <div className="flex items-center space-x-2">
          {icon}
          <div className="flex -space-y-1 flex-col gap-1">
            <span className={`${isSingle ? "text-sm" : "text-[10px]"}`}>
              {short}
            </span>
            <span className="text-grayText">{coin}</span>
          </div>
        </div>
        <div className={`${isSingle ? "text-sm" : "text-[10px]"}`}>
          <h4>{amount}</h4>
          <h4 className="text-[#FFC300]">
            <span className="text-white">USD:</span>
            <span>${usd}</span>
          </h4>
        </div>
      </div>
      <div className="w-full mt-[20px] space-y-2 flex flex-col relative z-20">
        <span className="text-[#FFC300]">
          Network:
          <span className="text-white">{network}</span>
        </span>
        <span className="text-[#FFC300]">Wallet Address:</span>
        <div className="w-full flex justify-between space-x-3 items-center">
          <span className="truncate bg-white/20 rounded-2xl px-2 py-1">
            {walletAddress}
          </span>
          <button type="button" className={isSingle ? "text-xl" : "text-sm"}>
            <IoCopyOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasicWalletCart;
