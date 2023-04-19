import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCocktail } from "../Services/CocktailService";
import classes from "./CocktailDetail.module.css";
import { useDispatch } from "react-redux";
import { cocktailActions } from "../../store/cocktail-slice";

const CocktailDetail = () => {
  const [cocktail, setCocktail] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();

  console.log(cocktail);

  const fetchCocktail = async () => {
    getCocktail(params.cocktailId)
      .then((response) => setCocktail(response.data.drinks))
      .catch((error) => console.log(error));
  };

  const addCocktailToFavouriteHandler = (cocktail) => {
    dispatch(cocktailActions.addCocktailToFavourite(cocktail));
  };

  useEffect(() => {
    fetchCocktail();
  }, []);

  return (
    <>
      {cocktail.map((item) => {
        return (
          <div key={item.idDrink} className={classes.container}>
            <div className={classes["image-container"]}>
              <h2 className={classes.title}>{item.strDrink}</h2>
              <img src={item.strDrinkThumb} className={classes.img}></img>
              <button onClick={() => addCocktailToFavouriteHandler(item)}>
                Add to favourite
              </button>
            </div>
            <div className={classes["image-properties"]}>
              <div>
                <h3>Category:</h3>
                <p>{item.strCategory}</p>
              </div>
              <div>
                <h3>Alcoholic :</h3>
                <p>{item.strAlcoholic}</p>
              </div>
              <div>
                <h3>Glass:</h3>
                <p>{item.strGlass}</p>
              </div>
              <div>
                <h3>Ingredients :</h3>
                <p>{item.strIngredient1}</p>
                <p>{item.strIngredient2}</p>
                <p>{item.strIngredient3}</p>
                <p>{item.strIngredient4}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CocktailDetail;
