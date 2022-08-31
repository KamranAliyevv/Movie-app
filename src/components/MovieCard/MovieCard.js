import React from "react";
import "./movieCard.scss";
import { FaStar } from "react-icons/fa";
import { HiHeart } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import { BsBookmarkPlus } from "react-icons/bs";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { baseImgURL } from "../../api/baseUrl";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeWatch, changeWish } from "../../redux/reducer/moviesReducer";
const MovieCard = ({ item }) => {
  const { watchList, wishList } = useSelector((state) => state.moviesData);
  const dispatch = useDispatch();
  function addWishList(e, movie) {
    e.stopPropagation();
    dispatch(changeWish([movie]));
  }
  function addWatchList(e, movie) {
    e.stopPropagation();
    dispatch(changeWatch([movie]));
  }
  return (
    <div className="movie-item">
      <img src={`${baseImgURL}${item?.poster_path}`} alt="movie" />
      <span className="imdb-rating">
        <FaStar />
        {item?.vote_average?.toFixed(1)}
      </span>
      <h2>{item.title}</h2>
      <div className="movie-btns">
        <div onClick={(e) => addWishList(e, item)} className="heart">
          {!Object.values((wishList || [])?.map((item) => item.id)).includes(
            item.id
          ) ? (
            <HiOutlineHeart />
          ) : (
            <HiHeart />
          )}
        </div>
        <div onClick={(e) => addWatchList(e, item)} className="watch">
          {!Object.values((watchList || [])?.map((item) => item.id)).includes(
            item.id
          ) ? (
            <BsBookmarkPlus />
          ) : (
            <BsBookmarkPlusFill />
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
