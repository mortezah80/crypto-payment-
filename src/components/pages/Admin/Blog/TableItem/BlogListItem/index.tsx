import React from "react";
import { PiPencilSimpleLineBold } from "react-icons/pi";
import { GoTrash } from "react-icons/go";
interface TableRowProps {
  title: string;
  difficulty: string;
  category: string;
  creator: string;
  date: Date;
  index: number;
  status: "published" | "unpublished";
}
const BlogListItem: React.FC<TableRowProps> = (props) => {
  return (
    <div className="w-full flex flex-col items-center rounded-2xl space-y-2 max-sm:space-y-4 max-sm:px-2 text-sm font-bold px-6 py-4">
      <div className="flex max-md:flex-col max-md:space-y-2 max-sm:space-y-4 items-center truncate justify-between w-full">
        <div className="space-x-4 flex max-md:self-start items-center truncate overflow-hidden">
          <span className="text-grayText">{props.index}</span>
          <h4 className="truncate text-text">{props.title}</h4>
        </div>
        <div className="flex items-center space-x-2 mt-2 mb-1 max-sm:self-start">
          <div className="text-center text-grayText bg-grayLight rounded-2xl text-xs px-4 py-1">
            {props.difficulty}
          </div>
          <div className="text-center text-grayText bg-grayLight text-xs rounded-2xl px-4 py-1">
            {props.category}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full max-sm:flex-col">
        <div className="flex items-left mb-1 justify-between flex-col space-y-1 max-sm:flex-row max-sm:space-y-0 max-sm:items-center max-sm:w-full text-left">
          <span className="text-text font-normal text-xs">
            {props.date.toLocaleString()}
          </span>
          <span className="text-gold">{props.creator}</span>
        </div>
        <div className="flex items-center space-x-4 justify-between max-sm:mt-2 max-sm:w-full max-sm:space-x-0 ">
          <div
            className={`w-[107px] py-[6px] m-auto text-center rounded-[20px] justify-self-start
              ${
                props.status === "published"
                  ? "bg-card_light text-primary"
                  : "bg-grayText text-white"
              }
            `}
          >
            {props.status}
          </div>
          <div className="flex item-center text-[18.5px] space-x-[19px]">
            <button>
              <PiPencilSimpleLineBold />
            </button>
            <button>
              <GoTrash className="text-redText" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListItem;
