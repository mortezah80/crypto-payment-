import { IconType } from "react-icons";
interface AlertProps {
  message: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>> | IconType;
  color: string;
}
const Alert: React.FC<AlertProps> = ({ message, Icon, color }) => {
  return (
    <>
      {Icon && <Icon style={{ color: color }} />}
      <span style={{ color: color }} className="pl-2 font-bold text-[16px]">
        {message}
      </span>
    </>
  );
};

export default Alert;
