import Image from "next/image";
import { FC, useState } from "react";
import EditIcon from "$/public/icons/edit.svg";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import ManageCategory from "../ManageCategory";

interface IProps {
  category: any;
  selectCategory: (category: any) => void;
  onConfirm: () => void;
}

const CategoryCard: FC<IProps> = ({ category, selectCategory, onConfirm }) => {
  const [isManageCategoryFormOpen, setIsManageCategoryFormOpen] =
    useState(false);

  return (
    <>
      <div
        onClick={() => {
          selectCategory(category);
          setIsManageCategoryFormOpen(!isManageCategoryFormOpen);
        }}
        className="w-full rounded-2xl gap-1 border text-text border-borderGray bg-white p-3 flex items-center justify-between cursor-pointer"
      >
        <div className="w-16 max-w-[20%] h-16 rounded-xl relative">
          <Image
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}blog-category/cover/${category?.image_addr}`}
            alt=""
            style={{ objectFit: "cover", borderRadius: "12px" }}
            fill
          />
        </div>
        <div className="flex flex-col w-1/2 gap-y-2 justify-between">
          <h4 className="text-sm w-full font-bold whitespace-nowrap text-ellipsis overflow-hidden">
            {category.title}
          </h4>
          <p className="text-grayText w-full text-xs font-bold whitespace-nowrap text-ellipsis overflow-hidden">
            {category.description}
          </p>
        </div>
        <div className="max-w-[30%] flex items-center gap-x-4 max-sm:flex-col max-sm:items-end">
          <span className="text-gold text-sm font-bold max-sm:pr-5">
            {category.post_count}
          </span>
          <button className="flex justify-center items-center w-20 h-10 rounded-xl border border-borderGray bg-white gap-x-2 p-1">
            <EditIcon />
            <div
              className={
                isManageCategoryFormOpen
                  ? "max-sm:-rotate-90"
                  : "max-sm:rotate-90"
              }
            >
              <MdOutlineArrowForwardIos />
            </div>
          </button>
        </div>
      </div>
      {isManageCategoryFormOpen && (
        <div className="sm:hidden w-full h-full rounded-2xl flex flex-col items-center py-5 px-4 justify-center bg-grayLight mt-2">
          <ManageCategory category={category} onConfirm={() => onConfirm()} />
        </div>
      )}
    </>
  );
};

export default CategoryCard;
