import React from 'react'
import { TiTick } from 'react-icons/ti'

interface propsInt {
  title: string
  type: string
}

const Item = (props: propsInt) => {
  return (
    <div className="flex items-start justify-start">
      <div
        className={[
          'text-white w-[20px] h-[20px] font-[700] text-[10px] flex items-center justify-center rounded-full mt-[3px]',
          props.type === 'boost' ? ' bg-icon' : 'bg-primary',
        ].join(' ')}
      >
        <TiTick />
      </div>
      <span className="ml-[6px] text-[14px] font-[700] max-lg:text-[12px]">{props.title}</span>
    </div>
  )
}

export default Item
