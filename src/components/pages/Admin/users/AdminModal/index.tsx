import ModalView from "@/components/pages/modals/view";
import AuthInput from "@/components/pages/Auth/UI/AuthInput";
import PasswordInput from "@/components/pages/Auth/UI/PasswordInput";
import Button from "@/components/pages/home/UI/Button";
import SelectPlugin from "../../plugin/select";
import Modal from "@/components/common/Modal";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { authServiceHandler } from "@/api/auth.service";
import { USER_TYPE_OPTIONS } from "@/configs/filter-options";

const typeSwitcher: Record<string, number> = {
  SUADMIN: 0,
  DADMIN: 1,
  UADMIN: 2,
  BLOGGER: 3,
  OPERATOR: 4,
};

const AdminModal = ({ open, onClose, onReload, editData }: any) => {
  const [type, setType] = useState(
    editData ? typeSwitcher[editData.type] : "SUADMIN"
  );
  const [createLoading, setCreateLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const { register, handleSubmit, setValue, reset } = useForm();

  const handleCreateUser = async (data: any) => {
    setCreateLoading(true);
    await authServiceHandler.addAdmin({ ...data, type });
    onReload();
    onClose();
    setCreateLoading(false);
  };

  const handleEditUser = async (data: any) => {
    const finalData = {
      username: data.username,
      password: data.password,
      email: data.email,
    };
    if (data.username === editData.username) delete finalData.username;
    if (data.email === editData.email) delete finalData.email;
    if (!data.password) delete finalData.password;
    setEditLoading(true);
    await authServiceHandler.editAdmin(editData.id, { ...finalData, type });
    onReload();
    onClose();
    setEditLoading(false);
  };

  useEffect(() => {
    if (editData) {
      setValue("username", editData.username);
      setValue("email", editData.email);
      setType(editData.type);
    }
  }, [editData]);

  useEffect(() => {
    if (!open) {
      reset();
      setType("SUADMIN");
    }
  }, [open]);

  return (
    <Modal isModalOpen={open} onClose={onClose}>
      <ModalView
        setModalOpen={onClose}
        label={`${editData ? "Edit Admin" : "New Admin"}`}
      >
        <form
          onSubmit={handleSubmit(editData ? handleEditUser : handleCreateUser)}
        >
          <div className="w-full justify-between flex flex-col space-y-4 py-6">
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
            <div className="flex flex-col gap-1 text-grayText">
              {"User Type:"}
              <SelectPlugin
                setValue={setType}
                options={USER_TYPE_OPTIONS.map((item) => {
                  return { name: item };
                })}
                defaultValue={editData ? typeSwitcher[editData.type] : 0}
              />
            </div>
            <Button
              lable={
                createLoading || editLoading ? "Loading..." : "save changes"
              }
              disabled={createLoading || editLoading}
            />
          </div>
        </form>
      </ModalView>
    </Modal>
  );
};

export default AdminModal;
