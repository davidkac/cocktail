import React, {useState} from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import WineBarIcon from "@mui/icons-material/WineBar";
import classes from "./MainNavigation.module.css";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const MainNavigation = () => {
  const [anchorEl, setAnchorEl] =useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container fixed>
          <Toolbar className={classes.toolbar}>
            <WineBarIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <MenuItem className={classes.menuItem} sx={{fontSize: "14px"}} component={Link} to="/">
              Home
            </MenuItem>
            <MenuItem className={classes.menuItem} sx={{fontSize: "14px"}} component={Link} to="/cocktail">
              Coctails
            </MenuItem>
            <MenuItem className={classes.menuItem} sx={{fontSize: "14px"}} component={Link} to="/favourite">
              Favorite Cocktail
            </MenuItem>
            <MenuItem className={classes.menuItem} sx={{fontSize: "14px"}} component={Link} to="/bartender-beginner">
              Bartender beginner
            </MenuItem>
            <Button
              id="demo-customized-button"
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Category list
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem component={Link} to="/categories" onClick={handleClose}>
                Drinks
              </MenuItem>
              <Divider sx={{ my: 0.5 }} />
              <MenuItem component={Link} to="/glasses" onClick={handleClose}>
                Glasses
              </MenuItem>
              <Divider sx={{ my: 0.5 }} />
              <MenuItem
                component={Link}
                to="/ingredients"
                onClick={handleClose}
              >
                Ingredients
              </MenuItem>
            </StyledMenu>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default MainNavigation;
