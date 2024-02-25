import WalletItem from "@/components/pages/Admin/Dashboard/TotalWallet/WalletItem";
import { AiFillDollarCircle } from "react-icons/ai";
interface totalWalletsProps {
  totalBalanceWallet: number;
  wallets: number;
}
const wallets = [
  {
    short: "BTC",
    coin: "Bitcoin",
    wallet: 315471,
    revenue: 325045125,
  },
  {
    short: "BTC",
    coin: "Bitcoin",
    wallet: 315471,
    revenue: 325045125,
  },
  {
    short: "BTC",
    coin: "Bitcoin",
    wallet: 315471,
    revenue: 325045125,
  },
];
const TotalWallets: React.FC<totalWalletsProps> = (props) => {
  return (
    <div className="bg-card flex flex-col space-y-4.5 shadow-[0px_15px_20px_1px_#0000000d] rounded-xl max-md:px-4 px-11 py-6 text-sm font-bold">
      <div className="flex items-center max-md:justify-center justify-between">
        <h4 className="font-bold  text-primary">Wallet List</h4>
        <button className="text-primary font-semibold rounded-xl bg-card_light px-7 py-2.5  max-md:hidden">
          <span>More</span>
        </button>
      </div>
      <div className="flex space-x-3  items-center justify-between max-xl:flex-col max-xl:space-x-0 max-xl:space-y-8">
        <div className="flex-1">
          <h2 className="text-4xl font-bold flex space-x-1 max-md:flex-col max-md:mt-5">
            <AiFillDollarCircle className="text-3xl max-md:hidden self-center text-primary" />
            <span>{props.totalBalanceWallet}</span>
            <span className="font-normal text-sm self-end">
              Total balance of wallets
            </span>
          </h2>
          <div className="mt-4 max-xl:hidden">
            {wallets.map((value, index) => (
              <WalletItem
                background={index % 2 === 0 ? "#F5F5F5" : ""}
                key={index}
                coin={value.coin}
                short={value.short}
                revenue={value.revenue}
                wallet={value.wallet}
              />
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col max-xl:w-full space-y-4 max-xl:space-y-10 max-xl:flex-col mt-4">
          <h2 className="text-4xl self-end justify-self-end font-bold max-xl:self-center max-md:flex-col max-md:space-x-0 max-md:items-center flex space-x-1">
            <AiFillDollarCircle className="text-3xl self-center text-primary max-md:hidden" />
            <span>{props.wallets}</span>
            <span className="font-normal text-sm self-end">
              Number of Wallets
            </span>
          </h2>
          <div className="max-xl:mt-10 max-xl:w-full">
            {wallets.map((value, index) => (
              <WalletItem
                key={index}
                background={index % 2 === 0 ? "#F5F5F5" : ""}
                coin={value.coin}
                short={value.short}
                revenue={value.revenue}
                wallet={value.wallet}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="hidden items-center justify-between max-md:flex">
        <button className="text-primary font-semibold rounded-xl bg-card_light px-7 py-2.5 mt-4">
          <span>More</span>
        </button>
      </div>
    </div>
  );
};

export default TotalWallets;
