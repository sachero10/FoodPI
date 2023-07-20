const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getRecipeById = require("../controllers/getRecipeById");
const getRecipeByName = require("../controllers/getRecipeByName");
const createRecipe = require("../controllers/createRecipe");
const getDiets = require("../controllers/getDiets");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/recipes/:id", getRecipeById);
router.get("/recipes", getRecipeByName);
router.post("/recipes", createRecipe);
router.get("/diets", getDiets);

module.exports = router;
