"useClient";
import React from "react";
import { useState } from "react";
import CodeContainer from "./codeContainer";

const CodeDark = () => {
  const [item, setItem] = useState("Curl");
  return (
    <div className="bg-text  py-[30px] px-[35px] max-xl:px-[35px] text-[12px] lx:text-[14px] rounded-[18px] flex flex-col w-full relative">
      <div>
        <ul className="flex items-center text-grayText w-full p-[0px] m-[0px] max-h-[400px]">
          {["Curl", "Ruby", "Python", "PHP", "Java"].map((i) => (
            <li
              key={i}
              onClick={() => setItem(i)}
              className={`px-3 pb-2 cursor-pointer border-b-4 border-b-solid 
                  ${item == i ? "border-b-primary" : "border-b-transparent"}
                `}
            >
              {i}
            </li>
          ))}
        </ul>
        <div className="w-full border-t-[1px] border-t-solid border-t-grayText opacity-[30%]"></div>
        <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-text h-[60px] rounded-tr-[18px]"></div>
      </div>
      <span className="text-card mt-[25px]">Request Sample</span>

      <CodeContainer
        normal="https://"
        green="plisio.net/api/v1"
        description="REST API URL common part:"
      />

      <CodeContainer
        normal="https://plisio.net/api/v1/"
        green="<action>?api_key=<SECRET_KEY>"
        description="Simple API call looks like this:"
      />
      <CodeContainer
        normal="curl -v -X GET"
        green=" https://plisio.net/api/v1/operations  ?api_key=<SECRET_KEY>  &page=3  &page_size=4 \ -H 'Content-Type: application/json'"
        description="This sample request lists transactions/invoices:"
      />
      <CodeContainer
        normal=""
        description="Sample balance response:"
        green='{  "status": "success",  "data":    {     "currency": "BTC",     "balance": "0.03351057"    }" description="Sample balance response:'
      />
    </div>
  );
};

export default CodeDark;
