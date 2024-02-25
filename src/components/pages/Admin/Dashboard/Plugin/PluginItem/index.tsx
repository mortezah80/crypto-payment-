import { FiDownload } from "react-icons/fi";

interface pluginItemProps {
  name: string;
  category: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}
const PluginItem: React.FC<pluginItemProps> = (props) => {
  const Icon = props.Icon;
  return (
    <div className="rounded-xl font-bold flex flex-col items-center border-2 border-grayLight py-2.5 px-8">
      <div className="w-[55px] flex items-center justify-between h-[55px] bg-grayLight rounded-full">
        {Icon ? <Icon /> : ""}
      </div>
      <h3 className="text-sm">{props.name}</h3>
      <span className="text-grayText text-xs">{props.category}</span>
      <div className="text-xl mt-2 text-primary bg-card_light rounded-full  flex items-center justify-between">
        <FiDownload />
      </div>
    </div>
  );
};

export default PluginItem;
