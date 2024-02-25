import ModalView from "@/components/pages/modals/view";
import Modal from "@/components/common/Modal";
import PlusIcon from "$/public/icons/plus.svg";
import { useEffect, useState } from "react";
import BrowseIcon from "$/public/icons/browse.svg";
import TrashIcon from "$/public/icons/trash.svg";
import CategoryCard from "../CategoryCard";
import CategoryIcon from "$/public/images/blog/blog.svg";
import AddNewCategoryIcon from "$/public/icons/new_ticket_form.svg";
import ManageCategory from "../ManageCategory";
import { authServiceHandler } from "@/api/auth.service";
import Loading from "@/components/common/Loading";

const ManageCategoriesModal = ({ open, onClose, shouldUpdate }: any) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState<any>();
  const [selectedCategory, setSelectedCategory] = useState<any>();
  const [categories, setCategories] = useState<any>([]);
  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [publishLoading, setPublishLoading] = useState(false);

  const imageHandler = (data: File) => {
    setImg(data);
  };
  const selectCategory = (category: any) => {
    setSelectedCategory(category);
  };

  const handleGetCategory = async () => {
    try {
      setCategoriesLoading(true);
      const res = await authServiceHandler.blogCategory({});
      setCategories(res.data.data);
    } catch (error) {
    } finally {
      setCategoriesLoading(false);
    }
  };

  const publish = async () => {
    try {
      if (title && img) {
        setPublishLoading(true);
        const data = {
          title: title,
          description: description,
        };
        const res = await authServiceHandler.addBlogCategory(data, img);
        if (res.status === 201) {
          setTitle("");
          setDescription("");
          setImg(null);
          handleGetCategory();
        }
      }
    } catch (error) {
    } finally {
      setPublishLoading(false);
    }
  };

  useEffect(() => {
    handleGetCategory();
  }, []);

  useEffect(() => {
    if (!open) {
      setTitle("");
      setDescription("");
      setImg(null);
      setSelectedCategory(null);
    }
  }, [open]);

  return (
    <Modal isModalOpen={open} onClose={onClose}>
      <ModalView setModalOpen={onClose} label="Manage Categories">
        <div className="w-full flex flex-col gap-y-5 py-4">
          <div className="w-full p-5 gap-x-12 flex rounded-2xl bg-grayLight justify-between max-sm:flex-col max-sm:gap-y-5">
            <div className="flex flex-col gap-y-5 min-w-[320px] max-sm:w-full">
              <h2 className="flex text-sm font-bold items-center gap-x-1 text-primary">
                <PlusIcon />
                <h3>Add New Category</h3>
              </h2>
              <div className="flex flex-col gap-y-1 w-full">
                <label
                  htmlFor="title"
                  className="text-sm font-bold text-grayText"
                >
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  id="title"
                  placeholder="Typing a title..."
                  className="h-9 rounded-xl bg-white flex items-center px-3 py-1 text-text text-sm w-full outline-none placeholder:text-grayText"
                />
              </div>
              <div className="flex flex-col gap-y-1 w-full">
                <span className="text-sm font-bold text-grayText">
                  Upload Image
                </span>
                <div className="flex justify-between w-full items-center gap-x-3 max-sm:flex-col max-sm:justify-start max-sm:items-start max-sm:gap-y-2">
                  <div className="flex justify-center relative gap-1 px-2 items-center w-full max-w-[112px] h-8 rounded-[12px] bg-card_light">
                    <div className="text-primary">
                      <BrowseIcon />
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      id="browse_file"
                      className="w-full h-full opacity-0 absolute top-0 z-10 bg-transparent"
                      onChange={(e) => {
                        if (e.target?.files) {
                          imageHandler(e.target?.files[0]);
                        }
                      }}
                    />
                    <label
                      htmlFor="browse_file"
                      className="text-primary text-sm font-bold"
                    >
                      Browse
                    </label>
                  </div>
                  {img && (
                    <div className="flex gap-1 items-center max-sm:w-full max-sm:justify-between">
                      <p className="text-xs text-text font-normal whitespace-nowrap overflow-hidden text-ellipsis">
                        {img?.name}
                      </p>
                      <button type="button">
                        <TrashIcon onClick={() => setImg(null)} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-y-5 min-w-[320px] max-sm:flex-col-reverse max-sm:items-start max-sm:gap-y-2 max-sm:w-full">
              <button
                disabled={publishLoading}
                onClick={publish}
                className="px-8 py-1 max-w-[115px] flex justify-center items-center text-center rounded-xl bg-primary text-white text-sm font-bold hover:shadow-[0px_10px_15px_0px_rgba(16,147,255,0.15)] max-sm:ml-auto"
              >
                {publishLoading ? "Loading..." : "Publish"}
              </button>
              <div className="w-full">
                <span className="text-sm font-bold text-grayText">
                  Description
                </span>
                <textarea
                  id="description"
                  className="w-full h-24 overflow-y-auto rounded-xl bg-white px-3 py-2 outline-none resize-none text-text text-sm font-normal max-sm:w-full"
                  placeholder="Typing a Descrpition..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h3 className="text-text text-sm font-bold max-sm:mx-auto">
              Categories List
            </h3>
            <div className="flex w-full h-[530px] justify-center items-center">
              {categories?.length ? (
                <div className="flex w-full h-full justify-between gap-x-8 max-sm:flex-col max-sm:gap-y-2">
                  {categoriesLoading ? (
                    <div className="w-full h-full flex justify-center items-center">
                      <Loading size={80} />
                    </div>
                  ) : (
                    <ul className="w-3/5 flex flex-col gap-y-1 h-full overflow-y-auto pr-1 coinScroll max-sm:w-full">
                      {categories?.map((category: any) => (
                        <li key={category.id} className="w-full">
                          <CategoryCard
                            category={category}
                            selectCategory={selectCategory}
                            onConfirm={() => {
                              handleGetCategory();
                              setSelectedCategory(null);
                            }}
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="w-2/5 h-full rounded-2xl flex flex-col items-center py-5 px-4 justify-center bg-grayLight max-sm:hidden">
                    {selectedCategory ? (
                      <ManageCategory
                        category={selectedCategory}
                        onConfirm={() => {
                          handleGetCategory();
                          setSelectedCategory(null);
                        }}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center gap-y-1 text-[#DADADA]">
                        <CategoryIcon />
                        <p className="text-2xl font-bold">
                          Select a Category to View & Edit
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col h-full text-center justify-center items-center gap-y-1 text-[#DADADA] text-2xl font-bold">
                  <AddNewCategoryIcon />
                  <p>Add New Category</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </ModalView>
    </Modal>
  );
};

export default ManageCategoriesModal;
