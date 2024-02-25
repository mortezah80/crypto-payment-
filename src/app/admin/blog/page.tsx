"use client";
import dynamic from "next/dynamic";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import TableItem from "@/components/pages/Admin/Blog/TableItem";
import NoteIcon from "@/assets/Admin/NoteIcon.svg";
import ReturnIcon from "$/public/icons/return.svg";
import AttachmentIcon from "$/public/icons/attachment.svg";
import Image from "next/image";
import TrashIcon from "$/public/icons/trash.svg";
import useOutside from "@/hooks/useOutside";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import Switch from "@/components/common/switch";
import ReactECharts from "echarts-for-react";
import SearchIcon from "$/public/icons/search.svg";
import Pagination from "@/components/common/Pagination";
import { authServiceHandler } from "@/api/auth.service";
import ManageCategoriesModal from "@/components/pages/Admin/Blog/ManageCategoriesModal";
import CustomSelect from "@/components/common/SelectFilter";
import CategorySelect from "@/components/pages/Admin/plugin/select/CategorySelect";
import {
  DIFFICULTY_OPTIONS,
  BLOG_SORT_BY_OPTIONS,
} from "@/configs/filter-options";
import Loading from "@/components/common/Loading";
import { useIsClient } from "@/hooks/useIsClient";

const TextEditor = dynamic(() => import("@/components/common/TextEditor"));

