import { FC, useEffect, useState } from "react";
import BrowseIcon from "$/public/icons/browse.svg";
import TrashIcon from "$/public/icons/trash.svg";
import { authServiceHandler } from "@/api/auth.service";

interface IProps {
  category: any;
  onConfirm: () => void;
}

const ManageCategory: FC<IProps> = ({ category, onConfirm }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState<any>();
  const [isEditMode, setIsEditMode] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const imageHandler = (data: File) => {
    setImg(data);
    setIsEditMode(false);
  };

  const confirm = async () => {
    try {
      const req: { title?: string; description?: string } = {
        title: title,
        description: description,
      };
      if (title === category?.title) delete req?.title;
      // if (description === category?.description) delete req?.description;
      setConfirmLoading(true);
      const res = await authServiceHandler.editBlogCategory(
        category?.id,
        req,
        img
      );
      if (res.status === 202) {
        onConfirm();
        setTitle("");
        setDescription("");
        setImg(null);
      }
    } catch (error) {
    } finally {
      setConfirmLoading(false);
    }
  };

  const deleteCategory = async () => {
    try {
      setDeleteLoading(true);
      const res = await authServiceHandler.deleteBlogCategory(category.id);
      if (res.status === 200) {
        onConfirm();
      }
    } catch (error) {
    } finally {
      setDeleteLoading(false);
    }
  };

  useEffect(() => {
    setTitle(category.title);
    setDescription(category.description);
    setImg(null);
    setIsEditMode(true);
  }, [category]);

  return (
    <form className="w-full h-full flex flex-col gap-y-2">
      <div className="flex flex-col gap-y-1 w-full">
        <label htmlFor="title" className="text-sm font-bold text-grayText">
          Title:
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
      <div>
        <span className="text-sm font-bold text-grayText">Description:</span>
        <textarea
          id="description"
          className="w-full h-24 overflow-y-auto rounded-xl bg-white px-3 py-2 outline-none resize-none text-text text-sm font-normal"
          placeholder="Typing a Descrpition..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="flex flex-col gap-y-1 w-full">
        <div className="w-full flex justify-between items-center">
          <span className="text-sm font-bold text-grayText">Upload Image:</span>
          <div className="flex justify-between items-center gap-x-3">
            <div className="flex justify-center relative gap-1 px-5 items-center w-full max-w-[112px] h-8 rounded-[12px] bg-card_light">
              <div className="text-primary">
                <BrowseIcon />
              </div>
              <input
                type="file"
                accept="image/*"
                id="browse_file"
                className="w-full h-full opacity-0 absolute top-0 z-10 bg-transparent"
                onChange={(e) => {
                  if (e.target.files) {
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
          </div>
        </div>
        {isEditMode && !img && (
          <div className="flex w-full justify-between gap-1 items-center">
            <p className="text-xs text-text font-normal whitespace-nowrap overflow-hidden text-ellipsis">
              {category?.image_addr}
            </p>
            <button type="button">
              <TrashIcon onClick={() => setIsEditMode(false)} />
            </button>
          </div>
        )}
        {img && !isEditMode && (
          <div className="flex w-full justify-between gap-1 items-center">
            <p className="text-xs text-text font-normal whitespace-nowrap overflow-hidden text-ellipsis">
              {img?.name}
            </p>
            <button type="button">
              <TrashIcon onClick={() => setImg(null)} />
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-y-1 w-full pt-9 pb-2">
        <h3 className="text-grayText font-bold text-sm">List of Contents:</h3>
        <ul className="w-full flex flex-col h-32 overflow-y-auto px-1 coinScroll"></ul>
      </div>
      <div className="w-full flex gap-x-1 h-9 justify-between items-center text-sm font-bold">
        <button
          type="button"
          disabled={deleteLoading}
          onClick={deleteCategory}
          className="w-3/5 h-full rounded-xl bg-redAlterBack flex justify-center items-center text-center p-2 text-redText"
        >
          {deleteLoading ? "Loading..." : "Delete Category"}
        </button>
        <button
          type="button"
          disabled={confirmLoading}
          onClick={confirm}
          className="w-2/5 h-full rounded-xl bg-primary flex justify-center items-center text-center p-2 text-white"
        >
          {confirmLoading ? "Loading..." : "Confirm"}
        </button>
      </div>
    </form>
  );
};

export default ManageCategory;
