import { React, useState } from "react";
import axios from "axios";

const Form = (props) => {
  const [form, setForm] = useState({
    name: "",
    summary: "",
    heathScore: 0,
    steps: "",
    image: "",
    diets: [],
  });

  async function createRecipe({
    name,
    summary,
    healthScore,
    steps,
    image,
    diets,
  }) {
    try {
      const { data } = await axios(
        `http://localhost:3001/character?name=${name}&summary=${summary}&healthScore=${healthScore}&steps=${steps}&image=${image}&diets=${diets}`
      );
      console.log(data);
    } catch ({ response }) {
      const { data } = response;
      alert(data.message);
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Receta Creada");
    createRecipe(form);
  };

  return (
    <div>
      <form action="recipe" onSubmit={handleSubmit} noValidate>
        <fieldset>
          <legend>Crear Receta</legend>
          <div>
            <label htmlFor="name">Nombre </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="summary">Resumen </label>
            <textarea
              name="summary"
              id="summary"
              cols="30"
              rows="10"
              value={form.summary}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <label htmlFor="healthScore">
              Nivel de comida saludable (1-100)
            </label>
            <input
              type="number"
              id="healthScore"
              name="healthScore"
              min="1"
              max="100"
              value={form.heathScore}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="steps">Pasos </label>
            <textarea
              name="steps"
              id="steps"
              cols="30"
              rows="10"
              value={form.steps}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <label htmlFor="image">Imagen </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
            />
          </div>
          <div>
            <fieldset>
              <legend>Tipo de Dietas </legend>
              <input
                type="checkbox"
                id="glutenFree"
                name="diets"
                value="gluten free"
                onChange={handleChange}
              />
              <label htmlFor="glutenFree">Gluten Free</label>
              <br />
              <input
                type="checkbox"
                id="dairyFree"
                name="diets"
                value="dairy free"
                onChange={handleChange}
              />
              <label htmlFor="dairyFree">Dairy Free</label>
              <br />
              <input
                type="checkbox"
                id="lactoOvoVegetarian"
                name="diets"
                value="lacto ovo vegetarian"
                onChange={handleChange}
              />
              <label htmlFor="lactoOvoVegetarian">Lacto Ovo Vegetarian</label>
              <br />
              <input
                type="checkbox"
                id="vegan"
                name="diets"
                value="vegan"
                onChange={handleChange}
              />
              <label htmlFor="vegan">Vegan</label>
              <br />
              <input
                type="checkbox"
                id="paleolithic"
                name="diets"
                value="paleolithic"
                onChange={handleChange}
              />
              <label htmlFor="paleolithic">Paleolithic</label>
              <br />
              <input
                type="checkbox"
                id="primal"
                name="diets"
                value="primal"
                onChange={handleChange}
              />
              <label htmlFor="primal">Primal</label>
              <br />
              <input
                type="checkbox"
                id="whole30"
                name="diets"
                value="whole 30"
                onChange={handleChange}
              />
              <label htmlFor="whole30">Whole 30</label>
              <br />
              <input
                type="checkbox"
                id="pescatarian"
                name="diets"
                value="pescatarian"
                onChange={handleChange}
              />
              <label htmlFor="pescatarian">Pescatarian</label>
              <br />
              <input
                type="checkbox"
                id="ketogenic"
                name="diets"
                value="ketogenic"
                onChange={handleChange}
              />
              <label htmlFor="ketogenic">Ketogenic</label>
              <br />
              <input
                type="checkbox"
                id="fodmapFriendly"
                name="diets"
                value="fodmap friendly"
                onChange={handleChange}
              />
              <label htmlFor="fodmapFriendly">Fodmap Friendly</label>
              <br />
            </fieldset>
          </div>
          <button type="submit">CREAR</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
