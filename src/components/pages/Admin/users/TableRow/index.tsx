import { PiUserCircleThin } from "react-icons/pi";
import { AiFillDollarCircle } from "react-icons/ai";
import { PiPencilSimpleLineBold } from "react-icons/pi";
import { GoTrash } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa";
import { authServiceHandler } from "@/api/auth.service";
import { Dispatch, SetStateAction, useState } from "react";
interface UserTableItemProps {
  user: any;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  index: number;
  refreshList: any;
  editUser: (user: any) => void;
}

const UserTableItem: React.FC<UserTableItemProps> = (props) => {
  const Icon = props?.Icon;

  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleDeleteUser = async () => {
    try {
      setDeleteLoading(true);
      await authServiceHandler.deleteUser({ id: props.user.id });
      props.refreshList();
    } catch (error) {
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <tr className="h-[70px] text-center text-text font-bold text-[14px]">
      <th className="text-grayText">{props.index}</th>
      <td>
        <div className="flex items-center space-x-1">
          <PiUserCircleThin className="text-[40px] text-primary" />
          <div className="flex flex-col text-left justify-start">
            <h4>{props.user.userName}</h4>
            <span className="text-grayText text-[12px]">
              {props.user.email}
            </span>
          </div>
        </div>
      </td>
      <td className="text-center text-text text-[12px] font-normal">
        <div>{props.user?.date?.toLocaleString()}</div>
      </td>
      <td>
        <span>{props.user.merchants}</span>
      </td>
      <td className="text-center">
        <div className="flex items-center justify-center space-x-1">
          <AiFillDollarCircle className="text-grayText text-xl" />
          <span>{props.user.revenue}</span>
        </div>
      </td>
      <td>
        <span>{props.user.wallets}</span>
      </td>
      <td className="text-center">
        <div className="flex items-center justify-center text-center space-x-1">
          <AiFillDollarCircle className="text-grayText text-xl" />
          <span>{props.user.revenue}</span>
        </div>
      </td>
      <td className="">
        <div className="flex justify-center items-center space-x-[30px]">
          <button onClick={() => props.editUser(props.user)}>
            <PiPencilSimpleLineBold />
          </button>
          <button
            className={`${deleteLoading ? "cursor-not-allowed" : ""}`}
            onClick={handleDeleteUser}
          >
            <GoTrash className="text-redText" />
          </button>
        </div>
      </td>
      <td className="px-[28px]">
        <div className="flex items-center w-full text-primary space-x-2">
          <button className="rounded-2xl border-primary border-2 px-3 hover:border-card_light hover:bg-card_light transition py-2 text-xs">
            Wallets
          </button>
          <button className="rounded-2xl border-primary border-2 w-[77px]  hover:border-card_light hover:bg-card_light px-3 py-2 text-xs">
            API List
          </button>
          <button className="rounded-2xl text-white bg-primary hover:text-primary border-primary border-2 px-3 py-2 text-xs flex  hover:border-card_light hover:bg-card_light items-center space-x-1">
            <span>Merchants</span>
            <FaAngleRight />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserTableItem;
