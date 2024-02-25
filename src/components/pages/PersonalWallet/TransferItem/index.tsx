import React from 'react'
interface TransformItemProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  coin : string
  network : string
  amount : number
  date : Date
}
const TransformItem:React.FC<TransformItemProps> = ({Icon ,date , amount , network , coin}) => {
  return (
    <div className="w-full text-[12px] font-bold text-grayText flex items-center justify-between p-[15px] border border-[#E1E1E1] rounded-[12px] [&>div]:flex">
      <div className='space-x-2'>
        <Icon />
        <div className='flex-col flex justify-center space-y-1'>
          <h3 className='text-text text-[16px]'>{coin}</h3>
          <span>{network}</span>
        </div>
      </div>
      <div className='flex-col items-end pr-3 space-y-1'>
        <h4 className='text-icon text-[14px]'>{amount}</h4>
        <span>{date.getDay() +'/' + date.getMonth()+  '/' + date.getFullYear()}</span>
      </div>
    </div>
  );
}

export default TransformItem