import React from 'react'
import './RecipeData.css'
import RecipeHeader from './RecipeHeader';
import RecipeIngredients from './RecipeIngredients';
import RecipeDirection from './RecipeDirection';

const RecipeData = () => {
  return (
    <div className='recipeData'>
        <RecipeHeader/>
        <RecipeIngredients/>
        <RecipeDirection/>
    </div>
  )
}

export default RecipeData;
