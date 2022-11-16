import React, {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import loadingGif from '../loading.gif';


export default function SingleRecipe(){
    let {idMeal} = useParams();
    let [loading, setLoading] = useState(true);
  let [meals, setMeals] = useState([]);
  let [error, setError] = useState(null);
  let url="https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  useEffect(()=>{
    getRecipe()
  },[])

  async function getRecipe() {

    let response = await fetch(`${url}`+idMeal);
    console.log("Response from API:", response);
    let result = await response.json();
    console.log(result);
    setMeals(result);
    setLoading(false);
  }

  return(
    <div className='bg-red-100'>
        {loading?(<Loader/>):(
            meals.meals.map((meal)=>{
                return(
                    <div>
                        <h1 className='text-2xl font-bold text-green-500 my-4 text-center'>{meal.strMeal}</h1>
                        <img src={meal.strMealThumb} className='w-1/4'/>
                        <p className='text-large font-bold text-blue-500 my-4'>Follow the recipe!!</p>
                        <h3 className="font-semibold">{meal.strInstructions}</h3>
                        </div>
                )
            })
        )}
    </div>
  )
}
function Loader() {
    return (
      <>
        <img src={loadingGif} alt="Loading" className="w-24 mx-auto mt-12" />
      </>
    );
  }