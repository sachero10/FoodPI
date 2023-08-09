import { useState } from "react";

const SearchBar = (props) => {
  const { onSearch } = props;
  const [recipe, setRecipe] = useState("");
  const handleChange = (e) => {
    setRecipe(e.target.value);
  };
  return (
    <div>
      <input type="search" onChange={handleChange} value={recipe} />
      <button
        onClick={() => {
          onSearch(recipe);
        }}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
