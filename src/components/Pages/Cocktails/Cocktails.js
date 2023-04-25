import React, { useState, useEffect } from "react";
import { getAllCocktails } from "../../Services/CocktailService";
import { useDispatch } from "react-redux";
import CocktailCard from "../../Elements/CocktailCard";
import Typography from "@mui/material/Typography";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Cocktails = () => {
  
  const [listCoctails, setListCocktails] = useState([]);
  const [totalCocktails, setTotalCocktails ] = useState(0);
  const dispatch = useDispatch();
 
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
      setPage(value);
      window.scrollTo(0, 0); 
    }

   let itemsPerPage = 28;
  
  const fetchCocktails = async () => {
    const startIndex = (page - 1)  * itemsPerPage
    const endIndex = startIndex + itemsPerPage;
    getAllCocktails()
    .then((response) => {
      setListCocktails(response.data.drinks.slice(startIndex,endIndex));
      setTotalCocktails(response.data.drinks.length); // set total number of cocktails
      })
      .catch((error) => console.log(error));
  };
 
  const totalPages = Math.ceil(totalCocktails / itemsPerPage); // calculate total number of pages
 
  useEffect(() => {
    fetchCocktails();
  }, [page]);

  return (
    <>
      <Typography variant="subtitle1" mt={2} mb={4} textAlign={"center"} color={"gray"}>
        All Cocktails
      </Typography>
      <CocktailCard listCoctails={listCoctails} dispatch={dispatch} />
      <Stack spacing={2} alignItems='end' justifyContent='center' >
      <Pagination count={totalPages} page={page} onChange={handleChange} />
    </Stack>
    </>
  );
};

export default Cocktails;
