import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getCategories } from "../Services/CocktailService";


const Categories = () => {
  const [category, setCategory] = useState([]);
  console.log(category);

  const fetchCategory = async () => {
    getCategories()
      .then((response) => setCategory(response.data.drinks))
      .then((error) => console.log(error));
  }

  useEffect(() => {
    fetchCategory();
  },[])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {category.map((item) => (
            <TableRow
              key={item.strCategory}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.strCategory}
              </TableCell>
            </TableRow>
             ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Categories;
