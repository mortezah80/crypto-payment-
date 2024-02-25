import Check from "@/components/pages/Auth/CheckMessage";
import AuthView from "@/components/pages/Auth/View";

const CheckMessage = () => {
  return (
    <div className="flex w-screen justify-center items-center h-screen bg-auth-pattern">
      <AuthView label="Welcome Back!">
          <Check/>
      </AuthView>
    </div>
  );
};

export default CheckMessage;
