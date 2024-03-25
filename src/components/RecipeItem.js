import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./RecipeItem.css"


const Recipe = () => {
  const { id } = useParams();
  const [recipe, setrecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      
      const response = await fetch(`http://127.0.0.1:9500/api/recipes/${id}/`);
      console.log("we have hit the fetch request")

      if (response.ok === false) {
        setIsNotFound(true);
        return;
      }

      const data = await response.json();
      setrecipe(data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  if (isNotFound) {
    return (
      <>
        <p>"Sorry we can not find that recipe!"</p>
        <Link to={`/recipes`} className="button">
          Return to recipes
        </Link>
      </>
    );
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="recipe-item">
        <div>
          <img src={recipe.image} alt={recipe.name}></img>
        </div>
        <div>
          <h2>{recipe.name}</h2>
          <p>{recipe.description}</p>
        </div>
      </div>
      <h2>Reserve {recipe.name}</h2>
      <p></p>
    </>
  );
};

export default Recipe;
