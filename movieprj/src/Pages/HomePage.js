import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import loadingGif from '../Images/loading.gif';
import MovieCard from "../MovieCard";
import SearchPage from './SearchPage';



export default function HomePage(){

  let apiUrl="https://api.themoviedb.org/3/movie/popular?api_key=0e97b8e9a1ede424ddb7a5b3ee9870d0&language=en-US&page=1";

  let [searchTerm,setSearchTerm]= useState();
  let [loading, setLoading] = useState(true);
  let [movies, setMovies] = useState([]);
  let [error, setError] = useState(null);

  async function getNewData() {
   
    setLoading(true);
    

    let response = await fetch(apiUrl);
    console.log("Response from API:", response);
    let data = await response.json();
    console.log(data);
    setMovies(data);
    setLoading(false);
  }



  //will only run once when the component is loaded
  useEffect(() => {
    getNewData();
  }, []);

 const searchMovie=(evt)=>{
      
    
     
      apiUrl = "https://api.themoviedb.org/3/search/movie?api_key=82dee22856e0d0ac5f767ec6fb845efc&language=en-US&query="+searchTerm;
       console.log("searching")
       setMovies(apiUrl);
       getNewData();
       setSearchTerm(" ") 
      
  }  
  
  return (
    
  
    <>
    <br></br>
      <header className="w-full text-blue-800 text-3xl  text-center">
     <marquee>  Movie Finder...</marquee>
      </header>
    
    
    <br/>
    <br/>
   <input type="text" value={searchTerm} onChange={(event)=>{
              setSearchTerm(event.target.value) 
          }}  placeholder="Search for movie,...." className="border inline w-1/2 text-center ml-20 rounded-xl" />&nbsp;
       <button onClick={searchMovie} className="bg-violet-400 p-2 rounded-2xl shadow-md">Search</button> 

<br/><br/>

{/*<SearchPage/> */}
    
          <div className='bg-cyan-700 max-w-7xl mx-auto flex flex-wrap justify-between'>
              {loading? (<Loader/>):(
           (movies.results.length< 1)?<p className="text-xl text-green-500 text-center">No results found</p> :  movies.results.map((result)=>{
                  return(
                    <MovieCard key={result.id} result={result}/> 
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

