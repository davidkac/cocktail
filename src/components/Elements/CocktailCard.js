import React, { useState, useEffect } from "react";
import classes from "./CocktailCard.module.css";
import { Link } from "react-router-dom";
import { cocktailActions } from "../../store/cocktail-slice";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import InfoIcon from "@mui/icons-material/Info";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

// Add Dialog Slide In transition
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CocktailCard = ({ listCoctails, dispatch, favouritePage }) => {
  // Handle dialog state
  const [open, setOpen] = useState(false);

  // Used to pass selected item to dialog
  const [activeItem, setActiveItem] = useState({});

  // Actions after dialog is opened/closed
  const handleClickOpen = (item) => {
    setOpen(true);
    setActiveItem(item);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Methods for adding/removing cocktails from fav list
  const addToFavourite = (cocktail) => {
    dispatch(cocktailActions.addCocktailToFavourite(cocktail));
  };

  const removeFromFavourite = (id) => {
    dispatch(cocktailActions.removeCocktailFromFavourite(id));
    setOpen(false);
  };

  return (
    <>
      <div className={classes.cardWrapper}>
        {listCoctails.map((item, index) => (
          <Card className={classes.card} sx={{ width: 260, m: 1 }} key={index}>
            <Link to={`/cocktail/${item.idDrink}`}>
              <CardMedia
                sx={{ height: 250 }}
                image={item.strDrinkThumb}
                title={item.strDrink}
              />
            </Link>
            <CardContent sx={{ height: 7 }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontSize: "14px" }}
              >
                {item.strDrink}
              </Typography>
            </CardContent>
            <CardActions
              sx={{ height: 15, fontSize: "11px", display: "block" }}
            >
              <Link to={`/cocktail/${item.idDrink}`}>
                <Button
                  className={classes.actionBtn}
                  size="small"
                  sx={{ fontSize: "9.5px" }}
                >
                  <InfoIcon
                    sx={{
                      display: { xs: "none", md: "flex" },
                      mr: 1,
                      fontSize: "11px",
                    }}
                  />
                  Details
                </Button>
              </Link>
              {favouritePage ? (
                <Button
                  className={classes.actionBtn}
                  size="small"
                  sx={{ fontSize: "9.5px", float: "right" }}
                  onClick={() => handleClickOpen(item)}
                >
                  <HeartBrokenIcon
                    sx={{
                      display: { xs: "none", md: "flex" },
                      mr: 1,
                      fontSize: "11px",
                    }}
                  />
                  Remove from Favourites
                </Button>
              ) : (
                <Button
                  className={classes.actionBtn}
                  size="small"
                  sx={{ fontSize: "9.5px", float: "right" }}
                  onClick={() => addToFavourite(item)}
                >
                  <FavoriteIcon
                    sx={{
                      display: { xs: "none", md: "flex" },
                      mr: 1,
                      fontSize: "11px",
                    }}
                  />
                  Add to Favourites
                </Button>
              )}
            </CardActions>
          </Card>
        ))}
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="draggable-dialog-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            fontSize: "15px",
          }}
        >
          Are you sure you wan to remove {activeItem.strDrink}?
        </DialogTitle>
        <DialogActions>
          <Button
            onClick={() => removeFromFavourite(activeItem.idDrink)}
            autoFocus
          >
            Yes
          </Button>
          <Button onClick={handleClose}>No</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CocktailCard;
