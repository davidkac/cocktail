import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCocktail } from "../../Services/CocktailService";
import Typography from "@mui/material/Typography";
import CocktailCard from "../../Elements/CocktailCard";

const FavouriteCocktail = () => {
  const favourites = useSelector(
    (state) => state.cocktail.favouriteItems
  );
  const [favouriteCocktails, setFavouriteCocktails] = useState([]);

  // Run only once on page load
  useEffect(() => {
    favourites.forEach((cocktailId) => {
      // Retrieve data for every cocktail in favourites from the global state
      getCocktail(cocktailId)
        .then((response) => {
          setFavouriteCocktails((prevState) => [
            ...prevState,
            response.data.drinks[0],
          ]);
        })
        .catch((error) => console.log(error));
    });
  }, []);

  // Run each time cocktail is removed from favourites
  useEffect(() => {
    // Filter cocktails comparing the favorites list from the global state
    setFavouriteCocktails((prevValue) => {
      return prevValue.filter((cocktail) => {
        return favourites.includes(cocktail.idDrink);
      });
    });
  }, [favourites]);

  return (
    <>
      <Typography
        variant="subtitle1"
        mt={2}
        mb={4}
        textAlign={"center"}
        color={"gray"}
      >
        Favourite Cocktails
      </Typography>
      <CocktailCard listCoctails={favouriteCocktails} favouritePage={true} />
    </>
  );
};

export default FavouriteCocktail;
