"use client";

import { useState } from "react";

interface balanceAdminProps {
  balance: number;
  balancePercent: number;
  userWithdrawal: number;
  userWithdrawalPercent: number;
  siteWithdrawal: number;
  siteWithdrawalPercenter: number;
}
const BalanceAdmin: React.FC<balanceAdminProps> = (props) => {
  const [mode, setMode] = useState(0);
  return (
    <div className="bg-card h-[530px] flex flex-col space-y-4.5 shadow-[0px_15px_20px_1px_#0000000d] rounded-xl px-11 py-12 text-sm font-bold">
      <div className="flex flex-col space-y-2">
        <div className="flex flex-col space-y-1">
          <div className="flex space-x-1.5 items-center">
            <div className="w-2 h-2 rounded-full bg-primary ml-3"></div>
            <span className="text-grayText">Balance</span>
          </div>
          <div className="flex rounded-xl py-1.5 px-3 items-center justify-between text-[18px]">
            <h5>{props.balance}</h5>
            <span>{props.balancePercent}%</span>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="flex space-x-1.5 items-center">
            <div className="w-2 h-2 rounded-full bg-card_light ml-3"></div>
            <span className="text-grayText">user withdrawals</span>
          </div>
          <div className="flex bg-grayLight font-normal rounded-xl py-2 px-4 items-center justify-between text-[18px]">
            <h5>{props.userWithdrawal}</h5>
            <span>{props.userWithdrawalPercent}%</span>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="flex space-x-1.5 items-center">
            <div className="w-2 h-2 rounded-full bg-card_light ml-3"></div>
            <span className="text-grayText">site withdrawals</span>
          </div>
          <div className="flex bg-grayLight font-normal rounded-xl py-2 px-4 items-center justify-between text-[18px]">
            <h5>{props.userWithdrawal}</h5>
            <span>{props.siteWithdrawalPercenter}%</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-8 max-md:flex-col max-md:justify-center max-md:space-y-3">
        <h5 className="text-text font-bold">Chart of Withdrawals</h5>
        <div className="flex w-fit items-center bg-grayLight font-bold rounded-full px-2 py-1">
          <button
            onClick={() => setMode(0)}
            className={`py-1 px-3 rounded-full ${
              mode == 0
                ? "text-white bg-primary"
                : "text-grayText bg-transparent"
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setMode(1)}
            className={`py-1 px-3 rounded-full ${
              mode == 1
                ? "text-white bg-primary"
                : "text-grayText bg-transparent"
            }`}
          >
            Mounthly
          </button>
        </div>
      </div>
    </div>
  );
};

export default BalanceAdmin;
