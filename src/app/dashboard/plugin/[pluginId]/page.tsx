import React from "react";
import { Divider, Grid } from "@mui/material";
import Logo from "$/public/images/logo.svg";
import Dot from "$/public/icons/dot.svg";
import DownloadLogo from "$/public/icons/download.svg";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";

const SinglePluginPage = () => {
  return (
    <div className="flex flex-col sm:px-[10px]  space-y-5">
      <div className="flex h-full gap-2 p-12 bg-card shadow-3xl rounded-[12px]">
        <div className="w-full pr-12">
          <div className="w-full flex flex-col justify-end items-end">
            <div className="w-full flex gap-5">
              <Logo />
              <div>
                <h2 className="font-bold text-3xl">Prestashop</h2>
                <p className="text-sm font-bold text-grayText w-[550px]">
                  To simplify REST API requests Plisio uses HTTP GET method only
                  and returns JSON format only.
                </p>
                <span className="text-xs font-bold text-gold">Categories</span>
              </div>
            </div>
            <Divider className="my-4" flexItem />
            <button className="flex items-center gap-1 hover:shadow-[0px_10px_20px_0px_#1093ff4d] transition bg-primary text-white text-[14px] text-center px-6 py-[10px] rounded-[12px]">
              <DownloadLogo />
              Download
            </button>
          </div>
          <div className="flex flex-col gap-9 font-bold">
            <div>
              <h3 className="text-2xl">Peyload</h3>
              <p className="text-grayText mt-1">
                To simplify REST API requests Plisio uses HTTP GET method only
                and returns JSON format only.
              </p>
              <ul className="flex flex-col gap-4 mt-8">
                {[1, 2, 3, 4, 5].map((i, index) => (
                  <li
                    className="flex items-center gap-2 text-primary tracking-wide"
                    key={index}
                  >
                    <Dot className="text-grayText" />
                    To simplify REST API requests Line
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl">Red Message</h3>
              <p className="text-grayText mt-1">
                We&apos;ve made an open source library and plugins available for
                the API.
                <br /> Before you start using Plisio API, you must be registered
                and Site settings set up under account/api page to get your
                personal &quot;SECRET_KEY&quot;. This secret key will be used
                with all API calls.
              </p>
              <ul className="flex flex-col gap-4 mt-8">
                {[1, 2, 3].map((i, index) => (
                  <li
                    className="flex items-center gap-2 text-primary tracking-wide"
                    key={index}
                  >
                    <Dot className="text-grayText" />
                    To simplify REST API requests Line
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Divider orientation="vertical" flexItem />
        <aside className="w-full max-w-[20%] px-8 font-bold">
          <div className="flex flex-col gap-6">
            <div className="w-full flex justify-between">
              <span className="text-grayText">Last Updated:</span>
              <span>19/08/2023</span>
            </div>
            <div className="w-full flex justify-between">
              <span className="text-grayText">Version: </span>
              <span>4.2.2.25</span>
            </div>
            <div className="w-full flex justify-between">
              <span className="text-grayText">Downloads:</span>
              <span>100k+</span>
            </div>
          </div>
          <Divider className="my-6" />
          <div className=" flex flex-col pb-6">
            <span>On the Page</span>
            <span className="text-grayText">Get Started</span>
          </div>
          <div className="flex flex-col gap-3">
            <h5>Related Content</h5>
            <ul className="flex flex-col gap-3 ">
              <li className="text-grayText">Introduction</li>
              <li className="text-grayText">Setting Shop</li>
              <li className="text-grayText">HTTP Request</li>
              <li className="text-grayText">API Response</li>
            </ul>
          </div>
          <div className=" flex flex-col gap-2 py-6">
            <h5>Tags:</h5>
            <ul className="flex flex-wrap gap-1">
              {[1, 2, 3].map((i, index) => (
                <span
                  className="text-primary bg-card_light px-3 py-1 text-xs rounded-xl"
                  key={index}
                >
                  Introduction
                </span>
              ))}
            </ul>
          </div>
          <Divider />
          <div className="flex flex-col gap-3">
            <h5>Is this page helpful?</h5>
            <div className="flex w-32 justify-between">
              <button className="flex items-center gap-1 hover:text-primary">
                <FaRegThumbsUp />
                yes
              </button>
              <button className="flex items-center gap-1 hover:text-primary">
                <FaRegThumbsDown />
                no
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default SinglePluginPage;
