import React from "react";
import Card from "../Card/Card";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipes } from "../../redux/actions";

const Cards = (props) => {
  const allRecipes = useSelector((state) => state.allRecipes);
  console.log(allRecipes.recipes); //
  console.log(allRecipes.recipesBDD); //
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <div>
      <div>
        {allRecipes.recipes?.map((recipe) => {
          return (
            <Card
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
              diets={recipe.diets}
            />
          );
        })}
      </div>
      <div>
        {allRecipes.recipesBDD?.map((recipe) => {
          return (
            <Card
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
              diets={recipe.diets}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
