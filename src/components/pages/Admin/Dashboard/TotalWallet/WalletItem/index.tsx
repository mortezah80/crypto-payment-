import { AiOutlineUser } from "react-icons/ai";
import { AiFillDollarCircle } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";

interface walletItemProps {
  coin: string;
  short: string;
  wallet: number;
  revenue: number;
  background?: string;
}
const WalletItem: React.FC<walletItemProps> = (props) => {
  return (
    <div
      className={`py-1.5 max-md:py-4 flex max-xl:w-full items-center space-x-10 max-md:flex-col max-md:space-x-0 max-md:space-y-3 justify-between rounded-xl px-3 bg-[${props.background}]`}
    >
      <div className="flex items-center justify-between flex-1 max-md:w-full">
        <div className="flex space-x-3.5 items-center">
          <div className="w-16 h-14 rounded-xl bg-card_light">
          </div>
          <div className="flex flex-col space-y-1.5">
            <h2 className="font-bold">{props.short}</h2>
            <span className="text-xs text-grayText">{props.coin}</span>
          </div>
        </div>
        <div className="flex text-sm max-sm:flex-col max-sm:items-end items-center space-x-2.5">
          <span className="font-normal">Wallets</span>
          <div className="flex items-center font-bold text-primary">
            <AiOutlineUser className="text-xl" />
            <h5>{props.wallet}</h5>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between flex-1 max-md:w-full">
        <div className="flex text-sm items-center space-x-2.5 max-md:w-full max-md:justify-between">
          <span className="font-normal">Total revenue</span>
          <div className="flex items-center font-bold text-primary space-x-1">
            <AiFillDollarCircle className="text-xl text-grayText" />
            <h5>{props.revenue}</h5>
          </div>
        </div>
        <div className="w-6 h-6 max-md:hidden justify-self-end bg-grayLight rounded-full text-text text-xl flex items-center justify-center">
          <FiChevronRight />
        </div>
      </div>
    </div>
  );
};

export default WalletItem;
