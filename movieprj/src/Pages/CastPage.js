import React,{useState,useEffect} from 'react'
import loadingGif from '../Images/loading.gif';
import { useParams } from 'react-router-dom'
import Profile from '../Images/profile.jfif'
import { Link } from 'react-router-dom';





export default function CastPage() {

    let {id} = useParams();

    let [loading,setLoading]=useState(true)

    let [movie,setMovie] = useState([])

    let url=`https://api.themoviedb.org/3/movie/${id}/credits?api_key=0e97b8e9a1ede424ddb7a5b3ee9870d0&language=en-US`;

    const api_img="https://image.tmdb.org/t/p/w500/";
    
    async function getMovie(){

        let response=await fetch(url);

        let result=await response.json();

        console.log("from cast page",result);
        setMovie(result);

        setLoading(false);

    }



    useEffect(()=>{

        getMovie();

    },[])
    return (
      

    
      <div>
       <br/> <br/><h2 className='text-2xl text-violet-500'>Cast and Crew</h2>
        <div className='flex flex-wrap justify-between'>
       
       
        {loading? (<Loader/>):(
                movie.cast.map((cast)=>{
                  return(
                    <div className="w-1/6 bg-green-200 border border-transparent shadow-lg mr-4 mt-4 p-5 rounded-md flex flex-wrap flex-col">
                   
                  
                    <img src={(api_img+cast.profile_path)? (api_img+cast.profile_path): ("https://via.placeholder.com/500")} className="h-64 mx-auto rounded-md "/>
                   
                  <Link to={`/person/${cast.id}`}>    <p className="text-green-700 font-bold hover:text-orange-600">{cast.name}</p></Link> 
                      <p>Character:{cast.character}</p>
              
                  
                    </div>
                  )
                })
        )}
      
        
    
            <div className='flex flex-wrap justify-between'></div>
            {loading? (<Loader/>):(
              movie.crew.map((crew)=>{
                return(
                  <div className="w-1/6 bg-blue-200 border border-transparent shadow-lg mr-4 mt-4 p-6 rounded-md flex-col">
                 
                
                  <img src={(api_img+crew.profile_path)? (api_img+crew.profile_path): ("https://via.placeholder.com/500")} className="h-64 mx-auto rounded-md "/>
                    
                    <p>{crew.name}</p>
                    <p>{crew.department}</p>
                    <p>Job:{crew.job}</p>

            
                
                  </div>
                  )
                })
              )}
          
    </div>

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