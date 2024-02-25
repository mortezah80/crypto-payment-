import { IoMdAddCircleOutline } from "react-icons/io";
import SelectPlugin from "./select";
import { LuSearch } from "react-icons/lu";
import PluginItem from "./item";

const Plugin = () => {
  return (
    <div className="">
      <div className="bg-card rounded-[12px] w-full px-[62px] py-[40px] flex items-center justify-between mt-[25px] shadow-3xl">
        <div className="flex flex-col items-start">
          <div className="flex items-center text-primary text-[32px] font-bold">
            <div></div>
            <span>Plugin List</span>
          </div>
          <span className="text-[12px] text-grayText">
            List of all plugins that can be used for digital currency payment
          </span>
        </div>
        <div className="flex items-center space-x-[60px]">
          <div className="flex flex-col items-center">
            <span className="text-[12px] text-grayText">All Plugin</span>
            <span className="text-[42px] text-text font-bold">13</span>
          </div>
          <div className="h-[50px] border-r-[1px] border-solid border-borderGray"></div>
          <div className="grid grid-cols-2 h-full gap-y-[14px] gap-x-[60px] w-[330px] font-bold">
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-grayText">Hosting</span>
              <span className="text-text text-[16px]">4</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-grayText">
                Server Managment
              </span>
              <span className="text-text text-[16px]">4</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-grayText">Hosting</span>
              <span className="text-text text-[16px]">4</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-grayText">Hosting</span>
              <span className="text-text text-[16px]">4</span>
            </div>
          </div>
          <div className="h-[50px] border-r-[1px] border-solid border-borderGray"></div>
          <div className="w-[142px] h-[42px] rounded-[12px] bg-primary text-card text-[14px] flex items-center font-bold justify-center">
            <IoMdAddCircleOutline />
            <span className="ml-[5px]">Add Plugin</span>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-[12px] w-full px-[62px] py-[50px] flex flex-col items-center justify-between mt-[25px] shadow-3xl text-grayText text-[14px]">
        <div className="text-[14px] font-bold flex items-center justify-between w-full">
          <div className="grid grid-cols-3 text-[14px] w-[70%]">
            <div className="flex items-center">
              <span className="pr-[11px] text-[14px] w-[50%]">
                Plugin Name:
              </span>
              <div className="bg-grayLight rounded-[12px] px-[12px] font-[400] h-[36px] flex items-center justify-between w-[248px]">
                <input
                  type="text"
                  className="text-[12px] w-full bg-transparent focus:outline-none focus:border-none"
                  placeholder="Enter a name..."
                />
              </div>
            </div>

            <div className="flex items-center ml-[27px]">
              <span className="pr-[11px]">Category:</span>
              <div className="w-[160px]">
                <SelectPlugin options={[{ name: "Select" }]} defaultValue={0} />
              </div>
            </div>
            <div className="flex items-center">
              <span className="pr-[11px]">Sort by:</span>
              <div className="w-[160px]">
                <SelectPlugin options={[{ name: "Select" }]} defaultValue={0} />
              </div>
            </div>
          </div>
          <div className="bg-grayLight rounded-[12px] px-[12px] h-[36px] flex items-center justify-between w-[248px]">
            <input
              type="text"
              className="text-[12px] w-full bg-transparent focus:outline-none focus:border-none"
              placeholder="Search..."
            />
            <div>
              <LuSearch />
            </div>
          </div>
        </div>
        <div></div>
        <div className="grid grid-cols-2 w-full gap-y-[18px] gap-x-[9px] mt-[20px]">
          <PluginItem
            plugin={undefined}
            editPlugin={() => {}}
            deletePlugin={() => {}}
            deleteLoading={false}
            editLoading={false}
          />
          <PluginItem
            plugin={undefined}
            editPlugin={() => {}}
            deletePlugin={() => {}}
            deleteLoading={false}
            editLoading={false}
          />

          <PluginItem
            plugin={undefined}
            editPlugin={() => {}}
            deletePlugin={() => {}}
            deleteLoading={false}
            editLoading={false}
          />
          <PluginItem
            plugin={undefined}
            editPlugin={() => {}}
            deletePlugin={() => {}}
            deleteLoading={false}
            editLoading={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Plugin;
