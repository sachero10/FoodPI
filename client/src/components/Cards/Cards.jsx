import React from "react";
import Card from "../Card/Card";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipes } from "../../redux/actions";

const Cards = (props) => {
  const allRecipes = useSelector((state) => state.allRecipes);
  // console.log(allRecipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <div>
      {allRecipes?.map((recipe) => {
        return (
          <Card
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            image={recipe.image}
            diets={recipe.diets}
            // summary={recipe.summary}
            // healthScore={recipe.healthScore}
            // steps={recipe.steps}
          />
        );
      })}
    </div>
  );
};

export default Cards;
