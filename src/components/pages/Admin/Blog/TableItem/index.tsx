import { authServiceHandler } from "@/api/auth.service";
import React, { useState } from "react";
import { GoTrash } from "react-icons/go";
import { PiPencilSimpleLineBold } from "react-icons/pi";
interface TableRowProps {
  index: number;
  blog: any;
  refreshList: any;
  editBlog: (blog: any) => void;
}
const TableItem: React.FC<TableRowProps> = (props) => {
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleDeleteBlog = async () => {
    try {
      setDeleteLoading(true);
      await authServiceHandler.deleteBlog(props.blog.id);
      props.refreshList();
    } catch (error) {
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <tr className="font-bold h-[70px] text-[14px] odd:bg-background max-md:flex max-md:flex-wrap max-md:p-2 max-md:h-auto max-md:gap-2 max-md:items-center">
      <th className="text-grayText rounded-l-[18px]">{props.index + 1}</th>
      <td className="text-text text-left overflow-hidden text-ellipsis whitespace-nowrap">
        {props.blog.title}
      </td>
      <td>
        <div className="text-center text-[12px] m-auto w-full p-[6px] rounded-[20px] text-grayText bg-[#E7E7E7]">
          {props.blog.difficulty}
        </div>
      </td>
      <td>
        <div className="m-auto text-center w-full text-[12px] p-[6px] rounded-[20px] text-grayText bg-[#E7E7E7]">
          {props.blog.category_title}
        </div>
      </td>
      <td className="text-center text-icon border-left">
        {props.blog.creator_user}
      </td>
      <td className="text-[12px] text-center font-normal">
        {props.blog?.created_at?.toLocaleString()}
      </td>
      <td>
        <div
          className={`
            w-[107px] py-[6px] m-auto text-center rounded-[20px] ${
              props.blog.publish
                ? "bg-card_light text-primary"
                : "bg-grayText text-white"
            }`}
        >
          {props.blog.publish ? "Published" : "Unpublished"}
        </div>
      </td>
      <td className="rounded-r-[18px]">
        <div className="flex item-center text-[18.5px] space-x-[19px]">
          <button onClick={() => props.editBlog(props.blog)}>
            <PiPencilSimpleLineBold />
          </button>
          <button
            disabled={deleteLoading}
            className={deleteLoading ? "cursor-not-allowed" : ""}
          >
            <GoTrash className="text-redText" onClick={handleDeleteBlog} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableItem;
