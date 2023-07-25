const { Diet } = require("../db");
const axios = require("axios");

const { API_KEY, URL_BASE } = process.env;

const getDiets = async (req, res) => {
  try {
    const dietsDB = await Diet.findAll();
    if (dietsDB.length == 0) {
      const { data } = await axios(
        `${URL_BASE}complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
      );
      const dietsApi = data.results.map((receta) => receta.diets);
      const dietasRepetidas = [];
      for (let i = 0; i < dietsApi.length; i++) {
        for (let j = 0; j < dietsApi[i].length; j++) {
          dietasRepetidas.push(dietsApi[i][j]);
        }
      }
      const dietasSinRepetir = new Set(dietasRepetidas);
      //Estructura de Datos Set (no admite repetidos)
      const dietasFinal = [...dietasSinRepetir];
      //spread operator para convertir de Set a Array
      // const dietasFinal2 = dietasFinal.join(", "); //STRING
      for (let dieta of dietasFinal) {
        // console.log(dieta);
        const newDiet = await Diet.create({ name: dieta });
      }

      // return res.status(200).json({dietasFinal2});
      const dietas = await Diet.findAll();
      return res.status(200).json(dietas);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getDiets;
