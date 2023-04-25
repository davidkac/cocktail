import React from "react";
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";

const  LabelBottomNavigation = () => {
  
  return (
    <Paper
      sx={{ position: "static", bottom: 0, left: 0, right: 0, }}
      elevation={2}
    >
      <Typography variant="subtitle1" mt={2} mb={1} textAlign={"center"} color={"gray"}>
      Get our best cocktail recipes, tips, and more on our.
      </Typography>
      <Typography variant="subtitle1" mt={2} mb={1} textAlign={"center"} color={"gray"}>
        Coctails Website © 2023
      </Typography>
    </Paper>
  );
}

export default LabelBottomNavigation;
