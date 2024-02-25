import { createPortal } from "react-dom";
import React, { FC, useEffect, useRef, useState } from "react";

interface ModalProps {
  children: any;
  onClose?: () => void;
  className?: string;
  isModalOpen?: boolean;
}

const Modal: FC<ModalProps> = ({
  children,
  className,
  onClose = () => {},
  isModalOpen = false,
}) => {
  const [mounted, setMounted] = useState(false);

  const [isModalOpenLocalState, setIsModalOpenLocalState] =
    useState(isModalOpen);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!isModalOpen) {
      const timer = setTimeout(() => setIsModalOpenLocalState(false), 500);
      return () => clearTimeout(timer);
    } else {
      setIsModalOpenLocalState(true);
    }
  }, [isModalOpen]);

  const ref = useRef(null);

  if (mounted) {
    return isModalOpenLocalState
      ? createPortal(
          <div className="absolute left-0 top-0 z-30 h-screen w-screen text-black">
            <span
              className={`fixed left-0 top-0 h-full w-full bg-[#0006] backdrop-blur-sm ${
                isModalOpen ? "" : "fade-out"
              }`}
            />
            <div
              ref={ref}
              className={`
              ${
                isModalOpen
                  ? true
                    ? "swipe"
                    : "pop-in-mobile-swipe"
                  : "swipe-out"
              }
              ${
                className || ""
              } fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center`}
              onClick={(e) => {
                if (e.target === ref.current) {
                  onClose();
                }
              }}
            >
              {children}
            </div>
          </div>,
          document.getElementById("portal")!
        )
      : null;
  } else {
    return <div className="hidden">{children}</div>;
  }
};
export default Modal;
