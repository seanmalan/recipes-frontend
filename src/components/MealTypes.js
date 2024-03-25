import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const MealTypes = () => {
  const { type } = useParams();
  const [mealTypes, setMealTypes] = useState([]);

  useEffect(() => {
    const fetchMealTypes = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:9500/api/recipes/`);
        if (!response.ok) {
          throw new Error('Failed to fetch meal types');
        }
        const data = await response.json();
        setMealTypes(data);
      } catch (error) {
        console.error('Error fetching meal types:', error);
      }
    };
    fetchMealTypes();
  }, []); // Removed [type] dependency from useEffect as it is not used inside fetchMealTypes

  // Filter mealTypes based on the type parameter
  const filteredMealTypes = mealTypes.filter(mealType => mealType.meal_type === type);

  return (
    <>
      <div>
        <h1>I have hit the meal type page</h1>
      </div>

      <div>
        <h1>Meal Types</h1>
        <ul>
          {filteredMealTypes.map((mealType) => (
            <li key={mealType.id}>
              <Link to={`/meal-types/${mealType.id}`}>{mealType.meal_type}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MealTypes;
