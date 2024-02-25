import React from 'react';
import {FC} from 'react'

interface ResponseShInt {
    total: string,
    title : string,
    description : string,

}

const ResponseScheme :FC<ResponseShInt> = (props) =>{
    return (
        <div className='rounded-[12px] broder-solid border-[1px] border-borderGray w-full flex items-center'>
            <div className='ml-[21px] border-solid border-[1px] border-borderGray px-[13px] py-[5px] rounded-[12px]'>
                <span className='font-[400] text-text'>{props.total}</span>
            </div>
            <div className='flex flex-col items-start ml-[44px] my-[13px]'>
                <span className='text-text'>{props.title}</span>
                <span className='pt-[4px]'>{props.description}</span>
            </div>
        </div>
    );
};

export default ResponseScheme;