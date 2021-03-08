import React, { useEffect, useState } from 'react';
import Recipes from './Components/RecipesComponent';
import './App.css';


const App = () => {

  // GETTING API INFO FOR RECIPES 
  const APP_ID = '62230376';
  const APP_KEY = 'bb36b2ba882060db9cc10410d5fba259';
  // GET REQUEST
  const API_REQ = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  // Set State
  const [recipes, setRecipes] = useState([]);

  //use effect is a function that runs when a num of times in this case on load it will run once (, []) = only run once
  useEffect(() => {
    // outside async function to Request recipes
    getRecipes();

  }, []);


  // ASYNC await function to get recipes 
  const getRecipes = async () => {
    // wait to fetch api request and stor in var response
    const response = await fetch(API_REQ);
    // wait for a response and use method to make json and store as date
    const data = await response.json();
    // set state of recipes to [] of recipes from request
    setRecipes(data.hits)

  }


  return (
    <div className="App">
      <form className='search-form'>
        <input className='search-bar' type="text" />
        <button className='search-btn' type='submit'>
          Search
        </button>

      </form>
      {
        //mapping through recipes from state  and returning each recipe / returns component for each recipe
      }
      {recipes.map(recipe => (
        <Recipes />
      ))};
    </div>

  );
}

export default App;




  // todo  look up useEffect 
  // todo  look up async await  
  // todo  look up hooks 

