import { createSlice } from "@reduxjs/toolkit";

const cocktailSlice = createSlice({
  name: "cocktail",
  initialState: {
    favouriteItems: [],
    quantity: 0,
    changed: false,
  },
  reducers: {
    replaceCocktailFavourites(state, action) {
      state.favouriteItems = action.payload.favouriteItems;
      state.quantity = action.payload.quantity;
    },

    addCocktailToFavourite(state, action) {
      const cocktail = action.payload;
      const existingCocktail = state.favouriteItems.find(
        (item) => item.idDrink === cocktail.idDrink
      );
      state.changed = true;
      if (existingCocktail) {
        existingCocktail.quantity++;
      } else {
        state.favouriteItems.push({ ...cocktail, quantity: 1 });
      }
      state.quantity++;
      localStorage.setItem(
        "favourites",
        JSON.stringify(state.favouriteItems)
      );
    },

    removeCocktailFromFavourite(state, action) {
      const cocktailId = action.payload;
      const existingCocktail = state.favouriteItems.find(
        (item) => item.idDrink === cocktailId
      );
      state.changed = true;
      if (existingCocktail) {
        if (existingCocktail.quantity === 1) {
          state.favouriteItems = state.favouriteItems.filter(
            (item) => item.idDrink !== cocktailId
          );
        } else {
          existingCocktail.quantity--;
        }
        state.quantity--;
        localStorage.setItem(
          "favourites",
          JSON.stringify(state.favouriteItems)
        );
      }
    },
  },
});

export const cocktailActions = cocktailSlice.actions;

export default cocktailSlice;
