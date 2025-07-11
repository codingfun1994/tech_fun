import { configureStore } from "@reduxjs/toolkit";
import { giphyApi } from "./giphyList/giphyApiSlice";

export const store = configureStore({
  reducer: {
    [giphyApi.reducerPath]: giphyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(giphyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
