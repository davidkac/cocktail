import React, { useState, useEffect } from "react";
import { getFilters } from "../../Services/CocktailService";
import List from "../../Elements/List";

const Ingredients = () => {

  const [ingredients, setIngredients] = useState([]);
  const fetchIngredients = async () => {
    getFilters('i')
      .then((response) => setIngredients(response.data.drinks))
      .then((error) => console.log(error));
  }

  useEffect(() => {
    fetchIngredients();
  },[])

  return (
    <List name={"Ingredients"} prop={"strIngredient1"} data={ingredients}></List>
  );
};

export default Ingredients;