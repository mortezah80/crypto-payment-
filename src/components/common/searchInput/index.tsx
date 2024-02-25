import React from "react";
import SearchIcon from '@/assets/search.svg'
interface SearchInputProps {
  placeHolder?: string;
}
const InputSearch: React.FC<SearchInputProps> = ({ placeHolder }) => {
  return (
    <div className="flex px-[13px] max-xl:w-full w-full max-sm:flex-1 bg-grayLight h-[36px] rounded-[12px] justify-between items-center">
      <input type="text" placeholder={placeHolder} className="bg-transparent text-[12px] font-[400] focus:border-none focus:outline-none w-full" />
      <span><SearchIcon /></span>
    </div>
  );
};

export default InputSearch;
