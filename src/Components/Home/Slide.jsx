import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css";
import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";

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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  useEffect(() => {
    dispatch(entActions.filterEnt());
  }, [ent, dispatch]);

  return (
    <div style={{ position: "relative" }}>
      <Slider {...settings}>
        {trending.map((item, index) => {
          console.log(item);

          return (
            <Card
              title={item.title}
              background={item.thumbnail.trending.large}
              key={index}
              year={item.year}
              type={item.category}
              rating={item.rating}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Slide;
