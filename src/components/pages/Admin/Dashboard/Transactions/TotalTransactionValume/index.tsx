import { AiFillDollarCircle } from "react-icons/ai";
interface totalTransactionValume {
  total: number;
  income: number;
  withdrawal: number;
}
const TotalTransactinoValume: React.FC<totalTransactionValume> = (props) => {
  return (
    <div className="bg-card min-h-[530px] flex flex-col space-y-4.5 shadow-[0px_15px_20px_1px_#0000000d] rounded-xl px-11 py-9 max-md:px-4 max-md:py-6">
      <div className="flex items-center font-bold justify-between max-md:flex-col max-md:text-center max-md:items-center max-md:space-y-6">
        <div className="flex space-y-2 flex-col">
          <h2 className="text-primary text-2xl max-xl:text-lg">
            Total volume of All transactions
          </h2>
          <span className="text-grayText text-sm">
            Withdrawals and wallet balance
          </span>
        </div>
        <h1 className="flex items-center text-[42px] space-x-1 max-xl:text-2xl">
          <span className="text-primary">
            <AiFillDollarCircle />
          </span>
          {props.total}
        </h1>
      </div>
      <div className="mt-6 px-3.5 py-4 flex items-center max-xl:flex-col max-xl:space-y-2 rounded-2xl font-bold bg-grayLight justify-between">
        <div className="flex items-center flex-col space-y-2 max-xl:w-full">
          <span className="text-grayText text-sm">Total Income (website)</span>
          <div className="bg-card w-[220px] justify-center max-2xl:w-[150px] py-3.5 max-xl:w-full rounded-xl text-center text-[18px] flex items-center">
            <AiFillDollarCircle className="text-primary text-[20px]" />
            <h5>{props.income}</h5>
          </div>
        </div>
        <span className="text-primary font-bold text-xl h-full flex justify-center items-center pt-5 max-md:pt-0">
          -
        </span>
        <div className="flex items-center flex-col space-y-2 max-xl:w-full">
          <span className="text-grayText text-sm">Site withdrawals</span>
          <div className="bg-card w-[220px] py-3.5 justify-center  max-2xl:w-[150px] rounded-xl max-xl:w-full text-center text-[18px] flex items-center">
            <AiFillDollarCircle className="text-primary text-[20px]" />
            <h5>{props.withdrawal}</h5>
          </div>
        </div>
        <span className="text-primary font-bold text-xl h-full flex justify-center items-center pt-5 max-md:pt-0">
          =
        </span>
        <div className="flex items-center flex-col space-y-2 max-xl:w-full">
          <span className="text-grayText text-sm">
            Withdrawable income (website)
          </span>
          <div className="w-[220px] bg-card py-3.5 justify-center  max-2xl:w-[150px] rounded-xl text-center max-xl:w-full text-[18px] flex items-center">
            <AiFillDollarCircle className="text-primary text-[20px]" />
            <h5>{props.income - props.withdrawal}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalTransactinoValume;
