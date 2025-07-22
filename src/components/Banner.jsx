import React from "react";
import { banners } from "../data/Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
const Banner = () => {
  const PrevArrow = ({ className, onClick }) => (
    <div className={className} onClick={onClick}>
      <FaArrowLeft className="text-2xl text-black" />
    </div>
  );

  const NextArrow = ({ className, onClick }) => (
    <div className={className} onClick={onClick}>
      <FaArrowRight className="text-2xl text-black" />
    </div>
  );

  var setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="w-full p-7 md:w-[80%] md:m-auto">
      <div>
        <Slider {...setting}>
          {banners.map((value, index) => (
            <div key={index}>
              <img src={value.banner} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
