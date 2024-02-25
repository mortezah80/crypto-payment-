import FreeITem from "@/assets/pricing/FreeItem.svg";
import FreeITem2 from "@/assets/pricing/FreeItem_2.svg";
import Commision from "@/assets/pricing/commision.svg";
import Commision2 from "@/assets/pricing/commision2.svg";
import CustomButton from "@/components/common/button";
import Thunder from "@/assets/pricing/Thunder.svg";
import Sheild from "@/assets/pricing/shield.svg";
import Aim from "@/assets/pricing/aim.svg";
import Eye from "@/assets/pricing/eye.svg";
import GlobeEearth from "@/assets/pricing/globe-earth.svg";
import Resize from "@/assets/pricing/resize.svg";
import CapabilitiesItem from "./capabilities";
import Wallet_service from "@/assets/pricing/wallet_service.svg";
import Note_service from "@/assets/pricing/note_service.svg";
import Sheild_service from "@/assets/pricing/sheild_service.svg";
import Life_service from "@/assets/pricing/life-ring.svg";
import Tool_service from "@/assets/pricing/tool.svg";
import ServiceItem from "./Services";
import QuestionAcr from "./question";
const Pricing = () => {
  return (
    <div className="w-full">
      <div className="bg-primary w-full">
        <div className="flex max-w-[1300px]  mx-auto pt-[63px] pb-[135px] max-lg:pb-[80px] max-xl:flex-col max-xl:space-y-4 items-center justify-between">
          <div className="bg-card text-[14px] py-[30px] text-center max-md:w-11/12 font-bold flex items-center max flex-col shadow-[0px_30px_60px_10px_#00000033] w-[421px] rounded-[18px] h-[517px]">
            <div className="flex items-center h-[85px] w-[90px] relative flex-col">
              <FreeITem className="absolute" />
              <FreeITem2 className="absolute bottom-0 right-0" />
            </div>
            <h1 className="text-text mt-[8px] text-[42px]">Free</h1>
            <h4 className="text-primary mt-[43px] max-lg:mt-[20px] text-[18px]">Wallet</h4>
            <span className="font-normal mt-[14px] text-text">
              Safe and secure crypto wallet for personal use
            </span>
            <span className="text-grayText leading-7 mt-[23px]">
              Manage multicurrency wallet <br />
              download the mobile app
              <br />
              Create invoices
            </span>
            <CustomButton
              label="Get a Free Wallet"
              tailwindStyle="px-[57px] mt-[42px] py-[12px] rounded-[12px]"
            />
          </div>
          <div className="bg-card shadow-[0px_30px_60px_10px_#00000033] text-[14px] font-bold flex flex-col items-center py-[30px] px-[77px] max-sm:px-[30px] w-[817px] h-[517px] max-lg:h-auto max-lg:w-10/12 rounded-[18px] max-md:w-11/12">
            <div className="flex items-center  h-[80px] w-[90px] relative flex-col">
              <Commision className="absolute" />
              <Commision2 className="absolute bottom-0 left-0" />
            </div>
            <h1 className="text-[32px] max-lg:text-center max-lg:mt-0 -mt-4 text-text">
              <span className="text-[64px]">2% <br className="hidden max-lg:flex"/></span> Commission Per Transaction
            </h1>
            <div className="flex max-lg:flex-col max-lg:space-x-0 max-lg:text-center space-y-[33px] mt-[32px] items-center space-x-[50px] justify-between">
              <div className="flex flex-col self-stretch justify-between">
                <div className="space-y-[14px]">
                  <h3 className="text-[18px]">Only One Commission</h3>
                  <p className="font-normal text-text w-[380px] max-[550px]:w-[300px]">
                    Our goal is to simplify the process of payment in
                  cryptocurrency, that’s why only charge 2% commission <br className="hidden max-md:flex"/> per
                    transaction:<br className="hidden max-md:flex"/>
                    <br className="max-md:hidden" /> no additional integration commission<br className="hidden max-md:flex"/>
                    <br className="max-md:hidden"/> no hidden charges, no subscripctions or <br className="hidden max-md:flex"/>monthly usage
                    commission.{" "}
                  </p>
                </div>
                <h4 className="text-text leading-[150%]">
                  We make everything easy for the client!
                </h4>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <h3 className="text-primary text-[18px]">Gateway API</h3>
                <span className="text-text font-normal">
                  Top-notch cryptocurrency payment gateway
                </span>
                <h3 className="text-primary text-[18px]">
                  Everything in Wallet
                </h3>
                <span className="text-grayText">
                  Connect payment via API to your website <br />
                  Use Mass Payouts
                </span>
                <CustomButton
                  label="Connect the API"
                  tailwindStyle="px-[57px] mt-[42px] py-[12px] rounded-[12px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full pb-[58px]">
        <div className="max-w-[1300px] relative py-[72px] px-[82px] m-auto max-[610px]:grid-cols-1 max-lg:grid-cols-2 grid grid-cols-3 gap-x-[77px] gap-y-[35px] bg-[#F5F5F5] rounded-[18px]">
          <div className="absolute -top-[29px] left-0 right-0 text-center">
            <div className="text-text m-auto font-bold rounded-[18px] flex items-center justify-center text-[22px] w-[275px] h-[61px] bg-white ">
              <span>Capabilities</span>
            </div>
          </div>
          <CapabilitiesItem
            Icon={Thunder}
            label="Instant Transfers"
            discribtion="Payments received from your customers are sent automatically to your account."
          />
          <CapabilitiesItem
            label="Without any agents"
            discribtion="There are no intermediaries between you and the client. All operations are conducted directly.
"
            Icon={Aim}
          />
          <CapabilitiesItem
            label="Fits Everyone"
            discribtion="It fits businesses of any size and line, regardless of sales."
            Icon={Resize}
          />
          <CapabilitiesItem
            label="No Limits"
            discribtion="Cryptocurrency is popular all over the world and free to use anywheree."
            Icon={GlobeEearth}
          />
          <CapabilitiesItem
            label="Transparency"
            discribtion="Thanks to the Blockchain system, you do not have to worry about fraud."
            Icon={Eye}
          />
          <CapabilitiesItem
            label="Security"
            discribtion="Cryptocurrency offers you the safest and most reliable way to recieve and send payments."
            Icon={Sheild}
          />
        </div>
      </div>
      <div className="bg-[#F5F5F5] pt-[52px] pb-[62px]">
        <h2 className="text-text text-center text-[22px] font-bold">
          What you will get
        </h2>
        <div className="max-w-[1300px] mt-[25px] max-[610px]:gap-x-0 m-auto max-[610px]:grid-cols-1 max-lg:grid-cols-2 max-lg:px-[40px] grid grid-cols-3 gap-x-[27px] gap-y-[43px] max-md:gap-y-[15px]">
          <ServiceItem
            label="Wallet"
            services={[
              "Open a free account",
              "Send and receive payments",
              "Add and withdraw funds",
              "Keep your cryptocurrency and check the rates",
            ]}
            Icon={Wallet_service}
          />
          <ServiceItem
            label="Reporting"
            services={[
              "Open a free account",
              "Send and receive payments",
              "Add and withdraw funds",
              "Keep your cryptocurrency and check the rates",
            ]}
            Icon={Note_service}
          />
          <ServiceItem
            label="Safety"
            services={[
              "Open a free account",
              "Send and receive payments",
              "Add and withdraw funds",
              "Keep your cryptocurrency and check the rates",
            ]}
            Icon={Sheild_service}
          />
          <ServiceItem
            label="Support"
            services={[
              "Open a free account",
              "Send and receive payments",
              "Add and withdraw funds",
              "Keep your cryptocurrency and check the rates",
            ]}
            Icon={Life_service}
          />
          <ServiceItem
            label="Automation"
            services={[
              "Open a free account",
              "Send and receive payments",
              "Add and withdraw funds",
              "Keep your cryptocurrency and check the rates",
            ]}
            Icon={Tool_service}
          />
          <div className="flex pb-[34px] max-md:pl-0 pl-[33px] flex-col items-start max-md:items-center space-y-[20px] justify-end">
            <span className="text-grayText max-md:text-center text-[16px] font-bold">
              These and many other features will be available after signing up
            </span>
            <CustomButton
              label="Get the advantage"
              tailwindStyle="px-[36px] py-[12px] text-[14px] font-bold rounded-[12px]"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA] flex flex-col items-center max-md:py-[40px] py-[72px] space-y-2">
        <h1 className="text-[32px] max-sm:w-8/12 max-md:text-[18px] text-text font-bold text-center">
          Common questions about the Business
        </h1>
        <span className="text-grayText text-[14px] max-md:w-10/12 max-sm:9/12 max-sm:mb-[10px] text-center w-full">
          {
            "If you can't find the answer to your question here, visit the dedicated section in our Help Center."
          }
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
  );
};

export default Pricing;
