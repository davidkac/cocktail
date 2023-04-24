import React, { useState, useEffect } from "react";
import { getFilters } from "../../Services/CocktailService";
import List from "../../Elements/List";

const Categories = () => {

  const [category, setCategory] = useState([]);
  const fetchCategory = async () => {
    getFilters('c')
      .then((response) => setCategory(response.data.drinks))
      .then((error) => console.log(error));
  }

  useEffect(() => {
    fetchCategory();
  },[])

  return (
    <List name={"Drinks"} prop={"strCategory"} data={category}></List>
  );
};

export default Categories;
