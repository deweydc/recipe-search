import React, { useEffect, useState } from 'react';
import Recipes from './Components/RecipesComponent';
import './App.css';


const App = () => {

  // GETTING API INFO FOR RECIPES 
  const APP_ID = '62230376';
  const APP_KEY = 'bb36b2ba882060db9cc10410d5fba259';


  // Set State
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')



  //use effect is a function that runs when a num of times in this case on load it will run once (, []) = only run once
  useEffect(() => {
    // outside async function to Request recipes
    getRecipes();
  }, [query]);

  // GET REQUEST
  const API_REQ = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;


  // ASYNC await function to get recipes 
  const getRecipes = async () => {
    // wait to fetch api request and stor in var response
    const response = await fetch(API_REQ);
    // wait for a response and use method to make json and store as date
    const data = await response.json();
    // set state of recipes to [] of recipes from request
    setRecipes(data.hits)
    console.log(data.hits)
  }

  // this will update search state to the users input text
  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  // will set state of query to the users input 
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    // after you search set input back to empty
    setSearch('')
  }




  return (
    <div className="App">
      <form className='search-form' onSubmit={getSearch}>
        <input
          className='search-bar'
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button
          className='search-btn' type='submit'>
          Search
        </button>
      </form>
      {
        //mapping through recipes from state  and returning each recipe / returns component for each recipe
      }
      {recipes.map(recipe => (
        <Recipes
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          dietLabel={recipe.recipe.dietLabels}
          ingredients={recipe.recipe.ingredientLines}
        />
      ))};
    </div>

  );
}

export default App;



//todo List-----------------------|
  // todo  look up useEffect 
  // todo  look up async await  
  // todo  look up hooks 
  // todo  look e.preventDefault();

