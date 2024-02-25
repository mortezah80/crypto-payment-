import React from "react";
import { IconType } from "react-icons";
interface ModalInputProps {
  Icon?: React.FC<React.SVGProps<SVGSVGElement>> | IconType;
  placeHolder: string;
  value?: any;
  setValue?: any;
  type?: string;
}

const ModalInput: React.FC<ModalInputProps> = ({
  Icon,
  placeHolder,
  value,
  setValue,
  type,
}) => {
  return (
    <div className="w-full">
      <div className="bg-grayLight rounded-[12px] px-[12px] h-[36px] flex items-center justify-between">
        <input
          type={type}
          className="text-[12px] w-full bg-transparent focus:outline-none focus:border-none"
          placeholder={placeHolder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div>{Icon ? <Icon /> : ""}</div>
      </div>
    </div>
  );
};

export default ModalInput;
