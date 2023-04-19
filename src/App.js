import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import Root from "./components/Pages/Root";
import Cocktails from "./components/Pages/Cocktails";
import CocktailDetail from "./components/Pages/CocktailDetail";
import Categories from "./components/Pages/Categories";
import Glasses from './components/Pages/Glasses';
import Ingredients from "./components/Pages/Ingredients";


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