const Blog = () => {
  const isClient = useIsClient();

  const [currentPage, setCurrentPage] = useState(1);
  const [isNewBlogFormOpen, setIsNewBlogFormOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  const [active, setActive] = useState("weekly");
  const [categories, setCategories] = useState<any>([]);
  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [blogPosts, setBlogPosts] = useState<any>();
  const [blogPostsLoading, setBlogPostsLoading] = useState(false);
  const [blogData, setBlogData] = useState<any>();
  const [blogDataLoading, setBlogDataLoading] = useState(false);
  const [content, setContent] = useState<string>("<p></p>");
  const [title, setTitle] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<any>();
  const [selectedBlogListCategory, setSelectedBlogListCategory] =
    useState<any>();
  const [selectedBlogListDifficulty, setSelectedBlogListDifficulty] =
    useState("");
  const [selectedSortBy, setSelectedSortBy] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [img, setImg] = useState<any>();
  const [isManageCategoriesModalOpen, setIsManageCategoriesModalOpen] =
    useState(false);
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const [blogForEdit, setBlogForEdit] = useState<any>();
  const [blogForEditImg, setBlogForEditImg] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [publishLoading, setPublishLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false);

  const imageHandler = (data: File) => {
    setImg(data);
  };

  const handlePublish = async (e: any) => {
    try {
      setPublishLoading(true);
      e.preventDefault();
      const res = await authServiceHandler.publishBlog(img, {
        category_id: selectedCategory.id,
        difficulty: selectedDifficulty,
        tags: [],
        content,
        title,
      });
      handleGetBlogPosts();
      setShouldUpdate((prev) => !prev);
      setIsNewBlogFormOpen(false);
    } catch (error) {
    } finally {
      setPublishLoading(false);
    }
  };

  const handleEditBlog = async (e: any) => {
    try {
      setEditLoading(true);
      e.preventDefault();
      const req: {
        title?: string;
        content?: string;
        difficulty?: string;
        category_id?: string;
        publish?: true;
        tags?: Array<string>;
      } = {
        title: title,
        content: content,
        difficulty: selectedDifficulty,
        category_id: selectedCategory?.id,
      };
      if (blogForEdit.title === title) delete req.title;
      // if (blogForEdit.content === content) delete req.content;
      // if (blogForEdit.difficulty === selectedDifficulty) delete req.difficulty;
      // if (blogForEdit.category_id === selectedCategory?.id)
      //   delete req.category_id;
      const res = await authServiceHandler.editBlog(blogForEdit?.id, req, img);
      if (res.status === 202) {
        handleGetBlogPosts();
        setShouldUpdate((prev) => !prev);
        setIsNewBlogFormOpen(false);
      }
    } catch (error) {
    } finally {
      setEditLoading(false);
    }
  };

  const handleGetCategory = async () => {
    try {
      setCategoriesLoading(true);
      const res = await authServiceHandler.blogCategory({});
      setCategories(res.data.data);
    } catch (error) {
    } finally {
      setCategoriesLoading(false);
    }
  };

  const handleGetBlogPosts = async () => {
    try {
      interface IParameters {
        page: number;
        limit?: number;
        sort_by?: string;
        sort_type?: number;
        difficulty?: string;
        title?: string;
        deleted?: boolean;
        publish?: boolean;
        category_id?: string;
      }

      const parameters: IParameters = {
        page: currentPage,
        sort_by: selectedSortBy,
        difficulty: selectedBlogListDifficulty,
        title: searchTerm,
        category_id: selectedBlogListCategory?.id,
      };
      if (!selectedSortBy) delete parameters.sort_by;
      if (!selectedBlogListDifficulty) delete parameters.difficulty;
      if (!searchTerm) delete parameters.title;
      if (!selectedBlogListCategory?.id) delete parameters.category_id;
      setBlogPostsLoading(true);
      const res = await authServiceHandler.blogs(parameters);
      setBlogPosts(res.data);
    } catch (error) {
    } finally {
      setBlogPostsLoading(false);
    }
  };

  const handleGetBlogChart = async () => {
    try {
      setBlogDataLoading(true);
      const res = await authServiceHandler.blogChart({ time_frame: active });
      setBlogData(res.data.data);
    } catch (error) {
    } finally {
      setBlogDataLoading(false);
    }
  };

  const editBlog = (blog: any) => {
    setBlogForEdit(blog);
    setIsNewBlogFormOpen(true);
  };

  useEffect(() => {
    handleGetBlogChart();
  }, [active]);

  useEffect(() => {
    handleGetCategory();
  }, []);

  useEffect(() => {
    handleGetBlogPosts();
  }, [
    currentPage,
    selectedSortBy,
    selectedBlogListDifficulty,
    searchTerm,
    selectedBlogListCategory,
  ]);

  useEffect(() => {
    if (blogForEdit) {
      setTitle(blogForEdit.title);
      setContent(blogForEdit.content);
      setBlogForEditImg(blogForEdit.image_addr);
      const category = categories?.find(
        (c: any) => c.id === blogForEdit.category_id
      );
      setSelectedCategory(category);
      setSelectedDifficulty(blogForEdit.difficulty);
    }
  }, [blogForEdit]);

  useEffect(() => {
    if (!isNewBlogFormOpen) {
      setTitle("");
      setContent("");
      setImg(undefined);
      setBlogForEdit(null);
      setBlogForEditImg("");
      setSelectedCategory(null);
      setSelectedDifficulty("");
    }
  }, [isNewBlogFormOpen]);

  useEffect(() => {
    setCurrentPage(1);
  }, [
    selectedBlogListCategory,
    selectedDifficulty,
    selectedSortBy,
    searchTerm,
  ]);

  const categoryDropDownRef = useRef(null);

  useOutside(categoryDropDownRef, setIsCategoryDropdownOpen);

  const option = {
    grid: {
      left: "10%",
      right: "1%",
      top: 20,
      bottom: 25,
    },
    xAxis: {
      type: "category",
      data: blogData?.chart?.labels,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: blogData?.chart?.data,
        type: "line",
        lineStyle: {
          color: "#1093FF",
        },
      },
    ],
  };

  if (!isClient) return null;

  return (
    <div className="flex flex-col gap-5 pt-5">
      {!isNewBlogFormOpen ? (
        <>
          <div className="flex flex-wrap justify-between items-center gap-5">
            <div className="w-full max-w-[55%] h-[210px] rounded-xl bg-card shadow-[0px_15px_20px_0px_#0000000d] p-7 flex justify-between items-center gap-16 max-xl:max-w-none max-md:flex-col max-md:justify-start max-md:text-center max-md:h-auto">
              <div className="flex flex-col justify-between gap-3">
                <span className="text-lg text-primary font-bold">
                  View blog content
                </span>
                <div className="flex flex-col">
                  <span className="text-[48px] text-text font-bold">
                    {blogData?.total_view}
                  </span>
                  <span className="text-xs font-bold text-grayText -mt-3">
                    View in weekly
                  </span>
                </div>
                <Switch
                  first="weekly"
                  seconde="monthly"
                  active={active}
                  setActive={setActive}
                />
              </div>
              {blogDataLoading ? (
                <div className="w-full flex justify-center items-center">
                  <Loading size={80} />
                </div>
              ) : (
                <ReactECharts
                  style={{ height: 200, width: "100%" }}
                  option={option}
                />
              )}
            </div>
            <div className="w-full max-w-[20%] h-[210px] rounded-xl bg-card shadow-[0px_15px_20px_0px_#0000000d] p-7 flex flex-col justify-between items-center max-xl:max-w-[45%] max-md:max-w-none">
              <span className="text-lg text-text font-bold">Categories</span>
              <p className="text-center text-sm font-bold  text-grayText">
                Manage your Categories in this Item And{" "}
                <span className="text-primary">Create a New Category</span>
              </p>
              <button
                onClick={() => setIsManageCategoriesModalOpen(true)}
                className="w-full max-w-[200px] h-9 flex justify-center items-center text-center rounded-xl border-[1px] border-primary text-primary text-sm font-bold"
              >
                View & Edit Category
              </button>
            </div>
            <div className="w-full max-w-[20%] h-[210px] rounded-xl bg-card shadow-[0px_15px_20px_0px_#0000000d] p-7 flex flex-col justify-between items-center max-xl:max-w-[45%] max-md:max-w-none">
              <span className="text-lg text-text font-bold">New Write</span>
              <p className="text-center text-sm font-bold text-grayText">
                In this Item you Can Create a New Write And Manage it
              </p>
              <button
                onClick={() => {
                  setIsNewBlogFormOpen(true);
                  setBlogForEdit(null);
                }}
                className="w-full max-w-[145px] h-9 flex justify-center items-center text-center gap-1 rounded-xl bg-primary text-white text-sm font-bold"
              >
                <AiOutlinePlusCircle />
                New Write
              </button>
            </div>
          </div>
          <div className="bg-card px-14 py-7 w-full rounded-[12px] shadow-[0px_15px_20px_1px_#0000000d] my-5 max-md:p-4">
            <div className="flex items-center w-full space-x-1">
              <NoteIcon className="text-[23px]" />
              <h2 className="text-[18px] text-primary font-bold ">
                Blog archive
              </h2>
            </div>
            <div className="w-full mt-4 mb-6 flex flex-wrap justify-between items-center gap-5">
              <div className="flex flex-wrap items-center gap-6 w-2/3 max-xl:w-full max-xl:justify-between">
                <div className="flex items-center gap-2 max-sm:w-full max-sm:justify-between">
                  <span className="text-sm font-bold text-grayText">
                    Category:
                  </span>
                  <div className="min-w-[165px]">
                    <CategorySelect
                      options={categories}
                      loading={categoriesLoading}
                      category={selectedBlogListCategory}
                      setCategory={setSelectedBlogListCategory}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 max-sm:w-full max-sm:justify-between">
                  <span className="text-sm font-bold text-grayText">
                    Difficulty:
                  </span>
                  <div className="min-w-[165px]">
                    <CustomSelect
                      options={DIFFICULTY_OPTIONS}
                      select={selectedBlogListDifficulty}
                      setSelect={setSelectedBlogListDifficulty}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 max-sm:w-full max-sm:justify-between">
                  <span className="text-sm font-bold text-grayText">
                    Sort by:
                  </span>
                  <div className="min-w-[165px]">
                    <CustomSelect
                      options={BLOG_SORT_BY_OPTIONS}
                      select={selectedSortBy}
                      setSelect={setSelectedSortBy}
                    />
                  </div>
                </div>
              </div>
              <form className="w-full max-w-[25%] h-8 rounded-[12px] bg-grayLight flex justify-between items-center px-3 max-xl:max-w-none">
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search..."
                  className="w-11/12 h-full text-sm bg-transparent outline-none placeholder:text-grayText placeholder:text-sm"
                />
                <button type="submit">
                  <SearchIcon />
                </button>
              </form>
            </div>
            {blogPostsLoading ? (
              <div className="w-full flex justify-center items-center my-10">
                <Loading size={80} />
              </div>
            ) : (
              <table className="w-full mt-[22px]">
                <thead className="max-md:hidden">
                  <tr className="text-grayText text-[12px]">
                    <th className="w-[50px]"></th>
                    <th className="text-left w-[478px]">Title Blog</th>
                    <th className="text-center w-[96px]">Difficulty</th>
                    <th className="text-center w-[107px]">Category</th>
                    <th className="text-center items-center w-[168px]">
                      Create By
                    </th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {blogPosts?.data?.map((value: any, index: number) => (
                    <TableItem
                      key={index}
                      index={index}
                      blog={value}
                      editBlog={editBlog}
                      refreshList={handleGetBlogPosts}
                    />
                  ))}
                </tbody>
              </table>
            )}
            <div className="w-full flex justify-center">
              <Pagination
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                totalPage={blogPosts?.total_page}
                containerClass="mx-auto"
              />
            </div>
          </div>
        </>
      ) : (
        <div className="bg-card px-14 py-7 w-full rounded-[12px] shadow-[0px_15px_20px_1px_#0000000d] my-5 max-md:p-4">
          <div className="w-full flex justify-between items-center max-md:justify-center">
            <h2 className="flex gap-1 items-center text-primary text-lg font-bold max-md:ml-auto">
              <NoteIcon /> New Writing
            </h2>
            <button
              onClick={() => setIsNewBlogFormOpen(false)}
              className="text-text flex justify-center items-center gap-1 w-full text-xs font-bold max-w-[150px] h-9 rounded-[12px] bg-grayLight max-md:max-w-[50px] max-md:ml-auto"
            >
              <ReturnIcon />
              <span className="max-md:hidden">Back to Archive</span>
            </button>
          </div>
          <form className="w-full flex flex-col gap-5 py-6">
            <div className="flex justify-between items-center w-full max-w-[80%] gap-16 max-md:flex-col max-md:items-start max-md:justify-start max-md:gap-1 max-md:max-w-none">
              <label
                htmlFor="title"
                className="text-sm font-bold text-grayText max-w-fit max-md:pl-5"
              >
                Title:
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                placeholder="Write a title"
                className="h-10 rounded-[18px] bg-grayLight flex items-center px-5 text-text text-sm font-bold w-full max-w-[90%] outline-none placeholder:text-grayText max-md:max-w-none"
              />
            </div>
            <div className="flex justify-between w-full max-md:flex-col max-md:justify-start max-md:gap-3">
              <div className="w-full max-w-[80%] flex justify-between gap-16 max-md:flex-col max-md:max-w-none max-md:gap-1">
                <label
                  htmlFor="content"
                  className="text-sm font-bold text-grayText max-w-fit max-md:pl-5"
                >
                  Write:
                </label>
                <TextEditor content={content} setContent={setContent} />
              </div>
              <div className="w-full max-w-[20%] flex flex-col justify-between pl-7 max-md:max-w-none max-md:gap-5">
                <div className="flex flex-col gap-9">
                  <div className="flex flex-wrap justify-between items-center w-full gap-1">
                    <label
                      htmlFor="picture-cover"
                      className="text-sm font-bold text-grayText max-w-fit"
                    >
                      Picture Cover:
                    </label>
                    <div className="flex justify-center relative gap-1 px-2 items-center w-full max-w-[112px] h-8 rounded-[12px] bg-card_light">
                      <div className="text-primary">
                        <AttachmentIcon />
                      </div>
                      <input
                        type="file"
                        accept="image/jpeg"
                        id="upload_file"
                        className="w-full h-full opacity-0 absolute top-0 z-10 bg-transparent"
                        onChange={(e) => {
                          if (e.target.files) {
                            imageHandler(e.target?.files[0]);
                            setBlogForEditImg("");
                          }
                        }}
                      />
                      <label
                        htmlFor="upload_file"
                        className="text-primary text-xs"
                      >
                        Upload File
                      </label>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-3">
                    {blogForEditImg && !img && (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}blog/cover/${blogForEditImg}`}
                        alt="sample"
                        width={250}
                        height={200}
                        className="max-h-[125px] max-md:w-full"
                      />
                    )}
                    {blogForEditImg && !img && (
                      <div className="flex gap-1 items-center flex-wrap max-md:justify-between">
                        <p className="text-xs text-text font-normal whitespace-break-spaces overflow-auto">
                          {blogForEditImg}
                        </p>
                        <button type="button">
                          <TrashIcon onClick={() => setBlogForEditImg("")} />
                        </button>
                      </div>
                    )}
                    {img && !blogForEditImg && (
                      <Image
                        src={URL?.createObjectURL(img)}
                        alt="sample"
                        width={250}
                        height={200}
                        className="max-h-[125px] max-md:w-full"
                      />
                    )}
                    {img && !blogForEditImg && (
                      <div className="flex gap-1 items-center flex-wrap max-md:justify-between">
                        <p className="text-xs text-text font-normal whitespace-break-spaces overflow-auto">
                          {img?.name}
                        </p>
                        <button type="button">
                          <TrashIcon onClick={() => setImg(undefined)} />
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap justify-between items-center w-full gap-1">
                    <span className="text-sm font-bold text-grayText max-w-fit">
                      Category:
                    </span>
                    <div className="relative w-full max-w-[165px]">
                      <div
                        onClick={() => setIsCategoryDropdownOpen(true)}
                        className={`flex justify-between items-center text-sm p-3 h-9 bg-grayLight w-full cursor-pointer ${
                          isCategoryDropdownOpen
                            ? "rounded-t-[12px]"
                            : "rounded-[12px]"
                        }`}
                      >
                        <span>{selectedCategory?.title}</span>
                        {isCategoryDropdownOpen ? (
                          <RiArrowUpSLine />
                        ) : (
                          <RiArrowDownSLine />
                        )}
                      </div>
                      {isCategoryDropdownOpen ? (
                        <ul
                          ref={categoryDropDownRef}
                          className="absolute top-9 w-full h-auto max-h-[110] text-sm flex flex-col gap-1 p-4 overflow-y-auto bg-grayLight rounded-b-[12px] first:border-t-2 first:border-borderGray"
                        >
                          {categoriesLoading ? (
                            <div className="w-full flex justify-center items-center">
                              <Loading size={20} />
                            </div>
                          ) : (
                            categories?.map((item: any) => (
                              <li
                                key={item}
                                onClick={() => {
                                  setSelectedCategory(item);
                                  setIsCategoryDropdownOpen(false);
                                }}
                                className="hover:font-bold hover:text-text cursor-pointer"
                              >
                                {item?.title}
                              </li>
                            ))
                          )}
                        </ul>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between w-full gap-2">
                    <span className="text-sm font-bold text-grayText max-w-fit">
                      Difficulty:
                    </span>
                    <div className="w-full max-w-[165px] flex flex-col gap-5">
                      <div
                        className={`flex items-center w-full text-sm font-bold ${
                          selectedDifficulty === "Advanced"
                            ? "text-primary"
                            : "text-grayText"
                        } gap-1`}
                      >
                        <input
                          type="radio"
                          id="advanced"
                          checked={selectedDifficulty === "Advanced"}
                          onChange={() => setSelectedDifficulty("Advanced")}
                        />
                        <label htmlFor="advanced">Advanced</label>
                      </div>
                      <div
                        className={`flex items-center w-full text-sm font-bold ${
                          selectedDifficulty === "Intermediate"
                            ? "text-primary"
                            : "text-grayText"
                        } gap-1`}
                      >
                        <input
                          type="radio"
                          id="intermediate"
                          checked={selectedDifficulty === "Intermediate"}
                          onChange={() => setSelectedDifficulty("Intermediate")}
                        />
                        <label htmlFor="intermediate">Intermediate</label>
                      </div>
                      <div
                        className={`flex items-center w-full text-sm font-bold ${
                          selectedDifficulty === "Beginner"
                            ? "text-primary"
                            : "text-grayText"
                        } gap-1`}
                      >
                        <input
                          type="radio"
                          id="beginner"
                          checked={selectedDifficulty === "Beginner"}
                          onChange={() => setSelectedDifficulty("Beginner")}
                        />
                        <label htmlFor="beginner">Beginner</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setIsNewBlogFormOpen(false)}
                    className="flex justify-center items-center w-full max-w-[96px] h-10 rounded-[12px] border-[1px] border-borderGray text-sm font-bold text-grayText"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    disabled={editLoading || publishLoading}
                    onClick={blogForEdit ? handleEditBlog : handlePublish}
                    className="flex justify-center items-center w-full max-w-[140px] h-10 rounded-[12px] bg-primary text-sm font-bold text-white"
                  >
                    {editLoading || publishLoading ? "Loading..." : "Publish"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
      <ManageCategoriesModal
        open={isManageCategoriesModalOpen}
        onClose={() => setIsManageCategoriesModalOpen(false)}
        shouldUpdate={shouldUpdate}
      />
    </div>
  );
};

export default Blog;
