"use client";

import { Grid } from "@mui/material";
import { useState } from "react";

import ReactECharts from "echarts-for-react";
interface totalUsersProps {
  users: number;
  logins: number;
  registratin: number;
}
const TotalUsers: React.FC<totalUsersProps> = (props) => {
  const [mode, setMode] = useState(0);
  /** @type EChartsOption */
  const option = {
    grid: {
      left: "5%",
      right: "5%",
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
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        lineStyle: {
          color: "#1093FF",
          width: 4,
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(16, 147, 255, 0.60)", // color at 0%
              },
              {
                offset: 1,
                color: "rgba(16, 147, 255, 0.00)", // color at 100%
              },
            ],
            global: false, // default is false
          },
        },
      },
    ],
  };
  return (
    <div className="bg-card h-[375px] max-md:h-auto flex flex-col space-y-4.5 shadow-[0px_15px_20px_1px_#0000000d] max-md:px-4 max-md:py-6 rounded-xl px-14 py-10 text-sm font-bold">
      <div className="flex items-center justify-between max-md:justify-center max-md:mb-2">
        <h4 className="text-primary">Total Users</h4>
        <button className="text-primary max-md:hidden font-semibold rounded-xl bg-card_light px-7 py-2.5 ">
          <span>More</span>
        </button>
      </div>
      <div className="mt-2 mb-5 flex items-center justify-between space-x-5 max-md:flex-col max-md:justify-center max-md:space-y-10">
        <div className="flex items-center py-3 px-6 text-[32px] bg-grayLight flex-1 rounded-2xl max-md:w-full">
          <h2>
            {props.users}
            <span className="text-sm font-normal pl-1">users</span>
          </h2>
        </div>
        <div className="flex w-fit items-center bg-grayLight font-bold rounded-full px-2 py-1">
          <button
            onClick={() => setMode(0)}
            className={`py-1 px-3 rounded-full ${
              mode == 0
                ? "text-white bg-primary"
                : "text-grayText bg-transparent"
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setMode(1)}
            className={`py-1 px-3 rounded-full ${
              mode == 1
                ? "text-white bg-primary"
                : "text-grayText bg-transparent"
            }`}
          >
            Mounthly
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between max-md:flex-col max-md:space-y-52">
        <div className="text-left flex-1 max-md:w-full">
          <div className="flex font-bold items-center max-md:justify-between space-x-5 max-md:flex-wrap">
            <span className="text-xs text-grayText">Login of Users</span>
            <h3 className="text-primary text-xl max-md:text-text max-md:text-[48px]">
              {props.users}
            </h3>
          </div>
        </div>
        <div className="text-left flex-1 max-md:w-full">
          <div className="flex font-bold items-center space-x-5 max-md:justify-between max-md:flex-wrap">
            <span className="text-xs text-grayText">User Registration</span>
            <h3 className="text-primary text-xl max-md:text-text max-md:text-[48px]">
              {props.registratin}
            </h3>
          </div>
        </div>
      </div>
      <div className="max-md:flex hidden justify-center items-center mt-8">
        <button className="text-primary  font-semibold rounded-xl bg-card_light px-7 py-2.5 ">
          <span>More</span>
        </button>
      </div>
    </div>
  );
};

export default TotalUsers;
