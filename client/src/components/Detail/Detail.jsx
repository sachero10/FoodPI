import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeDetail, cleanDetail } from "../../redux/actions";

const Detail = () => {
  const { id } = useParams();
  // const [recipe, setRecipe] = useState({});
  const recipe = useSelector((state) => state.recipeDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipeDetail(id)); //cuando se monta el componente
    return () => {
      dispatch(cleanDetail()); //cuando se desmonta el componente
    };
  }, [id]); //cuando se actualiza

  return (
    <div>
      {recipe.title ? (
        <>
          <h1>Recipe: {recipe.title}</h1>
          <img src={recipe.image} alt="recipe detail" />
          <h4>Summary: {recipe.summary}</h4>
          <h3>Health Score: {recipe.healthScore}</h3>
          <div>
            <h4>Steps: </h4>
            {recipe.analyzedInstructions.steps?.map((step, index) => (
              <p key={index}>{step}</p>
            ))}
          </div>
          <div>
            <h4>Diets: </h4>
            {recipe.diets?.map((diet, index) => (
              <p key={index}>{diet}</p>
            ))}
          </div>
        </>
      ) : (
        <h3>Cargando...</h3>
      )}
    </div>
  );
};

export default Detail;
