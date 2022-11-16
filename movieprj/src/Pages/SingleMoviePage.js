import React,{useState,useEffect} from 'react'
import loadingGif from '../Images/loading.gif';
import { useParams } from 'react-router-dom'
import RecommendationPage from './RecommendationPage';
import { Link } from 'react-router-dom';





export default function SingleMoviePage(props) {

    let {id} = useParams();

    let [loading,setLoading]=useState(true)

    let [movie,setMovie] = useState([])

    let url=`https://api.themoviedb.org/3/movie/${id}?api_key=0e97b8e9a1ede424ddb7a5b3ee9870d0&language=en-US`



    async function getMovie(){

        let response=await fetch(url);

        let result=await response.json();

        console.log("from single movie page",result);
        setMovie(result);

        setLoading(false);

    }



    useEffect(()=>{

        getMovie();

    },[id])

    return (

        <div className="max-w-5xl mx-auto mt-12">
    
            {loading? (<Loader/>):(
    
                <div className="flex space-x-5">
    
                    <div className="w-1/2">
                    <img src={"https://image.tmdb.org/t/p/w500/"+movie.backdrop_path} alt={movie.title} className=" h-96 mx-auto rounded-2xl "/>
                    </div>
                    <div className='w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-2'>
                        <h1 className="text-3xl">{movie.title}</h1>
                      <p> {movie.runtime}m &nbsp; {movie.status}  &nbsp; {movie.vote_average}</p>
                        
                        <br></br>
                        <p className="text-yellow-900 font-semibold"> {movie.tagline}</p>
                        <br/>
                         <p>Original Language:{movie.original_language}</p>
                     <br/>
            
                        <h2 className="text-green-900 font-bold">{movie.overview} </h2>

                        <br/>
                       
                        
            
                       
    
                    </div>
    
                </div>
    
        
               
    
            )}
        
          
    <Link to={`/movie/${movie.id}`}>
       <RecommendationPage/>

    </Link>
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
      