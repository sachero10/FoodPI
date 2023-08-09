import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, title, image, diets } = props;
  return (
    <div>
      <Link to={`/detail/${id}`}>
        <div>
          <h3>{title}</h3>
          <img src={image} alt="" />
          <h5>
            {diets?.map((diet, index) => (
              <div key={index}>{diet}</div>
            ))}
          </h5>
        </div>
      </Link>
    </div>
  );
};

export default Card;
