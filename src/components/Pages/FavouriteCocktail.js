import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./FavouriteCocktail.module.css";
import { cocktailActions } from "../../store/cocktail-slice";

const FavouriteCocktail = () => {
  const favouriteCocktails = useSelector(
    (state) => state.cocktail.favouriteItems
  );
  const dispatch = useDispatch();

  const removeFavourite = (id) => {
    dispatch(cocktailActions.removeCocktailFromFavourite(id));
  };

  const getItemsFromLocalStorage = () => {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    dispatch(
      cocktailActions.replaceCocktailFavourites({
        favouriteItems: favourites,
        quantity: favourites.length,
      })
    );
  };

  useEffect(() => {
    getItemsFromLocalStorage();
  }, [dispatch]);

  return (
    <>
      <h1>Favourite Cocktails</h1>
      <div className={classes.container}>
        {favouriteCocktails.map((item) => {
          return (
            <div key={item.idDrink} className={classes.card}>
              <img
                src={item.strDrinkThumb}
                alt={item.strDrink}
                className={classes.img}
              />
              <h4>
                {item.strDrink}
                <button onClick={() => removeFavourite(item.idDrink)}>
                  remove favourite
                </button>
              </h4>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FavouriteCocktail;
