const axios = require("axios");
const { Recipe, Diet } = require("../db");
const { API_KEY, URL_BASE } = process.env;

const getRecipes = async (req, res) => {
  try {
    const recipesBD = await Recipe.findAll({
      include: {
        model: Diet,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    const recipesBDD = recipesBD.map((recipe) => {
      let ob = {};
      let aux = [];
      ob.id = recipe.id;
      ob.title = recipe.title;
      ob.image = recipe.image;
      aux.push(recipe.Diets[0].name);
      ob.diets = aux;
      return ob;
    });

    const { data } = await axios(
      `${URL_BASE}complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=10`
    );
    const recipes = data.results.map((recipe) => {
      let obj = {};
      obj.id = recipe.id;
      obj.title = recipe.title;
      obj.image = recipe.image;
      obj.diets = recipe.diets;
      return obj;
    });
    if (!recipes.length && !recipesBDD.length)
      return res.status(400).json({ error: "No se encontraron recetas" });
    if (!recipes.length) return res.status(200).json({ recipesBDD });
    else if (!recipesBDD.length) return res.status(200).json({ recipes });
    else return res.status(200).json({ recipesBDD, recipes });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getRecipes;
