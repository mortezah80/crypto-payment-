"use client";
import { motion } from "framer-motion";
import Withdraw_wallet from "@/assets/Group 180.svg";
import Convert_wallet from "@/assets/rotate.svg";
import Transform_wallet from "@/assets/arrow-left-from-line.svg";
import Search_wallet from "@/assets/search.svg";
import LinePayIcon_wallet from "@/assets/LinePayIcon.svg";
import CoinItem from "./coins";
import { ListContainerFm, ListItemFm } from "@/configs/framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { authServiceHandler } from "@/api/auth.service";
import P1 from "@/assets/coins/0012.svg";
import P2 from "@/assets/coins/Tether.svg";
import P3 from "@/assets/coins/Tron.svg";
import P4 from "@/assets/coins/Group 77.svg";

const Wallet = ({ id }: { id?: string }) => {
  const [merchantWallet, setMerchantWallet] = useState<any>();

  const handleGetMerchantWallet = async () => {
    const res = await authServiceHandler.getMerchantWallet(id);
    setMerchantWallet(res.data.data);
  };

  useEffect(() => {
    handleGetMerchantWallet();
  }, []);

  const coins = [
    {
      name: "Bitcoin",
      short: "BTC",
      amount: merchantWallet?.bitcoin_btc_balance,
      dollar: 0,
      Icon: P1,
    },
    {
      name: "Tether erc20",
      short: "Tether",
      amount: merchantWallet?.tether_erc20_balance,
      dollar: 0,
      Icon: P2,
    },
    {
      name: "Tron",
      short: "Tron",
      amount: merchantWallet?.tron_trx_balance,
      dollar: 0,
      Icon: P3,
    },
    {
      name: "Ethereum",
      short: "ETH",
      amount: merchantWallet?.ethereum_eth_balance,
      dollar: 0,
      Icon: P4,
      add: true,
    },
    {
      name: "Tether trc20",
      short: "Tether",
      amount: merchantWallet?.tether_trc20_balance,
      dollar: 0,
      Icon: P2,
    },
  ];

  return (
    <section className="flex bg-card flex-col px-[30px] py-6 shadow-3xl rounded-[12px]">
      <div className="text-[16px]  text-primary font-700 leading-normal font-bold">
        <h3>Balances of business wallets</h3>
      </div>
      <div className="flex mt-2 [&>div]:flex-1 [&>div]:h-[57px] [&>div]:space-y-[3px] text-[12px] font-bold space-x-2 items-center justify-between">
        <div className="rounded-[12px] flex flex-col justify-center items-center border border-[#E1E1E1] text-text">
          <span>
            <Withdraw_wallet />
          </span>
          <h5>Withdrawal</h5>
        </div>
        <div className="rounded-[12px] flex flex-col justify-center items-center border border-[#E1E1E1] text-text">
          <span>
            <Transform_wallet />
          </span>
          <h5>Withdrawal</h5>
        </div>
        <div className="rounded-[12px] flex flex-col justify-center items-center border border-[#E1E1E1] text-text">
          <span>
            <Convert_wallet />
          </span>
          <h5>Withdrawal</h5>
        </div>
      </div>
      <div className="flex mt-3 items-center justify-between px-[14px] h-[36px] rounded-[12px] bg-grayLight w-full">
        <div className="w-full">
          <input
            type="text"
            className="flex-1 bg-transparent w-full text-grayText font-semibold text-[14px] focus:border-none focus:outline-none"
            placeholder={"Search Coin..."}
          />
        </div>
        <span>
          <Search_wallet />
        </span>
      </div>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={ListContainerFm}
        className="mt-3"
      >
        <motion.li variants={ListItemFm}>
          <CoinItem
            Icon={LinePayIcon_wallet}
            short="All Merchant"
            name="Balance Wallets"
            amount={merchantWallet?.main_balance}
            dollar={0.0}
            header
          />
        </motion.li>
        {coins.map((value, index) => (
          <motion.li variants={ListItemFm} key={index}>
            <CoinItem {...value} />
          </motion.li>
        ))}
      </motion.ul>
      <div className="w-full mt-3">
        <Link
          href={"merchant/income"}
          className="bg-card_light rounded-[12px] h-[34px] w-full flex justify-center items-center text-primary font-bold text-sm"
        >
          Show More
        </Link>
      </div>
    </section>
  );
};

export default Wallet;
