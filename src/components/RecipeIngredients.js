import React, { useContext } from 'react'
import './RecipeIngredients.css';
import { AppContext } from '../context/AppContext';
import DoneIcon from '@mui/icons-material/Done';

const RecipeIngredients = () => {
    const {recipeData, servingCount}=useContext(AppContext);

  return (
    <div className='recipeIngredients'>
      <h1 className='recipeIngredients__heading'>RECIPE INGREDIENTS</h1>
      <div className='recipeIngredients__container'>
        {recipeData.ingredients?.map((ingredient, index)=>{
            return <div className='recipeIngredients__ingred' key={index}>
                <DoneIcon/>
                <p>{ingredient.quantity*servingCount/4} {ingredient.unit} {ingredient.description}</p>
            </div>
        })}
      </div>
    </div>
  )
}

export default RecipeIngredients
