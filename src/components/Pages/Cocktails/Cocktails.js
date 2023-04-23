import React, { useState, useEffect } from "react";
import { getAllCocktails } from "../../Services/CocktailService";
import { useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import CocktailCard from "../../Elements/CocktailCard";

const Cocktails = () => {
  
  const [listCoctails, setListCocktails] = useState([]);
  const dispatch = useDispatch();
  
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
      <Typography variant="subtitle1" mt={2} mb={4} textAlign={"center"} color={"gray"}>
        All Cocktails
      </Typography>
      <CocktailCard listCoctails={listCoctails} dispatch={dispatch} />
    </>
  );
};

export default Cocktails;
