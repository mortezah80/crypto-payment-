"use client";
import { Grid } from "@mui/material";
import PersonIcon from "$/public/icons/tickets/person.svg";
import Search_wallet from "@/assets/search.svg";
import Select from "@/components/common/select";
import Pagination from "@/components/common/Pagination";
import { useEffect, useState } from "react";
import { authServiceHandler } from "@/api/auth.service";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Switch from "@/components/common/switch";
import ReactECharts from "echarts-for-react";
import Loading from "@/components/common/Loading";

const Tickets = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [ticketsInfo, setTicketsInfo] = useState<any>();
  const [ticketsInfoLoading, setTicketsInfoLoading] = useState(false);
  const [tickets, setTickets] = useState<any>();
  const [ticketsLoading, setTicketsLoading] = useState(false);
  const [active, setActive] = useState("weekly");

  const handleGetTicketsInfo = async () => {
    try {
      setTicketsInfoLoading(true);
      const res = await authServiceHandler.getTicketChart({});
      setTicketsInfo(res.data.data);
    } catch (error) {
    } finally {
      setTicketsInfoLoading(false);
    }
  };

  const handleGetTickets = async () => {
    try {
      setTicketsLoading(true);
      const res = await authServiceHandler.getTickets({
        page: currentPage,
        limit: 5,
      });
      setTickets(res.data);
    } catch (error) {
    } finally {
      setTicketsLoading(false);
    }
  };

  useEffect(() => {
    handleGetTicketsInfo();
  }, []);

  useEffect(() => {
    handleGetTickets();
  }, [currentPage]);

  /** @type EChartsOption */
  const totalCreatedTicketsOption = {
    grid: {
      left: "5%",
      right: "5%",
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ticketsInfo?.chart?.labels,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: ticketsInfo?.chart?.ticket_count,
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

  /** @type EChartsOption */
  const ticketsStatusOption = {
    grid: {
      left: "10%",
      right: "1%",
      top: 20,
      bottom: 25,
    },
    xAxis: {
      type: "category",
      data: ticketsInfo?.chart?.labels,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: ticketsInfo?.chart?.ticket_open_count,
        type: "line",
        showSymbol: false,
        lineStyle: {
          color: "#F6BF53",
          width: 3,
          shadowBlur: 2,
        },
      },
      {
        data: ticketsInfo?.chart?.ticket_closed_count,
        type: "line",
        showSymbol: false,
        lineStyle: {
          color: "#9F9F9F",
          width: 3,
          shadowBlur: 2,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col gap-7 mt-6">
      <div className="flex justify-between w-full gap-5">
        <div className="w-full max-w-[55%] h-[210px] rounded-xl bg-card shadow-[0px_15px_20px_0px_#0000000d] p-7 flex justify-between items-center gap-16 max-xl:max-w-none max-md:flex-col max-md:justify-start max-md:text-center max-md:h-auto">
          <div className="flex flex-col justify-between gap-3">
            <span className="text-lg text-primary font-bold">
              Total Created Tickets
            </span>
            <div className="flex items-end gap-5">
              <div className="flex flex-col">
                <span className="text-[48px] text-text font-bold">
                  {ticketsInfoLoading ? (
                    <Loading size={20} />
                  ) : (
                    ticketsInfo?.total_ticket
                  )}
                </span>
                <span className="text-xs font-bold text-grayText -mt-3">
                  All Created Tickets
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[32px] text-text font-bold">
                  {ticketsInfoLoading ? (
                    <Loading size={20} />
                  ) : (
                    ticketsInfo?.total_ticket_in_range
                  )}
                </span>
                <span className="text-[10px] font-bold text-grayText -mt-3">
                  in range
                </span>
              </div>
            </div>
            <Switch
              first="weekly"
              seconde="monthly"
              active={active}
              setActive={setActive}
            />
          </div>
          {ticketsInfoLoading ? (
            <div className="w-full flex justify-center items-center">
              <Loading size={80} />
            </div>
          ) : (
            <ReactECharts
              style={{ height: 200, width: "100%" }}
              option={totalCreatedTicketsOption}
            />
          )}
        </div>
        <div className="w-full max-w-[55%] h-[210px] rounded-xl bg-card shadow-[0px_15px_20px_0px_#0000000d] p-7 flex justify-between items-center gap-16 max-xl:max-w-none max-md:flex-col max-md:justify-start max-md:text-center max-md:h-auto">
          <div className="flex flex-col justify-between gap-3">
            <div className="text-primary text-lg font-bold pb-10 max-md:pb-0">
              Tickets Status
            </div>
            <div className="flex flex-col gap-3 max-xl:flex-row max-md:flex-col">
              <div className="flex gap-2 items-center">
                <div className="h-4 w-1 bg-gold" />
                <div className="flex items-center gap-1">
                  <span className="text-lg text-text font-bold">
                    {ticketsInfoLoading ? (
                      <Loading size={20} />
                    ) : (
                      ticketsInfo?.total_open_ticket
                    )}
                  </span>
                  <span className="text-grayText text-xs font-bold">
                    {"All Open Tickets"}
                  </span>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="h-4 w-1 bg-grayText" />
                <div className="flex items-center gap-1">
                  <span className="text-lg text-text font-bold">
                    {ticketsInfoLoading ? (
                      <Loading size={20} />
                    ) : (
                      ticketsInfo?.total_closed_ticket
                    )}
                  </span>
                  <span className="text-grayText text-xs font-bold">
                    {"All Closed Tickets"}
                  </span>
                </div>
              </div>
            </div>
            <Switch
              first="weekly"
              seconde="monthly"
              active={active}
              setActive={setActive}
            />
          </div>
          {ticketsInfoLoading ? (
            <div className="w-full flex justify-center items-center">
              <Loading size={80} />
            </div>
          ) : (
            <ReactECharts
              style={{ height: 200, width: "100%" }}
              option={ticketsStatusOption}
            />
          )}
        </div>
      </div>
      <Grid
        item
        xs={12}
        className="rounded-xl bg-card shadow-3xl max-md:px-5 p-11"
      >
        <header className="flex items-center justify-between flex-wrap">
          <div className="flex items-center justify-between gap-8 flex-wrap max-md:gap-4">
            <div className="max-md:w-full flex items-center gap-1 ">
              <label
                className="leading-8 text-grayText min-w-[80px] font-bold text-sm"
                htmlFor=""
              >
                UserName:
              </label>
              <input
                type="text"
                placeholder="Enter a Username..."
                className="bg-grayLight px-3 py-2 rounded-xl text-sm w-full"
              />
            </div>
            <div className="max-md:w-full flex items-center gap-1 ">
              <label
                className="leading-8 text-grayText min-w-[80px] font-bold text-sm"
                htmlFor=""
              >
                Priority:
              </label>
              <Select
                containerClassName="bg-grayLight text-grayText border-none"
                options={["Payment Type", "Payment Status", "Period"]}
                defaultValue={2}
              />
            </div>
            <div className="max-md:w-full flex items-center gap-1 ">
              <label
                className="leading-8 text-grayText min-w-[80px] font-bold text-sm"
                htmlFor=""
              >
                Sort by:
              </label>
              <Select
                containerClassName="bg-grayLight text-grayText border-none"
                options={["Payment Type", "Payment Status", "Period"]}
                defaultValue={2}
              />
            </div>
          </div>
          <div className="flex mt-3 items-center justify-between px-[14px] h-[36px] rounded-[12px] bg-grayLight w-full max-w-[230px] max-md:max-w-full">
            <div className="w-full">
              <input
                type="text"
                className="flex-1 bg-transparent w-full text-grayText font-semibold text-[14px] focus:border-none focus:outline-none"
                placeholder={"Search..."}
              />
            </div>
            <span>
              <Search_wallet />
            </span>
          </div>
        </header>
        <div className="mt-6">
          {/* <header className="px-8 w-full flex  text-xs">
            <div className="text-center min-w-[25%] flex-grow-[3]">
              UserName
            </div>
            <div className="text-center min-w-[30%] flex-grow-[4]">
              Ticket title
            </div>
            <div className="text-center min-w-[8.5%] flex-grow-[1]">
              Priority
            </div>
            <div className="text-center min-w-[8.5%] flex-grow-[3]">Date</div>
            <div className="text-center min-w-[8.5%] flex-grow-[2]">Status</div>
          </header> */}
          <ul className="flex flex-col ">
            {ticketsLoading ? (
              <div className="w-full flex justify-center items-center my-5">
                <Loading size={80} />
              </div>
            ) : (
              tickets?.data?.map((i: any, index: number) => (
                <li
                  key={i}
                  className="flex items-center flex-wrap w-full p-5 px-8 even:bg-background rounded-2xl gap-1 hover:bg-[#F9F9F9] duration-200"
                >
                  <div className="flex items-center gap-10 flex-grow-[3]">
                    <span className="text-grayText text-xs">{index + 1}</span>
                    <div className="flex items-center gap-2">
                      <PersonIcon />
                      <div className="flex flex-col">
                        <h4 className="text-sm font-bold">{i?.creator_user}</h4>
                        <p className="text-grayText">{i?.creator_email}</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-52">
                    <span className="text-sm font-bold">{i?.title}</span>
                    <p className="text-grayText">{i?.messages[0]?.text}</p>
                  </div>
                  <div className="flex-grow-[1] text-center text-[#FF5252] bg-redAlterBack px-4 py-1 text-xs rounded-xl font-bold">
                    {i?.priority}
                  </div>
                  <div className="text-center flex-grow-[3]">
                    {i?.created_at}
                  </div>
                  <div className="flex items-center justify-center gap-5 flex-grow-[2]">
                    <span className="bg-grayText text-white px-6 rounded-xl text-xs py-1 align-middle ">
                      {i?.status ? "Open" : "Closed"}
                    </span>
                    <Link
                      className="p-1 rounded-full bg-grayText cursor-pointer"
                      href={`/admin/tickets/${i?.id}`}
                    >
                      <IoIosArrowForward color="#FFF" />
                    </Link>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
        <Pagination
          totalPage={tickets?.total_page}
          containerClass="mx-auto mt-6"
          currentPage={currentPage}
          onPageChange={(d) => setCurrentPage(d)}
        />
      </Grid>
    </div>
  );
};

export default Tickets;
