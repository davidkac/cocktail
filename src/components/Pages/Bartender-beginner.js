import React, { useEffect, useState } from "react";
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
import { useLocation, useNavigate } from "react-router-dom";



const BartenderBeginner = () => {
  
  const [filterDrinks, setFilterDrinks] = useState([]);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(window.location.search)

  console.log(queryParams)


  // Get filters from query string params
  let urlFilter = { g: "", c: "", a: "", i: "" };

  for (const [key, value] of queryParams) {
    urlFilter[key] = value;
  }

  const [filterVal, setFilterVal] = useState(urlFilter);
  console.log('CURRENT urlFilter',urlFilter)

  // console.log(filterDrinks);

  const listItems = (filterObj)=>{
    getDrinks(filterObj)
      .then((response) => setFilterDrinks(response.data.drinks))
      .catch((error) => console.log(error));
  }

  const filterResults = (event, type) => {
    let newFilter = { ...filterVal, [type]: event.target.value };
    setFilterVal(newFilter);
    let sanitized = Object.keys(newFilter)
    .filter(key => newFilter[key].length)
    .reduce((obj, key) => {
      console.log(obj)
      return {
        ...obj,
        [key]: newFilter[key]
      };
    }, {});
    console.log(sanitized)
    navigate({
      pathname: location.pathname,
      search: "?" + new URLSearchParams(sanitized).toString()
    });
    listItems(newFilter);
  };

  const addCocktailToFavouriteHandler = (cocktail) => {
    dispatch(cocktailActions.addCocktailToFavourite(cocktail));
  };

  // Initialize filtered list on page load
  useEffect(() => {
  listItems(urlFilter);

  },[])


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
