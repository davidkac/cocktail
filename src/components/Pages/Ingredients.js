import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getIngredients } from "../Services/CocktailService";


const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);
  console.log(ingredients);

  const fetchIngredients = async () => {
    getIngredients()
      .then((response) => setIngredients(response.data.drinks))
      .then((error) => console.log(error));
  }

  useEffect(() => {
    fetchIngredients();
  },[])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ingredients</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ingredients.map((item) => (
            <TableRow
              key={item.strIngredient1}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.strIngredient1}
              </TableCell>
            </TableRow>
             ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Ingredients;
