import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiKey, baseURL } from "../../api/baseUrl";
export const getRecommendData = createAsyncThunk(
  "getRecommendsData/recommends",
  async (id) => {
    try {
      const result = await axios.get(
        `${baseURL}/movie/${id}/recommendations?api_key=${apiKey}`
      );
      return result.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
    }
  }
);
