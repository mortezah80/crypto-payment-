"use client";
import SelectModal from "@/components/common/selectModal";
import React, { useEffect } from "react";
import { BsWindowSplit } from "react-icons/bs";
import ModalInput from "../UI/modalInput";
import { FiCheck } from "react-icons/fi";
import { useState } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { authServiceHandler } from "@/api/auth.service";
import { useRouter } from "next/navigation";

const Link = ({ refreshList }: { refreshList?: any }) => {
  const router = useRouter();

  const [disable, setDisable] = useState(false);
  const [value, setValue] = useState(0);
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const marks = [
    {
      value: 0,
    },
    {
      value: 10,
    },
    {
      value: 20,
    },
    {
      value: 30,
    },
    {
      value: 40,
    },
    {
      value: 50,
    },
    {
      value: 60,
    },
  ];
  function valuetext(value: number) {
    return `${value}°C`;
  }

  const currencyOption = [
    { name: "BTC", icon: "btc" },
    { name: "Tron", icon: "btc" },
    { name: "Ethereum", icon: "btc" },
  ];
  const paymentCurrenyOptions = [
    { name: "BTC", icon: "btc" },
    { name: "Tron", icon: "btc" },
    { name: "Ethereum", icon: "btc" },
  ];

  const paymentTypeOptions = [{ name: "Invoice" }, { name: "Payment" }];

  const [merchants, setMerchants] = useState<any>([]);

  const [paymentType, setPaymentType] = useState<any>(0);
  const [merchant, setMerchant] = useState<any>(0);
  const [amount, setAmount] = useState<any>(0);
  const [curreny, setCurreny] = useState<any>(0);
  const [paymentCurreny, setPaymentCurreny] = useState<any>(0);
  const [paymentNetwork, setPaymentNetwork] = useState<any>(0);
  const [orderId, setOrderId] = useState<any>("");
  const [userPayFee, setUserPayFee] = useState<any>(true);
  const [loading, setLoading] = useState(false);
  const handleGetMerchants = async () => {
    const res = await authServiceHandler.getMerchants({});
    setMerchants(res.data);
  };

  const handleCreateMerchant = async () => {
    console.log(merchants[merchant], merchants);

    setLoading(true);
    await authServiceHandler.createPaymentLink(
      { user_pay_fee: userPayFee, order_id: orderId },
      {
        amount,
        merchant_id: merchants?.data[merchant]?.id,
        order_id: orderId,
        payment_crypto_network: "BTC (BTC001)",
        payment_crypto_type: currencyOption[curreny].name,
        payment_type: paymentTypeOptions[paymentType].name,
        user_payment_crypto_type: paymentCurrenyOptions[paymentCurreny].name,
      }
    );
    refreshList && refreshList();
    router.push(`/payment/${merchants?.data[merchant]?.id}/${orderId}`);
    setLoading(false);
  };

  useEffect(() => {
    handleGetMerchants();
  }, []);

  return (
    <div className="text-[12px] font-bold flex flex-col space-y-[30px] ">
      <span className="text-[12px]">
        Accept payment simply by sharing a link
      </span>
      <div className="flex flex-col items-start">
        <div className="flex items-start text-[14px] font-[700]">
          <div className="flex items-center justify-center text-[18px]">
            <BsWindowSplit />
          </div>
          <span className="mb-[5px] ml-[5px]">Select Merchant</span>
        </div>
        <SelectModal
          options={merchants?.data}
          state={merchant}
          setState={setMerchant}
        />
      </div>
      <div className="flex flex-col items-start">
        <span className="mb-[5px] text-[12px] text-grayText">Receipt type</span>
        <SelectModal
          options={paymentTypeOptions}
          setState={setPaymentType}
          state={paymentType}
        />
      </div>
      <div className="flex flex-col items-start">
        <span className="text-[12px] text-grayText">Enter amount to pay</span>
        <div className="grid grid-cols-2 items-center justify-between gap-x-4">
          <div className="flex flex-col items-start">
            <span className="ml-[16px] mb-[4px] text-[12px] font-[700] text-grayText">
              Amount
            </span>
            <ModalInput
              placeHolder="0.0000000000"
              type="number"
              setValue={setAmount}
              value={amount}
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="ml-[16px] mb-[4px] text-[12px] font-[700] text-grayText">
              curreny
            </span>
            <SelectModal
              options={currencyOption}
              state={curreny}
              setState={setCurreny}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="text-white accent-primary">
          <input
            type="checkbox"
            checked={userPayFee}
            onChange={() => setUserPayFee((prev: any) => !prev)}
          />
        </div>
        <span className="text-grayText text-[12px] leading-3 ml-[6px]">
          The client pays a commission
        </span>
      </div>
      <div className="flex flex-col items-start">
        <ModalInput
          placeHolder="Order id..."
          setValue={setOrderId}
          value={orderId}
          type="text"
        />
        <span className="ml-[16px] text-grayText mt-[9px]">
          Helps to understand what is your client paying for
        </span>
      </div>

      <div className="flex flex-col items-start space-y-[4px]">
        <span>Select a payment currency</span>
        <span className="ml-[16px] text-grayText">
          Select the cryptocurrency the client pays in
        </span>
        <span
          className={[
            " ml-[16px] text-[red] mb-[4px]",
            disable ? "" : "hidden",
          ].join(" ")}
        >
          Enter the amount and select the invoice currency
        </span>
        <SelectModal
          options={paymentCurrenyOptions}
          setState={setPaymentCurreny}
          state={paymentCurreny}
        />
      </div>

      <div
        className={[
          "flex flex-col items-start space-y-[4px]",
          disable ? "hidden" : "",
        ].join(" ")}
      >
        <span>Select the payment network</span>
        <span className="ml-[16px] text-grayText">
          Select the network on which client pays
        </span>
        <SelectModal
          options={[{ name: "BTC (BTC001)" }]}
          defaultValue={0}
          setState={setPaymentNetwork}
          state={paymentNetwork}
          disable={disable}
        />
      </div>

      {/* <div className='flex flex-col items-start w-full space-y-[6px]'>
                <span className='ml-[16px] text-[14px]'>Select the expiration time of the payment</span>
                <span className={['ml-[16px] text-[12px] text-redText', disable? "" : "hidden" ].join(" ")}>Enter the amount and select the invoice currency</span>

                <Slider
                    onChange={handleSliderChange}
                    aria-label="Custom marks"
                    defaultValue={0}
                    getAriaValueText={valuetext}
                    step={10}
                    valueLabelDisplay="auto"
                    marks={marks}
                    min={0}
                    max={60}
                    disabled = {disable}
                    value={value}
                />
                <div className='flex items-center justify-between w-full text-grayText font-bold mt-[-20px]'>
                    <span>0 min</span>
                    <span>60 min</span>
                </div>
    
            </div>
            
            <span className={['ml-[13px]', disable? "text-disable":"text-primary"].join(" ")}>The link is max valid for {value}min</span> */}

      <div className="self-end">
        <button
          onClick={handleCreateMerchant}
          className={[
            " text-[14px] font-bold max-lg:text-sm px-[23px] max -lg:px-8 py-2 max-md:text-[12px] max-md:p-0 max-md:h-[32px] max-md:w-[140px] rounded-xl max-lg:rounded-lg",
            // props.primary
            disable ? "bg-card_shade text-disable " : "bg-primary text-card",
            // : 'bg-primary text-white',
          ].join(" ")}
          disabled={loading}
        >
          Create Payment
        </button>
      </div>
    </div>
  );
};

export default Link;
