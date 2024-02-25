"use client";
import React, { useState } from "react";
import Dot from "$/public/icons/dot.svg";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { AiFillDollarCircle } from "react-icons/ai";
import { Divider } from "@mui/material";
import { WALLET_LIST, WalletType } from "@/configs/cryptocurrencies";
import WalletCart from "@/components/pages/Admin/wallet/BasicWalletCart";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";
import Switch from "@/components/common/switch";
import WithDrawIcon from "$/public/icons/withdrow-income.svg";
import Balance from "$/public/icons/balance.svg";
import { useSizeChecker } from "@/hooks/useSizeChecker";

const BasicWallet = () => {
  const [currentWallet, setCurrentWallet] = useState<WalletType>(
    WALLET_LIST[0],
  );
  const [circleChartActiveTimeLimit, setCircleChartActiveTimeLimit] = useState(
    "Weekly",
  );
  const [barChartActiveTimeLimit, setBarChartActiveTimeLimit] = useState(
    "Weekly",
  );
  const [secBarChartActiveTimeLimit, setSecBarChartActiveTimeLimit] = useState(
    "Weekly",
  );

  const [isDesktop] = useSizeChecker(1024);

  return (
    <Grid container className="pt-6">
      <Grid container className="w-full flex items-stretch justify-between">
        <Grid lg={7.2} xs={12} className="p-10 shadow-3xl rounded-xl">
          <div className="w-full h-full flex flex-col max-md:space-y-8 gap-5">
            <header className="w-full max-lg:flex-col flex max-md:space-y-8 items-center justify-between font-bold">
              <div>
                <h2 className=" text-2xl text-primary">
                  Total volume of All transactions
                </h2>
                <h5 className="text-grayText">
                  Withdrawals and wallet balance
                </h5>
              </div>
              <div className="flex items-center gap-2 text-4xl">
                <span className="text-primary ">
                  <AiFillDollarCircle className="text-primary " />
                </span>
                <span>62,765,251,078</span>
              </div>
            </header>
            <section className="flex items-end gap-2 justify-between max-md:flex-col bg-card_shade p-3 w-full rounded-[18px] font-bold">
              <div className="w-full flex flex-col gap-2">
                <h4 className="text-sm text-grayText text-center">
                  Total Income (website)
                </h4>
                <div className="w-full bg-white flex py-3 rounded-xl justify-center items-center gap-2">
                  <AiFillDollarCircle className="text-primary " />
                  <span className="text-lg">312,232,415</span>
                </div>
              </div>
              <span className="w-5 text-5xl min-h-[50px] max-md:text-center max-md:justify-center max-md:justify-self-center max-md:w-full text-primary">
                -
              </span>
              <div className="w-full flex flex-col gap-2">
                <h4 className="text-sm text-grayText text-center">
                  Site withdrawals
                </h4>
                <div className="bg-white flex py-3 w-full rounded-xl justify-center items-center gap-2">
                  <AiFillDollarCircle className="text-primary " />
                  <span className="text-lg">7,232,415</span>
                </div>
              </div>
              <span className="w-5 text-3xl min-h-[50px] max-md:text-center max-md:justify-center max-md:justify-self-center max-md:w-full text-primary">
                =
              </span>
              <div className="w-full flex flex-col gap-2">
                <h4 className="text-sm text-grayText text-center">
                  Withdrawable income (website)
                </h4>
                <div className="bg-white flex py-3 w-full rounded-xl justify-center items-center gap-2">
                  <AiFillDollarCircle className="text-primary " />
                  <span className="text-lg">320,526,012</span>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-3 w-full">
              <div className="flex items-center justify-between">
                <h4 className="text-primary font-bold">
                  Total income chart of transactions
                </h4>
                <Switch
                  first="Weekly"
                  seconde="Monthly"
                  active={barChartActiveTimeLimit}
                  setActive={setBarChartActiveTimeLimit}
                />
              </div>
              <div className="bg-red-300 w-full h-full min-h-[200px]">
                charts
              </div>
            </section>
          </div>
        </Grid>
        <Grid lg={4.7} xs={12} className="p-10 shadow-3xl rounded-xl">
          <div className="w-full h-full flex flex-col gap-4">
            <div className="w-full flex items-center gap-14">
              <div className="w-full flex flex-col gap-2">
                <div>
                  <div className="flex gap-2 items-center font-bold text-grayText text-sm">
                    <Dot className="text-primary" />
                    <span>Balance</span>
                  </div>
                  <div className="bg-card_shade flex justify-between w-full px-4 py-1 rounded-xl font-bold">
                    <span>66,232,496</span>
                    <span>45%</span>
                  </div>
                </div>
                <div>
                  <div className="flex gap-2 items-center font-bold text-grayText text-sm">
                    <Dot className="text-primary/50" />
                    <span>User withdrawals</span>
                  </div>
                  <div className="bg-card_shade flex justify-between w-full px-4 py-1 rounded-xl">
                    <span>66,232,496</span>
                    <span>30%</span>
                  </div>
                </div>
                <div>
                  <div className="flex gap-2 items-center font-bold text-grayText text-sm">
                    <Dot className="text-primary/20" />
                    <span>Site withdrawals</span>
                  </div>
                  <div className="bg-card_shade flex justify-between w-full px-4 py-1 rounded-xl">
                    <span>66,232,496</span>
                    <span>25%</span>
                  </div>
                </div>
              </div>
              <div className="bg-red-300 flex flex-col w-full h-full min-h-[175px] max-w-[200px]">
                charts
              </div>
            </div>
            <div className="flex flex-col w-full h-full min-h-[175px]">
              <div className="flex items-center justify-between flex-wrap">
                <h4 className="font-bold">Chart of Withdrawals</h4>
                <Switch
                  first="Weekly"
                  seconde="Monthly"
                  active={circleChartActiveTimeLimit}
                  setActive={setCircleChartActiveTimeLimit}
                />
              </div>
              <div className="bg-red-300 w-full h-full min-h-[175px]">
                chart
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className="w-full p-10 shadow-3xl rounded-xl  flex flex-col gap-2 max-md:p-8 max-md:justify-center">
        <h3 className="text-primary font-bold max-md:text-center  max-md:justify-center">
          List of Wallets
        </h3>
        <ul className="w-full flex justify-between max-xl:flex-wrap max-md:justify-center items-center gap-2">
          {WALLET_LIST.slice(0, isDesktop ? 7 : 4).map((i, index) => (
            <li
              key={index}
              onClick={() => setCurrentWallet(i)}
              data-active={i.walletAddress === currentWallet?.walletAddress}
              className="w-full h-auto min-w-[200px] max-md:m-auto max-xl:w-fit flex flex-col items-center justify-between group gap-2 border-2 border-borderGray p-3 rounded-2xl hover:border-primary hover:shadow-4xl data-active:border-primary data-active:shadow-4xl"
            >
              <span className="text-grayText text-sm group-hover:text-black group-hover:font-bold group-data-active:font-bold group-data-active:text-black">
                {i.short}
              </span>
              <div className="w-full flex items-center">
                <WalletCart {...i} />
              </div>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 self-end mt-5">
          <span className="text-sm">Wallets Page Indicator</span>
          <div className="flex items-center justify-between bg-grayLight py-1 px-3 rounded-2xl w-48">
            <IoIosArrowBack />
            <button className="rounded-2xl px-3 py-2 min-w-[36px] bg-primary text-white">
              1
            </button>
            <button className="rounded-2xl px-3 py-2 min-w-[36px] bg-white">
              2
            </button>
            <button className="rounded-2xl px-3 py-2 min-w-[36px] bg-white">
              3
            </button>
            <IoIosArrowForward />
          </div>
        </div>
        <div className="w-full h-full flex justify-between items-center gap-4 flex-wrap">
          <div className="w-full max-w-3xl flex flex-col gap-10">
            <div className="w-full flex gap-5 max-md:mt-6 overflow-hidden max-[800px]:flex-col max-[800px]:items-center">
              <div className="w-full h-52 max-w-xs">
                <WalletCart isSingle {...currentWallet} />
              </div>
              <div className="w-full flex flex-col gap-5 text-sm">
                <div className="flex items-center gap-2 max-[800px]:justify-center">
                  <span>{currentWallet.icon}</span>
                  <span className="text-2xl font-bold">
                    {currentWallet.short}
                  </span>
                </div>
                <div className="flex gap-2 font-bold max-md:flex-col">
                  <span className="text-grayText w-32">Wallet Address:</span>
                  <div className="flex items-center overflow-hidden gap-2">
                    <button>
                      <IoCopyOutline />
                    </button>
                    <span className="truncate overflow-hidden text-ellipsis">
                      {currentWallet.walletAddress}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 font-bold max-md:justify-between">
                  <span className="text-grayText w-32">Coin Name:</span>
                  <span className="text-primary">{currentWallet.coin}</span>
                </div>
                <div className="flex gap-2 font-bold max-md:justify-between">
                  <span className="text-grayText w-32">Reduction Name:</span>
                  <span className="text-primary">{currentWallet.short}</span>
                </div>
                <div className="flex gap-2 font-bold max-md:justify-between">
                  <span className="text-grayText w-32">Network Name:</span>
                  <span>{currentWallet.network}</span>
                </div>
              </div>
            </div>
            <section className="flex items-end gap-2 justify-between max-md:flex-col bg-card_shade p-3 w-full rounded-[18px] font-bold">
              <div className="w-full flex flex-col gap-2">
                <h4 className="text-sm text-grayText text-center">
                  Total Income (website)
                </h4>
                <div className="w-full bg-white flex py-3 rounded-xl justify-center items-center gap-2">
                  <AiFillDollarCircle className="text-primary " />
                  <span className="text-lg">312,232,415</span>
                </div>
              </div>
              <span className="w-5 text-5xl min-h-[50px] max-md:text-center max-md:justify-center max-md:justify-self-center max-md:w-full text-primary">
                -
              </span>
              <div className="w-full flex flex-col gap-2">
                <h4 className="text-sm text-grayText text-center">
                  Site withdrawals
                </h4>
                <div className="bg-white flex py-3 w-full rounded-xl justify-center items-center gap-2">
                  <AiFillDollarCircle className="text-primary " />
                  <span className="text-lg">7,232,415</span>
                </div>
              </div>
              <span className="w-5 text-3xl min-h-[50px] max-md:text-center max-md:justify-center max-md:justify-self-center max-md:w-full text-primary">
                =
              </span>
              <div className="w-full flex flex-col gap-2">
                <h4 className="text-sm text-grayText text-center">
                  Withdrawable income (website)
                </h4>
                <div className="bg-white flex py-3 w-full rounded-xl justify-center items-center gap-2">
                  <AiFillDollarCircle className="text-primary " />
                  <span className="text-lg">320,526,012</span>
                </div>
              </div>
            </section>
          </div>

          <div className="w-full max-lg:my-8 max-md:justify-center flex flex-col justify-between max-w-md">
            <div className="flex flex-col gap-1 mb-14">
              <h3 className="text-2xl text-primary font-bold">
                Total volume of All transactions
              </h3>
              <p className="text-xs">Withdrawals and wallet balance</p>
              <div className="text-3xl flex items-center gap-1">
                <AiFillDollarCircle className="text-primary" />
                <span className="font-bold">765,251,078</span>
              </div>
            </div>
            <div className="w-full flex items-center justify-between flex-wrap">
              <div className="w-full flex flex-col gap-2 max-w-[230px]">
                <div>
                  <div className="flex gap-2 items-center font-bold text-grayText text-sm">
                    <Dot className="text-primary" />
                    <span>Balance</span>
                  </div>
                  <div className="bg-card_shade flex justify-between w-full px-4 py-1 rounded-xl font-bold">
                    <span>66,232,496</span>
                    <span>45%</span>
                  </div>
                </div>
                <div>
                  <div className="flex gap-2 items-center font-bold text-grayText text-sm">
                    <Dot className="text-primary/50" />
                    <span>User withdrawals</span>
                  </div>
                  <div className="bg-card_shade flex justify-between w-full px-4 py-1 rounded-xl">
                    <span>66,232,496</span>
                    <span>30%</span>
                  </div>
                </div>
                <div>
                  <div className="flex gap-2 items-center font-bold text-grayText text-sm">
                    <Dot className="text-primary/20" />
                    <span>Site withdrawals</span>
                  </div>
                  <div className="bg-card_shade flex justify-between w-full px-4 py-1 rounded-xl">
                    <span>66,232,496</span>
                    <span>25%</span>
                  </div>
                </div>
              </div>
              <div className="bg-red-300 flex flex-col w-full h-full min-h-[175px] max-w-[200px]">
                charts
              </div>
            </div>
          </div>
        </div>
        <section className="w-full bg-card_shade py-8 px-10 flex justify-between gap-5 rounded-[18px] font-bold max-lg:flex-wrap ">
          <div className="w-full flex flex-col items-start justify-center gap-4">
            <header className="w-full flex gap-2 items-center">
              <span className="bg-primary text-white px-5 py-1 rounded-2xl">
                {currentWallet.coin}
              </span>
              <span>Withdrawal From the Wallet</span>
            </header>
            <div className="w-full flex items-start justify-between max-lg:flex-wrap gap-3 ">
              <div className="w-full flex justify-between max-lg:flex-wrap gap-3 ">
                <div className="flex flex-col gap-1 w-full">
                  <label className="text-grayText" htmlFor="">
                    from
                  </label>
                  <input
                    type="text"
                    className="p-3 py-2 rounded-xl"
                    placeholder="select wallet"
                  />
                </div>
                <span className="self-end mb-2 max-lg:hidden">To</span>
                <div className="flex flex-col gap-1 w-full">
                  <label className="text-grayText" htmlFor="">
                    Whrere
                  </label>
                  <input
                    type="text"
                    className="p-3 py-2 rounded-xl"
                    placeholder="select wallet"
                  />
                </div>
              </div>
              <Divider
                flexItem
                orientation="vertical"
                className="h-8 mb-1 self-end max-lg:hidden"
              />
              <div className="flex flex-col gap-1 w-full">
                <label className="text-grayText" htmlFor="">
                  Amount
                </label>
                <input
                  type="text"
                  className="p-3 py-2 rounded-xl"
                  placeholder="select wallet"
                />
              </div>

              <button className="w-full max-w-[160px] bg-primary text-white truncate py-2 self-end rounded-xl">
                Send founds
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-white rounded-xl">
                <Balance />
              </span>
              <div>
                <p className="text-primary">Balance</p>
                <p>66,232,496</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="p-2 bg-white rounded-xl">
                <WithDrawIcon />
              </span>
              <div>
                <p className="text-primary truncate">Withdrawable income</p>
                <p>66,232,496</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="w-full p-10 shadow-3xl rounded-xl min-h-[400px]">
        <header className="flex w-full max-md:flex-col max-md:space-y-6  items-center justify-between">
          <h3 className="text-primary font-bold">Daily deposit to wallet</h3>
          <div className="flex items-center max-md:flex-col gap-9">
            <div className="gap-8 flex items-center max-sm:flex-col justify-between">
              <div className="flex items-center gap-4">
                <h5 className="text-xs">Total deposit this week</h5>
                <div className="flex text-3xl items-center gap-2 font-bold">
                  <AiFillDollarCircle className="text-grayText" />
                  <span>35,059</span>
                </div>
              </div>
              <Divider
                flexItem
                orientation="vertical"
                className="w-1 my-1 bg-grayText"
              />
              <div className="flex items-center gap-2">
                <h5>Count</h5>
                <span className="text-3xl font-bold">450</span>
              </div>
            </div>
            <Switch
              first="Weekly"
              seconde="Monthly"
              active={secBarChartActiveTimeLimit}
              setActive={setSecBarChartActiveTimeLimit}
            />
          </div>
        </header>
      </div>
    </Grid>
  );
};

export default BasicWallet;
