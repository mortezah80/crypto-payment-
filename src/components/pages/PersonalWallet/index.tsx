"use client";
import { useState } from "react";
import Slider from "react-slick";
import Arrow from "$/public/icons/right-arrow.svg";
import TransformItem from "@/components/pages/PersonalWallet/TransferItem";
import Icon_Transform from "@/assets/transformItemIcon.svg";
import WalletItem from "@/components/pages/PersonalWallet/walletItem";
import { AiOutlinePlusCircle } from "react-icons/ai";
import WalletCart from "./WalletCart";
import { WALLET_LIST } from "@/configs/cryptocurrencies";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const PersonalWallet = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const responsive = [
    {
      breakpoint: 1320,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 724,
      settings: {
        slidesToShow: 1,
      },
    },
  ];

  return (
    <div className="py-10 max-sm:px-[2px] w-full">
      <div className="w-full flex justify-between max-lg:mb-8 max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:space-y-2 mb-[5px]">
        <h3 className="text-primary pl-[28px] max-lg:pl-0 text-[18px] font-bold">
          Wallets
        </h3>
        <button className="bg-primary rounded-[13px] transition hover:shadow-[0px_10px_20px_0px_#1093ff4d] flex items-center justify-center space-x-1 px-[35px] py-[12px] text-white font-bold text-[14px]">
          <AiOutlinePlusCircle />
          <span>New Wallet</span>
        </button>
      </div>
      <div className="w-full relative">
        <Slider
          slide="ul"
          autoplay
          infinite
          swipeToSlide
          dots={false}
          slidesToShow={4}
          slidesToScroll={1}
          focusOnSelect
          className="[&>.slick-next]:scale-125 [&>.slick-next]:-translate-x-20 [&>.slick-next]:z-10 [&>.slick-next]:-translate-y-3 max-md:[&>.slick-next]:-translate-x-2"
          nextArrow={<Arrow />}
          beforeChange={(curr, next) => setCurrentSlide(next)}
          responsive={responsive}
        >
          {WALLET_LIST.map((wallet, index) => (
            <WalletCart
              {...wallet}
              key={index}
              isActive={index === currentSlide}
            />
          ))}
        </Slider>
        <div className="h-full w-1/5 absolute right-0 top-0 bg-[linear-gradient(270deg,_#FAFAFA_44.15%,_rgba(250,_250,_250,_0.00)_87.9%);] max-md:hidden" />
      </div>
      {/* <div className="flex space-x-2 items-center overflow-hidden w-full">
        {WALLET_LIST.map((wallet, index) => (
          <WalletCart {...wallet} key={index} />
        ))}
      </div> */}
      <div className="bg-card rounded-[12px] w-full mt-5 shadow-[0px_15px_20px_0px_#0000000d] px-[30px] max-sm:px-[10px] max-sm:py-[15px] py-[20px]">
        <div className="text-primary max-lg:text-center font-bold text-[18px] mb-[8px]">
          <h2>Latest transfers</h2>
        </div>
        <ul className="pl-[3px] gap-2 pb-[7px] grid grid-cols-5 max-2xl:grid-cols-3 max-xl:grid-cols-1 items-center justify-between">
          {[1, 2, 3, 4, 5].map((i, index) => (
            <li key={index}>
              <TransformItem
                Icon={Icon_Transform}
                amount={0}
                coin="BTC"
                network="BTC-412"
                date={new Date()}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-card w-full rounded-[12px] mt-5 shadow-[0px_15px_20px_0px_#0000000d] px-[26px] max-lg:px-[15px] max-lg:py-[20px] py-[34px]">
        <div className="flex items-center justify-between">
          <h2 className="text-primary font-bold text-[18px]">
            List of wallets
          </h2>
          <Link
            href={"wallet/transaction"}
            className="bg-card_light text-primary text-[14px] rounded-[12px] px-[28px] py-[10px] cursor-pointer"
          >
            Transactions
          </Link>
        </div>
        <ul className="mt-[12px]">
          {[1, 2, 3, 4, 5].map((i, index) => (
            <li key={index}>
              <WalletItem
                amount={0}
                coin="Bitcoin"
                usd={0}
                bacgkround={index % 2 ? "#ffffff" : "#F5F5F5"}
                short="BTC"
                network="BTC-41"
                date={new Date("04 December 2023")}
                walletAddress="fdhgfhfghjnhgjhgjdfsdfjskjdiasjjlkdlskjd"
                coinPrice={29103612}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PersonalWallet;
