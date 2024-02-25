import { FC } from "react";

interface IProps {
  size: number;
}

const Loading: FC<IProps> = ({ size }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="animate-spin border border-primary"
    ></div>
  );
};

export default Loading;
