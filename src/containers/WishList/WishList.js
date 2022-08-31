import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import MoviesInner from "../../components/MoviesInner/MoviesInner";
import { changeWish } from "../../redux/reducer/moviesReducer";
const WishList = () => {
  const dispatch = useDispatch();
  let params = useLocation().pathname.replace("/", "");
  params = params.length === 0 ? "popular" : params;
  const { moviesData } = useSelector((state) => state);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    dispatch(changeWish([null, inputValue]));
  }, [dispatch, inputValue, params]);
  return (
    <div className="wish-list">
      <div className="container">
        <MoviesInner
          params={params}
          inputValue={inputValue}
          moviesData={moviesData?.wishList}
          loading={moviesData?.loading}
          setInputValue={setInputValue}
        />
      </div>
    </div>
  );
};

export default WishList;
