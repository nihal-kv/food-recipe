import { AppContext } from '../context/AppContext';
import './RecipeDirection.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import React, { useContext } from 'react'

const RecipeDirection = () => {
    const {recipeData}=useContext(AppContext);
  return (
    <div className='recipeDirection'>
        <h2>HOW TO COOK IT</h2>
        <p>This recipe was carefully designed and tested by <span>{recipeData.publisher}</span>. Please check out directions at their website.</p>
        <div className='recipeDirection__anchor'>
            <a href={recipeData.source_url}>DIRECTIONS</a>
            <ArrowForwardIcon/>
        </div>
    </div>
  )
}

export default RecipeDirection
