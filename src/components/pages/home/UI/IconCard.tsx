import React from 'react'
interface IconCardProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  alt?: string
}
const IconCard: React.FC<IconCardProps> = ({ Icon }) => {
  return (
    <div className="bg-card flex items-center justify-center text-center mx-3 h-[132] max-md:w-[100px] max-md:h-[100px] rounded-xl">
      <div className="flex items-center justify-center text-center">
        <Icon className='pt-[15px]'/>
      </div>
    </div>
  )
}

export default IconCard
