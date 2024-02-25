import React, { useState } from "react";
import AuthInput from "../UI/AuthInput";
import Strenght from "../UI/Strenght";
import Link from "next/link";
import PasswordInput from "../UI/PasswordInput";
import { useForm } from "react-hook-form";
import { authServiceHandler } from "@/api/auth.service";
import { useZustandStore } from "@/store";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, setUser } = useZustandStore((state) => state);

  const handleRegister = async (data: any) => {
    const res = await authServiceHandler.register(data);
    setUser(res.data.data);
    setCookie("token", res.data.data.access_token);
    setCookie("role", res.data.data.type);
    if (
      res.data.data == "SUADMIN" ||
      res.data.data == "UADMIN" ||
      res.data.data == "BLOGGER"
    ) {
      router.push("/admin");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <form
      className="flex flex-col space-y-7 pt-[46px]"
      onSubmit={handleSubmit(handleRegister)}
    >
      <AuthInput
        label="Email Address"
        placeHolder="Enter a Email address..."
        hookFormProps={register("email")}
      />
      <AuthInput
        label="User Name"
        placeHolder="Enter a Username..."
        hookFormProps={register("username")}
      />
      <div className="flex items-center justify-between space-x-[10px]">
        <PasswordInput
          label="Password"
          placeHolder="Enter a Email address..."
        />
        <PasswordInput
          label="Repeat Password"
          placeHolder="Enter a Email address..."
          hookFormProps={register("password")}
        />
      </div>
      <Strenght name="password" />
      <div className="flex items-start mt-[50px] space-x-2">
        <div className="text-white accent-primary">
          <input type="checkbox" />
        </div>
        <span className="text-grayText text-[12px] leading-3">
          By creating an account, you agree to our Terms of Service and Privacy
          Policy
        </span>
      </div>
      <div></div>
      <button
        type="submit"
        className="w-[150px] mt-[15px] justify-self-end ml-auto bg-primary text-white text-center h-[46px] rounded-[12px] font-bold"
      >
        Register
      </button>
      <div className="text-text w-full  flex items-center justify-start h-[36px] text-[12px]">
        <span>
          Do you have an account?
          <Link href={"/auth/login"} className="text-primary font-[700]">
            Login
          </Link>
        </span>
      </div>
    </form>
  );
};

export default Register;
