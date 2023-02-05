import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Meal from "../../models/meal";

interface FavoritesState {
  ids: Array<string>;
}

const initialState: FavoritesState = {
  ids: [],
};
const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<{ id: string }>) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action: PayloadAction<{ id: string }>) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export default {
  favoritesReducer: favoritesSlice.reducer,
};

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
