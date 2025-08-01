import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('favorites')) || [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action) {
      if (!state.items.includes(action.payload)) {
        state.items.push(action.payload);
        localStorage.setItem('favorites', JSON.stringify(state.items));
      }
    },
    removeFavorite(state, action) {
      state.items = state.items.filter((id) => id !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
    clearFavorites(state) {
      state.items = [];
      localStorage.setItem('favorites', JSON.stringify([]));
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
