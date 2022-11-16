import React from 'react'
import {Link} from 'react-router-dom';

export default function FoodCard(props) {
  return (
    <div>
      <img src={props.meal.strMealThumb ? props.meal.strMealThumb : "https://via.placeholder.com/500"} className='h-64 w-full'/>
      <Link to={`recipe/${props.meal.idMeal}`}><h3 className='text-2xl font-bold text-blue-500 my-4'>{props.meal.strMeal}</h3></Link>
       {/* <a href={props.meal.url} target="_blank">
        <h1 className='text-2xl font-bold blue-500 my-4'>{props.meal.strMeal}</h1>
        </a> */}
        <p className=''>{props.meal.strDrinkAlternate? props.meal.strDrinkAlternate : "No Alternate Drinks"}</p>
        <p>{props.meal.strCategory?props.meal.Category:"No Category Available"}</p>
        <p>{props.meal.strArea? props.meal.strArea : "No Area Available"}</p>
        <a href={props.meal.strYoutube} target="_blank">
        <p className='text-s font-bold text-green-700 my-4'>Click here to watch more about the receipe</p>
        </a>
    </div>
  )
}