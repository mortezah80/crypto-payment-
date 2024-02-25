"use client";
import { BsSearch } from "react-icons/bs";
import CustomSelect from "@/components/common/SelectFilter";
import BlogPost from "@/components/blog/Post";
import Image from "next/image";
import CategoryItem from "@/components/blog/Category";
import blog_test from "@/assets/Test/blog/blog_test.png";
import { Key, useEffect, useState } from "react";
import WebsiteLayout from "@/components/layout/website";
import { authServiceHandler } from "@/api/auth.service";
import {
  BLOG_SORT_BY_OPTIONS,
  DIFFICULTY_OPTIONS,
} from "@/configs/filter-options";
import Link from "next/link";

const Blog = () => {
  const [posts, setPosts] = useState<any>([]);
  const handlegetBlog = async () => {
    const res = await authServiceHandler.blogs({});
    setPosts(res.data.data);
  };

  const [categories, setCategories] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedSortBy, setSelectedSortBy] = useState("created_at");

  const handleGetCategory = async () => {
    const res = await authServiceHandler.blogCategory({});
    setCategories(res.data.data);
  };

  useEffect(() => {
    handlegetBlog();
    handleGetCategory();
  }, []);

  return (
    <WebsiteLayout>
      <div className="container m-auto">
        <div className="flex max-sm:mb-[8px] flex-col item-center mb-[42px]">
          <h1 className="text-primary text-center text-[32px] max-sm:text-[18px] font-bold mt-[50px]">
            Line GatePay BLog
          </h1>
          <span className="text-[16px] text-grayText text-center max-sm:text-[12px] max-sm:w-6/12 max-sm:m-auto font-bold">
            Follow the latest company’s news and announcements
          </span>
        </div>
        <div className=" flex w-full max-lg:flex-col max-lg:space-x-0 max-lg:text-center space-y-2 item-center max-lg:w-10/12 max-sm:w-full max-lg:m-auto justify-between p-[30px] space-x-[24px]">
          <div className="relative w-[546px] overflow-hidden text-center h-[285px] max-md:w-11/12 max-sm:w-full max-md:h-fit rounded-[18px] max-lg:m-auto border-primary border">
            <div className="absolute bg-icon text-text text-[10px] font-bold px-[14px] py-[6px] rounded-br-[10px] right-[28px] -top-[1px] rounded-bl-[10px]">
              <span>{posts[0]?.difficulty}</span>
            </div>
            <div className="w-full h-[285px]">
              <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}blog/cover/${posts[0]?.image_addr}`}
                alt="image test blog"
                fill
              />
            </div>
          </div>
          <div className="flex flex-col justify-between w-full">
            <div className="max-sm:hidden">
              <h3 className="text-text text-[22px] font-bold max-sm:text-[14px]">
                {posts[0]?.title}
              </h3>
              <span className="text-grayText text-[12px] font-bold mt-[10px]">
                {posts[0]?.creator_user}
              </span>
              <div className="flex item-center space-x-[7px] max-lg:justify-center max-lg:pb-[50px] pt-[34px]">
                {posts[0]?.tags.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="text-center rounded-[12px] px-[12px] py-[3px] text-text text-[12px] border border-grayDark"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-grayText font-bold">
                {new Date(posts[0]?.created_at).toLocaleString()}
              </span>
              <Link
                href={`/blog/${posts[0]?.id}`}
                className="hover:bg-card_light hover:text-primary hover:border-card_light transition rounded-[12px] border-primary text-primary border-[2px] text-[14px] font-bold text-center px-[31px] max-md:px-[23px] max-md:py-[6px] max-md:text-[12px] py-[9px]"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-[56px] max-md:mt-[28px] mb-[68px] max-md:mb-[30px] text-center">
          <h3 className="text-primary font-bold  text-[16px]">
            Categories List
          </h3>
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-[12px] max-md:gap-[10px]">
            {categories.map((value: any, index: Key | null | undefined) => {
              return <CategoryItem {...value} key={index} />;
            })}
          </div>
          <button className="text-center text-primary mt-[24px] max-sm:mt-[18px] font-bold text-[14px] max-sm:text-[12px] px-[44px] max-md:px-[33px] max-md:px-[36px] py-[10px] rounded-[12px] bg-card_light">
            Show All Categories
          </button>
        </div>
        <div className="flex item-center justify-between mb-[30px] max-lg:flex-col max-lg:space-y-2 max-lg:justify-center max-lg:items-center">
          <h5 className="text-primary font-bold text-[16px]">
            Latest Articles
          </h5>
          <div className="text-grayText font-bold text-[14px] flex items-center max-lg:flex-col max-lg:space-y-2 max-md:w-11/12">
            <div className="flex items-center max-md:flex-col max-md:space-y-[8px] max-md:items-center max-md:w-full">
              <div className="flex items-center max-md:justify-between w-full">
                <span>Difficulty:</span>
                <div className="w-[165px]">
                  <CustomSelect
                    options={DIFFICULTY_OPTIONS}
                    select={selectedDifficulty}
                    setSelect={setSelectedDifficulty}
                  />
                </div>
              </div>

              <div className="flex items-center max-md:justify-between w-full">
                <span className="max-md:ml-0 ml-[52px]">Sort by:</span>
                <div className="w-[165px] ">
                  <CustomSelect
                    options={BLOG_SORT_BY_OPTIONS}
                    select={selectedSortBy}
                    setSelect={setSelectedSortBy}
                  />
                </div>
              </div>
            </div>
            <div className="w-[365px] max-md:w-full py-[9px] px-[12px] ml-[11px] bg-grayLight flex item-center justify-between rounded-[12px]">
              <input
                placeholder="Search..."
                className="text-grayText bg-transparent text-[14px]"
              />
              <BsSearch className="text-text text-[18px]" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-[15px] gap-[33px]">
          {posts?.map((value: any, index: Key | null | undefined) => (
            <BlogPost {...value} key={index} />
          ))}
        </div>
        <div></div>
      </div>
    </WebsiteLayout>
  );
};

export default Blog;
