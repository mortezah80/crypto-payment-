"use client";
import { useEffect, useRef, useState } from "react";
import { Grid } from "@mui/material";
import TicketsArchive from "$/public/icons/tickets_archive.svg";
import PlusIcon from "$/public/icons/plus.svg";
import SearchIcon from "$/public/icons/search.svg";
import useOutside from "@/hooks/useOutside";
import ArchivedTicketCard from "@/components/pages/Dashboard/Tickets/ArchivedTicketCard";
import { authServiceHandler } from "@/api/auth.service";
import Pagination from "@/components/common/Pagination";
import Link from "next/link";
import NewTicketFormIcon from "$/public/icons/new_ticket_form.svg";
import { useZustandStore } from "@/store";

const Ticket = ({ params }: { params: { id: String } }) => {
  const [ticket, setTicket] = useState<any>();
  const [tickets, setTickets] = useState<any>();
  const user = useZustandStore((state) => state.user);

  const [
    IsMessagePriorityDropDownOpened,
    setIsMessagePriorityDropDownIsOpened,
  ] = useState(false);
  const [selectedMessagePriority, setSelectedMessagePriority] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState("");
  const messagePriorityDropDownRef = useRef(null);
  const openTicketsLength = tickets?.data?.filter(
    (item: any) => item.status
  ).length;

  const closedTicketsLength = tickets?.data?.filter(
    (item: any) => !item.status
  ).length;

  useOutside(messagePriorityDropDownRef, setIsMessagePriorityDropDownIsOpened);

  const handleGetTicket = async () => {
    const res = await authServiceHandler.getTicket(params.id);
    setTicket(res.data.data);
  };

  const handleGetTickets = async () => {
    const res = await authServiceHandler.getTickets({
      page: currentPage,
      limit: 5,
    });
    setTickets(res.data);
  };

  const handleReply = async (e: any) => {
    e.preventDefault();
    await authServiceHandler.replyTicket({
      ticket_id: params?.id,
      reply_text: value,
    });
    setValue("");
    handleGetTicket();
  };

  const handleCloseTicket = async () => {
    await authServiceHandler.closeTicket(params.id);
    handleGetTicket();
    handleGetTickets();
  };

  useEffect(() => {
    params?.id && handleGetTicket();
  }, [params.id]);

  useEffect(() => {
    handleGetTickets();
  }, [currentPage]);

  return (
    <div className="flex flex-col pb-3 pt-6 space-y-5 w-full max-sm:p-[10px]">
      <div className="w-full  flex gap-2 max-sm:flex-col">
        <Grid container rowGap={2} className="w-full flex justify-between">
          <Grid item xs={12} className="max-h-[160px] min-[640px]:hidden">
            <div className="flex justify-between items-center gap-3 rounded-[12px] bg-gradient-to-r from-[#046DC3] to-[#1093FF] px-16 py-10 max-sm:flex-col max-sm:items-center h-full max-sm:py-5 max-sm:px-8">
              <div className="text-white flex flex-col justify-center max-sm:items-center">
                <h2 className="font-bold text-2xl">Tickets</h2>
                <p className="text-sm max-sm:text-xs">
                  You can contact us with support on any issue, including
                  digital currency or payment, etc
                </p>
              </div>
              <div className="w-0 h-20 border-[1px] border-card_light max-sm:hidden"></div>
              <button
                type="button"
                className="flex justify-center items-center gap-1 bg-white w-full max-w-[150px] rounded-[12px] h-10 text-primary text-sm font-bold"
              >
                <PlusIcon />
                <span>New Ticket</span>
              </button>
            </div>
          </Grid>
          <Grid item className="w-full max-w-[38%]">
            <div className="flex bg-card flex-col gap-3 py-[25px] px-12 shadow-3xl rounded-[12px] max-sm:items-center max-sm:px-4 max-xl:px-5 max-xl:py-6">
              <h3 className="text-[16px] text-primary font-700 leading-normal font-bold">
                Tickets Archive
              </h3>
              {tickets?.data?.length ? (
                <div className="flex flex-col gap-6 w-full">
                  <form className="h-9 rounded-[12px] bg-grayLight flex justify-between items-center px-3">
                    <input
                      type="search"
                      placeholder="Search..."
                      className="w-11/12 h-full bg-transparent outline-none placeholder:text-grayText placeholder:text-sm"
                    />
                    <button type="submit">
                      <SearchIcon />
                    </button>
                  </form>
                  <div className="flex flex-col gap-2 justify-between">
                    <div className="flex justify-between items-center text-sm max-xl:text-xs">
                      <div className="flex gap-2 items-center text-grayText font-bold">
                        <div className="flex items-center gap-1">
                          <h4>Open</h4>
                          <div className="text-xs flex justify-center items-center w-5 h-5 text-center bg-grayText text-white rounded-full">
                            {openTicketsLength}
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <h4>Closed</h4>
                          <div className="text-xs flex justify-center items-center w-5 h-5 text-center bg-grayText text-white rounded-full">
                            {closedTicketsLength}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-primary font-bold">
                        <h4>Unread</h4>
                        <div className="text-xs flex justify-center items-center w-5 h-5 text-center bg-primary text-white rounded-full">
                          {tickets?.total_unread}
                        </div>
                      </div>
                    </div>
                    <ul className="flex flex-col gap-1">
                      {tickets?.data?.map((item: any) => (
                        <Link
                          key={item?.id}
                          href={`/dashboard/tickets/${item?.id}`}
                          className="bg-grayLight even:bg-transparent rounded-[18px]"
                        >
                          <ArchivedTicketCard
                            {...item}
                            isSelected={item?.id === params?.id}
                          />
                        </Link>
                      ))}
                    </ul>
                    <Pagination
                      totalPage={tickets?.total_page}
                      containerClass="mx-auto mt-6"
                      currentPage={currentPage}
                      onPageChange={setCurrentPage}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center w-full">
                  <TicketsArchive />
                  <span className="text-[#D8D8D8] text-xl font-bold">
                    There Are No Tickets
                  </span>
                </div>
              )}
            </div>
          </Grid>
          <Grid container item className="w-full max-w-[60%]">
            <Grid container rowGap={5}>
              <Grid item xs={12} className="max-sm:hidden">
                <div className="flex justify-between items-center gap-3 rounded-[12px] bg-gradient-to-r from-[#046DC3] to-[#1093FF] px-16 py-10">
                  <div className="text-white flex flex-col justify-center">
                    <h2 className="font-bold text-2xl">Tickets</h2>
                    <p className="text-sm">
                      You can contact us with support on any issue, including
                      digital currency or payment, etc
                    </p>
                  </div>
                  <div className="w-0 h-20 border-[1px] border-card_light"></div>
                  <Link
                    href={"/dashboard/tickets/new"}
                    className="flex justify-center items-center gap-1 bg-white w-full max-w-[150px] rounded-[12px] h-10 text-primary text-sm font-bold"
                  >
                    <PlusIcon />
                    <span>New Ticket</span>
                  </Link>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                className="rounded-[12px] bg-card shadow-3xl p-[30px]"
              >
                <div className="flex h-full flex-col gap-2 justify-center items-center">
                  <Link href={"/dashboard/tickets/new"}>
                    <NewTicketFormIcon />
                  </Link>
                  <p className="text-2xl font-bold text-[#D8D8D8] max-sm:text-lg text-center">
                    Click to Create a New Ticket Form
                  </p>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Ticket;
