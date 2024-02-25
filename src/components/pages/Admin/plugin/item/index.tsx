import Image from "next/image";
import { FC, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { PiPencilSimpleLine } from "react-icons/pi";

interface IProps {
  plugin: any;
  editPlugin: (plugin: any) => void;
  deletePlugin: (id: string) => void;
  deleteLoading: boolean;
  editLoading: boolean;
}

const PluginItem: FC<IProps> = ({
  plugin,
  editPlugin,
  deletePlugin,
  deleteLoading,
  editLoading,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between bg-grayLight rounded-2xl p-5 mx-2 max-sm:w-full max-sm:mx-0 max-sm:gap-2">
      <div className="flex items-center">
        <div className="bg-card w-[62px] h-[62px] flex justify-center items-center rounded-full">
          <div className="w-[45px] h-[45px] relative">
            {/* <Image
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}plugin/logo/${plugin?.logo_addr}`}
              alt="logo"
              fill
              style={{ objectFit: "cover", borderRadius: "50px" }}
              onError={(e) => {
                e.type === "error" && setNotFoundImage(true);
              }}
            /> */}
          </div>
        </div>
        <div className="flex flex-col items-start font-bold justify-center ml-[7px] max-sm:w-fit">
          <span className="text-text text-[14px]">{plugin?.name}</span>
          <span className="text-[12px] mt-[17px]">{plugin?.description}</span>
        </div>
      </div>
      <div className="flex items-end flex-col max-sm:w-full">
        <div className="flex items-center max-sm:justify-between max-sm:w-full">
          <span className="text-[12px] text-text">
            {new Date(plugin?.created_at)?.toLocaleString()}
          </span>
          <div className="flex items-center text-[15px] ml-[44px] space-x-[20px]">
            <button
              onClick={() => editPlugin(plugin)}
              className={`${editLoading ? "cursor-not-allowed" : ""}`}
            >
              <PiPencilSimpleLine className="text-text" />
            </button>
            <button
              onClick={() => deletePlugin(plugin.id)}
              className={`${deleteLoading ? "cursor-not-allowed" : ""}`}
            >
              <HiOutlineTrash className="text-trashRed" />
            </button>
          </div>
        </div>
        <div className="mt-[12px] w-[111px] h-[24px] bg-alterGray rounded-[12px] text-grayText flex items-center justify-center text-[12px] font-bold">
          <span>{plugin?.category_title}</span>
        </div>
      </div>
    </div>
  );
};

export default PluginItem;
