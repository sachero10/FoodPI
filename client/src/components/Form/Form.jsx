import { React, useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    summary: "",
    heathScore: 0,
    steps: "",
    image: "",
    diets: "",
  });

  return (
    <div>
      <div>
        <label htmlFor="name"></label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="summary"></label>
        <input type="text" />
      </div>
      <div>
        {/* INTEGER */}
        <label htmlFor="healthScore"></label> integer
        <input type="text" />
      </div>
      <div>
        <label htmlFor="steps"></label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="image"></label>
        <input type="text" />
      </div>
      <div>
        {/* CHECKBOXES */}
        <label htmlFor="image"></label>
        <input type="text" />
      </div>
    </div>
  );
};

export default Form;
