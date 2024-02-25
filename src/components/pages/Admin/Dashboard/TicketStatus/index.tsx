"use client";
import { useState } from "react";
interface ticketStatusProps {
  created: number;
  open: number;
  closed: number;
}
const TicketStatus: React.FC<ticketStatusProps> = (props) => {
  const [mode, setMode] = useState(0);
  return (
    <div className="bg-card h-[350px] flex flex-col max-lg:h-auto space-y-4.5 shadow-[0px_15px_20px_1px_#0000000d] max-lg:px-7 max-md:px-5 max-lg:py-7 rounded-xl px-14 py-10 text-sm font-bold">
      <div className="flex items-center justify-between max-md:justify-center">
        <h4 className="text-primary text-[18px]">Ticket Status</h4>
        <button className="text-primary font-semibold max-md:hidden rounded-xl bg-card_light px-7 py-2.5 ">
          <span>More</span>
        </button>
      </div>
      <div className="flex mt-6 items-center justify-between max-xl:flex-col max-lg:flex-col max-xl:space-y-10">
        <div className="flex items-center w-8/12 max-2xl:w-9/12 max-xl:w-10/12 space-y-6 max-lg:flex-col  justify-between">
          <h2 className="font-bold text-4xl">
            {props.created}
            <span className="pl-1 font-normal text-sm">
              Total Created Tickets
            </span>
          </h2>
          <h2 className="font-bold text-4xl">
            {props.open}
            <span className="pl-1 font-normal text-sm">
              Total Created Tickets
            </span>
          </h2>
          <h2 className="font-bold text-4xl">
            {props.closed}
            <span className="pl-1 font-normal text-sm">
              Total Created Tickets
            </span>
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
      <div className="hidden justify-center items-center max-md:flex ">
        <button className="text-primary font-semibold rounded-xl bg-card_light px-7 py-2.5 mt-8">
          <span>More</span>
        </button>
      </div>
    </div>
  );
};

export default TicketStatus;
