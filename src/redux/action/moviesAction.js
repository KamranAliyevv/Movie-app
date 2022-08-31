import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiKey, baseURL } from "../../api/baseUrl";

export const changeWatchList = (state, { payload }) => {
  let copyWatchList = JSON.parse(localStorage.getItem("watchList")) || [];
  if (payload[0]) {
    let index = Object.values(copyWatchList)
      .map((item) => item.id)
      .indexOf(payload[0].id);
    if (index !== -1) {
      copyWatchList.splice(index, 1);
    } else {
      copyWatchList.push(payload[0]);
    }
  }
  if (payload[1] && payload[1].length > 0) {
    const copyResults = copyWatchList.filter((item) =>
      item.title.toLowerCase().includes(payload[1].toLowerCase())
    );
    state.watchList = copyResults;
    localStorage.setItem("watchList", JSON.stringify(copyResults));
  } else {
    state.watchList = copyWatchList;
    localStorage.setItem("watchList", JSON.stringify(copyWatchList));
  }
  return state;
};
export const changeWishList = (state, { payload }) => {
  let copyWishList = JSON.parse(localStorage.getItem("wishList")) || [];
  if (payload[0]) {
    let index = Object.values(copyWishList)
      .map((item) => item.id)
      .indexOf(payload[0].id);
    if (index !== -1) {
      copyWishList.splice(index, 1);
    } else {
      copyWishList.push(payload[0]);
    }
  }
  if (payload[1] && payload[1].length > 0) {
    const copyResults = copyWishList.filter((item) =>
      item.title.toLowerCase().includes(payload[1].toLowerCase())
    );
    state.wishList = copyResults;
    localStorage.setItem("wishList", JSON.stringify(copyResults));
  } else {
    state.wishList = copyWishList;
    localStorage.setItem("wishList", JSON.stringify(copyWishList));
  }
  return state;
};
export const getMoviesData = createAsyncThunk(
  "getMoviesData/movies",
  async ([type, filterText]) => {
    try {
      const result = await axios.get(
        `${baseURL}/movie/${type}?api_key=${apiKey}`
      );
      if (filterText.length > 0) {
        const copyResults = result.data.results.filter((item) =>
          item.title.toLowerCase().includes(filterText.toLowerCase())
        );
        result.data.results = copyResults;
      }
      return result.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
    }
  }
);
