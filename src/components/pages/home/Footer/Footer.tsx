import React from "react";

import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between py-[40px] sm:flex-row sm:items-start">
      <div className="flex flex-col items-start w-full sm:w-auto">
        <h6 className="text-[16px] text-primary font-[700] max-sm:text-[14px]">
          Products
        </h6>
        <ul className="grid grid-cols-2 w-full list-disc list-inside mt-[20px] text-[12px] sm:text-[14px]  gap-y-4 sm:grid-cols-1 sm:space-y-4 sm:gap-y-0">
          <Link href={"/business"}>
            <li>Business</li>
          </Link>
          <Link href={"/personal"}>
            <li>Personal</li>
          </Link>
          <Link href={"/"}>
            <li>White Label</li>
          </Link>
          <Link href={"/dashboard"}>
            <li>Invoices</li>
          </Link>
          <Link href={"/dashboard/donation"}>
            <li>Donations</li>
          </Link>
          <Link href={"/dashboard"}>
            <li>Integrations</li>
          </Link>
        </ul>
      </div>
      <div className="w-full sm:w-auto mt-[40px] sm:mt-[0px]">
        <h6 className="text-[16px] text-primary font-[700] max-sm:text-[14px]">
          Resources
        </h6>
        <ul className="list-disc list-inside mt-[20px] text-[12px] sm:text-[14px] grid grid-cols-2 gap-y-4 sm:grid-cols-1 sm:space-y-4 sm:gap-y-0">
          <Link href="/api">
            <li>API</li>
          </Link>
          <Link href="/blog">
            <li>Blog</li>
          </Link>
          <Link href="/">
            <li>Security</li>
          </Link>
          <Link href="/api">
            <li>Bug Bounty</li>
          </Link>
          <Link href="/">
            <li>FAQ</li>
          </Link>
          <Link href="/">
            <li>Contact us</li>
          </Link>
        </ul>
      </div>
      <div className="w-full sm:w-auto mt-[40px] sm:mt-[0px]">
        <h6 className="text-[16px] text-primary font-[700] max-sm:text-[14px]">
          Policy
        </h6>
        <ul className="list-disc list-inside mt-[20px] text-[12px] sm:text-[14px] grid grid-cols-2 gap-y-4 sm:grid-cols-1 sm:space-y-4 sm:gap-y-0">
          <Link href="/">
            <li>Privacy Policy</li>
          </Link>
          <Link href="/">
            <li>Terms of Service</li>
          </Link>
        </ul>
      </div>
      <div className="w-full sm:w-auto mt-[40px] sm:mt-[0px]">
        <h6 className="text-[16px] text-primary font-[700] max-sm:text-[14px]">
          Follow us
        </h6>
        <div className="flex items-center justify-start text-primary text-[30px] mt-[30px] space-x-6 sm:space-x-3 sm:justify-between">
          {
            /* <div>
                        <BsTwitter/>
                        <AiFillInstagram/>
                        <FaFacebook/>
                        <IoLogoGithub/>
                    </div>
                    <div>
                        <AiFillInstagram/>
                    </div>
                    <div>
                        <FaFacebook/>
                    </div>
                    <div>
                        <IoLogoGithub/>
                    </div> */
          }
          <BsTwitter />
          <AiFillInstagram />
          <FaFacebook />
          <IoLogoGithub />
        </div>
      </div>
    </div>
  );
};

export default Footer;
