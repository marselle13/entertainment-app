import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import CardSlider from "../UI/CardSlider";
import { entActions } from "../Store/ent-slice";

const Slide = () => {
  const ent = useSelector((state) => state.ent.items);
  const trending = useSelector((state) => state.ent.trendings);
  const dispatch = useDispatch();
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };
  useEffect(() => {
    dispatch(entActions.filterTrending());
  }, [ent, dispatch]);

  const bookmarkHandler = (title) => {
    dispatch(entActions.toggle(title));
  };

  return (
    <div
      style={{
        position: "relative",
        maxWidth: "1700px",
      }}
    >
      <Slider {...settings}>
        {trending.map((item, index) => {
          return (
            <CardSlider
              title={item.title}
              background={item.thumbnail.trending.large}
              key={index}
              year={item.year}
              type={item.category}
              rating={item.rating}
              isBookmark={item.isBookmarked}
              onClick={() => bookmarkHandler(item.title)}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Slide;
