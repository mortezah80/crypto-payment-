"use client";
import React, { useRef, useState } from "react";
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

const NAV_ITEMS = [
  "All Plugins",
  "Hosting",
  "Server Managment",
  "CMS",
  "Cloud Space",
];

const PluginsPage = () => {
  const [currentTab, setCurrentTab] = useState("All Plugins");
  const pluginsScrollbarRef = useRef<HTMLUListElement>(null);
  const [currentViewIndex, setCurrentViewIndex] = useState(1);
  const addViewIndexHandler = () => {
    setCurrentViewIndex(currentViewIndex + 1);
  };


  return (
    <div className="w-full flex bg-card flex-col p-[30px] shadow-3xl rounded-[12px] text-sm gap-6 mt-7 overflow-hidden">
      <div className="flex flex-col gap-5">
        <header>
          <div className="text-sm">
            <div className="flex gap-1 items-center ">
              <span>
                <PcIcon />
              </span>
              <span className="font-bold">Recommended</span>
            </div>
            <div className="w-full flex ">
              <span className="w-full text-xs text-grayText">
                List of commonly used plugins
              </span>
              <div className="flex">
                <span>{currentViewIndex}/5</span>
                <button>
                  <LeftArrow />
                </button>
                <button>
                  <RightArrow />
                </button>
              </div>
            </div>
          </div>
        </header>
        <ul
          className="w-full flex gap-3 overflow-auto"
          ref={pluginsScrollbarRef}
        >
          {[1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13].map((i) => (
            <li
              key={i}
              className="flex flex-col gap-3 border-[1px] border-borderGray rounded-2xl h-full px-6 py-5 min-w-[220px] mb-2"
            >
              <div className="flex items-center gap-2">
                <span className="border-8 border-grayLight rounded-full ">
                  <Logo />
                </span>
                <div className="flex flex-col font-bold">
                  <span>Prestashop</span>
                  <span className="text-[10px]">Categories</span>
                </div>
              </div>
              <p className="text-xs text-grayText text-justify">
                To simplify REST API requests Plisio uses HTTP GET method only
                and returns JSON format only.
              </p>
              <footer className="w-full flex justify-between gap-2">
                <button className="bg-card_light p-2 rounded-xl text-primary hover:text-white hover:bg-primary">
                  <DownloadLogo />
                </button>
                <Link
                  href="/dashboard/plugin/123"
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
              List of all plugins that can be used for digital currency payment
            </span>
          </div>
        </header>
        <nav className="flex justify-between">
          <ul className="flex items-center bg-grayLight text-grayText py-2 px-4 font-bold gap-4 rounded-xl">
            {NAV_ITEMS.map((i) => (
              <li
                key={i}
                onClick={() => setCurrentTab(i)}
                className={`${
                  i === currentTab ? "text-primary bg-card shadow-md" : ""
                } px-8 py-1 rounded-xl select-none cursor-pointer `}
              >
                {i}
              </li>
            ))}
          </ul>
          <div className="flex mt-3 items-center justify-between px-[14px] h-[36px] rounded-[12px] bg-grayLight w-full max-w-[230px]">
            <div className="w-full">
              <input
                type="text"
                className="flex-1 bg-transparent w-full text-grayText font-semibold text-[14px] focus:border-none focus:outline-none"
                placeholder={"Search..."}
              />
            </div>
            <span>
              <Search_wallet />
            </span>
          </div>
        </nav>
        <ul>
          <li className="border-[1px] max-w-[235px] p-3 rounded-[18px]">
            <div className="flex items-center gap-2 justify-between">
              <div className="flex items-center gap-2">
                <span className="border-8 border-grayLight rounded-full ">
                  <Image src={Logo} alt="" />
                </span>
                <div className="flex flex-col font-bold">
                  <span>Prestashop</span>
                  <span className="text-[10px]">Categories</span>
                </div>
              </div>
              <button className="bg-card_light p-2 rounded-xl text-primary hover:text-white hover:bg-primary">
                <DownloadLogo />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PluginsPage;
