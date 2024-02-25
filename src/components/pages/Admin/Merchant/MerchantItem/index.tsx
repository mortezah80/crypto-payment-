import { PiUserCircleThin } from "react-icons/pi";
import { AiFillDollarCircle } from "react-icons/ai";
import { GoTrash } from "react-icons/go";
import { FiChevronRight } from "react-icons/fi";
import { authServiceHandler } from "@/api/auth.service";
interface merchantItemProps {
  id: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  name: string;
  transaction_count: number;
  totalTransaction: number;
  withdrawal_count: number;
  transfer_count: number;
  convert_count: number;
  available_balance: number;
  created_at: Date;
  index: number;
  creator_user: string;
  currency_type: string;
  refreshList: any;
}

const MerchantItemResposive: React.FC<merchantItemProps> = (props) => {
  const Icon = props.Icon;

  const handleDeleteMerchant = async () => {
    await authServiceHandler.deleteMerchant(props?.id);
    props.refreshList();
  };

  return (
    <tr className="h-[70px] text-center text-text font-bold text-[14px]">
      <th className="text-grayText">{props.index}</th>
      <td>
        <div className="flex items-center text-left space-x-2">
          {Icon && <Icon />}
          <h2>{props.name}</h2>
        </div>
      </td>
      <td>{props?.transaction_count}</td>
      <td>{props?.withdrawal_count}</td>
      <td>{props?.transfer_count}</td>
      <td>{props?.convert_count}</td>
      <td>
        <div className="flex items-center text-center justify-center space-x-1 text-primary">
          <AiFillDollarCircle className="text-[20px] text-grayText" />
          <span>{props?.available_balance}</span>
        </div>
      </td>
      <td>
        <div className="flex items-center text-center justify-center space-x-1 text-primary">
          {props?.currency_type}
          <span>{props?.totalTransaction}</span>
        </div>
      </td>
      <td className="px-[30px] text-[12px] font-normal">
        <span className="text-center">
          {new Date(props?.created_at).toLocaleString("en", {
            timeStyle: "short",
            dateStyle: "short",
            hour12: false,
          })}
        </span>
      </td>
      <td className="px-[12px]">
        <div className="flex items-center space-x-1">
          <PiUserCircleThin className="text-[35px] text-primary" />
          <span>{props?.creator_user}</span>
        </div>
      </td>
      <td className="pr-[30px]">
        <div className="flex items-center space-x-2">
          <button onClick={handleDeleteMerchant}>
            <GoTrash className="text-redText text-[20px]" />
          </button>
        </div>
      </td>
      <td>
        <button className="flex rounded-2xl items-center justify-center font-bold text-white bg-primary px-4 py-2 text-xs">
          <span>View</span>
          <FiChevronRight className="text-xl" />
        </button>
      </td>
    </tr>
  );
};

export default MerchantItemResposive;
