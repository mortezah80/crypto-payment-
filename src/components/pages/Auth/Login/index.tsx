import React from 'react';
import AuthInput from '../UI/AuthInput';
import {AiOutlineEye} from 'react-icons/ai'

const Login = () => {
    return (
        <div className='grid grid-cols-1 gap-y-[25px] pt-[45px] '>
            <AuthInput label="User Name or Email Address" placeHolder='Enter a Username or Email...' />
            <AuthInput label="Password" placeHolder='Enter a Password...' Icon={AiOutlineEye} />
            <button className="w-[150px] mt-[15px] justify-self-end ml-auto  bg-primary text-white text-center h-[46px] rounded-[12px] font-bold">
                Login
            </button>
            <div className='text-text w-full bg-card_light flex items-center justify-center rounded-[18px] h-[36px] text-[12px] mt-[40px]'>
                <span>Forget your Password? <span className='text-primary font-[700]'>Restore it</span></span>
            </div>
            <div className='text-text w-full  flex items-center justify-start h-[36px] text-[12px]'>
                <span>Forget your Password? <span className='text-primary font-[700]'>Restore it</span></span>
            </div>
            
        </div>
    );
};

export default Login;