"use client";

import AuthView from "@/components/pages/Auth/View";
import AuthInput from "@/components/pages/Auth/UI/AuthInput";

import Link from "next/link";
import PasswordInput from "@/components/pages/Auth/UI/PasswordInput";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { authServiceHandler } from "@/api/auth.service";
import { useZustandStore } from "@/store";
import { setCookie } from "cookies-next";

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const { user, setUser } = useZustandStore((state) => state);

  const onSubmit = async (data: any) => {
    setLoading(true);
    const res = await authServiceHandler.login(data);
    setUser(res.data.data);
    setCookie("token", res.data.data.access_token);
    setCookie("role", res.data.data.type);

    if (
      res.data.data.type == "SUADMIN" ||
      res.data.data.type == "UADMIN" ||
      res.data.data.type == "BLOGGER"
    ) {
      router.push("/admin");
    } else {
      router.push("/dashboard");
    }
    setLoading(false);
  };

  return (
    <div className="flex w-screen justify-center items-center h-screen bg-auth-pattern">
      <AuthView label="Welcome Back!">
        <div className="grid grid-cols-1 gap-y-[25px] pt-[45px] ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <AuthInput
              label="User Name or Email Address"
              placeHolder="Enter a Username or Email..."
              hookFormProps={register("identity")}
            />
            <PasswordInput
              label="Password"
              placeHolder="Enter a Password..."
              hookFormProps={register("password")}
            />
            <button
              disabled={loading}
              type="submit"
              className={`w-[150px]  justify-self-end ml-auto text-white text-center h-[46px] rounded-[12px] font-bold mt-4 ${
                loading ? "bg-gray-200 animate-pulse " : "bg-primary"
              }`}
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
          <div className="text-text w-full bg-card_light flex items-center justify-center rounded-2xl h-9 text-xs mt-12">
            <span>
              Forget your Password?
              <Link
                href={"/auth/recoverPassword"}
                className="text-primary font-[700]"
              >
                Restore it
              </Link>
            </span>
          </div>
          <div className="text-text w-full  flex items-center justify-start h-[36px] text-[12px]">
            <span>
              Do not have an account?
              <Link href={"/auth/signup"} className="text-primary font-[700]">
                Signup
              </Link>
            </span>
          </div>
        </div>
      </AuthView>
    </div>
  );
};

export default Login;
