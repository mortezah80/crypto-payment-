"use client";
import Select from "@/components/common/select";
import BackVectorIcon from "@/assets/Admin/back.svg";
import { Grid } from "@mui/material";
import LinePayIcon_wallet from "@/assets/LinePayIcon.svg";
import { coins } from "@/components/pages/Dashboard/wallet/coins/store";
import { motion } from "framer-motion";
import NoteIcon from "@/assets/tools/notePencil.svg";
import Trash from "@/assets/tools/trash.svg";
import MerchantLogo from "@/assets/Admin/brandIcon.svg";
import { clsx } from "clsx";
import { ListContainerFm, ListItemFm } from "@/configs/framer-motion";
import CoinItem from "@/components/pages/Dashboard/wallet/coins";
import ProfileInfo from "@/components/pages/Admin/users/Profile";
import { Key, useState } from "react";
import Transitioncard from "@/components/pages/Dashboard/TransitionCard";
import Pagination from "@/components/common/Pagination";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ProfileModal from "@/components/pages/Admin/users/Profile/Modal";
const merchants = [
  "EmanuelCoin",
  "Merchant data",
  "Samuel Dadis",
  "Shoping Data",
  "Shoping Data",
  "Shoping Data",
  "Shoping Data",
  "Shoping Data",
];
const transitions = [
  {
    date: new Date(),
    amount: 0.025,
    id: "87DE56985FG",
    merchant: "EmanuelCoin",
    dollar: 59216.62,
    less: 430,
    orderID: "BTC-41",
    status: true,
    type: "Invoice",
    coin: "BTC",
    ajustmentStatus: true,
    paymentID: "fdhgfhfghjnhgjhgjdfsdfjskjdiasjjlkdlskjd",
    payment: "Paid",
  },

  {
    date: new Date(),
    amount: 0.025,
    id: "87DE56985FG",
    merchant: "EmanuelCoin",
    dollar: 59216.62,
    less: 430,
    orderID: "BTC-41",
    status: true,
    type: "Invoice",
    coin: "BTC",
    ajustmentStatus: true,
    paymentID: "fdhgfhfghjnhgjhgjdfsdfjskjdiasjjlkdlskjd",
    payment: "Paid",
  },
  {
    date: new Date(),
    amount: 0.025,
    id: "87DE56985FG",
    merchant: "EmanuelCoin",
    dollar: 59216.62,
    less: 430,
    orderID: "BTC-41",
    status: true,
    type: "Invoice",
    coin: "BTC",
    ajustmentStatus: true,
    paymentID: "fdhgfhfghjnhgjhgjdfsdfjskjdiasjjlkdlskjd",
    payment: "Paid",
  },
  {
    date: new Date(),
    amount: 0.025,
    id: "87DE56985FG",
    merchant: "EmanuelCoin",
    dollar: 59216.62,
    less: 430,
    orderID: "BTC-41",
    status: true,
    type: "Invoice",
    coin: "BTC",
    ajustmentStatus: true,
    paymentID: "fdhgfhfghjnhgjhgjdfsdfjskjdiasjjlkdlskjd",
    payment: "Paid",
  },
  {
    date: new Date(),
    amount: 0.025,
    id: "87DE56985FG",
    merchant: "EmanuelCoin",
    dollar: 59216.62,
    less: 430,
    orderID: "BTC-41",
    status: true,
    type: "Invoice",
    coin: "BTC",
    ajustmentStatus: true,
    paymentID: "fdhgfhfghjnhgjhgjdfsdfjskjdiasjjlkdlskjd",
    payment: "Paid",
  },
  {
    date: new Date(),
    amount: 0.025,
    id: "87DE56985FG",
    merchant: "EmanuelCoin",
    dollar: 59216.62,
    less: 430,
    orderID: "BTC-41",
    status: true,
    type: "Invoice",
    coin: "BTC",
    ajustmentStatus: true,
    paymentID: "fdhgfhfghjnhgjhgjdfsdfjskjdiasjjlkdlskjd",
    payment: "Paid",
  },
  {
    date: new Date(),
    amount: 0.025,
    id: "87DE56985FG",
    merchant: "EmanuelCoin",
    dollar: 59216.62,
    less: 430,
    orderID: "BTC-41",
    status: true,
    type: "Invoice",
    coin: "BTC",
    ajustmentStatus: true,
    paymentID: "fdhgfhfghjnhgjhgjdfsdfjskjdiasjjlkdlskjd",
    payment: "Paid",
  },
  {
    date: new Date(),
    amount: 0.025,
    id: "87DE56985FG",
    merchant: "EmanuelCoin",
    dollar: 59216.62,
    less: 430,
    orderID: "BTC-41",
    status: true,
    type: "Invoice",
    coin: "BTC",
    ajustmentStatus: true,
    paymentID: "fdhgfhfghjnhgjhgjdfsdfjskjdiasjjlkdlskjd",
    payment: "Paid",
  },
];
const UsersProfile = () => {
  const [mode, setMode] = useState(0);
  const [page, setPage] = useState(1);
  return (
    <div className="mt-6">
      <div className="my-20">
        <ProfileModal />
      </div>
      <Grid container>
        <Grid xl={4} item>
          <div className="py-11 px-10 rounded-xl bg-card shadow-[0px_15px_20px_1px_#0000000d] ">
            <ProfileInfo
              email="Emanuel.St1370@gmail.com"
              userName="Emanuel Stallone"
            />
            <div className="font-bold">
              <h4 className="text-primary mb-2 mt-10">Merchants</h4>
              <div className="space-y-3 h-48 overflow-y-scroll pr-4">
                {merchants.map((value, index) => (
                  <div
                    key={index}
                    className="flex justify-between space-x-5  items-center"
                  >
                    <div className="flex items-center space-x-2 flex-1 bg-grayLight px-3 rounded-xl py-2">
                      <MerchantLogo />
                      <h4 className="text-text">{value}</h4>
                    </div>
                    <div className="flex space-x-4 items-center text-xl text-grayLight">
                      <NoteIcon className="" />
                      <Trash />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-primary font-bold mt-12">
                Balances of business wallets
              </h4>
              <div>
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
                      amount={9352624215}
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
              </div>
            </div>
          </div>
        </Grid>
        <Grid xl={8} item>
          <div className="bg-card h-full rounded-xl px-12 py-10 shadow-[0px_15px_20px_1px_#0000000d] text-xs">
            <div className="flex items-center justify-between">
              <div className="flex w-fit items-center bg-grayLight font-bold rounded-xl px-3 py-2">
                <button
                  onClick={() => setMode(0)}
                  className={`py-2 px-4 rounded-full ${
                    mode == 0
                      ? "text-white bg-primary"
                      : "text-grayText bg-transparent"
                  }`}
                >
                  Data Chart Mode
                </button>
                <button
                  onClick={() => setMode(1)}
                  className={`py-2 px-4 rounded-full ${
                    mode == 1
                      ? "text-white bg-primary"
                      : "text-grayText bg-transparent"
                  }`}
                >
                  Transaction Mode
                </button>
              </div>
              <button className="bg-grayLight text-text font-bold px-5 py-1.5 rounded-full flex items-center space-x-1 text-xs">
                <BackVectorIcon className="text-lg" />
                <span>Back to Users</span>
              </button>
            </div>
            <div className="flex my-5 max-xl:flex-col max-xl:space-y-3 w-full items-center justify-between">
              <div className="flex max-sm:flex-col max-xl:w-full max-sm:space-y-3 items-center max-sm:space-x-0 justify-between space-x-2">
                <Select
                  options={["Payment Type", "Payment Status", "Period"]}
                  defaultValue={0}
                />
                <Select
                  options={["Payment Type", "Payment Status", "Period"]}
                  defaultValue={1}
                />
                <Select
                  options={["Payment Type", "Payment Status", "Period"]}
                  defaultValue={2}
                />
              </div>
            </div>
            <div className="flex flex-col w-full h-full overflow-hidden">
              {transitions.map((value, index) => (
                <Transitioncard {...value} background="#F5F5F5" key={index} />
              ))}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default UsersProfile;
