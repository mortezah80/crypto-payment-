"use client";
import PaymentIcon from "@/assets/paymentIcon.svg";
import Timer from "./timer";
import { MdContentCopy } from "react-icons/md";
import {
  AiFillExclamationCircle,
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiOutlineClockCircle,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsCurrencyDollar, BsExclamationCircle } from "react-icons/bs";
import AuthInput from "../Auth/UI/AuthInput";
import IconCard from "./common/IconCard";
import WalletConnectIcon from "@/assets/WalletConnect-Logo copy.svg";
import MetaIcon from "@/assets/MetaMask_Fox.svg";
import TrolLinkIcon from "@/assets/Tronlink.svg";
import Alert from "./common/Alerts";
import { QRCodeSVG } from "qrcode.react";
import { FC, useEffect, useState } from "react";
import { authServiceHandler } from "@/api/auth.service";

interface PaymentModalProps {
  merchant_id: string;
  order_id: string;
}

const PaymentModal: FC<PaymentModalProps> = ({ merchant_id, order_id }) => {
  const [transaction, setTransaction] = useState<any>();

  const getTransaction = async () => {
    const data = `?merchant_id=${merchant_id}&order_id=${order_id}`;
    const res = await authServiceHandler.getMerchantTransaction(data);
    setTransaction(res.data.data[0]);
  };

  useEffect(() => {
    if (merchant_id && order_id) {
      getTransaction();
    }
  }, [merchant_id, order_id]);

  return (
    <div className="w-[780px] max-lg:w-11/12 text-grayText text-[14px] m-auto  mt-20 px-[54px] max-md:px-[30px] max-sm:px-[16px] max-md:py-[22px] py-[38px] bg-card shadow-[0px_15px_20px_0px_#0000000d] rounded-[18px]">
      <div className="flex items-center max-md:flex-col max-md:space-y-[20px] justify-between">
        <h2 className="flex items-center text-primary font-bold text-[18px] gap-1">
          <PaymentIcon />
          EmanuelCoin
        </h2>
        <div className="flex items-center space-x-2">
          <span className="text-[14px]">Expiration Time</span>
          <Timer initialTime="this is timer" />
        </div>
      </div>
      <div className="border border-b-[#E1E1E1] my-2"></div>
      <div className="flex justify-between items-center mt-[22px]">
        <div>
          <span className="text-[12px] font-bold">Amount:</span>
          <h1 className="text-primary text-[32px] font-bold flex items-center space-x-2">
            {transaction?.amount}
            <span className="text-text pl-1">
              {transaction?.payment_crypto_type}
            </span>
            <div className="bg-grayLight max-md:hidden text-[15px] text-text flex items-center justify-center w-[30px] h-[30px] rounded-full">
              <MdContentCopy />
            </div>
          </h1>
          <div className="flex items-center max-md:w-full text-[12px] font-bold">
            <span>The rate will be updated in</span>
            <span className="flex items-center text-text pl-2">
              <AiOutlineClockCircle /> 12:00
            </span>
          </div>
        </div>
        <div className="flex items-center font-bold text-[32px] space-x-2">
          <div className="flex items-center justify-center max-md:text-[17px] text-[22px] text-white bg-grayText rounded-full max-md:w-[22px] max-md:h-[22px] w-[28px] h-[28px]">
            <BsCurrencyDollar />
          </div>
          <h2 className="text-text">{transaction?.paid_amount}</h2>
        </div>
      </div>
      <div className="rounded-[12px] max-lg:flex-col  font-bold flex items-center justify-between mt-[22px] bg-[#FAFAFA] py-[12px] pl-[15px] pr-[29px]">
        <h4 className="text-text text-[14px]">
          Network - {transaction?.payment_crypto_network}
        </h4>
        <div className="text-[#FF9C27] text-[12px] flex items-center">
          <AiFillExclamationCircle />
          <span>You pay network fee</span>
        </div>
      </div>
      <div className="mt-[20px] flex max-lg:flex-col max-lg:space-x-0 max-lg:mt-[10px] max-lg:space-y-[20px] justify-between items-center space-x-[70px]">
        <div className="w-[180px] h-[180px] bg-grayLight rounded-[12px]">
          <QRCodeSVG
            value={transaction?.wallet_address}
            height={180}
            width={180}
            className="rounded-[12px]"
            fgColor="#242424"
          />
          ,
        </div>
        <div className="flex-1 text-grayText flex flex-col self-stretch justify-between">
          <div className="max-lg:w-full max-lg:text-center">
            <span className="max-lg:text-center max-lg:self-center">
              {"Recepient's wallet address"}
            </span>
            <div className="p-[14px] border max-lg:text-left border-grayText rounded-[18px] flex items-center justify-between">
              <span className="text-text font-bold w-[70%] break-words">
                {transaction?.wallet_address}
              </span>
              <div className="bg-card_light text-primary text-[16px] flex items-center justify-center w-[30px] h-[30px] rounded-full">
                <MdContentCopy />
              </div>
            </div>
          </div>
          <AuthInput
            label="Enter your email to receive payment invoice"
            placeHolder="Enter your email..."
            labelStyle={{ color: "#9F9F9F", fontSize: "14px", fontWeight: 400 }}
          />
        </div>
      </div>
      <div className="mt-[38px] max-md:flex-col max-md:items-start max-md:space-y-[14px] flex items-center justify-between">
        <h5 className="space-x-2">
          Payment ID: <span className="font-bold pl-2">{transaction?.id}</span>
        </h5>
        <h5 className="space-x-2">
          Order ID:{" "}
          <span className="font-bold pl-2">{transaction?.order_id}</span>
        </h5>
      </div>
      <div className="rounded-[18px] py-[20px] mt-[35px] bg-[#FAFAFA] flex items-center justify-center">
        <Alert message={transaction?.payment_status} color="#17AD4A" />
      </div>
      <div className="flex items-center space-x-3 max-md:flex-col max-md:items-center max-md:space-x-0 max-md:space-y-[9px] mt-[15px]">
        <IconCard Icon={WalletConnectIcon} label="WalletConnect" />
        <IconCard Icon={MetaIcon} label="Metamask" />
        <IconCard Icon={TrolLinkIcon} label="Tronlink" />
      </div>
      <div className="flex items-center justify-between mt-10">
        <div className="text-[#E1E1E1] space-x-3 text-[19px] flex items-center">
          <button>
            <AiOutlineTwitter />
          </button>
          <button>
            <AiFillInstagram />
          </button>
          <button>
            <AiFillFacebook />
          </button>
          <button>
            <AiFillGithub />
          </button>
        </div>
        <div className="flex items-center cursor-pointer text-[15px] font-bold">
          <BsExclamationCircle />
          <span className="pl-1 text-[12px]">Help</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
