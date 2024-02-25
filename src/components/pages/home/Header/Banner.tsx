import Image from "next/image";
import BannerImage from "../../../../assets/Banner.png";
import Button from "../UI/Button";
import Link from "next/link";
const Banner = () => {
  return (
    <section className="flex justify-between max-md:flex-col max-md:items-center max-md:text-center max-md:space-y-10 text-left">
      <div className="flex flex-col justify-between py-10 max-w-[475px] max-md:max-w-none">
        <div className="text-text">
          <h4 className="text-sm max-lg:text-[13px] max-md:text-[10px] font-normal">
            FAST. CONVENIENT. SECURE.
          </h4>
          <h1 className="text-[52px] max-md:text-[32px] font-bold leading-none">
            Payment Gateway On Your{" "}
            <span className="text-primary">Website</span>
          </h1>
          <h5 className="text-sm max-lg:text-[12px] font-normal w-4/5 max-md:w-full">
            Grow your business with a gateway that will save you time and money
          </h5>
        </div>
        <div className="space-y-2 max-md:hidden pb-8">
          <div className="space-x-2">
            <Link href={"/auth/signup"}>
              <Button lable="Sing up now" />
            </Link>
            <Link href={"/"}>
              <Button lable="Talk to Sales" primary />
            </Link>
          </div>
          <div className="text-xs max-lg:text-[10px] text-text">
            Sign up for free in 2 clicks • Easy setup in 2 minutes •<br />{" "}
            Tech support 24/7
          </div>
        </div>
      </div>
      <div className="w-[800px] max-xl:w-[600px] max-lg:w-3/6 max-md:w-4/6 max-sm:w-5/6">
        <Image alt="Line gatepay Banner" src={BannerImage} />
      </div>

      <div className="space-y-2 hidden max-md:block">
        <div className="space-x-2 max-md:flex max-md:items-center max-md:justify-between">
          <Button lable="Sing up now" />
          <Button lable="Talk to Sales" primary />
        </div>
        <div className="text-xs max-lg:text-[10px] text-text">
          Sign up for free in 2 clicks • Easy setup in 2 minutes •<br />{" "}
          Tech support 24/7
        </div>
      </div>
    </section>
  );
};

export default Banner;
