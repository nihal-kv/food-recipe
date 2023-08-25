import React, { useContext } from 'react'
import './Card.css'
import { AppContext } from '../context/AppContext';
import { toast } from 'react-hot-toast';

const Card = (props) => {

    const {setRecipeId, setServingCount, isLoggedIn}=useContext(AppContext);

    function truncate(str, n){
        return str?.length>n? str.substr(0, n-1)+"...":str;
      }

  
    const clickHandler=async()=>{
      if(isLoggedIn){
        setRecipeId(props.id);
        setServingCount(4);
      }
      else
      {
        toast.error("Please login first");
      }
        
    }



  return (
    <div className='card' onClick={clickHandler}>
      <div>
        <img src={props.imageUrl} alt='food-pic' className='card__image'/>
      </div>
      <div>
        <h3 className='card__heading'>{truncate(props.title, 30)}</h3>
        <h4 className='card__publisher'>{props.publisher}</h4>
      </div>
    </div>
  )
}

export default Card
