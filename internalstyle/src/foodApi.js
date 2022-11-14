import React,{useEffect, useState} from 'react';
import loadingGif from './loading.gif';
import FoodCard from "./FoodCard";


export default function App(){

  let apiUrl="https://www.themealdb.com/api/json/v1/1/search.php?s=chicken";
  
  let [loading, setLoading] = useState(true);
  let [meals, setMeals] = useState([]);
  let [error, setError] = useState(null);

  async function getNewData() {
    //fetch
    let response = await fetch(apiUrl);
    console.log("Response from API:", response);
    let result = await response.json();
    console.log(result);
    setMeals(result);
    setLoading(false);
  }

  function handleSearch() {
    if(setMeals === ""){
      window.alert("Please search item")
      return;
    }else{
      console.log()
    }
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
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-7xl mx-auto bg-lime-100">
          <form>
          <input id={meals.StrMeal} onChange={(event)=>{
            setMeals(event.target.value)
          }} type="text" placeholder="Enter the item" />
          <button onClick={handleSearch}>Search</button>
    
        </form>
          <div className="flex flex-wrap">
            {meals.meals.map((meal) => {
              return <FoodCard meal={meal} />;
            })}
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
  