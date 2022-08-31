import React from "react";
import { BiSearch } from "react-icons/bi";
import Empty from "../Empty/Empty";
import MoviesList from "../../components/Movies/MoviesList";
import "./moviesInner.scss";
const MoviesInner = ({
  params,
  moviesData,
  loading,
  inputValue,
  setInputValue,
}) => {
  function getInputData(e) {
    let inputVal = e.target.value.trim();
    setInputValue(inputVal);
  }
  return (
    <div className="movies-inner">
      <h3>{params.replace("_", " ")}</h3>
      <form onChange={getInputData} id="search-form">
        <button>
          <BiSearch />
        </button>
        <input type="search" name="search" placeholder="Search Movies" />
      </form>
      {moviesData && moviesData?.length === 0 ? (
        <Empty inputValue={inputValue} />
      ) : (
        <MoviesList moviesData={moviesData} params={params} loading={loading} />
      )}
    </div>
  );
};

export default MoviesInner;
