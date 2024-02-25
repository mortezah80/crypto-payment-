import React from 'react';
import {FC, ReactNode} from 'react'

interface DashboardLayoutProps {
    // children: ReactNode;
    type: string,
    message:string
  }
  

const Message :FC<DashboardLayoutProps> = ({ type, message }) => {
    return (
        <div className={['flex items-center h-[40px] lg:h-[50px] rounded-[12px] w-full',type==="blue"? "bg-primary_light text-primary" : type==="green"? "bg-greenAlertBack text-greenAlert" : "bg-redAlterBack text-redAlert" ].join(" ")}>
            {/* {children} */}
            {
                type==="blue" ?
                <div className='py-[5px] px-[12px]  mx-[11px]  flex items-center justify-center bg-primary rounded-[12px]'>
                    <span className='text-card text-[12px] lg:text-[14px]'>Get</span>
                </div>
                :
                ""
            }
           
            <span className={type!=="blue"? "ml-[21px]": ""}>{message}</span>

        </div> 
    );
};

export default Message;