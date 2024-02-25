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
        <div className='border-solid border-borderGray border-[1px] rounded-[12px] p-[25px] flex items-center text-grayText group cursor-pointer hover:border-primary'>
            <div className='min-w-[67px] w-[67px] min-h-[67px] h-[67px] rounded-[12px] flex items-center justify-center bg-grayLight  text-[30px] group-hover:text-primary group-hover:bg-primary_light'>
                <GoAlertFill/>
            </div>
            <div className='flex flex-col ml-[15px] h-full'>
                <span className='text-text text-[14px] group-hover:text-primary'>{props.title}</span>
                <span className='text-[12px] text-text font-light'>{props.description}</span>
            </div>
        </div>
    );
};

export default Card;