import axios from "axios";
// import dotenv from "dotenv";
// require("dotenv").config();

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: "en-US",
  },
});

export const movieApi = {
  nowPlaying: () => api.get(`movie/now_playing`),
  upcoming: () => api.get(`movie/upcoming`),
  popular: () => api.get(`movie/popular`),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  movieCredit: (id) => api.get(`movie/${id}/credits`),
  movieSearch: (term) =>
    api.get(`search/movie`, {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const tvApi = {
  topRated: () => api.get(`tv/top_rated`),
  popular: () => api.get(`tv/popular`),
  airingToday: () => api.get(`tv/airing_today`),
  tvDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  tvSearch: (term) =>
    api.get(`search/tv`, {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
