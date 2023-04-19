import React, { useState, useEffect } from "react";
import { getAllCocktails } from "../Services/CocktailService";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [listCoctails, setListCocktails] = useState([]);

  // console.log(listCoctails);

  const fetchCocktails = async () => {
    getAllCocktails()
      .then((response) => setListCocktails(response.data.drinks))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  return (
    <>
      <div className={classes.main}>
      <div className={classes.container}>
        {listCoctails.map((item) => {
          return (
            <div key={item.idDrink} className={classes.card}>
              <Link to={`/cocktail/${item.idDrink}`}>
                <img src={item.strDrinkThumb} className={classes.img}></img>
              </Link>
              <h4>{item.strDrink}</h4>
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Home;