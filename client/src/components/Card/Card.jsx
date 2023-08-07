import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, title, image, diets } = props;
  return (
    <div>
      <Link to={`/detail/${id}`}>
        <div>
          <img src={image} alt="" />
          <h2>{title}</h2>
          <h3>{diets}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Card;
