import { createContext, useState } from "react";


export const AppContext= createContext();

export default function AppContextProvider({children}){

    const [userInput, setUserInput]=useState('pizza');
    const [data, setData]=useState([]);
    const [recipeId, setRecipeId]=useState('5ed6604591c37cdc054bcd09');
    const [recipeData, setRecipeData]=useState([]);
    const [servingCount, setServingCount]=useState(4);
    const [isLoggedIn, setIsLoggedIn]=useState(false);
    const [isLoading, setIsLoading]=useState(false);
    const [isLoggingIn, setIsLoggingIn]=useState(false);
    const [isSigningUp, setIsSigningUp]=useState(false);
   

    const value={
        userInput,
        setUserInput,
        
        data,
        setData,
        recipeId,
        setRecipeId,
        recipeData,
        setRecipeData,
        servingCount,
        setServingCount,
        isLoggedIn,
        setIsLoggedIn,
        isLoading,
        setIsLoading,
        isLoggingIn,
        setIsLoggingIn,
        isSigningUp,
        setIsSigningUp
       
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}