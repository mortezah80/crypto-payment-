"use client";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import IconCard from '../UI/IconCard'
import P1 from '../../../../assets/Icons/01.svg'
import P2 from '../../../../assets/Icons/02.svg'
import P3 from '../../../../assets/Icons/03.svg'
import P4 from '../../../../assets/Icons/04.svg'
import P5 from '../../../../assets/Icons/05.svg'
import P6 from '../../../../assets/Icons/06.svg'
import P7 from '../../../../assets/Icons/07.svg'
import P9 from '../../../../assets/Icons/09.svg'
import P10 from '../../../../assets/Icons/010.svg'
import P11 from '../../../../assets/Icons/011.svg'
const conins = [
  P1,
  P2,
  P3,
  P4,
  P5,
  P6,
  P7,
  P9,
  P10,
  P11,
  P1,
  P2,
  P3,
  P4,
  P5,
  P6,
  P7,
  P9,
  P10,
  P11,
]

const CoinRow = () => {
  const settings = {
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    focusOnSelect: true,
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
    ],
  };
  return (
    <Slider {...settings}>
      {conins.map((value, index) => {
        return <IconCard key={index} Icon={value} />
      })}
    </Slider>
  )
}

export default CoinRow
