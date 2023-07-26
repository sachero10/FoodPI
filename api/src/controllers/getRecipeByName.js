const { Recipe } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");
const { API_KEY, URL_BASE } = process.env;

const getRecipeByName = async (req, res) => {
  const { recipeName } = req.query;
  try {
    if (!recipeName)
      return res.status(400).json({ error: "Falta el nombre de la receta" });
    //Consultar en la BD
    const recipe = await Recipe.findAll({
      where: { title: { [Op.iLike]: `%${recipeName}%` } },
    });
    //Consultar en la API
    // const { data } = await axios(
    //   `${URL_BASE}complexSearch?titleMatch=${recipeName}&apiKey=${API_KEY}&number=100`
    // );
    const { data } = await axios(
      `${URL_BASE}complexSearch?apiKey=${API_KEY}&number=100`
    );
    const recipesApi = data.results.filter((receta) =>
      receta.title.toLowerCase().includes(recipeName.toLowerCase())
    );
    if (!recipe.length && !recipesApi.length)
      return res
        .status(400)
        .json({ error: "No se encontraron recetas con ese nombre" });
    if (!recipe.length) return res.status(200).json({ recipesApi });
    else if (!recipesApi.length) return res.status(200).json({ recipe });
    else return res.status(200).json({ recipe, recipesApi });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getRecipeByName;
