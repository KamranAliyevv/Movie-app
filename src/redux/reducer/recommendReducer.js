import { createSlice } from "@reduxjs/toolkit";
import { getDetailsData } from "../action/detailsAction";
import { getRecommendData } from "../action/recommendAction";
const initialState = {
  loading: false,
  error: null,
  recommends: [],
};
const recommendReducer = createSlice({
  name: "recommendReducer",
  initialState,
  extraReducers: {
    [getDetailsData.pending]: (state) => {
      getRecommendData.loading = true;
    },
    [getRecommendData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getRecommendData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.recommends = payload;
    },
  },
});

export default recommendReducer.reducer;
