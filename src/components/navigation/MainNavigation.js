import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";


const MainNavigation = () => {


 
 
  return (
    <>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor:'grey'}}>
          <Typography variant="h4">The Cocktail</Typography>
          <Button color="inherit"><Link to='/' style={{marginLeft:'2rem', color:'white'}}>Home</Link></Button>
        </Toolbar>
      </AppBar>


    </>
  );
};

export default MainNavigation;
