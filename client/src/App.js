import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards";
import { useState, useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  const [recipes, setRecipes] = useState([]);

  const URL = "http://localhost:3001";

  const traerDietas = async () => {
    try {
      // const { data } = await axios(`${URL}/allrecipes`);
      const { data } = await axios(
        "https://api.spoonacular.com/recipes/complexSearch?apiKey=255ffb3fe49740dd9071ae8a92d57130&number=10"
      );
      setRecipes((oldData) => [...oldData, data]);
      // setRecipes(data);
    } catch (error) {
      alert(error.response.data);
    }
  };

  useEffect(() => {
    traerDietas();
  });

  return (
    <div className="App">
      {pathname !== "/" && <Nav />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Cards recipes={recipes} />} />
        {/* <Route path="/home" element={<Home recipes={traerDietas} />} /> */}
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
