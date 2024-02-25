"use client";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { needs } from '../db/Need'
import NeedItem from '../UI/NeedItem'

const NeedsGripResponsive = () => {
  const settings = {
    centerMode: true,
    slidesToShow: 3,
    dots: true,
    speed: 1000,
    swipeToSlide: true,
    rows: 2,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
          focusOnSelect: true,
        },
      },
      {
        breakpoint: 560,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
          focusOnSelect: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
          focusOnSelect: true,
          centerPadding: "100px",
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {[...needs].map((value, index) => {
        return (
          <NeedItem
            label={value.label}
            key={index}
            Icon={value.Icon}
            color={
              (index % 2 === 0 && index < 6) || (index >= 6 && index % 2 === 1)
                ? '#1093FF'
                : '#F6BF53'
            }
            background={
              (index % 2 === 0 && index < 6) || (index >= 6 && index % 2 === 1)
                ? '#E0F1FF'
                : '#FBF2DF'
            }
          />
        )
      })}
    </Slider>
  )
}

export default NeedsGripResponsive
