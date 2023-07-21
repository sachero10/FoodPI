const { Recipe, Diet } = require("../db");

const createRecipe = async (req, res) => {
  try {
    const { title, image, summary, healthScore, steps, diets } = req.body;
    if (!title || !image || !summary || !healthScore || !steps || !diets)
      return res.status(401).json({ error: "Faltan datos" });
    for (let dieta of diets) {
      var [newDiet, created] = await Diet.findOrCreate({
        where: { name: dieta },
      });
    }
    const newRecipe = await Recipe.create({
      title,
      image,
      summary,
      healthScore,
      steps,
    });

    newRecipe.addDiets(newDiet.id);
    return res.status(200).json(newRecipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = createRecipe;
