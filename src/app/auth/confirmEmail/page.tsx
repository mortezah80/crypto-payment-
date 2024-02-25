import AuthView from "@/components/pages/Auth/View";
import Email from "@/components/pages/Auth/EmailConfimation";

const ConfirmEmail = () => {
  return (
    <div className="flex w-screen justify-center items-center h-screen bg-auth-pattern">
      <AuthView label="Welcome Back!">
          <Email/>
      </AuthView>
    </div>
  );
};

export default ConfirmEmail;
