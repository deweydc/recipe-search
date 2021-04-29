import React from 'react';
import style from '../src/recipe.module.css';

//deconstruct 
const Recipes = ({ title, calories, image, ingredients }) => {


    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1>{title}</h1>
                <p className="calories">{Math.round(calories)} Calories</p>
            </div>
            <div className={style.recipe}>
                <img src={image} alt="#" />
                <ul className={style.li}>
                    {ingredients.map(ingredient => (
                        <li>- {ingredient}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Recipes
