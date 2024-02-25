"use client";
import { useState } from "react";
import ProfileInfo from "@/components/pages/Admin/users/Profile";
import BackVectorIcon from "@/assets/Admin/back.svg";
import WalletItem from "@/components/pages/PersonalWallet/walletItem";
import Pagination from "@/components/common/Pagination";
import index from "../../../../components/pages/Auth/CheckMessage/index";

const UserWallets = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="bg-card rounded-xl py-9 max-lg:px-4 px-14 mt-6 shadow-[0px_15px_20px_1px_#0000000d]">
      <div className="flex items-center justify-between max-md:flex-col max-md:space-y-8">
        <ProfileInfo
          userName="Emanuel Stallone"
          email="Emanuel.St1370@gmail.com"
        />
        <button className="bg-grayLight text-text font-bold px-5 py-1.5 rounded-full flex items-center space-x-1 text-xs">
          <BackVectorIcon className="text-lg" />
          <span>Back to Profile</span>
        </button>
      </div>

      <div className="flex mt-10 items-center justify-between">
        <h2 className="text-primary font-bold text-[18px]">List of wallets</h2>
      </div>
      <ul className="mt-3">
        {[1, 2, 3, 4].map((i, index) => (
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
      <div className="mt-32 flex items-center justify-center">
        <Pagination
          totalPage={10}
          currentPage={currentPage}
          containerClass="mx-auto"
          onPageChange={(curr) => setCurrentPage(curr)}
        />
      </div>
    </div>
  );
};

export default UserWallets;
