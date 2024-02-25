import { HeaderRoutesLocalization } from "@/configs/routes";
import { usePathname } from "next/navigation";
import { BiSolidChevronDown } from "react-icons/bi";
import { HiOutlineBell } from "react-icons/hi";
import { LiaWalletSolid } from "react-icons/lia";
import dynamic from "next/dynamic";

const UserInfo = dynamic(() => import('./UserInfo'), { ssr: false })

const Header: React.FC = () => {
  const pathname = usePathname();
  return (
    <div className="items-center justify-between pt-6 flex max-md:justify-center">
      <span className="text-3xl font-bold max-md:text-lg">
        {HeaderRoutesLocalization[pathname]}
      </span>
      <div className="flex items-center justify-between max-lg:hidden">
        {!pathname.includes("admin") && (
          <>
            <div className="bg-card flex items-center justify-center border-[1px] border-[#E1E1E1] border-solid rounded-[12px] w-[170px] h-[40px]">
              <div className="flex items-center justify-center">
                <LiaWalletSolid />
              </div>
              <span className="flex items-center justify-center text-[14px] font-[700] ml-[3px]">
                Personal wallet
              </span>
            </div>
            <div className="border-r-[1px] p-r-4 border-[#E1E1E1] border-solid h-[39px] mx-[10px]"></div>
          </>
        )}
        <div className="font-[700] px-[5px] w-[81px] h-[40px] bg-card_shade rounded-[12px] flex items-center justify-between">
          <div></div>
          <span>EN</span>
          <div>
            <BiSolidChevronDown />
          </div>
        </div>
        <div className="relative text-[23px] w-[40px] h-[40px] bg-card_shade rounded-[12px] ml-[6px] flex items-center justify-center">
          <HiOutlineBell />
          <div className="absolute left-[4px] top-[-5px] bg-[red] rounded-full w-[15px] h-[15px] flex items-center justify-center">
            <span className="font-[700] text-card text-[10px] flex items-center justify-center">
              5
            </span>
          </div>
        </div>
        <div className="border-r-[1px] p-r-4 border-[#E1E1E1] border-solid h-[39px] mx-[10px]"></div>
        <UserInfo/>
      </div>
    </div>
  );
};

export default Header;
