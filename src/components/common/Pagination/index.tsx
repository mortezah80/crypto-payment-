"use client";
import React, { useState } from "react";
import { GiPlayerNext } from "react-icons/gi";
import {
  MdArrowBackIosNew,
  MdArrowForwardIos,
  MdOutlineNavigateNext,
} from "react-icons/md";

interface PaginationProps {
  totalPage: number;
  currentPage: number;
  needGotoPage?: boolean;
  containerClass?: string;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPage,
  containerClass,
  needGotoPage,
  onPageChange = () => {},
}): JSX.Element => {
  const [goToPageNumber, setGoToPageNumber] = useState<number | undefined>();

  const checkNumberIsInRange = (pageNumber: number) =>
    totalPage && pageNumber <= totalPage && pageNumber > 1;

  const handleChange = (pageNumber: number) => {
    if (checkNumberIsInRange(pageNumber)) {
      setGoToPageNumber(pageNumber);
    }
  };

  const showNumbers = pageNumberSetGenerator(currentPage, totalPage);

  return (
    <div
      className={`flex min-h-[30px] w-full max-w-[400px] items-center justify-center gap-5 text-[#757575] max-md:h-7 ${containerClass}`}
    >
      <div className="flex h-[30px] items-center justify-between gap-1">
        <button
          onClick={() =>
            onPageChange(
              checkNumberIsInRange(+currentPage - 1) ? currentPage - 1 : 1
            )
          }
          className="h-full w-[30px] rounded-full flex items-center justify-center bg-grayLight text-xs max-md:w-7 max-md:text-[10px] max-md:leading-8"
        >
          <MdArrowBackIosNew />
        </button>
        {showNumbers.map((page, index) => (
          <button
            key={index}
            className={`h-full w-[30px] rounded-full text-xs max-md:w-7 max-md:text-[10px] max-md:leading-8 ${
              page === currentPage
                ? "bg-primary text-neutral text-white"
                : "bg-grayLight"
            } ${page === "..." ? "cursor-default text-gray-400" : ""}`}
            onClick={() =>
              typeof page === "number" ? onPageChange(page) : false
            }
          >
            {page}
          </button>
        ))}
        <button
          onClick={() =>
            onPageChange(
              checkNumberIsInRange(+currentPage + 1)
                ? currentPage + 1
                : totalPage
            )
          }
          className="h-full w-[30px] rounded-full flex items-center justify-center bg-grayLight text-xs max-md:w-7 max-md:text-[10px] max-md:leading-8"
        >
          <MdArrowForwardIos />
        </button>
      </div>

      {needGotoPage ? (
        <div className="flex h-full w-full max-w-[130px] items-center gap-1 text-sm">
          <div className="w-full text-xs">برو به صفحه :</div>
          <input
            type="text"
            className="h-full w-full max-w-[40%] rounded-full bg-base-100 px-4 text-center text-xs max-md:px-2"
            value={goToPageNumber}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(+event.target.value)
            }
            onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
              if (event.code === "Enter" || event.code === "NumpadEnter") {
                if (goToPageNumber) {
                  onPageChange(goToPageNumber);
                }
              }
            }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Pagination;

const pageNumberSetGenerator = (
  currentPage: number,
  totalPage: number
): Array<number | string> => {
  const etcPlaceLookUp = {
    1: "end",
    2: "end",
    3: "end",
    4: "end",
    [totalPage - 3]: "start",
    [totalPage - 2]: "start",
    [totalPage - 1]: "start",
    [totalPage]: "start",
  };
  const pageNumbers = [...Array.from({ length: totalPage }, (i, k) => k + 1)];

  let showNumbers: (string | number)[] = pageNumbers.splice(0, 5);
  if (totalPage > 5) {
    if (etcPlaceLookUp[currentPage] === "end") {
      showNumbers = [1, 2, 3, 4, 5, "...", totalPage];
    }
    if (etcPlaceLookUp[currentPage] === "start") {
      showNumbers = [
        1,
        "...",
        totalPage - 4,
        totalPage - 3,
        totalPage - 2,
        totalPage - 1,
        totalPage,
      ];
    }
    if (!etcPlaceLookUp[currentPage]) {
      showNumbers = [
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPage,
      ];
    }
  } else {
    return showNumbers;
  }
  return currentPage <= totalPage ? showNumbers : ["error"];
};
