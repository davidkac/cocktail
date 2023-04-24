import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Typography from '@mui/material/Typography';
import Paper from "@mui/material/Paper";


const List = ({data, name, prop}) => {

  return (
    <TableContainer component={Paper}>
      <Typography variant="subtitle1" mt={2} mb={4} textAlign={"center"} color={"gray"}>
        Types of {name}
      </Typography>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item[prop]}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item[prop]}
              </TableCell>
            </TableRow>
             ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
