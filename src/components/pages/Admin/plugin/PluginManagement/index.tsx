"use client";

import Image from "next/image";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { HiPlusSm } from "react-icons/hi";
import TrashIcon from "$/public/icons/trash.svg";
import TextEditor from "@/components/common/TextEditor";
import BrowseIcon from "$/public/icons/browse.svg";
import CategorySelect from "../select/CategorySelect";
import DeleteIcon from "$/public/icons/delete.svg";
import { AiOutlineEye } from "react-icons/ai";
import { authServiceHandler } from "@/api/auth.service";
import { arrayEquals } from "@/tools/functions/arrayEquals";
import { useZustandStore } from "@/store";
import { useRouter } from "next/navigation";

interface IProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onSuccess: () => void;
  pluginForEdit: any;
}

interface IRelatedContent {
  link: string;
  title: string;
}

const PluginManagement: FC<IProps> = ({
  isOpen,
  setIsOpen,
  onSuccess,
  pluginForEdit,
}) => {
  const router = useRouter();

  const { user, setPlugin } = useZustandStore((store) => store);

  const [logo, setLogo] = useState<any>();
  const [pluginForEditLogo, setPluginForEditLogo] = useState<any>();
  const [pluginFile, setPluginFile] = useState<any>();
  const [pluginForEditFile, setPluginForEditFile] = useState<any>();
  const [pluginName, setPluginName] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState<string>("<p></p>");
  const [relatedContent, setRelatedContent] = useState<string>("");
  const [relatedContentLink, setRelatedContentLink] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<any>();
  const [version, setVersion] = useState("");
  const [selectedRelatedContents, setSelectedRelatedContents] = useState<
    Array<IRelatedContent>
  >([]);
  const [tag, setTag] = useState("");
  const [selectedTags, setSelectedTags] = useState<Array<string>>([]);
  const [pluginCategories, setPluginCategories] = useState<any>();
  const [pluginCategoriesLoading, setPluginCategoriesLoading] = useState(false);
  const [publishPluginLoading, setPublishPluginLoading] = useState(false);
  const [editPluginLoading, setEditPluginLoading] = useState(false);

  const addLogo = (data: File) => {
    setLogo(data);
  };

  const uploadFilePlugin = (data: File) => {
    setPluginFile(data);
  };

  const applyRelatedContent = () => {
    const related_content: IRelatedContent = {
      title: relatedContent,
      link: relatedContentLink,
    };
    if (selectedRelatedContents?.some((i) => i.link === related_content.link)) {
      return;
    } else {
      setSelectedRelatedContents([...selectedRelatedContents, related_content]);
    }
    setRelatedContent("");
    setRelatedContentLink("");
  };

  const deleteRelatedContent = (item: IRelatedContent) => {
    const filteredList = selectedRelatedContents?.filter(
      (i) => i.link !== item.link
    );
    setSelectedRelatedContents(filteredList);
  };

  const applyTag = () => {
    if (selectedTags?.includes(tag)) {
      return;
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
    setTag("");
  };

  const deleteTag = (item: string) => {
    const filteredList = selectedTags?.filter((i) => i !== item);
    setSelectedTags(filteredList);
  };

  const handlePreview = () => {
    const today = String(Date.now());
    const plugin = {
      category_id: selectedCategory?.id,
      category_title: selectedCategory?.title,
      content: content,
      created_at: today,
      creator_email: user.email,
      creator_id: user.id,
      creator_user: user.username,
      description: description,
      downloads: 0,
      file: pluginFile?.name,
      id: "",
      logo_addr: logo?.name,
      name: pluginName,
      related_content: selectedRelatedContents,
      tags: selectedTags,
      updated_at: today,
      version: version,
    };
    if (pluginForEdit) {
      setPlugin({
        ...plugin,
        created_at: pluginForEdit.created_at,
        downloads: pluginForEdit.downloads,
        id: pluginForEdit.id,
      });
      router.push(`/plugin/${pluginForEdit.id}`);
    } else {
      setPlugin(plugin);
      router.push(`/plugin/preview`);
    }
  };

  const getPluginCategories = async () => {
    try {
      setPluginCategoriesLoading(true);
      const res = await authServiceHandler.getPluginCategories({});
      setPluginCategories(res.data.data);
    } catch (error) {
    } finally {
      setPluginCategoriesLoading(false);
    }
  };

  const publishPlugin = async (e: any) => {
    try {
      setPublishPluginLoading(true);
      e.preventDefault();
      const plugin = {
        category_id: selectedCategory?.id,
        content: content,
        description: description,
        name: pluginName,
        related_content: selectedRelatedContents,
        tags: selectedTags,
        version: version,
      };
      const res = await authServiceHandler.addPlugin(plugin, logo, pluginFile);
      if (res.status === 201) onSuccess();
    } catch (error) {
    } finally {
      setPublishPluginLoading(false);
    }
  };

  const editPlugin = async (e: any) => {
    try {
      setEditPluginLoading(true);
      e.preventDefault();
      const plugin: {
        category_id?: string;
        content?: string;
        description?: string;
        name?: string;
        related_content?: IRelatedContent[];
        tags?: string[];
        version?: string;
      } = {
        category_id: selectedCategory?.id,
        content: content,
        description: description,
        name: pluginName,
        related_content: selectedRelatedContents,
        tags: selectedTags,
        version: version,
      };
      // if (pluginForEdit.category_id === selectedCategory.id)
      //   delete plugin.category_id;
      // if (pluginForEdit.content === content) delete plugin.content;
      // if (pluginForEdit.description === description) delete plugin.description;
      if (pluginForEdit.name === pluginName) delete plugin.name;
      // const isEqualRelatedContents = arrayEquals(
      //   pluginForEdit.related_content,
      //   selectedRelatedContents
      // );
      // if (isEqualRelatedContents) delete plugin.related_content;
      // if (pluginForEdit.version === version) delete plugin.version;
      // const isEqualTags = arrayEquals(pluginForEdit.tags, selectedTags);
      // if (isEqualTags) delete plugin.tags;
      const res = await authServiceHandler.editPlugin(
        pluginForEdit.id,
        plugin,
        logo,
        pluginFile
      );
      if (res.status === 202) onSuccess();
    } catch (error) {
    } finally {
      setEditPluginLoading(false);
    }
  };

  useEffect(() => {
    getPluginCategories();
  }, []);

  useEffect(() => {
    if (pluginForEdit) {
      setPluginForEditLogo(pluginForEdit.logo_addr);
      setPluginName(pluginForEdit.name);
      setDescription(pluginForEdit.description);
      setContent(pluginForEdit.content);
      setPluginForEditFile(pluginForEdit.file);
      setVersion(pluginForEdit.version);
      setSelectedRelatedContents(pluginForEdit.related_content);
      setSelectedTags(pluginForEdit.tags);
    }
  }, [pluginForEdit]);

  useEffect(() => {
    if (pluginForEdit && pluginCategories) {
      const category = pluginCategories.find(
        (c: any) => c.id === pluginForEdit.category_id
      );
      setSelectedCategory(category);
    }
  }, [pluginForEdit, pluginCategories]);

  useEffect(() => {
    if (!isOpen) {
      setLogo(undefined);
      setPluginForEditLogo(undefined);
      setPluginName("");
      setDescription("");
      setContent("<p></p>");
      setPluginForEditFile(undefined);
      setVersion("");
      setSelectedRelatedContents([]);
      setSelectedTags([]);
      setSelectedCategory(undefined);
    }
  }, [isOpen]);

  return (
    <div className="bg-card px-14 py-7 w-full rounded-[12px] shadow-[0px_15px_20px_1px_#0000000d] my-5 max-md:p-4">
      <form
        onSubmit={pluginForEdit ? editPlugin : publishPlugin}
        className="w-full flex justify-between"
      >
        <div className="w-full max-w-[70%] pr-14 flex flex-col gap-5">
          <h2 className="flex gap-1 items-center text-primary text-lg font-bold max-md:ml-auto">
            {pluginForEdit ? "Edit Plugin" : "Add Plugin"}
          </h2>
          <div className="flex justify-between w-full gap-x-5">
            <div
              className={`w-full max-w-[11%] rounded-full h-24 relative bg-transparent flex ${
                logo || pluginForEditLogo
                  ? "border-none"
                  : "border-2 border-dashed"
              }`}
            >
              {pluginForEditLogo && !logo && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}plugin/logo/{image_addr}?logo_addr=${pluginForEdit?.logo_addr}`}
                  className="rounded-full"
                  fill
                  alt=""
                />
              )}
              {logo && !pluginForEditLogo && (
                <Image
                  id="logoImg"
                  className="rounded-full"
                  src={URL?.createObjectURL(logo)}
                  alt=""
                  fill
                />
              )}
              {!logo && !pluginForEditLogo && (
                <div className="relative m-auto w-[60px] h-[60px]">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/add-plugin-not-found.svg`}
                    fill
                    alt="not-found"
                  />
                </div>
              )}
              {!logo && !pluginForEditLogo && (
                <div className="absolute w-5 h-5 bg-primary flex justify-center items-center z-10 right-0 bottom-0 text-center rounded-full">
                  <input
                    type="file"
                    id="logo"
                    accept="image/png, image/svg"
                    className="w-full h-full opacity-0 bg-transparent"
                    onChange={(e) => {
                      if (e.target.files) {
                        addLogo(e.target?.files[0]);
                      }
                    }}
                  />
                  <label htmlFor="logo" className="text-white absolute text-lg">
                    <HiPlusSm />
                  </label>
                </div>
              )}
            </div>
            <div className="w-full max-w-[54%] flex flex-col gap-3">
              <div className="flex justify-between w-full">
                <div className="flex flex-col gap-2 font-bold w-full max-w-[50%]">
                  <h3 className="text-sm">Add Logo</h3>
                  <div className="flex flex-col gap-1 text-grayText text-[10px]">
                    <p>Logo Must be Upload 30x30px</p>
                    <p>File Type PNG or SVG</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1 font-bold w-full max-w-[50%]">
                  <h3 className="text-sm pl-3">Plugin Name</h3>
                  <input
                    type="text"
                    value={pluginName}
                    onChange={(e) => setPluginName(e.target.value)}
                    id="name"
                    placeholder="Enter a Name..."
                    className="h-9 rounded-xl bg-grayLight flex items-center px-3 text-text text-sm w-full outline-none placeholder:text-grayText"
                  />
                </div>
              </div>
              <div className="w-full h-8 flex justify-between items-center px-3 py-1 border bg-white rounded-xl">
                {pluginForEditLogo && !logo && (
                  <>
                    <p className="text-xs w-11/12 text-text font-normal whitespace-break-spaces overflow-auto">
                      {pluginForEditLogo}
                    </p>
                    <button type="button">
                      <TrashIcon
                        onClick={() => setPluginForEditLogo(undefined)}
                      />
                    </button>
                  </>
                )}
                {logo && !pluginForEditLogo && (
                  <>
                    <p className="text-xs w-11/12 text-text font-normal whitespace-break-spaces overflow-auto">
                      {logo?.name}
                    </p>
                    <button type="button">
                      <TrashIcon onClick={() => setLogo(undefined)} />
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="w-full max-w-[35%] flex flex-col gap-1 font-bold">
              <h3 className="text-sm pl-3">Description</h3>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full h-full max-h-20 rounded-xl bg-grayLight px-3 flex items-center text-text text-sm outline-none resize-none"
              ></textarea>
            </div>
          </div>
          <TextEditor content={content} setContent={setContent} />
        </div>
        <div className="w-full max-w-[30%] flex flex-col gap-3">
          <div className="flex flex-col w-full gap-2">
            <label
              htmlFor="picture-cover"
              className="text-sm font-bold pl-3 text-grayText max-w-fit"
            >
              Upload File Plugin:
            </label>
            <div className="flex justify-center relative gap-1 px-2 items-center w-full h-8 rounded-[12px] bg-card_light text-primary text-sm font-bold">
              <BrowseIcon />
              <input
                type="file"
                id="plugin"
                className="w-full h-full opacity-0 absolute top-0 z-10 bg-transparent"
                onChange={(e) => {
                  if (e.target.files) {
                    uploadFilePlugin(e.target?.files[0]);
                    setPluginForEditFile(null);
                  }
                }}
              />
              <label htmlFor="plugin">Browse Plugin</label>
            </div>
            {!pluginFile && pluginForEditFile && (
              <div className="flex w-full gap-1 mt-2 items-center justify-end flex-wrap max-md:justify-between">
                <p className="text-xs text-text w-11/12 font-normal whitespace-break-spaces overflow-auto">
                  {pluginForEditFile}
                </p>
                <button type="button">
                  <TrashIcon onClick={() => setPluginForEditFile(undefined)} />
                </button>
              </div>
            )}
            {pluginFile && !pluginForEditFile && (
              <div className="flex w-full gap-1 mt-2 items-center justify-end flex-wrap max-md:justify-between">
                <p className="text-xs text-text w-11/12 font-normal whitespace-break-spaces overflow-auto">
                  {pluginFile?.name}
                </p>
                <button type="button">
                  <TrashIcon onClick={() => setPluginFile(undefined)} />
                </button>
              </div>
            )}
          </div>
          <div className="w-full flex flex-col gap-1">
            <h3 className="text-sm font-bold text-grayText pl-3">Category:</h3>
            <CategorySelect
              options={pluginCategories}
              category={selectedCategory}
              setCategory={setSelectedCategory}
              loading={pluginCategoriesLoading}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <h3 className="text-sm font-bold text-grayText pl-3">Version</h3>
            <input
              type="text"
              value={version}
              onChange={(e) => setVersion(e.target.value)}
              id="version"
              placeholder="Number Version..."
              className="h-9 rounded-xl bg-grayLight flex items-center px-3 text-text text-sm w-full outline-none placeholder:text-grayText"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <h3 className="text-sm font-bold text-grayText pl-3">
              Related Content:
            </h3>
            <div className="flex justify-between w-full gap-1">
              <div className="flex w-full flex-col gap-1">
                <input
                  type="text"
                  value={relatedContent}
                  onChange={(e) => setRelatedContent(e.target.value)}
                  id="related_content"
                  placeholder="Typing a Content..."
                  className="h-9 rounded-xl bg-grayLight flex items-center px-3 text-text text-sm w-full outline-none placeholder:text-grayText"
                />
                <input
                  type="text"
                  value={relatedContentLink}
                  onChange={(e) => setRelatedContentLink(e.target.value)}
                  id="related_content_link"
                  placeholder="Paste or Enter a Link Content..."
                  className="h-9 rounded-xl bg-grayLight flex items-center px-3 text-text text-sm w-full outline-none placeholder:text-grayText"
                />
              </div>
              <button
                type="button"
                onClick={applyRelatedContent}
                className="text-sm font-bold text-text flex justify-center items-center text-center w-20 border rounded-xl bg-white"
              >
                Apply
              </button>
            </div>
            <ul className="w-full flex flex-col gap-1 h-[188px] overflow-y-auto pr-1">
              {selectedRelatedContents?.map((item) => (
                <li
                  key={item.link}
                  className="w-full h-11 rounded-xl bg-alterGray px-4 py-1 flex flex-col relative"
                >
                  <button
                    type="button"
                    onClick={() => deleteRelatedContent(item)}
                    className="absolute right-0 top-0 z-10 text-redText bg-white"
                  >
                    <DeleteIcon />
                  </button>
                  <h3 className="text-primary text-sm font-bold">
                    {item.title}
                  </h3>
                  <p className="text-xs font-normal text-text w-full overflow-hidden whitespace-nowrap text-ellipsis">
                    {item.link}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-full flex flex-col gap-1">
              <h3 className="text-sm font-bold text-grayText pl-3">Tags:</h3>
              <div className="w-full flex justify-between gap-1">
                <input
                  type="text"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  id="tag"
                  placeholder="Typing a Tags..."
                  className="h-9 rounded-xl bg-grayLight flex items-center px-3 text-text text-sm w-full outline-none placeholder:text-grayText"
                />
                <button
                  type="button"
                  onClick={applyTag}
                  className="text-sm font-bold text-text flex justify-center items-center text-center w-20 border rounded-xl bg-white"
                >
                  Apply
                </button>
              </div>
            </div>
            <ul className="w-full flex gap-1 overflow-x-auto py-1">
              {selectedTags?.map((item, index) => (
                <li
                  key={index}
                  className="min-w-fit h-6 rounded-xl bg-alterGray px-4 py-1 flex justify-center items-center relative text-sm text-"
                >
                  <button
                    type="button"
                    onClick={() => deleteTag(item)}
                    className="absolute right-0 top-0 z-10 text-redText bg-white"
                  >
                    <DeleteIcon />
                  </button>
                  <span className="text-grayText text-sm font-bold">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={handlePreview}
            type="button"
            className="w-full gap-1 h-9 flex justify-center items-center rounded-xl border bg-white text-sm font-bold text-text"
          >
            <AiOutlineEye />
            <span>Preview</span>
          </button>
          <div className="flex w-full justify-between gap-3 mt-auto border-t pt-4">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-1/3 flex justify-center items-center text-center h-10 rounded-xl bg-white border text-sm font-bold text-text"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={publishPluginLoading || editPluginLoading}
              className="w-2/3 flex justify-center items-center text-center h-10 rounded-xl bg-primary text-white border text-sm font-bold"
            >
              {publishPluginLoading || editPluginLoading
                ? "Loading..."
                : pluginForEdit
                ? "Edit Plugin"
                : "Publish Plugin"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PluginManagement;
