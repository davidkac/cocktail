import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getGlasses } from "../Services/CocktailService";



const Glasses = () => {
  const [glasses, setGlasses] = useState([]);
  console.log(glasses);

  const fetchGlasses = async () => {
    getGlasses()
      .then((response) => setGlasses(response.data.drinks))
      .then((error) => console.log(error));
  }

  useEffect(() => {
    fetchGlasses();
  },[])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Glasses</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {glasses.map((item) => (
            <TableRow
              key={item.strGlass}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.strGlass}
              </TableCell>
            </TableRow>
             ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Glasses;
