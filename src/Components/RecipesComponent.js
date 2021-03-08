import React from 'react'

//deconstruct 


const Recipes = ({ title, calories, image, ingredients }) => {


    return (
        <div style={{ border: 'solid black 1px', margin: 10 }}>
            <h1>{title}</h1>
            <img src={image} alt="#" />
            <p className="calories">{Math.round(calories)} Calories</p>
            <ul className="ingredients">
                {ingredients.map(ingredient => (
                    <li>{ingredient}</li>
                ))}
            </ul>
        </div>
    )
}

export default Recipes
