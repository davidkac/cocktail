import React, { useState, useEffect } from "react";
import { getFilters } from "../../Services/CocktailService";
import List from "../../Elements/List";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);
  const [page, setPage] = useState(1);
  const [totalIngridients, setTotalIngridients] = useState(0);

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  let itemsPerPage = 8;
  const fetchIngredients = async () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    getFilters("i")
      .then((response) => {
        setIngredients(response.data.drinks.slice(startIndex, endIndex));
        setTotalIngridients(response.data.drinks.length);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchIngredients();
  }, [page]);

  const totalPages = Math.ceil(totalIngridients / itemsPerPage); // calculate total number of pages

  return (
    <>
      <List
        name={"Ingredients"}
        prop={"strIngredient1"}
        data={ingredients}
      ></List>
      <Stack spacing={2} alignItems="end" justifyContent="center">
        <Pagination count={totalPages} page={page} onChange={handleChange} />
      </Stack>
    </>
  );
};

export default Ingredients;
