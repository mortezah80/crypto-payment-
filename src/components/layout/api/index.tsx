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


interface DashboardLayoutProps {
  children: ReactNode;
  code?: boolean
}

const ApiLayout: FC<DashboardLayoutProps> = ({ children , code}) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);


  return (
    <Container maxWidth="xl">
    <div className="flex w-full flex-col">
    <header className="space-y-14 mt-4 w-full">
        <Container maxWidth="xl">
          <Navbar />
        </Container>
      </header>

      <div className="flex w-full mt-[30px]">
        <SideBarApi isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen} />
        <div className="w-full relative flex  items-start">
          
            <div className=" bg-background w-full  xl:w-[76%] flex flex-col px-[10px] items-center">
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
              <div className="rounded-[12px] bg-card ">
                {children}
              </div>

              {
                code ?
                <div className="relative w-full max-xl:mt-[-20px] ">
                  <div className=" flex flex-col items-center xl:hidden  w-[150%] max-xl:w-[100%] right-0 ">
                    <CodeDark/>
                  </div>
                </div>

                :
                <div className="xl:hidden h-[100%] mt-[13px] w-full">
                  <RightSide/>
                </div>

              }



            </div>
            <div className="w-[20%] ml-auto flex-col h-[100%] hidden xl:flex relative ">

              <div className="w-full mb-[9px]">
                  <div className="bg-card rounded-[12px] px-[12px] h-[36px] flex items-center justify-between">
                      <input
                      type="text"
                      className="text-[12px] w-full bg-transparent focus:outline-none focus:border-none"
                      placeholder="Search..."
                      />
                      <div><LuSearch/></div>
                  </div>  
              </div>

              {
                code ?
                <div className="w-full relative">
                  <div className="h-[100%]  w-[150%] max-xl:w-[100%] absolute right-0 top-0">
                    <CodeDark/>
                  </div>
                </div>


                :
                <div className="h-[100%] w-full">
                  <RightSide/>
                </div>

              }

            </div>
        </div>
      </div>


      <div className="w-full mt-[70px]">
        <Footer/>
        <div className=" w-full max-w-[1480px] m-auto text-gold text-[28px] flex items-center justify-end pb-[33px] mt-[-33px] pr-[10px] max-sm:justify-center max-sm:mt-[0px]">

          <FaCircleChevronUp/>
          <div className="text-[23px] ml-[139px] bg-primary text-white rounded-[12px] p-[7px] max-sm:hidden">
            <BiMessageDetail/>
          </div>
        </div>
      </div>
      <div className="w-full bg-card px-5 py-[16px]">
          <div className="max-w-[1280px] flex items-center justify-end m-auto sm:grid-cols-2  px-[15px] sm:px-[0px] gap-y-10 text-[12px]">
              <span>© 2023 Titbull, Inc. All Rights Reserved.</span>
          </div>
      </div>

    </div>
    </Container>
  );
};

export default ApiLayout;
