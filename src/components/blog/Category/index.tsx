import { FiChevronRight } from "react-icons/fi";
import Image from "next/image";
interface CategoryProps {
  title: string;
  describtion: string;
  created_at: number;
  image_addr: string;
}
const CategoryItem: React.FC<CategoryProps> = ({
  title,
  created_at,
  describtion,
  image_addr,
}) => {
  return (
    <div className="flex relative font-bold  py-[12px] max-md:m-auto w-full text-[12px] max-md:text-[10px] space-x-[8px] px-[13px]">
      <div className="w-[64px] h-[64px] max-sm:w-[59px] max-sm:h-[59px] rounded-[10px] overflow-hidden">
        <Image
          alt={title}
          src={`http://65.21.64.202:8000/blog-category/cover/${image_addr}`}
          width={64}
          height={64}
        />
      </div>
      <div className="flex flex-col justify-between [&>div]:flex [&>div]:item-center [&>div]:justify-between w-full">
        <div className="flex justify-between">
          <h5 className="text-[14px] max-md:text-[12px] text-text">{title}</h5>
          <span className="text-grayText text-center pr-1">
            {new Date(created_at).toLocaleString()}
          </span>
        </div>
        <div>
          <span className="text-grayText text-left w-8/12">{describtion}</span>
          <button className="text-white text-[20px] w-[20px] h-[20px] rounded-full bg-icon">
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
