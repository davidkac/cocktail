import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import Root from "./components/Pages/Root";
import Cocktails from "./components/Pages/Cocktails";
import CocktailDetail from "./components/Pages/CocktailDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path:'/', element: <Home /> },
        { path:'/cocktail', element: <Cocktails /> },
        { path:'/cocktail/:cocktailId', element:<CocktailDetail />}

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
