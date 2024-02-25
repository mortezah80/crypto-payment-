import Image401 from "$/public/images/401.svg";
import Link from "next/link";
const Unauthorized = () => {
  return (
    <div className="bg-white flex flex-col h-full w-full justify-center items-center">
      <Image401 />
      <Link
        href={"/"}
        className="px-6 py-3 bg-primary text-white text-sm font-bold mt-7 rounded-xl"
      >
        {"Back to HomePage"}
      </Link>
    </div>
  );
};

export default Unauthorized;
