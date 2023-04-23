import React, { useState, useEffect } from "react";
import { getGlasses } from "../../Services/CocktailService";
import List from "../../Elements/List";

const Glasses = () => {

  const [glasses, setGlasses] = useState([]);
  const fetchGlasses = async () => {
    getGlasses()
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
