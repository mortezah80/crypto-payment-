import FeatureItem from "../UI/FeatureItem";
import NeedItem from "../UI/NeedItem";
import CoinRow from "./CoinRow";

import TagPrice from "../../../../assets/Tag Price.svg";
import Restart from "../../../../assets/Restart Square.svg";
import Eye from "../../../../assets/Eye Scan.svg";
import Vector from "../../../../assets/Vector.svg";
import { needs } from "../db/Need";
import NeedsGripResponsive from "./NeedsGripResponsive";
import AddIcon from "$/public/icons/add.svg";
import circleImage from "$/public/images/gold-strip-circle.png";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <section className="relative space-x-4 max-md:flex-col max-md:space-x-0 max-md:space-y-4 flex justify-between items-center">
        <div className="flex gap-5 absolute -left-5 -top-8 -z-10">
          <Image src={circleImage} alt="gold-strip-circle" className="" />
          <div className="text-primary">
            <AddIcon />
          </div>
        </div>
        <FeatureItem
          Icon={Eye}
          lable="Privacy"
          subLable="No proof of identity needed; we don’t keep transaction details"
        />
        <FeatureItem
          Icon={TagPrice}
          lable="Mass Payouts"
          subLable="Pool all your transactions together"
          active="saving 80% on fees"
        />
        <FeatureItem
          Icon={Restart}
          lable="0% chargeback"
          subLable="Transactions cannot be canceled or reversed on Blockchain"
        />
      </section>
      <section className="mt-10 max-md:mt-10 text-center">
        <h3 className="text-text text-[18px] max-md:text-[14px] font-bold">
          Accept <span className="text-primary">15+ Supported Coins</span>{" "}
          on Your Website
        </h3>
        <div className="w-[130%] max-md:w-[100%] relative m-auto -left-[15%] max-md:left-0 mt-10">
          <div className="absolute bg-gradient-to-r from-background -top-4 bottom-0 -left-10 max-md:-left-20 max-md:w-[55%] w-[20%] z-10 ">
          </div>
          <div className="absolute bg-gradient-to-l from-background -top-4 bottom-0 -right-10 max-md:-right-20 max-md:w-[55%] w-[20%] z-10 ">
          </div>
          <CoinRow />
        </div>
      </section>
      <section className="flex max-md:flex-col max-md:text-center justify-between items-center max-md:mt-2 mt-0  pt-[60px] pb-[90px]">
        <div className="space-y-4 w-1/4 max-xl:w-5/12 max-lg:w-4/12 max-md:w-full max-md:flex max-md:justify-center max-md:flex-col max-md:items-center">
          <Vector className="max-md:w-[52px]" />
          <h2 className="text-text font-bold text-[22px] max-md:text-[14px] max-md:w-4/6">
            Crypto Payment Gateway for All Kinds of Needs
          </h2>
          <span className="text-sm font-normal block max-md:text-[12px] max-md:w-5/6">
            Customize Plisio API to meet your business demands and become part
            of the market with $300 billion+ turnover.
          </span>
        </div>
        <div className="p-16 max-xl:p-8 max-lg:p-4 grid grid-cols-6 max-xl:grid-cols-4 gap-x-3 gap-y-5 max-md:hidden">
          {needs.map((value, index) => {
            return (
              <NeedItem
                label={value.label}
                key={index}
                Icon={value.Icon}
                color={(index % 2 === 0 && index < 6) ||
                    (index >= 6 && index % 2 === 1)
                  ? "#1093FF"
                  : "#F6BF53"}
                background={(index % 2 === 0 && index < 6) ||
                    (index >= 6 && index % 2 === 1)
                  ? "#E0F1FF"
                  : "#FBF2DF"}
              />
            );
          })}
        </div>

        <div className="hidden max-md:block w-full my-3">
          <NeedsGripResponsive />
        </div>
      </section>
    </>
  );
};

export default Features;
