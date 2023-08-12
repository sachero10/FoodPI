const { Recipe, Diet } = require("../db");
const axios = require("axios");
const { API_KEY, URL_BASE } = process.env;

const getRecipeById = async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  try {
    if (!isNaN(id)) {
      const { data } = await axios(
        `${URL_BASE}${id}/information?apiKey=${API_KEY}`
      );
      const {
        title,
        image,
        summary,
        healthScore,
        analyzedInstructions,
        diets,
      } = data;
      const recipe = {
        title,
        image,
        summary,
        healthScore,
        analyzedInstructions,
        diets,
      };
      // console.log(recipe);
      return res.status(200).json({ recipe });
    } else {
      const recipe2 = await Recipe.findOne({
        include: {
          model: Diet,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
        where: { id: id },
      });

      // const recipe2 = recipeB.map((recipe) => {
      //   let ob = {};
      //   let aux = [];
      //   ob.id = recipe.id;
      //   ob.title = recipe.title;
      //   ob.image = recipe.image;
      //   aux.push(recipe.Diets[0].name);
      //   ob.diets = aux;
      //   return ob;
      // });

      if (!recipe2) {
        return res.status(400).json({ error: "No existe el ID de la receta" });
      }
      return res.status(200).json({ recipe2 });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getRecipeById;
