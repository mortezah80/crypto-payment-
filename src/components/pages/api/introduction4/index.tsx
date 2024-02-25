import React from 'react';
import { CiMonitor } from 'react-icons/ci';
import { GoAlertFill } from 'react-icons/go';
import Card from './card';

const Introduction4 = () => {
    return (
        <div className='pb-[50px] flex flex-col items-start px-[15px] sm:pl-[43px] sm:pr-[50px] pt-[37px] text-[14px] max-sm:text-[12px] font-bold text-grayText sm:w-full'>
            <div className='flex items-center'>
                <div className='w-[69px] sm:w-[65px] h-[69px] sm:h-[65px] max-sm:min-w-[65px] max-sm:min-h-[65px] min-w-[69px] min-h-[69px] flex items-center justify-center text-[40px] text-primary bg-primary_light rounded-[12px]'>
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

    
            <div className='grid grid-cols-2 max-lg:grid-cols-1 w-full gap-y-[12px] gap-x-[16px] mt-[30px]'>
                <Card title="Lorem Ipsum" description='Before you start using Plisio API, you must be registered and Site settings set up.' />
                <Card title="Lorem Ipsum" description='Before you start using Plisio API, you must be registered and Site settings set up.' />
                <Card title="Lorem Ipsum" description='Before you start using Plisio API, you must be registered and Site settings set up.' />
                <Card title="Lorem Ipsum" description='Before you start using Plisio API, you must be registered and Site settings set up.' />
                <Card title="Lorem Ipsum" description='Before you start using Plisio API, you must be registered and Site settings set up.' />
                <Card title="Lorem Ipsum" description='Before you start using Plisio API, you must be registered and Site settings set up.' />
                <Card title="Lorem Ipsum" description='Before you start using Plisio API, you must be registered and Site settings set up.' />
                <Card title="Lorem Ipsum" description='Before you start using Plisio API, you must be registered and Site settings set up.' />
      
            </div>

            <span className='text-[22px] text-text mt-[28px]'>Peyload</span>
            <span>To simplify REST API requests Plisio uses HTTP GET method only and returns JSON format only.</span>

            <ul className='flex flex-col items-start mt-[30px]'>
                <li className='flex items-center'>
                    <div className='flex items-center justify-center bg-primary rounded-full w-[21px] h-[21px] text-card'><span>1</span></div>
                    <div className='ml-[10px] text-text'><span>To simplify REST API requests Line</span></div>
                </li>
                <span className='mt-[9px]'>To simplify REST API requests Plisio uses HTTP GET method only and returns JSON format only.To simplify REST API requests Plisio uses HTTP GET method only and returns JSON format only.</span>
                <li className='flex items-center mt-[20px]'>
                    <div className='flex items-center justify-center bg-primary rounded-full w-[21px] h-[21px] text-card'><span>2</span></div>
                    <div  className='ml-[10px] text-text'><span>To simplify </span></div>
                </li>
                <span className='mt-[9px]'>To simplify REST API requests Plisio uses HTTP GET method only and returns JSON format only.</span>
            </ul>


        </div>
    );
};

export default Introduction4;