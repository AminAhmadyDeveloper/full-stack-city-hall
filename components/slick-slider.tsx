"use client";
import Slider, { Settings } from "react-slick";
import slide from "../assets/images/post-images/gallery-post-01.jpg";
import Image from "next/image";
import { FC } from "react";

const slides = [
  {
    image: slide,
    title: "1شهرداری دریان",
    description: "شهرداری دریان متن شماره 1",
  },
  {
    image: slide,
    title: " 2 شهرداری دریان",
    description: "شهرداری دریان متن شماره 2",
  },
  {
    image: slide,
    title: "3شهرداری دریان",
    description: "شهرداری دریان متن شماره 3",
  },
  {
    image: slide,
    title: "4شهرداری دریان",
    description: "شهرداری دریان متن شماره 4",
  },
];

interface SliderArrowProps {
  type: "next" | "prev";
  onClick?: () => void;
}

const SliderArrow: FC<SliderArrowProps> = ({ type, onClick }) => {
  if (type === "next") {
    return (
      <button className="slide-arrow next-arrow" onClick={onClick}>
        <i className="fal fa-arrow-right" />
      </button>
    );
  }
  if (type === "prev") {
    return (
      <button className="slide-arrow prev-arrow" onClick={onClick}>
        <i className="fal fa-arrow-left" />
      </button>
    );
  }
};

const SlickSlider = () => {
  const settings: Settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    fade: true,
    adaptiveHeight: true,
    cssEase: "linear",
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
  };

  return (
    <div>
      <Slider {...settings}>
        {slides.reverse().map((slide) => (
          <>
            <div className="content-block">
              <div className="post-thumbnail">
                <a href="post-details.html">
                  <Image src={slide.image} alt="Post Images" width={0} height={0} />
                </a>
              </div>
              <div className="post-content">
                <div className="post-cat">
                  <div className="post-cat-list">
                    <a className="hover-flip-item-wrapper" href="#">
                      <span className="hover-flip-item">
                        <span data-text={slide.title}>{slide.title}</span>
                      </span>
                    </a>
                  </div>
                </div>
                <h2 className="title">
                  <a href="post-details.html">{slide.description}</a>
                </h2>
              </div>
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
