import React from 'react';
import ModalInput from '../UI/modalInput';
import SelectModal from '@/components/common/selectModal';
import { BiTransferAlt } from 'react-icons/bi';

const Convert = () => {
    return (
        <div>
            <div className='text-[16px] font-bold mt-[16px]'>
                <span className='text-[16px] font-bold mt-[16px]'>From:</span>
            </div>

            <div className='mt-[3px]  w-full border-solid border-[1px] border-borderGray'>
            </div>
            <div className='flex w-full justify-between my-[11px]'>
                <div className={['w-[63%] flex flex-col items-start space-y-[4px]'].join(" ")}>
                    <span className='ml-[16px] text-grayText text-[12px] font-bold'>Amount</span>
                    <ModalInput placeHolder='0.0000000000'/>
                </div>
                <div className={['w-[34%] flex flex-col items-start space-y-[4px]'].join(" ")}>
                    <span className='ml-[16px] text-grayText text-[12px] font-bold'>Currency</span>
                    <SelectModal
                    options={[{name:"Select"}]}
                    defaultValue={0}
                    />
                </div>
            </div>
            <div className='grid grid-cols-3'>
                <div className=''></div>
                <div className='flex items-center justify-center'>
                    <div className=' text-[24px] rounded-[8px] flex items-center justify-center -rotate-90  w-[28px] h-[28px] text-primary border-solid border-primary border-[3px]'>
                        <BiTransferAlt/>
                    </div>
                </div>

                <div className='flex flex-col items-center text-[12px] font-bold'>
                    <span className='text-text'>LTC/BTC:</span>
                    <span className='text-primary'>0.0002563254</span>
                </div>
            </div>


            <span className='text-[16px] font-bold mt-[8px]'>To:</span>
            <div className='mt-[4px]  w-full border-solid border-[1px] border-borderGray'>
            </div>
            <div className='flex w-full justify-between mt-[9px]'>
                <div className={['w-[63%] flex flex-col items-start space-y-[4px]'].join(" ")}>
                    <span className='ml-[16px] text-grayText text-[12px] font-bold'>Amount</span>
                    <ModalInput placeHolder='0.0000000000'/>
                </div>
                <div className={['w-[34%] flex flex-col items-start space-y-[4px]'].join(" ")}>
                    <span className='ml-[16px] text-grayText text-[12px] font-bold'>Currency</span>
                    <SelectModal
                    options={[{name:"Select"}]}
                    defaultValue={0}
                    />
                </div>
            </div>
            <div className='w-full mt-[22px]'>
                <button
                    className={[
                        'w-full text-[14px] font-bold px-[23px] py-2 rounded-xl ',
                        'bg-primary text-card'
                    ].join(' ')}
                    >
                    Convert
                </button>

            </div>
        </div>
    );
};

export default Convert;