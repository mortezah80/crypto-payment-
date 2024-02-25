import PercentChart from "./PercentChart";
import Select from "@/components/common/select";
import SearchInput from "@/components/common/searchInput";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Transitioncard from "../TransitionCard";
const page = 1;
const TransitionList = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center transition max-sm:space-y-4 max-sm:py-[20px] space-y-3 py-10 max-sm:px-2.5 px-12 bg-card rounded-xl shadow-[0px_15px_20px_1px_#0000000d]">
      <div className="flex justify-between items-center max-xl:items-start max-sm:px-[6px] max-xl:flex-col max-xl:space-y-3">
        <div className="flex flex-col items-start font-semibold">
          <h2 className="text-primary text-[18px]">List Transactions</h2>
          <span className="text-grayText text-[14px] max-sm:hidden">
            Income Chart for the Last Week
          </span>
        </div>
        <div className="flex max-sm:flex-col max-sm:space-y-7 max-sm:items-start items-center">
          <PercentChart
            values={[45, 30, 10, 15]}
            color={["#17AD4A", "#2388FF", "#FF9C27", "#F33131"]}
          />
        </div>
      </div>
      <div className="h-[1px] max-sm:hidden w-full bg-[#E1E1E1]" />
      <div className="flex max-xl:flex-col max-xl:space-y-3 w-full items-center justify-between">
        <div className="flex max-sm:flex-col max-xl:w-full max-sm:space-y-3 items-center max-sm:space-x-0 justify-between space-x-2">
          <Select
            options={["Payment Type", "Payment Status", "Period"]}
            defaultValue={0}
          />
          <Select
            options={["Payment Type", "Payment Status", "Period"]}
            defaultValue={1}
          />
          <Select
            options={["Payment Type", "Payment Status", "Period"]}
            defaultValue={2}
          />
        </div>
        <div className="flex max-xl:w-full items-center ml-auto justify-self-end  max-sm:w-full space-x-2">
          <SearchInput placeHolder="Search Payment..." />
          <div className="w-[110px]">
            <button className="bg-card_light rounded-[12px] h-[34px] w-full text-primary font-bold text-[14px]">
              Download
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-full overflow-hidden">
        {
          <Transitioncard
            date={new Date()}
            amount={0.025}
            id={"87DE56985FG"}
            merchant="EmanuelCoin"
            dollar={59216.62}
            less={430}
            orderId="BTC-41"
            status
            background="#F5F5F5"
            type="Invoice"
            coin="BTC"
            ajustmentStatus={false}
            paymentId="fdhgfhfghjnhgjhgjdfsdfjskjdiasjjlkdlskjd"
            payment="Less Than"
          />
        }
        <Transitioncard
          date={new Date()}
          amount={0.025}
          id={"87DE56985FG"}
          merchant="EmanuelCoin"
          dollar={59216.62}
          less={430}
          orderId="BTC-41"
          status
          background="#FFF"
          type="Invoice"
          coin="BTC"
          ajustmentStatus={false}
          paymentId="fdhgfhfghjnhgjhgjdfsdfjskjdiasjjlkdlskjd"
          payment="Unpaind"
        />
        <Transitioncard
          date={new Date()}
          amount={0.025}
          id={"87DE56985FG"}
          merchant="EmanuelCoin"
          dollar={59216.62}
          less={430}
          orderId="BTC-41"
          status
          background="#F5F5F5"
          type="Invoice"
          coin="BTC"
          ajustmentStatus={true}
          paymentId="fdhgfhfghjnhgjhgjdfsdfjskjdiasjjlkdlskjd"
          payment="More Than"
        />
        <Transitioncard
          date={new Date()}
          amount={0.025}
          id={"87DE56985FG"}
          merchant="EmanuelCoin"
          dollar={59216.62}
          less={430}
          orderId="BTC-41"
          status
          background="#FFF"
          type="Payment"
          coin="BTC"
          paymentId="fdhgfhfghjnhgjhgjdfsdfjskjdiasjjlkdlskjd"
          payment="Paid"
        />
        <Transitioncard
          date={new Date()}
          amount={0.025}
          id={"87DE56985FG"}
          merchant="EmanuelCoin"
          dollar={59216.62}
          less={430}
          orderId="BTC-41"
          status
          background="#F5F5F5"
          type="Invoice"
          coin="BTC"
          ajustmentStatus={true}
          paymentId="fdhgfhfghjnhgjhgjdfsdfjskjdiasjjlkdlskjd"
          payment="Paid"
        />
      </div>
      <div className="flex justify-between space-x-3 items-center m-auto w-[30%] max-xl:w-fit [&>div]:w-[30px] [&>div]:h-[30px] [&>div]:rounded-[12px] [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:font-bold [&>div]:text-[12px]">
        <div className="bg-grayLight">
          <FiChevronLeft />
        </div>
        {Array.from(Array(5).keys()).map((_, index) => {
          return (
            <div
              key={index}
              className={`cursor-pointer ${
                page === index + 1
                  ? "bg-primary text-white"
                  : "bg-grayLight text-grayText"
              }`}
            >
              <span>{index + 1}</span>
            </div>
          );
        })}
        <div className="bg-grayLight">
          <FiChevronRight />
        </div>
      </div>
    </section>
  );
};

export default TransitionList;
