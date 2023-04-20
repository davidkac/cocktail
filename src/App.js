import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import Root from "./components/Pages/Root";
import Cocktails from "./components/Pages/Cocktails";
import CocktailDetail from "./components/Pages/CocktailDetail";
import Categories from "./components/Tables/Categories";
import Glasses from "./components/Tables/Glasses";
import Ingredients from "./components/Tables/Ingredients";
import FavouriteCocktail from "./components/Pages/FavouriteCocktail";
import BartenderBeginner from "./components/Pages/Bartender-beginner";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path:'/', element: <Home /> },
        { path:'/cocktail', element: <Cocktails /> },
        { path:'/cocktail/:cocktailId', element:<CocktailDetail />},
        { path:'/categories', element: <Categories />},
        { path:'/glasses', element: <Glasses />},
        { path:'/ingredients', element: <Ingredients />},
        { path:'/favourite', element: <FavouriteCocktail />},
        { path:'/bartender-beginner',element: <BartenderBeginner />}

      ],
    },
  ]);

  return (
    <>
    
      <RouterProvider router={router} />
    
    </>
  );
}

export default App;
