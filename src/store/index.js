import { configureStore } from "@reduxjs/toolkit";
import cocktailSlice from "./cocktail-slice";

const store = configureStore({
    reducer: { cocktail: cocktailSlice.reducer },
});

export default store;