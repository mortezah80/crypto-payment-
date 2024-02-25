"use client";
import WebsiteLayout from "@/components/layout/website";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { BiChevronRight } from "react-icons/bi";
import blog_test from "@/assets/Test/blog/blog_test.png";
import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { FiChevronRight } from "react-icons/fi";
import { PiShareFat } from "react-icons/pi";
import { authServiceHandler } from "@/api/auth.service";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import htmlParser from "@/tools/functions/htmlParser";
import Link from "next/link";

const BlogContent = () => {
  const [post, setPost] = useState<any>();
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const params = useParams();
  const handleGetBlog = async () => {
    const res = await authServiceHandler.blogPost(params.blogId);
    setPost(res.data.data);
  };

  const handlegetBlog = async () => {
    const res = await authServiceHandler.blogs({});
    setPosts(res.data.data);
  };

  const handleGetCategory = async () => {
    const res = await authServiceHandler.blogCategory({});
    setCategories(res.data.data);
  };

  useEffect(() => {
    params.blogId && handleGetBlog();
  }, [params.blogId]);

  useEffect(() => {
    handleGetCategory();
    handlegetBlog();
  }, []);

  return (
    <WebsiteLayout>
      <Grid container rowGap={5} className="max-w-[1300px] px-8">
        <Grid container xs={12}>
          <Grid md={8}>
            <div className="w-full flex flex-col">
              <div className="w-full flex items-center gap-4 text-xs text-grayText font-bold p-2 max-md:text-[10px]">
                <span>Blog</span>
                <div>
                  <BiChevronRight />
                </div>
                {/* blog category */}
                <span>{post?.category_title}</span>
                <div>
                  <BiChevronRight />
                </div>
                {/* blog title */}
                <div className="whitespace-nowrap overflow-hidden text-ellipsis">
                  {post?.title}
                </div>
              </div>
              <div className="w-full relative flex justify-center">
                <div className="text-text flex justify-center items-center text-sm font-bold absolute z-10 p-2 w-[120px] h-10 right-14 top-0 rounded-b-[6px] opacity-80 bg-gold shadow-[0px_20px_30px_0px_#00000001a] max-md:text-[10px]">
                  {post?.difficulty}
                </div>

                <div className="h-[450px]">
                  <Image
                    src={`http://65.21.64.202:8000/blog/cover/${post?.image_addr}`}
                    fill
                    alt="blog-image"
                    className="max-h-[450px] rounded-xl"
                  />
                </div>

                <p className="w-11/12 h-28 p-1 absolute -bottom-12 z-10 rounded-xl bg-card shadow-[0px_20px_30px_0px_#0000001a] flex justify-center items-center px-12 py-7 text-2xl text-text font-bold max-md:text-sm max-md:h-16 max-md:px-5 max-md:py-3">
                  {post?.title}
                </p>
              </div>
              <p className="mt-20 text-sm text-text text-justify font-bold leading-7 max-md:hidden">
                {htmlParser(post?.content)}
              </p>
            </div>
          </Grid>
          <Grid md={4} xs={12}>
            <div className="w-full flex flex-col pl-9 gap-9 max-md:pl-0 max-md:pt-20">
              <div className="w-full flex flex-col gap-7">
                <div className="w-full flex items-center justify-end gap-3 max-md:justify-center">
                  <div className="w-[115px] h-7 flex justify-between items-center rounded-xl bg-grayLight text-xs text-text font-bold max-md:text-[10px]">
                    <div className="cursor-pointer w-[75px] h-full rounded-xl border-[1px] border-borderGray bg-white flex justify-center items-center gap-1 p-1">
                      <AiOutlineLike /> Like
                    </div>
                    <span className="px-3">{post?.like_count}</span>
                  </div>
                  <div className="w-[145px] h-7 px-3 py-1 flex justify-between items-center rounded-xl border-[1px] border-borderGray text-xs text-text font-bold cursor-pointer max-md:text-[10px]">
                    <div className="h-full rounded-xl flex justify-center items-center gap-1">
                      <PiShareFat /> Share
                    </div>
                    <span>{post?.share_count}</span>
                    <RiArrowDownSLine />
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <span className="text-primary text-sm font-bold max-md:hidden">
                    Categories Tag
                  </span>
                  <div className="flex flex-wrap gap-2 w-full max-md:justify-center">
                    {post?.tags?.map((c: any, index: number) => (
                      <div
                        key={index}
                        className="flex justify-center items-center px-3 py-1 h-7 rounded-xl border-[1px] border-borderGray text-xs text-text max-md:text-[10px]"
                      >
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center gap-4 text-xs text-grayText font-bold max-md:justify-center max-md:text-[10px]">
                  <span>{new Date(post?.created_at).toLocaleString()}</span>
                  <span>By {post?.creator_user}</span>
                </div>
              </div>
              <p className="mt-20 text-sm text-text text-justify font-bold leading-7 hidden max-md:block max-md:mt-0">
                {post?.content}
              </p>
              <div className="w-full flex flex-col gap-2">
                <span className="text-primary text-sm font-bold max-md:text-center">
                  Categories
                </span>
                <div className="w-full flex flex-col gap-2">
                  {categories?.slice(0, 3)?.map((c: any) => (
                    <div
                      key={c}
                      className="w-full h-[90px] rounded-xl bg-card shadow-3xl flex justify-between relative py-3 pl-3 pr-6"
                    >
                      <div className="flex gap-2">
                        <Image
                          src={`http://65.21.64.202:8000/blog-category/cover/${c?.image_addr}`}
                          alt={c?.title}
                          width={64}
                          height={64}
                          className="rounded-[10px]"
                        />
                        <div className="flex flex-col gap-3 text-xs font-bold">
                          <span className="text-text">{c?.title}</span>
                          <p className="text-grayText overflow-x-hidden h-8 text-ellipsis w-full max-w-[85%]">
                            {c?.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col  gap-3 text-xs font-bold max-w-fit items-end">
                        <span className="text-grayText">
                          {new Date(c?.created_at).toLocaleString()}
                        </span>
                        <button className="text-white text-[20px] w-[20px] h-[20px] rounded-full bg-icon">
                          <FiChevronRight />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-3/5 flex justify-center items-center h-9 rounded-xl bg-card_light ml-auto text-sm text-primary font-bold max-md:w-1/2 max-md:mx-auto">
                  Show All Categories
                </button>
              </div>
              <div className="w-full flex flex-col gap-2">
                <span className="text-primary text-sm font-bold max-md:text-center">
                  Latest Articles
                </span>
                <div className="w-full flex flex-col gap-2">
                  {posts?.slice(0, 6)?.map((c: any) => (
                    <Link
                      href={`/blog/${c?.id}`}
                      key={c?.id}
                      className="w-full h-[90px] rounded-xl bg-card flex gap-3 py-3 pl-3 pr-6 cursor-pointer shadow-3xl"
                    >
                      <Image
                        src={`http://65.21.64.202:8000/blog/cover/${c?.image_addr}`}
                        alt={c?.title}
                        width={120}
                        height={64}
                        className="rounded-[10px]"
                      />
                      <p className="text-text text-sm font-bold h-full overflow-x-hidden text-ellipsis">
                        {c?.title}
                      </p>
                    </Link>
                  ))}
                </div>
                <button className="w-1/3 flex justify-center items-center h-9 rounded-xl bg-card_light ml-auto text-sm text-primary font-bold max-md:mx-auto">
                  Show All
                </button>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid xs={12}>
          <div className="flex flex-col items-center gap-12 w-full">
            <span className="text-primary font-bold text-base">
              Related Content
            </span>
            <div className="flex justify-between w-full gap-8 max-md:flex-col max-md:justify-start max-md:gap-10">
              {posts?.slice(0, 3)?.map((i: any) => (
                <div
                  className="p-6 font-bold flex flex-col gap-5 hover:shadow-4xl rounded-3xl shadow-3xl bg-card w-full"
                  key={i?.id}
                >
                  <div className="relative -top-[50px] -mb-[50px] w-full">
                    <div className="w-full h-[180px]">
                      <Image
                        src={`http://65.21.64.202:8000/blog/cover/${i?.image_addr}`}
                        alt="blog-image"
                        className="rounded-[18px] w-full h-full"
                        fill
                      />
                    </div>

                    <div className="text-text flex justify-center items-center text-[10px] font-bold absolute z-30 p-1 right-[25px] top-0 w-20 h-6 rounded-b-[6px] opacity-80 bg-gold shadow-[0px_20px_30px_0px_#00000001a]">
                      {i?.difficulty}
                    </div>
                  </div>
                  <h5 className="hover:text-primary">{i?.title}</h5>
                  <p className="text-xs text-grayText">By {i?.creator_user}</p>
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs text-grayText">
                      {new Date(i?.created_at).toLocaleString()}
                    </span>
                    <Link
                      href={`/blog/${i?.id}`}
                      className="text-sm border-2 border-primary px-6 py-2 text-primary rounded-xl"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Grid>
      </Grid>
    </WebsiteLayout>
  );
};

export default BlogContent;
