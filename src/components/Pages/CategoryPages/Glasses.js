import React, { useState, useEffect } from "react";
import { getFilters } from "../../Services/CocktailService";
import List from "../../Elements/List";

const Glasses = () => {

  const [glasses, setGlasses] = useState([]);
  const fetchGlasses = async () => {
    getFilters('g')
      .then((response) => setGlasses(response.data.drinks))
      .then((error) => console.log(error));
  }

  useEffect(() => {
    fetchGlasses();
  },[])

  return (
    <List name={"Glasses"} prop={"strGlass"} data={glasses}></List>
  );
};

export default Glasses;
