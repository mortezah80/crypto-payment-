import Logo from "@/assets/logo-white.svg";
import MarketSmall from "@/assets/MarketBrandSmall.svg";
import MarketBrand from "@/assets/MarketBrand.svg";
interface HeaderAdminProps {
  name: string;
}
const HeaderAdmin: React.FC<HeaderAdminProps> = ({ name }) => {
  return (
    <div className="flex relative items-center max-lg:flex-col-reverse space-y-2 max-lg:py-3 bg-primary text-white px-16 max-2xl:px-4 py-12 font-bold rounded-xl">
      <div className="flex items-center max-md:flex-col">
        <div className="px-12 border-r-[2px] border-r-white max-lg:max-md:border-none mb-9">
          <Logo />
        </div>
        <div className="flex px-12 max-2xl:px-6 flex-col max-lg:px-0 items-start text-left justify-between max-lg:items-center">
          <span className="font-normal mb-2">
            Dashboard Admin
          </span>
          <h1 className="text-[32px]">
            Hi, {name}
          </h1>
          <span className="text-gold max-lg:hidden">
            Welcome to the dashboard
          </span>
        </div>
      </div>
      <div className="absolute right-16 max-lg:relative max-lg:top-0 max-xl:top-12 max-2xl:right-4 -top-3">
        <MarketSmall className="max-xl:block hidden" />
        <MarketBrand className="max-xl:hidden" />
      </div>
    </div>
  );
};

export default HeaderAdmin;
