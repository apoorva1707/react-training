import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import loadingGif from '../Images/loading.gif';
import ProductCard from "../ProductCard";


export default function HomePage(){

  let apiUrl="https://fakestoreapi.com/products/";
  
  let [searchTerm,setSearchTerm]= useState("");
  let [loading, setLoading] = useState(true);
  let [items, setItems] = useState([]);
  let [error, setError] = useState(null);

  async function getNewData() {
    //set loading to true
    setLoading(true);
    //fetch

    let response = await fetch(apiUrl+searchTerm);
    console.log("Response from API:", response);
    let result = await response.json();
    console.log(result);
    setItems(result);
    setLoading(false);
  }



  //will only run once when the component is loaded
  useEffect(() => {
    getNewData();
  }, []);

  return (
    
  
    <>
    <br></br>
      <header className="w-full text-red-400 text-3xl  text-center">
        Browse Products!!!
      </header>
    
    <div className='max-w-7xl mx-auto flex  flex-wrap justify-between p-4'>
      {loading? (<Loader/>):(
        items.map((item)=>{
          return(
            <ProductCard key={item.id} item={item}/>
          )
        })
      )}
    
    </div>
    </>
  )
}
    


function Loader() {
  return (
    <>
      <img src={loadingGif} alt="Loading" className="w-24 mx-auto mt-12" />
    </>
  );
}

