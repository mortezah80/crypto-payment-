import ModalView from "@/components/pages/modals/view";
import ProfileInfo from "..";
import AuthInput from "@/components/pages/Auth/UI/AuthInput";
import PasswordInput from "@/components/pages/Auth/UI/PasswordInput";
import Button from "@/components/pages/home/UI/Button";
import { FC, useEffect, useState } from "react";
import Modal from "@/components/common/Modal";
import { useForm } from "react-hook-form";
import { authServiceHandler } from "@/api/auth.service";

interface IProps {
  open?: boolean;
  onClose?: () => void;
  onReload?: () => void;
  editUser?: any;
}

const ProfileModal: FC<IProps> = ({ open, onClose, onReload, editUser }) => {
  const { register, handleSubmit, setValue } = useForm();

  const [editLoading, setEditLoading] = useState(false);

  const handleEditUser = async (data: any) => {
    try {
      const finalData = {
        username: data.username,
        password: data.password,
        email: data.email,
      };
      if (data.username === editUser.userName) delete finalData.username;
      if (data.email === editUser.email) delete finalData.email;
      if (!data.password) delete finalData.password;
      setEditLoading(true);
      await authServiceHandler.editUser(editUser.id, { ...finalData });
      onReload && onReload();
      onClose && onClose();
    } catch (error) {
    } finally {
      setEditLoading(false);
    }
  };

  useEffect(() => {
    if (editUser) {
      setValue("username", editUser.userName);
      setValue("email", editUser.email);
    }
  }, [editUser]);

  return (
    <Modal isModalOpen={open} onClose={onClose}>
      <ModalView setModalOpen={onClose} label="Edit Profile">
        <form
          onSubmit={handleSubmit(handleEditUser)}
          className="w-full justify-between flex flex-col space-y-4 py-6"
        >
          <ProfileInfo email={editUser?.email} userName={editUser?.userName} />
          <AuthInput
            label="UserName:"
            gray
            placeHolder="enter your username..."
            hookFormProps={register("username")}
          />
          <AuthInput
            label="Email:"
            gray
            placeHolder="enter your email..."
            hookFormProps={register("email")}
          />
          <PasswordInput
            placeHolder="enter your password..."
            label="Password:"
            hookFormProps={register("password")}
          />
          <Button
            lable={editLoading ? "Loading..." : "save changes"}
            disabled={editLoading}
          />
        </form>
      </ModalView>
    </Modal>
  );
};

export default ProfileModal;
