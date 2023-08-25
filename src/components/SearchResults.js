import React, { useContext } from 'react'
import './SearchResults.css';
import { AppContext } from '../context/AppContext';
import Card from './Card';
const SearchResults = () => {
  const {data}=useContext(AppContext);

 

  return (
    <div className='searchResults'>
      {data?.map((meal)=>{
        return <Card key={meal.id} id={meal.id} title={meal.title} publisher={meal.publisher} imageUrl={meal.image_url} />
      })}
    </div>
  )
}

export default SearchResults
