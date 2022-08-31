import { configureStore } from "@reduxjs/toolkit";
import detailsReducer from "./reducer/detailsReducer";
import moviesReducer from "./reducer/moviesReducer";
import recommendReducer from "./reducer/recommendReducer";

export const store = configureStore({
  reducer: {
    moviesData: moviesReducer,
    detailsData: detailsReducer,
    recommendsData: recommendReducer,
  },
});
