import React, { useEffect, useState } from 'react'
import RecipeListItem from '../components/RecipeListItem'


const RecipesListPage = () => {

  let [recipes, setRecipes] = useState([])

  useEffect(() => {
    getRecipes()
  }, [])




  let getRecipes = async () => {
    let response = await fetch('http://127.0.0.1:9500/api/recipes/')
    let data = await response.json()
    setRecipes(data)
  }




  return (

    <>

    <div>Recipes</div>

    <div className='recipes-list'>
      {recipes.map((recipe, index ) => (
        <RecipeListItem key={index} recipe={recipe} />
      ))}

      
    </div>
    </>
  )
}

export default RecipesListPage