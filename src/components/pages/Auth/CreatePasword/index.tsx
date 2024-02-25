import React from "react";
import AuthInput from "../UI/AuthInput";
import { PiEyeLight } from "react-icons/pi";
import Strenght from "../UI/Strenght";

const CreatePasword = () => {
  return (
    <div className="pt-[47px] pb-[25px] flex flex-col space-y-5">
      <AuthInput label="New Passsword" placeHolder="Enter a Password..." />
      <AuthInput
        label="Confirm new password"
        placeHolder="Enter a Password again..."
        Icon={PiEyeLight}
      />
      <div className="flex pb-[30px] items-center pt-[18px] space-x-2">
        <Strenght name={'password'} />
      </div>
      <button className="w-[150px] justify-self-end ml-auto  bg-primary text-white text-center h-[46px] rounded-[12px] font-bold">
        Confirm
      </button>
    </div>
  );
};

export default CreatePasword;
