import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCocktail } from "../Services/CocktailService";
import classes from "./CocktailDetail.module.css";

const CocktailDetail = () => {
  const [cocktail, setCocktail] = useState([]);

  
  const params = useParams();
  console.log(cocktail);

  const fetchCocktail = async () => {
    getCocktail(params.cocktailId)
      .then((response) => setCocktail(response.data.drinks))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCocktail();
  }, []);

  return (
    <>
     
      {cocktail.map((item) => {
        return (
          <div className={classes.cocktail} key={item.idDrink}>
            <h2>{item.strDrink}</h2>
            <img src={item.strDrinkThumb} className={classes.img}></img>
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
        );
      })}
    </>
  );
};

export default CocktailDetail;
