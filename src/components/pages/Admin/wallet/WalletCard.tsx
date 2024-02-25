import { IWallet } from "@/models/wallet";
import { FC, useState } from "react";
import Image from "next/image";
import UserIcon from "$/public/icons/single-person.svg";
import DollarIcon from "$/public/icons/circle-gray-dollar.svg";
import Switch from "@/components/common/switch";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";
import { CURRENCY_ACTIONS } from "@/configs/currency-actions";

interface WalletCardProps {
  item: IWallet;
}

const WalletCard: FC<WalletCardProps> = ({ item }) => {
  const [isWeekly, setIsWeekly] = useState("Weekly");
  const [isOpen, setIsOpen] = useState(false);
  const showCurrencyActionCount = (name: string) => {
    switch (name) {
      case "settle":
        return item.settle;
      case "convert":
        return item.convert;
      case "purchase":
        return item.purchase;
      case "transfer":
        return item.transfer;
      case "withdraw":
        return item.withdraw;
    }
  };

  return (
    <div className="w-full flex flex-col gap-3 h-auto p-7 rounded-[18px] bg-grayLight">
      <div className="w-full flex justify-between items-center max-md:flex-wrap max-sm:gap-1">
        <div className="flex items-center gap-2 w-full max-w-[30%] max-sm:order-1 max-sm:max-w-fit">
          <Image width={70} height={60} src={item.img} alt={item.title} />
          <div className="flex flex-col justify-center gap-1">
            <span className="text-text font-bold">{item.title}</span>
            <span className="text-xs text-grayText">{item.description}</span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 w-full max-w-[15%] max-xl:flex-col max-xl:gap-1 max-sm:order-3 max-sm:max-w-none max-sm:flex-row max-sm:justify-between max-sm:flex-wrap">
          <span className="text-sm text-text">Wallets</span>
          <div className="text-sm text-primary flex items-center gap-1">
            <UserIcon />
            <span>{item.wallets}</span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 w-full max-w-[15%] max-xl:flex-col max-xl:gap-1 max-sm:order-4 max-sm:max-w-none max-sm:flex-row max-sm:justify-between max-sm:flex-wrap">
          <span className="text-sm text-text">Network</span>
          <div className="text-sm text-primary flex items-center gap-1">
            <span>{item.network}</span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 w-full max-w-[25%] max-xl:flex-col max-xl:gap-1 max-sm:order-5 max-sm:max-w-none max-sm:flex-row max-sm:justify-between max-sm:flex-wrap">
          <span className="text-sm text-text">Total Revenue</span>
          <div className="text-sm text-primary flex items-center gap-1">
            <div className="text-grayText">
              <DollarIcon />
            </div>
            <span>{item.totalRevenue}</span>
          </div>
        </div>
        <div className="hidden max-sm:block order-6">
          <Switch
            first="Weekly"
            seconde="Monthly"
            active={isWeekly}
            setActive={setIsWeekly}
            wrapperBgColor="bg-card"
          />
        </div>
        <div className="flex items-center gap-3 w-full max-w-fit max-sm:order-2 max-sm:ml-auto">
          <div className="max-sm:hidden">
            <Switch
              first="Weekly"
              seconde="Monthly"
              active={isWeekly}
              setActive={setIsWeekly}
              wrapperBgColor="bg-card"
            />
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="text-grayText cursor-pointer"
          >
            {isOpen ? (
              <IoIosArrowDropupCircle className="w-7 h-7" />
            ) : (
              <IoIosArrowDropdownCircle className="w-7 h-7" />
            )}
          </div>
        </div>
      </div>
      {isOpen ? (
        <div className="w-full px-4 py-5 bg-card h-[90px] rounded-xl flex justify-evenly items-center max-sm:h-auto max-sm:flex-col max-sm:justify-start max-sm:items-start max-sm:gap-1">
          {CURRENCY_ACTIONS.map((ca) => (
            <div
              key={ca.title}
              className="flex flex-col items-center gap-4 max-sm:w-full max-sm:flex-row max-sm:flex-wrap max-sm:justify-between max-sm:items-center"
            >
              <div className="flex items-center gap-2 text-sm text-text">
                <span>{ca.icon}</span>
                <span>{ca.title}</span>
              </div>
              <span className="text-sm text-text font-bold">
                {showCurrencyActionCount(ca.title.toLowerCase())}
              </span>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default WalletCard;
