import Link from "next/link";
import { useState } from "react";
import { NavLink } from "@/components/common/Navlink";
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useParams } from "next/navigation";

interface LinkCardProps {
  item: {
    id: string;
    name: string;
  };
  compact?: boolean;
  handelDelete?: any;
}

const LinkCard: React.FC<LinkCardProps> = ({ item, compact, handelDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  return (
    <>
      <div className="flex justify-between items-center text-grayText min-h-[24px] cursor-pointer">
        <div className="flex gap-5 items-center text-xs">
          <div className="min-w-[6px] h-[6px] rounded-full bg-grayText"></div>
          <div
            className={`gap-1 flex items-center cursor-pointe ${
              compact
                ? "opacity-100"
                : "opacity-0 group-data-active:opacity-100"
            } duration-200`}
          >
            <div onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <RiArrowDownSLine className="text-2xl" />
              ) : (
                <RiArrowRightSLine className="text-2xl" />
              )}
            </div>
            <Link
              href={`/dashboard/merchant/${item?.id}`}
              className={`font-bold text-xs whitespace-nowrap ${
                params.id === item?.id ? "text-text" : "text-grayText"
              }`}
            >
              {item?.name}
            </Link>
          </div>
        </div>
        <div
          onClick={() => handelDelete(item?.id)}
          className={`cursor-pointer ${
            compact ? "flex" : "hidden group-data-active:flex"
          }`}
        >
          <IoClose />
        </div>
      </div>
      {isOpen && (
        <ul
          className={`flex-col justify-center items-start w-4/6 ml-14 text-xs font-bold text-grayText ${
            compact ? "flex" : "hidden group-data-active:flex"
          } gap-2 pt-3 pb-2`}
        >
          <NavLink
            href={`/dashboard/merchant/income/${item.id}`}
            childrenRenderer={(isActive) => (
              <span
                className={`duration-500 ${
                  isActive && isOpen ? "text-blue-400" : ""
                } hover:text-blue-400`}
              >
                {"Income List"}
              </span>
            )}
          />
          <NavLink
            href={`/dashboard/merchant/transaction/${item?.id}`}
            childrenRenderer={(isActive) => (
              <span
                className={`duration-500 ${
                  isActive && isOpen ? "text-blue-400" : ""
                } hover:text-blue-400`}
              >
                {"Transactions"}
              </span>
            )}
          />
        </ul>
      )}
    </>
  );
};

export default LinkCard;
