import {FC} from 'react'
import { MdContentCopy } from 'react-icons/md';

interface codeContainerInt {
    description : string,
    normal : string,
    green : string
}

const CodeContainer: FC<codeContainerInt> = (props) => {
    return (
        <div className='flex flex-col'>
            <div className='w-full flex items-center justify-between pt-[19px] pb-[3px]'>
                <span className='text-grayText'>{props.description}</span>
                <div className='text-[20px] text-gold'><MdContentCopy/></div>
            </div>
            <div className='bg-card bg-opacity-[3%] px-[15px] py-[19px] rounded-[12px] text-[12px] lx:text-[14px]'>

                <span className=' text-card'>{props.normal} <span className='text-greenCode'>{props.green}</span> </span>
            </div>
        </div>
    );
};

export default CodeContainer;