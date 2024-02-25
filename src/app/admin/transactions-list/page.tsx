"use client";
import Pagination from "@/components/common/Pagination";
import Select from "@/components/common/select";
import TransactionItem from "@/components/pages/PersonalWallet/TransactionItem";
import Dot from "$/public/icons/dot.svg";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { AiFillDollarCircle } from "react-icons/ai";
import { TRANSACTIONS_LIST } from "@/configs/cryptocurrencies";

const Transactions = () => {
  return (
    <Grid container className="pt-6">
      <Grid container xs={12} className="p-10 shadow-3xl rounded-xl">
        <div className="w-full flex flex-col gap-8 ">
          <div className="w-full flex justify-between items-center gap-10 flex-wrap">
            <h4 className="text-primary font-bold">Transaction Data</h4>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-[#E1E1E1]">
                <Dot className=" text-[#E1E1E1]" />
                <span className="text-grayText">Value of transactions</span>
              </span>
              <span className="flex items-center gap-2 text-3xl">
                <AiFillDollarCircle className="text-grayText" />
                12,765,251,078
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-2">
                <Dot className=" text-[#1093FF]" />
                <span>transactions</span>
              </span>
              <span className="flex items-center gap-1 text-3xl">
                <AiFillDollarCircle className="text-grayText" />
                1,251,320
              </span>
            </div>
            <div className="w-full max-w-[150px] bg-grayLight p-2 text-xs flex rounded-xl">
              <button className="w-full text-center px-3 py-1 rounded-xl bg-primary text-white">
                Weekly
              </button>
              <button className="w-full text-center px-3 py-1 rounded-xl text-grayText">
                Mounthly
              </button>
            </div>
          </div>
          <div className="w-full bg-red-300 min-h-[200px]"> chart </div>
        </div>
      </Grid>
      <Grid container xs={12} className="p-10 shadow-3xl rounded-xl">
        <div className="w-full h-full flex items-center justify-between gap-10 max-md:flex-col max-md:justify-start">
          <div className="w-full max-w-[378px] flex flex-col gap-14">
            <div>
              <h4 className="text-primary font-bold">Chart of Transactions</h4>
              <div className="w-full max-w-[150px] bg-grayLight p-2 text-xs flex rounded-xl">
                <button className="w-full text-center px-3 py-1 rounded-xl bg-primary text-white">
                  Weekly
                </button>
                <button className="w-full text-center px-3 py-1 rounded-xl text-grayText">
                  Mounthly
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="w-full flex flex-wrap text-xs font-bold">
                <div className="w-full flex justify-between gap-x-10">
                  <div className="w-full flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Dot className="text-[#17AD4A]" />
                      Paid
                    </span>
                    <span className="text-grayText">1251</span>
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Dot className="text-[#F33131]" />
                      Unpaid
                    </span>
                    <span className="text-grayText">1251</span>
                  </div>
                </div>
                <div className="w-full flex justify-between gap-x-10">
                  <div className="w-full flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Dot className="text-[#2388FF]" />
                      More Than
                    </span>
                    <span className="text-grayText">1251</span>
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Dot className="text-[#FF9C27]" />
                      Less Than
                    </span>
                    <span className="text-grayText">1251</span>
                  </div>
                </div>
              </div>
              <div className="w-full flex items-center justify-between p-4 px-5 bg-grayLight rounded-xl font-bold">
                <span className="text-grayText text-sm">
                  Total transactions
                </span>
                <span className="text-4xl">6,391,745</span>
              </div>
            </div>
          </div>
          <div className="bg-red-300 w-full h-full "> chart </div>
        </div>
      </Grid>
      <Grid container xs={12} className="py-5 px-10 shadow-3xl">
        <div className="w-full flex flex-col gap-3">
          <h3 className="text-primary font-bold text-lg">Transactions</h3>
          <div className=" w-full flex gap-2">
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
          <ul className="flex flex-col w-full h-full overflow-hidden">
            {TRANSACTIONS_LIST.map((i, index) => (
              <li key={index}>
                <TransactionItem {...i} />
              </li>
            ))}
          </ul>
          <Pagination
            currentPage={1}
            onPageChange={() => {}}
            totalPage={10}
            containerClass="mx-auto"
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default Transactions;
