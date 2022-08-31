import React from "react";
import { FaStar } from "react-icons/fa";
import "./detailsBody.scss";
import { useDispatch } from "react-redux";
import { HiHeart } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import { BsBookmarkPlus } from "react-icons/bs";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { baseImgURL } from "../../../api/baseUrl";
import { changeWatch, changeWish } from "../../../redux/reducer/moviesReducer";
const DetailsBody = ({ detailsData }) => {
  const wishList = JSON.parse(localStorage.getItem("wishList"));
  const watchList = JSON.parse(localStorage.getItem("watchList"));
  const dispatch = useDispatch();
  return (
    <div className="details-body">
      <div className="ant-row ant-row-center Details-more">
        <div className="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-10">
          <div className="detail-img">
            {detailsData?.poster_path && (
              <img
                src={`${baseImgURL}${detailsData?.poster_path}`}
                alt="movie"
              />
            )}
          </div>
        </div>
        <div className="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-10">
          <div className="details-info">
            <h4>{detailsData?.tagline}</h4>
            <p>{detailsData?.overview}</p>
            <div className="movie-ratings">
              <span>
                <FaStar />
                {detailsData?.vote_average?.toFixed(1)} (
                {detailsData?.vote_count} votes)
              </span>
              <div className="movie-btns">
                <div
                  onClick={() => dispatch(changeWish([detailsData]))}
                  className="heart"
                >
                  {!Object.values(
                    (wishList || [])?.map((item) => item.id)
                  ).includes(detailsData?.id) ? (
                    <HiOutlineHeart />
                  ) : (
                    <HiHeart />
                  )}
                </div>
                <div
                  onClick={() => dispatch(changeWatch([detailsData]))}
                  className="watch"
                >
                  {!Object.values(
                    (watchList || [])?.map((item) => item.id)
                  ).includes(detailsData?.id) ? (
                    <BsBookmarkPlus />
                  ) : (
                    <BsBookmarkPlusFill />
                  )}
                </div>
              </div>
            </div>
            <ul className="info-main">
              <li>
                <span>Production Companies:</span>
                <h3>
                  {detailsData?.production_companies?.map((item, index) => {
                    if (index < 1) {
                      return item.name;
                    }
                    return ` , ${item.name}`;
                  })}
                </h3>
              </li>
              <li>
                <span>Release Date:</span>
                <h3>{detailsData?.release_date}</h3>
              </li>
              <li>
                <span>Run time</span>
                <h3>{detailsData?.runtime} min</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsBody;
