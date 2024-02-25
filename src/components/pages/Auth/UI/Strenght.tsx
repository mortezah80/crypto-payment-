"use client"
import { PasswordMeter } from "password-meter";
import { useForm } from "react-hook-form";

const Strenght = (props: { name: string }) => {
  const { watch } = useForm();
  return (
    <div className="flex items-center justify-between w-full">
      <span className="text-text text-[14px] font-bold pl-2">
        Password Strength
      </span>
      <div className="bg-grayLight rounded-full relative h-[8px] w-[300px]">
        <div
          className="bg-primary h-full rounded-full"
          style={{
            width: `${
              new PasswordMeter().getResult(watch(props.name)).percent
            }%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Strenght;
