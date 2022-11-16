import React,{useState,useEffect} from 'react'
import loadingGif from '../Images/loading.gif';
import { useParams } from 'react-router-dom'
import CastPage from './CastPage';
import { Link } from 'react-router-dom';
import RecommSingle from './RecommSingle';
import SingleActorPage from './SingleActorPage';
import SingleMoviePage from './SingleMoviePage';




export default function RecommendationPage() {

    let {id} = useParams();

    let [loading,setLoading]=useState(true)

    let [movie,setMovie] = useState([])

    let url=`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=0e97b8e9a1ede424ddb7a5b3ee9870d0&language=en-US&page=1`

    const api_img="https://image.tmdb.org/t/p/w500/";
    
    async function getMovie(){

        let response=await fetch(url);

        let result=await response.json();

        console.log("from recommendation page",result);
        setMovie(result);

        setLoading(false);

    }



    useEffect(()=>{

        getMovie();

    },[id])
    return (
      

    
      <div>
       <br/> <br/><h2 className='text-2xl text-green-500'>Recommendations</h2>
        <div className='flex flex-wrap justify-between'>
       
       
        {loading? (<Loader/>):(
                movie.results.map((result)=>{
                  return(
                    <div className="w-1/6 mr-4 mt-4 p-5 rounded-md flex flex-wrap flex-col">
                   
                  
              <Link to={`/movie/${result.id}`}><img src={api_img+result.poster_path} className="h-64 mx-auto rounded-md "/></Link>
                  
                    </div>
                  )
                })
              )}
    
    </div>
    <Link to={`/movie/${movie.id}`}>
       <CastPage/>

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