import React, { useState, useEffect } from "react";
import Coctails from "./Cocktails";
import FavouriteCocktail from "./FavouriteCocktail";
import { useSelector } from "react-redux";


const Home = () => {
  const [existFavourite, setExistFavourite ] = useState(false);
  const favouritesChanged = useSelector(
    (state) => state.cocktail.favouritesChanged
  );

  const getItemsFromLocalStorage = () => {
    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    console.log('FAV', favourites)
    setExistFavourite(favourites.length > 0);
  };

  useEffect(() => {
    getItemsFromLocalStorage();
  }, [favouritesChanged]);

  return (
    <>
      {existFavourite ? <FavouriteCocktail /> : <Coctails />}
    </>
  );
};

export default Home;
