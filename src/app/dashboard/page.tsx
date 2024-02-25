"use client";
import DashboardLogo from "$/public/images/dashboardLogo.svg";
import DashboardBackground from "$/public/images/dashboardBackground.svg";
import { FaPlus } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdOutlineContentCopy } from "react-icons/md";
import DownloadLogo from "$/public/icons/download.svg";
import { useCallback, useEffect, useState } from "react";
import { authServiceHandler } from "@/api/auth.service";
import ModalCreateMerchant from "@/components/pages/Dashboard/merchant/modalCreateMerchant";
import eventEmitter from "@/tools/event";
import Link from "next/link";

const Dashboard = () => {
  // const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur", {
  //   pollingInterval: 3000,
  // });
  const [merchants, setMerchants] = useState<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleGetMerchants = async () => {
  //   const res = await authServiceHandler.getMerchants({});
  //   setMerchants(res.data);
  // };
  eventEmitter.on("successResponseMerchant", function () {
    handleGetMerchants();
  });

  useEffect(() => {
    handleGetMerchants();
  }, []);
  const handleGetMerchants = useCallback(async () => {
    const res = await authServiceHandler.getMerchants({});
    setMerchants(res.data);
  }, []);
  const walletData = [
    {
      name: "BTC",
      type: "Bitcoin",
      network: "BTC-41",
      address: "fdhgfhfghjnhgjhgjdfsdfjskjdiasjjlkdlskjd",
      date: "04 December 2023",
    },
    {
      name: "BCH",
      type: "Bitcoin Cash",
      network: "BTC-41",
      address: "fdhgfhfghjnhgjhgjdfsdfjskjdiasjjlkdlskjd",
      date: "04 December 2023",
    },
    {
      name: "BNB",
      type: "Binance Coin",
      network: "BTC-41",
      address: "fdhgfhfghjnhgjhgjdfsdfjskjdiasjjlkdlskjd",
      date: "04 December 2023",
    },
  ];

  const apiData = [
    { name: "PluginCart", type: "Plugin" },
    { name: "ShopAPI", type: "Restfull" },
    { name: "PluginAmo", type: "Plugin" },
    { name: "ShopPay", type: "Restfull" },
    { name: "APIDash", type: "Plugin" },
  ];

  const pluginData = [
    { name: "Prestashop", type: "Categories" },
    { name: "Magento", type: "Categories" },
    { name: "Ecwid", type: "Categories" },
  ];

  const ticketData = [
    {
      name: "Ticket Name Number 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "13/09/2023  22:22",
      seen: true,
    },
    {
      name: "Ticket Name Number 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "13/09/2023  22:22",
      seen: false,
    },
  ];

  return (
    <div className="flex flex-col gap-7">
      <div className="bg-dashboard-gradient xl:pl-16 items-center rounded-xl mt-5 justify-between  flex flex-col xl:flex-row">
        <div className="flex xl:flex-row flex-col py-12 gap-6 xl:gap-16 items-center">
          <DashboardLogo />
          <div className="bg-white w-[1px] xl:block hidden" />
          <div className="flex flex-col gap-2.5 text-white">
            <span className="font-normal text-base">Dashboard</span>
            <span className="font-bold text-lg lg:text-3xl">
              Hi, Emanuel Stallone!
            </span>
            <span className="font-bold text-base text-icon">
              Welcome to the dashboard
            </span>
          </div>
        </div>
        <div className="justify-end hidden xl:flex">
          <DashboardBackground />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-7">
        <div className="xl:w-4/12 w-full shadow-3xl bg-white px-10 py-6 rounded-xl">
          <div className="flex justify-between items-center sm:flex-row flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold">{merchants?.total_data}</span>
              <span className="text-primary text-base font-bold">
                {"Merchants List"}
              </span>
            </div>
            <div
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2.5 bg-card_light flex items-center justify-center gap-1 rounded-xl cursor-pointer w-full sm:w-auto"
            >
              <div className="bg-primary p-1 rounded-full">
                <FaPlus className="text-card_light text-xs" />
              </div>
              <span className="text-primary font-bold text-sm">
                {"Add Merchant"}
              </span>
            </div>

            <ModalCreateMerchant
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
          <div className="flex flex-col gap-2.5 pt-3.5">
            {merchants?.data?.map((item: any, index: number) => (
              <Link
                href={`/dashboard/merchant/${item?.id}`}
                key={item?.id}
                className="px-5 py-2.5 bg-grayLight rounded-xl flex justify-between items-center cursor-pointer"
              >
                <div className="flex items-center gap-1.5 text-sm font-bold text-text">
                  <div className="w-1.5 h-1.5 bg-black rounded-full" />
                  {item?.name}
                </div>
                <RiArrowRightSLine className="text-2xl" />
              </Link>
            ))}
          </div>
          <div className="pt-6 flex gap-1 text-grayText">
            <AiOutlineExclamationCircle className="text-lg" />
            <span className="text-xs">
              {"Click on each merchant to display statistics"}
            </span>
          </div>
        </div>
        <div className=" xl:w-8/12 w-full shadow-3xl bg-white px-10 py-6 rounded-xl">
          <div className="flex justify-between items-center sm:flex-row flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold">{"6"}</span>
              <span className="text-primary text-base font-bold">
                {"Wallet List"}
              </span>
            </div>
            <div className="px-5 py-2.5 bg-card_light flex items-center justify-center gap-1 rounded-xl cursor-pointer w-full sm:w-auto">
              <div className="bg-primary p-1 rounded-full">
                <FaPlus className="text-card_light text-xs" />
              </div>
              <span className="text-primary font-bold text-sm">
                {"New Wallet"}
              </span>
            </div>
          </div>
          <div className="pt-3 gap-0.5">
            {walletData.map((item, index) => (
              <div
                key={index}
                className="flex items-center py-2.5 px-7 justify-between odd:bg-grayLight rounded-xl flex-wrap"
              >
                <div className="flex  gap-3.5">
                  <div className="bg-slate-400 w-16 h-10 rounded-xl"></div>
                  <div className="flex flex-col ">
                    <span className="text-base text-text font-bold">
                      {item.name}
                    </span>
                    <span className="text-xs text-grayText">{item.type}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-10 flex-wrap">
                  <div className="flex flex-col gap-1">
                    <span className="text-grayText text-xs font-bold">
                      {"Network:"}
                    </span>
                    <span className="text-text text-xs font-bold">
                      {item.network}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-grayText text-xs font-bold">
                      {"Wallet Address::"}
                    </span>
                    <span className="text-text text-xs font-bold flex items-center gap-4 flex-wrap">
                      {item.address}
                      <MdOutlineContentCopy className="text-grayText cursor-pointer text-lg" />
                    </span>
                  </div>
                  <span className="text-xs">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-7">
        <div className="lg:w-4/12 w-full shadow-3xl rounded-xl bg-white px-10 py-6">
          <div className="flex justify-between items-center sm:flex-row flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold">{"5"}</span>
              <span className="text-primary text-base font-bold">
                {"API List"}
              </span>
            </div>
            <div className="px-5 py-2.5 bg-card_light flex items-center justify-center gap-1 rounded-xl cursor-pointer w-full sm:w-auto">
              <span className="text-primary font-bold text-sm">
                {"API Managment"}
              </span>
            </div>
          </div>
          <div className="pt-5 flex lg:flex-row flex-col flex-wrap justify-between gap-y-4">
            {apiData.map((item, index) => (
              <div key={index} className="flex gap-1 text-sm">
                <span className="font-bold">{index + 1}.</span>
                <span>{item.name}</span>
                <span
                  className={`py-1 px-2 text-xs font-bold rounded-xl ${
                    item.type === "Plugin"
                      ? "text-primary bg-primary_light"
                      : "text-text bg-grayLight"
                  }`}
                >
                  {item.type}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <div className="mt-7 flex gap-1 text-grayText">
              <AiOutlineExclamationCircle className="text-lg" />
              <span className="text-xs">{"Learn more about the API"}</span>
            </div>
            <div className="flex text-text gap-1 rounded-xl border border-borderGray px-4  items-center cursor-pointer">
              <AiOutlineExclamationCircle className="text-lg" />
              <span className="font-bold text-xs">{"Guide API"}</span>
            </div>
          </div>
        </div>
        <div className="lg:w-4/12 w-full shadow-3xl rounded-xl bg-white px-10 py-6">
          <div className="flex justify-between items-center sm:flex-row flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-primary text-base font-bold">
                {"Last Update Plugin"}
              </span>
            </div>
            <div className="px-5 py-2.5 bg-card_light flex items-center justify-center gap-1 rounded-xl cursor-pointer w-full sm:w-auto">
              <span className="text-primary font-bold text-sm">
                {"All Plugin"}
              </span>
            </div>
          </div>
          <div className="mt-4 flex gap-2 overflow-x-auto">
            {pluginData.map((item, index) => (
              <div
                className="flex flex-col items-center px-6 py-2.5 border border-borderGray rounded-2xl"
                key={index}
              >
                <div className="h-[55px] w-[55px] bg-slate-400 rounded-full"></div>
                <span className="text-sm font-bold text-text">{item.name}</span>
                <span className="text-grayText text-xs font-bold">
                  {item.type}
                </span>
                <button className="bg-card_light p-2 rounded-xl text-primary hover:text-white hover:bg-primary mt-2">
                  <DownloadLogo />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-4/12 w-full shadow-3xl rounded-xl bg-white px-10 py-6">
          <div className="flex justify-between items-center sm:flex-row flex-col">
            <div className="flex items-center gap-0.5">
              <span className="text-primary text-base font-bold">
                {"Tickets"}
              </span>
              <span className="text-xs font-bold bg-redText text-white rounded-full px-1">
                {"3"}
              </span>
            </div>
            <div className="px-5 py-2.5 bg-card_light flex items-center justify-center gap-1 rounded-xl cursor-pointer w-full sm:w-auto">
              <div className="bg-primary p-1 rounded-full">
                <FaPlus className="text-card_light text-xs" />
              </div>
              <span className="text-primary font-bold text-sm">
                {"New ticket"}
              </span>
            </div>
          </div>
          <div className="pt-3 flex flex-col ">
            {ticketData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-1 px-5 py-4 odd:bg-grayLight rounded-xl"
              >
                <div className="flex justify-between flex-wrap">
                  <span className="text-sm font-bold">{item.name}</span>
                  <div className="flex items-center gap-2.5">
                    <span className="text-grayText text-xs">{item.date}</span>
                    {!item.seen && (
                      <div className="bg-primary rounded-full w-2 h-2" />
                    )}
                  </div>
                </div>
                <div className="overflow-x-auto h-5">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
