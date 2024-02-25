import React from "react";
import SideBarMerchants from "$/public/icons/sidebar/merchants.svg";
import CustomButton from "@/components/common/button";
import { IoCloseCircle } from "react-icons/io5";
import { useState } from "react";
import { authServiceHandler } from "@/api/auth.service";
import Modal from "@/components/common/Modal";
import eventEmitter from "@/tools/event";

interface CreateMerchantProps {
  setIsModalOpen: (isModalOpen: boolean) => void;
  isModalOpen: boolean;
}

function ModalCreateMerchant({
  setIsModalOpen,
  isModalOpen,
}: CreateMerchantProps) {
  const [merchantName, setMerchantName] = useState<string>("");
  const handleCreateMerchant = async (e: any) => {
    e.preventDefault();
    const res = await authServiceHandler.createMerchant({
      name: merchantName,
    });
    setIsModalOpen(false);
    eventEmitter.emit("successResponseMerchant");
  };

  return (
    <Modal isModalOpen={isModalOpen}>
      <form className="bg-white rounded-3xl w-96 h-64 p-10 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div className="text-primary flex gap-1.5 items-center font-bold">
            <SideBarMerchants />
            <span>Create new merchant</span>
          </div>
          <span
            className="cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          >
            <IoCloseCircle size="22px" color="#C2C2C2" />
          </span>
        </div>
        <div>
          <label className="text-[#9F9F9F] ml-4 font-bold text-sm">
            Enter a merchant name
          </label>
          <div className="flex px-3 max-xl:w-full w-full max-sm:flex-1 bg-grayLight h-9 rounded-xl justify-between items-center">
            <input
              value={merchantName}
              onChange={(e) => setMerchantName(e.target.value)}
              type="text"
              placeholder="Enter name..."
              className="bg-transparent text-xs font-[400] focus:border-none focus:outline-none w-full"
            />
          </div>
        </div>

        <CustomButton
          onClick={handleCreateMerchant}
          tailwindStyle="rounded-xl w-full py-3 font-bold text-sm"
          label="Create Merchant"
        />
      </form>
    </Modal>
  );
}

export default ModalCreateMerchant;
