import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeDetail, cleanDetail } from "../../redux/actions";

const Detail = () => {
  const { id } = useParams();
  const recipe = useSelector((state) => state.recipeDetail);
  // console.log(recipe); //
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipeDetail(id)); //cuando se monta el componente
    return () => {
      dispatch(cleanDetail()); //cuando se desmonta el componente
    };
  }, [id, dispatch]); //cuando se actualiza

  return (
    <div>
      {Object.hasOwn(recipe, 'recipe') ?
        (
          <>
            {/* {console.log("API")} */}
            {recipe.recipe.title ? (
              <>
                <h1>Recipe: {recipe.recipe.title}</h1>
                <img src={recipe.recipe.image} alt="recipe detail" />
                <p>Summary: {recipe.recipe.summary}</p>
                <h3>Health Score: {recipe.recipe.healthScore}</h3>
                <div>
                  <h4>Steps: </h4>
                  {recipe.recipe.analyzedInstructions.steps.map((step, index) => (
                    <p key={index}>{step.step}</p>
                  ))}
                </div>
                <div>
                  <h4>Diets: </h4>
                  {recipe.recipe.diets?.map((diet, index) => (
                    <p key={index}>{diet}</p>
                  ))}
                </div>
              </>
            ) : (
              <h3>Cargando...</h3>
            )}
          </>
        ) : (
          <>
            {/* {console.log("BD")} */}
            {recipe.recipe2.title ? (
              <>
                <h1>Recipe: {recipe.recipe2.title}</h1>
                <img src={recipe.recipe2.image} alt="recipe detail" />
                <p>Summary: {recipe.recipe2.summary}</p>
                {/* <h3>Health Score: {recipe.recipe2.healthScore}</h3> */}
                <div>
                  <h4>Steps: {recipe.recipe2.steps}</h4>
                </div>
                {/* <div>
                  <h4>Diets: </h4>
                  {recipe.diets?.map((diet, index) => (
                    <p key={index}>{diet}</p>
                  ))}
                </div> */}
              </>
            ) : (
              <h3>Cargando...</h3>
            )}
          </>)}

    </div>
  );
};

export default Detail;
