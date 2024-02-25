"use client";

import { FiCheck } from "react-icons/fi";
import { useState } from "react";
interface checkBoxProps {
  defaultValue?: boolean;
}

const CustomCheckBox: React.FC<checkBoxProps> = ({ defaultValue }) => {
  const [check, setCheck] = useState(defaultValue ? defaultValue : false);
  return (
    <button
      onClick={() => setCheck(!check)}
      className={
        check
          ? "bg-primary text-white hover:text-primary  hover:bg-card_light"
          : "w-[16px] rounded-md h-[16px] border-primary text-[12px] hover:border-card_light bg-primary border-2 text-white"
      }
    >
      <FiCheck className={check ? "opacity-100" : "opacity-0"} />
    </button>
  );
};

export default CustomCheckBox;
