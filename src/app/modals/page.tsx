
"use client"
import CreatePasword from "@/components/pages/Auth/CreatePasword/index";
import Email from "@/components/pages/Auth/EmailConfimation/index";
import Recover from "@/components/pages/Auth/RecoverPassword/index";
import Check from "@/components/pages/Auth/CheckMessage/index";
import Register from "@/components/pages/Auth/Register";
import Login from "@/components/pages/Auth/Login";
import ModalView from "@/components/pages/modals/view";
import Invocie from "@/components/pages/modals/invocie";
import Link from "@/components/pages/modals/link";
import Withdraw from "@/components/pages/modals/withdraw";
import Convert from "@/components/pages/modals/convert";
import Transfer from "@/components/pages/modals/transfer";
const page = () => {
  return (
    <div className="flex w-screen justify-center items-center h-screen">
      <ModalView label="Welcome Back!" setModalOpen={()=>{}}>
          <Link/>
      </ModalView>
    </div>
  );
};

export default page;
