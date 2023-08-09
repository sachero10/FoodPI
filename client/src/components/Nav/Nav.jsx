import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/detail">
        <button>Buscar Receta</button>
      </Link>
      <Link to="/form">
        <button>Crear Receta</button>
      </Link>
    </div>
  );
};

export default Nav;
