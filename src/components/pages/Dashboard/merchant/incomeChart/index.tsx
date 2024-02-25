"use client";
import ReactECharts from "echarts-for-react";

const IncomeChart = () => {
  /** @type EChartsOption */
  const option = {
    grid: {
      left: '5%',
      right: '5%',
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
    <div className="bg-white rounded-xl shadow-3xl px-10 pt-8 ">
      <div className="flex justify-between items-center">
        <span className="text-primary text-base font-bold">
          Income Chart for the Last Week
        </span>
        <div className="flex items-center">
          <span className="bg-grayLight rounded-2xl py-0.5 px-5 text-lg font-bold">
            {"12,356,215"}
          </span>
        </div>
      </div>
      <ReactECharts style={{ height: 250 }} option={option} />
    </div>
  );
};

export default IncomeChart;
