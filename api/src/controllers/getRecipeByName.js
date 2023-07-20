const { Recipe } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const URL_BASE = "https://api.spoonacular.com/recipes/complexSearch";

const getRecipeByName = async (req, res) => {
    const {recipeName} = req.query;
    try {
        if(!recipeName) return res.status(400).json({error: "Falta el nombre de la receta"});
        
        const {data} = await axios (`${URL_BASE}?titleMatch=${recipeName}&apiKey=${API_KEY}`)
        // const {id, title, image} = data;
        // const recipe = {id, title, image};
        console.log(data);
        return res.status(200).json({data});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

module.exports = getRecipeByName;
