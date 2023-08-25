
import { useContext, useEffect} from 'react';
import './App.css';

import { AppContext } from './context/AppContext';
import API_KEY from './keys';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';



function App() {

  const {setRecipeData, setData, userInput, recipeId, setIsLoading}= useContext(AppContext);

  

  useEffect(()=>{
    async function fetchResults(){
      
      try{
          const response=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${userInput}&key=${API_KEY}`);
          const results= await response.json();

          

          setData(results.data.recipes);
          console.log("first");
      }
      catch(err)
      {
          alert(err);
      }
      
    }

      async function fetchRecipeData(){
        setIsLoading(true);
        try{
            const response=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}?key=${API_KEY}`);
            const result=await response.json();

            setRecipeData(result.data.recipe);
            
        }
        catch(err){
            console.log(err)
        }
        setIsLoading(false);
    }

    const fetchBoth = async () => {
      const tempLoadedResults = await fetchResults();
      const tempLoadedRecipe = await fetchRecipeData();
      
    };

    fetchBoth();


  }, [userInput, recipeId])

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />

      </Routes>
      
      
    </div>
  );
}

export default App;
