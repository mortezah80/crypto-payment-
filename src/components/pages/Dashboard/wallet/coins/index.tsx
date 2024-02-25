import Add_wallet_coin from "@/assets/AddWallet.svg";

interface CoinItemProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  name: string;
  short: string;
  amount: number;
  dollar: number;
  add?: boolean;
  header?: boolean;
}

const CoinItem: React.FC<CoinItemProps> = ({
  Icon,
  name,
  short,
  amount,
  dollar,
  add,
  header,
}) => {
  return (
    <div
      className={[
        "flex transition hover:z-30 relative hover:shadow-[0px_10px_15px_0px_#00000010] items-center rounded-[12px] justify-between w-full py-2.5 px-[17px]",
        header ? "bg-primary" : "bg-card",
      ].join(" ")}
    >
      <div className="flex items-center space-x-2">
        <span className="w-[35px] h-[35px] flex items-center justify-center rounded-full overflow-hidden">
          <Icon />
        </span>
        <div className="text-left flex flex-col justify-center ">
          <h4
            className={[
              "font-bold text-[16px]",
              header ? "text-white" : "text-text",
            ].join(" ")}
          >
            {short}
          </h4>
          <span
            className={[
              "text-[12px]",
              header ? "text-text font-bold pb-1" : "text-grayText",
            ].join(" ")}
          >
            {name}
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        {add && (
          <div className="w-[30px] h-[30px] flex cursor-pointer items-center justify-center bg-card_shade rounded-[12px]">
            <Add_wallet_coin />
          </div>
        )}
        <div className="text-right">
          <h3
            className={[
              "text-[16px] font-bold",
              header ? "text-white" : "text-primary",
            ].join(" ")}
          >
            {amount === 0 ? "0.00000000" : amount}
          </h3>
          <span
            className={[
              ,
              header
                ? "text-text font-bold text-[15px]"
                : "font-semibold text-grayText text-[12px]",
            ].join(" ")}
          >
            {header ? "USD" : "$" + dollar}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CoinItem;
