"use client";
import MerchantItem from "@/components/pages/Admin/Merchant/MerchantItem";
import InputSearch from "@/components/common/searchInput";
import Test_Icon from "@/assets/rotate.svg";
import MerchantItemResposive from "@/components/pages/Admin/Merchant/Responsive";
import SelectPlugin from "@/components/pages/Admin/plugin/select";
import { useEffect, useState } from "react";
import { authServiceHandler } from "@/api/auth.service";

const Merchant = () => {
  const [merchants, setMerchants] = useState<any>();

  const handleGetMerchants = async () => {
    const res = await authServiceHandler.getMerchants({});
    setMerchants(res.data);
  };

  useEffect(() => {
    handleGetMerchants();
  }, []);

  return (
    <div>
      <div className="px-[61px] space-x-10 py-[41px] max-xl:flex-col bg-card font-bold my-[23px] shadow-[0px_15px_20px_1px_#0000000d] rounded-[12px] flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-[32px] text-primary ">Merchat panel</h1>

          <div className="flex self-stretch w-[250px] text-grayText space-y-2 bg-grayLight px-4 py-3 rounded-xl max-lg:flex-col flex-col items-start text-[12px] my-[23px]">
            <div className="flex items-center justify-between w-full max-lg:pr-0">
              <span>All Merchant</span>
              <h3 className="text-text text-2xl">325,000</h3>
            </div>
            <div className="flex items-center justify-between w-full max-lg:pl-0">
              <span>All User</span>
              <h2 className="text-text text-2xl">765k</h2>
            </div>
          </div>
          <div className="flex flex-col space-y-1 items-start">
            <span className="text-sm font-bold text-grayText">
              Created Merchant (Last Mounth)
            </span>
            <h2 className="text-text text-3xl font-bold">22,456</h2>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-end self-stretch">
          <div className="flex space-x-8">
            <div className="flex space-x-2 items-center">
              <span className="text-grayText text-xs">Transctions</span>
              <h4 className="text-xl text-text font-bold">7.5m</h4>
            </div>
            <div className="flex space-x-2 items-center">
              <span className="text-grayText text-xs">Withdrawal</span>
              <h4 className="text-xl text-text font-bold">2m</h4>
            </div>
            <div className="flex space-x-2 items-center">
              <span className="text-grayText text-xs">Transfer</span>
              <h4 className="text-xl text-text font-bold">2.45m</h4>
            </div>
            <div className="flex space-x-2 items-center">
              <span className="text-grayText text-xs">Convert</span>
              <h4 className="text-xl text-text font-bold">3.12m</h4>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="bg-card shadow-[0px_15px_20px_1px_#0000000d] px-[57px] py-[41px] max-md:px-6 max-md:py-8 max-sm:px-5 max-sm:py-5 rounded-[12px] my-[23px]  mx-auto">
        <div className="flex items-center justify-between max-2xl:flex-col max-2xl:space-y-2">
          <div className="flex [&>div]:flex [&>div]:items-center  max-xl:flex-col max-xl:space-y-3 max-xl:items-start max-2xl:justify-between max-2xl:w-full text-[14px] items-center text-grayText ">
            <div className="max-lg:w-full max-lg:justify-between">
              <span className="font-bold text-grayText mr-[7px]">
                Merchant Name:
              </span>
              <div className="w-[214px] max-sm:w-[177px] max-xl:w-10/12 px-[14px] max-lg:mr-0 bg-grayLight mr-[32px] rounded-[12px] py-[7px]">
                <input
                  type="text"
                  placeholder="Enter a name..."
                  className="bg-transparent w-full"
                />
              </div>
            </div>
            <div className="max-lg:w-full max-lg:justify-between">
              <span className="font-bold text-grayText  mr-[7px]">
                Merchant Name:
              </span>
              <div className="w-[214px] px-[14px] max-sm:w-[177px] max-lg:mr-0 max-xl:w-10/12 bg-grayLight mr-[32px] rounded-[12px] py-[7px]">
                <input
                  type="text"
                  placeholder="Enter a name..."
                  className="bg-transparent w-full"
                />
              </div>
            </div>
            <div className="max-lg:w-full max-lg:justify-between">
              <span className="font-bold text-grayText mr-[7px]">Sort by:</span>
              <div className="w-[165px] max-xl:w-10/12 max-sm:w-[177px]">
                <SelectPlugin options={[]} defaultValue={0} />
              </div>
            </div>
          </div>
          <div className="w-[246px] max-2xl:w-full ">
            <InputSearch placeHolder="Search..." />
          </div>
        </div>
        <div className="max-xl:flex hidden  flex-col">
          {merchants?.data?.map((value: any, index: number) => (
            <MerchantItemResposive
              {...value}
              index={index}
              key={index}
              refreshList={handleGetMerchants}
            />
          ))}
        </div>
        <table className="w-full max-xl:hidden mt-[31px]">
          <thead>
            <tr className="text-[12px] text-grayText font-bold text-center">
              <th className="w-[70px] text-left"></th>
              <th className="w-[165px] text-left">Merchant Name</th>
              <th>Transaction</th>
              <th className="">Withdrawal</th>
              <th className="">Transfer</th>
              <th>Convert</th>
              <th className="w-[159px]">Total revenue</th>
              <th className="w-[159px]">Total volume of transactions</th>
              <th className="w-[98px]">Date</th>
              <th className="w-[191px] text-left pl-[40px]">Made by</th>
              <th className="w-[55px]"></th>
              <th className=""></th>
            </tr>
          </thead>
          <tbody>
            {merchants?.data?.map((value: any, index: number) => (
              <MerchantItem
                {...value}
                index={index}
                key={index}
                refreshList={handleGetMerchants}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Merchant;
