import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getDrinks } from "../Services/CocktailService";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import classes from "./Items.module.css";
import { useDispatch } from "react-redux";
import { cocktailActions } from "../../store/cocktail-slice";
import { Link } from "react-router-dom";

const BartenderBeginner = () => {
  const [filterVal, setFilterVal] = useState({ g: "", c: "", a: "", i: "" });
  const [filterDrinks, setFilterDrinks] = useState([]);
  const dispatch = useDispatch();

  console.log(filterDrinks);

  const filterResults = (event, type) => {
    setFilterVal({ ...filterVal, [type]: event.target.value });
    getDrinks({ ...filterVal, [type]: event.target.value })
      .then((response) => setFilterDrinks(response.data.drinks))
      .catch((error) => console.log(error));
  };

  const addCocktailToFavouriteHandler = (cocktail) => {
    dispatch(cocktailActions.addCocktailToFavourite(cocktail));
  };

  // const renderData = (data) => {
  //   if(!data || data?.length == 0) {
  //     return;
  //   }

  //   return data.map((item,index) => {
  //     return <div>

  //     </div>
  //   })
  // }

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Glass</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={filterVal.g}
          label="Glass"
          onChange={(event) => filterResults(event, "g")}
        >
          {" "}
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Cocktail_glass">Cocktail_glass</MenuItem>
          <MenuItem value="Champagne_flute">Champagne_flute</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Category</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={filterVal.c}
          label="Category"
          onChange={(event) => filterResults(event, "c")}
        >
          {" "}
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Ordinary_Drink">Ordinary_Drink</MenuItem>
          <MenuItem value="Cocktail">Cocktail</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Alcohol</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={filterVal.a}
          label="alcohol"
          onChange={(event) => filterResults(event, "a")}
        >
          {" "}
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Alcoholic">Alcholic</MenuItem>
          <MenuItem value="Non_Alcoholic">Non Alcoholic</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Ingredient</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={filterVal.i}
          label="ingredients"
          onChange={(event) => filterResults(event, "i")}
        >
          {" "}
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Gin">Gin</MenuItem>
          <MenuItem value="Vodka">Vodka</MenuItem>
        </Select>
      </FormControl>

      <div className={classes.card}>
        {filterDrinks ? (
          filterDrinks.map((item, index) => (
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
          ))
        ) : (
          <p>select field</p>
        )}
      </div>
    </>
  );
};

export default BartenderBeginner;
