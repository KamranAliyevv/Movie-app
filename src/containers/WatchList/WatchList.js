import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import MoviesInner from "../../components/MoviesInner/MoviesInner";
import { changeWatch } from "../../redux/reducer/moviesReducer";
const WatchList = () => {
  const dispatch = useDispatch();
  let params = useLocation().pathname.replace("/", "");
  params = params.length === 0 ? "popular" : params;
  const { moviesData } = useSelector((state) => state);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    dispatch(changeWatch([null, inputValue]));
  }, [dispatch, inputValue, params]);
  return (
    <div className="watch-list">
      <div className="container">
        <MoviesInner
          params={params}
          inputValue={inputValue}
          moviesData={moviesData?.watchList}
          loading={moviesData?.loading}
          setInputValue={setInputValue}
        />
      </div>
    </div>
  );
};

export default WatchList;
