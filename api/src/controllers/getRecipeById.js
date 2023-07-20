const { Recipe } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;


const URL_BASE = "https://api.spoonacular.com/recipes";
const FLAG_DIETA = "&addRecipeInformation=true";

const getRecipeById = async (req, res) => {
    const {id} = req.params;
    try {
        const {data} = await axios (`${URL_BASE}/${id}/information?apiKey=${API_KEY}`)
        const {title, image, summary, healthScore, analyzedInstructions, diets} = data;
        const recipe = {title, image, summary, healthScore, analyzedInstructions, diets};
        // console.log(recipe);
        return res.status(200).json({recipe});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

module.exports = getRecipeById;
