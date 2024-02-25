'use client'
import {useState} from 'react'
import SideBarLogo from "$/public/icons/logo.svg";
import SmallSideBarLogo from "$/public/icons/minimalLogo.svg";
import SideBarMerchants from "$/public/icons/sidebar/merchants.svg";
import SideBarPersonalWallet from "$/public/icons/sidebar/wallet.svg";
import SideBarDonation from "$/public/icons/sidebar/donation.svg";
import SideBarApiSvg from "$/public/icons/sidebar/api.svg";
import SideBarPlugin from "$/public/icons/sidebar/plugin.svg";
import SideBarUserSetting from "$/public/icons/sidebar/user.svg";
import SideBarTickets from "$/public/icons/sidebar/tickets.svg";

import { FaPlus } from "react-icons/fa";
import { RiArrowDownSLine , RiArrowUpSLine, RiSignalTowerFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import index from "../../Auth/CheckMessage";
import { CiMonitor } from 'react-icons/ci';
import { MdMoreVert } from 'react-icons/md';
import { TbNotes } from 'react-icons/tb';
import { GiBasket } from 'react-icons/gi';

interface SideBarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBarApi: React.FC<SideBarProps> = ({ isOpen, setIsOpen }) => {
  const data = [
    { name: "EmanuelCoin" },
    { name: "Daily store" },
    { name: "Support Shops" },
  ];
  const [introOpen, setIntroOpen] = useState<Boolean>(true)
  const [introNum, setIntroNum] = useState<number>(0)
  const [billingOpen, setBillingOpen] = useState<Boolean>(true)
  const [billingNum, setBillingNum] = useState<number>(0)
  return (
    <>
      {isOpen ? (
        <div className=" bg-white shadow-[5px_0px_20px_0px_#0000000D] pl-6 sm:block hidden h-auto w-1/5 min-w-[220px]">
        
         
            <div className="pt-[41px]">
              <div className="flex items-start">
                    <div>
                      <SideBarPersonalWallet className="text-grayText"  />
                    </div>
                      <span className="font-bold text-sm text-grayText ml-[9px]">
                      Getting started
                      </span>
              </div>
        
              <div className="flex justify-between items-center cursor-pointer mt-[24px]" onClick={() => setIntroOpen(!introOpen)}>
                <div className="flex items-center">
                  <CiMonitor className={["text-grayText text-[20px]" , introOpen? "text-primary" : ""].join(" ")} />
                  <span className={["font-bold text-sm text-grayText ml-[9px]", introOpen? "text-primary" : ""].join(" ")}>
                    Introduction
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full flex items-center justify-center pr-[22px]" >
                  <div>

           
                  {
                    introOpen ?
                    <RiArrowDownSLine className="text-grayText text-2xl"/>
                    :
                    <RiArrowUpSLine className="text-grayText text-2xl" />
                  }
                  </div>

                </div>
              </div>
              {
                introOpen?
                <div className='flex flex-col pl-[30px] text-[12px] font-bold text-grayText space-y-[15px] pt-[15px]  w-full'>
                  
                  <span className={["cursor-pointer",introNum===0 ? "text-primary border-r-[5px] border-solid border-primary" : ""].join(" ")} onClick={() => setIntroNum(0)}>Overview</span>
                  <span className={["cursor-pointer",introNum===1 ? " text-primary border-r-[5px] border-solid border-primary" : ""].join(" ")}  onClick={() => setIntroNum(1)}>Event tester</span>
                  <span className={["cursor-pointer",introNum===2 ? " text-primary border-r-[5px] border-solid border-primary" : ""].join(" ")}  onClick={() => setIntroNum(2)}>Destination Filter</span>
                  <span className={["cursor-pointer",introNum===3 ? " text-primary border-r-[5px] border-solid border-primary" : ""].join(" ")}  onClick={() => setIntroNum(3)}>Data Flow</span>
                </div>
                :
                <></>
              }
                <div className="flex justify-between items-center cursor-pointer mt-[24px]" onClick={() => setBillingOpen(!billingOpen)}>
                <div className="flex items-center">
                  <div className={['border-[2px] border-solid w-[14px] h-[14px] rounded-[3px] flex items-center justify-center',billingOpen? "text-primary border-primary " : "border-grayText text-grayText " ].join(" ")}>
                    <MdMoreVert/>
                  </div>
                  <span className={["font-bold text-sm text-grayText ml-[9px]", billingOpen? "text-primary" : ""].join(" ")}>
                    Billing information
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full flex items-center justify-center pr-[22px]" >
                  <div>

        
                  {
                    billingOpen ?
                    <RiArrowDownSLine className="text-grayText text-2xl"/>
                    :
                    <RiArrowUpSLine className="text-grayText text-2xl" />
                  }
                  </div>

                </div>
              </div>
              {
                billingOpen?
                <div className='flex flex-col pl-[30px] text-[12px] font-bold text-grayText space-y-[15px] pt-[15px]  w-full'>
                  <div className={["cursor-pointer flex items-center",billingNum===0 ? "text-primary border-r-[5px] border-solid border-primary" : ""].join(" ")} onClick={() => setBillingNum(0)}>
                    <div className={['px-[7px] py-[2px]  rounded-[8px] mr-[3px] text-[10px]',billingNum===0? "bg-primary text-card": "text-text bg-borderGray" ].join(" ")}>
                      <span>DELETE</span>
                    </div>
                    <span >Fetch infromat...</span>
                
                  </div>

                  <div className={["cursor-pointer flex items-center",billingNum===1 ? "text-primary border-r-[5px] border-solid border-primary" : ""].join(" ")} onClick={() => setBillingNum(1)}>
                    <div className={['px-[7px] py-[2px]  rounded-[8px] mr-[3px] text-[10px]',billingNum===1? "bg-primary text-card": "text-text bg-borderGray" ].join(" ")}>
                      <span>Get</span>
                    </div>
                    <span >Fetch invoice</span>
                
                  </div>
                  <div className={["cursor-pointer flex items-center",billingNum===2 ? "text-primary border-r-[5px] border-solid border-primary" : ""].join(" ")} onClick={() => setBillingNum(2)}>
                    <div className={['px-[7px] py-[2px]  rounded-[8px] mr-[3px] text-[10px]',billingNum===2? "bg-primary text-card": "text-text bg-borderGray" ].join(" ")}>
                      <span>Get</span>
                    </div>
                    <span >Fetch Cover</span>
                
                  </div>
                  
                </div>
                :
                <></>
              }
              <div className='flex flex-col items-start pr-[20px] gap-y-[24px] mt-[24px]'>

    

              <div className="flex items-start ">
                    <TbNotes className="text-grayText text-[20px]"  />
                    <span className="font-bold text-sm text-grayText ml-[9px]">
                      Create an invoice
                    </span>
              </div>
              <div className="flex items-start">
                  <div className='text-[20px]'>
                    <RiSignalTowerFill className="text-grayText"  />
                  </div>
    
                  <span className="font-bold text-sm text-grayText ml-[9px]">
                  Manage invoice updates and cash-in
                  </span>
              </div>
              <div className="flex items-start ">
                  <div className='text-[20px]'>
                    <CiMonitor className="text-grayText"  />
                  </div>
                    <span className="font-bold text-sm text-grayText ml-[9px]">
                    Withdrawal / Mass withdrawal
                    </span>
              </div>
              <div className="flex items-start">
                  <div>
                    <GiBasket className="text-grayText text-[20px]"  />
                  </div>
                    <span className="font-bold text-sm text-grayText ml-[9px]">
                    Transactions
                    </span>
              </div>
              <div className="flex items-center">
                  <div className='  ml-[3px]  border-[2px] border-solid text-[11px] rounded-[3px] flex items-center justify-center border-grayText text-grayText'>
                    <MdMoreVert/>
                  </div>
                    <span className="font-bold text-sm text-grayText ml-[9px]">
                    Transaction details
                    </span>
              </div>
              <div className="flex items-start">
                  <div className='text-[20px]'>
                    <TbNotes className="text-grayText text-[20px]"  />
                  </div>
                    <span className="font-bold text-sm text-grayText ml-[9px]">
                    Balance
                    </span>
              </div>
              <div className="flex items-start">
                  <div>
                    <GiBasket className="text-grayText text-[20px]"  />
                  </div>
                    <span className="font-bold text-sm text-grayText ml-[9px]">
                    Supported cryptocurrencies
                    </span>
              </div>
              <div className="flex items-center">
                  <div className=' ml-[3px] border-[2px] border-solid text-[11px] rounded-[3px] flex items-center justify-center border-grayText text-grayText'>
                    <MdMoreVert/>
                  </div>
                    <span className="font-bold text-sm text-grayText ml-[9px]">
                    Supported fiat currencies
                    </span>
              </div>
              <div className="flex items-start">
                  <div>
                    <TbNotes className="text-grayText text-[20px]"  />
                  </div>
                    <span className="font-bold text-sm text-grayText ml-[9px] text-[14px]">
                    HTTP response status codes
                    </span>
              </div>


              </div>
          </div>
              
              
        </div>
      ) : (
        <div className="w-24 bg-white shadow-[5px_0px_20px_0px_#0000000D] px-6 pt-8 sm:block hidden">
          <div className="flex">
            <SmallSideBarLogo />
          </div>
          <div className="w-full pt-11">
            <div className="flex justify-center">
              <SideBarMerchants />
            </div>
            <div className="bg-grayLight max-w-[270px] rounded-xl px-4 pt-4 mt-4">
              {data.map((item,index) => (
                <div key={index} className="flex justify-center pb-4 text-grayText cursor-pointer text-sm">
                  <GoDotFill />
                </div>
              ))}
            </div>

            <div className="flex justify-center pt-10">
              <SideBarPersonalWallet />
            </div>

            <div className="flex justify-center pt-10">
              <SideBarDonation />
            </div>

            <div className="flex justify-center pt-10">
              <SideBarApiSvg />
            </div>

            <div className="flex justify-center pt-10">
              <SideBarPlugin />
            </div>

            <div className="flex justify-center pt-10">
              <SideBarUserSetting />
            </div>

            <div className="flex justify-center pt-10">
              <SideBarTickets className="w-7" />
            </div>
          </div>
        </div>
      )}
      <div className="sm:hidden block"></div>
    </>
  );
};

export default SideBarApi;
