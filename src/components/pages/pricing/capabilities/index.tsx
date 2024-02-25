import React from 'react'
import { IconType } from 'react-icons';
interface CapabilitiesProps {
  Icon?: React.FC<React.SVGProps<SVGSVGElement>> | IconType;
  label : string
  discribtion : string
}
const CapabilitiesItem:React.FC<CapabilitiesProps> = ({Icon , label , discribtion}) => {
  return (
    <div className='flex items-center font-bold flex-col space-y-2'>
        <div className='h-[70px] w-[70px] rounded-[18px] flex items-center bg-white justify-center'>{Icon&&<Icon/>}</div>
        <h4 className='text-text text-[18px]'>{label}</h4>
        <span className='text-grayText text-center w-[267px] text-[14px]'>{discribtion}</span>
    </div>
  )
}

export default CapabilitiesItem