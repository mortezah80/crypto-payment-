"use client";
import { BiChevronDown } from "react-icons/bi";
import { Dispatch, SetStateAction, useState } from "react";
import Loading from "@/components/common/Loading";
interface CategorySelectProps {
  options: any[];
  placeholder?: string;
  category: any;
  setCategory: Dispatch<SetStateAction<any>>;
  loading: boolean;
}
const CategorySelect: React.FC<CategorySelectProps> = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="px-[14px] py-[9px] cursor-pointer hover:bg-borderGray transition rounded-[12px] w-full bg-grayLight relative flex item-center justify-between"
    >
      <span className="text-text text-[14px] font-bold">
        {props.category?.title}
      </span>
      <BiChevronDown className="text-text text-[18px]" />
      {open && (
        <div className="flex shadow-[0px_15px_20px_1px_#0000000d] space-y-2 flex-col absolute py-[10px] top-[43px] z-20 bg-grayLight rounded-[12px] left-0 right-0">
          {props.loading ? (
            <div className="w-full h-full flex justify-center items-center">
              <Loading size={20} />
            </div>
          ) : (
            props.options.map((value, ind) => {
              return (
                <span
                  key={ind}
                  onClick={() => props.setCategory(value)}
                  className="px-[18px] text-text cursor-pointer hover:bg-card text-[14px] font-bold hover:text-primary transition"
                >
                  {value.title}
                </span>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default CategorySelect;
