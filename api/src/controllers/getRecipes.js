const axios = require("axios");
const { API_KEY, URL_BASE } = process.env;

const getRecipes = async (req, res) => {
  try {
    const { data } = await axios(
      `${URL_BASE}complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
    );
    const recipes = data.results.map((recipe) => {
      let obj = {};
      obj.id = recipe.id;
      obj.title = recipe.title;
      obj.image = recipe.image;
      obj.diets = recipe.diets;
      return obj;
    });
    return res.status(200).json({ recipes });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getRecipes;
