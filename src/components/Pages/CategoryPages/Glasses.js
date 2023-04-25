import React, { useState, useEffect } from "react";
import { getFilters } from "../../Services/CocktailService";
import List from "../../Elements/List";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Glasses = () => {
  const [glasses, setGlasses] = useState([]);
  const [page, setPage] = useState(1);
  const [totalGlasses, setTotalGlasses] = useState(0);

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  let itemsPerPage = 8;

  const fetchGlasses = async () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    getFilters("g")
      .then((response) => {
        setGlasses(response.data.drinks.slice(startIndex, endIndex));
        setTotalGlasses(response.data.drinks.length);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchGlasses();
  }, [page]);

  const totalPages = Math.ceil(totalGlasses / itemsPerPage); // calculate total number of pages
  

  return (
    <>
      <List name={"Glasses"} prop={"strGlass"} data={glasses}></List>
      <Stack spacing={2} alignItems="end" justifyContent="center">
        <Pagination count={totalPages} page={page} onChange={handleChange} />
      </Stack>
    </>
  );
};

export default Glasses;
