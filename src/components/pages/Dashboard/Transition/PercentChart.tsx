import React from "react";
interface PercentProps {
  values: number[];
  color: string[];
}
const PercentChart: React.FC<PercentProps> = (props) => {
  return (
    <React.Fragment>
      <div className="grid gap-x-5 px-[5px] gap-y-1 grid-cols-2 text-grayText  text-[12px] font-semibold [&>div]:flex [&>div]:items-center [&>div]:space-x-[2px] ">
        <div>
          <div
            className="w-[6px] h-[6px] rounded-full mr-1"
            style={{ background: props.color[0] }}
          ></div>
          <span>Paid</span>
        </div>
        <div>
          <div
            className="w-[6px] h-[6px] rounded-full mr-1"
            style={{ background: props.color[3] }}
          ></div>
          <span>Unpaid</span>
        </div>
        <div>
          <div
            className="w-[6px] h-[6px] rounded-full mr-1"
            style={{ background: props.color[1] }}
          ></div>
          <span>More Than</span>
        </div>
        <div>
          <div
            className="w-[6px] h-[6px] rounded-full mr-1"
            style={{ background: props.color[2] }}
          ></div>
          <span>Less Than</span>
        </div>
      </div>
      <div className="flex items-center rounded-full -space-x-[8px] max-sm:right-0 -right-[24px] relative max-sm:w-11/12 w-[360px] h-[9px]">
        {props.values.map((value, index) => {
          return (
            <div
              key={index}
              style={{ width: `${value}%`, background: props.color[index]}}
              className="h-full rounded-full after:text-grayText relative after:left-0 after:right-2 after:font-[600]  text-center text-[10px] after:-top-4 after:absolute after:content-['%40']"
            ></div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default PercentChart;
