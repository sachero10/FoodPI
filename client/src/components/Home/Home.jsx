import React from "react";
import axios from "axios";
import Cards from "../Cards/Cards";
import SearchBar from "../SearchBar/SearchBar";

const Home = (props) => {
  const onSearch = async (recipe) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/recipes?recipeName=${recipe}`
      );
    } catch (error) {}
  };

  return (
    <div>
      {/* <h1>HOME</h1> */}
      <SearchBar onSearch={onSearch} />
      <Cards />
    </div>
  );
};

export default Home;
