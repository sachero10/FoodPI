import React, { useEffect } from "react";
import axios from "axios";
import Cards from "../Cards/Cards";
import SearchBar from "../SearchBar/SearchBar";
import { getDiets } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Home = (props) => {
  const dispatch = useDispatch();

  const onSearch = async (recipe) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/recipes?recipeName=${recipe}`
      );
    } catch (error) {
      alert(error.response.data);
    }
  };

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  return (
    <div>
      {/* <h1>HOME</h1> */}
      <SearchBar onSearch={onSearch} />
      <Cards />
    </div>
  );
};

export default Home;
