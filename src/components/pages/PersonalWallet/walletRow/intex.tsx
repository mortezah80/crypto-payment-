"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface WalletRowProps {
  children: React.ReactNode;
}
const WalletRow: React.FC<WalletRowProps> = ({ children }) => {
  const settings = {
    dots: false,
    infinite: false,
    swipeToSlide: true,
    speed: 0,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <div className="w-[80%]">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default WalletRow;
