"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dot from "$/public/icons/dot.svg";
import Icon_1 from "$/public/icons/business/1.svg";
import Icon_2 from "$/public/icons/business/2.svg";
import Icon_3 from "$/public/icons/business/3.svg";
import Icon_4 from "$/public/icons/business/4.svg";
import Icon_5 from "$/public/icons/business/5.svg";
import Icon_6 from "$/public/icons/business/6.svg";
import PluginsIcon from "$/public/icons/business/plugins.svg";
import LibraryIcon from "$/public/icons/business/libraries.svg";
import LeftArr from "$/public/icons/business/leftArrow.svg";
import RightArr from "$/public/icons/business/rightArrow.svg";
import Logo from "$/public/images/logo.svg";
import BusinessImage from "$/public/images/business-image.png";

import P1 from "../../assets/Icons/01.svg";
import P2 from "../../assets/Icons/02.svg";
import P3 from "../../assets/Icons/03.svg";
import P4 from "../../assets/Icons/04.svg";
import P5 from "../../assets/Icons/05.svg";
import P6 from "../../assets/Icons/06.svg";
import P7 from "../../assets/Icons/07.svg";
import P9 from "../../assets/Icons/09.svg";
import P10 from "../../assets/Icons/010.svg";
import P11 from "../../assets/Icons/011.svg";

import Image_1 from "$/public/images/01.png";
import Image_2 from "$/public/images/02.png";
import Image_3 from "$/public/images/03.png";
import Image_4 from "$/public/images/04.png";

import WebsiteLayout from "@/components/layout/website";
import Image from "next/image";
import IconCard from "@/components/pages/home/UI/IconCard";
import Slider from "react-slick";
import { Container } from "@mui/system";
import QuestionAcr from "@/components/pages/pricing/question";

const BUSINESS_START_BENEFITS_1 = [
  " Quick crypto transactions",
  "Integration help",
  "Personal account manager & Fast support service",
  "Low commission from 0.4 %",
];
const BUSINESS_START_BENEFITS_2 = [
  " Instant withdrawals",
  "All major crypto currencies available",
  "Withdraw euro directly to your bank account",
  "Only 0.5 % the lowest fee on the market",
];

const BUSINESS_CARD_SHADES = [
  {
    title: "No hidden fees",
    content: "Only 1 % for processing.Thats it",
  },
  {
    title: "Crypto to fiat",
    content: "Accept crypto and store on multiple fiat wallets",
  },
  {
    title: "Tailored to Needs",
    content: "A fully integrated suite of  payment products",
  },
  {
    title: "Transparent",
    content: "Intuitive platform and comprehensive reporting",
  },
  {
    title: "Scalable solution",
    content: "Enjoy multi-user feature an multiple projects under one account",
  },
];

const BUSINESS_CAPABILITY = [
  {
    icon: <Icon_1 />,
    title: "Transfer between your own accounts",
    disc: "Payments are deposited to Business wallet,from which they can be withdrawn back to your partners or to your Personal wallet.",
  },
  {
    icon: <Icon_2 />,
    title: "Auto-convert",
    disc: "instant exchange of cryptocurrency into stablecoins. We will protect you from the volatility of cryptocurrency",
  },
  {
    icon: <Icon_3 />,
    title: "AML",
    disc: "We support AML (Anti-Money Laundering) policy",
  },
  {
    icon: <Icon_4 />,
    title: "Instant Whitdrawal",
    disc: "Funds, deposited to the account, are instantly ready for whitdrawal.",
  },
  {
    icon: <Icon_5 />,
    title: "Almost any amount of payments is allowed",
    disc: "You choose the minimum amount of payment on your own, as far as the blockchain allows. And all this is for the same fee!",
  },
  {
    icon: <Icon_6 />,
    title: "The selecton is wide",
    disc: "invoice your clients the way you prefer: with API, widgets, payment page, static address, invoice link, plugins.",
  },
];

const BUSINESS_INTEGRATION = [
  { image: Image_1, title: "Set up Account" },
  {
    image: Image_2,
    title: "Choose your integration",
  },
  {
    image: Image_3,
    title: "Place pay button on your website",
  },
  { image: Image_4, title: "Get Profit" },
];

const coinsImages = [
  P1,
  P2,
  P3,
  P4,
  P5,
  P6,
  P7,
  P9,
  P10,
  P11,
  P1,
  P2,
  P3,
  P4,
  P5,
  P6,
  P7,
  P9,
  P10,
  P11,
];

