import React from 'react'
import BannerImage from '../../../../assets/Boost.png'
import { TiTick } from 'react-icons/ti'
import Item from '../UI/Item'
import Button from '../UI/Button'
import Image from 'next/image'

const Boost = () => {
  return (
    <div className="flex flex-col items-center justify-between w-[100%] max-w-[1280px]  mx-auto sm:flex-row sm:h-[330px]">
      <div className="flex flex-col items-center justify-between h-full sm:items-start ">
        <div className="w-[300px] flex flex-col items-center sm:items-start">
          <h3 className="text-[22px]  max-lg:text-[14px] font-bold">Boost your Business</h3>
          <span className="text-[14px]  max-lg:text-[12px]">
            Save time and money with Mass Payouts.
          </span>
          <span className="text-[14px]  max-lg:text-[12px]">No Limits. No Boundaries.</span>
        </div>
        <div className="grid grid-cols-1 gap-y-6 gap-x-[30px] font-[700] mt-[40px] sm:grid-cols-2 sm:mt-[20px] sm:gap-y-[23px]">
          <Item title="Easily enter an international market" type="boost" />
          <Item title="Import your data from file (.xls)" type="boost" />
          <div className="flex flex-col items-start justify-end">
            <Item title="Pool together up to 1000 transactions" type="boost" />
            <span className="pl-[25px] text-icon text-[14px]">
              saving 80% on fees
            </span>
          </div>

          <Item title="No limits for payout amount" type="boost" />
        </div>
        <div className="mt-[30px] mb-[40px] sm:mt-[0px] sm:mb-[0px]">
          <Button lable="Boost my Business" />
        </div>
      </div>
      <div>
        <Image width={500} alt="Line gatepay Banner" src={BannerImage} />
      </div>
    </div>
  )
}

export default Boost
