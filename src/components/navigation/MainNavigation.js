import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";


const MainNavigation = () => {



  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4">The Cocktail</Typography>
          <Button color="inherit"><Link to='/' style={{marginLeft:'2rem', color:'white'}}>Home</Link></Button>
          <Button color="inherit"><Link to='/' style={{marginLeft:'2rem', color:'white'}}>Cocktails</Link></Button>
        </Toolbar>
      </AppBar>


    </>
  );
};

export default MainNavigation;
