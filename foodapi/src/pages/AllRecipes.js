import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import loadingGif from '../loading.gif';
import FoodCard from "../FoodCard";


export default function AllRecipes(){

  let apiUrl="https://www.themealdb.com/api/json/v1/1/search.php?s=";
  
  let [searchTerm,setSearchTerm]= useState("curry");
  let [loading, setLoading] = useState(true);
  let [meals, setMeals] = useState([]);
  let [error, setError] = useState(null);

  async function getNewData() {
    //set loading to true
    setLoading(true);
    //fetch

    let response = await fetch(apiUrl+searchTerm);
    console.log("Response from API:", response);
    let result = await response.json();
    console.log(result);
    setMeals(result);
    setLoading(false);
  }



  //will only run once when the component is loaded
  useEffect(() => {
    getNewData();
  }, []);

  return (
    <>
      <header className="w-full text-violet-500 text-3xl  text-center bg-green-100 h-16 shadow-md flex  justify-center items-center">
        Food Recipe
      </header>
      <br></br>
      <br></br>
      <input type="text" value={searchTerm} onChange={(event)=>{
              setSearchTerm(event.target.value)
          }} placeholder="Search for a recipe" className="border inline w-1/2" />&nbsp;
          <button onClick={getNewData} className="bg-pink-200 p-2 rounded-md shadow-md">Search</button>
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-7xl mx-auto bg-lime-100">
        
          <div className="flex flex-wrap">
            <ShowRecipes meals={meals}/>
          </div>
        </div>
      )}
    </>
  );

 }
function Loader() {
  return (
    <>
      <img src={loadingGif} alt="Loading" className="w-24 mx-auto mt-12" />
    </>
  );
}

function ShowRecipes(props){
  return(
    <>
    {props.meals.meals?(props.meals.meals.map((meal)=>{
      return(
        <>
        {props.meals.meals.map((meal) => {
              return (
             // <FoodCard meal={meal} />;
              <div className='mt-8 w-1/3 md:w-1/3 p-4 bg-gradient-to-r from-violet-300 to-transparent shadow-md  hover:bg-green-200' key={meal.idMeal}>
                     <FoodCard meal={meal}/>
               
               {/* <img src={meal.strMealThumb}/>
                 <Link to={`recipe/${meal.idMeal}`}><h3>{meal.strMeal}</h3></Link>   */}
              </div>
              )
            })}
    </>
  )
      })):"No results found"}
      </>
  )}
  