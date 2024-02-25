import { PiUserCircleThin } from "react-icons/pi";
import { PiPencilSimpleLineBold } from "react-icons/pi";
import { GoTrash } from "react-icons/go";
import { authServiceHandler } from "@/api/auth.service";

interface MerchantItemProps {
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
  refreshList: any;
}

const MerchantItemResposive: React.FC<MerchantItemProps> = (props) => {
  const Icon = props?.Icon;
  const handleDeleteMerchant = async () => {
    await authServiceHandler.deleteMerchant(props?.id);
    props.refreshList();
  };

  return (
    <div className="flex text-sm text-text font-bold space-y-2 max-sm:space-y-4 flex-col rounded-2xl px-4 py-6">
      <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:space-y-6">
        <div className="flex items-center space-x-7">
          <span className="text-grayText">{props?.index}</span>
          <h4 className="flex items-center space-x-2">
            {Icon && <Icon />}
            <span>{props?.name}</span>
          </h4>
        </div>
        <div className="flex items-center space-x-1">
          <PiUserCircleThin className="text-[35px] text-primary" />
          <span>{props?.creator_user}</span>
        </div>
      </div>
      <div className="flex items-center justify-between max-[800px]:flex-col max-[800px]:space-y-5">
        <div className="flex items-center justify-between space-x-3 max-[800px]:w-full">
          <span className="font-normal text-xs">
            {new Date(props?.created_at).toLocaleString().slice(0, -3)}
          </span>
          <div className="flex items-center space-x-6">
            <button className="text-text text-lg">
              <PiPencilSimpleLineBold />
            </button>
            <button
              onClick={handleDeleteMerchant}
              className="text-redText text-lg"
            >
              <GoTrash />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between w-7/12 max-[800px]:w-full">
          <div className="flex flex-col space-y-3 items-center">
            <span className="text-xs text-grayText">Transaction</span>
            <span className="text-text">{props.transaction_count}</span>
          </div>
          <div className="flex flex-col space-y-3 items-center">
            <span className="text-xs text-grayText">Withdrawal</span>
            <span className="text-text">{props.withdrawal_count}</span>
          </div>
          <div className="flex flex-col space-y-3 items-center">
            <span className="text-xs text-grayText">Transfer</span>
            <span className="text-text">{props.transfer_count}</span>
          </div>
          <div className="flex flex-col space-y-3 items-center">
            <span className="text-xs text-grayText">Convert</span>
            <span className="text-text">{props.convert_count}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantItemResposive;