const Business = () => {
  const settings = {
    infinite: true,
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <RightArr />,
    prevArrow: <LeftArr />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
          focusOnSelect: true,
        },
      },
    ],
  };

  return (
    <WebsiteLayout>
      <Container maxWidth="xl">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col gap-6 px-28 py-16 bg-business-hero bg-no-repeat bg-[100%_100%] bg-cover text-white font-bold rounded-3xl overflow-hidden">
            <h1 className="text-[42px] max-w-[470px] ">
              Start Accepting Crypto Payments NOW
            </h1>
            <div className="flex pr-24">
              <ul className="flex flex-wrap gap-y-3 text-sm flex-grow">
                {BUSINESS_START_BENEFITS_1.map((i) => (
                  <li key={i} className="w-full flex items-center gap-1">
                    <Dot className="#F7BF53" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-wrap gap-y-3 text-sm flex-grow">
                {BUSINESS_START_BENEFITS_2.map((i) => (
                  <li key={i} className="w-full flex items-center gap-1">
                    <Dot className="#F7BF53" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ul className="max-w-7xl flex gap-2 -translate-y-1/4">
            {BUSINESS_CARD_SHADES.map((i) => (
              <li
                className="max-w-[210px] text-center bg-card rounded-2xl py-8 px-6"
                key={i.title}
              >
                <div className="flex flex-col gap-2">
                  <h5 className="font-bold">{i.title}</h5>
                  <p className="text-xs">{i.content}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="max-w-7xl text-center py-10">
            <h3 className="text-[32px] font-bold">Capabilities Business</h3>
            <ul className="flex flex-wrap gap-2 mt-5">
              {BUSINESS_CAPABILITY.map((i) => (
                <li
                  className="w-full flex flex-col gap-4 max-w-[420px] max-xl:max-w-[48%] max-md:max-w-full p-8 bg-inherit border-[1px] border-borderGray rounded-2xl hover:bg-white hover:shadow-4xl transition-all"
                  key={i.title}
                >
                  <header className="flex items-center gap-3">
                    <span className="p-3 bg-card_light rounded-xl">
                      {i.icon}
                    </span>
                    <span className="text-primary text-lg font-bold">
                      {i.title}
                    </span>
                  </header>
                  <div>{i.disc}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-screen flex flex-col items-center bg-white py-12 ">
            <div className="max-w-7xl flex flex-col items-center gap-10">
              <div className="flex flex-col items-center">
                <h3 className="text-[32px] font-bold">
                  Easy Integration and Setup
                </h3>
                <p>Accept crypto payment and donation</p>
              </div>
              <ul className="flex gap-5">
                {BUSINESS_INTEGRATION.map((i, index) => (
                  <li
                    key={i.title}
                    className="w-full bg-[#fafafa] max-w-[310px] flex flex-col items-center p-4 rounded-2xl"
                  >
                    <div className="w-[68px] h-[68px] leading-10 font-bold text-center bg-card_light text-primary p-3 rounded-full text-[42px] -translate-y-11">
                      {index + 1}.
                    </div>
                    <Image src={i.image} alt="image" width={270} height={270} />
                    <p className="text-lg font-bold -translate-y-1/2 text-center">
                      {i.title}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                <div className="flex flex-col gap-2 px-[70px] py-10 bg-no-repeat bg-cover bg-business-card-bg-2 rounded-2xl">
                  <span className="text-white flex gap-2 font-bold text-xl items-center">
                    <PluginsIcon />
                    Plugin
                  </span>
                  <p className="text-black w-1/2 text-sm font-bold leading-6">
                    Downloading the plugin for your preferes e-commerce platform
                    and instal it with a clicks.
                  </p>
                </div>
                <div className="flex flex-col gap-2 px-[70px] py-10 bg-no-repeat bg-cover bg-business-card-bg-1 rounded-2xl">
                  <span className="text-white flex gap-2 font-bold text-xl items-center">
                    <LibraryIcon />
                    Libraries
                  </span>
                  <p className="text-black w-1/2 text-sm font-bold leading-6">
                    Plain yet perfect solution for accepting simple payments and
                    collecting donations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between max-w-7xl py-20">
            <div className="flex flex-col gap-4 w-full max-w-[570px]">
              <div className="text-[42px] pr-20 font-bold">
                <div>70+</div>
                <h1>CryptoCurrencies Supported</h1>
              </div>
              <p className="text-grayText">
                Every cryptocurreny is now a payment curreny. That’s why we
                allow businesses to accept as many as they can, so they wouldn’t
                miss the gold rush when it’s happening.
              </p>
              <button className="text-white bg-primary w-[140px] px-3 py-2 rounded-xl mt-16">
                View All
              </button>
            </div>

            <ul className="flex w-full flex-wrap gap-2 max-w-[650px]">
              {coinsImages.slice(0, 12).map((i, index) => (
                <li className="w-[150px] h-[150px]" key={index}>
                  <IconCard Icon={i} />
                </li>
              ))}
            </ul>
          </div>
          <div className="max-w-7xl flex flex-col items-center gap-10">
            <div className="flex flex-col items-center">
              <h3 className="text-[32px] font-bold">Plugins</h3>
              <p>
                To simplify REST API requests Plisio uses HTTP GET method only
                and returns JSON format only.
              </p>
            </div>
            <ul className="w-full">
              <Slider className="w-full py-8" {...settings}>
                {[1, 2, 3, 4, 6, 7].map((value, index) => (
                  <div key={index} className="px-2 pt-12">
                    <div className="p-8 pt-14 bg-white rounded-2xl flex flex-col items-center justify-center relative">
                      <span className="border-8 border-grayLight rounded-full absolute -top-14 left-1/2 -translate-x-1/2 shadow-3xl-d">
                        <Logo />
                      </span>
                      <h5 className="font-bold">Prestashop</h5>
                      <p className="text-xs font-bold text-grayText">
                        Categories
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </ul>
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

          <div className="w-full flex flex-col items-center gap-10 py-16">
            <div className="w-full flex flex-col items-center">
              <h3 className="text-[32px] font-bold">
                Common questions about the Business
              </h3>
              <p>
                If you cant find the answer to your question here, visit the
                dedicated section in our Help Center.
              </p>
              <div className="w-full space-y-2 mt-[22px]">
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
        </div>
      </Container>
    </WebsiteLayout>
  );
};

export default Business;
