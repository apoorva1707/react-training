import {useState} from "react";
import {Routes,Route,Link,Navigate} from "react-router-dom";
import './App.css';
import AllRecipes from "./pages/AllRecipes";
import Error404 from "./pages/Error404";
import SingleRecipe from "./pages/SingleRecipe";

function App(){
  return(
    <div className="body-wrapper">
      <Routes>
        <Route index element={<AllRecipes/>}/>
        <Route path="recipe/:idMeal" element={<SingleRecipe/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </div>
  );
}

export default App;
