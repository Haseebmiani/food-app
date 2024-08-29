import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";
import axios from "axios";

export const Meal = () => {
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals);
        setShow(true);
      });
  }, [url]);

  const setIndex = (alpha) => {
    setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  };
  const searchRecipe = (evt) => {
    if (evt.key === "Enter")
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  };

  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>Search your food Recipe</h1>
          <h4>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam,
            qui? Accusamus excepturi impedit molestias perspiciatis!
          </h4>
        </div>
        <div className="Search-box">
          <input
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchRecipe}
            type="Search"
            name="text"
            id="Search-box "
            className="Search-bar"
          />
        </div>
        <div className="container">
          {show ? <MealItem data={item} /> : "NOT FOUND"}
        </div>
        <div className="indexContainer">
          <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
        </div>
      </div>
    </>
  );
};
