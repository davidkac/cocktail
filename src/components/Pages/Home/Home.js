import React, { useState, useEffect } from "react";
import Coctails from "../Cocktails/Cocktails";
import FavouriteCocktail from "../FavouriteCocktail/FavouriteCocktail";
import { useSelector } from "react-redux";


const Home = () => {

// Get favorites from global state
  const favourites = useSelector(
    (state) => state.cocktail.favouriteItems
  );
  const [existFavourite, setExistFavourite ] = useState(favourites.length);

  
  useEffect(() => {
    // Update state & view when favorites change
    setExistFavourite(favourites.length);
  }, [favourites]);

  return (
    <>
      {existFavourite ? <FavouriteCocktail /> : <Coctails />}
    </>
  );
};

export default Home;


