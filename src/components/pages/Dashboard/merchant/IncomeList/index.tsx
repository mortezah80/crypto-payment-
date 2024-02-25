import { FiSearch } from "react-icons/fi";
import IncomeCard from "./incomeCard";


const IncomeList = () => {
  return (
    <div className="max-h-[62vh] overflow-y-auto w-full  rounded-[12px] bg-white flex flex-col items-center justify-start max-sm:px-[10px] max-income:px-[3px] income:px-[28px] py-[20px]  ">
      <div className="flex items-center justify-between w-full flex-col sm:flex-row">
        <div className="flex flex-col items-center sm:items-start">
          <span className="text-[18px] font-[700] text-primary">
            Income List
          </span>
          <span className="text-[12px] font-[700]">
            Balances of business wallets
          </span>
        </div>
        <div className="h-[36px] w-[100%] sm:w-[30%] mt-[6px] sm:mt-[0px] bg-card_shade rounded-[12px] flex items-center px-[10px] justify-between text-[20px]">
          <input
            type="text"
            placeholder="Search coin..."
            className="font-[700] text-[14px] bg-transparent w-full focus:outline-none focus:border-none"
          />
          <FiSearch />
        </div>
      </div>
      <div className="mt-[15px] w-full overflow-y-auto max-h-full coinScroll pr-[18px]" >
        <IncomeCard
          coin="BTC"
          full_name="Bitcoin"
          amount={0.0}
          usd={0.0}
          percentage={48}
          grey
        />
        <IncomeCard
          coin="BTC"
          full_name="Bitcoin"
          amount={0.0}
          usd={0.0}
          percentage={48}
        />
        <IncomeCard
          coin="BTC"
          full_name="Bitcoin"
          amount={0.0}
          usd={0.0}
          percentage={48}
          grey
        />
        <IncomeCard
          coin="BTC"
          full_name="Bitcoin"
          amount={0.0}
          usd={0.0}
          percentage={48}
        />
        <IncomeCard
          coin="BTC"
          full_name="Bitcoin"
          amount={0.0}
          usd={0.0}
          percentage={48}
          grey
        />
        <IncomeCard
          coin="BTC"
          full_name="Bitcoin"
          amount={0.0}
          usd={0.0}
          percentage={48}
        />
        <IncomeCard
          coin="BTC"
          full_name="Bitcoin"
          amount={0.0}
          usd={0.0}
          percentage={48}
          grey
        />
        <IncomeCard
          coin="BTC"
          full_name="Bitcoin"
          amount={0.0}
          usd={0.0}
          percentage={48}
        />
        <IncomeCard
          coin="BTC"
          full_name="Bitcoin"
          amount={0.0}
          usd={0.0}
          percentage={48}
          grey
        />
        <IncomeCard
          coin="BTC"
          full_name="Bitcoin"
          amount={0.0}
          usd={0.0}
          percentage={48}
        />
        <IncomeCard
          coin="BTC"
          full_name="Bitcoin"
          amount={0.0}
          usd={0.0}
          percentage={48}
          grey
        />
        <IncomeCard
          coin="BTC"
          full_name="Bitcoin"
          amount={0.0}
          usd={0.0}
          percentage={48}
        />
        <IncomeCard
          coin="BTC"
          full_name="Bitcoin"
          amount={0.0}
          usd={0.0}
          percentage={48}
          grey
        />
      </div>
    </div>
  );
};

export default IncomeList;
