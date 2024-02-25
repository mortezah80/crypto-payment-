import React from "react";
import { IconType } from "react-icons";
interface ServiceProps {
  Icon?: React.FC<React.SVGProps<SVGSVGElement>> | IconType;
  label: string;
  services: string[];
}
const ServiceItem: React.FC<ServiceProps> = ({ Icon, label, services }) => {
  return (
    <div className="bg-card font-bold px-[30px] space-y-2 py-[34px] rounded-[18px] w-full">
      <span>{Icon && <Icon />}</span>
      <h3 className="text-[18px] max-md:text-[14px] text-primary">{label}</h3>
      <ul className="list-disc pl-4 space-y-2 max-md:space-y-1">
        {services.map((value, index) => {
          return (
            <li className="text-[14px] max-md:text-[12px] items-center text-grayText" key={index}>
              <span>{services[index]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ServiceItem;
