import React from "react";
import Cards from "../Cards/Cards";

const Home = (props) => {
  const { recipes } = props;
  return (
    <div>
      <h1>HOME</h1>
      <Cards recipes={recipes} />
    </div>
  );
};

export default Home;
