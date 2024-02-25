'use client';
import {useState} from 'react';
import { CiMonitor } from 'react-icons/ci';

const Introduction2 = () => {
    const[item, setItem] = useState<number>(1)
    let api = "<action>?api_key=<SECRET_KEY>"
    let code = '{  "status": "success",  "data":   {      "currency": "BTC",      "balance": "0.03351057"    }'
    return (
        <div className='pb-[50px] flex flex-col items-start  px-[15px] sm:pl-[43px] sm:pr-[50px] pt-[37px] text-[14px] max-sm:text-[12px] font-bold text-grayText sm:w-full'>
            <div className='flex items-center'>
                <div className='w-[69px] min-w-[69px] min-h-[69px] sm:w-[65px] max-sm:min-w-[65px] max-sm:min-h-[65px]  h-[69px] sm:h-[65px] flex items-center justify-center text-[40px] text-primary bg-primary_light rounded-[12px]'>
                    <CiMonitor/>
                </div>
                <div className='flex flex-col items-start ml-[12px] justify-between'>
                    <span className='text-[32px] text-primary max-sm:text-[22px]'>Introduction</span>
                    <span className=''>To simplify REST API requests Plisio uses HTTP GET method only and returns JSON format only.</span>
                </div>
            </div>
            
            <span className='text-[22px] text-text mt-[40px]'>Peyload</span>
            <span>To simplify REST API requests Plisio uses HTTP GET method only and returns JSON format only.</span>

            <ul className="list-disc list-inside mt-[21px]">
                <li className="mb-[17px]"><span className=' text-primary'>To simplify REST API requests Line</span></li>
                <li className="mb-[17px]"><span className=' text-primary'>To simplify REST API requests Line Gatepay</span></li>
                <li className=""><span className=' text-primary'>To simplify REST API requests Line</span></li>
                <span className='text-[12px] text-grayText ml-[14px]'>HTTP GET method only and returns JSON format only.</span>
                <li className="mb-[17px] mt-[12px]"><span className=' text-primary'>To simplify REST</span></li>
                <li className=""><span className=' text-primary'>To simplify REST API requests Line Gatepay (Javascript)</span></li>
            </ul>

            <span className='text-[22px] text-text mt-[39px]'>Red Message</span>
            <span className='mt-[7px]'>Weve made an open source library and plugins available for the API.</span>
            <span className='mt-[15px]'> Before you start using Plisio API, you must be registered and Site settings set up under account/api page to get your personal SECRET_KEY. This secret key will be used with all API calls.</span>


            <div className='mt-[22px] overflow-hidden'>
                <div className='overflow-hidden'>
                    <ul className='flex items-center text-grayText w-full p-[0px] m-[0px] max-h-[400px]'>
                        <li onClick={() => setItem(1)} className={['px-[12px] pb-[8px] cursor-pointer', item==1? 'border-b-solid border-b-[4px] border-b-primary': ""] .join(" ")}>Curl</li>
                        <li onClick={() => setItem(2)}  className={['px-[12px] pb-[8px] cursor-pointer', item==2? 'border-b-solid border-b-[4px] border-b-primary': ""] .join(" ")}>Ruby</li>
                        <li onClick={() => setItem(3)}  className={['px-[12px] pb-[8px] cursor-pointer', item==3? 'border-b-solid border-b-[4px] border-b-primary': ""] .join(" ")}>Python</li>
                        <li onClick={() => setItem(4)}  className={['px-[12px] pb-[8px] cursor-pointer', item==4? 'border-b-solid border-b-[4px] border-b-primary': ""] .join(" ")}>PHP</li>
                        <li onClick={() => setItem(5)}  className={['px-[12px] pb-[8px] cursor-pointer', item==5? 'border-b-solid border-b-[4px] border-b-primary': ""] .join(" ")}>Java</li>
                        {/*<li onClick={() => setItem(6)}  className={['px-[12px] pb-[8px] cursor-pointer', item==6? 'border-b-solid border-b-[4px] border-b-primary': ""] .join(" ")}>Node</li>
                        <li onClick={() => setItem(7)}  className={['px-[12px] pb-[8px] cursor-pointer', item==7? 'border-b-solid border-b-[4px] border-b-primary': ""] .join(" ")}>Go</li> */}
                    </ul>

                </div>


                <div className='bg-grayLight opacity-[100%] py-[25px] px-[33px] rounded-[12px] mt-[22px]'>
                    <span className='text-text mt-[25px]'>Request Sample</span>

                    <div className='pt-[10px] rounded-[12px]'>

                        <span className=' text-text font-[400]'>https://plisio.net/api/v1/ <span className='font-[700] text-greenCode'>{api}<br></br> {code} </span></span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Introduction2;