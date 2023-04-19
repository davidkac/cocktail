import React, { useState, useEffect } from "react";
import { getAllCocktails } from "../Services/CocktailService";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cocktailActions } from "../../store/cocktail-slice";

const Home = () => {
  const [listCoctails, setListCocktails] = useState([]);
  const dispatch = useDispatch();
  

  // console.log(listCoctails);

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
      <div className={classes.main}>
      <div className={classes.container}>
        {listCoctails.map((item) => {
          return (
            <div key={item.idDrink} className={classes.card}>
              <Link to={`/cocktail/${item.idDrink}`}>
                <img src={item.strDrinkThumb} className={classes.img}></img>
              </Link>
              <h4>{item.strDrink}
              <button onClick={() => addCocktailToFavouriteHandler(item)}>
                Add to favourite
              </button></h4>
              
            </div>
            
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Home;