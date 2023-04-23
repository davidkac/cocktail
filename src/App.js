import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home/Home";
import Root from "./components/RootLayout/Root";
import Cocktails from "./components/Pages/Cocktails/Cocktails";
import CocktailDetail from "./components/Pages/Cocktails/CocktailDetails/CocktailDetail";
import Categories from "./components/Pages/CategoryPages/Categories";
import Glasses from "./components/Pages/CategoryPages/Glasses";
import Ingredients from "./components/Pages/CategoryPages/Ingredients";
import FavouriteCocktail from "./components/Pages/FavouriteCocktail/FavouriteCocktail";
import BartenderBeginner from "./components/Pages/BartenderBeginner/BartenderBeginner";
import ErrorPage from "./components/Pages/ErrorPage/ErrorPage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement:<ErrorPage />,
      children: [
        { path:'/', element: <Home /> },
        { path:'/cocktail', element: <Cocktails /> },
        { path:'/cocktail/:cocktailId', element:<CocktailDetail />,},
        { path:'/categories', element: <Categories />},
        { path:'/glasses', element: <Glasses />},
        { path:'/ingredients', element: <Ingredients />},
        { path:'/favourite', element: <FavouriteCocktail />},
        { path:'/bartender-beginner',element: <BartenderBeginner />},
  
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
