import React from 'react';
import {FC} from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { CiMonitor } from 'react-icons/ci';
import { GoAlertFill } from 'react-icons/go';

interface CardInt {
    title : string,
    description: string
}


const Card : FC<CardInt> = (props) => {
    return (
        <div className='border-solid border-borderGray border-[1px] rounded-[12px] p-[15px] flex items-center text-grayText group cursor-pointer hover:border-primary'>
            <div className='w-[50px] h-[50px] min-w-[50px] min-h-[50px] rounded-[12px] flex items-center justify-center bg-grayLight  text-[25px]'>
                <GoAlertFill/>
            </div>
            <div className='flex flex-col ml-[15px] overflow-hidden'>
                <span className='text-grayText text-[14px] group-hover:text-primary'>{props.title}</span>
                <span className='text-[10px] max-h-36 line-clamp-2'>{props.description}</span>
            </div>
            <div className='text-borderGray text-[22px] group-hover:text-primary ml-[16px]'>
                <BsFillArrowRightCircleFill/>
            </div>
        </div>
    );
};

export default Card;