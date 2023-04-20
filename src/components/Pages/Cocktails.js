import React, { useState, useEffect } from "react";
import { getAllCocktails } from "../Services/CocktailService";
import classes from "./Items.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cocktailActions } from "../../store/cocktail-slice";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Coctails = () => {
  const [listCoctails, setListCocktails] = useState([]);
  const dispatch = useDispatch();

 

  const fetchCocktails = async () => {
    getAllCocktails()
      .then((response) => setListCocktails(response.data.drinks))
      .catch((error) => console.log(error));
  };

  const addCocktailToFavouriteHandler = (cocktail) => {
    dispatch(cocktailActions.addCocktailToFavourite(cocktail));
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  return (
    <>
      <div className={classes.card}>
        {listCoctails.map((item, index) => (
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
                onClick={() => addCocktailToFavouriteHandler(item)}
              >
                Add To Favorite
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Coctails;
