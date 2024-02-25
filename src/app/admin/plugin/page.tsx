"use client";
import PluginItem from "@/components/pages/Admin/plugin/item";
import { IoMdAddCircleOutline } from "react-icons/io";
import SideBarPlugin from "$/public/icons/sidebar/plugin.svg";
import { Grid } from "@mui/material";
import InputSearch from "@/components/common/searchInput";
import SelectPlugin from "@/components/pages/Admin/plugin/select";
import { useEffect, useState } from "react";
import { authServiceHandler } from "@/api/auth.service";
import PluginManagement from "@/components/pages/Admin/plugin/PluginManagement";
import Loading from "@/components/common/Loading";

const PluginPage = () => {
  const [plugins, setPlugins] = useState<any>([]);
  const [pluginsLoading, setPluginsLoading] = useState(false);
  const [addPluginIsOpen, setAddPluginIsOpen] = useState(false);
  const [deletePluginLoading, setDeletePluginLoading] = useState(false);
  const [pluginForEdit, setPluginForEdit] = useState<any>();

  const handleGetPlugins = async () => {
    try {
      setPluginsLoading(true);
      const res = await authServiceHandler.getPlugins({});
      setPlugins(res.data.data);
    } catch (error) {
    } finally {
      setPluginsLoading(false);
    }
  };

  const addPlugin = () => {
    setAddPluginIsOpen(true);
    setPluginForEdit(undefined);
  };

  const deletePlugin = async (id: string) => {
    try {
      setDeletePluginLoading(true);
      const res = await authServiceHandler.deletePlugin(id);
      if (res.status === 200) handleGetPlugins();
    } catch (error) {
    } finally {
      setDeletePluginLoading(false);
    }
  };

  const editPlugin = async (plugin: any) => {
    setPluginForEdit(plugin);
    setAddPluginIsOpen(true);
  };

  useEffect(() => {
    handleGetPlugins();
  }, []);

  return (
    <>
      {!addPluginIsOpen ? (
        <div>
          <div className="bg-card rounded-[12px] w-full max-2xl:flex-col max-2xl:space-y-8 max-md:px-6 max-md:py-7 px-[62px] py-[40px] flex items-center justify-between mt-[25px] shadow-3xl">
            <div className="flex flex-col items-start max-md:w-full max-md:justify-center">
              <div className="flex items-center text-primary font-bold gap-3 max-md:text-center max-md:justify-center max-md:w-full">
                <SideBarPlugin />
                <span className="font-bold text-3xl">Plugin List</span>
              </div>
              <span className="text-[12px] text-grayText mt-1">
                List of all plugins that can be used for digital currency
                payment
              </span>
            </div>
            <div className="flex items-center space-x-[60px] max-lg:flex-col max-lg:space-y-3 max-lg:space-x-0 ">
              <div className="flex flex-col items-center">
                <span className="text-[12px] text-grayText">All Plugin</span>
                <span className="text-[42px] text-text font-bold">13</span>
              </div>
              <div className="h-[50px] border-r-[1px] border-solid border-borderGray max-lg:hidden"></div>
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
              <div className="h-[50px] border-r-[1px] border-solid border-borderGray max-lg:hidden"></div>
              <button
                onClick={addPlugin}
                className="w-[142px] h-[42px] rounded-[12px] bg-primary text-card text-[14px] flex items-center font-bold justify-center"
              >
                <IoMdAddCircleOutline />
                <span className="ml-[5px]">Add Plugin</span>
              </button>
            </div>
          </div>
          <div className="bg-card rounded-[12px] w-full px-[62px] py-[50px] flex flex-col items-center max-md:px-6 max-md:py-7 justify-between mt-[25px] shadow-3xl text-grayText text-[14px]">
            <div className="flex items-center w-full justify-between max-2xl:flex-col max-2xl:space-y-2">
              <div className="flex [&>div]:flex [&>div]:items-center  max-xl:flex-col max-xl:space-y-3 max-xl:items-start max-2xl:justify-between max-2xl:w-full text-[14px] items-center text-grayText ">
                <div className="max-lg:w-full max-lg:justify-between">
                  <span className="font-bold text-grayText mr-[7px]">
                    Plugin Name:
                  </span>
                  <div className="w-[214px] max-sm:w-[177px] max-xl:w-10/12 px-[14px] max-lg:mr-0 bg-grayLight mr-[32px] rounded-[12px] py-[7px]">
                    <input
                      type="text"
                      placeholder="Enter a name..."
                      className="bg-transparent w-full"
                    />
                  </div>
                </div>
                <div className="max-lg:w-full max-lg:justify-between">
                  <span className="font-bold text-grayText  mr-[7px]">
                    Category:
                  </span>
                  <div className="w-[214px] px-[14px] max-sm:w-[177px] max-lg:mr-0 max-xl:w-10/12 bg-grayLight mr-[32px] rounded-[12px] py-[7px]">
                    <input
                      type="text"
                      placeholder="Enter a name..."
                      className="bg-transparent w-full"
                    />
                  </div>
                </div>
                <div className="max-lg:w-full max-lg:justify-between">
                  <span className="font-bold text-grayText mr-[7px]">
                    Sort by:
                  </span>
                  <div className="w-[165px] max-xl:w-10/12 max-sm:w-[177px]">
                    <SelectPlugin options={[]} defaultValue={0} />
                  </div>
                </div>
              </div>
              <div className="w-[246px] max-2xl:w-full ">
                <InputSearch placeHolder="Search..." />
              </div>
            </div>
            <Grid
              container
              className="pt-5 flex w-full max-sm:!ml-0 max-sm:!w-full"
              rowGap={2}
              columnSpacing={4}
            >
              {pluginsLoading ? (
                <div className="w-full flex justify-center items-center my-5">
                  <Loading size={80} />
                </div>
              ) : (
                plugins?.map((item: any) => (
                  <Grid lg={6} xs={12} key={item?.id}>
                    <PluginItem
                      plugin={item}
                      deletePlugin={deletePlugin}
                      editPlugin={editPlugin}
                      editLoading={false}
                      deleteLoading={deletePluginLoading}
                    />
                  </Grid>
                ))
              )}
            </Grid>
          </div>
        </div>
      ) : (
        <PluginManagement
          isOpen={addPluginIsOpen}
          setIsOpen={setAddPluginIsOpen}
          onSuccess={() => {
            setAddPluginIsOpen(false);
            handleGetPlugins();
          }}
          pluginForEdit={pluginForEdit}
        />
      )}
    </>
  );
};

export default PluginPage;
