import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
interface ModalProps {
  label?: string;
  children: React.ReactNode;
  setModalOpen: any;
}
const ModalView: React.FC<ModalProps> = ({ label, children, setModalOpen }) => {
  return (
    <div className="h-5/6 min-w-[400px] max-w-[95%] px-[45px] py-[50px] rounded-[24px] bg-card shadow-[0px_30px_50px_0px_#0000001a] max-sm:px-3 max-sm:py-6">
      <div
        className={`flex items-center px-1 ${
          label ? "justify-between" : "justify-center"
        } `}
      >
        {label && (
          <h2 className="text-primary text-[18px] font-bold">{label}</h2>
        )}
        <div
          onClick={() => setModalOpen(false)}
          className="flex items-center justify-center text-grayDark text-[27px] cursor-pointer"
        >
          <AiFillCloseCircle />
        </div>
      </div>
      <div className="h-full overflow-y-auto coinScroll px-1">{children}</div>
    </div>
  );
};

export default ModalView;
