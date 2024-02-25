"use client";
import IncomeList from "@/components/pages/Dashboard/merchant/IncomeList";
import Total from "@/components/pages/Dashboard/merchant/total";
import { Grid } from "@mui/material";
import ReactECharts from "echarts-for-react";
import Header from "@/components/pages/Dashboard/merchant/Header";
import Chart from "@/components/pages/Dashboard/merchant/IncomeList/chart";

const Income = () => {
  /** @type EChartsOption */
  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
      show: false,
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 0,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        // emphasis: {
        //   label: {
        //     show: true,
        //     fontSize: 40,
        //     fontWeight: "bold",
        //   },
        // },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
      },
    ],
  };
  return (
    <Grid container>
      <Grid container className=" px-3 space-y-5 space-x-1">
        <Grid xs={12}>
          <Total />
        </Grid>
        <Grid xl={7.8} xs={12}>
            <IncomeList />

        </Grid>
        <Grid xl={0.5} xs={12}>
            <div className="h-auto border-r-[1px]"></div>

        </Grid>
        <Grid xl={3.5} xs={12}>
          <div className="flex flex-col w-full bg-white rounded-xl shadow-3xl">
            {/* <ReactECharts option={option} /> */}
            <Chart/>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Income;
