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
    const { data } = await axios(
      `${URL_BASE}complexSearch?titleMatch=${recipeName}&apiKey=${API_KEY}&number=100`
    );
    return res.status(200).json({ recipe, data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getRecipeByName;
