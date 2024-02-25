"use client";
import { FiChevronDown } from "react-icons/fi";
import useOutside from "../../../hooks/useOutside";
import { BiLogoBitcoin } from "react-icons/bi";
import { useRef, useState } from "react";

interface optionsInt {
  name: string;
  icon?: string;
}

interface SelectProps {
  options: optionsInt[];
  defaultValue?: number;
  disable?: boolean;
  state?: any;
  setState?: any;
}

const SelectModal: React.FC<SelectProps> = ({
  options,
  state,
  setState,
  disable,
}) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutside(wrapperRef, setOpen);
  return (
    <div className="bg-card_shade w-full relative cursor-pointer rounded-[12px] h-[36px] px-[12px] flex items-center justify-between">
      {options?.length && (
        <div
          className="flex justify-between items-center w-full"
          onClick={disable ? () => setOpen(false) : () => setOpen(!open)}
        >
          {disable ? (
            <div className="flex items-center justify-between w-full text-disable">
              <span className=" text-[12px] font-semibold">
                {options[0]?.name}
              </span>
              <span>
                <FiChevronDown />
              </span>
            </div>
          ) : (
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center justify-start">
                {options[state]?.icon && options[state].icon == "btc" ? (
                  <div className="text-[#f8941c] mr-[3px] text-[22px]">
                    <BiLogoBitcoin />
                  </div>
                ) : (
                  ""
                )}

                {options[state]?.name === "Select" ? (
                  <span className="text-grayText text-[12px] font-semibold">
                    {options[state]?.name}
                  </span>
                ) : (
                  <span className="text-text text-[14px] font-semibold">
                    {options[state]?.name}
                  </span>
                )}
              </div>

              <span>
                <FiChevronDown />
              </span>
            </div>
          )}
        </div>
      )}
      {open && (
        <div className=" space-y-2 py-[10px] absolute z-10 top-11 left-0 right-0 bg-card border rounded-[12px] px-[12px] ">
          {options.map((value, index) => {
            return (
              <div
                onClick={() => {
                  setState && setState(index);
                  setOpen(false);
                }}
                style={{ background: index === state ? "#DCECFF" : "" }}
                className="text-[12px] text-grayText hover:text-text hover:bg-grayLight"
                key={index}
              >
                {value.name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SelectModal;
