"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Grid } from "@mui/material";
import Logo from "$/public/images/logo.svg";
import DownloadLogo from "$/public/icons/download.svg";
import RightArrow from "$/public/icons/rightArrow.svg";
import LeftArrow from "$/public/icons/leftArrow.svg";
import PcIcon from "$/public/icons/computer.svg";
import Search_wallet from "@/assets/search.svg";
import QrIcon from "$/public/icons/qrIcon.svg";
import Header from "@/components/pages/Dashboard/merchant/Header";
import WebsiteLayout from "@/components/layout/website";
import Container from "@mui/material/Container";
import PluginLayout from "@/components/layout/plugin";
import { authServiceHandler } from "@/api/auth.service";
import Pagination from "@/components/common/Pagination";
import { useZustandStore } from "@/store";

const NAV_ITEMS = [
  "All Plugins",
  "Hosting",
  "Server Managment",
  "CMS",
  "Cloud Space",
];

const PluginsPage = () => {
  const [currentTab, setCurrentTab] = useState("");
  const [pluginCategory, setPluginCategory] = useState<any>();
  const [plugins, setPlugins] = useState<any>();
  const [recentPlugins, setRecentPlugins] = useState<any>();
  const [serach, setSearch] = useState<any>("");
  const [currentPage, setCurrentPage] = useState(1);
  const pluginsScrollbarRef = useRef<HTMLUListElement>(null);

  const handleGetPluginCategories = async () => {
    const res = await authServiceHandler.getPluginCategories({});
    setPluginCategory(res.data.data);
  };

  const handleGetPlugins = async () => {
    const res = await authServiceHandler.getPlugins({
      category_id: currentTab,
      name: serach,
    });
    setPlugins(res.data);
  };

  const handleGetRecentPlugins = async () => {
    const res = await authServiceHandler.getPlugins({});
    setRecentPlugins(res.data.data);
  };

  useEffect(() => {
    handleGetPluginCategories();
    handleGetRecentPlugins();
  }, []);

  useEffect(() => {
    pluginCategory && handleGetPlugins();
  }, [pluginCategory, currentTab, serach]);

  return (
    <WebsiteLayout>
      <PluginLayout>
        <div className="flex bg-card flex-col p-[30px] border-l-[1px] border-solid border-borderGray rounded-[12px] rounded-tl-none rounded-bl-none text-sm gap-6 mt-7 mb-7 ">
          <div className="flex flex-col gap-5">
            <ul
              className="w-full flex gap-3 overflow-auto"
              ref={pluginsScrollbarRef}
            >
              {recentPlugins?.map((i: any) => (
                <li
                  key={i?.id}
                  className="flex flex-col gap-3 border-[1px] border-borderGray rounded-2xl h-full px-6 py-5 min-w-[220px] mb-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="border-8 border-grayLight rounded-full flex items-center justify-center h-16 w-16">
                      <Image
                        src={`http://65.21.64.202:8000/plugin/logo/{image_addr}?logo_addr=${i?.logo_addr}`}
                        alt="logo"
                        width={45}
                        height={45}
                      />
                    </span>
                    <div className="flex flex-col font-bold">
                      <span>{i?.name}</span>
                      <span className="text-[10px]">{i?.category_title}</span>
                    </div>
                  </div>
                  <p className="text-xs text-grayText text-justify">
                    {i?.description}
                  </p>
                  <footer className="w-full flex justify-between gap-2">
                    <a
                      href={`http://65.21.64.202:8000/plugin/file/{image_addr}?file=${i?.file}`}
                      target="_blank"
                      className="bg-card_light p-2 rounded-xl text-primary hover:text-white hover:bg-primary"
                    >
                      <DownloadLogo />
                    </a>
                    <Link
                      href={`/plugin/${i?.id}`}
                      className="border-borderGray border-[1px] px-6 py-1 rounded-xl font-bold"
                    >
                      Learn More
                    </Link>
                  </footer>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <header>
              <div className="text-sm">
                <div className="flex gap-1 items-center ">
                  <span>
                    <QrIcon />
                  </span>
                  <span className="font-bold">All plugins</span>
                </div>
                <span className="text-xs text-grayText">
                  List of all plugins that can be used for digital currency
                  payment
                </span>
              </div>
            </header>
            <nav className="flex justify-between">
              <ul className="flex items-center bg-grayLight text-grayText py-2 px-4 font-bold gap-4 rounded-xl">
                <li
                  onClick={() => setCurrentTab("")}
                  className={`${
                    "" === currentTab ? "text-primary bg-card shadow-md" : ""
                  } px-8 py-1 rounded-xl select-none cursor-pointer `}
                >
                  {"All Plugins"}
                </li>
                {pluginCategory?.map((i: any) => (
                  <li
                    key={i}
                    onClick={() => setCurrentTab(i?.id)}
                    className={`${
                      i?.id === currentTab
                        ? "text-primary bg-card shadow-md"
                        : ""
                    } px-8 py-1 rounded-xl select-none cursor-pointer `}
                  >
                    {i?.title}
                  </li>
                ))}
              </ul>
              <div className="flex mt-3 items-center justify-between px-[14px] h-[36px] rounded-[12px] bg-grayLight w-full max-w-[230px]">
                <div className="w-full">
                  <input
                    type="text"
                    value={serach}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 bg-transparent w-full text-grayText font-semibold text-[14px] focus:border-none focus:outline-none"
                    placeholder={"Search..."}
                  />
                </div>
                <span>
                  <Search_wallet />
                </span>
              </div>
            </nav>
            <ul className="flex flex-wrap gap-2 w-full">
              {plugins?.data?.map((item: any) => (
                <li
                  key={item?.id}
                  className="border-[1px]  p-3 rounded-[18px]  min-w-[235px]"
                >
                  <div className="flex items-center gap-2 justify-between">
                    <div className="flex items-center gap-2">
                      <span className="border-8 border-grayLight rounded-full ">
                        <Image
                          src={`http://65.21.64.202:8000/plugin/logo/{image_addr}?logo_addr=${item?.logo_addr}`}
                          alt="logo"
                          width={42}
                          height={42}
                        />
                      </span>
                      <div className="flex flex-col font-bold">
                        <span>{item?.name}</span>
                        <span className="text-[10px]">
                          {item?.category_title}
                        </span>
                      </div>
                    </div>
                    <a
                      href={`http://65.21.64.202:8000/plugin/file/{image_addr}?file=${item?.file}`}
                      target="_blank"
                      className="bg-card_light p-2 rounded-xl text-primary hover:text-white hover:bg-primary"
                    >
                      <DownloadLogo />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            <Pagination
              totalPage={plugins?.total_page}
              containerClass="mx-auto mt-6"
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </PluginLayout>
    </WebsiteLayout>
  );
};

export default PluginsPage;
