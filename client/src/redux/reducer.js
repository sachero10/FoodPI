import {
  CLEAN_DETAIL,
  GET_RECIPES,
  GET_RECIPE_DETAIL,
  GET_DIETS,
} from "./actions";

const initialState = {
  allRecipes: [],
  recipeDetail: {},
  diets: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return { ...state, allRecipes: action.payload };

    case GET_RECIPE_DETAIL:
      return { ...state, recipeDetail: action.payload };

    case CLEAN_DETAIL:
      return { ...state, recipeDetail: {} };

    case GET_DIETS:
      return { state, diets: action.payload };

    default:
      return { ...state };
  }
};

export default rootReducer;
