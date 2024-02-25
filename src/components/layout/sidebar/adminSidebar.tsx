import SideBarLogo from "$/public/icons/logo.svg";
import SmallSideBarLogo from "$/public/icons/minimalLogo.svg";

import { RiArrowDownSLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { NavLink } from "@/components/common/Navlink";
import CloseSidebarIcon from "$/public/icons/sidebar/close_sidebar.svg";
import OpenSidebarIcon from "$/public/icons/sidebar/open_sidebar.svg";
import { useRef, useState } from "react";
import HamburgerIcon from "$/public/icons/sidebar/hamburger.svg";
import useOutside from "@/hooks/useOutside";
import CloseIcon from "$/public/icons/sidebar/close.svg";
import { BiSolidChevronDown } from "react-icons/bi";
import { ADMIN_SIDE_BAR_LINKS } from "@/configs/routes";

const SideBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isSidebarFixedOpen, setIsSidebarFixedOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const mobileSidebarRef = useRef(null);

  useOutside(mobileSidebarRef, setIsMobileSidebarOpen);

  return (
    <>
      <div
        data-active={isSideBarOpen}
        onMouseEnter={() => setIsSideBarOpen(true)}
        onMouseLeave={() => !isSidebarFixedOpen && setIsSideBarOpen(false)}
        className="w-full min-w-[75px] max-w-[75px] max-lg:hidden bg-white group shadow-[5px_0px_20px_0px_#0000000D] px-4 py-8 pr-0 z-10 flex flex-col data-active:min-w-[320px] data-active:max-w-xs h-[inherit] overflow-x-clip transition-all duration-700 coinScroll sticky top-0"
      >
        <div className="sticky top-8">
          <div className="pr-4 flex justify-start items-center w-full group-data-active:justify-between">
            {isSideBarOpen ? <SideBarLogo /> : <SmallSideBarLogo />}
            <div
              className="w-10 h-10 hidden justify-center items-center rounded-xl bg-[#f2f2f2] cursor-pointer group-data-active:flex"
              onClick={() => setIsSidebarFixedOpen(!isSidebarFixedOpen)}
            >
              {isSidebarFixedOpen ? <CloseSidebarIcon /> : <OpenSidebarIcon />}
            </div>
          </div>
          <div className="w-full pt-11 ">
            <ul className="flex flex-col gap-6">
              {ADMIN_SIDE_BAR_LINKS.map((i) => (
                <li key={i.route}>
                  <NavLink
                    exact
                    href={i.route}
                    childrenRenderer={(isActive) => (
                      <div
                        className={`flex p-3  py-1 justify-between items-center cursor-pointer duration-300 ${
                          isActive
                            ? "text-primary border-r-[6px] border-primary"
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
                        {i.hasChild ? (
                          <div className="w-6 h-6 rounded-full flex items-center justify-center">
                            <RiArrowDownSLine className="text-2xl opacity-0 group-data-active:opacity-100" />
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
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
        className="w-full max-w-xs -translate-x-full data-active:translate-x-0 bg-white shadow-[5px_0px_20px_0px_#0000000D] z-40 px-6 py-7 fixed top-0 h-full overflow-y-auto overflow-x-clip transition-all duration-300 ease-in-out coinScroll"
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

          <ul className="flex flex-col gap-4">
            {ADMIN_SIDE_BAR_LINKS.map((i) => (
              <li key={i.route}>
                <NavLink
                  exact
                  href={i.route}
                  childrenRenderer={(isActive) => (
                    <>
                      <div
                        className={`flex px-[2%] py-2 rounded-xl justify-between items-center cursor-pointer  duration-500 
                      ${isActive ? " text-blue-400" : "text-grayText"}
                      `}
                      >
                        <div className="flex items-center gap-4">
                          {i.icon}
                          <span className={`font-bold text-sm`}>{i.title}</span>
                        </div>
                        <div
                          onClick={() => {}}
                          className="w-6 h-6 rounded-full flex items-center justify-center"
                        >
                          {i.hasChild ? (
                            <RiArrowDownSLine className=" text-2xl" />
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </>
                  )}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
