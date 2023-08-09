import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, title, image, diets } = props;
  return (
    <div>
      <Link to={`/detail/${id}`}>
        <div>
          <h2>{title}</h2>
          <img src={image} alt="" />
          <h4>
            {diets?.map((diet, index) => (
              <div key={index}>{diet}</div>
            ))}
          </h4>
        </div>
      </Link>
    </div>
  );
};

export default Card;
