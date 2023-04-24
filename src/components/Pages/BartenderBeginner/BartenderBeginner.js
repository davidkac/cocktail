import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getDrinks, getFilters } from "../../Services/CocktailService";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import CocktailCard from "../../Elements/CocktailCard";

const BartenderBeginner = () => {
  const [filterDrinks, setFilterDrinks] = useState([]);
  const [category, setCategory] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [alcohol, setAlcohol] = useState([]);
  const [glasses, setGlasses] = useState([]);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  
  const queryParams = new URLSearchParams(window.location.search);

  // Get filters from query string params
  let urlFilter = { g: "", c: "", a: "", i: "" };

  for (const [key, value] of queryParams) {
    urlFilter[key] = value;
    console.log("URL in FOR", urlFilter);
  }

  const [filterVal, setFilterVal] = useState(urlFilter);

  // Get list of filters
  const fetchCategory = async () => {
    getFilters("c")
      .then((response) => setCategory(response.data.drinks))
      .then((error) => {
        throw error;
      });
  };

  const fetchGlasses = async () => {
    getFilters("g")
      .then((response) => setGlasses(response.data.drinks))
      .then((error) => {
        throw error;
      });
  };

  const fetchIngredients = async () => {
    getFilters("i")
      .then((response) => setIngredients(response.data.drinks))
      .then((error) => {
        throw error;
      });
  };

  const fetchAlcohol = async () => {
    getFilters("a")
      .then((response) => setAlcohol(response.data.drinks))
      .then((error) => {
        throw error;
      });
  };

  const listItems = (filterObj) => {
    getDrinks(filterObj)
      .then((response) => setFilterDrinks(response.data.drinks))
      .catch((error) => console.log(error));
  };

  const filterResults = (event, type) => {
    let newFilter = { ...filterVal, [type]: event.target.value };
    setFilterVal(newFilter);
    let sanitized = Object.keys(newFilter)
      .filter((key) => newFilter[key].length)
      .reduce((obj, key) => {
        return {
          ...obj,
          [key]: newFilter[key],
        };
      }, {});

    navigate({
      pathname: location.pathname,
      search: "?" + new URLSearchParams(sanitized).toString(),
    });
    listItems(newFilter);
  };

  // Initialize filters and filtered list on page load
  useEffect(() => {
    listItems(urlFilter);
    fetchCategory();
    fetchGlasses();
    fetchIngredients();
    fetchAlcohol();
  }, []);

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Ingredient</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={filterVal.i}
          label="ingredients"
          onChange={(event) => filterResults(event, "i")}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {ingredients.map((ingredient, index) => (
            <MenuItem key={index} value={ingredient.strIngredient1}>
              {ingredient.strIngredient1}
            </MenuItem>
          ))}
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
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {alcohol.map((alc, index) => (
            <MenuItem key={index} value={alc.strAlcoholic}>
              {alc.strAlcoholic}
            </MenuItem>
          ))}
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
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {category.map((cat, index) => (
            <MenuItem key={index} value={cat.strCategory}>
              {cat.strCategory}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Glass</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={filterVal.g}
          label="Glass"
          onChange={(event) => filterResults(event, "g")}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {glasses.map((glass, index) => (
            <MenuItem key={index} value={glass.strGlass}>
              {glass.strGlass}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {filterDrinks ? (
        <CocktailCard listCoctails={filterDrinks} dispatch={dispatch} />
      ) : (
        <Typography
          variant="subtitle1"
          mt={2}
          mb={4}
          textAlign={"center"}
          color={"gray"}
        >
          <i>Select at least one category to display results.</i>
        </Typography>
      )}
    </>
  );
};

export default BartenderBeginner;
