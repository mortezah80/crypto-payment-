import React from "react";
import { CiMonitor } from "react-icons/ci";

import { BiChevronUp } from "react-icons/bi";
import ResponseScheme from "./responseScheme/";
import Message from "../ui/message";
import { MdMoreVert } from "react-icons/md";

const Biling = () => {
  return (
    <div className="pb-[50px] flex flex-col items-start px-[15px] sm:pl-[43px] xl:pr-[120px] pt-[37px] text-[14px] max-sm:text-[12px] font-bold text-grayText ">
      <div className="flex items-center">
        <div className="w-[69px] min-w-[69px] min-h-[69px]   sm:w-[65px] h-[69px] sm:h-[65px] flex items-center justify-center text-[40px] text-primary bg-primary_light rounded-[12px]">
          <div className="border-[3.5px] border-solid w-[30px] h-[30px] text-[25px] rounded-[7px] flex items-center justify-center text-primary border-primary">
            <MdMoreVert />
          </div>
        </div>
        <div className="flex flex-col items-start ml-[12px]">
          <span className="text-[32px] text-primary max-sm:text-[22px]">
            Biling Information
          </span>
          <span className="">
            To simplify REST API requests Plisio uses HTTP GET method only and
            returns JSON format only.
          </span>
        </div>
      </div>
      <span className="text-[22px] mt-[40px] text-text">Peyload</span>
      <span className="mb-[10px]">
        To simplify REST API requests Plisio uses HTTP GET method only and
        returns JSON format only.
      </span>
      <Message
        type="green"
        message="https://plisio.net/api/v1/api/v1/api/v1/api/v1"
      />
      <span className="text-[22px] text-text mt-[34px]">Red Message</span>
      <span className="mt-[7px]">
        Weve made an open source library and plugins available for the API.
      </span>
      <span className="mt-[20px] mb-[11px]">
        Before you start using Plisio API, you must be registered and Site
        settings set up under account/api page to get your personal SECRET_KEY.
        This secret key will be used with all API calls.
      </span>
      <Message
        type="red"
        message="https://plisio.net/api/v1/api/v1/api/v1/api/v1"
      />
      <span className="text-[22px] text-text mt-[33px]">Responses</span>
      <div className="px-[21px] h-[36px] rounded-[12px] mt-[20px] bg-greenAlertBack text-greenAlert w-full flex items-center justify-between">
        <span className="">200 Success</span>
        <div className="text-[25px]">
          <BiChevronUp />
        </div>
      </div>
      <div className="w-full flex items-center justify-between mt-[26px]">
        <span>Response Schema:</span>
        <span className="text-text">application/json</span>
      </div>
      <div className="mt-[6px] space-y-[7px] w-full">
        <ResponseScheme
          title="Number <double>"
          description="The total of any un-billed charges"
          total="unbilled total"
        />
        <ResponseScheme
          title="Number <double>"
          description="The total of any un-billed charges"
          total="unbilled total"
        />
        <ResponseScheme
          title="Number <double>"
          description="The total of any un-billed charges"
          total="unbilled total"
        />
        <ResponseScheme
          title="Number <double>"
          description="The total of any un-billed charges"
          total="unbilled total"
        />
      </div>
      <div className=" mt-[22px] px-[21px] h-[36px] rounded-[12px] bg-redAlterBack text-redAlert w-full flex items-center justify-between">
        <span className="">401 Unauthorized</span>
      </div>
    </div>
  );
};

export default Biling;
