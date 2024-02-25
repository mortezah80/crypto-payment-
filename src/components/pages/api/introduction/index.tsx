import React from 'react';

const Introduction = () => {
    return (
        <div className=' pb-[50px] flex flex-col items-start px-[15px] sm:pl-[43px] xl:pr-[120px] pt-[37px] text-[14px] max-xl:text-[12px] font-bold text-grayText sm:w-full'>
             <div className='flex flex-col items-start '>
                <span className='text-[32px] text-primary max-xl:text-[22px]'>Introduction</span>
                <span className='mt-[2px]'>To simplify REST API requests Plisio uses HTTP GET method only and returns JSON format only.</span>
                <span className='text-[22px] text-text mt-[42px] max-xl:text-[16px]'>HTTP Requests</span>
                <span className=' mt-[7px]'>Weve made an open source library and plugins available for the API.</span>
                <span className='mt-[20px]'> Before you start using Plisio API, you must be registered and Site settings set up under account/api page to get your personal SECRET_KEY. This secret key will be used with all API calls.</span>
            </div>
            <div className='bg-primary_light flex items-center h-[40px] lg:h-[50px] rounded-[12px] w-full mt-[15px] mb-[25px]'>
                <div className='py-[5px] px-[12px]  mx-[11px]  flex items-center justify-center bg-primary rounded-[8px]'>
                    <span className='text-card text-[12px] lg:text-[14px] max-sm:text-[11px]'>Get</span>
                </div>
                <span className='text-primary max-sm:text-[11px]'>https://plisio.net/api/v1/api/v1/api/v1/api/v1</span>
            </div> 
            <span className='text-[22px] text-text font-bold mt-[25px] max-xl:text-[16px]'>
                API Response
            </span>
            <span className='mt-[6px]'>
            Plisio API calls return HTTP status codes. Some API calls also return JSON response bodies that include information about the resource including one or more contextual HATEOAS links. Use these links to request more information about and construct an API flow that is relative to a specific request. Each REST API request returns an HTTP status code and status field in response JSON body that can be success or error. Also returned data included into data field.
            </span>
            <span className='mt-[28px] text-[14px] font-bold text-text max-xl:text-[12px]'>
            Optionally, you can include query parameters on GET calls to filter, limit the size of, and sort the data in the responses.
            </span>
            <div className='flex flex-col w-full mt-[36px]'>
                <div className='grid grid-cols-4 w-full text-text'>
                    <span className=''>Parameter</span>
                    <span className='col-start-2 col-end-3'>Default</span>
                    <span className=''>Description</span>
                </div>
                <div className='w-full border-[1px] border-solid border-text mt-[6px]'></div>
                <div className='flex flex-col'>
                    <div className='py-[10px] grid grid-cols-4 w-full items-center'>
                        <span className=''>Lorem Ipsum</span>
                        <span className='col-start-2 col-end-3 pl-[10px]'>100</span>
                        <span className='col-start-3 col-end-5 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
                    </div>
                    <div className='py-[10px] grid grid-cols-4 w-full border-solid border-borderGray border-t-[1px] border-b-[1px] items-center'>
                        <span className=''>Lorem Ipsum</span>
                        <span className='col-start-2 col-end-3 pl-[10px]'>100</span>
                        <span className='col-start-3 col-end-5 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
                    </div>
                    <div className=' py-[10px] grid grid-cols-4 w-full items-center'>
                        <span className=''>Lorem Ipsum</span>
                        <span className='col-start-2 col-end-3 pl-[10px]'>100</span>
                        <span className='col-start-3 col-end-5 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;