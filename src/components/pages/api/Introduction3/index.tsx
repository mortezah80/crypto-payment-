import React from 'react';
import { CiMonitor } from 'react-icons/ci';
import { GoAlertFill } from 'react-icons/go';
import Card from './card';

const Introduction3 = () => {
    return (
        <div className=' pb-[50px] flex flex-col items-start px-[15px] sm:pl-[43px] sm:pr-[50px] pt-[37px] text-[14px] max-sm:text-[12px] font-bold text-grayText sm:w-full'>
            <div className='flex items-center'>
                <div className='w-[69px] min-w-[69px] min-h-[69px] sm:w-[65px] max-sm:min-w-[65px] max-sm:min-h-[65px]  h-[69px] sm:h-[65px] flex items-center justify-center text-[40px] text-primary bg-primary_light rounded-[12px]'>
                    <CiMonitor/>
                </div>
                <div className='flex flex-col items-start ml-[12px] justify-between'>
                    <span className='text-[32px] text-primary max-sm:text-[22px]'>Introduction</span>
                    <span className=''>To simplify REST API requests Plisio uses HTTP GET method only and returns JSON format only.</span>
                </div>
            </div>
            
            <span className='text-[22px] text-text mt-[52px]'>Red Message</span>
            <span className='mt-[7px]'>Weve made an open source library and plugins available for the API.</span>
            <span className='mt-[15px]'> Before you start using Plisio API, you must be registered and Site settings set up under account/api page to get your personal SECRET_KEY. This secret key will be used with all API calls.</span>

            <div className='border-solid border-warning border-[1px] rounded-[12px] p-[15px] flex items-start mt-[20px]'>
                <div className='w-[55px] h-[50px] min-w-[55px] min-h-[50px]  rounded-[12px] flex items-center justify-center bg-warningBack text-warning text-[25px]'>
                    <GoAlertFill/>
                </div>
                <div className='flex flex-col ml-[15px]'>
                    <span className='text-warning'>Warning!</span>
                    <span className='text-[10px]'>Before you start using Plisio API, you must be registered and Site settings set up under account/api page to get your personal SECRET_KEY.</span>
                </div>
            </div>
            <span className='text-[22px] text-text mt-[48px]'>Peyload</span>
            <span>To simplify REST API requests Plisio uses HTTP GET method only and returns JSON format only.</span>

            <ul className='flex flex-col items-start space-y-[16px] mt-[30px]'>
                <li className='flex items-center'>
                    <div className='flex items-center justify-center bg-primary rounded-full w-[21px] h-[21px] text-card'><span>1</span></div>
                    <div className='ml-[10px]'><span>To simplify REST API requests Line</span></div>
                </li>
                <li className='flex items-center'>
                    <div className='flex items-center justify-center bg-primary rounded-full w-[21px] h-[21px] text-card'><span>2</span></div>
                    <div  className='ml-[10px]'><span>To simplify REST API requests Line Gatepay</span></div>
                </li>
                <li className='flex items-center'>
                    <div className='flex items-center justify-center bg-primary rounded-full w-[21px] h-[21px] text-card'><span>3</span></div>
                    <div  className='ml-[10px]'><span>To simplify default</span></div>
                </li>
            </ul>

            <span className='text-[22px] text-text mt-[39px]'>Red Message</span>
            <span className='mt-[7px]'>Weve made an open source library and plugins available for the API.</span>
            <span className='mt-[15px]'> Before you start using Plisio API, you must be registered and Site settings set up under account/api page to get your personal SECRET_KEY. This secret key will be used with all API calls.</span>


            <div className='grid grid-cols-1 w-full gap-y-[7px] mt-[15px]'>
                <Card title="Lorem Ipsum" description='Before you start using Plisio API, you must be registered and Site settings set up under account/api page to get your personal "SECRET_KEY".' />
                <Card title="Lorem Ipsum" description='Before you start using Plisio API, you must be registered and Site settings set up under account/api page to get your personal "SECRET_KEY".' />
                <Card title="Lorem Ipsum" description='Before you start using Plisio API, you must be registered and Site settings set up under account/api page to get your personal "SECRET_KEY".' />
          
            </div>
        </div>
    );
};

export default Introduction3;