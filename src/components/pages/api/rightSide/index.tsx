import React from 'react';
import Category from './category';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';

const RightSide = () => {
    return (
        <div className='w-full  gap-y-[11px] pb-[44px] bg-card rounded-[12px] px-[32px] pt-[42px] font-bold text-[14px] flex flex-col items-start text-grayText'>
            <div className='flex flex-col items-start'>
                <span className='text-text'>On the Page</span>
                <span className='mt-[9px]'>Get Started</span>
            </div>
            <span className='text-text mt-[24px]'>Related Content</span>
            <span>Introduction</span>
            <span>Setting Shop</span>

            <span>HTTP Request</span>
            <span>API Response</span>

            <span className='text-text mt-[26px]'>Related Categories</span>
            <div className='flex items-center flex-wrap gap-x-[4px] gap-y-[5px]'>
                <Category name="Introduction"/>
                <Category name="Setting"/>
                <Category name="Starting"/>
                <Category name="Red Message Request"/>
            </div>
            <div className='w-full border-t-[1px] border-solid border-borderGray my-[24px]'></div>
            <span>Is this page helpful? </span>
            <div className='flex items-center w-full'>
                <div className='flex items-center'>
                    <div>
                        <AiOutlineLike/>
                    </div>
                    <span className='ml-[3px]'>Yes</span>
                </div>
                <div className='flex items-center ml-[33px]'>
                    <div>
                        <AiOutlineDislike/>
                    </div>
                    <span className='ml-[3px]'>No</span>
                </div>
            </div>
        </div>
    );
};

export default RightSide;