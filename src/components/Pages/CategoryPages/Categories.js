import React, { useState, useEffect } from "react";
import { getFilters } from "../../Services/CocktailService";
import List from "../../Elements/List";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Categories = () => {
  const [category, setCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCatagory, setTotalCategory] = useState(0);

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  let itemsPerPage = 8;

  const fetchCategory = async () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    getFilters("c")
      .then((response) => {
        setCategory(response.data.drinks.slice(startIndex, endIndex));
        setTotalCategory(response.data.drinks.length);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCategory();
  }, [page]);

  const totalPages = Math.ceil(totalCatagory / itemsPerPage);

  return (
    <>
      <List name={"Drinks"} prop={"strCategory"} data={category}></List>
      <Stack spacing={2} alignItems="end" justifyContent="center">
        <Pagination count={totalPages} page={page} onChange={handleChange} />
      </Stack>
    </>
  );
};

export default Categories;
