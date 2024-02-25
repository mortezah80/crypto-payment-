"use client";
import ProfileInfo from "@/components/pages/Admin/users/Profile";
import Test from "@/assets/Test/avatar/Vector.png";
import BackVectorIcon from "@/assets/Admin/back.svg";
import ApiItem from "@/components/api/ApiItem";
import Pagination from "@/components/common/Pagination";
import { Key, useState } from "react";

const apis:any = [
  {
    user: "PluginCart",
    avatar: Test,
    date: new Date(),
    name: "Prestashop",
    id: "zxcvbnmasdfghjklqwertyuiopasdfgh",
    type: "Restfull",
    url: "http://Myshop.com/emanuelcoin",
  },
  {
    user: "PluginCart",
    avatar: Test,
    date: new Date(),
    name: "Prestashop",
    id: "zxcvbnmasdfghjklqwertyuiopasdfgh",
    type: "Restfull",
    url: "http://Myshop.com/emanuelcoin",
  },
  {
    user: "PluginCart",
    avatar: Test,
    date: new Date(),
    name: "Prestashop",
    id: "zxcvbnmasdfghjklqwertyuiopasdfgh",
    type: "Restfull",
    url: "http://Myshop.com/emanuelcoin",
  },
  {
    user: "PluginCart",
    avatar: Test,
    date: new Date(),
    name: "Prestashop",
    id: "zxcvbnmasdfghjklqwertyuiopasdfgh",
    type: "Restfull",
    url: "http://Myshop.com/emanuelcoin",
  },
  {
    user: "PluginCart",
    avatar: Test,
    date: new Date(),
    name: "Prestashop",
    id: "zxcvbnmasdfghjklqwertyuiopasdfgh",
    type: "Restfull",
    url: "http://Myshop.com/emanuelcoin",
  },
];
const UserApi = () => {
  const [page , setPage] = useState(1)
  return (
    <div className="bg-card rounded-xl py-8 px-14 mt-6 shadow-[0px_15px_20px_1px_#0000000d]">
      <div className="flex items-center justify-between">
        <ProfileInfo
          email="Emanuel.St1370@gmail.com"
          userName="Emanuel Stallone"
        />
        <button className="bg-grayLight text-text font-bold px-5 py-1.5 rounded-full flex items-center space-x-1 text-xs">
          <BackVectorIcon className="text-lg" />
          <span>Back to Profile</span>
        </button>
      </div>

      <div className="bg-card mt-10 relative  gap-y-[10px] max-lg:items-center max-lg:m-auto gap-x-[13px] grid grid-cols-4 max-lg:grid-cols-1">
        {apis.map((value:any, index: Key | null | undefined) => <ApiItem 
          user={value.user}
          avatar={value.avatar}
          name={value.name}
          date={value.date}
          type={value.type}
          id={value.id}
          url={value.url}
          key={index} />)}
      </div>
      <div className="flex items-center justify-center mt-12">
        <Pagination totalPage={10} currentPage={page} onPageChange={setPage} />
      </div>
    </div>
  );
};

export default UserApi;
