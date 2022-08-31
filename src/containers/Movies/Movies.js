import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesData } from "../../redux/action/moviesAction";
import { useLocation } from "react-router-dom";
import MoviesInner from "../../components/MoviesInner/MoviesInner";
const Movies = () => {
  const dispatch = useDispatch();
  let params = useLocation().pathname.replace("/", "");
  params = params.length === 0 ? "popular" : params;
  const { moviesData } = useSelector((state) => state);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    dispatch(getMoviesData([params, inputValue]));
  }, [dispatch, inputValue, params]);
  return (
    <div className="movies">
      <div className="container">
        <MoviesInner
          params={params}
          inputValue={inputValue}
          moviesData={moviesData?.movies?.results}
          loading={moviesData?.loading}
          setInputValue={setInputValue}
        />
      </div>
    </div>
  );
};

export default Movies;
