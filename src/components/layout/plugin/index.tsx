"use client";
import { FC, ReactNode, useState } from "react";
import RightSide from "../../pages/api/rightSide";
import {LuSearch} from 'react-icons/lu'
import Footer from "../../pages/home/Footer/Footer";
import Navbar from "../../pages/home/Header/Navbar";
import CodeDark from "../../pages/api/introduction/codeDark";
import SideBarApi from "@/components/pages/api/sidebar";
import SelectModal from "@/components/common/selectModal";
import { FaCircleChevronUp } from "react-icons/fa6";
import { BiMessageDetail } from "react-icons/bi";
import Container from '@mui/material/Container';
import SideBar from "./sideBar";


interface DashboardLayoutProps {
  children: ReactNode;
  code?: boolean
}

const PluginLayout: FC<DashboardLayoutProps> = ({ children , code}) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);


  return (
    <Container maxWidth="xl">
    <div className="flex w-full max-w-[1780px] flex-col">
      <div className="flex w-full ">
        <SideBar isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen} />
        <div className=" w-5/6 relative flex  items-start">
          
            <div className=" bg-background w-full  xl:w-full flex flex-col  items-center relative">
              <div className="w-full mb-[7px] xl:hidden">
                <SelectModal
                options={[{name:"API Menu List"}]}
                defaultValue={0}
                />       
              </div>

              <div className="w-full mb-[9px] xl:hidden">
                  <div className="bg-grayLight rounded-[12px] px-[12px] h-[36px] flex items-center justify-between">
                      <input
                      type="text"
                      className="text-[12px] w-full bg-transparent focus:outline-none focus:border-none"
                      placeholder="Search..."
                      />
                      <div><LuSearch/></div>
                  </div>  
              </div>
              <div className="rounded-[12px] bg-card w-full">
                {children}
              </div>



            </div>
            
        </div>
      </div>


    </div>
    </Container>
  );
};

export default PluginLayout;
