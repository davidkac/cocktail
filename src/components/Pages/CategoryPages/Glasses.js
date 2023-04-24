import React, { useState, useEffect } from "react";
import { getFilters } from "../../Services/CocktailService";
import List from "../../Elements/List";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

const Glasses = () => {
  const [glasses, setGlasses] = useState([]);
  const [page, setPage] = useState(1);


  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  let itemsPerPage = 8;

  const fetchGlasses = async () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    getFilters("g")
      .then((response) => setGlasses(response.data.drinks.slice(startIndex,endIndex)))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchGlasses();
  }, [page]);

  return (
    <>
      <List name={"Glasses"} prop={"strGlass"} data={glasses}></List>
      <Stack spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination count={5} page={page} onChange={handleChange} />
      </Stack>
    </>
  );
};

export default Glasses;
