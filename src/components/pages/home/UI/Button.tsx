import React from "react";

interface CustomButtonProps {
  lable: string;
  primary?: boolean;
  disabled?: boolean;
}
const Button: React.FC<CustomButtonProps> = (props) => {
  return (
    <button
      disabled={props.disabled}
      className={[
        "text-base hover:bg-primary_light transition font-bold max-lg:text-sm px-12 max -lg:px-8 py-2 max-md:text-[12px] max-md:p-0 max-md:h-[32px] max-md:w-[140px] rounded-xl max-lg:rounded-lg",
        props.primary
          ? "text-primary border border-primary"
          : "bg-primary text-white hover:text-primary",
      ].join(" ")}
    >
      {props.lable}
    </button>
  );
};

export default Button;
