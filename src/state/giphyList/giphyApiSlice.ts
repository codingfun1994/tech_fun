import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GifData } from "@/components/gifGrid/gif.types";

const API_KEY = "xD77ZhEYgW5YyjhnLjbkLWJoVYkohfpr";

type GiphyResponse = {
  data: GifData[];
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
  meta: {
    status: number;
    msg: string;
    response_id: string;
  };
};

export const giphyApi = createApi({
  reducerPath: "giphyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.giphy.com/v1/gifs",
  }),
  endpoints: (builder) => ({
    getTrendingGifs: builder.query<GiphyResponse, number>({
      query: () => {
        const offset = Math.floor(Math.random() * 100);
        return `trending?api_key=${API_KEY}&limit=12&offset=${offset}`;
      },
    }),
    searchGifs: builder.query<GiphyResponse, string>({
      query: (searchTerm) =>
        `search?q=${encodeURIComponent(searchTerm)}&api_key=${API_KEY}&limit=25`,
    }),
  }),
});

export const { useGetTrendingGifsQuery, useSearchGifsQuery } = giphyApi;
