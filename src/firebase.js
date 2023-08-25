
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCCWTqWyJmo6z8GM4W_N33dckaeXsUBugE",
    authDomain: "food-recipe-f9ff5.firebaseapp.com",
    projectId: "food-recipe-f9ff5",
    storageBucket: "food-recipe-f9ff5.appspot.com",
    messagingSenderId: "736649534871",
    appId: "1:736649534871:web:5d2e0a063d1aa095c538d2"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth();

export {app, auth};