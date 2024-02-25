import React from 'react'
import Item from './Item'
import { PiBagFill } from 'react-icons/pi'

const Develop = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center text-[40px] mr-[10px] text-primary sm:text-[60px]">
          <PiBagFill />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-[14px] font-[700] sm:text-[22px]">
            Let Your Business Develop with Us
          </span>
          <span className="text-[12px] sm:text-[14px]">
            We launch new features and tools every month
          </span>
        </div>
      </div>
      <div className="mt-[35px] w-full grid grid-cols-1 gap-x-8 max-w-[1280px] m-auto sm:grid-cols-3 gap-y-4 px-[20px] sm:px-[0px]">
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  )
}

export default Develop
