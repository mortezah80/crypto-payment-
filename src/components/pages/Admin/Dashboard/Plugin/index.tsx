import { FiChevronRight } from "react-icons/fi";
import PluginItem from "./PluginItem";
interface pluginStatusProps {
  plugins: number;
}
const plugins = [
  {
    name: "Magento",
    category: "Categories",
  },
  {
    name: "Magento",
    category: "Categories",
  },
  {
    name: "Magento",
    category: "Categories",
  },
  {
    name: "Magento",
    category: "Categories",
  },
  {
    name: "Magento",
    category: "Categories",
  },
  {
    name: "Magento",
    category: "Categories",
  },
];
const PluginStatus: React.FC<pluginStatusProps> = (props) => {
  return (
    <div className="bg-card flex flex-col space-y-4.5 shadow-[0px_15px_20px_1px_#0000000d] rounded-xl px-10 max-md:4 max-md:py-6 py-10 text-sm font-bold">
      <div className="flex items-center justify-between">
        <h4 className="text-primary text-[18px]">Plugins</h4>
        <button className="text-primary font-semibold rounded-xl bg-card_light px-7 py-2.5 ">
          <span>More</span>
        </button>
      </div>
      <div className="mt-4">
        <h2 className="text-4xl font-bold">
          {props.plugins}
          <span className="font-normal pl-1 text-sm">Plugins</span>
        </h2>
      </div>
      <hr className="my-4" />
      <span className="text-grayText font-bold text-xs">
        Last Update Plugin
      </span>
      <div className="grid mt-2 grid-cols-2 gap-2">
        {plugins.map((value, index) => (
          <PluginItem category={value.category} name={value.name} key={index} />
        ))}
      </div>
      <button className="rounded-xl border-2 flex items-center justify-center border-grayLight py-2.5 w-full">
        <span className="text-sm font-bold">Show More</span>
        <FiChevronRight className="text-3xl pl-1" />
      </button>
    </div>
  );
};

export default PluginStatus;
