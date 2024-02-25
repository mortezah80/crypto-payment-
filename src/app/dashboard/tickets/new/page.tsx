"use client";
import React, { useEffect, useRef, useState } from "react";
import { Grid } from "@mui/material";
import TicketsArchive from "$/public/icons/tickets_archive.svg";
import PlusIcon from "$/public/icons/plus.svg";
import SearchIcon from "$/public/icons/search.svg";
import AttachmentIcon from "$/public/icons/attachment.svg";
import TrashIcon from "$/public/icons/trash.svg";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import useOutside from "@/hooks/useOutside";
import ArchivedTicketCard from "@/components/pages/Dashboard/Tickets/ArchivedTicketCard";
import { priority } from "@/configs/priority";
import Link from "next/link";
import Pagination from "@/components/common/Pagination";
import { authServiceHandler } from "@/api/auth.service";
import { useRouter } from "next/navigation";

const Ticket = () => {
  const [tickets, setTickets] = useState<any>();

  const [currentPage, setCurrentPage] = useState(1);
  const openTicketsLength = tickets?.data?.filter(
    (item: any) => item.status
  ).length;

  const closedTicketsLength = tickets?.data?.filter(
    (item: any) => !item.status
  ).length;

  const handleGetTickets = async () => {
    const res = await authServiceHandler.getTickets({
      page: currentPage,
      limit: 5,
    });
    setTickets(res.data);
  };

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
                          <ArchivedTicketCard {...item} />
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
                <NewTicketForm handleGetTickets={handleGetTickets} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Ticket;

const NewTicketForm = ({ handleGetTickets }: any) => {
  const router = useRouter();
  const [IsPriorityDropDownOpened, setIsPriorityDropDownIsOpened] =
    useState(false);
  const [selectedPriority, setSelectedPriority] = useState("");
  const [title, setTitle] = useState("");
  const [messages, setMessages] = useState("");
  const priorityDropDownRef = useRef(null);

  useOutside(priorityDropDownRef, setIsPriorityDropDownIsOpened);

  const handleCreateTicket = async (e: any) => {
    e.preventDefault();
   const res= await authServiceHandler.createTicket({
      title,
      messages,
      priority: selectedPriority,
    });
    router.push(`/dashboard/tickets/${res?.data?.data?.id}`)
  };

  return (
    <form className="flex flex-col h-full gap-4">
      <h4 className="text-primary text-lg font-bold pl-3">New Ticket</h4>
      <div className="flex justify-between items-center gap-16 max-sm:flex-col max-sm:gap-8">
        <div className="flex flex-col gap-1 w-full max-w-[50%] pt-3 max-sm:max-w-none">
          <label
            htmlFor="title"
            className="text-grayText pl-3 text-sm font-bold"
          >
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            id="title"
            placeholder="Write a title..."
            className="w-full max-w-[400px] h-9 flex items-center rounded-[12px] bg-grayLight outline-none px-4 placeholder:text-grayText placeholder:text-sm max-sm:max-w-none"
          />
        </div>
        <div className="flex flex-col gap-1 w-full max-w-[50%] pt-3 max-sm:max-w-none">
          <label
            htmlFor="priority"
            className="text-grayText pl-3 text-sm font-bold"
          >
            Priority
          </label>
          <div className="relative w-full">
            <div
              onClick={() => setIsPriorityDropDownIsOpened(true)}
              className={`flex justify-between items-center text-sm px-4 h-9 bg-grayLight w-full cursor-pointer ${
                IsPriorityDropDownOpened ? "rounded-t-[12px]" : "rounded-[12px]"
              }`}
            >
              <span>{selectedPriority}</span>
              {IsPriorityDropDownOpened ? (
                <RiArrowUpSLine />
              ) : (
                <RiArrowDownSLine />
              )}
            </div>
            {IsPriorityDropDownOpened ? (
              <ul
                ref={priorityDropDownRef}
                className="absolute top-9 w-full h-auto max-h-[110] text-sm flex flex-col gap-1 px-4 overflow-y-auto bg-grayLight rounded-b-[12px]  first:border-t-2 first:border-borderGray"
              >
                {priority.map((item) => (
                  <li
                    key={item}
                    onClick={() => {
                      setSelectedPriority(item);
                      setIsPriorityDropDownIsOpened(false);
                    }}
                    className="hover:font-bold hover:text-text cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="message"
          className="text-grayText pl-3 text-sm font-bold"
        >
          Message
        </label>
        <textarea
          value={messages}
          onChange={(e) => setMessages(e.target.value)}
          id="message"
          cols={30}
          rows={10}
          placeholder="Write a message..."
          className="bg-grayLight rounded-[12px] outline-none p-4 placeholder:text-grayText placeholder:text-sm"
        />
      </div>
      <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-9">
        <div className="w-full flex items-center gap-3 max-w-[80%] max-sm:max-w-none">
          <div className="flex justify-center relative gap-1 px-2 items-center w-32 h-9 rounded-[12px] bg-card_light">
            <div className="text-primary">
              <AttachmentIcon />
            </div>
            <input
              type="file"
              id="upload_file"
              className="w-full h-full opacity-0 absolute top-0 z-10 bg-transparent"
            />
            <label htmlFor="upload_file" className="text-primary text-xs">
              Upload File
            </label>
          </div>
          <ul className="w-full flex flex-wrap items-center gap-1 h-5 overflow-y-auto">
            <li className="flex items-center gap-1 border-r-2 px-1 border-borderGray w-fit last:border-none">
              <span className="text-text text-xs">IMG_2086236522145.JPG</span>
              <button type="button">
                <TrashIcon />
              </button>
            </li>
          </ul>
        </div>
        <button
          onClick={handleCreateTicket}
          className="w-[120px] h-9 flex justify-center items-center rounded-[12px] bg-primary text-white text-sm font-bold max-sm:w-full"
        >
          Send
        </button>
      </div>
    </form>
  );
};
