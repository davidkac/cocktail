import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { cocktailActions } from "../../../store/cocktail-slice";
import Typography from '@mui/material/Typography';
import CocktailCard from "../../Elements/CocktailCard";


const FavouriteCocktail = () => {
  const favouriteCocktails = useSelector(
    (state) => state.cocktail.favouriteItems
  );
  const dispatch = useDispatch();

  const getItemsFromLocalStorage = () => {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    dispatch(
      cocktailActions.replaceCocktailFavourites({
        favouriteItems: favourites,
      })
    );
  };

  useEffect(() => {
    getItemsFromLocalStorage();
  }, [dispatch]);

  return (
    <>
      <Typography variant="subtitle1" mt={2} mb={4} textAlign={"center"} color={"gray"}>
        Favourite Cocktails
      </Typography>
      <CocktailCard listCoctails={favouriteCocktails} dispatch={dispatch} favouritePage={true} />
    </>
  );
};

export default FavouriteCocktail;
