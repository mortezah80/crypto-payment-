"use client";
import WebsiteLayout from "@/components/layout/website";
import Image from "next/image";
import banner from "$/public/images/personal-page-banner.png";
import { PERSONAL_BANNER_CARD_ITEMS } from "@/configs/personal-banner-card-items";
import { PERSONAL_SECURITY_CARD_ITEMS } from "@/configs/personal-security-card-items";
import { CRYPTOCURRENCIES } from "@/configs/cryptocurrencies";
import { useState } from "react";
import BusinessImage from "$/public/images/business-image.png";
import QuestionAcr from "@/components/pages/pricing/question";
import securityBackground from "$/public/images/personal-cryptocurrencies-background.png";
import smallSecurityBackground from "$/public/images/small-personal-cryptocurrencies-background.png";

const Personal = () => {
  const [isCoinsViewMore, setIsCoinViewMore] = useState(false);

  return (
    <WebsiteLayout>
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-center gap-5 relative bg-[#0B63AB] h-[550px] pt-20 mb-28 max-xl:h-[1100px] max-md:h-[750px] max-md:mt-20">
          <Image
            src={banner}
            alt="banner"
            width={600}
            height={670}
            className="absolute -bottom-[170px] left-[14%] max-2xl:left-[5%] max-xl:left-auto max-xl:top-10 max-md:-top-16 max-md:left-auto"
          />
          <div className="flex flex-col gap-12 w-full max-w-[730px] absolute top-20 right-[14%] max-2xl:right-[5%] max-xl:items-center max-xl:-bottom-[90px] max-xl:top-auto max-xl:right-auto max-md:top-[550px]">
            <div className="flex flex-col gap-3 max-w-[675px] max-xl:text-center max-xl:items-center">
              <h2 className="text-[42px] font-bold text-white max-md:text-[22px] px-2">
                A simple and secure way to buy and sell cryptocurrency
              </h2>
              <button className="w-[140px] h-9 bg-gold rounded-[12px] flex justify-center items-center text-text text-sm font-bold">
                Get Started
              </button>
            </div>
            <ul className="w-full flex flex-wrap gap-[10px] max-md:gap-2 max-md:justify-center max-md:px-2">
              {PERSONAL_BANNER_CARD_ITEMS.map((i) => (
                <li
                  key={i.title}
                  className="w-[235px] h-[170px] py-6 px-7 rounded-[18px] bg-grayLight flex flex-col items-center gap-1 max-md:w-[163px] max-md:h-auto max-md:p-5"
                >
                  <span className="text-base font-bold text-primary max-md:text-sm">
                    {i.title}
                  </span>
                  <p className="text-center text-xs max-md:text-[10px]">
                    {i.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 relative w-full py-16 min-h-[552px] max-md:mt-96">
          <Image
            src={smallSecurityBackground}
            alt="gray-curved-background"
            className="absolute top-0 h-full -z-10 w-full max-h-full md:hidden"
          />
          <Image
            src={securityBackground}
            alt="gray-curved-background"
            className="absolute top-0 h-full -z-10 w-full max-h-full max-md:hidden"
          />
          <h3 className="text-[32px] font-bold text-text leading-none">
            Security
          </h3>
          <p className="font-bold text-grayText leading-none">
            How to protect your data
          </p>
          <ul className="flex justify-center items-center gap-4 w-full flex-wrap max-sm:px-4">
            {PERSONAL_SECURITY_CARD_ITEMS.map((i) => (
              <li
                key={i.title}
                className="flex flex-col items-center gap-2 w-[250px] h-[300px] text-center rounded-[18px] bg-white shadow-[0px_40px_40px_-10px_#0000001a] p-[38px] max-sm:w-full"
              >
                <div className="text-primary">{i.icon}</div>
                <span className="text-lg font-bold text-primary pt-1">
                  {i.title}
                </span>
                <p className="text-sm font-bold text-text">{i.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center w-full py-16 px-4 max-sm:text-center">
          <h3 className="text-[32px] text-text font-bold max-sm:text-lg">
            At CoinGate we support +70 cryptocurrencies
          </h3>
          <p className="text-grayText font-bold text-base">
            The wide varity of crypto is offered at Coingate and if you not find
            a currency which you want to buy or want to sell just write us.
          </p>
          <ul className="flex flex-wrap gap-4 items-center justify-center w-full max-w-[65%] py-12 max-2xl:max-w-none">
            {isCoinsViewMore
              ? CRYPTOCURRENCIES.map((i) => (
                  <li
                    key={i.title}
                    className="w-[230px] h-[90px] rounded-[12px] bg-white shadow-[0px_40px_40px_-10px_#0000001a] p-1 flex items-center max-sm:w-full"
                  >
                    <div className="w-[100px] h-[100px] flex justify-center items-center mt-7">
                      {i.icon}
                    </div>
                    <div className="flex flex-col -ml-4">
                      <span className="text-lg text-text font-bold">
                        {i.title}
                      </span>
                      <span className="text-sm font-bold text-grayText">
                        {i.description}
                      </span>
                    </div>
                  </li>
                ))
              : CRYPTOCURRENCIES.slice(0, 10).map((i) => (
                  <li
                    key={i.title}
                    className="w-[230px] h-[90px] rounded-[12px] bg-white shadow-[0px_40px_40px_-10px_#0000001a] p-1 flex items-center max-sm:w-full"
                  >
                    <div className="w-[100px] h-[100px] flex justify-center items-center mt-7">
                      {i.icon}
                    </div>
                    <div className="flex flex-col -ml-4">
                      <span className="text-lg text-text font-bold">
                        {i.title}
                      </span>
                      <span className="text-sm font-bold text-grayText">
                        {i.description}
                      </span>
                    </div>
                  </li>
                ))}
          </ul>
          <button
            onClick={() => setIsCoinViewMore(!isCoinsViewMore)}
            type="button"
            className="w-[200px] h-10 rounded-[12px] bg-primary text-white flex justify-center items-center text-sm font-bold"
          >
            {isCoinsViewMore ? "View Less" : "View More"}
          </button>
        </div>
        <div className="w-screen bg-card_shade flex flex-col items-center justify-center py-10">
          <div className="max-w-7xl flex flex-col items-center gap-10">
            <div className="flex flex-col items-center">
              <h3 className="text-[32px] font-bold">LINE GatePay Blog</h3>
              <p>Follow the latest company’s news and announcements</p>
            </div>
            <ul className="w-full flex justify-between gap-8 mt-10 max-xl:flex-wrap">
              {[1, 2, 3].map((i) => (
                <li
                  key={i}
                  className="w-full max-w-[400px] max-md:max-w-full p-8 font-bold flex flex-col gap-3 group hover:shadow-5xl duration-300  rounded-3xl bg-card relative"
                >
                  <Image alt="" src={BusinessImage} className="-mt-20" />
                  <h5 className=" group-hover:text-primary">
                    How Crypto Payments Solutions Are Transforming Online
                    Shopping
                  </h5>
                  <p className="text-xs text-grayText">
                    Despite their relatively short existence, cryptocurrencies
                    have left a significant…
                  </p>
                  <footer className="flex items-center justify-between mt-8">
                    <span className="text-xs text-grayText">
                      Augest 11, 2023
                    </span>
                    <button className="text-sm border-2 border-primary px-6 py-2 text-primary rounded-xl">
                      Read More
                    </button>
                  </footer>
                </li>
              ))}
            </ul>
            <button className="text-sm text-white bg-primary px-8 py-2 rounded-xl">
              Read More
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center py-16">
          <h1 className="text-[32px] text-text font-bold text-center">
            Common questions about the Business
          </h1>
          <span className="text-grayText text-[14px] text-center w-full">
            If you can&apos;t find the answer to your question here, visit the
            dedicated section in our Help Center.
          </span>
          <div className="max-w-[1300px] w-full m-auto space-y-2 mt-[22px]">
            <QuestionAcr
              Label="How Crypto Payments Solutions Are Transforming Online Shopping"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum."
            />
            <QuestionAcr
              Label="How Crypto Payments Solutions Are Transforming Online Shopping Payments Solutions"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum."
            />
            <QuestionAcr
              Label="How Crypto Payments Solutions"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum."
            />
            <QuestionAcr
              Label="How Crypto Payments Solutions Are Transforming Online Shopping"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum."
            />
          </div>
        </div>
      </div>
    </WebsiteLayout>
  );
};

export default Personal;
