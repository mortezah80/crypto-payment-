'use client';
import SelectModal from '@/components/common/selectModal';
import React from 'react';
import ModalInput from '../UI/modalInput';
import {useState} from 'react'

const Withdraw = () => {
    const [Item ,setItem] = useState(0)
    return (
        <div className='flex flex-col space-y-[27px] pt-[33px]'>
            <div className={['flex flex-col items-start space-y-[4px]'].join(" ")}>
                <span className='ml-[16px] text-grayText text-[12px] font-bold'>Currency</span>
                  <SelectModal
                        options={[{name : "BTC (BTC001)", icon : "btc"}]}
                        defaultValue={0}
                />
            </div>
            <div className='flex flex-col items-start space-y-[4px]'>
                <span className='ml-[16px] text-grayText text-[12px] font-bold'>From</span>
                <div className='flex items-center justify-center w-full bg-card_shade rounded-[12px] px-[16px] py-[8px] text-grayText'>
                    <div className='text-[14px] font-[700] break-all flex flex-col items-start'>
                        <span>25s4455624kjsd-dgf552dk</span>
                        <span>fhg365125s4455624kjsd-dgf552dk-fhg365</span>

                    </div>
                </div>
            </div>

            <div className={['flex flex-col items-start space-y-[4px]'].join(" ")}>
                <span className='ml-[16px] text-grayText text-[12px] font-bold'>Whrere to</span>
                 <ModalInput placeHolder='Enter your wallet address...'/>
            </div>
            <div className={['flex flex-col items-start space-y-[4px]'].join(" ")}>
                <span className='ml-[16px] text-grayText text-[12px] font-bold'>Amount</span>
                 <ModalInput placeHolder='0.0000000000'/>
                 <span className='ml-[16px] text-text text-[12px] font-bold'>Transfer limit: 0.0001 - 100.00 BTC</span>
            </div>
           
            <div className='w-full'>
                <span className='ml-[16px] text-grayText text-[12px] font-bold'>Transaction fee</span>

                <div className='grid grid-cols-3 w-full'>
                    <div className='flex items-center justify-start'>
                        <div className='flex items-start justify-start h-full pt-[3px] mr-[4px]'>
                            <div onClick={() => setItem(0)} className={['cursor-pointer w-[16px] h-[16px] rounded-full flex flex-col items-center justify-center border-[2px] border-solid ',Item==0 ? "border-primary" : "border-grayText"].join(" ")}>
                                <div className={['w-[8px] h-[8px] rounded-full bg-primary',Item ==0 ? "" : "hidden"].join(" ")}></div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-start text-[10px] break-all text-grayText font-[700]'>
                            <span className={["text-[14px] font-[700]" , Item==0 ? "text-primary" : "text-grayText"].join(" ")}>Economy</span>
                            <span >Fee rate: 8</span>
                            <span>sat/vbyte</span>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='flex items-start justify-start h-full pt-[3px] mr-[4px]'>
                            <div onClick={() => setItem(1)} className={['cursor-pointer w-[16px] h-[16px] rounded-full flex flex-col items-center justify-center border-[2px] border-solid ',Item==1 ? "border-primary" : "border-grayText"].join(" ")}>
                                <div className={['w-[8px] h-[8px] rounded-full bg-primary',Item ==1 ? "" : "hidden"].join(" ")}></div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-start text-[10px] break-all text-grayText font-[700]'>
                            <span className={["text-[14px] font-[700] text-grayText" ,  Item==1 ? "text-primary" : "text-grayText"].join(" ")}>Normal</span>
                            <span >Fee rate:15</span>
                            <span>sat/vbyte</span>
                        </div>
                    </div>

                    <div className='flex items-center justify-end'>
                        <div className='flex items-start justify-start h-full pt-[3px] mr-[4px]'>
                            <div onClick={() => setItem(2)} className={['cursor-pointer w-[16px] h-[16px] rounded-full flex flex-col items-center justify-center border-[2px] border-solid ',Item==2 ? "border-primary" : "border-grayText"].join(" ")}>
                                <div className={['w-[8px] h-[8px] rounded-full bg-primary',Item ==2 ? "" : "hidden"].join(" ")}></div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-start text-[10px] break-all text-grayText font-[700]'>
                            <span className={["text-[14px] font-[700] text-grayText" ,  Item==2 ? "text-primary" : "text-grayText"].join(" ")}>Priority</span>
                            <span >Fee rate: 22</span>
                            <span>sat/vbyte</span>
                        </div>
                    </div>

                </div>
                <div className='mt-[24px]  w-full border-solid border-[1px] border-borderGray'>
            </div>
            
            

            
            </div>
            <div className='self-end'>
                <button
                    className={[
                        ' text-[14px] font-bold max-lg:text-sm px-[23px] max -lg:px-8 py-2 max-md:text-[12px] max-md:p-0 max-md:h-[32px] max-md:w-[140px] rounded-xl max-lg:rounded-lg',
                        'bg-primary text-card'
                    ].join(' ')}
                    >
                    Send founds
                </button>

            </div>
           
        </div>
    );
};

export default Withdraw;