import { useState, useEffect } from "react";

export const useSizeChecker = (
  widthSizeChecker: number = 1024,
  heightSizeChecker: number = 920
) => {
  const [widthSize, setWidthSize] = useState<number>(0);
  const [heightSize, setHeightSize] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      setWidthSize(window.innerWidth);
      setHeightSize(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return [widthSize > widthSizeChecker, heightSize > heightSizeChecker];
};
