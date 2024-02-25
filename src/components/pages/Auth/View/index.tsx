import React from "react";
import Brand from "@/assets/Brand.svg";
interface AuthProps {
  label?: string;
  children: React.ReactNode;
}

const AuthView: React.FC<AuthProps> = ({ label, children }) => {
  return (
    <div className="w-[600px] px-[75px] py-[50px] rounded-[24px] bg-card shadow-[0px_30px_50px_0px_#0000001a]">
      <div
        className={`flex items-center ${
          label ? "justify-between" : "justify-center"
        }`}
      >
        {label && (
          <h2 className="text-primary text-[18px] font-bold">{label}</h2>
        )}
        <div>
          <Brand />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AuthView;
