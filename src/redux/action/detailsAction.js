import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiKey, baseURL } from "../../api/baseUrl";
export const getDetailsData = createAsyncThunk(
  "getDetails/details",
  async (id) => {
    try {
      // https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>
      const result = await axios.get(
        `${baseURL}/movie/${id}?api_key=${apiKey}`
      );
      return result.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
    }
  }
);
