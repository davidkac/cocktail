import { createSlice } from "@reduxjs/toolkit";

const cocktailSlice = createSlice({
  name: "cocktail",
  initialState: {
    favouriteItems: [],
    favouritesChanged: false,
  },
  reducers: {
    replaceCocktailFavourites(state, action) {
      state.favouriteItems = action.payload.favouriteItems;
    },

    addCocktailToFavourite(state, action) {
      const cocktail = action.payload;
      const existingCocktail = state.favouriteItems.find(
        (item) => item.idDrink === cocktail.idDrink
      );
      state.favouritesChanged = true;
      if (!existingCocktail) {
        state.favouriteItems.push({ ...cocktail });
      }
      localStorage.setItem(
        "favourites",
        JSON.stringify(state.favouriteItems)
      );
    },

    removeCocktailFromFavourite(state, action) {
      const cocktailId = action.payload;
      state.favouriteItems = state.favouriteItems.filter(
        (item) => item.idDrink !== cocktailId
      )
      state.favouritesChanged = Boolean(state.favouriteItems.length);
      localStorage.setItem(
        "favourites",
        JSON.stringify(state.favouriteItems)
      )
      
      
   
  },
}});

export const cocktailActions = cocktailSlice.actions;

export default cocktailSlice;
