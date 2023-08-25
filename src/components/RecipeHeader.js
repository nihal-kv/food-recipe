import { AppContext } from '../context/AppContext';
import './RecipeHeader.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import React, { useContext} from 'react'

const RecipeHeader = () => {

  const {recipeData, servingCount, setServingCount}=useContext(AppContext);
  
  
  const addServings=()=>{
    setServingCount(servingCount+1);
  }
  const removeServings=()=>{
    const newCount=servingCount===0?0:servingCount-1;
    setServingCount(newCount);
  }

  return (
    
    <div className='recipeHeader'>
      <img src={recipeData.image_url} alt='recipe-data' className='recipeHeader__image'/>
      <h2 className='recipeHeader__title'>{recipeData.title}</h2>
      <div className='recipeHeader__info'>
        <div className='recipeHeader__infoTime'>
          <AccessTimeIcon/>
          <p>{recipeData.cooking_time} MINUTES</p>
        </div>
        <div className='recipeHeader__infoServings'>
          <PeopleOutlineIcon/>
          <p>{servingCount} SERVINGS</p>
          <div className='serving__count'>
            <div className='round' onClick={removeServings}><RemoveIcon/></div>
            <div className='round' onClick={addServings}><AddIcon/></div>
          </div>
        </div>
        {/* <div className='recipeHeader__bookmark'>
          <BookmarkBorderIcon/>
        </div> */}
        
      </div>
    </div>
  )
}

export default RecipeHeader
