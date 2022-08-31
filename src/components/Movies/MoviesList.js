import React from "react";
import "./moviesList.scss";
import { useNavigate } from "react-router-dom";
import MovieListSkeleton from "../Skeleton/MovieListSkeleton";
import { v4 as uuidv4 } from "uuid";
import MovieCard from "../MovieCard/MovieCard";
const MoviesList = ({ moviesData, loading, params }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="movies-list">
        <p>
          All <span>({moviesData?.length || 0})</span>
        </p>
        <div className="ant-row">
          {!loading
            ? moviesData?.map((item) => {
                return (
                  <div
                    onClick={() => navigate(`/detail/${params}/${item.id}`)}
                    key={item.id}
                    className="ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-8 ant-col-lg-6"
                  >
                    <MovieCard item={item} />
                  </div>
                );
              })
            : new Array(4).fill("").map((item) => {
                return (
                  <div
                    key={uuidv4()}
                    className="ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-8 ant-col-lg-6"
                  >
                    <MovieListSkeleton />
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
};

export default MoviesList;
