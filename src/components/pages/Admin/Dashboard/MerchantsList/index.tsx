import { AiOutlineUser } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";

type merchant = {
  name: string;
  creator: string;
};
interface MerchantsListProps {
  total: number;
  merchants: merchant[];
}
const MerchantsList: React.FC<MerchantsListProps> = (props) => {
  return (
    <div className="bg-card h-full flex flex-col space-y-4.5 shadow-[0px_15px_20px_1px_#0000000d] rounded-xl px-11 max-md:px-2.5 py-7 max-md:py-4">
      <div className="flex items-center justify-between max-md:justify-center">
        <h5 className="text-primary font-bold text-[16px]">Merchants List</h5>
        <button className="text-primary font-semibold rounded-xl bg-card_light px-7 py-2.5 max-md:hidden">
          <span>More</span>
        </button>
      </div>
      <h2 className="text-4xl font-bold">
        {props.total}{" "}
        <span className="text-[14px] font-normal">Create Merchant</span>
      </h2>
      <div>
        <span className="text-grayText font-bold text-xs pl-3 mb-2">
          Last Merchant
        </span>
        <ul className="space-y-2">
          {props.merchants.map((value, index) => (
            <li
              key={index}
              className="grid grid-cols-3 bg-grayLight py-2.5 px-3 rounded-xl items-center justify-between"
            >
              <h4 className="font-bold text-sm flex items-center space-y-1">
                <div className="w-1.5 h-1.5 bg-black rounded-full"> </div>
                <span>{value.name}</span>
              </h4>
              <div className="flex items-center space-x-1 text-left text-xs w-[170px] ml-4">
                <AiOutlineUser className="text-primary text-xl" />
                <span className="text-grayText">{value.creator}</span>
              </div>
              <FiChevronRight className="text-text text-xl justify-self-end" />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center w-full">
        <button className="text-primary font-semibold rounded-xl bg-card_light px-7 py-2.5 max-md:block mt-6 w-fit text-center justify-self-center hidden">
          <span>More</span>
        </button>
      </div>
    </div>
  );
};

export default MerchantsList;
