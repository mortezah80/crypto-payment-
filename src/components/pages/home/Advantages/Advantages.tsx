import React from 'react'
import Item from './Item'

function Advantages() {
  return (
    <div className="grid grid-cols-1 gap-x-60 max-w-[1280px] m-auto sm:grid-cols-2  px-[15px] sm:px-[0px] gap-y-10">
      <Item
        type="price"
        title="Fair Pricing"
        explanation="No monthly, setup or hidden fees. We charge only one fee of 0.5%. Personal plans for businesses with a higher turnover rate."
      />
      <Item
        type="security"
        title="Enhanced Privacy"
        explanation="We do not collect our clients’ data. Your funds are protected with 2FA, SSL Technology and Trusted IPs."
      />
    </div>
  )
}

export default Advantages
