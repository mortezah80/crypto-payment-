import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import SideBarLogo from "$/public/icons/logo.svg";
import useOutside from "@/hooks/useOutside";
import { NavLink } from "@/components/common/Navlink";
import SmallSideBarLogo from "$/public/icons/minimalLogo.svg";
import SideBarMerchants from "$/public/icons/sidebar/merchants.svg";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import CloseSidebarIcon from "$/public/icons/sidebar/close_sidebar.svg";
import OpenSidebarIcon from "$/public/icons/sidebar/open_sidebar.svg";
import HamburgerIcon from "$/public/icons/sidebar/hamburger.svg";
import CloseIcon from "$/public/icons/sidebar/close.svg";
import DeleteIcon from "$/public/icons/delete.svg";
import { BiSolidChevronDown } from "react-icons/bi";
import { SIDE_BAR_LINKS } from "@/configs/routes";
import LinkCard from "./LinkCard";
import { usePathname } from "next/navigation";
import ChatIcon from "$/public/icons/chat.svg";
import { authServiceHandler } from "@/api/auth.service";
import ModalCreateMerchant from "@/components/pages/Dashboard/merchant/modalCreateMerchant";
import eventEmitter from "@/tools/event";

const SideBar = () => {
  const pathName = usePathname();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isSidebarFixedOpen, setIsSidebarFixedOpen] = useState(false);
  const [isPersonalWalletSelectOpen, setIsPersonalWalletSelectOpen] =
    useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mobileSidebarRef = useRef(null);

  useOutside(mobileSidebarRef, setIsMobileSidebarOpen);

  const [merchants, setMerchants] = useState<any>();
  const handleGetMerchants = useCallback(async () => {
    const res = await authServiceHandler.getMerchants({});
    setMerchants(res.data);
  }, []);

  const handleDeleteMerchant = async (merchantId: string) => {
    const res = await authServiceHandler.deleteMerchant(merchantId);
    eventEmitter.emit("successResponseMerchant");
  };

  eventEmitter.on("successResponseMerchant", function () {
    handleGetMerchants();
  });

  useEffect(() => {
    handleGetMerchants();
  }, [handleGetMerchants]);

  const data = [
    { name: "EmanuelCoin", id: "11111111111111" },
    { name: "Daily store", id: "222222222222222" },
    { name: "Support Shops", id: "3333333333333333" },
  ];

  const PersonalWalletList = [
    { name: "List of wallet", url: "/dashboard/wallet" },
    { name: "Purchase", url: "" },
    { name: "Conversation", url: "" },
    { name: "Transactions", url: "/dashboard/wallet/transaction" },
  ];

  return (
    <>
      <div
        data-active={isSideBarOpen}
        onMouseEnter={() => setIsSideBarOpen(true)}
        onMouseLeave={() => !isSidebarFixedOpen && setIsSideBarOpen(false)}
        className="w-full min-w-[75px] max-w-[75px] max-lg:hidden bg-white group shadow-[5px_0px_20px_0px_#0000000D] px-4 py-8 z-10 flex flex-col justify-start data-active:min-w-[320px] data-active:max-w-xs h-[inherit] overflow-x-clip transition-all duration-700 coinScroll"
      >
        <div className="sticky top-8">
          <div className="flex justify-start items-center w-full group-data-active:justify-between">
            {isSideBarOpen ? (
              <Link href={"/dashboard"}>
                <SideBarLogo />
              </Link>
            ) : (
              <SmallSideBarLogo />
            )}
            <div
              className="w-10 h-10 hidden justify-center items-center rounded-xl bg-[#f2f2f2] cursor-pointer group-data-active:flex"
              onClick={() => setIsSidebarFixedOpen(!isSidebarFixedOpen)}
            >
              {isSidebarFixedOpen ? <CloseSidebarIcon /> : <OpenSidebarIcon />}
            </div>
          </div>
          <div className="w-full pt-11 ">
            <div
              className={`flex p-3 rounded-xl justify-between items-center cursor-pointer duration-500 
              ${
                pathName.includes("merchant")
                  ? " bg-blue-400 text-white"
                  : "text-grayText"
              }
              `}
            >
              <div className="flex items-center gap-4">
                <SideBarMerchants />
                <span className="font-bold text-sm hidden group-data-active:block">
                  Merchants
                </span>
              </div>
              <div
                onClick={() => setIsModalOpen(true)}
                className={`w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-data-active:opacity-100 duration-300 ${
                  pathName.includes("merchant") ? "bg-white" : "bg-grayText"
                }`}
              >
                <FaPlus
                  className={
                    pathName.includes("merchant")
                      ? " text-blue-400"
                      : " text-white"
                  }
                />
              </div>
            </div>

            <div className={`justify-center bg-grayLight rounded-xl my-1`}>
              <ul className={`flex flex-col gap-4 w-full h-full overflow-y-auto overflow-x-clip coinScroll ${merchants?.data.length !== 0 && "p-[18px]" }`}>
                {merchants?.data?.map((item: any, index: number) => (
                  <li key={index}>
                    <LinkCard item={item} handelDelete={handleDeleteMerchant} />
                  </li>
                ))}
              </ul>
            </div>
            <ul className="flex flex-col gap-2">
              {SIDE_BAR_LINKS.map((i) => (
                <li key={i.route}>
                  <NavLink
                    exact={!i.hasChild}
                    href={i.route}
                    childrenRenderer={(isActive) => (
                      <>
                        <div
                          className={`flex p-3 rounded-xl justify-between items-center cursor-pointer duration-500 ${
                            isActive
                              ? " bg-blue-400 text-white"
                              : "text-grayText"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            {i.icon}
                            <span
                              className={`font-bold text-sm opacity-0 group-data-active:opacity-100 duration-200 min-w-[100px] whitespace-nowrap`}
                            >
                              {i.title}
                            </span>
                          </div>
                          <div
                            onClick={() =>
                              setIsPersonalWalletSelectOpen(
                                !isPersonalWalletSelectOpen,
                              )
                            }
                            className="w-6 h-6 rounded-full flex items-center justify-center"
                          >
                            {i.hasChild ? (
                              <RiArrowDownSLine className="text-2xl opacity-0 group-data-active:opacity-100" />
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        {isPersonalWalletSelectOpen &&
                        i.title === "Personal wallet" ? (
                          <ul className="flex-col gap-2 justify-center items-start w-4/6 ml-8 mt-3 text-xs font-bold text-grayText hidden group-data-active:flex">
                            {PersonalWalletList.map((item, index) => (
                              <Link
                                href={item.url}
                                key={index}
                                className={`${
                                  item.url === pathName
                                    ? "text-text"
                                    : "text-grayText"
                                } hover:text-text cursor-pointer`}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </ul>
                        ) : (
                          ""
                        )}
                      </>
                    )}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="lg:hidden w-full h-16 flex justify-between items-center px-6 coinScroll">
        <div
          onClick={() => setIsMobileSidebarOpen(true)}
          className="w-10 h-10 flex justify-center items-center rounded-[12px] bg-card_light cursor-pointer"
        >
          <HamburgerIcon />
        </div>
        <div className="flex">
          <SideBarLogo />
        </div>
      </div>

      <div
        ref={mobileSidebarRef}
        data-active={isMobileSidebarOpen}
        className="w-full max-w-xs -translate-x-full data-active:translate-x-0 lg:hidden bg-white shadow-[5px_0px_20px_0px_#0000000D] px-6 py-7 fixed top-0 z-20 h-full overflow-y-auto overflow-x-clip transition-all duration-300 ease-in-out coinScroll"
      >
        <div className="flex justify-between items-center">
          <SideBarLogo />
          <div
            onClick={() => setIsMobileSidebarOpen(false)}
            className="flex justify-center items-center cursor-pointer"
          >
            <CloseIcon />
          </div>
        </div>
        <div className="w-full pt-11">
          <div className="flex items-center justify-between pb-8">
            <div className="w-[40px] h-[40px] bg-card_light flex items-center justify-center  rounded-[12px] mr-[6px] text-primary text-[23px]">
              <IoPersonOutline />
            </div>
            <div className="flex flex-col items-start justify-between">
              <span className="font-[700] text-[14px]">Emanuel Stallone</span>
              <span className="text-[12px]">Emanuel.St1370@gmail.com</span>
            </div>
            <div className="ml-[30px] cursor-pointer">
              <BiSolidChevronDown />
            </div>
          </div>

          <div
            className={`flex px-[2%] py-2 rounded-xl justify-between items-center cursor-pointer duration-500 
           ${pathName.includes("merchant") ? " text-blue-400" : "text-grayText"}
              `}
          >
            <div className="flex items-center gap-4">
              <SideBarMerchants />
              <span className="font-bold text-sm">Merchants</span>
            </div>
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center
                  ${
                    pathName.includes("merchant")
                      ? "bg-blue-400"
                      : "bg-grayText"
                  }
                  `}
            >
              <FaPlus className="text-white" />
            </div>
          </div>

          <div className="bg-grayLight flex flex-col justify-start gap-3 rounded-xl p-3 my-4 overflow-y-auto overflow-x-clip coinScroll">
            <ul className="flex flex-col gap-4 w-full h-full overflow-y-auto overflow-x-clip coinScroll p-[18px]">
              {data.map((item, index) => (
                <li key={index}>
                  <LinkCard item={item} compact />
                </li>
              ))}
            </ul>
          </div>
          <ul className="flex flex-col gap-4">
            {SIDE_BAR_LINKS.map((i) => (
              <li key={i.route}>
                <NavLink
                  exact
                  href={i.route}
                  childrenRenderer={(isActive) => (
                    <>
                      <div
                        className={`flex px-[2%] py-2 rounded-xl justify-between items-center cursor-pointer duration-500  
                      ${isActive ? " text-blue-400" : "text-grayText"}
                      `}
                      >
                        <div className="flex items-center gap-4">
                          {i.icon}
                          <span className={`font-bold text-sm`}>{i.title}</span>
                        </div>
                        <div
                          onClick={() =>
                            setIsPersonalWalletSelectOpen(
                              !isPersonalWalletSelectOpen,
                            )
                          }
                          className="w-6 h-6 rounded-full flex items-center justify-center"
                        >
                          {i.hasChild ? (
                            <RiArrowDownSLine className=" text-2xl" />
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      {isPersonalWalletSelectOpen &&
                      i.title === "Personal wallet" ? (
                        <ul className="flex flex-col gap-2 justify-center items-start w-4/6 ml-8 mt-3 text-xs font-bold text-grayText">
                          {PersonalWalletList.map((item, index) => (
                            <Link
                              href={item.url}
                              key={index}
                              className={`${
                                item.url === pathName
                                  ? "text-text"
                                  : "text-grayText"
                              } hover:text-text cursor-pointer`}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </ul>
                      ) : (
                        ""
                      )}
                    </>
                  )}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ModalCreateMerchant
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <button className="fixed bottom-10 right-5 z-10">
        <ChatIcon />
      </button>
    </>
  );
};

export default SideBar;
