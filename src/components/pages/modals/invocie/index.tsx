"use client";
import React from 'react';
import { AiOutlineExclamation } from 'react-icons/ai';
import { IoCopyOutline } from 'react-icons/io5';
import BarcodeImg from '../../../../assets/Barcode.png'
import Image from 'next/image'
import Button from '../../home/UI/Button';
import SelectModal from '@/components/common/selectModal';


const Invocie = () => {
    return (
        <div className='flex flex-col items-start space-y-[27px]'>

            <span className=''>Share the link to your payment</span>
            <div className='rounded-[12px] border-orange border-[1px] border-solid py-[13px] px-[16px] w-full'>
                <div className='flex items-center justify-start'>
                    <div className='w-[28px] h-[28px] bg-orange_light text-orange rounded-[12px] text-[20px]'><AiOutlineExclamation/></div>
                    <span className='text-orange text-[18px] font-[700] ml-[10px]'>Invoice expires in 60 min.</span>
                </div>
                <span className='text-[12px]'>After this period, the payment link will stop working</span>
            </div>
            <div className='flex flex-col items-start'>
                <span className='text-[22px] font-[700]'><span className='text-primary'>0.35</span> BTC</span>
                <span className='text-[14px] text-greyte font-bold'>Invoice amount</span>
            </div>
            <div className='flex flex-col items-start space-y-[9px] w-full'>
                <span className='text-[18px] font-[700]'>Payment link</span>
                <div className='flex items-center justify-center w-full bg-card_shade rounded-[12px] px-[18px] py-[16px]'>
                    <div>
                      <span className='text-[14px] font-[700] break-all'>bc1qtmft2knqc26w0gpjx84n670f9t7q3r2ctekdk7</span>

                    </div>
                   
                    <div className='rounded-[12px] w-[36px] min-w-[36px] h-[36px] bg-gold flex items-center justify-center text-[16px]'><IoCopyOutline/></div>
                </div>
            </div>
            <div className='flex items-center justify-center w-full  mb-[40px]'>
                <Image width={190} alt="Barcode" src={BarcodeImg} />
            </div>

            <div className='flex w-full justify-between'>
                <button
                className={[
                    'text-base font-centery font-[700] text-[14px] max-lg:text-sm max px-[12px] -lg:px-8 py-2 max-md:text-[12px]  max-md:p-0 max-md:h-[32px] max-md:w-[140px] rounded-xl max-lg:rounded-lg',
                    // props.primary
                    // ? 'text-primary border border-primary'
                    'bg-primary text-white',
                ].join(' ')}
                >
                Transactions
                </button>

                <button
                className={[
                    'text-base font-bold max-lg:text-sm px-[12px] max -lg:px-8 py-2 max-md:text-[12px] max-md:p-0 max-md:h-[32px] max-md:w-[140px] rounded-xl max-lg:rounded-lg',
                    // props.primary
                    'text-primary border border-primary'
                    // : 'bg-primary text-white',
                ].join(' ')}
                >
                Create New Invoice
                </button>
            </div>

        </div>
    );
};

export default Invocie;