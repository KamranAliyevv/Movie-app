import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "./detailsSlider.scss";
import MovieCard from "../../MovieCard/MovieCard";
import { useNavigate } from "react-router-dom";
const DetailsSlider = ({ params }) => {
  const navigate = useNavigate();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const { recommendsData } = useSelector((state) => state);
  return (
    <>
      <h3>Recommended Movies</h3>
      <Slider {...settings}>
        {recommendsData?.recommends?.results?.map((item) => {
          return (
            item?.poster_path && (
              <div
                onClick={() => navigate(`/detail/${params}/${item.id}`)}
                key={item.id}
                className="slider-item"
              >
                <MovieCard item={item} />
              </div>
            )
          );
        })}
      </Slider>
    </>
  );
};

export default DetailsSlider;
