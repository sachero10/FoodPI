import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const GET_DIETS = "GET_DIETS";
export const GET_RECIPE_DETAIL = "GET_RECIPE_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";

export const getRecipes = () => {
  return async function (dispatch) {
    const { data } = await axios("http://localhost:3001/allrecipes");
    const { recipes, recipesBDD } = data;
    return dispatch({ type: GET_RECIPES, payload: { recipes, recipesBDD } });
    // fetch("http://localhost:3001/allrecipes")
    //   .then((response) => response.json())
    //   .then(({ recipes, recipesBDD }) =>
    //     dispatch({ type: GET_RECIPES, payload: { recipes, recipesBDD } })
    //   );
  };
};

export const getRecipeDetail = (id) => {
  return async function (dispatch) {
    const { data } = await axios(`http://localhost:3001/recipes/${id}`);
    return dispatch({ type: GET_RECIPE_DETAIL, payload: data });
    //   fetch(`http://localhost:3001/recipes/${id}`)
    //     .then((response) => response.json())
    //     .then((data) => dispatch({ type: GET_RECIPE_DETAIL, payload: data }));
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

export const getDiets = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/diets")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: GET_RECIPES, payload: data.map((diet) => diet.name) })
      );
  };
};
