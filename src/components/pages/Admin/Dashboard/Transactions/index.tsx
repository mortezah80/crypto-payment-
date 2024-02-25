import { AiFillDollarCircle } from "react-icons/ai";

interface TransactionProps {
  value: number;
  income: number;
  paid: number;
  unpaid: number;
  moreThan: number;
  lessThan: number;
  total: number;
}
const TransactionsAdmin: React.FC<TransactionProps> = (props) => {
  return (
    <div className="bg-card flex max-md:px-4 max-md:py-6 flex-col space-y-4.5 h-full shadow-[0px_15px_20px_1px_#0000000d] rounded-xl px-11 py-7">
      <div className="flex max-md:flex-col max-md:justify-center items-center justify-between">
        <h4 className="text-primary font-bold">Today Transactions</h4>
        <button className="text-primary max-md:hidden font-semibold rounded-xl bg-card_light px-7 py-2.5 ">
          <span>More</span>
        </button>
      </div>
      <div className="flex items-center font-bold justify-between mt-4 max-md:flex-col">
        <span className="text-grayText text-sm">Value of transactions</span>
        <div className="text-[28px] flex items-center space-x-1">
          <AiFillDollarCircle className="text-primary" />
          <h2>{props.value}</h2>
        </div>
      </div>
      <div className="flex items-center font-bold justify-between max-md:flex-col max-md:mt-5 max-md:mb-4">
        <span className="text-grayText text-sm">Website income</span>
        <div className="text-[28px] flex items-center space-x-1">
          <AiFillDollarCircle className="text-primary" />
          <h2>{props.income}</h2>
        </div>
      </div>
      <div className="flex text-sm font-bold [&>div]:flex max-md:grid max-md:gap-x-14 max-sm:gap-x-8 max-md:grid-cols-2 [&>div]:items-center [&>div]:space-x-6 mt-5 items-center justify-between">
        <div className="justify-between">
          <div className="flex space-x-1 items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            <span>Paid</span>
          </div>
          <span className="text-grayText">{props.paid}</span>
        </div>
        <div className="justify-between">
          <div className="flex space-x-1 items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-redText"></div>
            <span>Unpaid</span>
          </div>
          <span className="text-grayText">{props.unpaid}</span>
        </div>
        <div className="justify-between">
          <div className="flex space-x-1 items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            <span>More than</span>
          </div>
          <span className="text-grayText">{props.moreThan}</span>
        </div>
        <div className="justify-between">
          <div className="flex space-x-1 items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-orange"></div>
            <span>Less than</span>
          </div>
          <span className="text-grayText">{props.lessThan}</span>
        </div>
      </div>
      <div className="bg-grayLight font-bold flex items-center max-md:flex-col justify-between mt-3.5 rounded-xl px-5 py-3.5">
        <span className="text-grayText">Today Total transactions</span>
        <h2 className="text-primary text-[32px]">{props.total}</h2>
      </div>
      <div className="flex justify-center items-center">
        <button className="text-primary max-md:block w-fit mt-4 hidden font-semibold rounded-xl bg-card_light px-7 py-2.5 ">
          <span>More</span>
        </button>
      </div>
    </div>
  );
};

export default TransactionsAdmin;
