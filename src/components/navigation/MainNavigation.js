import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const MainNavigation = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: "grey" , display:'flex', alignItems:'center'}}>
          <Link to="/" style={{ marginLeft: "2rem", color: "white", textDecoration:"none" }}>
            <Typography variant="h4">Home</Typography>
          </Link>
          <Button color="inherit"></Button>
          <Button color="inherit">
            <Link to="/cocktail" style={{ marginLeft: "2rem", color: "white",textDecoration:"none" }}>
              Coctails
            </Link>
            <Link
              to="/bartender-beginner"
              style={{ marginLeft: "2rem", color: "white", textDecoration:"none" }}
            >
              Bartender beginner
            </Link>
            <Link
              to="/favourite"
              style={{ marginLeft: "2rem", color: "white" , textDecoration:"none"}}
            >
              Favorite Cocktail
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MainNavigation;
