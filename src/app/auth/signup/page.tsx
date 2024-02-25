"use client"
import AuthView from "@/components/pages/Auth/View";
import Register from "@/components/pages/Auth/Register";

const SignUp = () => {
  return (
    <div className="flex w-screen justify-center items-center h-screen bg-auth-pattern">
      <AuthView label="Welcome Back!">
        <Register />
      </AuthView>
    </div>
  );
};

export default SignUp;
