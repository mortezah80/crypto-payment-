"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import { Grid } from "@mui/material";
import TicketsArchive from "$/public/icons/tickets_archive.svg";
import PlusIcon from "$/public/icons/plus.svg";
import SearchIcon from "$/public/icons/search.svg";
import AttachmentIcon from "$/public/icons/attachment.svg";
import MicIcon from "$/public/icons/microphone.svg";
import SendIcon from "$/public/icons/send.svg";
import useOutside from "@/hooks/useOutside";
import ArchivedTicketCard from "@/components/pages/Dashboard/Tickets/ArchivedTicketCard";
import { authServiceHandler } from "@/api/auth.service";
import Pagination from "@/components/common/Pagination";
import Link from "next/link";
import { useZustandStore } from "@/store";
import SmallLogo from "$/public/icons/smallLogo.svg";
import UserAvatar from "$/public/icons/userAvatar.svg";
import Loading from "@/components/common/Loading";

const Ticket = ({ params }: { params: { id: String } }) => {
  const [ticket, setTicket] = useState<any>();
  const [ticketLoading, setTicketLoading] = useState(false);
  const [tickets, setTickets] = useState<any>();
  const [ticketsLoading, setTicketsLoading] = useState(false);
  const user = useZustandStore((state) => state.user);

  const [
    IsMessagePriorityDropDownOpened,
    setIsMessagePriorityDropDownIsOpened,
  ] = useState(false);
  const [selectedMessagePriority, setSelectedMessagePriority] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState("");
  const [closeTicketLoading, setCloseTicketLoading] = useState(false);
  const [replyLoading, setReplyLoading] = useState(false);
  const messagePriorityDropDownRef = useRef(null);
  const openTicketsLength = tickets?.data?.filter(
    (item: any) => item.status
  ).length;

  const closedTicketsLength = tickets?.data?.filter(
    (item: any) => !item.status
  ).length;

  useOutside(messagePriorityDropDownRef, setIsMessagePriorityDropDownIsOpened);

  const handleGetTicket = async () => {
    try {
      setTicketLoading(true);
      const res = await authServiceHandler.getTicket(params.id);
      setTicket(res.data.data);
    } catch (error) {
    } finally {
      setTicketLoading(false);
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

  const handleReply = async (e: any) => {
    e.preventDefault();
    try {
      setReplyLoading(true);
      await authServiceHandler.replyTicket({
        ticket_id: params?.id,
        reply_text: value,
      });
      setValue("");
      handleGetTicket();
    } catch (error) {
    } finally {
      setReplyLoading(false);
    }
  };

  const handleCloseTicket = async () => {
    try {
      setCloseTicketLoading(true);
      await authServiceHandler.closeTicket(params.id);
      handleGetTicket();
      handleGetTickets();
    } catch (error) {
    } finally {
      setCloseTicketLoading(false);
    }
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
              {ticketsLoading ? (
                <div className="w-full h-full flex justify-center items-center my-5">
                  <Loading size={80} />
                </div>
              ) : tickets?.data?.length ? (
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
                          href={`/admin/tickets/${item?.id}`}
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
              <Grid
                item
                xs={12}
                className="rounded-[12px] bg-card shadow-3xl p-[30px]"
              >
                <div className="h-full flex flex-col gap-1 max-sm:h-auto">
                  <div className="flex items-center gap-1 text-primary text-lg font-bold pl-3 max-sm:justify-center max-sm:flex-col">
                    <h4>Ticket Message</h4>
                    {ticketLoading ? (
                      <Loading size={20} />
                    ) : (
                      <h5 className="text-text text-sm">({ticket?.title})</h5>
                    )}
                  </div>
                  <div className="flex justify-between gap-8 h-full max-sm:flex-col">
                    <div className="flex flex-col gap-3 h-full w-full max-w-[80%] max-sm:max-w-none justify-between">
                      <div className="w-full  max-h-full rounded-[12px] bg-card_shade py-5 px-7 max-sm:h-[425px] flex flex-col gap-5 h-[550px] overflow-y-auto">
                        {ticketLoading ? (
                          <div className="w-full h-full flex justify-center items-center my-5">
                            <Loading size={80} />
                          </div>
                        ) : (
                          ticket?.messages?.map((item: any, index: number) => (
                            <Fragment key={item?.date}>
                              <div className="flex justify-center">
                                {new Date(item?.date).getDay() !==
                                  new Date(
                                    ticket?.messages[index - 1]?.date
                                  ).getDay() && (
                                  <div className="bg-[#F0F0F0] py-0.5 px-2.5 text-xs rounded-xl">
                                    {new Date(item?.date).toLocaleDateString()}
                                  </div>
                                )}
                              </div>
                              <div
                                className={`${
                                  item?.user_id === user.id
                                    ? "text-black"
                                    : "text-grayText"
                                } py-4 px-7 bg-white rounded-xl`}
                                dir={item?.user_id === user.id ? "rtl" : "ltr"}
                              >
                                <div>
                                  <div className="flex gap-5 items-center">
                                    {item?.user_type === "USER" ? (
                                      <UserAvatar />
                                    ) : (
                                      <SmallLogo />
                                    )}
                                    <div>
                                      <p className="text-sm font-bold">
                                        {item?.user}
                                      </p>
                                      <p className="text-sm text-grayDark">
                                        {new Date(
                                          item?.date
                                        ).toLocaleTimeString()}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="text-sm font-bold px-1">
                                  {item?.text}
                                </div>
                              </div>
                            </Fragment>
                          ))
                        )}
                      </div>

                      <form className="w-full flex items-center gap-4 justify-between">
                        <input
                          type="text"
                          value={value}
                          onChange={(e) => setValue(e.target.value)}
                          placeholder="Write a Message..."
                          className="w-full max-w-[70%] h-9 rounded-[12px] bg-grayLight px-5 outline-none text-xs text-grayText overflow-auto"
                        />
                        <button type="button">
                          <MicIcon />
                        </button>
                        <div className="relative w-5 text-grayText h-5 flex justify-center items-center">
                          <input
                            type="file"
                            className="w-full h-full opacity-0 absolute top-0"
                          />
                          <AttachmentIcon />
                        </div>
                        <button
                          disabled={replyLoading}
                          onClick={handleReply}
                          className="w-28 h-9 flex justify-center items-center gap-2 rounded-[12px] bg-primary text-white text-xs font-bold"
                        >
                          {replyLoading ? (
                            <div>Loading...</div>
                          ) : (
                            <>
                              <span>Send</span>
                              <div className="text-white">
                                <SendIcon />
                              </div>
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                    <div className="flex flex-col justify-between w-full h-full max-h-[440px] max-w-[20%] py-1 max-sm:max-w-none">
                      <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1">
                          <h5 className="text-grayText text-sm font-bold">
                            Last Update:
                          </h5>
                          {ticketLoading ? (
                            <Loading size={20} />
                          ) : (
                            <p className="text-text text-sm font-bold">
                              {ticket?.createdAt}
                            </p>
                          )}
                        </div>
                        <div className="flex justify-between gap-1">
                          <h5 className="text-grayText text-sm font-bold pl-3 max-sm:pl-0">
                            Priority
                          </h5>
                          {ticketLoading ? (
                            <Loading size={20} />
                          ) : (
                            <div className="text-sm font-bold">
                              {ticket?.priority}
                            </div>
                          )}
                        </div>
                        <div className="flex justify-between items-center gap-1">
                          <h5 className="text-grayText text-sm font-bold pl-3 max-sm:pl-0">
                            Status:
                          </h5>
                          {ticketLoading ? (
                            <Loading size={20} />
                          ) : (
                            <div
                              className={`max-w-[70px] w-full h-7 ${
                                ticket?.status || ticket?.unread
                                  ? "bg-gold text-text"
                                  : "bg-grayText text-white"
                              } rounded-[12px] flex justify-center items-center text-xs font-bold`}
                            >
                              {ticket?.status ? "Open" : "Closed"}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h5 className="text-grayText text-sm font-bold">
                          Close the ticket?
                        </h5>
                        <button
                          disabled={closeTicketLoading}
                          onClick={handleCloseTicket}
                          type="button"
                          className="w-full h-7 rounded-[12px] flex justify-center items-center bg-card_light text-primary text-xs font-bold hover:bg-[#1093FF] hover:text-white"
                        >
                          {closeTicketLoading ? "Loading..." : "Yes, Close"}
                        </button>
                        <p className="text-xs text-grayText">
                          Closing the ticket means that you have received your
                          response from support
                        </p>
                      </div>
                    </div>
                  </div>
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
