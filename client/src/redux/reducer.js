import { CLEAN_DETAIL, GET_RECIPES, GET_RECIPE_DETAIL } from "./actions";

const initialState = {
  allRecipes: [],
  recipeDetail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return { ...state, allRecipes: action.payload };

    case GET_RECIPE_DETAIL:
      return { ...state, recipeDetail: action.payload };

    case CLEAN_DETAIL:
      return { ...state, recipeDetail: {} };

    default:
      return { ...state };
  }
};

export default rootReducer;
