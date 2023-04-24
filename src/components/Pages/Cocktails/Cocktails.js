import React, { useState, useEffect } from "react";
import { getAllCocktails } from "../../Services/CocktailService";
import { useDispatch } from "react-redux";
import CocktailCard from "../../Elements/CocktailCard";
import Typography from "@mui/material/Typography";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Cocktails = () => {
  
  const [listCoctails, setListCocktails] = useState([]);
  const dispatch = useDispatch();
 
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
      setPage(value);
      window.scrollTo(0, 0); 
    }

   let itemsPerPage = 30;
  
  const fetchCocktails = async () => {
    const startIndex = (page - 1)  * itemsPerPage
    const endIndex = startIndex + itemsPerPage;
    getAllCocktails()
      .then((response) => setListCocktails(response.data.drinks.slice(startIndex,endIndex)))
      .catch((error) => console.log(error));
  };

 
  useEffect(() => {
    fetchCocktails();
  }, [page]);

  return (
    <>
      <Typography variant="subtitle1" mt={2} mb={4} textAlign={"center"} color={"gray"}>
        All Cocktails
      </Typography>
      <CocktailCard listCoctails={listCoctails} dispatch={dispatch} />
      <Stack spacing={2} >
      <Typography>Page: {page}</Typography>
      <Pagination count={4} page={page} onChange={handleChange} />
    </Stack>
    </>
  );
};

export default Cocktails;
