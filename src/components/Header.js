
import React, { useContext, useRef } from 'react'
import { AppContext } from '../context/AppContext'
import logo from '../assets/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { toast } from 'react-hot-toast';


const Header = () => {
    
  const {setUserInput, isLoggedIn, setIsLoggedIn, setRecipeId}=useContext(AppContext);
  
  const inputRef=useRef();

  const submitHandler=(event)=>{
    event.preventDefault();

    setUserInput(inputRef.current.value);
    

  }

  const logoutHandler=()=>{
    

    signOut(auth).then((res)=>{
      setIsLoggedIn(false);
      setUserInput('pizza');
      setRecipeId('5ed6604591c37cdc054bcd09');
      
      toast.success("Logged out");
    }).catch((err)=>{
      toast.error(err.message);
    })
    
  }

  

  return (
    
       <div className='header'>
        <img src={logo} alt='header logo' className='header__logo'/>
        <div className='header__nav'>
          {isLoggedIn && <form className='header__search' onSubmit={submitHandler}>
              <input type='text' placeholder='Search over 1,000,000 recipes' className='header__input' ref={inputRef} defaultValue='pizza'/>
              <button className='header__button'>
                  <SearchIcon/>
              </button>
            </form>
          }
          {!isLoggedIn && <Link to='/login' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Hello, </span>
            <span className='header__optionLineTwo'>Sign In</span>
          </div>
        </Link>}
        {!isLoggedIn && <Link to='/signup' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Hello, </span>
            <span className='header__optionLineTwo'>Sign Up</span>
          </div>
        </Link>}
        {isLoggedIn && <Link to='/' className='header__link'>
          <div className='header__option' onClick={logoutHandler}>
            <span className='header__optionLineOne'>Hello, </span>
            <span className='header__optionLineTwo'>Logout</span>
          </div>
        </Link>}
        





        </div>
        
        
      
     </div>
   
  )
}

export default Header
