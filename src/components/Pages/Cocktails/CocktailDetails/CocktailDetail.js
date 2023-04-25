import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCocktail } from "../../../Services/CocktailService";
import classes from "./CocktailDetail.module.css";
import { useDispatch } from "react-redux";
import { cocktailActions } from "../../../../store/cocktail-slice";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CocktailDetail = () => {

  const [cocktail, setCocktail] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [measure, setMeasure] = useState([]);
  const [instruction, setInstruction] = useState("EN");
  const [instructionText, setInstructionText] = useState("");

  const dispatch = useDispatch();
  const params = useParams();
  
  const fetchCocktail = async () => {

    getCocktail(params.cocktailId)
      .then((response) => {

        if(!response.data.drinks) return;

        // Rename prop in obj to comply with naming convention
        let cocktailRes = {
          strInstructionsEN: response.data.drinks[0].strInstructions,
          ...response.data.drinks[0],
        };
        delete cocktailRes.strInstructions;
        let ingredientsArray = [];
        let measuresArray = [];
        let instructionsArray = [];

        // Extract neccassary arrays of objects from response
        for (const prop in cocktailRes) {
          if (prop.includes("Ingredient") && cocktailRes[prop])
            ingredientsArray.push({ [prop]: cocktailRes[prop] });
          if (prop.includes("Measure") && cocktailRes[prop])
            measuresArray.push({ [prop]: cocktailRes[prop] });
          if (prop.includes("Instructions") && cocktailRes[prop])
            instructionsArray.push(prop.substring(15, 17));
        }

        setCocktail(cocktailRes);
        setIngredients(ingredientsArray);
        setMeasure(measuresArray);
        setInstructions(instructionsArray);

        // Show EN instructions on page load
        setInstructionText(cocktailRes["strInstructionsEN"]);
      })
      .catch((error) => console.log(error));
  };

  const addCocktailToFavouriteHandler = (cocktail) => {
    dispatch(cocktailActions.addCocktailToFavourite(cocktail.idDrink));
  };

  // show instruction based on selected language
  const showInstructions = (event) => {
    setInstruction(event.target.value);
    setInstructionText(cocktail["strInstructions" + event.target.value]);
  };

  useEffect(() => {
    fetchCocktail();
  }, []);

  return (
    <>
    {cocktail.idDrink ? (
      <Box>
      <Box
        sx={{
          display: "grid",
          columnGap: 8,
          rowGap: 1,
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <Box>
          <div className={classes["image-container"]}>
            <Typography
              mt={2}
              ml={2}
              textAlign={"left"}
              color={"gray"}
              fontSize={"24px"}
            >
              {cocktail.strDrink}
            </Typography>
            <img
              src={cocktail.strDrinkThumb}
              className={classes.img}
              alt={cocktail.strDrink}
            ></img>
          </div>
        </Box>
        <Box>
        <Button
            className={classes.favBtn}
            variant="outlined"
            onClick={() => addCocktailToFavouriteHandler(cocktail)}
          >
            <FavoriteIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                fontSize: "11px",
              }}
            />
            Add to favourite
          </Button>
          <div>
            <div className={classes["image-properties"]}>
              <div>
                <h3>Category:</h3>
                <p>{cocktail.strCategory}</p>
              </div>
              <div>
                <h3>Alcoholic :</h3>
                <p>{cocktail.strAlcoholic}</p>
              </div>
              <div>
                <h3>Glass:</h3>
                <p>{cocktail.strGlass}</p>
              </div>
              <div>
                <h3>Ingredients :</h3>
                {ingredients.map((ingredient, index) => {
                  return (
                    <div key={index}>
                      <p>{Object.values(ingredient)[0]}</p>
                    </div>
                  );
                })}
              </div>
              <div>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">
                    Instructions
                  </InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={instruction}
                    label="ingredients"
                    onChange={(event) => showInstructions(event)}
                  >
                    {instructions.map((instruction, index) => {
                      return (
                        <MenuItem value={instruction} key={index}>
                          {instruction}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                <p>{instructionText}</p>
              </div>
            </div>
          </div>
        </Box>
      </Box>
      <Box>
        <div>
          <Typography
            mt={2}
            mb={2}
            textAlign={"center"}
            color={"gray"}
            fontSize={"16px"}
          >
            Video Instructions
          </Typography>
          {cocktail.strVideo ? (
            <iframe
              width="100%"
              height="480"
              src={cocktail.strVideo}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          ) : (
            <Typography
              mt={2}
              mb={2}
              textAlign={"center"}
              color={"gray"}
              fontSize={"10px"}
            >
              No Video Available
            </Typography>
          )}
        </div>
      </Box>
    </Box>
    ) : <Typography
    mt={2}
    mb={2}
    textAlign={"center"}
    color={"gray"}
    fontSize={"20px"}
  >
    No Cocktail Available.
  </Typography>}
    </>
  );
};

export default CocktailDetail;
