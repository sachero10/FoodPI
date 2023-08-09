export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPE_DETAIL = "GET_RECIPE_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";

export const getRecipes = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/allrecipes")
      .then((response) => response.json())
      .then(({ recipes }) => dispatch({ type: GET_RECIPES, payload: recipes }));
  };
};

export const getRecipeDetail = (id) => {
  return function (dispatch) {
    fetch(`http://localhost:3001/recipes/${id}`)
      .then((response) => response.json())
      .then(({ recipe }) =>
        dispatch({ type: GET_RECIPE_DETAIL, payload: recipe })
      );
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};
