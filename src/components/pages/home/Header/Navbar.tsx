"use client";
import Link from "next/link";
import BrandIcon from "../../../../assets/Brand.svg";
import CustomDrawer from "./Drawer";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Brand from "@/assets/Brand";
const routes = [
  { name: "Home", url: "/" },
  { name: "Business", url: "/business" },
  { name: "Personal", url: "/personal" },
  { name: "Pricing", url: "/pricing" },
  { name: "Plugins", url: "/plugin" },
  { name: "API", url: "/api/introduction" },
  { name: "Blog", url: "/blog" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="text-text flex justify-between items-center">
      <div className="flex items-center max-md:justify-between max-md:w-full">
        <CustomDrawer />
        <BrandIcon className="max-xl:w-[100px]" />
        <ul className="flex space-x-12 max-xl:space-x-8 max-lg:space-x-6 max-lg:hidden ml-12 max-md:ml-0">
          {routes.map((value, index: number) => {
            return (
              <Link
                href={value.url}
                key={index}
                className={[
                  "font-bold text-sm max-xl:text-[12px] max-lg:text-xs relative cursor-pointer",
                  pathname === value.url ? "text-primary" : "text-text",
                  pathname === value.url
                    ? "after:content-['.'] after:absolute after:-bottom-4 after:left-[40%] after:text-primary block after:text-3xl"
                    : "",
                ].join(" ")}
              >
                {value.name}
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="flex space-x-2 max-md:hidden">
        <Link
          href={"/auth/login"}
          className="bg-background hover:bg-primary_light hover:text-primary transition shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-xl max-xl:rounded-lg max-xl:shadow-sm max-xl:px-6 max-xl:py-2 px-9 py-3 max-lg:px-7 max-lg:text-[12px] font-bold text-sm"
        >
          Login
        </Link>
        <Link
          href={"/auth/signup"}
          className="bg-primary text-white rounded-xl hover:bg-primary_light transition hover:text-primary max-xl:px-6 max-xl:py-2 max-xl:rounded-lg  px-9 py-3 font-bold max-lg:text-[12px] max-lg:px-7  shadow-[0px_10px_20px_0px_#1093ff33] text-sm"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
