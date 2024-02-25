import AuthView from "@/components/pages/Auth/View";
import Recover from "@/components/pages/Auth/RecoverPassword";


const REcoverPassword = () => {
  return (
    <div className="flex w-screen justify-center items-center h-screen bg-auth-pattern">
      <AuthView label="Welcome Back!">
          <Recover/>
      </AuthView>
    </div>
  );
};

export default REcoverPassword;
