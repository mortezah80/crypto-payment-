import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface PostBlogProps {
  title: string;
  date: Date;
  text: string;
  difficulty: "advanced" | "beginner" | "intermediate";
  image_addr: StaticImageData;
  id: string;
}
const PostBlog: React.FC<PostBlogProps> = ({
  title,
  date,
  text,
  difficulty,
  image_addr,
  id,
}) => {
  return (
    <div className="px-[30px] pb-[24px] mt-[50px] transition rounded-[24px] bg-card  hover:shadow-[0px_15px_20px_1px_#0000000d]">
      <div className="relative  overflow-hidden text-center -mt-[50px] w-full rounded-[18px] border-primary border">
        <div className="absolute bg-icon text-text text-[10px] font-bold px-[14px] py-[6px] rounded-br-[10px] right-[28px] -top-[1px] rounded-bl-[10px]">
          <span>{difficulty}</span>
        </div>
        <div className="h-[180px]">
          <Image
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}blog/cover/${image_addr}`}
            alt="image blog"
            fill
          />
        </div>
      </div>
      <div className="mt-[18px] max-md:text-center max-md:mt-[14px] flex flex-col justify-between">
        <h3 className="text-text hover:text-primary text-[16px] max-md:text-[14px] font-bold">
          {title}
        </h3>
        <div>
          <p className="text-grayText text-[12px] font-bold mt-[10px] max-md:mt-[8px]">
            {text}
          </p>
        </div>
        <div className="flex items-center justify-between mt-[41px]">
          <span className="text-[12px] text-grayText font-bold">
            {date?.toDateString()}
          </span>
          <Link
            href={`/blog/${id}`}
            className="hover:bg-card_light hover:text-primary hover:border-card_light transition rounded-[12px] border-primary text-primary border-[2px] text-[14px] max-md:text-[12px] font-bold text-center px-[31px] py-[9px] max-md:py-[7px] max-md:px-[23px]"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostBlog;
