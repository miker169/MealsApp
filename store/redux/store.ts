import { configureStore } from "@reduxjs/toolkit";
import favorites from "./favorites";

export const store = configureStore({
  reducer: {
    favoriteMeals: favorites.favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
