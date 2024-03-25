import React from 'react'
import { Link } from 'react-router-dom'
import "./RecipeListItem.css"

const RecipeListItem = ({recipe}) => {
  return (
    <>
    <div className='recipe-container'>
    
    <div>

    <h3>
    {recipe.recipe_name}
    </h3>
    <Link to={`/recipes/${recipe.id}`} className="button">Click here for the recipe</Link>
    <p>{recipe.meal_type}</p>
    <p>The cooking time for this meal is: {recipe.time} mins</p>
    
    <p>{recipe.ingredients}</p>
    <p>{recipe.instructions}</p>
    <p>This recipe is Vegan: {recipe.is_vegan}</p>
    <p>This recipe is keto: {recipe.is_keto}</p>
    <p>Author: {recipe.author}</p>
    <p>{recipe.kitchen}</p>
    <p>{recipe.holidays}</p>
    </div>

    </div>

    </>
  )
}



export default RecipeListItem
