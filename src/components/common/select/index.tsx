"use client";
import { useRef, useState } from "react";
import useOutside from "@/hooks/useOutside";
import { FiChevronDown } from "react-icons/fi";

interface SelectProps {
  options: string[];
  defaultValue: number;
  containerClassName?: string;
}
const Select: React.FC<SelectProps> = ({
  options,
  defaultValue,
  containerClassName = "",
}) => {
  const [state, setState] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useOutside(wrapperRef, setOpen);

  return (
    <div
      className={`${containerClassName} w-[150px] max-xl:w-full relative cursor-pointer max-sm:w-full border-[#E1E1E1] rounded-[12px] border py-[10px] px-[12px]`}
    >
      <div
        className="flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        <span className="text-[12px] font-semibold">{options[state]}</span>
        <span>
          <FiChevronDown />
        </span>
      </div>
      {open && (
        <div className=" space-y-2 py-[10px] absolute z-10 top-11 left-0 right-0 bg-card border border-[#E1E1E1] rounded-[12px] px-[12px] ">
          {options.map((value, index) => {
            return (
              <div
                onClick={() => {
                  setState(index);
                  setOpen(false);
                }}
                style={{ background: index === state ? "#DCECFF" : "" }}
                className="text-[12px] text-grayText hover:text-text hover:bg-grayLight"
                key={index}
              >
                {value}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Select;
