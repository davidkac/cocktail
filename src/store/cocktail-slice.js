import { createSlice } from "@reduxjs/toolkit";

const cocktailSlice = createSlice({
  name: "cocktail",
  initialState: {
    favouriteItems: JSON.parse(localStorage.getItem("favourites")) || [],
  },
  reducers: {
    replaceCocktailFavourites(state, action) {
      state.favouriteItems = action.payload;
    },

    addCocktailToFavourite(state, action) {
      const cocktailId = action.payload;

      // Check if cocktail exists in favorites array, if not save it to local storage
      const existingCocktail = state.favouriteItems.includes(cocktailId);
      if (!existingCocktail) {
        state.favouriteItems.push(cocktailId);
      }
      localStorage.setItem("favourites", JSON.stringify(state.favouriteItems));
    },
    removeCocktailFromFavourite(state, action) {
      const cocktailId = action.payload;
      state.favouriteItems = state.favouriteItems.filter(
        (id) => id !== cocktailId
      );
      localStorage.setItem("favourites", JSON.stringify(state.favouriteItems));
    },
  },
});

export const cocktailActions = cocktailSlice.actions;

export default cocktailSlice;
