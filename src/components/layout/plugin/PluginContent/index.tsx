"use client";

import { FC } from "react";
import { Divider } from "@mui/material";
import DownloadLogo from "$/public/icons/download.svg";
import htmlParser from "@/tools/functions/htmlParser";
import { useZustandStore } from "@/store";
import Image from "next/image";
import { useIsClient } from "@/hooks/useIsClient";

interface IProps {
  pluginData: any;
}

const PluginContent: FC<IProps> = ({ pluginData }) => {
  const isClient = useIsClient();
  const { plugin } = useZustandStore((store) => store);

  const data = pluginData ? pluginData : plugin;

  if (!isClient) return null;

  return (
    <div className="flex flex-col px-3 sm:px-[10px]  space-y-5">
      <div className="flex h-full gap-2 p-12 bg-card  border-l-[1px] border-solid border-borderGray rounded-tl-none rounded-bl-none rounded-[12px] my-7">
        <div className="w-full pr-12">
          <div className="w-full flex flex-col justify-end items-end">
            <div className="w-full flex gap-5">
              <div className="relative w-28 h-28 flex justify-center items-center rounded-full">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}plugin/logo/{image_addr}?logo_addr=${data.logo_addr}`}
                  className="rounded-full"
                  fill
                  alt=""
                />
              </div>
              <div>
                <h2 className="font-bold text-3xl">{data?.name}</h2>
                <p className="text-sm font-bold text-grayText w-[550px]">
                  {data?.description}
                </p>
                <span className="text-xs font-bold text-gold">
                  {data?.category_title}
                </span>
              </div>
            </div>
            <Divider className="my-4" flexItem />
            <a
              href={`http://65.21.64.202:8000/plugin/file/{image_addr}?file=${data?.file}`}
              target="_blank"
              className="flex items-center gap-1 hover:shadow-[0px_10px_20px_0px_#1093ff4d] transition bg-primary text-white text-[14px] text-center px-6 py-[10px] rounded-[12px]"
            >
              <DownloadLogo />
              Download
            </a>
          </div>
          <div>{htmlParser(data?.content)}</div>
        </div>
        <Divider orientation="vertical" flexItem />
        <aside className="w-full max-w-[20%] px-8 font-bold">
          <div className="flex flex-col gap-6">
            <div className="w-full flex justify-between">
              <span className="text-grayText">Last Updated:</span>
              <span>
                {new Date(Number(data?.updated_at)).toLocaleDateString("en-US")}
              </span>
            </div>
            <div className="w-full flex justify-between">
              <span className="text-grayText">Version: </span>
              <span>{data?.version}</span>
            </div>
            <div className="w-full flex justify-between">
              <span className="text-grayText">Downloads:</span>
              <span>{data?.downloads}</span>
            </div>
          </div>
          <Divider className="my-6" />

          <div className="flex flex-col gap-3">
            <h5>Related Content</h5>
            <ul className="flex flex-col gap-3 ">
              {data?.related_content?.map((item: any) => (
                <a
                  href={item?.link}
                  key={item?.link}
                  target="_blank"
                  className="text-grayText"
                >
                  {item?.title}
                </a>
              ))}
            </ul>
          </div>
          <div className=" flex flex-col gap-2 py-6">
            <h5>Tags:</h5>
            <ul className="flex flex-wrap gap-1">
              {data?.tags?.map((i: any, index: number) => (
                <span
                  className="text-primary bg-card_light px-3 py-1 text-xs rounded-xl"
                  key={index}
                >
                  {i}
                </span>
              ))}
            </ul>
          </div>
          <Divider />
        </aside>
      </div>
    </div>
  );
};

export default PluginContent;
