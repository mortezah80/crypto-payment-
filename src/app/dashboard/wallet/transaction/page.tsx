import PercentChart from "@/components/pages/Dashboard/Transition/PercentChart";
import TransactionItem from "@/components/pages/PersonalWallet/TransactionItem";
import Select from "@/components/common/select/index";
import { Grid } from "@mui/material";
import Total from "@/components/pages/Dashboard/merchant/total";
import Header from "@/components/pages/Dashboard/merchant/Header";

const walletTransaction = () => {
  return (
    <div className="flex flex-col space-y-5 pt-11">
      <Grid container rowGap={5}>
        <Grid item xs={12}>
          <div className="xl:pl-7 bg-card shadow-[0px_15px_20px_1px_#0000000d] flex items-center rounded-xl">
            <div className="py-[33px] px-[44px] w-full max-sm:px-[22px]">
              <h2 className="text-primary text-[18px] max-sm:self-center max-sm:text-center font-bold">
                Transactions
              </h2>
              <div className="flex text-[14px] max-sm:mt-[3px] mt-[25px] max-lg:flex-col max-lg:space-y-2 text-text font-bold justify-between w-full">
                <h3 className="max-sm:self-center max-sm:mb-[12px]">
                  Income Chart for the Last Week
                </h3>
                <div className="items-center max-md:flex-col max-md:items-start max-md:space-y-[20px] pb-[30px] mb-[30px] flex">
                  <PercentChart
                    values={[45, 30, 10, 15]}
                    color={["#17AD4A", "#2388FF", "#FF9C27", "#F33131"]}
                  />
                </div>
              </div>
              <div className="border-b max-sm:hidden border-[#E1E1E1] mt-[17px] mb-[37px]"></div>
              <div className="flex justify-between items-center max-lg:flex-col max-lg:space-y-3 max-sm:space-y-[18px]  mb-[30px]">
                <div className="flex items-center max-lg:w-full max-xl:w-10/12 max-lg:space-x-0 max-lg:space-y-[18px] max-lg:flex-col w-7/12 space-x-2">
                  <Select
                    options={["Payment Type", "Payment Status", "Period"]}
                    defaultValue={0}
                  />
                  <Select
                    options={["Payment Type", "Payment Status", "Period"]}
                    defaultValue={2}
                  />
                  <Select
                    options={["Payment Type", "Payment Status", "Period"]}
                    defaultValue={1}
                  />
                  <Select
                    options={["Payment Type", "Payment Status", "Period"]}
                    defaultValue={0}
                  />
                </div>
                <button className="bg-card_light max-sm:w-full self-center rounded-[12px] py-[10px] px-[20px] text-[14px] font-bold text-primary">
                  Download
                </button>
              </div>
              <div>
                <TransactionItem
                  date={new Date()}
                  amount={0.025}
                  id={"87DE56985FG"}
                  transaction={0}
                  dollar={59216.62}
                  less={430}
                  status
                  background="#F5F5F5"
                  type="Invoice"
                  coin="BTC"
                  ajustmentStatus={false}
                  networkAddress="fdhgfhfghjnhgjhgjdfsdfjskjdiasjjlkdlskjd"
                  payment="Less Than"
                />

                <TransactionItem
                  date={new Date()}
                  amount={0.025}
                  id={"87DE56985FG"}
                  transaction={0}
                  dollar={59216.62}
                  less={430}
                  status
                  background="#FFF"
                  type="Invoice"
                  coin="BTC"
                  ajustmentStatus={false}
                  networkAddress="fdhgfhfghjnhgjhgjdfsdfjskjdiasjjlkdlskjd"
                  payment="Unpaind"
                />
                <TransactionItem
                  date={new Date()}
                  amount={0.025}
                  id={"87DE56985FG"}
                  dollar={59216.62}
                  transaction={0}
                  less={430}
                  status
                  background="#F5F5F5"
                  type="Invoice"
                  coin="BTC"
                  ajustmentStatus={true}
                  networkAddress="fdhgfhfghjnhgjhgjdfsdfjskjdiasjjlkdlskjd"
                  payment="More Than"
                />
                <TransactionItem
                  date={new Date()}
                  transaction={0}
                  amount={0.025}
                  id={"87DE56985FG"}
                  dollar={59216.62}
                  less={430}
                  status
                  background="#FFF"
                  type="Payment"
                  coin="BTC"
                  networkAddress="fdhgfhfghjnhgjhgjdfsdfjskjdiasjjlkdlskjd"
                  payment="Paid"
                />
                <TransactionItem
                  date={new Date()}
                  amount={0.025}
                  id={"87DE56985FG"}
                  transaction={0}
                  dollar={59216.62}
                  less={430}
                  status
                  background="#F5F5F5"
                  type="Invoice"
                  coin="BTC"
                  ajustmentStatus={true}
                  networkAddress="fdhgfhfghjnhgjhgjdfsdfjskjdiasjjlkdlskjd"
                  payment="Paid"
                />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default walletTransaction;
