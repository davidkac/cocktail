import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import classes from "./Button.module.css";
import { useDispatch , useSelector} from "react-redux";
import { cocktailActions } from "../../store/cocktail-slice";


const MainNavigation = () => {

  const dispatch = useDispatch();
  const cocktailQuantity = useSelector((state) => state.cocktail.quantity);

  return (
    <>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: "grey" }}>
          <Typography variant="h4">The Cocktail</Typography>
          <Button color="inherit">
            <Link to="/" style={{ marginLeft: "2rem", color: "white" }}>
              Home
            </Link>
          </Button>
          <button className={classes.button}><Link to='/favourite'>
            <span>FavouriteCocktail</span>
            <span className={classes.badge}>{cocktailQuantity}</span></Link>
          </button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MainNavigation;
