"use client";
import Pagination from "@/components/common/Pagination";
import Select from "@/components/common/select";
import TransactionItem from "@/components/pages/PersonalWallet/TransactionItem";
import Dot from "$/public/icons/dot.svg";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { AiFillDollarCircle } from "react-icons/ai";
import { TRANSACTIONS_LIST } from "@/configs/cryptocurrencies";
import ReactECharts from "echarts-for-react";

const Transactions = () => {
  /** @type EChartsOption */
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: [
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Union Ads",
        type: "bar",
        itemStyle: {
          color: "#1093FF",
        },
        stack: "Ad",
        emphasis: {
          focus: "series",
        },
        data: [
          220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310,
          220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310,
          220, 182, 191, 234, 290, 330, 310,
        ],
      },
      {
        name: "Video Ads",
        type: "bar",
        stack: "Ad",
        emphasis: {
          focus: "series",
        },
        itemStyle: {
          color: "#E1E1E1",
          borderRadius: [6, 6, 0, 0],
        },
        data: [
          150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190, 330, 410,
          150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190, 330, 410,
          150, 232, 201, 154, 190, 330, 410,
        ],
      },
    ],
  };

  const lineOption = {
    tooltip: {
      trigger: "axis",
    },

    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Email",
        type: "line",
        stack: "Total",
        showSymbol: false,
        lineStyle: {
          width: 2,
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "Union Ads",
        type: "line",
        stack: "Total",
        showSymbol: false,
        lineStyle: {
          width: 2,
        },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "Video Ads",
        type: "line",
        stack: "Total",
        showSymbol: false,
        lineStyle: {
          width: 2,
        },
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: "Direct",
        type: "line",
        stack: "Total",
        showSymbol: false,
        lineStyle: {
          width: 2,
        },
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: "Search Engine",
        type: "line",
        stack: "Total",
        showSymbol: false,
        lineStyle: {
          width: 2,
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  };

  return (
    <Grid container rowGap={2} className="py-6">
      <Grid container xs={12} className="p-10 bg-card shadow-3xl rounded-xl">
        <div className="w-full flex flex-col gap-8 ">
          <div className="w-full flex justify-between items-center gap-10 flex-wrap">
            <h4 className="text-primary font-bold">Transaction Data</h4>
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1 text-[#E1E1E1]">
                <Dot className=" text-[#E1E1E1]" />
                <span className="text-grayText">Value of transactions</span>
              </span>
              <span className="flex flex-wrap items-center gap-2 text-3xl">
                <AiFillDollarCircle className="text-grayText" />
                12,765,251,078
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-2">
                <Dot className=" text-[#1093FF]" />
                <span>transactions</span>
              </span>
              <span className="flex flex-wrap items-center gap-1 text-3xl">
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
          <div className="w-full">
            <ReactECharts style={{ height: 200 }} option={option} />
          </div>
        </div>
      </Grid>
      <Grid container xs={12} className="p-10 bg-card shadow-3xl rounded-xl">
        <div className="w-full h-full flex items-center justify-between gap-10 max-md:flex-col max-md:justify-start">
          <div className="w-full max-w-[30%] flex flex-col gap-14">
            <div>
              <h4 className="text-primary font-bold max-md:text-center">
                Chart of Transactions
              </h4>
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
              <div className="w-full flex flex-wrap items-center justify-between p-4 px-5 bg-grayLight rounded-xl font-bold">
                <span className="text-grayText text-sm">
                  Total transactions
                </span>
                <span className="text-4xl">6,391,745</span>
              </div>
            </div>
          </div>
          <div className="w-full h-full max-w-[58%]">
            <ReactECharts option={lineOption} />
          </div>
        </div>
      </Grid>
      <Grid
        container
        xs={12}
        className="py-5 bg-card px-10 shadow-3xl rounded-xl"
      >
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
