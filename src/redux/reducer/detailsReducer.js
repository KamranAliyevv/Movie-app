import { createSlice } from "@reduxjs/toolkit";
import { getDetailsData } from "../action/detailsAction";
const initialState = {
  loading: false,
  error: null,
  details: [],
};
const detailsReducer = createSlice({
  name: "detailsReducer",
  initialState,
  extraReducers: {
    [getDetailsData.pending]: (state) => {
      state.loading = true;
    },
    [getDetailsData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getDetailsData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.details = payload;
    },
  },
});

export default detailsReducer.reducer;
