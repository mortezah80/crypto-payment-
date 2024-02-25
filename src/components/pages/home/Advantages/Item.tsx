import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import Price from '../../../../assets/price.png'
import Security from '../../../../assets/security.png'
import Image from 'next/image'

interface propsInt {
  type: string
  title: string
  explanation: string
}

const Item = (props: propsInt) => {
  return (
    <div className="flex flex-col items-center justify-between text-[14px]">
      <div>
        <Image
          width={500}
          alt="Line gatepay Banner"
          src={props.type === 'security' ? Security : Price}
        />
      </div>
      <div className="flex flex-col w-full mt-[35px]">
        <div className="flex flex-col items-center justify-between w-full sm:flex-row">
          <span className="text-[22px] font-[700] max-lg:text-[14px]">{props.title}</span>
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center bg-icon rounded-md w-[20px] h-[20px] text-white">
              <BiChevronRight />
            </div>
            <span className="ml-[5px] font-[700] text-icon">Learn more</span>
          </div>
        </div>
        <span className="text-center sm:text-start  max-lg:text-[12px]">{props.explanation}</span>
      </div>
    </div>
  )
}

export default Item
