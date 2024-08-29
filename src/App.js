import React from "react";
import { Meal } from "./component/Meal";
import "./component/style.css";
import { Route, Routes } from "react-router-dom";
import RecipeIndex from "./component/RecipeIndex";
import Recipe from "./component/Recipe";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route exact path="recipe/:recipeId" element={<Recipe />} />
      </Routes>
    </>
  );
};

export default App;
