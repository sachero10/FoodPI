import Card from "../Card/Card";

const Cards = (props) => {
  const { recipes } = props;
  return (
    <div>
      {recipes.map((recipe) => {
        return (
          <Card
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            image={recipe.image}
            summary={recipe.summary}
            healthScore={recipe.healthScore}
            steps={recipe.steps}
            diets={recipe.diets}
          />
        );
      })}
    </div>
  );
};

export default Cards;
