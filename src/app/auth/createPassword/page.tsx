import AuthView from "@/components/pages/Auth/View";
import React from "react";
import CreatePasword from "@/components/pages/Auth/CreatePasword";

const CreatePassword = () => {
  return (
    <div className="flex w-screen justify-center items-center h-screen bg-auth-pattern">
      <AuthView label="Welcome Back!">
          <CreatePasword/>
      </AuthView>
    </div>
  );
};

export default CreatePassword;
