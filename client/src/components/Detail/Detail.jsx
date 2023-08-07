import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/recipes/${id}`).then(({ data }) => {
      console.log(data);
      // if (data.title) {
      setRecipe(data);
      // } else {
      //   window.alert("No hay recetas con ese ID");
      // }
    });
    return setRecipe({});
  }, [id]);

  return (
    <div>
      <h1>{recipe.recipe?.title}</h1>
      <img src={recipe.recipe?.image} alt="recipe detail" />
      <h2>{recipe.recipe?.summary}</h2>
      <h3>{recipe.recipe?.healthScore}</h3>
      <h3>{recipe.recipe?.analyzedInstructions.steps}</h3>
      <h3>{recipe.recipe?.diets}</h3>
    </div>
  );
};

export default Detail;
