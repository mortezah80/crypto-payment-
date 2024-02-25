
interface featureProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  active?: string;
  lable: string;
  subLable: string;
}
const FeatureItem: React.FC<featureProps> = ({
  Icon,
  subLable,
  lable,
  active,
}) => {
  return (
    <div className="transition cursor-default max-sm:pl-5 flex justify-center max-md:h-[119px] flex-1 max-md:w-full py-10 rounded-xl bg-card hover:shadow-[0px_50px_60px_-15px_#0000001a] shadow-[0px_5px_10px_-10px_#0000001a]">
      <div className="flex flex-col max-md:flex-row max-md:ml-10 max-sm:ml-0 max-md:w-[350px] max-md:text-left max-md:space-y-0 space-y-5 text-center items-center max-md:space-x-3">
        <div className="max-md:w-[49px] max-md:h-[49px]">
          <Icon className="max-md:w-[49px] max-md:h-[49px]" />
        </div>
        <div className="flex flex-col items-center max-md:items-start ">
          <span className="text-text max-lg:text-sm text-lg font-bold">
            {lable}
          </span>
          <span className="w-9/12 max-lg:text-xs">
            {subLable}
            <span className="text-primary font-bold max-lg:text-xs">
              {" "}
              {active ? active : ""}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;
