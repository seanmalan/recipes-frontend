import React, { useEffect, useState } from 'react'
import RecipeListItem from '../components/RecipeListItem'


const RecipesListPage = () => {

  let [recipes, setRecipes] = useState([])
  const [isLoading, setIsLoading] = useState([true]);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch('http://127.0.0.1:9500/api/recipes/')

      if (response.ok === false) {
        setIsNotFound(true);
        return;
      }

      const data = await response.json();
      setRecipes(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (recipes.length < 1) {
    setIsNotFound(true);
  }

  if (isNotFound) {
    return (
      <>
        <p>Sorry We can't find any recipes</p>
      </>
    );
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