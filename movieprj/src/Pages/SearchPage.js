import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import loadingGif from '../Images/loading.gif';
import MovieCard from '../MovieCard';


export default function SearchPage() {

let [search,setSearchTerm]= useState([]);
  let [results,setResults] = useState([]);
  let [loading,setLoading] = useState(true);
 
const url = `https://api.themoviedb.org/3/search/movie?api_key=994e930db9f1b644d8168e45d02364c6&language=en-US&query=+${search}+%7D&page=1&include_adult=false`
  async function getSearch(){
    let response = await fetch(url);
    let data = await response.json()
  
    setResults(data);
    setLoading(false)
  }

  useEffect(()=>{
    getSearch()
  },[])

  return (
    
      <div>
          <div className='mt-10 ml-80 items-start text-center w-6/12'> <input type="text" value={search} onChange={(event)=>{
              setSearchTerm(event.target.value)
          }} placeholder="Search for a movie" className="border inline items-center " />&nbsp;
          <button onClick={getSearch} className="bg-sky-900 p-2 rounded-md  text-white"><span className='items-center'>Search</span></button>
          </div>

          <div>
           
          {loading? (
        <Loader />
      ) : (
        <div className='max-w-7xl mx-auto flex flex-wrap justify-between'>
         <SearchTerm results={results}/>
         </div>
      )}

    </div>
          </div>

      
   
  )
}
function Loader(){
    return(
        <img src={loadingGif} alt="Loading" className="w-24 mx-auto mt-12" />
    )
}
function SearchTerm(props) {
    return(
        <>
         {props.results.results.map((result) => {
                  return (
                 
                 <div className='w-1/5 space-x-4 flex flex-wrap'>
                 <MovieCard key={result.id} result={result}/>
                   
                  </div>
                  )
                })}
                {/* {props.results.results? (props.results.results.map((result)=>{
                  return(
                    <>
                    {props.results.results.map((result) => {
                          return (
                         
                          <div>
                         <MovieCard key={result.id} result={result}/>
                           
                          </div>
                          )
                        })}
                     </>
              )
                  })):"No results found"} */}
                  </>
        
            )
        }
        