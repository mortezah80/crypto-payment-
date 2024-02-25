import React from 'react'
interface needItemProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  label: string
  color: string
  background: string
}
const NeedItem: React.FC<needItemProps> = ({
  Icon,
  label,
  color,
  background,
}) => {
  return (
    <div className="flex items-center flex-col space-y-1 max-md:py-3">
      <div
        className="w-[110px] h-20 rounded-xl flex items-center justify-center"
        style={{ background: background }}
      >
        <Icon />
      </div>
      <span className={'font-bold text-sm'} style={{ color: color }}>
        {label}
      </span>
    </div>
  )
}

export default NeedItem
