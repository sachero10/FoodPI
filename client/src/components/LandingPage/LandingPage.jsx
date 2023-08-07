import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>API FOOD</h1>
      <Link to="/home">
        <button>Entrar</button>
      </Link>
    </div>
  );
};

export default LandingPage;
