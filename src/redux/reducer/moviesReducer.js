import { createSlice } from "@reduxjs/toolkit";
import {
  changeWatchList,
  changeWishList,
  getMoviesData,
} from "../action/moviesAction";
const initialState = {
  loading: false,
  error: null,
  wishList: JSON.parse(localStorage.getItem("wishList")) || [],
  watchList: JSON.parse(localStorage.getItem("watchList")) || [],
  movies: [],
};
const moviesReducer = createSlice({
  name: "moviesReducer",
  initialState,
  reducers: {
    changeWatch: changeWatchList,
    changeWish: changeWishList,
  },
  extraReducers: {
    [getMoviesData.pending]: (state) => {
      state.loading = true;
    },
    [getMoviesData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getMoviesData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.movies = payload;
    },
  },
});
export const { changeWatch, changeWish } = moviesReducer.actions;
export default moviesReducer.reducer;
