import Banner from "@/components/pages/home/Header/Banner";
import Features from "@/components/pages/home/Sections/Features";
import Code from "@/components/pages/home/Code/Code";
import Boost from "@/components/pages/home/Boost/Boost";
import Advantages from "@/components/pages/home/Advantages/Advantages";
import Develop from "@/components/pages/home/Develop/Develop";
import Footer from "@/components/pages/home/Footer/Footer";
import Register from "@/components/pages/home/Register/Register";
import Background from "@/assets/BACKGROUND.svg";
import Navbar from "@/components/pages/home/Header/Navbar";
import { FaCircleChevronUp } from "react-icons/fa6";
import { BiMessageDetail } from "react-icons/bi";
import Link from "next/link";

const Home = () => {
  return (
    <div className="relative m-auto overflow-hidden cursor-default">
      <Background className="absolute overflow-hidden -top-20 right-0 w-8/12 -z-10" />
      <header id="main" className="space-y-14 mt-4 max-w-[1280px] m-auto px-5">
        <Navbar />
        <Banner />
      </header>
      <main className="max-w-[1280px] m-auto grid grid-cols-1 gap-y-10 px-5 mt-10">
        <Features />
      </main>
      <div className="bg-[#FAFAFA]  py-[100px] px-5 ">
        <Code />
      </div>
      <div className="bg-[#F5F5F5] py-[50px] px-5">
        <Boost />
      </div>
      <div className="bg-[#FAFAFA] space-y-[80px] pt-[80px] pb-[20px] px-5">
        <Advantages />
        <Develop />
        <Register />
      </div>

      <footer className="w-full bg-card_shade px-5">
        <Footer />
        <div className=" w-full max-w-[1480px] m-auto text-gold text-[28px] flex items-center justify-end pb-[33px] mt-[-33px] pr-[10px] max-sm:justify-center max-sm:mt-[0px]">
          <Link href={"#main"}>
            <FaCircleChevronUp />
          </Link>
          <div className="text-[23px] ml-[139px] bg-primary text-white rounded-[12px] p-[7px] max-sm:hidden">
            <BiMessageDetail />
          </div>
        </div>
      </footer>
      <div className="w-full bg-card px-5 py-[16px]">
        <div className="max-w-[1280px] flex items-center justify-end m-auto sm:grid-cols-2 px-[15px] sm:px-[0px] gap-y-10 text-[12px]">
          <span>© 2023 Titbull, Inc. All Rights Reserved.</span>
        </div>
      </div>
    </div>
  );
};
export default Home;
