import React, { useContext} from 'react'
import './Home.css'
import Header from '../components/Header'
import SearchResults from '../components/SearchResults'
import Spinner from '../components/Spinner'
import RecipeData from '../components/RecipeData'
import { AppContext } from '../context/AppContext'

const Home = () => {
   const {isLoading} =useContext(AppContext)
  return (
    <div className='home'>
      <Header/>      
      <div className='home__body'>
          <SearchResults/>
          {isLoading && <Spinner/>}
          {!isLoading && <RecipeData/>}
      </div>
    </div>
  )
}

export default Home
