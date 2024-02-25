import React from 'react'
import AuthInput from '../UI/AuthInput'

const RecoverPassword = () => {
  return (
    <div className="flex flex-col pt-[46px] pb-[13px]">
      <AuthInput
        label="Your Email Address"
        placeHolder="Enter a Email address..."
      />
      <div className="w-[303px]  justify-self-end ml-auto mt-[15px] h-[76px] bg-grayLight"></div>
      <button className="w-[150px] mt-[15px] justify-self-end ml-auto  bg-primary text-white text-center h-[46px] rounded-[12px] font-bold">
        Restore
      </button>
    </div>
  );
}

export default RecoverPassword