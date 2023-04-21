import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Items.module.css";
import { cocktailActions } from "../../store/cocktail-slice";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


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
      })
    );
  };

  useEffect(() => {
    getItemsFromLocalStorage();
  }, [dispatch]);

  return (
    <>
      <h1>Favourite Cocktails</h1>
      <div className={classes.card}>
        {favouriteCocktails.map((item, index) => (
          <Card sx={{ width: 260 }} key={index}>
            <Link to={`/cocktail/${item.idDrink}`}>
              <CardMedia
                sx={{ height: 250 }}
                image={item.strDrinkThumb}
                title={item.strDrink}
              />
            </Link>
            <CardContent sx={{ height: 5 }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontSize: "16px" }}
              >
                {item.strDrink}
              </Typography>
            </CardContent>
            <CardActions sx={{ height: 15 }}>
              <Button
                size="small"
                onClick={() => removeFavourite(item.idDrink)}
              >
               Remove favorite
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
};

export default FavouriteCocktail;
