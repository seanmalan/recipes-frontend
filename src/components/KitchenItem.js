import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./KitchenItem.css";
import RecipeListItem from "./RecipeListItem";

const Kitchen = () => {
  const { id } = useParams();
  const [kitchen, setKitchen] = useState({});
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:9500/api/kitchens/${id}/`);
        if (!response.ok) {
          setIsNotFound(true);
          return;
        }
        const kitchenData = await response.json();
        setKitchen(kitchenData);

        const recipeResponse = await fetch('http://127.0.0.1:9500/api/recipes/');
        if (!recipeResponse.ok) {
          setIsNotFound(true);
          return;
        }
        const recipeData = await recipeResponse.json();

        const filteredRecipes = recipeData.filter(recipe => recipe.kitchen === kitchenData.id);
        setRecipes(filteredRecipes);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsNotFound(true);
      }
    };
    fetchData();
  }, [id]);

  if (isNotFound) {
    return (
      <>
        <p>Sorry we cannot find that kitchen!</p>
        <Link to={`/`} className="button">
          Return to kitchens
        </Link>
      </>
    );
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="kitchen-item">
        <div>
          <h2>{kitchen.name}</h2>
          <p>{kitchen.description}</p>
        </div>
      </div>
      <div>
        <h2>Recipes</h2>
        <ul>
          {recipes.map((recipe, index) => (
            <RecipeListItem key={index} recipe={recipe} />
          ))}
        </ul>
      </div>
      <h2>Reserve {kitchen.name}</h2>
      <p></p>
    </>
  );
};

export default Kitchen;
