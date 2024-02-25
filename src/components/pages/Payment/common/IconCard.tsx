
import { IconType } from "react-icons";
interface IconCardProps {
  label: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>> | IconType;
}
const IconCard: React.FC<IconCardProps> = ({ Icon, label }) => {
  return (
    <div className="w-full hover:shadow-[0px_15px_20px_0px_#0000000d] hover:text-primary hover:border-primary text-grayText font-bold rounded-[13px] border-2 space-x-1 border-[#E1E1E1] cursor-pointer transition py-[10px] flex justify-center items-center">
      <span>
        <Icon />
      </span>
      <span>{label}</span>
    </div>
  );
};

export default IconCard;
